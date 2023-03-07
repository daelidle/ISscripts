class EquipmentTooltip {

    affinityLabels = {
        Accuracy: "Accuracy",
        OffensiveAffinity: "Offense",
        DefensiveAffinity: "Defense"
    }

    fillTooltipData(tooltipData, item, itemResource, gameData, equippedItems) {
        if (!itemResource) return;

        tooltipData.type = this.getItemType(itemResource);
        tooltipData.weapon_subtype = this.getSecondaryType(itemResource);
        tooltipData.weapon_speed_and_type = this.getWeaponInfo(itemResource);
        tooltipData.requiredStats = this.getRequiredStatsLevel(item, itemResource, gameData.enchantments);
        tooltipData.stats = {...tooltipData.stats,...this.getStats(item, itemResource)};
        tooltipData.itemSet = this.getItemSetSection(itemResource, gameData.enchantments, gameData.items, equippedItems);
        tooltipData.enchant = this.getEnchantSection(item, itemResource, gameData.enchantments);
        tooltipData.itemSkill = this.getItemSkillSection(item, itemResource, gameData.abilities);
        tooltipData.effects = this.getItemEffects(item, itemResource, gameData.abilities, gameData.enchantments);
        tooltipData.soulbound = this.getSoulBoundSection(item);
    }

    getItemType(itemResource){
        return stringCapitalize(itemResource.equipmentStats.slot);
    }

    getSecondaryType(itemResource){
        if (itemResource.equipmentStats.slot.toUpperCase() === "WEAPON") return itemResource.equipmentStats.oneHanded ? "Main Hand" : "Two-Handed";
        return '';
    }

    getWeaponInfo(itemResource){
        let weaponInfo = '';
        if (itemResource.equipmentStats.attackSpeed !== undefined) {
            if (itemResource.equipmentStats?.offensiveDamageAffinity){
                let weaponStyle = "";
                let maxStyle = -1;
                for (const [style, multiplier] of Object.entries(itemResource.equipmentStats.offensiveDamageAffinity)) {
                    if (multiplier >= maxStyle) {
                        weaponStyle = style;
                        maxStyle = multiplier;
                    }
                }
                weaponInfo += `<span>${stringCapitalize(weaponStyle)} Damage</span>`;
            } else weaponInfo += `<span></span>`;
            weaponInfo += `<span>Speed ${itemResource.equipmentStats.attackSpeed.toFixed(2)}</span>`;
        }
        return weaponInfo;
    }

    getRequiredStatsLevel(item, itemResource, enchantments){
        let requiredStats = [];
        if (itemResource.requiredLevel !== undefined){
            const enchantment = enchantments[item.enchantmentID];
            const hasWeakening = enchantment?.name.toLowerCase() === 'weakening';
            for (let [skill, level] of Object.entries(itemResource.requiredLevel)) {
                if (hasWeakening) level -= item.enchantmentStrength * enchantment.strengthPerLevel;
                if (level > 1) requiredStats.push(`${level} ${stringCapitalize(skill)}`);
            }
        }

        return (requiredStats.length === 0) ? '' : `<span>Requires ${requiredStats.join(", ")}</span>`;
    }

    getStats(item, itemResource){
        const indexedStats = this._parseStats(item, itemResource);
        const itemStats = this._generateLabeledStats(indexedStats);
        const stats = {};
        if (Object.keys(itemStats.strengthStats).length > 0) stats.strengthStats = this._generateHtmlStats(itemStats.strengthStats);
        if (Object.keys(itemStats.strengthAffinities).length > 0) stats.strengthAffinities = this._generateHtmlStats(itemStats.strengthAffinities);
        if (Object.keys(itemStats.attackAffinities).length > 0) stats.attackAffinities = this._generateHtmlStats(itemStats.attackAffinities);
        if (Object.keys(itemStats.defenseStats).length > 0) stats.defenseStats = this._generateHtmlStats(itemStats.defenseStats);
        if (Object.keys(itemStats.defenseAffinities).length > 0) stats.defenseAffinities = this._generateHtmlStats(itemStats.defenseAffinities);
        if (Object.keys(itemStats.skillStats).length > 0) stats.skillStats = this._generateHtmlStats(itemStats.skillStats);
        return stats;
    }

    _parseStats(item, itemResource) {
        const indexedStats = {};
        const ignoredStats = ['itemSet', 'slot', 'attackSpeed', 'grantedAbility', 'augmentationBonus'];
        for (const [statName, statValue] of Object.entries(itemResource.equipmentStats)) {
            if (ignoredStats.includes(statName)) continue;
            if (Array.isArray(statValue)){ // Tools
                statValue.forEach(stats => {
                    if ('skill' in stats) indexedStats[`${statName}.${stats.skill}`] = stats.boost;
                });
            } else if (isDictionary(statValue)) {
                for (const [subStatName, subStatValue] of Object.entries(statValue)) {
                    indexedStats[`${statName}.${subStatName}`] = subStatValue;
                }
            }
        }
        let augments = item.augmentations || 0;
        itemResource.equipmentStats.augmentationBonus?.forEach(augmentationBonus => {
            if (!(augmentationBonus.stat in indexedStats)) indexedStats[augmentationBonus.stat] = 0;
            indexedStats[augmentationBonus.stat] += augmentationBonus.value * augments;
        });
        return indexedStats;
    }

    _generateLabeledStats(indexedStats){
        const strengthStatsLabels = {'weaponBonus.strength': 'Strength', 'weaponBonus.intellect': 'Intellect', 'weaponBonus.dexterity': 'Dexterity', 'offensiveCritical.chance': 'Offensive Crit', 'offensiveCritical.damageMultiplier': 'Crit Mult'};
        const strengthAffinitiesLabels = DamageUtils.generateAffinityDictionary('offensiveDamageAffinity', this.affinityLabels.OffensiveAffinity);
        const attackAffinitiesLabels = DamageUtils.generateAffinityDictionary('offensiveAccuracyAffinityRating', this.affinityLabels.Accuracy);
        const defenseStatsLabels = {'armorBonus.protection': 'Protection', 'armorBonus.resistance': 'Resistance', 'armorBonus.agility': 'Agility', 'armorBonus.stamina': 'Stamina', 'defensiveCritical.chance': 'Crit Avoidance', 'defensiveCritical.damageMultiplier': 'Crit Reduction'};
        const defenseAffinitiesLabels = DamageUtils.generateAffinityDictionary('defensiveDamageAffinity', this.affinityLabels.DefensiveAffinity);
        const skillStatsLabels = {'toolBoost.fishing': 'Fishing', 'toolBoost.fishingBaitPower': 'Bait', 'toolBoost.fishingReelPower': 'Reel', 'toolBoost.fishingRarityPower': 'Bonus Rarity',
            'toolBoost.mining': 'Mining', 'toolBoost.foraging': 'Foraging', 'toolBoost.farming': 'Farming', 'toolBoost.cooking': 'Cooking', 'toolBoost.smithing': 'Smithing', 'toolBoost.enchanting': 'Enchanting' };

        const strengthStats = this._mapStatValuesToLabels(strengthStatsLabels, indexedStats);
        const strengthAffinities = this._mapStatValuesToLabels(strengthAffinitiesLabels, indexedStats);
        const attackAffinities = this._mapStatValuesToLabels(attackAffinitiesLabels, indexedStats);
        const defenseStats = this._mapStatValuesToLabels(defenseStatsLabels, indexedStats);
        const defenseAffinities = this._mapStatValuesToLabels(defenseAffinitiesLabels, indexedStats);
        const skillStats = this._mapStatValuesToLabels(skillStatsLabels, indexedStats);

        return {strengthStats: strengthStats, strengthAffinities: strengthAffinities, attackAffinities: attackAffinities,
            defenseStats: defenseStats, defenseAffinities: defenseAffinities, skillStats: skillStats};
    }

    _mapStatValuesToLabels(labels, indexedStats){
        const stats = {};
        for (const [indexStat, label] of Object.entries(labels)) if (indexStat in indexedStats && indexedStats[indexStat] !== 0) stats[label] = indexedStats[indexStat];
        return stats;
    }

    _generateHtmlStats(itemStats){
        let htmlStats = '';
        for (const [type, bonus] of Object.entries(itemStats)) {
            if (type.includes(this.affinityLabels.OffensiveAffinity) || type.includes(this.affinityLabels.DefensiveAffinity)){
                if (bonus !== 1) {
                    const htmlClass = bonus > 1 ? 'dwt-stat-positive' : 'dwt-stat-negative';
                    htmlStats += `<span class="${htmlClass}">${Tooltip.formatMultiplierToPercentage(bonus - 1)} ${type}</span>`;
                }
            }
            else if (type === 'Offensive Crit' || type === 'Crit Avoidance') htmlStats += `<span>${Tooltip.formatMultiplierToPercentage(bonus)} ${type}</span>`;
            else if (type === 'Crit Mult') htmlStats += `<span">${Tooltip.formatMultiplierToPercentage(bonus - 1)} ${type}</span>`;
            else if (type === 'Crit Reduction') htmlStats += `<span">${Tooltip.formatMultiplierToPercentage(1 - bonus)} ${type}</span>`;
            else htmlStats += `<span>${Tooltip.formatStat(bonus)} ${type}</span>`;
        }
        return htmlStats;
    }

    getEnchantSection(item, itemResource, enchantments) {
        const enchantment = enchantments[item.enchantmentID];
        const slots = itemResource.enchantmentTier;

        if (enchantment !== undefined){
            const appliedEnchants = item.enchantmentStrength ?? 0;
            const enchantStrengthText = (appliedEnchants === slots) ? appliedEnchants : `${appliedEnchants}/${slots}`;
            return `<span class="dwt-enchant-active">${enchantment.name} ${enchantStrengthText}</span>`;
        } else if (slots !== undefined && slots > 0) {
            return `<span class="dwt-enchant-unactive">Enchant slots: ${slots}</span>`;
        }
        return '';
    }

    getItemSkillSection(item, itemResource, abilities) {
        let skillSection = '';
        const itemAbilities = itemResource.equipmentStats?.grantedAbility ?? [];
        itemAbilities.forEach(abilityId => {
            const ability = abilities[abilityId];
            skillSection += `<div class="dwt-ability-active">Equip: ${ability.abilityName}</div>`;
        });

        return skillSection;
    }

    getItemSetSection(itemResource, enchantments, items, equippedItems){
        if (!(itemResource?.equipmentStats?.itemSet)) return '';

        const equippedSetPieces = {};
        Object.values(equippedItems).forEach(equippedItem => {
            const equippedItemSets = items[equippedItem.itemID]?.equipmentStats?.itemSet ?? [];
            equippedItemSets.forEach(set => {
                if (itemResource.equipmentStats.itemSet.includes(set)) {
                    if (!equippedSetPieces[set]) equippedSetPieces[set] = 0;
                    equippedSetPieces[set]++;
                }
            });
        });

        let setHtml = '';
        itemResource.equipmentStats.itemSet.forEach(setEnchant => {
            const itemSet = enchantments[setEnchant];
            if (itemSet){
                const highestActiveTier = this._getHighestActiveSetTier(equippedSetPieces[setEnchant], itemSet.setRequirements);
                itemSet.setRequirements.forEach(setRequirement => {
                    if (setRequirement.strength === 0 || setRequirement.count < highestActiveTier) return;
                    setHtml += `<div class="dwt-item-set-name">${itemSet.name} (${equippedSetPieces[setEnchant] ?? 0}/${setRequirement.count})</div>`;
                    const activeClass = ((equippedSetPieces[setEnchant] ?? 0) >= setRequirement.count) ? 'dwt-set-effect-active' : 'dwt-set-effect-inactive';
                    const description = itemSet.getTooltip(setRequirement.strength, itemSet.strengthPerLevel);
                    setHtml += `<div class="dwt-item-set-effect ${activeClass}"><span class="dwt-item-set-effect-description">${description}</span></div>`;
                });
            }
        });
        return setHtml;
    }

    _getHighestActiveSetTier(numEquipped, tiers) {
        let highestTier = 0;
        tiers.forEach(tier => {
            if ((numEquipped ?? 0) >= tier.count) highestTier = tier.count;
        });
        return highestTier;
    }

    getItemEffects(item, itemResource, abilities, enchantments){
        let itemEffects = '';

        /*const itemAbilities = itemResource.equipmentStats?.grantedAbility ?? [];
        itemAbilities.forEach(abilityId => {
            const ability = abilities[abilityId];
            const description = generateDescriptiveAbilityText(ability, enchantments);
            itemEffects += `<div><span class="dwt-effects-name">${ability.abilityName}:</span> <span class="dwt-effects-description">${description}</span></div>`;
        });*/

        const enchantment = enchantments[item.enchantmentID];
        if (enchantment !== undefined){
            const description = enchantment.getTooltip(item.enchantmentStrength, enchantment.strengthPerLevel);
            itemEffects += `<div><span class="dwt-effects-name">${enchantment.name}:</span> <span class="dwt-effects-description">${description}</span></div>`;
        }
        return itemEffects;
    }

    getSoulBoundSection(item) {
        if (!item.soulBound) return '';
        let soulBoundHtml = '<div class="dwt-soulbound-label">Soulbound</div>';
        if (item.itemLevel) soulBoundHtml += `<div class="dwt-soulbound-level">Item Level ${item.itemLevel}</div>`;
        if (item.itemExperience) {
            const nextLevelExperience = Math.round(1000 + item.itemLevel * 150 ** (1 + item.itemLevel / 10));
            soulBoundHtml += `<div class="dwt-soulbound-exp">Item XP ${item.itemExperience.toLocaleString()} / ${nextLevelExperience.toLocaleString()}</div>`;
        }
        return soulBoundHtml;
    }
}