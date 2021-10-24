class Resource {
    initialStockPile = 0;
    initialVault = 0;
    initialEquipped = 0;
    currentStockPile = 0;
    currentVault = 0;
    currentEquipped = 0;

    loadFromDict(values){
        this.initialStockPile = values.initialStockPile;
        this.initialVault = values.initialVault;
        this.initialEquipped = values.initialEquipped;
        this.currentStockPile = values.currentStockPile;
        this.currentVault = values.currentVault;
        this.currentEquipped = values.currentEquipped;
        return this;
    }

    gain(){
        return (this.currentStockPile - this.initialStockPile) + (this.currentVault - this.initialVault) + (this.currentEquipped - this.initialEquipped);
    }

    reset(){
        this.initialStockPile = this.currentStockPile;
        this.initialVault = this.currentVault;
        this.initialEquipped = this.currentEquipped;
    }
}