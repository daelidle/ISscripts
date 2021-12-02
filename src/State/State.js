class State {

    state = {};

    constructor() {
        if (window.ISstate === undefined) {
            this._applyNewState();
            let attachToSocket = setInterval(()=> {
                if( typeof window.IdlescapeListener !== "undefined" ){
                    clearInterval(attachToSocket);
                    window.IdlescapeListener.messages.addEventListener("message", message => this.parseSocketMessage(message));
                    console.log('Idlescape State: Attached to IdlescapeSocketListener');
                }
            }, 100);
        }
    }

    parseSocketMessage(message){
        switch (message.event){
            case "update farming plot size":
                break;
            case "update players online":
                break;
            case "update monster":
                break;
            case "update player":
                this.parseUpdatePlayerMessage(message);
                break;
            case "update inventory":
                this.parseUpdateInventoryMessage(message);
                break;
            default:
                if (message.event.includes("update")) console.log(`Unknown message: ${message.event} -> ${JSON.stringify(message.data)}`);
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
            return;
        }
        this._applyNewState();
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
        this._applyNewState();
    }

    _setInitialState(initialState) {
        try {
            initialState['2fa_secret'] = null;
            initialState['email'] = null;
            initialState['settings']['security']['email'] = null;
        } catch {}

        this.state = initialState;
    }

    // Switch statement is straight from IS implementation, as Redux state is immutable, we can have any type passed as newState.
    // But if we know that newState is a dict we can take a cleaner approach.
    _updateState(portion, newState) {
        if (isDictionary(newState)){
            this._updateStateWithDict(portion, newState);
            return;
        }

        switch (portion.length) {
            case 1:
                this.state[portion[0]] = newState;
                break;
            case 2:
                this.state[portion[0]] || (this.state[portion[0]] = {});
                this.state[portion[0]][portion[1]] = newState;
                break;
            case 3:
                this.state[portion[0]] || (this.state[portion[0]] = {});
                this.state[portion[0]][portion[1]] || (this.state[portion[0]][portion[1]] = {});
                this.state[portion[0]][portion[1]][portion[2]] = newState;
                break;
            case 4:
                this.state[portion[0]] || (this.state[portion[0]] = {});
                this.state[portion[0]][portion[1]] || (this.state[portion[0]][portion[1]] = {});
                this.state[portion[0]][portion[1]][portion[2]] || (this.state[portion[0]][portion[1]][portion[2]] = {});
                this.state[portion[0]][portion[1]][portion[2]][portion[3]] = newState;
                break;
            case 5:
                this.state[portion[0]] || (this.state[portion[0]] = {});
                this.state[portion[0]][portion[1]] || (this.state[portion[0]][portion[1]] = {});
                this.state[portion[0]][portion[1]][portion[2]][portion[3]] || (this.state[portion[0]][portion[1]][portion[2]][portion[3]] = {});
                this.state[portion[0]][portion[1]][portion[2]][portion[3]][portion[4]] = newState;
                break;
            default:
                console.log(`Received an update player message with portion size ${portion.length}: ${JSON.stringify(portion)}`);
        }
    }

    _updateStateWithDict(portion, newState){
        let statePortion = this.state;
        portion.forEach(portion => {
            if (!(portion in statePortion)) statePortion[portion] = {};
            statePortion = statePortion[portion]
        });
        for (const prop of Object.getOwnPropertyNames(statePortion)) {
            delete statePortion[prop];
        }
        for (const [key, value] of Object.entries(newState)) {
            statePortion[key] = value;
        }
    }

    _applyNewState(){
        window.ISstate = this.state;
    }
}