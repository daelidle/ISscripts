class SeedTooltip {

    getItemType(itemResource){
        return stringCapitalize(itemResource.slot);
    }

    getSecondaryType(itemResource){
        return '';
    }

    getWeaponInfo(itemResource){
        return '';
    }

    getRequiredStatsLevel(itemResource){
        return `<span>Requires ${itemResource.level} Farming</span>`
    }

    getStats(itemResource, item, gameData){
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