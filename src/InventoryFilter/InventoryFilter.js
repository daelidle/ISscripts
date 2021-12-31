class InventoryFilter {

    currentFilter = [];
    currentInputValue = '';
    originalFilterInput = null;

    onGameReady(){
        this._applyCSS();
        this._setUpMeterMutationObserver();
    }

    _onClickedFilter(element){
        const added = element.classList.toggle("daelis-inventory-filter-image-clicked");
        const clickedFilter = element.dataset.filter;
        if (added) this.currentFilter.push(clickedFilter);
        else this.currentFilter = this.currentFilter.filter(filter => filter !== clickedFilter);
        this._applyFilter();
    }

    _onCustomFilterChange(input){
        this.currentInputValue = input.value;
        this._applyFilter();
    }

    _applyFilter(){
        let filter = this.currentFilter.join('|');
        if (this.currentInputValue.length > 0) filter = `${filter}|${this.currentInputValue}`;
        setReactNativeValue(this.originalFilterInput, filter);
    }

    _injectFilterHtml() {
        this.originalFilterInput = document.getElementById('searchForItem');
        if (this.originalFilterInput === null) return;

        const daelisFilter = document.getElementById('daelis-inventory-filter');
        if (daelisFilter !== null) return;

        const filterHtml = `
            <div id="daelis-inventory-filter">
                <img class="daelis-inventory-filter-image" src="/images/combat/equipment/stygian_platebody.png" data-filter="equipment" alt="equipment">  
                <img class="daelis-inventory-filter-image" src="/images/misc/elite/Elite_Scroll_Chaos.png" data-filter="scroll" alt="scroll">  
                <img class="daelis-inventory-filter-image" src="/images/cooking/cooking_icon.png" data-filter="cooking" alt="cooking">  
                <img class="daelis-inventory-filter-image" src="/images/misc/keys/Complete_Disc.png" data-filter="key" alt="key">  
                <img class="daelis-inventory-filter-image" src="/images/mining/iron_pickaxe.png" data-filter="mining" alt="mining">
                <img class="daelis-inventory-filter-image" src="/images/farming/mysterious_seed.png" data-filter="seed" alt="seed">  
                <img class="daelis-inventory-filter-image" src="/images/heat_icon.png" data-filter="^heat" alt="heat">  
                <img class="daelis-inventory-filter-image" src="/images/runecrafting/mind_rune.png" data-filter="rune" alt="rune">  
                <img class="daelis-inventory-filter-image" src="/images/christmas/snow_essence.png" data-filter="christmas" alt="christmas">  
                <input class="inventory-sort-entry" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" margin="dense" dense="true" variant="outlined" type="search" name="daelis_filter_custom_values" id="daelis_filter_custom_values" value="">
            </div>
        `;

        this.originalFilterInput.classList.add("hidden");
        this.originalFilterInput.parentNode.insertAdjacentHTML('beforeend', filterHtml);
        const that = this;
        Array.from(document.getElementsByClassName("daelis-inventory-filter-image")).forEach(element =>
            element.addEventListener("click", function() { that._onClickedFilter(this)}, false)
        );
        document.getElementById('daelis_filter_custom_values').addEventListener('input', function() { that._onCustomFilterChange(this)}, false);
    }

    _applyCSS() {
        const css = `
            <style>
                #daelis-inventory-filter {
                    display: flex;
                    width: 100%;
                }
                .daelis-inventory-filter-image { 
                    width: 35px;
                    height: 35px;
                    margin-left: 1px;
                    margin-right: 1px;
                    padding: 1px;
                    cursor: pointer;
                }
                .daelis-inventory-filter-image-clicked {
                    border: 1px solid grey;
                }
                #daelis_filter_custom_values {
                    flex-grow: 4;
                }
            </style>`;
        injectCSS(css);
    }

    _setUpMeterMutationObserver(){
        const self = this;
        const callback = function(mutationsList, observer) {
            const searchForItem = document.getElementById('searchForItem');
            if (searchForItem === null) self._resetFilters();
            else self._injectFilterHtml();
        };

        // Observe Play Area DOM changes
        const playAreaContainer = document.getElementsByClassName("game-right-panel")[0];
        const config = {attributes: true, childList: true, subtree: true };
        const observer = new MutationObserver(callback);
        observer.observe(playAreaContainer, config);
    }

    _resetFilters() {
        this.currentFilter = [];
        this.currentInputValue = '';
    }
}