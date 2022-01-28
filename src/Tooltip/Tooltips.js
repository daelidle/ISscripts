class Tooltip {
    CSS_FILE_URL = 'https://daelidle.github.io/ISscripts/src/Tooltip/css/daelis-tooltip.css';
    gameData;

    constructor() {
        this.gameData = new IdlescapeGameData();
    }

    injectCSS(){
        injectCSS(`${this.CSS_FILE_URL}?t=${Date.now()}`);
    }

    generateTooltip(item) {
        const itemResource = this.gameData.gameResources[item.itemID];
        const nameRarityClass = this.getItemNameColorByRarity(itemResource);
        const name = (item.name !== undefined) ? item.name : itemResource.name;
        const augment = (item.augmentations !== undefined && item.augmentations !== null && item.augmentations > 0) ? ` +${item.augmentations}` : '';
        const tooltipGenerator = this._getTooltipType(itemResource);
        const itemType = tooltipGenerator.getItemType(itemResource);
        const secondaryType = tooltipGenerator.getSecondaryType(itemResource);
        const weaponInfo = tooltipGenerator.getWeaponInfo(itemResource);
        const stats = tooltipGenerator.getStats(itemResource, item, this.gameData);
        const enchant = tooltipGenerator.getEnchantSection(itemResource, item, this.gameData);
        const requiredStats = tooltipGenerator.getRequiredStatsLevel(itemResource);
        const itemSkill = tooltipGenerator.getItemSkillSection(itemResource, item, this.gameData);
        const effects = tooltipGenerator.getItemEffects(itemResource, item, this.gameData);

        return `
            <div class="daelis-wow-tooltip">
                <div class="dwt-name ${nameRarityClass}">${name}${augment}</div>
                <div class="dwt-item-type dwt-columns">
                    <span>${itemType}</span>
                    <span>${secondaryType ?? ''}</span>
                </div>
                <div class="dwt-weapon-info dwt-columns">${weaponInfo ?? ''}</div>
                <div class="dwt-stats">
                    <div class="dwt-stats-offensive dwt-columns">${stats.attackStats ?? ''}</div>
                    <div class="dwt-stats-defensive dwt-columns">${stats.defenseStats ?? ''}</div>
                    <div class="dwt-stats-other dwt-columns">${stats.otherStats ?? ''}</div>
                    <div class="dwt-stats-seed dwt-columns">${stats.seedStats ?? ''}</div>
                    <div class="dwt-stats-yield dwt-columns">${stats.yieldStats ?? ''}</div>
                    <div class="dwt-stats-food">${stats.foodStats ?? ''}</div>
                    <div class="dwt-stats-elite-scrolls dwt-columns">${stats.eliteScrollStats ?? ''}</div>
                </div>
                <div class="dwt-enchant">${enchant ?? ''}</div>
                <div class="dwt-requirements">${requiredStats ?? ''}</div>
                <div class="dwt-item-skill">${itemSkill ?? ''}</div>
                <div class="dwt-effects">${effects ?? ''}</div>
                <div class="dwt-flavor">${itemResource?.extraTooltipInfo ?? ''}</div>
                <div class="dwt-prices dwt-columns">
                    <span class="dwt-quantity">Quantity: ${parseInt(item?.stackSize ?? 1).toLocaleString()}</span>
                    <span class="dwt-prices-vendor">Vendor: ${parseInt(itemResource?.value ?? 0).toLocaleString()}<img src="https://www.idlescape.com/images/gold_coin.png" alt="coins" class="icon16" style="vertical-align: middle;height: 16px;width: 16px;margin-right: 2px;"></span>
                </div>
            </div>`;
    }

    getItemNameColorByRarity(itemResource){
        const legendaryItems = ["Ocean's Embrace", "Prismatic Ring", "Prismatic Necklace", 'Ancient Fishing Rod','Ancient Harpoon','Ancient Fishing Net'];
        const epicItems = ["Moss Maul", "King's Crown", "Shard of Kalanahmatti", "Fire Orb", "Shapeless Scythe", "Ancient Fire Amulet", "Ancient Nature Amulet", "Black Knight Titan's Helm", "Crystal Mace", "Signet Ring", 'Titanic Gauntlet', 'World Walkers', "Giant King's Jewel", "Giant's Keep Key", "Infernal Lance"];
        const rareItems = ['Searing Ladle', 'Decayed Cloak', 'Festive Shroud', 'Nature Fragment', 'Ice Fragment', 'Fire Fragment', 'Chaos Fragment', 'Corrupted Fragment', 'Crest of Chaos', "Ancient Treasure", "Black Opal",
            "Modified Diving Gloves", "Forgotten Soul", "Mantle of Flame", "Black Knight's Gauntlets", "Black Opal Ring", "Black Opal Necklace", 'Supreme Tacklebox', 'Burning Feather'];
        const uncommonItems = ['Black Knight Great Helm', 'Dark Key Piece', 'Dark Fortress Key', 'Corrupted Ring', "Naga's Bracelet", "Fisherman's Smock", "Fisherman's Bucket Hat", "Fisherman's Waders", 'Geode', 'Satchel', "Bird's Nest", "Sunken Treasure", "Yew Log",
            "Ichor", "Diamond", "Ruby", "Air Talisman", "Earth Talisman", "Fire Talisman", "Water Talisman", "Blood Talisman", "Death Talisman", "Chaos Talisman", "Nature Talisman", "Mind Talisman", "Cosmic Talisman", "Chorus of Souls", "Giant Scraps", "Corroded Scroll",
            "Black Knight's Trial", "Giant Scroll", "Stew Stained Page", "Cluster-Cluck", "Demonic Trial", "Shapeless Scroll", "Mysterious Seed", "Shrimp Bauble", 'Ladle', 'Greater Ladle', 'Lesser Ladle', 'Torn Goblin  Settlement Map', 'Scrap of Stained Parchment',
            'Taproot Scroll', 'Pro Tacklebox', "Aquamarine", 'Mystical Driftwood', 'Molten Ashes', 'Infernal Flame'];
        if (legendaryItems.includes(itemResource.name)) return 'dwt-rarity-legendary';
        if (epicItems.includes(itemResource.name)) return 'dwt-rarity-epic';
        if (itemResource.tags === undefined) itemResource.tags = [];
        if (itemResource.tags.includes('stygian') || rareItems.includes(itemResource.name)) return 'dwt-rarity-rare';
        if (itemResource.tags.includes('obsidian') || itemResource.tags.includes('runite') || uncommonItems.includes(itemResource.name)) return 'dwt-rarity-uncommon';
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
            case 'elite-scroll':
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
        return stringCapitalize(itemResource.class.replace('-', ' '));
    }
    getSecondaryType(itemResource){
        return '';
    }
    getWeaponInfo(itemResource){
        return '';
    }
    getStats(item, itemResource){
        return {};
    }
    getEnchantSection(itemResource, item, gameData){
        return '';
    }
    getRequiredStatsLevel(){
        return '';
    }
    getItemSkillSection(itemResource, item, gameData){
        return '';
    }
    getItemEffects(itemResource, item, gameData) {
        return '';
    }
}
