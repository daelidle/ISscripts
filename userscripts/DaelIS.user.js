// ==UserScript==
// @name         Idlescape - DaelIS Userscripts
// @namespace    DaelIS
// @version      2.2.2
// @description  Collection of utilities and QOL improvements for Idlescape.
// @author       Dael
// @icon         https://raw.githubusercontent.com/daelidle/ISscripts/main/assets/images/config-icon.png
// @updateURL    https://raw.githubusercontent.com/daelidle/ISscripts/main/userscripts/DaelIS.user.js
// @downloadURL  https://raw.githubusercontent.com/daelidle/ISscripts/main/userscripts/DaelIS.user.js
// @require      https://cdn.jsdelivr.net/npm/bigpicture@2.5.3/dist/BigPicture.min.js
// @require      data:text/javascript;base64,dGhpcy5nbG9iYWxUaGlzID0gdGhpczs=
// @require      https://unpkg.com/@popperjs/core@2
// @require      https://unpkg.com/tippy.js@6
// @require      https://cdn.jsdelivr.net/npm/chart.js@4.2.1
// @require      https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js
// @require      https://raw.githubusercontent.com/HighOnMikey/idlescape-socketio-listener/main/src/idlescape-listener.js
// @require      https://raw.githubusercontent.com/daelidle/ISscripts/main/src/DaelIS.js
// @require      https://raw.githubusercontent.com/daelidle/ISscripts/main/src/DaelISConfigUI.js
// @require      https://raw.githubusercontent.com/daelidle/ISscripts/main/src/BestiaryExporter/BestiaryExporter.js
// @require      https://raw.githubusercontent.com/daelidle/ISscripts/main/src/DamageMeter/MeterUI.js
// @require      https://raw.githubusercontent.com/daelidle/ISscripts/main/src/DamageMeter/MeterUIBreakdownModal.js
// @require      https://raw.githubusercontent.com/daelidle/ISscripts/main/src/DamageMeter/DamageMeter.js
// @require      https://raw.githubusercontent.com/daelidle/ISscripts/main/src/DamageMeter/Combat.js
// @require      https://raw.githubusercontent.com/daelidle/ISscripts/main/src/DisplayPricesInventory/DisplayPricesInventory.js
// @require      https://raw.githubusercontent.com/daelidle/ISscripts/main/src/MarketplaceFilter/MarketplaceFilter.js
// @require      https://raw.githubusercontent.com/daelidle/ISscripts/main/src/NoGatheringIronman/NoGatheringIronman.js
// @require      https://raw.githubusercontent.com/daelidle/ISscripts/main/src/Prices/Prices.js
// @require      https://raw.githubusercontent.com/daelidle/ISscripts/main/src/ResourcesTracker/Resource.js
// @require      https://raw.githubusercontent.com/daelidle/ISscripts/main/src/ResourcesTracker/ResourceTracker.js
// @require      https://raw.githubusercontent.com/daelidle/ISscripts/main/src/ResourcesTracker/TrackerConfig.js
// @require      https://raw.githubusercontent.com/daelidle/ISscripts/main/src/ResourcesTracker/TrackerUI.js
// @require      https://raw.githubusercontent.com/daelidle/ISscripts/main/src/State/State.js
// @require      https://raw.githubusercontent.com/daelidle/ISscripts/main/src/Tooltip/data/itemRarity.js
// @require      https://raw.githubusercontent.com/daelidle/ISscripts/main/src/Tooltip/data/TooltipData.js
// @require      https://raw.githubusercontent.com/daelidle/ISscripts/main/src/Tooltip/AmmunitionTooltip.js
// @require      https://raw.githubusercontent.com/daelidle/ISscripts/main/src/Tooltip/BookTooltip.js
// @require      https://raw.githubusercontent.com/daelidle/ISscripts/main/src/Tooltip/ChestTooltip.js
// @require      https://raw.githubusercontent.com/daelidle/ISscripts/main/src/Tooltip/DungeonKeyTooltip.js
// @require      https://raw.githubusercontent.com/daelidle/ISscripts/main/src/Tooltip/EliteScrollTooltip.js
// @require      https://raw.githubusercontent.com/daelidle/ISscripts/main/src/Tooltip/FishingBaitTooltip.js
// @require      https://raw.githubusercontent.com/daelidle/ISscripts/main/src/Tooltip/EquipmentTooltip.js
// @require      https://raw.githubusercontent.com/daelidle/ISscripts/main/src/Tooltip/FoodTooltip.js
// @require      https://raw.githubusercontent.com/daelidle/ISscripts/main/src/Tooltip/SeedTooltip.js
// @require      https://raw.githubusercontent.com/daelidle/ISscripts/main/src/Tooltip/Tooltips.js
// @require      https://raw.githubusercontent.com/daelidle/ISscripts/main/src/utils/ChatUtils.js
// @require      https://raw.githubusercontent.com/daelidle/ISscripts/main/src/utils/ConfigUtils.js
// @require      https://raw.githubusercontent.com/daelidle/ISscripts/main/src/utils/DamageUtils.js
// @require      https://raw.githubusercontent.com/daelidle/ISscripts/main/src/utils/GeneralUtils.js
// @require      https://raw.githubusercontent.com/daelidle/ISscripts/main/src/utils/ItemUtils.js
// @require      https://raw.githubusercontent.com/daelidle/ISscripts/main/src/utils/UiUtils.js
// @match        https://play.idlescape.com/*
// @match        https://www.play.idlescape.com/*
// @match        https://dev.idlescape.com/*
// @run-at       document-start
// @grant        none
// ==/UserScript==
(function () {
    'use strict';

    /* The base64 javascript require is a workaround for a tampermonkey issue:
     * https://github.com/Tampermonkey/tampermonkey/issues/1176
     */

    const daelIS = new DaelIS();
    daelIS.addExtension(BestiaryExporter);
    daelIS.addExtension(DamageMeter);
    daelIS.addExtension(DisplayPricesInventory);
    daelIS.addExtension(MarketplaceFilter);
    daelIS.addExtension(ResourceTracker);
    daelIS.addExtension(NoGatheringIronman);
})();