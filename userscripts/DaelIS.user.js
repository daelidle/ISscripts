// ==UserScript==
// @name         [Test Server] Idlescape - DaelIS Userscripts
// @namespace    DaelIS
// @version      2.0.38
// @description  Collection of utilities and QOL improvements for Idlescape.
// @author       Dael
// @icon         https://raw.githubusercontent.com/daelidle/ISscripts/test-server/assets/images/config-icon.png
// @updateURL    https://raw.githubusercontent.com/daelidle/ISscripts/test-server/userscripts/DaelIS.user.js
// @downloadURL  https://raw.githubusercontent.com/daelidle/ISscripts/test-server/userscripts/DaelIS.user.js
// @require      https://cdn.jsdelivr.net/npm/bigpicture@2.5.3/dist/BigPicture.min.js
// @require      data:text/javascript;base64,dGhpcy5nbG9iYWxUaGlzID0gdGhpczs=
// @require      https://unpkg.com/@popperjs/core@2
// @require      https://unpkg.com/tippy.js@6
// @require      https://cdn.jsdelivr.net/npm/chart.js@4.2.1
// @require      https://raw.githubusercontent.com/HighOnMikey/idlescape-socketio-listener/main/src/idlescape-listener.js
// @require      https://raw.githubusercontent.com/daelidle/ISscripts/test-server/src/DaelIS.js
// @require      https://raw.githubusercontent.com/daelidle/ISscripts/test-server/src/DaelISConfigUI.js
// @require      https://raw.githubusercontent.com/daelidle/ISscripts/test-server/src/CustomTooltip/CustomTooltip.js
// @require      https://raw.githubusercontent.com/daelidle/ISscripts/test-server/src/DamageMeter/MeterUI.js
// @require      https://raw.githubusercontent.com/daelidle/ISscripts/test-server/src/DamageMeter/MeterUIBreakdownModal.js
// @require      https://raw.githubusercontent.com/daelidle/ISscripts/test-server/src/DamageMeter/MeterConfig.js
// @require      https://raw.githubusercontent.com/daelidle/ISscripts/test-server/src/DamageMeter/DamageMeter.js
// @require      https://raw.githubusercontent.com/daelidle/ISscripts/test-server/src/DamageMeter/Combat.js
// @require      https://raw.githubusercontent.com/daelidle/ISscripts/test-server/src/DisplayPricesInventory/DisplayPricesInventory.js
// @require      https://raw.githubusercontent.com/daelidle/ISscripts/test-server/src/InventoryFilter/InventoryFilter.js
// @require      https://raw.githubusercontent.com/daelidle/ISscripts/test-server/src/MarketplaceFilter/MarketplaceFilter.js
// @require      https://raw.githubusercontent.com/daelidle/ISscripts/test-server/src/NoGatheringIronman/NoGatheringIronman.js
// @require      https://raw.githubusercontent.com/daelidle/ISscripts/test-server/src/Prices/Prices.js
// @require      https://raw.githubusercontent.com/daelidle/ISscripts/test-server/src/ResourcesTracker/Resource.js
// @require      https://raw.githubusercontent.com/daelidle/ISscripts/test-server/src/ResourcesTracker/ResourceTracker.js
// @require      https://raw.githubusercontent.com/daelidle/ISscripts/test-server/src/ResourcesTracker/TrackerConfig.js
// @require      https://raw.githubusercontent.com/daelidle/ISscripts/test-server/src/ResourcesTracker/TrackerUI.js
// @require      https://raw.githubusercontent.com/daelidle/ISscripts/test-server/src/State/State.js
// @require      https://raw.githubusercontent.com/daelidle/ISscripts/test-server/src/Tooltip/data/itemRarity.js
// @require      https://raw.githubusercontent.com/daelidle/ISscripts/test-server/src/Tooltip/data/TooltipData.js
// @require      https://raw.githubusercontent.com/daelidle/ISscripts/test-server/src/Tooltip/AmmunitionTooltip.js
// @require      https://raw.githubusercontent.com/daelidle/ISscripts/test-server/src/Tooltip/BookTooltip.js
// @require      https://raw.githubusercontent.com/daelidle/ISscripts/test-server/src/Tooltip/ChestTooltip.js
// @require      https://raw.githubusercontent.com/daelidle/ISscripts/test-server/src/Tooltip/DungeonKeyTooltip.js
// @require      https://raw.githubusercontent.com/daelidle/ISscripts/test-server/src/Tooltip/EliteScrollTooltip.js
// @require      https://raw.githubusercontent.com/daelidle/ISscripts/test-server/src/Tooltip/FishingBaitTooltip.js
// @require      https://raw.githubusercontent.com/daelidle/ISscripts/test-server/src/Tooltip/EquipmentTooltip.js
// @require      https://raw.githubusercontent.com/daelidle/ISscripts/test-server/src/Tooltip/FoodTooltip.js
// @require      https://raw.githubusercontent.com/daelidle/ISscripts/test-server/src/Tooltip/SeedTooltip.js
// @require      https://raw.githubusercontent.com/daelidle/ISscripts/test-server/src/Tooltip/Tooltips.js
// @require      https://raw.githubusercontent.com/daelidle/ISscripts/test-server/src/utils/ChatUtils.js
// @require      https://raw.githubusercontent.com/daelidle/ISscripts/test-server/src/utils/ConfigUtils.js
// @require      https://raw.githubusercontent.com/daelidle/ISscripts/test-server/src/utils/DamageUtils.js
// @require      https://raw.githubusercontent.com/daelidle/ISscripts/test-server/src/utils/GeneralUtils.js
// @require      https://raw.githubusercontent.com/daelidle/ISscripts/test-server/src/utils/ItemUtils.js
// @require      https://raw.githubusercontent.com/daelidle/ISscripts/test-server/src/utils/UiUtils.js
// @require      https://raw.githubusercontent.com/daelidle/ISscripts/test-server/data/IdlescapeGameData.js
// @match        https://dev.idlescape.com/game
// @run-at       document-start
// @grant        none
// ==/UserScript==
(function() {
    'use strict';

    /* The base64 javascript require is a workaround for a tampermonkey issue:
     * https://github.com/Tampermonkey/tampermonkey/issues/1176
     */

    const daelIS = new DaelIS();
    daelIS.addExtension(CustomTooltip);
    daelIS.addExtension(DamageMeter);
    daelIS.addExtension(DisplayPricesInventory);
    daelIS.addExtension(InventoryFilter);
    daelIS.addExtension(MarketplaceFilter);
    daelIS.addExtension(ResourceTracker);
    daelIS.addExtension(NoGatheringIronman);
})();