class DaelIS {
    config;
    activeExtensions;
    extensions;
    bannedExtensions;
    state;
    prices;
    tooltip;
    configUi;
    gameData;
    isGameReady;

    LocalStorageConfigurationKey = "DaelISConfig";
    defaultConfiguration = {
        "CustomTooltip.js": true,
        "DisplayPricesInventory": true,
        "ResourceTracker": true,
        "InventoryFilter": true,
        "LoadoutViewer": true,
        "DamageMeter": true,
        "NoGatheringIronman": false,
        "BestiaryExporter": false,
    }

    constructor() {
        IdlescapeSocketListener.attach();
        this._configurationLoad();

        this.bannedExtensions = ['State', 'Prices', 'Tooltip'];
        this.isGameReady = false;
        this.extensions = {};
        this.activeExtensions = {};
        this.state = new State();
        this.configUi = null;
        this.setupSocketListener();
        onGameReady(() => this.onFirstGameReady());
    }

    addExtension(extension) {
        if (!(this.bannedExtensions.includes(extension.name))) {
            this.extensions[extension.name] = extension;
            if (this.config[extension.name]) this.activeExtensions[extension.name] = new extension(this);
        }
    }

    getPlayerState() {
        return this.state.state;
    }

    getItemPrices() {
        const league = this.getPlayerState().league ?? 1;

        const prices = {};
        for (const [itemName, itemLeaguesData] of Object.entries(this.prices.cachedPrices)) {
            for (const [itemLeague, itemPrice] of Object.entries(itemLeaguesData)) {
                if (parseInt(itemLeague) === league) prices[itemName] = itemPrice;
            }
        }

        return prices;
    }

    generateTooltip(item, compactVersion = false) {
        return this.tooltip.generateTooltip(item, compactVersion);
    }

    setupSocketListener() {
        let attachToSocket = setInterval(() => {
            if (typeof window.IdlescapeListener !== "undefined") {
                clearInterval(attachToSocket);
                window.IdlescapeListener.messages.addEventListener("message", message => this.onMessage(message));
                window.IdlescapeListener.messages.addEventListener("connected", () => this.onConnect());
                window.IdlescapeListener.messages.addEventListener("disconnected", () => this.onDisconnect());
                console.log('[DaelIS][INFO]: Attached to IdlescapeSocketListener');
            }
        }, 100);
    }

    setupDisconnectTracker() {
        const that = this;
        const callback = function (mutationsList, observer) {
            const loadingAnimation = document.getElementsByClassName("loading-animation");
            if (loadingAnimation.length > 0) {
                that.isGameReady = false;
                onGameReady(() => that.onGameReady(false));
            }
        };

        const gameContentContainer = document.getElementsByClassName("game-container")[0].parentElement;
        const config = {attributes: true, childList: true, subtree: true};
        const observer = new MutationObserver(callback);
        observer.observe(gameContentContainer, config);
    }

    isGameAreaReady() {
        return this.isGameReady;
    }

    onConnect() {
        Object.values(this.activeExtensions).forEach(extension => {
            if (typeof (extension.onConnect) == "function") {
                extension.onConnect();
            }
        });
    }

    onDisconnect() {
        Object.values(this.activeExtensions).forEach(extension => {
            if (typeof (extension.onDisconnect) == "function") {
                extension.onDisconnect();
            }
        });
    }

    onMessage(message) {
        this.state.onMessage(message);
        if (!this.state.isStateInitialized()) return;

        if (message.event === 'update:player' && message.data['portion'] === 'all') {
            this.onPlayerStateInitialized();
            return;
        }

        Object.values(this.activeExtensions).forEach(extension => {
            if (typeof (extension.onMessage) == "function") {
                extension.onMessage(message);
            }
        });
    }

    onGameReady(isFirstGameReady) {
        if (!this.isGameReady) this.isGameReady = true;

        Object.values(this.activeExtensions).forEach(extension => {
            if (typeof (extension.onGameReady) == "function") {
                extension.onGameReady(isFirstGameReady);
            }
        });
    }

    onPlayerStateInitialized() {
        Object.values(this.activeExtensions).forEach(extension => {
            if (typeof (extension.onPlayerStateInitialized) == "function") {
                extension.onPlayerStateInitialized(this.getPlayerState());
            }
        });
    }

    onFirstGameReady() {
        this.setupDisconnectTracker();
        this.gameData = window.Idlescape.data;
        this.prices = new Prices();
        this.tooltip = new Tooltip(this);
        this.configUi = new DaelISConfigUI(this);
        this.configUi.injectMenuOption();
        this.tooltip.injectCSS();
        this.onGameReady(true);
    }

    startExtension(extensionName) {
        const extension = this.extensions[extensionName];
        const extensionInstance = new extension(this);
        this.activeExtensions[extensionName] = extensionInstance;
        if (typeof (extensionInstance.onGameReady) == "function") extensionInstance.onGameReady(true);
        if (typeof (extensionInstance.onPlayerStateInitialized) == "function") extensionInstance.onPlayerStateInitialized(this.getPlayerState());
    }

    stopExtension(extensionName) {
        const extension = this.activeExtensions[extensionName];
        delete this.activeExtensions[extensionName];
        if (typeof (extension.onExtensionStop) == "function") extension.onExtensionStop();
    }

    _configurationLoad() {
        this.config = loadConfig(this.LocalStorageConfigurationKey);
        if (this.config === null) {
            this.config = this.defaultConfiguration;
            this._configurationSave();
        }
    }

    _configurationSave() {
        saveConfig(this.LocalStorageConfigurationKey, this.config);
    }
}