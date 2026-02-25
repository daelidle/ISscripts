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

        const inventoryType = message.data['inventory'];
        const inventory = this.state[inventoryType];
        for (const change of message.data['changedItems']) {
            const action = change['job']; // 'ADD' | 'MODIFY' | 'REMOVE';

            switch (action) {
                case "ADD":
                    inventory.push(change.item);
                    break;
                case "MODIFY":
                    const itemId = change.inventoryItemId ?? change.item?.inventoryItemId;
                    const index = inventory.findIndex((inventoryItem) => inventoryItem.inventoryItemId === itemId);
                    if (index !== -1) {
                        if (change.changes) {
                            Object.assign(inventory[index], change.changes);

                            if (!inventory[index].stackSize) {
                                inventory.splice(index, 1);
                            }
                        } else if (change.item) {
                            if (change.item.stackSize) {
                                inventory[index] = change.item;
                            } else {
                                inventory.splice(index, 1);
                            }
                        }
                    }
                    break;
                case 'REMOVE': {
                    const itemId = change.inventoryItemId ?? change.item?.inventoryItemId;
                    const index = inventory.findIndex((item) => item.inventoryItemId === itemId);
                    if (index !== -1) {
                        inventory.splice(index, 1);
                    }
                    break;
                }
                default:
                    console.warn(`[DaelIS][WARN] Unknown inventory action: ${action}`);
                    break;
            }
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