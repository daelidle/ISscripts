class MarketplaceFilter {
    static meta = {name: 'Marketplace Filter', description: 'Adds icons to marketplace filter to allow easy filtering using just clicks.', image:'https://raw.githubusercontent.com/daelidle/ISscripts/main/assets/images/MarketplaceFilter/meta_image.png'};

    currentFilter = [];
    currentInputValue = '';
    originalFilterInput = null;
    cssClass = 'CssMarketplaceFilter';
    observer;

    onGameReady(isFirstGameReady){
        this._applyCSS();
        this._setUpMeterMutationObserver();
    }

    onExtensionStop(){
        this.observer.disconnect();
        this._removeCSS();
        const daelisFilter = document.getElementById('daelis-marketplace-filter');
        if (daelisFilter !== null) daelisFilter.remove();
        this.originalFilterInput.classList.remove("hidden");
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
        if (!this.originalFilterInput) return;

        const daelisFilter = document.getElementById('daelis-marketplace-filter');
        if (daelisFilter !== null) return;

        const filterClear = 'https://raw.githubusercontent.com/daelidle/ISscripts/main/assets/images/MarketplaceFilter/filter_remove.png';

        const filterHtml = `
            <div id="daelis-marketplace-filter">
                <img class="daelis-marketplace-filter-image" src="/images/combat/equipment/stygian_platebody.png" data-filter="armor|weapon" alt="equipment">  
                <img class="daelis-marketplace-filter-image" src="/images/misc/elite/Elite_Scroll_Chaos.png" data-filter="elite" alt="scroll">  
                <img class="daelis-marketplace-filter-image" src="/images/misc/keys/Complete_Disc.png" data-filter="key|fragment" alt="key">  
                <img class="daelis-marketplace-filter-image" src="/images/mining/iron_pickaxe.png" data-filter="mining" alt="mining">
                <img class="daelis-marketplace-filter-image" src="/images/foraging/foraging_icon.png" data-filter="foraging" alt="foraging">
                <img class="daelis-marketplace-filter-image" src="/images/fishing/fishing_logo.png" data-filter="fishing" alt="fishing">
                <img class="daelis-marketplace-filter-image" src="/images/farming/farming_icon.png" data-filter="farming" alt="farming"> 
                <img class="daelis-marketplace-filter-image" src="/images/cooking/cooking_icon.png" data-filter="cooking" alt="cooking">  
                <img class="daelis-marketplace-filter-image" src="/images/runecrafting/mind_rune.png" data-filter="rune" alt="rune">  
                <img class="daelis-marketplace-filter-image" src="${filterClear}" data-filter="clearFilter" alt="clear filter">    
                <input class="marketplace-sort-entry" placeholder="Custom Filter" autocomplete="off"  autocapitalize="off" spellcheck="false" type="search" name="daelis_marketplace_filter_custom_values" id="daelis_marketplace_filter_custom_values" value="">
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
                    margin-left: 35px;
                    align-items: center;
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
                    outline: transparent solid 2px;
                    outline-offset: 2px;
                    position: relative;
                    appearance: none;
                    transition-property: var(--chakra-transition-property-common);
                    transition-duration: var(--chakra-transition-duration-normal);
                    font-size: var(--chakra-fontSizes-md);
                    padding-inline-start: var(--chakra-space-10);
                    padding-inline-end: var(--chakra-space-4);
                    height: var(--chakra-sizes-10);
                    border-radius: var(--chakra-radii-md);
                    border-width: 1px;
                    border-style: solid;
                    border-image: initial;
                    border-color: inherit;
                    background: inherit;
                }
                #daelis_marketplace_filter_custom_values:hover, #daelis_marketplace_filter_custom_values[data-hover] {
                    border-color: var(--chakra-colors-whiteAlpha-400);
                }
                                
                #daelis_marketplace_filter_custom_values:focus-visible, #daelis_marketplace_filter_custom_values[data-focus-visible] {
                    z-index: 1;
                    border-color: rgb(99, 179, 237);
                    box-shadow: rgb(99, 179, 237) 0px 0px 0px 1px;
                }
                
            </style>`;
        injectCSS(css, this.cssClass);
    }

    _removeCSS() {
        document.getElementsByClassName(this.cssClass)[0]?.remove();
    }

    _setUpMeterMutationObserver(){
        const self = this;
        const callback = function(mutationsList, observer) {
            const marketplaceDiv = document.getElementsByClassName('marketplace-container');
            if (marketplaceDiv.length > 0){
                const marketplaceFilter = marketplaceDiv[0].getElementsByClassName('anchor-marketplace-filter');
                if (marketplaceFilter.length === 0) self._resetFilters();
                else self._injectFilterHtml(marketplaceFilter[0]);
            } else {
                self._resetFilters();
            }
        };

        // Observe Play Area DOM changes
        const playAreaContainer = document.getElementsByClassName("play-area-container")[0].parentElement;
        const config = {attributes: true, childList: true, subtree: true };
        this.observer = new MutationObserver(callback);
        this.observer.observe(playAreaContainer, config);
    }

    _resetFilters() {
        this.currentFilter = [];
        this.currentInputValue = '';
        const customFilterInput = document.getElementById('daelis_marketplace_filter_custom_values');
        if (customFilterInput !== null) customFilterInput.value = '';
        Array.from(document.getElementsByClassName('daelis-marketplace-filter-image-clicked')).forEach(filter => filter.classList.remove('daelis-marketplace-filter-image-clicked'));
    }
}