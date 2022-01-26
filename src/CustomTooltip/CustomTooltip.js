class CustomTooltip {
    static meta = {
        name: 'Custom Tooltip',
        description: 'Change the look and feel of the game tooltips to a custom one.',
        image:'https://raw.githubusercontent.com/daelidle/ISscripts/main/assets/images/CustomTooltip/meta_image.png'
    };
    daelis;
    cacheIds;

    constructor(daelis) {
        this.daelis = daelis;
        this.cacheIds = {items: {}, enchants: {}};
    }

    onGameReady(isFirstGameReady){
        if (isFirstGameReady) {
            this._initializeIdCaches();
            this._applyCSS();
            this._setupTooltipDelegates();
        }
    }

    _setupTooltipDelegates(){
        const that = this;
        tippy.delegate('.game-content', {
            target: '.item',
            content(element) {
                if (!element.classList.contains('item')) return;
                let item;
                if (element.classList.contains('equipped-item')) {
                    element = element.parentElement;
                    item = getReact(element).return.pendingProps.equippedItem;
                } else if (element.dataset.for.startsWith('marketplaceBuyItemTooltip')) {
                    const marketItem = getReact(element.parentElement).return.pendingProps.item;
                    item = {itemID: marketItem.id};
                } else {
                    item = getReact(element).return.pendingProps.item;
                }
                return that.daelis.generateTooltip(item);
            },
            allowHTML: true,
        });
        tippy.delegate('.game-content', {
            target: '.combat-consumable',
            content(element) {
                if (!element.classList.contains('combat-consumable')) return;

                const foodId = getReact(element).child.key.replace('combatInventoryItem','');
                const foodArray = getReact(element.parentElement).return.pendingProps.combatInventory;
                const item = foodArray[foodId];
                return that.daelis.generateTooltip(item);
            },
            allowHTML: true,
        });
        tippy.delegate('.game-content', {
            target: '.marketplace-table-cell-div',
            content(element) {
                if (!element.classList.contains('marketplace-table-cell-div')) return;

                const item = getReact(element.parentElement.parentElement).return.pendingProps.item;
                return that.daelis.generateTooltip(item);
            },
            allowHTML: true,
        });
    }

    _initializeIdCaches() {
        for (const [id, item] of Object.entries(this.daelis.gameData.gameResources)) this.cacheIds.items[item.name] = parseInt(id);
        for (const [id, enchant] of Object.entries(this.daelis.gameData.enchantments)) this.cacheIds.enchants[enchant.name] = parseInt(id);
    }

    _applyCSS() {
        const hideDefaultTooltips = '.item-tooltip {display: none;}';
        injectCSS(hideDefaultTooltips);
    }
}