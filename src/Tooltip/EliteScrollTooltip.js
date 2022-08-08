class EliteScrollTooltip {

    fillTooltipData(tooltipData, item, itemResource, gameData, equippedItems) {
        if (!itemResource) return;

        tooltipData.type = 'Elite Scroll';
        tooltipData.stats = {...tooltipData.stats,...this.getStats(item, itemResource)};
    }

    getStats(item, itemResource){
        let encounters = 1;
        let treasureHunter = 0;
        let eliteStats = 1;
        let loot = 1;
        if (item.augmentations !== undefined && item.augmentations > 0){
            itemResource.augmentationStats.forEach(stat => {
                switch (stat.description) {
                    case 'Encounters:':
                        encounters += stat.value * item.augmentations;
                        break;
                    case 'Treasure Hunter:':
                        treasureHunter += stat.value * item.augmentations;
                        break;
                    case 'Elite Stats:':
                        eliteStats = Math.pow(eliteStats + stat.value, item.augmentations);
                        break;
                    case 'Loot:':
                        loot += stat.value * item.augmentations;
                        break;
                }
            });
        }

        let eliteScrollStats = `
            <span class="">Encounters: ${encounters}</span>
            <span class="">Treasure Hunter: ${treasureHunter}</span>
            <span class="">Elite Stats: ${eliteStats.toLocaleString()}x</span>
            <span class="">Loot: ${loot}x</span>
        `;

        return {eliteScrollStats: eliteScrollStats};
    }
}