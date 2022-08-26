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
        tooltipData.itemSet = this.getItemSetSection(item, itemResource, gameData.sets, equippedItems);
        tooltipData.enchant = this.getEnchantSection(item, itemResource, gameData.enchantments);
        tooltipData.itemSkill = this.getItemSkillSection(item, itemResource, gameData.abilities);
        tooltipData.effects = this.getItemEffects(item, itemResource, gameData.abilities, gameData.enchantments);
    }

    getItemType(itemResource){
        return stringCapitalize(itemResource.equipmentStats.slot);
    }

    getSecondaryType(itemResource){
        if (itemResource.equipmentStats.slot.toUpperCase() === "WEAPON") return itemResource.oneHanded ? "Main Hand" : "Two-Handed";
        return '';
    }

    getWeaponInfo(itemResource){
        if (itemResource.equipmentStats.attackSpeed !== undefined) {
            return `<span>${stringCapitalize(itemResource.equipmentStats?.style)} Damage</span>
                <span>Speed ${itemResource.equipmentStats.attackSpeed.toFixed(2)}</span>`;
        }
        return '';
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
        if (Object.keys(itemStats.attackStats).length > 0) stats.attackStats = this._generateHtmlStats(itemStats.attackStats);
        if (Object.keys(itemStats.defenseStats).length > 0) stats.defenseStats = this._generateHtmlStats(itemStats.defenseStats);
        if (Object.keys(itemStats.skillStats).length > 0) stats.skillStats = this._generateHtmlStats(itemStats.skillStats);
        return stats;
    }

    _parseStats(item, itemResource) {
        const indexedStats = {};
        const ignoredStats = ['itemSet', 'slot', 'grantedAbility'];
        for (const [statName, statValue] of Object.entries(itemResource.equipmentStats)) {
            if (ignoredStats.includes(statName)) continue;
            if (Array.isArray(statValue)){ // Affinities and toolboxes
                statValue.forEach(stats => {
                    if ('affinity' in stats) indexedStats[`${statName}.${stats.affinity}`] = stats.rating;
                    else if ('skill' in stats) indexedStats[`${statName}.${stats.skill}`] = stats.boost;
                });
            } else if (isDictionary(statValue)) {
                for (const [subStatName, subStatValue] of Object.entries(statValue)) {
                    indexedStats[`${statName}.${subStatName}`] = subStatValue;
                }
            }
        }
        itemResource.equipmentStats.augmentationBonus?.forEach(augmentationBonus => {
            if (!(augmentationBonus.stat in indexedStats)) indexedStats[augmentationBonus.stat] = 0;
            indexedStats[augmentationBonus.stat] += augmentationBonus.value * (item.augmentations || 0);
        });
        return indexedStats;
    }

    _generateLabeledStats(indexedStats){
        const strengthStatsLabels = {'weaponBonus.strength': 'Strength', 'weaponBonus.intellect': 'Intellect', 'weaponBonus.dexterity': 'Dexterity',
            ...DamageUtils.generateAffinityDictionary('offensiveDamageAffinity', this.affinityLabels.OffensiveAffinity)};
        const attackStatsLabels = {...DamageUtils.generateAffinityDictionary('offensiveAccuracyAffinityRating', this.affinityLabels.Accuracy)};
        const defenseStatsLabels = {'armorBonus.protection': 'Protection', 'armorBonus.resistance': 'Resistance', 'armorBonus.agility': 'Agility', 'armorBonus.stamina': 'Stamina',
            ...DamageUtils.generateAffinityDictionary('defensiveDamageAffinity', this.affinityLabels.DefensiveAffinity)};
        const skillStatsLabels = {'toolBoost.fishing': 'Fishing', 'toolBoost.fishingBaitPower': 'Bait', 'toolBoost.fishingReelPower': 'Reel', 'toolBoost.fishingRarityPower': 'Bonus Rarity',
            'toolBoost.mining': 'Mining', 'toolBoost.foraging': 'Foraging', 'toolBoost.farming': 'Farming', 'toolBoost.cooking': 'Cooking', 'toolBoost.smithing': 'Smithing' };

        const strengthStats = {};
        for (const [indexStat, label] of Object.entries(strengthStatsLabels)) if (indexStat in indexedStats && indexedStats[indexStat] !== 0) strengthStats[label] = indexedStats[indexStat];
        const attackStats = {};
        for (const [indexStat, label] of Object.entries(attackStatsLabels)) if (indexStat in indexedStats && indexedStats[indexStat] !== 0) attackStats[label] = indexedStats[indexStat];
        const defenseStats = {};
        for (const [indexStat, label] of Object.entries(defenseStatsLabels)) if (indexStat in indexedStats && indexedStats[indexStat] !== 0) defenseStats[label] = indexedStats[indexStat];
        const skillStats = {};
        for (const [indexStat, label] of Object.entries(skillStatsLabels)) if (indexStat in indexedStats && indexedStats[indexStat] !== 0) skillStats[label] = indexedStats[indexStat];

        return {strengthStats: strengthStats, attackStats: attackStats, defenseStats: defenseStats, skillStats: skillStats};
    }

    _generateHtmlStats(itemStats){
        let htmlStats = '';
        for (const [type, bonus] of Object.entries(itemStats)) {
            if (type.includes(this.affinityLabels.OffensiveAffinity) || type.includes(this.affinityLabels.DefensiveAffinity)){
                if (bonus !== 1) htmlStats += `<span>${bonus}x ${type}</span>`;
            } else htmlStats += `<span>${Tooltip.formatStat(bonus)} ${type}</span>`;
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
            const abilityStatusClass = this._abilityIsActiveOnItem(item, ability) ? 'dwt-ability-active': 'dwt-ability-inactive';
            skillSection += `<div class="${abilityStatusClass}">Equip: ${ability.abilityName}</div>`;
        });

        return skillSection;
    }

    getItemSetSection(item, itemResource, sets, equippedItems){
        if (itemResource.itemSet === undefined) return '';

        const set = sets[itemResource.itemSet];
        if (set === undefined) return '';

        let numEquipped = 0;
        let coloredSetItemList = '';
        set.items.forEach(setItem => {
            let activeClass = 'dwt-set-item-unequipped';
            if (equippedItems[setItem.slot]?.itemID === setItem.id) {
                numEquipped++;
                activeClass = 'dwt-set-item-equipped';
            }
            coloredSetItemList += `<div class="dwt-item-set-item ${activeClass}"> 
                <span class="dwt-item-set-item-name">${setItem.name}</span>
                </div>`;
        });

        let coloredEffectsList = '';
        set.effects.forEach(effect => {
            const activeClass = (effect.equippedRequirements <= numEquipped) ? 'dwt-set-effect-active' : 'dwt-set-effect-inactive';
            const effectName = (effect.name.length === 0) ? '' : `${effect.name} - `;
            coloredEffectsList += `<div class="dwt-item-set-effect ${activeClass}">
                <span class="dwt-item-set-effect-required-pieces">(${effect.equippedRequirements}) Set: </span> 
                <span class="dwt-item-set-effect-name">${effectName}</span>
                <span class="dwt-item-set-effect-description">${effect.description}</span>
                </div>`;
        });

        return `<div class="dwt-item-set-name">${set.name} (${numEquipped}/${set.items.length})</div>
                <div class="dwt-item-set-item-list">${coloredSetItemList}</div>
                <div class="dwt-item-set-effects-list">${coloredEffectsList}</div>`;
    }

    getItemEffects(item, itemResource, abilities, enchantments){
        let itemEffects = '';

        const itemAbilities = itemResource.equipmentStats?.grantedAbility ?? [];
        itemAbilities.forEach(abilityId => {
            const ability = abilities[abilityId];
            if (this._abilityIsActiveOnItem(item, ability)) {
                const description = generateDescriptiveAbilityText(ability, enchantments);
                itemEffects += `<div><span class="dwt-effects-name">${ability.abilityName}:</span> <span class="dwt-effects-description">${description}</span></div>`;
            }
        });

        const enchantment = enchantments[item.enchantmentID];
        if (enchantment !== undefined){
            const description = getEnchantDescription(enchantment, item.enchantmentStrength);
            itemEffects += `<div><span class="dwt-effects-name">${enchantment.name}:</span> <span class="dwt-effects-description">${description}</span></div>`;
        }
        return itemEffects;
    }

    _abilityIsActiveOnItem(item, ability){
        if (ability.hasOwnProperty('requireEquipmentEnchantID')) {
            if (!item.hasOwnProperty('enchantmentID') || item.enchantmentID !== ability.requireEquipmentEnchantID || item.enchantmentStrength !== ability.requireEquipmentEnchantStrength) {
                if (!ability.hasOwnProperty('requireEquipmentID') || ability.requireEquipmentID === item.itemID) {
                    return false;
                }
            }
        }
        return true;
    }
}