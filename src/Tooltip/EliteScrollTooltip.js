class EliteScrollTooltip {

    fillTooltipData(tooltipData, item, itemResource, gameData, equippedItems) {
        if (!itemResource) return;

        tooltipData.type = 'Elite Scroll';
        tooltipData.stats = {...tooltipData.stats,...this.getStats(item)};
    }

    getStats(item){
        const eliteScrollStats = [];

        let difficulty = item.augmentations ?? 0;
        eliteScrollStats.push(`<span class="">Monster Difficulty: ${difficulty}</span>`);
        let waves = Math.max(2, (item.augmentations ?? 1) * 2);
        eliteScrollStats.push(`<span class="">Elite Scroll Waves: ${waves}</span>`);

        if (item.augmentations > 0){
            const monsterTreasureHunter = item.augmentations;
            const locationTreasureHunter = item.augmentations * 2;
            eliteScrollStats.push(`<span class="">Monster Treasure Hunter: ${monsterTreasureHunter}</span>`);
            eliteScrollStats.push(`<span class="">Location Treasure Hunter: ${locationTreasureHunter}</span>`);
        }
        return {eliteScrollStats: eliteScrollStats.join('')};
    }
}