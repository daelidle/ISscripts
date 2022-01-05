class Resource {
    initialStockPile = 0;
    initialVault = 0;
    initialEquipped = 0;
    initialTackleBox = 0;
    currentStockPile = 0;
    currentVault = 0;
    currentEquipped = 0;
    currentTackleBox = 0;

    loadFromDict(values){
        this.initialStockPile = values.initialStockPile;
        this.initialVault = values.initialVault;
        this.initialEquipped = values.initialEquipped;
        if (values.initialTackleBox !== undefined){
            this.initialTackleBox = values.initialTackleBox;
        }
        return this;
    }

    gain(){
        return (this.currentStockPile - this.initialStockPile) +
            (this.currentVault - this.initialVault) +
            (this.currentEquipped - this.initialEquipped) +
            (this.currentTackleBox - this.initialTackleBox);
    }

    reset(){
        this.initialStockPile = this.currentStockPile;
        this.initialVault = this.currentVault;
        this.initialEquipped = this.currentEquipped;
        this.initialTackleBox = this.currentTackleBox;
    }

    clearCurrentValues(){
        this.currentStockPile = 0;
        this.currentVault = 0;
        this.currentEquipped = 0;
        this.currentTackleBox = 0;
    }
}