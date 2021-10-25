class TrackerConfig {
    localStorageKeyPrefix;
    storageKey;
    username;

    initialTime;
    resources;
    currentEquipment;

    constructor() {
        this.username = '';
        this.localStorageKeyPrefix = "daelis_tracker";
        this.storageKey = '';
    }

    load(username) {
        this.username = username;
        this.storageKey = `${this.localStorageKeyPrefix}_${username}`;
        const storedData = localStorage.getItem(this.storageKey);
        if (storedData === null) {
            this.resources = {};
            this.initialTime = new Date();
            this.currentEquipment = {ring: '', body: '', helm: '', legs: '', hatchet: '', hoe: '', pickaxe: '', boots: '', gloves: '', necklace: '', shield: '', weapon: ''};
            this.save();
        } else {
            const config = JSON.parse(storedData, this._reviver);
            this.resources = config.resources;
            this.initialTime = config.initialTime;
            this.currentEquipment = config.currentEquipment;
        }
        return this;
    }

    _reviver(key, value) {
        switch (key) {
            case 'initialTime':
                return new Date(value);
            case 'resources':
                const resources = {};
                for (const [signature, resource] of Object.entries(value)) resources[signature] = new Resource().loadFromDict(resource);
                return resources;
            default:
                return value;
        }
    }

    save() {
        const config = {'initialTime': this.initialTime, 'resources': this.resources, 'currentEquipment': this.currentEquipment};
        localStorage.setItem(this.storageKey, JSON.stringify(config));
    }

    reset() {
        this.initialTime = new Date();
        for (const [_, resource] of Object.entries(this.resources)) {
            resource.reset();
        }
        this.save();
    }
}