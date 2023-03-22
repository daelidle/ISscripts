class FoodTooltip {
    FOOD_DEFAULT_ENCHANT_STRENGTH = 1;

    fillTooltipData(tooltipData, item, itemResource, gameData, equippedItems) {
        if (!itemResource) return;

        tooltipData.type = this.getItemType(itemResource);
        tooltipData.stats = {...tooltipData.stats,...this.getStats(item, itemResource, gameData.enchantments)};
        tooltipData.enchant = this.getEnchantSection(item, itemResource, gameData.enchantments);
        tooltipData.itemSkill = this.getItemSkillSection(item, itemResource, gameData.enchantments);
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

    getEnchantSection(item, itemResource, enchantments) {
        if (!item.enchantmentID) return '';

        const enchantmentStrength = itemResource.stackStrength || this.FOOD_DEFAULT_ENCHANT_STRENGTH;
        const enchantment = enchantments[item.enchantmentID];
        return `<span class="dwt-enchant-active">${enchantment.name} ${enchantmentStrength}</span>`;
    }

    getItemSkillSection(item, itemResource, enchantments) {
        if (!item.enchantmentID) return '';

        const stackMultiplier = itemResource.stackMultiplier || 0.25;
        const enchantment = enchantments[item.enchantmentID];
        const stacks = Math.max(1, Math.floor((1 + (item.augmentations ? item.augmentations : 0) * 2) * stackMultiplier * (enchantment.stackMult || 1)));

        const combatHtml = enchantment.combat ? '<div>Buff only granted when consumed in combat.</div>' : '';
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
        const tickDelay = toFixedLocale(itemResource.healing.tickDelay / 1000, 0, 1);
        const healOverTime = `<div>Also applies a Heal over Time effect healing <span class="dwt-healing-use">${healTick} hp</span>
                                every ${tickDelay}s over ${itemResource.healing.totalTicks * tickDelay} seconds.</div>`;
        const cooldown = `<div>Cooldown: ${toFixedLocale(itemResource.healing.cooldown / 1000, 0, 1)}s</div>`;
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