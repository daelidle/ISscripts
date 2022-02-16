function getEnchantDescription(enchantment, enchantmentStrength){
    switch (enchantment.name) {
        case "Healing":
            return enchantment.tooltip.replace('NaN', Math.round(enchantment.strengthPerLevel * enchantmentStrength * 0.5));
        case "Treasure Hunter":
            return enchantment.tooltip.replace('NaN', Math.round(3 * enchantmentStrength));
        case "Nimble":
            return enchantment.tooltip.replace('NaN', Math.round(enchantment.strengthPerLevel * enchantmentStrength * 10));
        case "Fortitude":
            return enchantment.tooltip.replace('NaN', Math.floor(enchantment.strengthPerLevel * enchantmentStrength));
        default:
            return enchantment.tooltip
                .replaceAll('NaN%', `${Math.round(enchantment.strengthPerLevel * enchantmentStrength * 100)}%`)
                .replaceAll('NaN', Math.round(enchantment.strengthPerLevel * enchantmentStrength));
    }
}