class Resource {
    initialStockPile = 0;
    initialVault = 0;
    currentStockPile = 0;
    currentVault = 0;
    initialEquipped = 0;
    currentEquipped = 0;

    gain(){
        return (this.currentStockPile - this.initialStockPile) + (this.currentVault - this.initialVault) + (this.currentEquipped - this.initialEquipped);
    }

    reset(){
        this.initialStockPile = this.currentStockPile;
        this.initialVault = this.currentVault;
        this.initialEquipped = this.currentEquipped;
    }
}

class ResourceTracker {
    resources;
    isInitialInventoryPopulated = false;
    currentEquipment = {ring: '', body: '', helm: '', legs: '', hatchet: '', hoe: '', pickaxe: '', boots: '', gloves: '', necklace: '', shield: '', weapon: ''};

    constructor(resources) {
        this.resources = resources;
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
        let previousItemSignature = (this.currentEquipment)[position];
        let newItemSignature = generateItemSignature(item);
        if (previousItemSignature !== newItemSignature){
            if (previousItemSignature !== '') this.resources[previousItemSignature].currentEquipped = 0;
            if (newItemSignature !== '') this.resources[newItemSignature].currentEquipped = 1;
            (this.currentEquipment)[position] = newItemSignature;
        }
    }

    _updateCurrentResources(item, inventoryType){
        let itemSignature = generateItemSignature(item);
        if (this.resources[itemSignature] === undefined) this.resources[itemSignature] = new Resource();
        if (inventoryType === 'stockpile') this.resources[itemSignature].currentStockPile = item['stackSize'];
        else if (inventoryType === 'vault') this.resources[itemSignature].currentVault = item['stackSize'];
        else {
            console.log(`New Inventory Type! ${inventoryType} ->`);
            console.log(item);
        }
    }

    _initialInventoryUpdate(message){
        if (this.isInitialInventoryPopulated) return;

        const inventoryItems = message['stockpile'];
        const vaultItems = message['vault'];
        const equipment = message['equipment'];

        this._populateInitialItemsStackSize(inventoryItems, 'stockpile');
        this._populateInitialItemsStackSize(vaultItems, 'vault');
        this._populateInitialItemsStackSize(equipment, 'equipment');
        this.isInitialInventoryPopulated = true;
    }

    _populateInitialItemsStackSize(itemDictionary, inventoryType){
        for (const [id, item] of Object.entries(itemDictionary)) {
            let itemSignature = generateItemSignature(item);
            if (this.resources[itemSignature] === undefined) this.resources[itemSignature] = new Resource();
            if (inventoryType === 'stockpile') {
                this.resources[itemSignature].initialStockPile = item['stackSize'];
                this.resources[itemSignature].currentStockPile = item['stackSize'];
            } else if (inventoryType === 'vault'){
                this.resources[itemSignature].initialVault = item['stackSize'];
                this.resources[itemSignature].currentVault = item['stackSize'];
            } else if (inventoryType === 'equipment'){
                // equipment slot can be empty
                if (itemSignature.length > 0){
                    this.resources[itemSignature].initialEquipped = item['stackSize'];
                    this.resources[itemSignature].currentEquipped = item['stackSize'];
                    (this.currentEquipment)[id] = itemSignature;
                }
            } else console.log(`New Inventory Type! ${inventoryType}`);
        }
    }
}