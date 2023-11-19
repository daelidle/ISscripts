class Prices {
    API_REFRESH_RATE = 10 * 60 * 1000;
    cachedPrices;
    items;
    apiUpdateTimer;

    constructor() {
        this.cachedPrices = {};
        this.getPriceData();
    }

    async getPriceData() {
        const apiData = await this.getApiPriceData();
        this.cachedPrices = apiData.priceData;
        this._exposeUpdatedPrices();

        const nextUpdateDelta = apiData.nextUpdate - Date.now();
        this.apiUpdateTimer = setTimeout(() => {
            this.getPriceData();
        }, nextUpdateDelta);
    }

    async getApiPriceData() {
        const apiEndPoint = "/api/market/manifest";
        const priceData = {};
        const fallbackNextUpdate = new Date(Date.now() + this.API_REFRESH_RATE);
        let nextUpdate = undefined;

        try {
            const response = await getJSON(apiEndPoint);
            if (response.status.toLowerCase().includes("success")) {
                const apiPriceData = response['manifest'];
                apiPriceData.forEach(data => {
                    if (!priceData[data.itemID]) priceData[data.itemID] = {};
                    priceData[data.itemID][data.league] = data.minPrice;
                });
            }
            if (response.timestamp && response.timestamp.length > 0) {
                const lastUpdate = new Date(response.timestamp);
                const apiNextUpdate = new Date(lastUpdate.getTime() + (this.API_REFRESH_RATE * 2) + (10 * 1000));
                if (apiNextUpdate - Date.now() < 0) {
                    console.log(`[DaelIS][WARN] Api refresh rate changed? At current rate it should have updated at ${apiNextUpdate.toLocaleString()}. Last API update was at ${lastUpdate.toLocaleString()}. Fallback refreshing at ${fallbackNextUpdate.toLocaleString()}`);
                } else {
                    nextUpdate = apiNextUpdate;
                }
            }
        } catch (e) {
            console.log("[DaelIS][WARNING] Couldn't get price data from API");
            console.log(e);
        }

        if (!nextUpdate) nextUpdate = fallbackNextUpdate;
        return {priceData, nextUpdate};
    }

    _exposeUpdatedPrices() {
        window.ISprices = this.cachedPrices;
    }

    cancelUpdate() {
        clearTimeout(this.apiUpdateTimer);
    }
}