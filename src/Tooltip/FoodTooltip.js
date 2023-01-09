class FoodTooltip {
    FOOD_DEFAULT_ENCHANT_STRENGTH = 1;

    fillTooltipData(tooltipData, item, itemResource, gameData, equippedItems) {
        if (!itemResource) return;

        tooltipData.type = this.getItemType(itemResource);
        tooltipData.stats = {...tooltipData.stats,...this.getStats(item, itemResource, gameData.enchantments)};
        tooltipData.enchant = this.getEnchantSection(item, gameData.enchantments);
        tooltipData.itemSkill = this.getItemSkillSection(item, gameData.enchantments);
        tooltipData.effects = this.getItemEffects(item, itemResource, gameData.enchantments);
    }

    getItemType(itemResource){
        const types = [];
        if (itemResource.tags?.includes('consumable')) types.push('Consumable');
        if (itemResource.tags?.includes('ingredient')) types.push('Ingredient');
        return types.join(", ");
    }

    getStats(item, itemResource, enchantments){
        const healingStats = this._getHealingStats(item, itemResource);
        const ingredientStats = this._getIngredientStats(itemResource, enchantments);
        let separator = '';
        if (healingStats.length > 0 && ingredientStats.length > 0) separator = '<div style="margin-top: 5px"></div>';
        return {foodStats: `${healingStats}${separator}${ingredientStats}`};
    }

    getEnchantSection(item, enchantments) {
        if (!item.enchantmentID) return '';

        const enchantmentStrength = item.stackStrength || this.FOOD_DEFAULT_ENCHANT_STRENGTH;
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
            const description = enchantment.getTooltip(item.stackStrength ?? this.FOOD_DEFAULT_ENCHANT_STRENGTH, enchantment.strengthPerLevel);
            return `<div><span class="dwt-effects-name">${enchantment.name}:</span> <span class="dwt-effects-description">${description}</span></div>`;
        }
        return '';
    }

    _getHealingStats(item, itemResource){
        if (!itemResource.hasOwnProperty('healing')) return '';
        const augments = item.augmentations ?? 0;
        const healing = `<div class="dwt-healing-use">Use: Heals ${itemResource.healing.hp * (1 + augments)} hp</div>`;
        const healTick = Math.floor(itemResource.healing.perTick * Math.max(1, (1 + augments) / 2));
        const tickDelay = (itemResource.healing.tickDelay / 1000).toFixed(1);
        const healOverTime = `<div>Also applies a Heal over Time effect healing <span class="dwt-healing-use">${healTick} hp</span>
                                every ${tickDelay}s over ${itemResource.healing.totalTicks * tickDelay} seconds.</div>`;
        const cooldown = `<div>Cooldown: ${(itemResource.healing.cooldown / 1000).toFixed(1)}s</div>`;
        return `<div class="dwt-food-healing">${healing}${healOverTime}${cooldown}</div>`;
    }

    _getIngredientStats(itemResource, enchantments){
        let ingredientStats = '';
        if (itemResource.ingredientTags) {
            const tags = itemResource.ingredientTags.join(", ");
            ingredientStats += `<div>Tags: ${tags}</div>`;
        }
        if (itemResource.size) ingredientStats += `<div>Size: ${itemResource.size}</div>`;
        if (itemResource.alchemySize) ingredientStats += `<div>Alchemy Size: ${itemResource.alchemySize}</div>`;
        if (itemResource.difficulty) {
            ingredientStats += `<div>Difficulty: ${itemResource.difficulty}</div>`;
            if (itemResource.bonusDifficultyXP) ingredientStats += `<div>Difficulty for XP: ${itemResource.difficulty + itemResource.bonusDifficultyXP}</div>`;
        }
        if (itemResource.cookingEnchantment) {
            ingredientStats += `<div>Cooking Enchantment: <span class="dwt-enchant">${enchantments[itemResource.cookingEnchantment]?.name}</span></div>`;
        }
        if (itemResource.alchemyEnchantment) {
            ingredientStats += `<div>Alchemy Enchantment: <span class="dwt-enchant">${enchantments[itemResource.alchemyEnchantment]?.name}</span></div>`;
        }

        return `<div class="dwt-food-ingredient-stats">${ingredientStats}</div>`;
    }
}