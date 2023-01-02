class SeedTooltip {

    fillTooltipData(tooltipData, item, itemResource, gameData, equippedItems) {
        if (!itemResource) return;

        tooltipData.type = this.getItemType();
        tooltipData.stats = {...tooltipData.stats,...this.getStats(item, itemResource, gameData)};
        tooltipData.requiredStats = this.getRequiredStatsLevel(itemResource);
    }

    getItemType(){
        return 'Seed';
    }

    getRequiredStatsLevel(itemResource){
        if (itemResource.level === undefined) return '';
        return `<span>Requires ${itemResource.level} Farming</span>`
    }

    getStats(item, itemResource, gameData){
        if (itemResource.farmingExperience === undefined && itemResource.time === undefined) return '';
        const seedHeight = item.seedHeight ?? itemResource.seedHeight;
        const seedWidth = item.seedWidth ?? itemResource.seedWidth;
        let seedStats = `<span>Experience: ${itemResource.farmingExperience}</span>
                      <span>Plot Size: ${seedWidth}x${seedHeight}</span>
                      <span>Harvest Time: ${itemResource.time} minutes</span>`;

        let yieldStats = '';
        if (itemResource.yield !== undefined){
            itemResource.yield.forEach(production => {
                if (production.chance >= 1){
                    yieldStats += `<span>${production.min}-${production.max} ${gameData.items[production.id].name}</span>`;
                }
            });
        }

        return {seedStats: seedStats, yieldStats: yieldStats};
    }
}