// ==UserScript==
// @name         Idlescape - Item/Enchants IDs on tooltips for DaelIS Tooltips
// @namespace    DaelIS
// @version      1.0.1
// @description  Display Item and Enchant IDs on DaelIS custom item tooltips
// @author       Dael
// @match        *://*.idlescape.com/*
// @updateURL    https://raw.githubusercontent.com/daelidle/ISscripts/main/userscripts/TooltipIds.user.js
// @downloadURL  https://raw.githubusercontent.com/daelidle/ISscripts/main/userscripts/TooltipIds.user.js
// @require      https://raw.githubusercontent.com/daelidle/ISscripts/main/data/IdlescapeGameData.js
// @require      https://raw.githubusercontent.com/daelidle/ISscripts/main/src/utils/GeneralUtils.js
// @grant        none
// ==/UserScript==

class TooltipIdsUser {
    gameItems;
    gameEnchants;
    gameData;

    constructor() {
        this.gameData = new IdlescapeGameData();
        this._initializeIdCaches();
    }

    _initializeIdCaches() {
        this.gameItems = {};
        this.gameEnchants = {};
        for (const [id, item] of Object.entries(this.gameData.gameResources)) this.gameItems[item.name] = parseInt(id);
        for (const [id, enchant] of Object.entries(this.gameData.enchantments)) this.gameEnchants[enchant.name] = parseInt(id);
    }

     setupMutationObserver(){
        const callback = function(mutationsList, observer) {
            document.querySelectorAll(".daelis-wow-tooltip").forEach(tooltip => {
                if (tooltip.getElementsByClassName('extra-tooltip-ids').length > 0) return;

                const item = JSON.parse(base64decode(tooltip.dataset.item));

                const html = `<div class="extra-tooltip-ids dwt-columns">
                                <span class="dwt-quantity">Item ID: ${item.itemID ?? 'Unknown'}</span>
                                <span class="dwt-prices-vendor">Enchantment ID: ${item.enchantmentID ?? 'None'}</span>
                            </div>`;
                tooltip.insertAdjacentHTML('beforeend', html);
            });
        };

        const config = {attributes: true, childList: true, subtree: true };
        const observer = new MutationObserver(callback);
        observer.observe(document.body, config);
    }
}

onGameReady(() => new TooltipIdsUser().setupMutationObserver());
