class State {
    state;
    initialStateReceived;

    constructor() {
        this.state = {};
        this.initialStateReceived = false;
        this._exposeUpdatedState();
    }

    onMessage(message) {
        switch (message.event) {
            case "update:player":
                this.parseUpdatePlayerMessage(message);
                this._exposeUpdatedState();
                break;
            case "update:inventory":
                this.parseUpdateInventoryMessage(message);
                this._exposeUpdatedState();
                break;
            case "update:player:paths":
                this.parseUpdatePlayerPathsMessage(message);
                this._exposeUpdatedState();
                break;
            default:
                break;
        }
    }

    parseUpdatePlayerMessage(message) {
        const messagePortion = message.data['portion'];
        if (messagePortion === "all") {
            this._setInitialState(message.data['value']);
        } else {
            this._updateState(messagePortion, message.data['value']);
        }
    }

    parseUpdatePlayerPathsMessage(message) {
        const portion = message.data['key'];
        const partialState = message.data['value'];
        this._updateStatePartial(portion, partialState);
    }

    parseUpdateInventoryMessage(message) {
        if (!this.initialStateReceived) return;

        const item = message.data['item'];
        const inventoryType = message.data['inventory'];
        const action = message.data['action'];

        if (action === "update" || action === "increase") {
            for (const [position, inventoryItem] of Object.entries(this.state[inventoryType])) {
                if (inventoryItem.id === item.id) this.state[inventoryType][position] = item;
            }
        } else if (action === "delete") {
            this.state[inventoryType] = this.state[inventoryType].filter(inventoryItem => inventoryItem.id !== item.id);
        }
    }

    _setInitialState(initialState) {
        try {
            initialState['2fa_secret'] = null;
            initialState['email'] = null;
            initialState['settings']['security']['email'] = null;
        } catch {
        }

        this.state = initialState;
        this.initialStateReceived = true;
    }

    _updateState(portion, newState) {
        if (!this.initialStateReceived) return;

        this.state[portion] = newState;
    }

    _updateStatePartial(portion, partialState) {
        if (!this.initialStateReceived) return;

        for (const [path, value] of Object.entries(partialState)) {
            const fullPath = `${portion}.${path}`;
            _.set(this.state, fullPath, value);
        }
    }

    _exposeUpdatedState() {
        window.ISstate = this.state;
    }

    isStateInitialized() {
        return this.initialStateReceived;
    }
}