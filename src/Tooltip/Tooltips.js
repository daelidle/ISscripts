class Tooltip {
    CSS_FILE_URL = 'https://daelidle.github.io/ISscripts/src/Tooltip/css/daelis-tooltip.css';
    daelis;

    constructor(daelis) {
        this.daelis = daelis;
    }

    injectCSS(){
        /* TODO: When Test server is released to prod, go back to CSS file (Github pages don't allow for branches on deployment)
         *injectCSS(`${this.CSS_FILE_URL}?t=${Date.now()}`);
         */
        const css = '.dwt-effects,.dwt-stats-attack,.dwt-stats-defensive,.dwt-stats-defensiveAffinities,.dwt-stats-skills,.dwt-stats-strength,.dwt-stats-strengthAffinities{margin-top:5px}.daelis-wow-tooltip{width:300px;background:#080d21eb;font-family:Verdana,"Open Sans",Arial,"Helvetica Neue",Helvetica,sans-serif;font-size:12px;line-height:17px;color:#fff;border:3px solid #cfcfcf;border-radius:10px;padding:4px 8px}.dwt-columns{display:flex;justify-content:space-between;flex-wrap:wrap}.dwt-columns>span:nth-child(2n){text-align:right}.dwt-columns>span{min-width:34%}.dwt-name{font-size:14px;line-height:19px;font-weight:400}.dwt-rarity-legendary{color:#ff8000}.dwt-rarity-epic{color:#a335ee}.dwt-ability-active,.dwt-rarity-rare{color:#0070dd}.dwt-chest-use,.dwt-enchant,.dwt-healing-use,.dwt-item-skill,.dwt-rarity-uncommon,.dwt-set-effect-active,.dwt-set-item-equipped,.dwt-stat-positive{color:#1eff00}.dwt-rarity-junk{color:#515351}.dwt-stats{min-height:5px}.dwt-item-set-effects-list:empty,.dwt-item-set:empty,.dwt-stats-attack:empty,.dwt-stats-defensive:empty,.dwt-stats-defensiveAffinities:empty,.dwt-stats-skills:empty,.dwt-stats-strength:empty,.dwt-stats-strengthAffinities:empty{margin-top:0}.dwt-stat-negative{color:orange}.dwt-effects,.dwt-enchant-unactive,.dwt-set-effect-inactive,.dwt-set-item-unequipped,.dwt-soulbound{color:#9d9d9d}.dwt-flavor,.dwt-item-set-name,.dwt-soulbound-block{color:#ffd100}.dwt-flavor{font-style:italic;font-size:11px}.tippy-box{background-color:transparent}.dwt-soulbound-exp,.dwt-soulbound-level{font-size:10px}.dwt-item-set,.dwt-item-set-effects-list{margin-top:10px}.dwt-item-set-item{margin-left:10px}.dwt-not-tradeable{color:red}';
        injectCSS(css);
    }

    generateTooltip(item, compactVersion) {
        const gameData = this.daelis.gameData;
        const itemResource = gameData.items[item.itemID];
        const equippedItems = this.daelis.getPlayerState().equipment;
        const tooltipData = new TooltipData();
        this._initializeGenericData(tooltipData, item, itemResource);
        const tooltipGenerator = this._getTooltipType(itemResource);
        tooltipGenerator.fillTooltipData(tooltipData, item, itemResource, gameData, equippedItems);

        return `
            <div class="daelis-wow-tooltip" data-item="${base64encode(JSON.stringify(item))}">
                <div class="dwt-name"><span class="${tooltipData.rarity.cssClassName}">${tooltipData.name}${tooltipData.augment > 0 ? ' +'+tooltipData.augment : ''}</span></div>
                <div class="dwt-item-type dwt-columns">
                    <span>${tooltipData.type}</span>
                    <span>${tooltipData.weapon_subtype}</span>
                </div>
                <div class="dwt-weapon-info dwt-columns">${tooltipData.weapon_speed_and_type}</div>
                <div class="dwt-soulbound-block">${tooltipData.soulbound}</div>
                <div class="dwt-stats">
                    <div class="dwt-stats-strength dwt-columns">${tooltipData.stats.strengthStats}</div>
                    <div class="dwt-stats-strengthAffinities dwt-columns">${tooltipData.stats.strengthAffinities}</div>
                    <div class="dwt-stats-attack dwt-columns">${tooltipData.stats.attackAffinities}</div>
                    <div class="dwt-stats-defensive dwt-columns">${tooltipData.stats.defenseStats}</div>
                    <div class="dwt-stats-defensiveAffinities dwt-columns">${tooltipData.stats.defenseAffinities}</div>
                    <div class="dwt-stats-skills dwt-columns">${tooltipData.stats.skillStats}</div>
                    <div class="dwt-stats-seed dwt-columns">${tooltipData.stats.seedStats}</div>
                    <div class="dwt-stats-yield dwt-columns">${tooltipData.stats.yieldStats}</div>
                    <div class="dwt-stats-food">${tooltipData.stats.foodStats}</div>
                    <div class="dwt-stats-chest">${tooltipData.stats.chestStats}</div>
                    <div class="dwt-stats-bait dwt-columns">${tooltipData.stats.baitStats}</div>
                    <div class="dwt-stats-elite-scrolls dwt-columns">${tooltipData.stats.eliteScrollStats}</div>
                    <div class="dwt-stats-dungeon-key dwt-columns">${tooltipData.stats.dungeonKeyStats}</div>
                </div>
                <div class="dwt-enchant">${tooltipData.enchant}</div>
                <div class="dwt-requirements">${tooltipData.requiredStats}</div>
                <div class="dwt-item-skill">${tooltipData.itemSkill}</div>
                <div class="dwt-item-set">${compactVersion ? '' : tooltipData.itemSet}</div>
                <div class="dwt-effects">${compactVersion ? '' : tooltipData.effects}</div>
                <div class="dwt-flavor">${compactVersion ? '' : tooltipData.flavor}</div>
                <div class="dwt-prices dwt-columns">
                    <span class="dwt-quantity">Quantity: ${tooltipData.quantity.toLocaleString()}</span>
                    <span>
                        <span class="dwt-prices-vendor">Vendor: ${tooltipData.vendor.toLocaleString()}
                            <img src="/images/gold_coin.png" alt="coins" class="icon16" style="vertical-align: middle;height: 16px;width: 16px;margin-right: 2px;">
                        </span>                          
                        <span class="dwt-heat ${(tooltipData.heat > 0) ? '' : 'hidden'}">${tooltipData.heat}
                            <img src="/images/heat_small_icon.png" alt="heat" class="icon16">
                        </span>
                    </span>                    
                </div>
                <div class="dwt-prices-marketplace dwt-columns">
                    <span></span>
                    <span class="dwt-prices-marketplace ${(tooltipData.market > 0) ? '' : 'hidden'}">Marketplace: ${tooltipData.market.toLocaleString()}
                        <img src="/images/gold_coin.png" alt="coins" class="icon16" style="vertical-align: middle;height: 16px;width: 16px;margin-right: 2px;">
                    </span>
                </div>
                <div class="dwt-not-tradeable dwt-columns">
                    <span></span>
                    <span class="${tooltipData.tradeable ? 'hidden' : ''}">Cannot be traded</span>
                </div>
            </div>`;
    }

    _initializeGenericData(tooltipData, item, itemResource){
        if (!itemResource) {
            tooltipData.name = 'Unknown Item';
            return;
        }
        tooltipData.name = item?.name ?? itemResource.name;
        const rarity = itemResource?.rarity ?? 'common';
        tooltipData.rarity = itemRarity.getByTag(rarity);
        tooltipData.augment = parseInt(item?.augmentations ?? 0);
        tooltipData.quantity = (item.hasOwnProperty('christmasSpirit')) ? item.christmasSpirit ?? 1 : item?.stackSize ?? 1;
        tooltipData.heat = parseInt(itemResource?.heat ?? 0);
        tooltipData.vendor = parseInt(itemResource?.value ?? 0);
        tooltipData.market = (item.type === '$' && item.price) ? parseInt(item.price) : 0;
        tooltipData.flavor = itemResource?.extraTooltipInfo ?? '';
        tooltipData.tradeable = itemResource?.tradeable ?? true;
    }

    _getTooltipType(itemResource){
        if (itemResource === undefined || itemResource === null) return new DefaultTooltip();
        if (itemResource.hasOwnProperty('equipmentStats')) return new EquipmentTooltip();
        if (itemResource.hasOwnProperty('fishingBait')) return new FishingBaitTooltip();
        if (itemResource.hasOwnProperty('canBeOpened')) return new ChestTooltip();
        if (itemResource.tags?.includes('ammunition')) return new AmmunitionTooltip();
        if (itemResource.tags?.includes('ingredient') || itemResource.tags?.includes('consumable')) return new FoodTooltip();
        if (itemResource.tags?.includes('dungeon')) return new DungeonKeyTooltip();
        if (itemResource.tags?.includes('elite')) return new EliteScrollTooltip();
        if (itemResource.tags?.includes('seed')) return new SeedTooltip();
        if (itemResource.tags?.includes('book')) return new BookTooltip();
        return new DefaultTooltip();
    }

    static formatStat(statValue) {
        return (statValue > 0 ? '+' : '') + statValue.toFixed(2).replace('.00', '');
    }
}

class DefaultTooltip {
    fillTooltipData(tooltipData, item, itemResource, gameData, equippedItems) {
        if (!itemResource) return;
        if (itemResource.hasOwnProperty('tags')){
            const irrelevantTags = ['misc', 'tool', 'unique', 'junk'];
            const tags = itemResource.tags.filter(tag => !irrelevantTags.includes(tag));
            if (tags.length > 0){
                tooltipData.type = stringCapitalize(tags.shift());
                return;
            }
        }
        tooltipData.type = stringCapitalize(itemResource.class.replace('-', ' '));
    }
}