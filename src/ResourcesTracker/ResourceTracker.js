class ResourceTracker {
    config;
    ui;

    constructor(daelis) {
        this.config = new TrackerConfig(daelis);
        this.ui = new TrackerUI(this.config, this);
    }

    onGameReady(isFirstGameReady) {
        if (isFirstGameReady) this._readInitialResources();
        this.ui.setupUI();
    }

    _readInitialResources() {
        this.config.load();
        const needsInitialValues = (Object.keys(this.config.resources).length === 0);
        if (needsInitialValues){
            const state = this.config.daelis.getPlayerState();
            this._populateInitialItemsStackSize(state.stockpile, 'stockpile');
            this._populateInitialItemsStackSize(state.vault, 'vault');
            this._populateInitialItemsStackSize(state.equipment, 'equipment');
            this._populateInitialItemsStackSize(state.tacklebox, 'tacklebox');
            this.config.save();
        }
    }

    _populateInitialItemsStackSize(itemDictionary, inventoryType){
        for (const item of Object.values(itemDictionary)) {
            let itemSignature = generateItemSignature(item);
            if (this.config.resources[itemSignature] === undefined) this.config.resources[itemSignature] = new Resource();
            switch (inventoryType) {
                case 'stockpile':
                    this.config.resources[itemSignature].initialStockPile = item['stackSize'];
                    break;
                case 'vault':
                    this.config.resources[itemSignature].initialVault = item['stackSize'];
                    break;
                case 'equipment':
                    if (itemSignature.length > 0) this.config.resources[itemSignature].initialEquipped = item['stackSize'];
                    break;
                case 'tacklebox':
                    this.config.resources[itemSignature].initialTackleBox = item['stackSize'];
                    break;
                default:
                    console.log(`New Inventory Type! ${inventoryType}`);
            }
        }
    }

    readCurrentResources() {
        const state = this.config.daelis.getPlayerState();
        this._populateCurrentItemsStackSize(state.stockpile, 'stockpile');
        this._populateCurrentItemsStackSize(state.vault, 'vault');
        this._populateCurrentItemsStackSize(state.equipment, 'equipment');
        this._populateCurrentItemsStackSize(state.tacklebox, 'tacklebox');
    }

    _populateCurrentItemsStackSize(itemDictionary, inventoryType){
        for (const [id, item] of Object.entries(itemDictionary)) {
            let itemSignature = generateItemSignature(item);
            if (this.config.resources[itemSignature] === undefined) this.config.resources[itemSignature] = new Resource();
            switch (inventoryType) {
                case 'stockpile':
                    this.config.resources[itemSignature].currentStockPile = item['stackSize'];
                    break;
                case 'vault':
                    this.config.resources[itemSignature].currentVault = item['stackSize'];
                    break;
                case 'equipment':
                    if (itemSignature.length > 0) this.config.resources[itemSignature].currentEquipped = item['stackSize'];
                    break;
                case 'tacklebox':
                    this.config.resources[itemSignature].currentTackleBox = item['stackSize'];
                    break;
                default:
                    console.log(`New Inventory Type! ${inventoryType}`);
            }
        }
    }
}