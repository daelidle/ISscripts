class DaelIS {
    config;
    activeExtensions;
    extensions;
    bannedExtensions;
    state;
    configUi;

    LocalStorageConfigurationKey = "DaelISConfig";
    defaultConfiguration = {
        "DisplayPricesInventory": true,
        "ResourceTracker": true,
        "InventoryFilter": true,
        "LoadoutViewer": true,
        "DamageMeter": false,
        "NoGatheringIronman": false
    }

    constructor() {
        IdlescapeSocketListener.attach();
        this._configurationLoad();

        this.bannedExtensions = ['State'];
        this.extensions = {};
        this.activeExtensions = {};
        this.state = new State();
        this.configUi = null;
        this.setupSocketListener();
        onGameReady(() => this.onGameReady());
        onGameReady(() => this.setupDisconnectTracker());
    }

    addExtension(extension) {
        if (!(this.bannedExtensions.includes(extension.name))) {
            this.extensions[extension.name] = extension;
            if (this.config[extension.name]) this.activeExtensions[extension.name] = new extension(this);
        }
    }

    setupSocketListener() {
        let attachToSocket = setInterval(() => {
            if (typeof window.IdlescapeListener !== "undefined") {
                clearInterval(attachToSocket);
                window.IdlescapeListener.messages.addEventListener("message", message => this.onMessage(message));
                window.IdlescapeListener.messages.addEventListener("connected", () => this.onConnect());
                window.IdlescapeListener.messages.addEventListener("disconnected", () => this.onDisconnect());
                console.log('DaelIS: Attached to IdlescapeSocketListener');
            }
        }, 100);
    }

    setupDisconnectTracker() {
        const that = this;
        const callback = function(mutationsList, observer) {
            const loadingAnimation = document.getElementsByClassName("loading-animation");
            if (loadingAnimation.length > 0) {
                onGameReady(() => that.onGameReady());
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
        Object.values(this.activeExtensions).forEach(extension => {
            if (typeof (extension.onMessage) == "function") {
                extension.onMessage(message);
            }
        });
    }

    onGameReady() {
        if (this.configUi === null) this.configUi = new DaelISConfigUI(this);
        this.configUi.injectMenuOption();
        Object.values(this.activeExtensions).forEach(extension => {
            if (typeof (extension.onGameReady) == "function") {
                extension.onGameReady();
            }
        });
    }

    _configurationLoad(){
        this.config = loadConfig(this.LocalStorageConfigurationKey);
        if (this.config === null) {
            this.config = this.defaultConfiguration;
            saveConfig(this.LocalStorageConfigurationKey, this.config);
        }
    }

    _configurationSave(){
        saveConfig(this.LocalStorageConfigurationKey, this.config);
    }
}