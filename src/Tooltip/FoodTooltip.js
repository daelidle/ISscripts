class FoodTooltip {

    fillTooltipData(tooltipData, item, itemResource, gameData, equippedItems) {
        if (!itemResource) return;

        tooltipData.type = this.getItemType(itemResource);
        tooltipData.stats = {...tooltipData.stats,...this.getStats(item, itemResource)};
        tooltipData.enchant = this.getEnchantSection(item, gameData.enchantments);
        tooltipData.itemSkill = this.getItemSkillSection(item, gameData.enchantments);
        tooltipData.effects = this.getItemEffects(item, itemResource, gameData.enchantments);
    }

    getItemType(itemResource){
        const types = [];
        if (itemResource.hasOwnProperty('healing')) types.push('Consumable');
        if (itemResource.hasOwnProperty('ingredientTags')) types.push('Ingredient');
        return types.join(", ");
    }

    getStats(item, itemResource){
        if (!itemResource.hasOwnProperty('healing')) return '';
        const augments = item.augmentations ?? 0;
        const healing = `<div class="dwt-healing-use">Use: Heals ${itemResource.healing.hp * (1 + augments)} hp</div>`;
        const healTick = Math.floor(itemResource.healing.perTick * Math.max(1, (1 + augments) / 2));
        const tickDelay = (itemResource.healing.tickDelay / 1000).toFixed(1);
        const healOverTime = `<div>Also applies a Heal over Time effect healing ${healTick} hp every
                                ${tickDelay}s over ${itemResource.healing.totalTicks * tickDelay} seconds.</div>`;
        const cooldown = `<div>Cooldown: ${(itemResource.healing.cooldown / 1000).toFixed(1)}s</div>`;
        return {foodStats: `${healing}${healOverTime}${cooldown}`};
    }

    getEnchantSection(item, enchantments) {
        if (!item.enchantmentID) return '';

        const enchantmentStrength = item.stackStrength || 1;
        const enchantment = enchantments[item.enchantmentID];
        return `<span class="dwt-enchant-active">${enchantment.name} ${enchantmentStrength}</span>`;
    }

    getItemSkillSection(item, enchantments) {
        if (!item.enchantmentID) return '';

        const stackMultiplier = item.stackMultiplier || 0.25;
        const stacks = Math.floor((1 + stackMultiplier * parseInt(item.augmentations ?? 0) * 2) * (enchantments[item.enchantmentID].stackMult || 1));

        const isCombatEnchantment = enchantments[item.enchantmentID].combat;
        const combatHtml = isCombatEnchantment ? '<div>Buff only granted when consumed in combat.</div>' : '';
        return `<div>${stacks} buff stacks</div>${combatHtml}`;
    }

    getItemEffects(item, itemResource, enchantments){
        if (!itemResource.hasOwnProperty('healing')) return '';
        if (!item.enchantmentID) return '';

        const enchantment = enchantments[item.enchantmentID];
        if (enchantment !== undefined){
            const description = enchantment.getTooltip(item.enchantmentStrength, enchantment.strengthPerLevel);
            return `<div><span class="dwt-effects-name">${enchantment.name}:</span> <span class="dwt-effects-description">${description}</span></div>`;
        }
        return '';
    }
}