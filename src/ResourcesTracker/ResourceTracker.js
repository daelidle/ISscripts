class ResourceTracker {
    config;

    constructor(config) {
        this.config = config;
        let attachToSocket = setInterval(()=> {
            if( typeof window.IdlescapeListener !== "undefined" ){
                clearInterval(attachToSocket);
                window.IdlescapeListener.messages.addEventListener("message", message => this.parseSocketMessage(message));
                console.log('Resources Tracker Summary: Attached to IdlescapeSocketListener');
            }
        }, 100);
    }

    parseSocketMessage(message){
        switch (message.event){
            case "update player":
                this.parseUpdatePlayerMessage(message);
                break;
            case "update inventory":
                this.parseUpdateInventoryMessage(message);
                break;
            default:
                break;
        }
    }

    parseUpdatePlayerMessage(message){
        if (message.data['portion'] === "all") {
            this._initialInventoryUpdate(message.data['value']);
        } else if (Array.isArray(message.data['portion']) && message.data['portion'].includes("equipment")) {
            for (const [position, item] of Object.entries(message.data['value'])) {
                this._updateEquipment(position, item);
            }
        }
    }

    parseUpdateInventoryMessage(message){
        let action = message.data['action'];
        if (action === "update" || action === "add" || action === "delete") {
            let resource = message.data['item'];
            let inventoryType = message.data['inventory'];
            this._updateCurrentResources(resource, inventoryType);
        } else {
            console.log(`Unknown update inventory message type ${message.data}`);
        }
    }

    _updateEquipment(position, item){
        let previousItemSignature = (this.config.currentEquipment)[position];
        let newItemSignature = generateItemSignature(item);
        if (previousItemSignature !== newItemSignature){
            if (previousItemSignature !== '') this.config.resources[previousItemSignature].currentEquipped = 0;
            if (newItemSignature !== '') this.config.resources[newItemSignature].currentEquipped = 1;
            (this.config.currentEquipment)[position] = newItemSignature;
            this.config.save();
        }
    }

    _updateCurrentResources(item, inventoryType){
        let itemSignature = generateItemSignature(item);
        if (this.config.resources[itemSignature] === undefined) this.config.resources[itemSignature] = new Resource();
        if (inventoryType === 'stockpile') this.config.resources[itemSignature].currentStockPile = item['stackSize'];
        else if (inventoryType === 'vault') this.config.resources[itemSignature].currentVault = item['stackSize'];
        else {
            console.log(`New Inventory Type! ${inventoryType} ->`);
            console.log(item);
        }
    }

    _initialInventoryUpdate(message){
        this.config.load(message.username);
        const needsInitialValues = (Object.keys(this.config.resources).length === 0);

        const inventoryItems = message['stockpile'];
        const vaultItems = message['vault'];
        const equipment = message['equipment'];

        this._populateInitialItemsStackSize(inventoryItems, 'stockpile', needsInitialValues);
        this._populateInitialItemsStackSize(vaultItems, 'vault', needsInitialValues);
        this._populateInitialItemsStackSize(equipment, 'equipment', needsInitialValues);
        this.config.save();
    }

    _populateInitialItemsStackSize(itemDictionary, inventoryType, needsInitialValues){
        for (const [id, item] of Object.entries(itemDictionary)) {
            let itemSignature = generateItemSignature(item);
            if (this.config.resources[itemSignature] === undefined) this.config.resources[itemSignature] = new Resource();
            if (inventoryType === 'stockpile') {
                if (needsInitialValues) this.config.resources[itemSignature].initialStockPile = item['stackSize'];
                this.config.resources[itemSignature].currentStockPile = item['stackSize'];
            } else if (inventoryType === 'vault'){
                if (needsInitialValues) this.config.resources[itemSignature].initialVault = item['stackSize'];
                this.config.resources[itemSignature].currentVault = item['stackSize'];
            } else if (inventoryType === 'equipment'){
                // equipment slot can be empty
                if (itemSignature.length > 0){
                    if (needsInitialValues) this.config.resources[itemSignature].initialEquipped = item['stackSize'];
                    this.config.resources[itemSignature].currentEquipped = item['stackSize'];
                    (this.config.currentEquipment)[id] = itemSignature;
                }
            } else console.log(`New Inventory Type! ${inventoryType}`);
        }
    }
}