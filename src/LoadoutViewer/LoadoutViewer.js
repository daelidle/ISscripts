class LoadoutViewer {

    ui;
    config;

    constructor() {
        this.config = new LoadoutConfig();
        this.ui = new LoadoutUI(this.config);
    }

    onGameReady(isFirstGameReady) {
        this.ui.setupUI(isFirstGameReady)
    }

    onMessage(message){
        switch (message.event){
            case "update player":
                this.parseUpdatePlayerMessage(message);
                break;
            default:
                break;
        }
    }

    parseUpdatePlayerMessage(message){
        if (message.data['portion'] === "all") {
            this.config.load(message.data['value']['username']);
            this._processLoadoutsMessage(message.data['value']['loadouts']);
        } else if (Array.isArray(message.data['portion']) && message.data['portion'].includes("loadouts")) {
            this._processLoadoutsMessage(message.data['value']);
        }
    }

    _processLoadoutsMessage(loadouts){
        this.config.gearLoadouts = {};
        this.config.foodLoadouts = {};
        loadouts.forEach(item=> {
            if (item.loadout_id > 0) {
                if (!(item.loadout_id in this.config.gearLoadouts)) this.config.gearLoadouts[item.loadout_id] = [];
                this.config.gearLoadouts[item.loadout_id].push(item);
            } else {
                if (!(item.loadout_id in this.config.foodLoadouts)) this.config.foodLoadouts[item.loadout_id] = [];
                this.config.foodLoadouts[item.loadout_id].push(item);
            }
        })
    }
}