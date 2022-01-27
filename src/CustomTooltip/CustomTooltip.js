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
        this._setupGeneralItemDelegates();
        this._setupCombatFoodDelegate();
        this._setupMarketplaceBuyItemDelegate();
        this._setupEventAndGeneralShopDelegate();
        this._setupChatItemDelegate();
    }

    _setupChatItemDelegate() {
        const that = this;
        tippy.delegate('.game-content', {
            target: '.chat-item',
            content(element) {
                if (!element.classList.contains('chat-item')) return;

                let item = getReact(element).return.pendingProps.item;
                if (item === undefined) return ''; // Item-set
                return that.daelis.generateTooltip(item);
            },
            allowHTML: true,
            sticky: true,
        });
    }

    _setupEventAndGeneralShopDelegate() {
        const that = this;

        tippy.delegate('.game-content', {
            target: '.game-shop-item',
            content(element) {
                if (!element.classList.contains('game-shop-item')) return;

                let item = getReact(element.parentElement).return.pendingProps.item;
                if (item !== undefined) {
                    // Event Shop
                    delete item.name;
                    if (item.itemID === undefined) {
                        const enchantmentID = that.daelis.gameData.enchantments[item.enchantmentID];
                        return `<div class="daelis-wow-tooltip">${getEnchantDescription(enchantmentID, 2)}</div>`;
                    }
                } else {
                    // General Shop
                    item = getReact(element.parentElement).return.pendingProps;
                    item = {itemID: item.id};
                }
                return that.daelis.generateTooltip(item);
            },
            allowHTML: true,
        });
    }

    _setupMarketplaceBuyItemDelegate() {
        const that = this;
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

    _setupCombatFoodDelegate() {
        const that = this;
        tippy.delegate('.game-content', {
            target: '.combat-consumable',
            content(element) {
                if (!element.classList.contains('combat-consumable')) return;

                const foodId = getReact(element).child.key.replace('combatInventoryItem', '');
                const foodArray = getReact(element.parentElement).return.pendingProps.combatInventory;
                const item = foodArray[foodId];
                return that.daelis.generateTooltip(item);
            },
            allowHTML: true,
        });
    }

    _setupGeneralItemDelegates() {
        const that = this;
        tippy.delegate('body', {
            target: '.item',
            content(element) {
                if (!element.classList.contains('item')) return;
                if (element.classList.contains('daelis-tooltip-item')) return;
                let item;
                if (element.classList.contains('equipped-item')) {
                    // Equipped item
                    item = getReact(element.parentElement).return.pendingProps.equippedItem;
                    if (item === undefined){
                        // Chat-linked Equipment
                        item = getReact(element.lastElementChild).return.return.pendingProps.item
                    }
                } else if (element.dataset.for !== undefined && element.dataset.for.startsWith('marketplaceBuyItemTooltip')) {
                    // Marketplace general listing
                    const marketItem = getReact(element.parentElement).return.pendingProps.item;
                    item = {itemID: marketItem.id};
                } else if (element.dataset.for !== undefined && element.dataset.for.includes('farming-seed')) {
                    // Farming seeds
                    item = getReact(element.parentElement).return.pendingProps.item;
                } else {
                    // Inventory and Vault
                    item = getReact(element).return.pendingProps.item;
                }
                return that.daelis.generateTooltip(item);
            },
            allowHTML: true,
        });
        return that;
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