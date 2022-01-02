class TrackerConfig {
    storageKey;

    initialTime;
    resources;
    daelis;

    constructor(daelis) {
        this.storageKey = '';
        this.daelis = daelis;
    }

    load() {
        const localStorageKeyPrefix = "daelis_tracker";
        this.storageKey = `${localStorageKeyPrefix}_${this.daelis.getPlayerState().username}`;
        const storedData = localStorage.getItem(this.storageKey);
        if (storedData === null) {
            this.resources = {};
            this.initialTime = new Date();
            this.save();
        } else {
            const config = JSON.parse(storedData, this._reviver);
            this.resources = config.resources;
            this.initialTime = config.initialTime;
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
        const config = {'initialTime': this.initialTime, 'resources': this.resources};
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