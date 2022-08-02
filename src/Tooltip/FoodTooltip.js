class FoodTooltip {

    fillTooltipData(tooltipData, item, itemResource, enchantments) {
        if (!itemResource) return;

        tooltipData.type = this.getItemType(itemResource);
        tooltipData.stats = {...tooltipData.stats,...this.getStats(item, itemResource)};
        tooltipData.enchant = this.getEnchantSection(item, enchantments);
        tooltipData.itemSkill = this.getItemSkillSection(item, enchantments);
        tooltipData.effects = this.getItemEffects(item, itemResource, enchantments);
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
        const healOverTime = `<div>Also applies a Heal over Time effect healing ${itemResource.healing.perTick} hp every
                                ${(itemResource.healing.tickDelay / 1000).toFixed(1)}s a total of 
                                ${itemResource.healing.totalTicks} times.</div>`;
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
            const description = getEnchantDescription(enchantment, item.enchantmentStrength);
            return `<div><span class="dwt-effects-name">${enchantment.name}:</span> <span class="dwt-effects-description">${description}</span></div>`;
        }
        return '';
    }
}