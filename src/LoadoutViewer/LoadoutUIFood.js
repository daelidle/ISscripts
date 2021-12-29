class LoadoutUIFood {

    generateLoadoutHtml(loadout, gameData) {
        let foodSetHtml = '';
        loadout.forEach(item=> {
            const itemResource = gameData.gameResources[item.item_id];
            foodSetHtml += this._generateItemHtml(item, itemResource, gameData);
        });
        return `
            <div class="combat-gear-inventory">
                ${foodSetHtml}
            </div>`;
    }

    _generateItemHtml(item, itemResource, gameData) {
        const enchantment =  (item.enchantment_id !== null && item.enchantment_id !== undefined) ? `<div class="item-enchant"><img src="${gameData.enchantments[item.enchantment_id]['buffIcon']}" alt=""></div>` : '';
        const augment =  (item.augmentations !== null && item.augmentations !== undefined) ? `<div class="item-augment" style="color: rgb(227, 251, 227);">+${item.augmentations}</div>` : '';
        const icon = itemResource.itemIcon !== undefined ? itemResource.itemIcon : itemResource.itemImage;
        return `<div class="combat-consumable">
                    <div class="combat-inventory-item cooking-ingredient">
                        <img src="${icon}" alt="${itemResource.name}">
                        ${enchantment}
                        ${augment}
                        <span style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></span>
                    </div>
                </div>`;
    }
}