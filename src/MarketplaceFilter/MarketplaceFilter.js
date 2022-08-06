class MarketplaceFilter {
    static meta = {name: 'Marketplace Filter', description: 'Adds icons to marketplace filter to allow easy filtering using just clicks.', image:'https://raw.githubusercontent.com/daelidle/ISscripts/main/assets/images/MarketplaceFilter/meta_image.png'};

    currentFilter = [];
    currentInputValue = '';
    originalFilterInput = null;

    onGameReady(isFirstGameReady){
        if (isFirstGameReady) this._applyCSS();
        this._setUpMeterMutationObserver();
    }

    _onClickedFilter(element){
        const clickedFilter = element.dataset.filter;
        if (clickedFilter === 'clearFilter') this._resetFilters();
        else {
            const added = element.classList.toggle("daelis-marketplace-filter-image-clicked");
            if (added) this.currentFilter.push(clickedFilter);
            else this.currentFilter = this.currentFilter.filter(filter => filter !== clickedFilter);
        }
        this._applyFilter();
    }

    _onCustomFilterChange(input){
        this.currentInputValue = input.value;
        this._applyFilter();
    }

    _applyFilter(){
        let filter = this.currentFilter.join('|');
        if (this.currentInputValue.length > 0) filter = this.currentInputValue;
        setReactNativeValue(this.originalFilterInput, filter);
    }

    _injectFilterHtml(originalFilterInput) {
        this.originalFilterInput = originalFilterInput;
        if (this.originalFilterInput === null) return;

        const daelisFilter = document.getElementById('daelis-marketplace-filter');
        if (daelisFilter !== null) return;

        const filterClear = 'https://raw.githubusercontent.com/daelidle/ISscripts/main/assets/images/MarketplaceFilter/filter_remove.png';

        const filterHtml = `
            <div id="daelis-marketplace-filter">
                <img class="daelis-marketplace-filter-image" src="/images/combat/equipment/stygian_platebody.png" data-filter="equipment" alt="equipment">  
                <img class="daelis-marketplace-filter-image" src="/images/misc/elite/Elite_Scroll_Chaos.png" data-filter="scroll" alt="scroll">  
                <img class="daelis-marketplace-filter-image" src="/images/cooking/cooking_icon.png" data-filter="cooking" alt="cooking">  
                <img class="daelis-marketplace-filter-image" src="/images/misc/keys/Complete_Disc.png" data-filter="key" alt="key">  
                <img class="daelis-marketplace-filter-image" src="/images/mining/iron_pickaxe.png" data-filter="mining" alt="mining">
                <img class="daelis-marketplace-filter-image" src="/images/farming/mysterious_seed.png" data-filter="seed" alt="seed">  
                <img class="daelis-marketplace-filter-image" src="/images/heat_icon.png" data-filter="^heat" alt="heat">  
                <img class="daelis-marketplace-filter-image" src="/images/runecrafting/mind_rune.png" data-filter="rune" alt="rune">  
                <img class="daelis-marketplace-filter-image" src="${filterClear}" data-filter="clearFilter" alt="clear filter">    
                <input class="marketplace-sort-entry" placeholder="Custom Filter" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" margin="dense" dense="true" variant="outlined" type="search" name="daelis_marketplace_filter_custom_values" id="daelis_marketplace_filter_custom_values" value="">
            </div>
        `;

        this.originalFilterInput.classList.add("hidden");
        this.originalFilterInput.parentNode.insertAdjacentHTML('beforeend', filterHtml);
        const that = this;
        Array.from(document.getElementsByClassName("daelis-marketplace-filter-image")).forEach(element =>
            element.addEventListener("click", function() { that._onClickedFilter(this)}, false)
        );
        document.getElementById('daelis_marketplace_filter_custom_values').addEventListener('input', function() { that._onCustomFilterChange(this)}, false);
    }

    _applyCSS() {
        const css = `
            <style>
                #daelis-marketplace-filter {
                    display: flex;
                    width: 100%;
                }
                .daelis-marketplace-filter-image { 
                    width: 33px;
                    height: 33px;
                    margin-left: 1px;
                    margin-right: 1px;
                    padding: 1px;
                    cursor: pointer;
                    pointer-events: all !important;
                }
                .daelis-marketplace-filter-image-clicked {
                    border: 1px solid grey;
                }
                #daelis_marketplace_filter_custom_values {
                    flex-grow: 4;
                    margin-left: 5px;
                    color: white;
                    margin-bottom: 0;
                    max-height: 31px;
                }
            </style>`;
        injectCSS(css);
    }

    _setUpMeterMutationObserver(){
        const self = this;
        const callback = function(mutationsList, observer) {
            const marketplaceDiv = document.getElementsByClassName('marketplace-container');
            if (marketplaceDiv.length > 0){
                const marketplaceFilter = marketplaceDiv[0].getElementsByClassName('inventory-sort-entry');
                if (marketplaceFilter.length === 0) self._resetFilters();
                else self._injectFilterHtml(marketplaceFilter[0]);
            } else {
                self._resetFilters();
            }
        };

        // Observe Play Area DOM changes
        const playAreaContainer = document.getElementsByClassName("combine-main-area")[0];
        const config = {attributes: true, childList: true, subtree: true };
        const observer = new MutationObserver(callback);
        observer.observe(playAreaContainer, config);
    }

    _resetFilters() {
        this.currentFilter = [];
        this.currentInputValue = '';
        const customFilterInput = document.getElementById('daelis_marketplace_filter_custom_values');
        if (customFilterInput !== null) customFilterInput.value = '';
        Array.from(document.getElementsByClassName('daelis-marketplace-filter-image-clicked')).forEach(filter => filter.classList.remove('daelis-marketplace-filter-image-clicked'));
    }
}