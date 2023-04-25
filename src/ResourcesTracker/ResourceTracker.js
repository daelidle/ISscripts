class ResourceTracker {
    static meta = {name: 'Resource Tracker', description: 'Displays a modal with all the resources variations in the same way as offline progress.', image:'https://raw.githubusercontent.com/daelidle/ISscripts/main/assets/images/ResourcesTracker/meta_image.png'};
    config;
    ui;

    constructor(daelis) {
        this.config = new TrackerConfig(daelis);
        this.daelis = daelis;
    }

    onGameReady(isFirstGameReady) {
        if (isFirstGameReady) this._readInitialResources();
        this.ui = new TrackerUI(this.config, this);
        this.ui.setupUI();
    }

    onExtensionStop(){
        this.ui.removeUI();
        this.config = null;
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
                    console.log(`[DaelIS][WARNING]: New Inventory Type! ${inventoryType}`);
            }
        }
    }

    readCurrentResources() {
        Object.values(this.config.resources).forEach(resource => resource.clearCurrentValues());
        const state = this.config.daelis.getPlayerState();
        this._populateCurrentItemsStackSize(state.stockpile, 'stockpile');
        this._populateCurrentItemsStackSize(state.vault, 'vault');
        this._populateCurrentItemsStackSize(state.equipment, 'equipment');
        this._populateCurrentItemsStackSize(state.tacklebox, 'tacklebox');
    }

    _populateCurrentItemsStackSize(itemDictionary, inventoryType){
        Object.values(itemDictionary).forEach( item => {
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
                    console.log(`[DaelIS][WARNING]: New Inventory Type! ${inventoryType}`);
            }
        });
    }
}