class CustomTooltip {
    static compareEquipmentKey = 'Shift';
    static compactTooltipKey = 'Control';
    static meta = {
        name: 'Custom Tooltip',
        description: 'Change the look and feel of the game tooltips to a custom one.',
        image:'https://raw.githubusercontent.com/daelidle/ISscripts/main/assets/images/CustomTooltip/meta_image.png'
    };
    daelis;
    cacheIds;
    pressedKeys;

    constructor(daelis) {
        this.daelis = daelis;
        this.cacheIds = {items: {}, enchants: {}};
        this.pressedKeys = [];
    }

    onGameReady(isFirstGameReady){
        if (isFirstGameReady) {
            this._initializeIdCaches();
            this._applyCSS();
            this._setupTooltipDelegates();
        }
        this._setUpKeyPressedEventListener();
    }

    _setupTooltipDelegates(){
        this._setupGeneralItemDelegates();
        this._setupCombatFoodDelegate();
        this._setupMarketplaceBuyItemDelegate();
        this._setupEventAndGeneralShopDelegate();
        this._setupChatItemDelegate();
        this._setupCraftingDelegate();
    }

    _setupGeneralItemDelegates() {
        const that = this;
        tippy.delegate('body', {
            target: '.item',
            content(element) {
                return that._generateGeneralItemsTooltip(element);
            },
            allowHTML: true,
            zIndex: 1000001,
            maxWidth: 'none',
            onTrigger(instance) {
                instance.setContent(that._generateGeneralItemsTooltip(instance.reference));
            },
        });
    }

    _setupCombatFoodDelegate() {
        const that = this;
        tippy.delegate('.game-content', {
            target: '.combat-consumable',
            content(element) {
                if (!element.classList.contains('combat-consumable')) return;

                return that._generateCombatFoodTooltip(element);
            },
            allowHTML: true,
            maxWidth: 'none',
            onTrigger(instance) {
                instance.setContent(that._generateCombatFoodTooltip(instance.reference));
            },
        });
    }

