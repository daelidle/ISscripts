class LoadoutUIGear {

    generateLoadoutHtml(loadout, gameData) {
        const gearSet = {};
        loadout.forEach(item=> {
            item = normalizeItem(item);
            const itemResource = gameData.gameResources[item.itemID];
            gearSet[itemResource.slot] = this._generateItemHtml(item, itemResource, gameData);
        });
        return `<div class="combat-gear">
          <img src="/images/combat/combat_stick_figure.png" alt="Combat stick figure">
          <div id="gear-helmet" class="combat-gear-item">
            ${gearSet['helm']||''}
          </div>
          <div id="gear-cape" class="combat-gear-item">
            ${gearSet['cape']||''}
          </div>
          <div id="gear-amulet" class="combat-gear-item">
          ${gearSet['necklace']||''}
          </div>
          <div id="gear-arrows" class="combat-gear-item">
          ${gearSet['arrows']||''}
          </div>
          <div id="gear-weapon" class="combat-gear-item">
          ${gearSet['weapon']||''}
          </div>
          <div id="gear-body" class="combat-gear-item">
          ${gearSet['body']||''}
          </div>
          <div id="gear-shield" class="combat-gear-item">
          ${gearSet['shield']||''}
          </div>
          <div id="gear-legs" class="combat-gear-item">
          ${gearSet['legs']||''}
          </div>
          <div id="gear-gloves" class="combat-gear-item">
          ${gearSet['gloves']||''}
          </div>
          <div id="gear-boots" class="combat-gear-item">
          ${gearSet['boots']||''}
          </div>
          <div id="gear-ring" class="combat-gear-item">
          ${gearSet['ring']||''}
          </div>
          <div id="gear-pickaxe" class="combat-gear-item">
          ${gearSet['pickaxe']||''}
          </div>
          <div id="gear-hatchet" class="combat-gear-item">
          ${gearSet['hatchet']||''}
          </div>
          <div id="gear-hoe" class="combat-gear-item">
          ${gearSet['hoe']||''}
          </div>
          <div id="gear-tacklebox" class="combat-gear-item">
          ${gearSet['tacklebox']||''}
          </div>
        </div>`;
    }

    _generateItemHtml(item, itemResource, gameData) {
        if (item === null || item === undefined) return '<div></div>';

        const enchantment =  (item.enchantmentID !== null && item.enchantmentID !== undefined) ? `<div class="item-enchant"><img src="${gameData.enchantments[item.enchantmentID]['buffIcon']}"></div>` : '';
        const augment =  (item.augmentations !== null && item.augmentations !== undefined) ? `<div class="item-augment" style="color: rgb(227, 251, 227);">+${item.augmentations}</div>` : '';
        const icon = itemResource.itemIcon !== undefined ? itemResource.itemIcon : itemResource.itemImage;
        return `<div class=" item equipped-item daelis-tooltip-item" data-item='${JSON.stringify(item)}'>
                    <img src="${icon}" alt="${itemResource.name}" class="item-icon">
                    <div class="centered"></div>
                    ${enchantment}
                    ${augment}
                    <span style="position: absolute; top: 0px; left: 0px; width: 100%; height: 100%;"></span>
                </div>`;
    }
}