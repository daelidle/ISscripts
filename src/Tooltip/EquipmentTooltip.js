class EquipmentTooltip {

    getItemType(itemResource){
        return stringCapitalize(itemResource.slot);
    }

    getSecondaryType(itemResource){
        if (itemResource.slot.toUpperCase() === "WEAPON") return itemResource.oneHanded ? "Main Hand" : "Two-Handed";
        return '';
    }

    getWeaponInfo(itemResource){
        if (itemResource.attackSpeed !== undefined) {
            return `<span>${stringCapitalize(itemResource.style)} Damage</span>
                <span>Speed ${itemResource.attackSpeed.toFixed(2)}</span>`;
        }
        return '';
    }

    getRequiredStatsLevel(itemResource){
        let requiredStats = [];
        if (itemResource.requiredLevel !== undefined){
            for (const [skill, level] of Object.entries(itemResource.requiredLevel)) {
                if (level > 1) requiredStats.push(`${level} ${stringCapitalize(skill)}`);
            }
        }

        return (requiredStats.length === 0) ? '' : `<span>Requires ${requiredStats.join(", ")}</span>`;
    }

    getStats(itemResource, item, gameData){
        const itemStats = this._parseStats(itemResource, item);
        let attackStats = '';
        if (Object.keys(itemStats.attackStats).length > 0) for (const [type, bonus] of Object.entries(itemStats.attackStats)) attackStats += `<span>+${bonus} ${type}</span>`;
        let defenseStats = '';
        if (Object.keys(itemStats.defenseStats).length > 0) {
            for (const [type, bonus] of Object.entries(itemStats.defenseStats)){
                const sign = (bonus > 0) ? '+' : '';
                defenseStats += `<span>${sign}${bonus} ${type}</span>`;
            }
        }
        let otherStats = '';
        if (Object.keys(itemStats.otherStats).length > 0) for (const [type, bonus] of Object.entries(itemStats.otherStats)) otherStats += `<span>+${bonus} ${type}</span>`;
        return {attackStats: attackStats, defenseStats: defenseStats, otherStats: otherStats};
    }

    _parseStats(itemResource, item) {
        const augmentStatsNormalizer = {"Strength (Melee):":"Melee strength","Strength (Range):":"Range strength","Strength (Magic):":"Magic strength","Attack (Accuracy):":"Accuracy","Defense (Stab):":"Stab defense","Defense (Slash):":"Slash defense","Defense (Crush):":"Crush defense","Defense (Range):":"Range defense","Defense (Magic):":"Magic defense","Cooking Skill:":"Cooking","Smithing Skill:":"Smithing","Mining Skill:":"Mining","Foraging Skill:":"Foraging","Farming Skill:":"Farming","Fishing Skill:":"Fishing","Bait Power:":"Bait Power","Reel Power:":"Reel Power","Bonus Rarity:":"Bonus Rarity","Christmas (Event):":"Christmas"};
        const defenseStatsNormalizer = {"stab": "Stab defense","slash": "Slash defense","crush": "Crush defense","magic": "Magic defense","range": "Range defense","christmas": "Christmas"};
        const attackStatsNormalizer = {"melee": "Melee strength","range": "Range strength","magic": "Magic strength", "Attack (Accuracy):":"Accuracy"};
        const accuracy = itemResource.attackBonus?.accuracy ?? 0;
        const attackStats = {};
        const defenseStats = {};
        const otherStats = {};
        if (itemResource.strengthBonus !== undefined){
            for (const [type, bonus] of Object.entries(itemResource.strengthBonus)) if (bonus > 0) attackStats[attackStatsNormalizer[type]] = bonus;
            if (accuracy > 0) attackStats["Accuracy"] = accuracy;
        }
        if (itemResource.defenseBonus !== undefined){
            for (const [type, bonus] of Object.entries(itemResource.defenseBonus)) if (bonus > 0) defenseStats[defenseStatsNormalizer[type]] = bonus;
        }
        if (itemResource.toolBoost !== undefined && itemResource.toolBoost > 0) otherStats['Fishing'] = itemResource.toolBoost;
        if (itemResource.gatherSearch !== undefined && itemResource.gatherSearch > 0) otherStats['Bait Power'] = itemResource.gatherSearch;
        if (itemResource.gatherSpeed !== undefined && itemResource.gatherSpeed > 0) otherStats['Reel Power'] = itemResource.gatherSpeed;
        if (itemResource.gatherBonus !== undefined && itemResource.gatherBonus > 0) otherStats['Bonus Rarity'] = itemResource.gatherBonus;
        if (item.augmentations !== undefined && item.augmentations > 0 && itemResource.augmentationStats !== undefined){
            itemResource.augmentationStats.forEach(stat => {
                let statName = augmentStatsNormalizer[stat.description];
                if (Object.values(attackStatsNormalizer).includes(statName)) {
                    if (attackStats[statName] === undefined) attackStats[statName] = 0;
                    attackStats[statName] += stat.value * item.augmentations;
                } else if (Object.values(defenseStatsNormalizer).includes(statName)){
                    if (defenseStats[statName] === undefined) defenseStats[statName] = 0;
                    defenseStats[statName] += stat.value * item.augmentations;
                } else otherStats[statName] = stat.value * item.augmentations;
            })
        }
        return {attackStats: attackStats, defenseStats: defenseStats, otherStats: otherStats};
    }

    getEnchantSection(itemResource, item, gameData) {
        const enchantment = gameData.enchantments[item.enchantmentID];
        const slots = itemResource.enchantmentTier;

        if (enchantment !== undefined){
            const appliedEnchants = item.enchantmentStrength ?? 0;
            const enchantStrengthText = (appliedEnchants == slots) ? appliedEnchants : `${appliedEnchants}/${slots}`;
            return `<span class="dwt-enchant-active">${enchantment.name} ${enchantStrengthText}</span>`;
        } else if (slots !== undefined && slots > 0) {
            return `<span class="dwt-enchant-unactive">Enchant slots: ${slots}</span>`;
        }
        return '';
    }

    getItemSkillSection(itemResource, item, gameData) {
        const ability = gameData.abilities[itemResource.relatedAbility];
        if (ability !== undefined){
            return `<span>Equip: ${ability.abilityName}</span>`;
        }
        return '';
    }

    getItemSetSection(itemResource, item, gameData, equippedItems){
        if (itemResource.itemSet === undefined) return '';

        const set = gameData.sets[itemResource.itemSet];
        if (set === undefined) return '';

        let numEquipped = 0;
        let coloredSetItemList = '';
        set.items.forEach(setItem => {
            let activeClass = 'dwt-set-item-unequipped';
            if (equippedItems[setItem.slot]?.itemID == setItem.id) {
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
            const effectName = (effect.name.length == 0) ? '' : `${effect.name} - `;
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

    getItemEffects(itemResource, item, gameData){
        let itemEffects = '';

        const ability = gameData.abilities[itemResource.relatedAbility];
        if (ability !== undefined){
            let description = generateDescriptiveAbilityText(ability, gameData.enchantments);
            itemEffects += `<div><span class="dwt-effects-name">${ability.abilityName}:</span> <span class="dwt-effects-description">${description}</span></div>`;
        }

        const enchantment = gameData.enchantments[item.enchantmentID];
        if (enchantment !== undefined){
            const description = getEnchantDescription(enchantment, item.enchantmentStrength);
            itemEffects += `<div><span class="dwt-effects-name">${enchantment.name}:</span> <span class="dwt-effects-description">${description}</span></div>`;
        }
        return itemEffects;
    }
}