    _setupMarketplaceBuyItemDelegate() {
        const that = this;
        tippy.delegate('.game-content', {
            target: '.marketplace-table-cell-div',
            content(element) {
                if (!element.classList.contains('marketplace-table-cell-div')) return;

                that._generateMarketplaceBuyItemTooltip(element);
            },
            allowHTML: true,
            maxWidth: 'none',
            onTrigger(instance) {
                instance.setContent(that._generateMarketplaceBuyItemTooltip(instance.reference));
            },
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
                        const enchantment = that.daelis.gameData.enchantments[item.enchantmentID];
                        return `<div class="daelis-wow-tooltip">${enchantment.getTooltip(2, enchantment.strengthPerLevel)}</div>`;
                    }
                } else {
                    // General Shop
                    item = getReact(element.parentElement).return.pendingProps;
                    item = {itemID: item.id};
                }
                return that._generateTooltip(item);
            },
            allowHTML: true,
            maxWidth: 'none',
        });
    }

    _setupChatItemDelegate() {
        const that = this;
        tippy.delegate('.game-content', {
            target: '.chat-item',
            content(element) {
                if (!element.classList.contains('chat-item')) return;

                return that._generateChatItemTooltip(element);
            },
            allowHTML: true,
            sticky: true,
            inlinePositioning: true,
            maxWidth: 'none',
            onTrigger(instance) {
                instance.setContent(that._generateChatItemTooltip(instance.reference));
            },
            onBeforeUpdate(instance, partialProps) {
                const referenceNode = instance?.popperInstance?.state?.rects?.reference;
                if (referenceNode !== undefined && referenceNode.x == 0 && referenceNode.y == 0 && referenceNode.width == 0 && referenceNode.height == 0){
                    instance.destroy();
                }
            }
        });
    }

    _setupCraftingDelegate() {
        const that = this;
        tippy.delegate('.game-content', {
            target: '.crafting-item',
            content(element) {
                if (!element.classList.contains('crafting-item')) return;

                return that._generateCraftingTooltip(element);
            },
            allowHTML: true,
            maxWidth: 'none',
            onTrigger(instance) {
                instance.setContent(that._generateCraftingTooltip(instance.reference));
            },
        });
    }

    _generateGeneralItemsTooltip(element){
        if (!element.classList.contains('item')) return;
        if (element.classList.contains('daelis-tooltip-item')) return;

        let item = false;
        let react = getReact(element);
        if (react.pendingProps.hasOwnProperty("children") && Array.isArray(react.pendingProps.children)) {
            let childrenLength = react.pendingProps.children.length;
            let lastReactChild = react.pendingProps.children[childrenLength - 1];

            if (lastReactChild.hasOwnProperty("props") && lastReactChild.props.hasOwnProperty("item")) item = lastReactChild.props.item;
            if (!item.hasOwnProperty("itemID") && item.hasOwnProperty("id")) item.itemID = item.id;

            // Item object without stackSize can be found in offline/chest/dungeon prompts
            if (!item.hasOwnProperty("stackSize")) {
                let stackText = element.querySelector(".centered");
                if (stackText !== null) item.stackSize = expandNumber(stackText.innerText);
            }
        }

        return item !== false ? this._generateTooltip(item) : null;
    }

    _generateMarketplaceBuyItemTooltip(element){
        const item = getReact(element.parentElement.parentElement).return.pendingProps.item;
        return this._generateTooltip(item);
    }

    _generateCombatFoodTooltip(element){
        const foodId = getReact(element).child.key.replace('combatInventoryItem', '');
        const foodArray = getReact(element.parentElement).return.pendingProps.combatInventory;
        const item = foodArray[foodId];
        if (item === undefined) return null;
        return this._generateTooltip(item);
    }

    _generateChatItemTooltip(element) {
        let item = getReact(element).return.pendingProps.item;
        if (item === undefined) return ''; // Item-set
        return this._generateTooltip(item);
    }

    _generateCraftingTooltip(element){
        let item = getReact(element.parentElement).return.pendingProps.item;
        item.itemID = item.id;
        return this._generateTooltip(item);
    }

    _generateTooltip(item){
        const compactVersion = this.pressedKeys.includes(CustomTooltip.compactTooltipKey);
        const itemTooltip = this.daelis.generateTooltip(item, compactVersion);
        if (this.pressedKeys.includes(CustomTooltip.compareEquipmentKey)){
            const itemResource = this.daelis.gameData.items[item.itemID];
            if (itemResource !== undefined && itemResource.hasOwnProperty('slot')){
                const equippedItemOnSameSlot = this.daelis.getPlayerState().equipment[itemResource.slot];
                if (equippedItemOnSameSlot !== undefined){
                    const equippedItemToCompareTooltip = this.daelis.generateTooltip(equippedItemOnSameSlot, true);
                    return `<div style="display: flex"><div>${itemTooltip}</div><div style="zoom: 80%;">${equippedItemToCompareTooltip}</div></div>`;
                }
            }
        }
        return itemTooltip;
    }

    _initializeIdCaches() {
        for (const [id, item] of Object.entries(this.daelis.gameData.items)) this.cacheIds.items[item.name] = parseInt(id);
        for (const [id, enchant] of Object.entries(this.daelis.gameData.enchantments)) this.cacheIds.enchants[enchant.name] = parseInt(id);
    }

    _applyCSS() {
        const hideDefaultTooltips = '.item-tooltip {display: none;}';
        injectCSS(hideDefaultTooltips);
    }


    _setUpKeyPressedEventListener() {
        window.addEventListener("keydown", (event) => {
            if (!this.pressedKeys.includes(event.key)){
                this.pressedKeys.push(event.key);
            }
        }, true);

        window.addEventListener("keyup", (event) => {
            this.pressedKeys = this.pressedKeys.filter(filter => filter !== event.key);
        }, true);
    }
}