class State {
    state;

    constructor() {
        this.state = {};
        this._exposeUpdatedState();
    }

    onMessage(message){
        switch (message.event){
            case "update player":
                this.parseUpdatePlayerMessage(message);
                this._exposeUpdatedState();
                break;
            case "update inventory":
                this.parseUpdateInventoryMessage(message);
                this._exposeUpdatedState();
                break;
            default:
                break;
        }
    }

    parseUpdatePlayerMessage(message){
        const messagePortion = message.data['portion'];
        if (messagePortion === "all") {
            this._setInitialState(message.data['value']);
        } else if (Array.isArray(messagePortion)) {
            this._updateState(messagePortion, message.data['value']);
        } else {
            console.log(`Unknown Update Player message: ${message.data}`);
        }
    }

    parseUpdateInventoryMessage(message){
        const item = message.data['item'];
        const inventoryType = message.data['inventory'];
        const action = message.data['action'];

        if (action === "update"){
            for (const [position, inventoryItem] of Object.entries(this.state[inventoryType])) {
                if (inventoryItem.id === item.id) this.state[inventoryType][position] = item;
            }
        } else if (action === "add") {
            this.state[inventoryType].push(item);
        } else if (action === "delete"){
            this.state[inventoryType] = this.state[inventoryType].filter(inventoryItem => inventoryItem.id !== item.id);
        }
    }

    _setInitialState(initialState) {
        try {
            initialState['2fa_secret'] = null;
            initialState['email'] = null;
            initialState['settings']['security']['email'] = null;
        } catch {}

        this.state = initialState;
    }

    _updateState(portion, newState) {
        let statePortion = this.state;
        for (let i = 0; i < (portion.length-1); i++) {
            if (!(portion[i] in statePortion)) statePortion[portion[i]] = {};
            statePortion = statePortion[portion[i]]
        }
        // We use the last portion to access the state since we don't have pointers in JS, otherwise we would just override statePortion assignment instead of state
        statePortion[portion[portion.length-1]] = newState;
    }

    _exposeUpdatedState(){
        window.ISstate = this.state;
    }
}