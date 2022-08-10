class Tooltip {
    CSS_FILE_URL = 'https://daelidle.github.io/ISscripts/src/Tooltip/css/daelis-tooltip.css';
    daelis;

    constructor(daelis) {
        this.daelis = daelis;
    }

    injectCSS(){
        injectCSS(`${this.CSS_FILE_URL}?t=${Date.now()}`);
    }

    generateTooltip(item, compactVersion) {
        const gameData = this.daelis.gameData;
        const itemResource = gameData.gameResources[item.itemID];
        const equippedItems = this.daelis.getPlayerState().equipment;
        const tooltipData = new TooltipData(item, itemResource);
        const tooltipGenerator = this._getTooltipType(itemResource);
        tooltipGenerator.fillTooltipData(tooltipData, item, itemResource, gameData, equippedItems);

        const heatSpan = (tooltipData.heat > 0) ? ` <span class="dwt-heat">${tooltipData.heat}<img src="/images/heat_small_icon.png" alt="heat" class="icon16"></span>` : '';
        return `
            <div class="daelis-wow-tooltip" data-item="${base64encode(JSON.stringify(item))}">
                <div class="dwt-name"><span class="${tooltipData.rarity.cssClassName}">${tooltipData.name}${tooltipData.augment > 0 ? ' +'+tooltipData.augment : ''}</span>${tooltipData.soulbound}</div>
                <div class="dwt-item-type dwt-columns">
                    <span>${tooltipData.type}</span>
                    <span>${tooltipData.weapon_subtype}</span>
                </div>
                <div class="dwt-weapon-info dwt-columns">${tooltipData.weapon_speed_and_type}</div>
                <div class="dwt-stats">
                    <div class="dwt-stats-strength dwt-columns">${tooltipData.stats.strengthStats}</div>
                    <div class="dwt-stats-attack dwt-columns">${tooltipData.stats.attackStats}</div>
                    <div class="dwt-stats-defensive dwt-columns">${tooltipData.stats.defenseStats}</div>
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
                    <span class="dwt-prices-vendor">Vendor: ${tooltipData.vendor.toLocaleString()}
                        <img src="https://www.idlescape.com/images/gold_coin.png" alt="coins" class="icon16" style="vertical-align: middle;height: 16px;width: 16px;margin-right: 2px;">
                        ${heatSpan}
                    </span>                    
                </div>
            </div>`;
    }

    _getTooltipType(itemResource){
        if (itemResource === undefined || itemResource === null) return new DefaultTooltip();
        if (itemResource.hasOwnProperty('equipmentStats')) return new EquipmentTooltip();
        if (itemResource.hasOwnProperty('fishingBait')) return new FishingBaitTooltip();
        if (itemResource.hasOwnProperty('canBeOpened')) return new ChestTooltip();
        if (itemResource.tags.includes('ammunition')) return new AmmunitionTooltip();
        if (itemResource.tags.includes('ingredient') || itemResource.tags.includes('consumable')) return new FoodTooltip();
        if (itemResource.tags.includes('dungeon')) return new DungeonKeyTooltip();
        if (itemResource.tags.includes('elite')) return new EliteScrollTooltip();
        if (itemResource.tags.includes('seed')) return new SeedTooltip();
        return new DefaultTooltip();
    }

    static formatStat(statValue) {
        return (statValue > 0 ? '+' : '') + statValue;
    }
}

class DefaultTooltip {
    fillTooltipData(tooltipData, item, itemResource, gameData, equippedItems) {
        if (!itemResource) return;
        const irrelevantTags = ['misc', 'tool', 'unique', 'junk'];
        const rarityTags = ['epic', 'legendary', 'rare', 'uncommon', 'common', 'junk'];
        const tags = itemResource.tags.filter(tag => !irrelevantTags.includes(tag) && !rarityTags.includes(tag));
        if (tags.length > 0) tooltipData.type = stringCapitalize(tags.shift());
        else tooltipData.type = stringCapitalize(itemResource.class.replace('-', ' '));
    }
}