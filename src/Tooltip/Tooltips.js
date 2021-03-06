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
        const itemResource = this.daelis.gameData.gameResources[item.itemID];
        const nameRarityClass = this.getItemNameColorByRarity(itemResource);
        const name = item?.name ?? itemResource.name;
        const augment = (item.augmentations !== undefined && item.augmentations !== null && item.augmentations > 0) ? ` +${item.augmentations}` : '';
        const tooltipGenerator = this._getTooltipType(itemResource);
        const itemType = tooltipGenerator.getItemType(itemResource);
        const secondaryType = tooltipGenerator.getSecondaryType?.(itemResource);
        const weaponInfo = tooltipGenerator.getWeaponInfo?.(itemResource);
        const stats = tooltipGenerator.getStats?.(itemResource, item, this.daelis.gameData) ?? {};
        const enchant = tooltipGenerator.getEnchantSection?.(itemResource, item, this.daelis.gameData);
        const requiredStats = tooltipGenerator.getRequiredStatsLevel?.(itemResource);
        const itemSkill = tooltipGenerator.getItemSkillSection?.(itemResource, item, this.daelis.gameData);
        let itemSet = tooltipGenerator.getItemSetSection?.(itemResource, item, this.daelis.gameData, this.daelis.getPlayerState().equipment);
        let effects = tooltipGenerator.getItemEffects?.(itemResource, item, this.daelis.gameData);
        let quantity = parseInt(item?.stackSize ?? 1);
        if (parseInt(item.itemID) == 7050) quantity = parseInt(item.christmasSpirit ?? 1);
        const heatSpan = (itemResource.heat !== undefined) ? ` <span class="dwt-heat">${itemResource.heat}<img src="/images/heat_small_icon.png" alt="heat" class="icon16"></span>` : '';
        let flavor = itemResource?.extraTooltipInfo;
        if (compactVersion) {
            itemSet = undefined;
            effects = undefined;
            flavor = undefined;
        }

        return `
            <div class="daelis-wow-tooltip" data-item="${base64encode(JSON.stringify(item))}">
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
                    <div class="dwt-stats-dungeon-key dwt-columns">${stats.dungeonKeyStats ?? ''}</div>
                </div>
                <div class="dwt-enchant">${enchant ?? ''}</div>
                <div class="dwt-requirements">${requiredStats ?? ''}</div>
                <div class="dwt-item-skill">${itemSkill ?? ''}</div>
                <div class="dwt-item-set">${itemSet ?? ''}</div>
                <div class="dwt-effects">${effects ?? ''}</div>
                <div class="dwt-flavor">${flavor ?? ''}</div>
                <div class="dwt-prices dwt-columns">
                    <span class="dwt-quantity">Quantity: ${quantity.toLocaleString()}</span>
                    <span class="dwt-prices-vendor">Vendor: ${parseInt(itemResource?.value ?? 0).toLocaleString()}<img src="https://www.idlescape.com/images/gold_coin.png" alt="coins" class="icon16" style="vertical-align: middle;height: 16px;width: 16px;margin-right: 2px;">${heatSpan}</span>
                </div>
            </div>`;
    }

    getItemNameColorByRarity(itemResource){
        const legendaryItems = ["Ocean's Embrace", "Prismatic Ring", "Prismatic Necklace", 'Ancient Fishing Rod','Ancient Harpoon','Ancient Fishing Net'];
        const epicItems = ["Moss Maul", "King's Crown", "Shard of Kalanahmatti", "Fire Orb", "Shapeless Scythe", "Ancient Fire Amulet", "Ancient Nature Amulet", "Black Knight Titan's Helm", "Crystal Mace", "Signet Ring", 'Titanic Gauntlet', 'Awakened World Shaper', 'World Walkers',
            "Giant King's Jewel", "Giant's Keep Key", "Infernal Lance", 'Kalanahmatti'];
        const rareItems = ['Searing Ladle', 'Decayed Cloak', 'Festive Shroud', 'Nature Fragment', 'Ice Fragment', 'Fire Fragment', 'Chaos Fragment', 'Corrupted Fragment', 'Crest of Chaos', "Ancient Treasure", "Black Opal",
            "Modified Diving Gloves", "Forgotten Soul", "Mantle of Flame", "Black Knight's Gauntlets", "Black Opal Ring", "Black Opal Necklace", 'Supreme Tacklebox', 'Burning Feather', 'Zero Edge', 'RISE OF INFO'];
        const uncommonItems = ['Black Knight Great Helm', 'Dark Key Piece', 'Dark Fortress Key', 'Corrupted Ring', "Naga's Bracelet", "Fisherman's Smock", "Fisherman's Bucket Hat", "Fisherman's Waders", 'Geode', 'Satchel', "Bird's Nest", "Sunken Treasure", "Yew Log",
            "Ichor", "Diamond", "Ruby", "Air Talisman", "Earth Talisman", "Fire Talisman", "Water Talisman", "Blood Talisman", "Death Talisman", "Chaos Talisman", "Nature Talisman", "Mind Talisman", "Cosmic Talisman", "Chorus of Souls", "Giant Scraps", "Corroded Scroll",
            "Black Knight's Trial", "Giant Scroll", "Stew Stained Page", "Cluster-Cluck", "Demonic Trial", "Shapeless Scroll", 'Stormy Sea Scroll', "Mysterious Seed", "Shrimp Bauble", 'Ladle', 'Greater Ladle', 'Lesser Ladle', 'Torn Goblin Settlement Map', 'Scrap of Stained Parchment',
            'Taproot Scroll', 'Pro Tacklebox', "Aquamarine", 'Mystical Driftwood', 'Molten Ashes', 'Infernal Flame'];
        if (legendaryItems.includes(itemResource.name)) return 'dwt-rarity-legendary';
        if (epicItems.includes(itemResource.name)) return 'dwt-rarity-epic';
        if (itemResource.tags === undefined) itemResource.tags = [];
        if (itemResource.tags.includes('stygian') || rareItems.includes(itemResource.name)) return 'dwt-rarity-rare';
        if (itemResource.tags.includes('obsidian') || itemResource.tags.includes('runite') || uncommonItems.includes(itemResource.name)) return 'dwt-rarity-uncommon';
        return 'dwt-rarity-common';
    }

    _getTooltipType(itemResource){
        if (itemResource.hasOwnProperty('slot')) return new EquipmentTooltip();
        if (itemResource.hasOwnProperty('isIngredient') || itemResource.hasOwnProperty('isEdible')) return new FoodTooltip();
        if (itemResource.hasOwnProperty('isBossToken')) return new DungeonKeyTooltip();
        if (itemResource.hasOwnProperty('isChampScroll')) return new EliteScrollTooltip();
        if (itemResource.hasOwnProperty('farmingExperience')) return new SeedTooltip();
        return new DefaultTooltip();
    }
}

class DefaultTooltip {
    getItemType(itemResource){
        if (itemResource.hasOwnProperty('isBook')) return 'Book';
        const irrelevantTags = ['misc', 'tool', 'unique', 'junk'];
        const tags = itemResource.tags.filter(tag => !irrelevantTags.includes(tag)) ?? [];
        if (tags.length > 0) return stringCapitalize(tags.shift());
        return stringCapitalize(itemResource.class.replace('-', ' '));
    }
}