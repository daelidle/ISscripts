class MeterConfig {
    storageKey;

    showActivitySummary;
    daelis;

    constructor(daelis) {
        this.storageKey = '';
        this.daelis = daelis;
    }

    load() {
        const localStorageKeyPrefix = "daelis_meter";
        this.storageKey = `${localStorageKeyPrefix}_${this.daelis.getPlayerState().username}`;
        const storedData = localStorage.getItem(this.storageKey);
        if (storedData === null) {
            this.showActivitySummary = false;
            this.save();
        } else {
            const config = JSON.parse(storedData);
            this.showActivitySummary = config.showActivitySummary;
        }
        return this;
    }

    save() {
        const config = {'showActivitySummary': this.showActivitySummary};
        localStorage.setItem(this.storageKey, JSON.stringify(config));
    }
}