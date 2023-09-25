class DisplayPricesInventory {
    static meta = {name: 'Display Prices Inventory', description: 'Display minimum buy prices on items on inventory, marketplace and scrollcrafting screens', image:'https://raw.githubusercontent.com/daelidle/ISscripts/main/assets/images/DisplayPricesInventory/meta_image.png'};
    daelis;
    observer;
    intervalId;

    constructor(daelis) {
        this.daelis = daelis;
    }

    onGameReady(isFirstGameReady) {
        if (isIronManCharacter()) return;
        this.addMutationObserver();
        this._updateInventoryPrices();
        const refreshRate = 10 * 60 * 1000;
        this.intervalId = setInterval(() => { this._updateInventoryPrices(); }, refreshRate);
    }

    onExtensionStop(){
        this.observer.disconnect();
        clearInterval(this.intervalId);
        Array.from(document.getElementsByClassName("price")).forEach(priceDiv => priceDiv.remove());
    }

    addMutationObserver(){
        const self = this;
        const callback = function(mutationsList, observer) {
            if (document.getElementsByClassName("marketplace-container").length > 0 ||
                document.getElementsByClassName("scrollcrafting-main").length > 0 ||
                document.getElementsByClassName("inventory-panel").length > 0) self._updateInventoryPrices();
        };

        // Observe Play Area DOM changes
        const combineMainAreaContainer = document.getElementsByClassName("play-area-container")[0].parentElement;
        const config = {attributes: true, childList: true, subtree: true };
        this.observer = new MutationObserver(callback);
        this.observer.observe(combineMainAreaContainer, config);
    }

    _updateInventoryPrices() {
        const itemPrices = this.daelis.getItemPrices();
        this.observer.disconnect();
        this._addPriceToInventory(itemPrices);
        this._addPriceToMarketplace(itemPrices);
        this._addPriceToScrollcrafting(itemPrices);
        this.addMutationObserver();
    }

    _addPriceToInventory(priceData) {
        let inventoryDiv = document.getElementsByClassName("inventory-panel");
        if (inventoryDiv.length === 0) return;
        const regex = /\d+(.+)(vault|stockpile|tacklebox)/;
        Array.from(inventoryDiv).forEach(inventory => {
            inventory.querySelectorAll(".item").forEach(item => {
                try{
                    let itemName = regex.exec(item.attributes['data-for'].nodeValue)[1];
                    const price = priceData[itemName];
                    this._addPriceDivToItem(item, price);
                } catch (e) {
                    console.log("[DaelIS][WARNING] Couldn't get item name from inventory item");
                    console.log(item);
                }
            });
        });
    }

    _addPriceToMarketplace(priceData) {
        let marketplaceDiv = document.getElementsByClassName("marketplace-container");
        if (marketplaceDiv.length === 0) return;
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
            newNode.style.top = "-1px";
            newNode.style.left = "2px";
            newNode.style.color = "#ffc107";
            newNode.style.fontSize = "10px";
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