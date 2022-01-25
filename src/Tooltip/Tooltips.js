class Tooltip {

    gameData;

    constructor() {
        this.gameData = new IdlescapeGameData();
    }

    generateTooltip(item) {
        const itemResource = this.gameData.gameResources[item.itemID];
        const nameRarityClass = this.getItemNameColorByRarity(itemResource);
        const name = itemResource.name;
        const augment = (item.augmentations !== undefined && item.augmentations !== null) ? ` +${item.augmentations}` : '';
        const tooltipGenerator = this._getTooltipType(itemResource);
        const itemType = tooltipGenerator.getItemType(itemResource);
        const secondaryType = tooltipGenerator.getSecondaryType(itemResource);
        const weaponInfo = tooltipGenerator.getWeaponInfo(itemResource);
        const stats = tooltipGenerator.getStats(itemResource, item);
        const enchant = tooltipGenerator.getEnchantSection(itemResource, item, this.gameData);
        const requiredStats = tooltipGenerator.getRequiredStatsLevel(itemResource);
        const itemSkill = tooltipGenerator.getItemSkillSection(itemResource, item, this.gameData);
        const effects = tooltipGenerator.getItemEffects(itemResource, item, this.gameData);
        console.log(stats);

        return `
            <div class="daelis-wow-tooltip">
                <div class="dwt-name ${nameRarityClass}">${name}${augment}</div>
                <div class="dwt-item-type dwt-columns">
                    <span>${itemType}</span>
                    <span>${secondaryType ?? ''}</span>
                </div>
                <div class="dwt-weapon-info dwt-columns">
                    ${weaponInfo ?? ''}
                </div>
                <div class="dwt-stats">
                    <div class="dwt-stats-offensive dwt-columns">
                        ${stats.attackStats ?? ''}
                    </div>
                    <div class="dwt-stats-defensive dwt-columns">
                        ${stats.defenseStats ?? ''}
                    </div>
                    <div class="dwt-stats-other dwt-columns">
                        ${stats.otherStats ?? ''}
                    </div>
                </div>
                <div class="dwt-enchant">
                    ${enchant ?? ''}
                </div>
                <div class="dwt-requirements">
                    <span>Requires ${requiredStats}</span>
                </div>
                <div class="dwt-item-skill">
                    ${itemSkill ?? ''}
                </div>
                <div class="dwt-effects">
                    ${effects ?? ''}
                </div>
                <div class="dwt-flavor">${itemResource?.extraTooltipInfo ?? ''}</div>
                <div class="dwt-prices dwt-columns">
                    <span class="dwt-quantity">Quantity: ${item?.stackSize ?? 1}</span>
                    <span class="dwt-prices-vendor">Vendor: ${itemResource?.value ?? 0}<img src="https://www.idlescape.com/images/gold_coin.png" alt="coins" class="icon16" style="vertical-align: middle;height: 16px;width: 16px;margin-right: 2px;"></span>
                </div>
            </div>`;
    }

    getItemNameColorByRarity(itemResource){
        if (itemResource.class !== 'equipment') return 'dwt-rarity-common';
        if (itemResource.tags.includes('obsidian') || itemResource.tags.includes('runite')) return 'dwt-rarity-uncommon';
        if (itemResource.tags.includes('stygian') || itemResource.tags.includes('cooking')) return 'dwt-rarity-rare';
        const epicItems = ["Moss Maul", "King's Crown", "Shard of Kalanahmatti", "Fire Orb", "Shapeless Scythe", "Ancient Fire Amulet", "Ancient Nature Amulet", "Black Knight Titan's Helm", "Crystal Mace", "Signet Ring"];
        const legendaryItems = ["Ocean's Embrace"];
        if (epicItems.includes(itemResource.name)) return 'dwt-rarity-epic';
        if (legendaryItems.includes(itemResource.name)) return 'dwt-rarity-legendary';
        return 'dwt-rarity-common';
    }

    _getTooltipType(itemResource){
        switch (itemResource.class){
            case 'seed':
                return new SeedTooltip();
            case 'cooking-ingredient':
                return new FoodTooltip();
            case 'equipment':
                return new EquipmentTooltip();
            case 'gem':
                if (itemResource.isChampScroll === undefined || itemResource.isChampScroll === false) break;
                return new EliteScrollTooltip();
            default:
                break;
        }
        return new DefaultTooltip();
    }
}

class DefaultTooltip {
    getItemType(itemResource){
        return stringCapitalize(itemResource.slot);
    }
    getSecondaryType(itemResource){
        return '';
    }
    getWeaponInfo(itemResource){
        return '';
    }
    getStats(item, itemResource){
        return '';
    }
    getEnchantSection(itemResource, item, gameData){
        return '';
    }
    getItemSkillSection(itemResource, item, gameData){
        return '';
    }
    getItemEffects(itemResource, item, gameData) {
        return '';
    }
}
