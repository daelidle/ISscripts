class SeedTooltip {

    getItemType(itemResource){
        return stringCapitalize(itemResource.class);
    }

    getSecondaryType(itemResource){
        return '';
    }

    getWeaponInfo(itemResource){
        return '';
    }

    getRequiredStatsLevel(itemResource){
        if (itemResource.level === undefined) return '';
        return `<span>Requires ${itemResource.level} Farming</span>`
    }

    getStats(itemResource, item, gameData){
        if (itemResource.farmingExperience === undefined && itemResource.time === undefined) return '';
        let seedStats = `<span>Experience: ${itemResource.farmingExperience}</span>
                      <span>Plot Size: ${itemResource.seedHeight}x${itemResource.seedWidth}</span>
                      <span>Harvest Time: ${itemResource.time} minutes</span>`;

        let yieldStats = '';
        if (itemResource.yield !== undefined){
            itemResource.yield.forEach(production => {
                if (production.chance >= 1){
                    yieldStats += `<span>${production.min}-${production.max} ${gameData.gameResources[production.ingredient].name}</span>`;
                }
            });
        }

        return {seedStats: seedStats, yieldStats: yieldStats};
    }

    getEnchantSection(itemResource, item, gameData) {
        return '';
    }

    getItemSkillSection(itemResource, item, gameData) {
        return '';
    }

    getItemEffects(itemResource, item, gameData){
        return '';
    }
}