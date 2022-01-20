// ==UserScript==
// @name         Idlescape - DaelIS Userscripts
// @namespace    DaelIS
// @version      1.1.9
// @description  Collection of utilities and QOL improvements for Idlescape.
// @author       Dael
// @icon         https://raw.githubusercontent.com/daelidle/ISscripts/main/assets/images/config-icon.png
// @updateURL    https://raw.githubusercontent.com/daelidle/ISscripts/main/userscripts/DaelIS.user.js
// @downloadURL  https://raw.githubusercontent.com/daelidle/ISscripts/main/userscripts/DaelIS.user.js
// @require      https://cdn.jsdelivr.net/npm/bigpicture@2.5.3/dist/BigPicture.min.js
// @require      data:text/javascript;base64,dGhpcy5nbG9iYWxUaGlzID0gdGhpczs=
// @require      https://unpkg.com/@popperjs/core@2
// @require      https://unpkg.com/tippy.js@6
// @require      https://raw.githubusercontent.com/HighOnMikey/idlescape-socketio-listener/main/src/idlescape-listener.js
// @require      https://raw.githubusercontent.com/daelidle/ISscripts/main/src/DaelIS.js
// @require      https://raw.githubusercontent.com/daelidle/ISscripts/main/src/DaelISConfigUI.js
// @require      https://raw.githubusercontent.com/daelidle/ISscripts/main/src/DamageMeter/MeterUI.js
// @require      https://raw.githubusercontent.com/daelidle/ISscripts/main/src/DamageMeter/MeterConfig.js
// @require      https://raw.githubusercontent.com/daelidle/ISscripts/main/src/DamageMeter/DamageMeter.js
// @require      https://raw.githubusercontent.com/daelidle/ISscripts/main/src/DamageMeter/Combat.js
// @require      https://raw.githubusercontent.com/daelidle/ISscripts/main/src/DisplayPricesInventory/DisplayPricesInventory.js
// @require      https://raw.githubusercontent.com/daelidle/ISscripts/main/src/InventoryFilter/InventoryFilter.js
// @require      https://raw.githubusercontent.com/daelidle/ISscripts/main/src/LoadoutViewer/LoadoutViewer.js
// @require      https://raw.githubusercontent.com/daelidle/ISscripts/main/src/LoadoutViewer/LoadoutConfig.js
// @require      https://raw.githubusercontent.com/daelidle/ISscripts/main/src/LoadoutViewer/LoadoutUI.js
// @require      https://raw.githubusercontent.com/daelidle/ISscripts/main/src/LoadoutViewer/LoadoutUIAlias.js
// @require      https://raw.githubusercontent.com/daelidle/ISscripts/main/src/LoadoutViewer/LoadoutUIGear.js
// @require      https://raw.githubusercontent.com/daelidle/ISscripts/main/src/LoadoutViewer/LoadoutUIFood.js
// @require      https://raw.githubusercontent.com/daelidle/ISscripts/main/src/NoGatheringIronman/NoGatheringIronman.js
// @require      https://raw.githubusercontent.com/daelidle/ISscripts/main/src/Prices/Prices.js
// @require      https://raw.githubusercontent.com/daelidle/ISscripts/main/src/ResourcesTracker/Resource.js
// @require      https://raw.githubusercontent.com/daelidle/ISscripts/main/src/ResourcesTracker/ResourceTracker.js
// @require      https://raw.githubusercontent.com/daelidle/ISscripts/main/src/ResourcesTracker/TrackerConfig.js
// @require      https://raw.githubusercontent.com/daelidle/ISscripts/main/src/ResourcesTracker/TrackerUI.js
// @require      https://raw.githubusercontent.com/daelidle/ISscripts/main/src/State/State.js
// @require      https://raw.githubusercontent.com/daelidle/ISscripts/main/src/utils/ChatUtils.js
// @require      https://raw.githubusercontent.com/daelidle/ISscripts/main/src/utils/ConfigUtils.js
// @require      https://raw.githubusercontent.com/daelidle/ISscripts/main/src/utils/GeneralUtils.js
// @require      https://raw.githubusercontent.com/daelidle/ISscripts/main/src/utils/ItemUtils.js
// @require      https://raw.githubusercontent.com/daelidle/ISscripts/main/src/utils/TooltipsUtils.js
// @require      https://raw.githubusercontent.com/daelidle/ISscripts/main/src/utils/UiUtils.js
// @require      https://raw.githubusercontent.com/daelidle/ISscripts/main/data/IdlescapeGameData.js
// @match        *://*.idlescape.com/game*
// @match        *://idlescape.com/game*
// @match        *://*.idlescape.com/*
// @grant        none
// ==/UserScript==
(function() {
    'use strict';

    /* The base64 javascript require is a workaround for a tampermonkey issue:
     * https://github.com/Tampermonkey/tampermonkey/issues/1176
     */

    const daelIS = new DaelIS();
    daelIS.addExtension(DamageMeter);
    daelIS.addExtension(DisplayPricesInventory);
    daelIS.addExtension(InventoryFilter);
    daelIS.addExtension(LoadoutViewer);
    daelIS.addExtension(ResourceTracker);
    daelIS.addExtension(NoGatheringIronman);
})();