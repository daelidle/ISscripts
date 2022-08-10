class ChestTooltip {

    fillTooltipData(tooltipData, item, itemResource, gameData, equippedItems) {
        if (!itemResource) return;

        tooltipData.type = this.getItemType();
        tooltipData.stats = {...tooltipData.stats,...this.getStats()};
    }

    getItemType(){
        return 'Chest';
    }

    getStats(){
        return {chestStats: '<span class="dwt-chest-use">Use: Open to get resources</span>'};
    }
}