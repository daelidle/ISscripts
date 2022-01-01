class DisplayPricesInventory {
    priceDataRefreshRate = 10 * 60 * 1000;
    cachedPrices = {};

    onGameReady(isFirstGameReady) {
        if (isIronManCharacter()) return;
        this.addMutationObserver();
        this.getPriceData();
        setInterval(() => { this.getPriceData(); }, this.priceDataRefreshRate);
    }

    addMutationObserver(){
        const self = this;
        const callback = function(mutationsList, observer) {
            if (document.getElementsByClassName("marketplace-content").length > 0) self._updateInventoryPrices();
            if (document.getElementsByClassName("scrollcrafting-main").length > 0) self._updateInventoryPrices();
            if (document.getElementsByClassName("price").length === 0) self._updateInventoryPrices();
        };

        // Observe Play Area DOM changes
        const playAreaContainer = document.getElementsByClassName("play-area-container")[0];
        const inventoryContainer = document.getElementsByClassName("game-right-panel")[0];
        const config = {attributes: true, childList: true, subtree: true };
        const observer = new MutationObserver(callback);
        observer.observe(playAreaContainer, config);
        observer.observe(inventoryContainer, config);
    }

    async getPriceData() {
        this.cachedPrices = await getApiPriceData();
        this._updateInventoryPrices();
    }

    _updateInventoryPrices() {
        this._addPriceToInventory(this.cachedPrices);
        this._addPriceToMarketplace(this.cachedPrices);
        this._addPriceToScrollcrafting(this.cachedPrices);
    }

    _addPriceToInventory(priceData) {
        let inventoryDiv = document.getElementsByClassName("inventory-panel");
        if (inventoryDiv.length === 0) return;
        const regex = /\d+(.+)(vault|stockpile|tacklebox)/;
        inventoryDiv[0].querySelectorAll(".item").forEach(item => {
            let itemName = regex.exec(item.attributes['data-for'].nodeValue)[1];

            const price = priceData[itemName];
            this._addPriceDivToItem(item, price);
        })
    }

    _addPriceToMarketplace(priceData) {
        let marketplaceDiv = document.getElementsByClassName("marketplace-content");
        if (marketplaceDiv.length === 0) return;
        if (document.getElementsByClassName("marketplace-sell-items all-items").length > 0) return;
        marketplaceDiv[0].querySelectorAll(".item-icon").forEach(item => {
            const itemName = item.attributes['alt'].nodeValue;

            item = item.parentNode;
            const price = priceData[itemName];
            this._addPriceDivToItem(item, price);
        })
    }

    _addPriceToScrollcrafting(priceData) {
        let scrollCrafting = document.getElementsByClassName("scrollcrafting-main");
        if (scrollCrafting.length === 0) return;
        scrollCrafting[0].querySelectorAll(".scrollcrafting-image").forEach(item => {
            const itemName = item.attributes['alt'].nodeValue;

            item = item.parentNode;
            const price = priceData[itemName];
            this._addPriceDivToItem(item, price);
        })
    }

    _addPriceDivToItem(item, price){
        if(item.getElementsByClassName("price").length === 0){
            // If the div was not created yet, create it with adapted CSS style and also move down the enchant icon
            const newNode = document.createElement("div");
            newNode.className = "price";
            newNode.style.position = "absolute";
            newNode.style.top = "-4px";
            newNode.style.left = "1px";
            newNode.style.color = "#ffc107";
            newNode.style.fontSize = "11px";
            const lastNode = item.lastElementNode;
            item.insertBefore(newNode, lastNode);
            const enchantNode = item.getElementsByClassName("item-enchant").item(0);
            if (enchantNode != null){
                enchantNode.style.position = "absolute";
                enchantNode.style.top = "8px";
                enchantNode.style.left = "0px";
            }
        }
        if (price !== undefined) item.getElementsByClassName("price").item(0).textContent = price.toLocaleString();
    }
}