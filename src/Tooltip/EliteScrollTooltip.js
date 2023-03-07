class EliteScrollTooltip {

    fillTooltipData(tooltipData, item, itemResource, gameData, equippedItems) {
        if (!itemResource) return;

        tooltipData.type = 'Elite Scroll';
        tooltipData.stats = {...tooltipData.stats,...this.getStats(item)};
    }

    getStats(item){
        const eliteScrollStats = [];

        let difficulty = 1;
        eliteScrollStats.push(`<span class="">Monster Difficulty: ${difficulty}</span>`);
        let waves = Math.max(2, (item.augmentations ?? 1) * 2);
        eliteScrollStats.push(`<span class="">Elite Scroll Waves: ${waves}</span>`);

        if (item.augmentations > 0){
            let treasureHunter = item.augmentations;
            eliteScrollStats.push(`<span class="">Treasure Hunter: ${treasureHunter}</span>`);
        }
        return {eliteScrollStats: eliteScrollStats.join('')};
    }
}