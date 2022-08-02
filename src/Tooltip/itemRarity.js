class itemRarity {
    static Legendary = new itemRarity('legendary', 'dwt-rarity-legendary');
    static Epic = new itemRarity('epic', 'dwt-rarity-epic');
    static Rare = new itemRarity('rare', 'dwt-rarity-rare');
    static Uncommon = new itemRarity('uncommon', 'dwt-rarity-uncommon');
    static Common = new itemRarity('common', 'dwt-rarity-common');
    static Junk = new itemRarity('junk', 'dwt-rarity-junk');

    constructor(tag, cssClassName) {
        this.tag = tag;
        this.cssClassName = cssClassName
    }

    static getByTag(rarityTag) {
        const rarity = Object.keys(itemRarity).filter(rarity => rarity.tag === rarityTag);
        return rarity.length > 0 ? rarity.shift() : itemRarity.Common;
    }
}