class LoadoutConfig {
    storageKey;
    daelis;

    alias;

    constructor(daelis) {
        this.daelis = daelis;
        this.storageKey = '';
    }

    load() {
        const localStorageKeyPrefix = "daelis_loadouts";
        this.storageKey = `${localStorageKeyPrefix}_${this.daelis.getPlayerState().username}`;
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