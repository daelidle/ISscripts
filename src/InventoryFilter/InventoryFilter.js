class InventoryFilter {
    static meta = {name: 'Inventory Filter', description: 'Adds icons to inventory filter to allow easy filtering using just clicks.', image:'https://raw.githubusercontent.com/daelidle/ISscripts/main/assets/images/InventoryFilter/meta_image.png'};

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
        else if (clickedFilter === 'copy') this._copyFilteredInventoryToClipboard();
        else {
            const added = element.classList.toggle("daelis-inventory-filter-image-clicked");
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

    _injectFilterHtml() {
        this.originalFilterInput = document.getElementById('searchForItem');
        if (this.originalFilterInput === null) return;

        const daelisFilter = document.getElementById('daelis-inventory-filter');
        if (daelisFilter !== null) return;

        const filterClear = 'https://raw.githubusercontent.com/daelidle/ISscripts/main/assets/images/InventoryFilter/filter_remove.png';
        const filterCopy = 'https://raw.githubusercontent.com/daelidle/ISscripts/main/assets/images/InventoryFilter/copy.png';

        const filterHtml = `
            <div id="daelis-inventory-filter">
                <img class="daelis-inventory-filter-image" src="/images/combat/attack_icon.png" data-filter="armor|weapon|key|consumable" alt="combat">
                <img class="daelis-inventory-filter-image" src="/images/combat/equipment/stygian_platebody.png" data-filter="armor|weapon" alt="equipment">  
                <img class="daelis-inventory-filter-image" src="/images/misc/elite/Elite_Scroll_Chaos.png" data-filter="elite" alt="scroll">  
                <img class="daelis-inventory-filter-image" src="/images/misc/keys/Complete_Disc.png" data-filter="key|fragment" alt="key">  
                <img class="daelis-inventory-filter-image" src="/images/mining/iron_pickaxe.png" data-filter="mining" alt="mining">
                <img class="daelis-inventory-filter-image" src="/images/foraging/foraging_icon.png" data-filter="foraging" alt="foraging">
                <img class="daelis-inventory-filter-image" src="/images/fishing/fishing_logo.png" data-filter="fishing" alt="fishing">
                <img class="daelis-inventory-filter-image" src="/images/farming/farming_icon.png" data-filter="farming" alt="farming">  
                <img class="daelis-inventory-filter-image" src="/images/cooking/cooking_icon.png" data-filter="cooking" alt="cooking">    
                <img class="daelis-inventory-filter-image" src="/images/runecrafting/mind_rune.png" data-filter="rune" alt="rune">
                <img class="daelis-inventory-filter-image" src="${filterClear}" data-filter="clearFilter" alt="clear filter">      
                <input class="inventory-sort-entry" placeholder="Custom Filter" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" margin="dense" dense="true" variant="outlined" type="search" name="daelis_filter_custom_values" id="daelis_filter_custom_values" value="">
                <img class="daelis-inventory-filter-image" src="${filterCopy}" data-filter="copy" alt="Copy inventory to clipboard">
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
                    overflow: hidden;
                    flex-wrap: wrap;
                }
                .daelis-inventory-filter-image { 
                    width: 35px;
                    height: 35px;
                    margin-left: 1px;
                    margin-right: 1px;
                    padding: 1px;
                    cursor: pointer;
                    pointer-events: all !important;
                }
                .daelis-inventory-filter-image-clicked {
                    border: 1px solid grey;
                }
                #daelis_filter_custom_values {
                    flex-grow: 4;
                    margin-left: 5px;
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
        const playAreaContainer = document.getElementsByClassName("combine-main-area")[0];
        const config = {attributes: true, childList: true, subtree: true };
        const observer = new MutationObserver(callback);
        observer.observe(playAreaContainer, config);
    }

    _resetFilters() {
        this.currentFilter = [];
        this.currentInputValue = '';
        Array.from(document.getElementsByClassName('daelis-inventory-filter-image-clicked')).forEach(filter => filter.classList.remove('daelis-inventory-filter-image-clicked'));
    }

    _copyFilteredInventoryToClipboard(separator=',') {
        let inventory = document.getElementsByClassName("inventory-container-all-items")[0];
        if (inventory === undefined) return;

        let clipboardString = '';
        Array.from(inventory.getElementsByClassName('item')).forEach(item => {
            let reactItem = getReact(item);
            let name = reactItem.return.pendingProps.item.name;
            let quantity = reactItem.return.pendingProps.quantity;
            clipboardString += `${name}${separator}${quantity}\n`;
        });
        copyTextToClipboard(clipboardString);
    }
}