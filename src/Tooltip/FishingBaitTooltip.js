class FishingBaitTooltip {

    fillTooltipData(tooltipData, item, itemResource, gameData, equippedItems) {
        if (!itemResource) return;

        tooltipData.type = this.getItemType();
        tooltipData.stats = {...tooltipData.stats,...this.getStats(itemResource)};
    }

    getItemType(){
        return 'Fishing Bait';
    }

    getStats(itemResource){
        const bait = itemResource.fishingBait?.bait ? `<span>${Tooltip.formatStat(itemResource.fishingBait.bait)} Bait</span>` : '';
        const reel = itemResource.fishingBait?.reel ? `<span>${Tooltip.formatStat(itemResource.fishingBait.reel)} Reel</span>` : '';
        const bonus = itemResource.fishingBait?.bonus ? `<span>${Tooltip.formatStat(itemResource.fishingBait.bonus)} Bonus Rarity</span>` : '';
        const fishing = itemResource.fishingBait?.level ? `<span>${Tooltip.formatStat(itemResource.fishingBait.level)} Fishing</span>` : '';
        let baitStats = `${bait}${reel}${bonus}${fishing}`;

        return {baitStats: baitStats};
    }
}