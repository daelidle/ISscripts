class Prices {
    cachedPrices;
    priceDataRefreshRate;

    constructor() {
        this.cachedPrices = {};
        this.priceDataRefreshRate = 10 * 60 * 1000;
        this._exposeUpdatedPrices();
        this.getPriceData();
        setInterval(() => { this.getPriceData(); }, this.priceDataRefreshRate);
    }

    async getPriceData() {
        this.cachedPrices = await this.getApiPriceData();
        this._exposeUpdatedPrices();
    }

    async getApiPriceData() {
        const apiEndPoint = "/api/market/manifest";
        const priceData = {};

        const manifest = await getJSON(apiEndPoint);
        if (manifest.status.toLowerCase().includes("success")) {
            const apiPriceData = manifest['manifest'];
            apiPriceData.forEach(data => {
                priceData[data["name"]] = data["minPrice"];
            });
        }

        return priceData;
    }

    _exposeUpdatedPrices(){
        window.ISprices = this.cachedPrices;
    }
}