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
        "NoGatheringIronman": false
    }

    constructor() {
        IdlescapeSocketListener.attach();
        this._configurationLoad();

        this.bannedExtensions = ['State', 'Prices', 'Tooltip'];
        this.isGameReady = false;
        this.extensions = {};
        this.activeExtensions = {};
        this.state = new State();
        this.prices = new Prices();
        this.configUi = null;
        this.gameData = new IdlescapeGameData();
        this.setupSocketListener();
        onGameReady(() => this.onFirstGameReady());
    }

    addExtension(extension) {
        if (!(this.bannedExtensions.includes(extension.name))) {
            this.extensions[extension.name] = extension;
            if (this.config[extension.name]) this.activeExtensions[extension.name] = new extension(this);
        }
    }

    getPlayerState(){
        return this.state.state;
    }

    getItemPrices(){
        return this.prices.cachedPrices;
    }

    generateTooltip(item, compactVersion = false){
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
        const callback = function(mutationsList, observer) {
            const loadingAnimation = document.getElementsByClassName("loading-animation");
            if (loadingAnimation.length > 0) {
                that.isGameReady = false;
                onGameReady(() => that.onGameReady(false));
            }
        };

        const gameContentContainer = document.getElementsByClassName("game-content")[0];
        const config = {attributes: true, childList: true, subtree: true };
        const observer = new MutationObserver(callback);
        observer.observe(gameContentContainer, config);
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

    onFirstGameReady(){
        this.setupDisconnectTracker();
        this.tooltip = new Tooltip(this);
        this.configUi = new DaelISConfigUI(this);
        this.configUi.injectMenuOption();
        this.tooltip.injectCSS();
        this.onGameReady(true);
    }

    _configurationLoad(){
        this.config = loadConfig(this.LocalStorageConfigurationKey);
        if (this.config === null) {
            this.config = this.defaultConfiguration;
            this._configurationSave();
        }
    }

    _configurationSave(){
        saveConfig(this.LocalStorageConfigurationKey, this.config);
    }
}