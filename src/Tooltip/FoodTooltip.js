class FoodTooltip {

    getItemType(itemResource){
        const types = [];
        if (itemResource.isEdible) types.push('Consumable');
        if (itemResource.isIngredient) types.push('Ingredient');
        return types.join(", ");
    }

    getSecondaryType(itemResource){
        return '';
    }

    getWeaponInfo(itemResource){
        return '';
    }

    getRequiredStatsLevel(itemResource){
        return '';
    }

    getStats(itemResource, item, gameData){
        if (itemResource.isEdible === undefined || itemResource.isEdible === false) return '';
        if (item.enchantmentID === undefined || item.enchantmentID === null) return '';

        const stacks = 1 + 2 * parseInt(item.augmentations ?? 0);
        const isCombatEnchantment = gameData.enchantments[item.enchantmentID].combat;
        const combatHtml = isCombatEnchantment ? '<div>Buff only granted when consumed in combat.</div>' : '';
        const foodStats = `<div>${stacks} buff stacks</div>${combatHtml}`;
        return {foodStats: foodStats};
    }

    getEnchantSection(itemResource, item, gameData) {
        if (itemResource.isEdible === undefined || itemResource.isEdible === false) return '';
        if (item.enchantmentID === undefined || item.enchantmentID === null) return '';

        const enchantment = gameData.enchantments[item.enchantmentID];
        const enchantmentStrength = item.enchantmentStrength ?? 0;
        return `<span class="dwt-enchant-active">${enchantment.name} ${enchantmentStrength}</span>`;
}

    getItemSkillSection(itemResource, item, gameData) {
        if (itemResource.isEdible === undefined || itemResource.isEdible === false) return '';
        const augments = item.augmentations ?? 0;
        return `<span>Use: Heals ${itemResource.healing * (1 + augments)} hp</span>`;
    }

    getItemEffects(itemResource, item, gameData){
        if (itemResource.isEdible === undefined || itemResource.isEdible === false) return '';
        if (item.enchantmentID === undefined || item.enchantmentID === null) return '';

        const enchantment = gameData.enchantments[item.enchantmentID];
        if (enchantment !== undefined){
            const description = getEnchantDescription(enchantment, item.enchantmentStrength);
            return `<div><span class="dwt-effects-name">${enchantment.name}:</span> <span class="dwt-effects-description">${description}</span></div>`;
        }
        return '';
    }
}