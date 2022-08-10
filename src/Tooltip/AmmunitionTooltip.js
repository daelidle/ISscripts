class AmmunitionTooltip {

    fillTooltipData(tooltipData, item, itemResource, gameData, equippedItems) {
        if (!itemResource) return;

        tooltipData.type = this.getItemType();
        tooltipData.stats = {...tooltipData.stats,...this.getStats(itemResource)};
        tooltipData.requiredStats = this.getRequiredStatsLevel(item, itemResource, gameData.enchantments);
    }

    getItemType(){
        return 'Ammunition';
    }

    getStats(itemResource){
        const damageMultiplier = itemResource.ammunitionMults?.damageMult ?? 0;
        const accuracyMultiplier = itemResource.ammunitionMults?.accuracyMult ?? 0;
        let strengthStats = '';
        if (damageMultiplier) strengthStats += `<span>${Tooltip.formatStat(damageMultiplier)}x Damage</span>`;
        if (accuracyMultiplier) strengthStats += `<span>${Tooltip.formatStat(accuracyMultiplier)}x Accuracy</span>`;

        return {strengthStats: strengthStats};
    }

    getRequiredStatsLevel(itemResource){
        let requiredStats = [];
        if (itemResource.requiredLevel){
            for (let [skill, level] of Object.entries(itemResource.requiredLevel)) {
                if (level > 1) requiredStats.push(`${level} ${stringCapitalize(skill)}`);
            }
        }

        return (requiredStats.length === 0) ? '' : `<span>Requires ${requiredStats.join(", ")}</span>`;
    }
}