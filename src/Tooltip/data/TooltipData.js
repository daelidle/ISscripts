class TooltipData {
    name = '';
    rarity = itemRarity.Common;
    augment = 0;
    quantity = 1;
    vendor = 0;
    heat = 0;
    flavor = '';

    type = '';
    weapon_subtype = '';
    weapon_speed_and_type = '';
    stats = {strengthStats:'', attackStats: '', defenseStats: '', skillStats: '', seedStats: '', yieldStats: '', foodStats: '',
        eliteScrollStats: '', dungeonKeyStats: '', baitStats: ''};
    enchant = '';
    requiredStats = '';
    itemSkill = '';
    itemSet = '';
    effects = '';
    soulbound = '';


    constructor(item, itemResource) {
        if (!itemResource) {
            this.name = 'Unknown Item';
            return;
        }
        this.name = item?.name ?? itemResource.name;
        this.rarity = this.getRarity(itemResource);
        this.augment = parseInt(item?.augmentations ?? 0);
        this.quantity = (parseInt(item.itemID) === 7050) ? parseInt(item.christmasSpirit ?? 1) : parseInt(item?.stackSize ?? 1);
        this.heat = parseInt(itemResource?.heat ?? 0);
        this.vendor = parseInt(itemResource?.value ?? 0);
        this.flavor = itemResource?.extraTooltipInfo ?? '';
        this.soulbound = item.soulBound ? '<span class="dwt-soulbound">Soulbound</span>' : '';
    }

    getRarity(itemResource) {
        const rarity = itemResource?.rarity ?? 'common';
        return itemRarity.getByTag(rarity);
    }
}