class DungeonKeyTooltip {

    fillTooltipData(tooltipData, item, itemResource, gameData, equippedItems) {
        if (!itemResource) return;

        tooltipData.type = 'Dungeon Key';
        tooltipData.stats = {...tooltipData.stats,...this.getStats(item, itemResource, gameData.locations)};
    }

    getStats(item, itemResource, locations){
        const dungeonKeyStats = [];

        let difficulty = item.augmentations ?? 0;
        dungeonKeyStats.push(`<span class="">Monster Difficulty: ${difficulty}</span>`);

        const location = locations[itemResource.champEncounter];
        const groupSize = location?.accessRequirements?.maxGroupSize ?? 1;
        dungeonKeyStats.push(`<span class=''>Max Group Size: ${groupSize}</span>`);

        if (item.augmentations > 0){
            const monsterTreasureHunter = item.augmentations;
            const locationTreasureHunter = item.augmentations * 2;
            dungeonKeyStats.push(`<span class="">Monster Treasure Hunter: ${monsterTreasureHunter}</span>`);
            dungeonKeyStats.push(`<span class="">Location Treasure Hunter: ${locationTreasureHunter}</span>`);
        }
        return {dungeonKeyStats: dungeonKeyStats.join('')};
    }
}