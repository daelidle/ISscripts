class LoadoutConfig {
    localStorageKeyPrefix;
    storageKey;
    username;

    alias;
    loadouts = {};

    constructor() {
        this.username = '';
        this.localStorageKeyPrefix = "daelis_loadouts";
        this.storageKey = '';
    }

    load(username) {
        this.username = username;
        this.storageKey = `${this.localStorageKeyPrefix}_${username}`;
        const storedData = localStorage.getItem(this.storageKey);
        if (storedData === null) {
            this.alias = {};
            this.save();
        } else {
            const config = JSON.parse(storedData);
            this.alias = config.alias;
        }
        return this;
    }


    save() {
        const config = {'alias': this.alias};
        localStorage.setItem(this.storageKey, JSON.stringify(config));
    }
}