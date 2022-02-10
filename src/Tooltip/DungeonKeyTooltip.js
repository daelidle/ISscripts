class DungeonKeyTooltip {

    getItemType(itemResource){
        return 'Dungeon Key';
    }

    getStats(itemResource, item, gameData){
        if (!item.hasOwnProperty('augmentations') || item.augmentations === 0) return '';

        let treasureHunter = 0;
        let stats = 1;
        let loot = 1;
        if (item.hasOwnProperty('augmentations') && item.augmentations > 0){
            itemResource.augmentationStats.forEach(stat => {
                switch (stat.description) {
                    case 'Treasure Hunter:':
                        treasureHunter += stat.value * item.augmentations;
                        break;
                    case 'Elite Stats:':
                        stats = Math.pow(stats + stat.value, item.augmentations);
                        break;
                    case 'Loot:':
                        loot += stat.value * item.augmentations;
                        break;
                }
            });
        }

        let dungeonKeyStats = `
            <span class="">Treasure Hunter: ${treasureHunter}</span>
            <span class="">Stats: ${stats.toLocaleString()}x</span>
            <span class="">Loot: ${loot}x</span>
        `;

        return {dungeonKeyStats: dungeonKeyStats};
    }
}