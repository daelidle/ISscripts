// ==UserScript==
// @name         Idlescape Inventory Filter
// @namespace    DaelIS
// @version      1.1.0
// @description  Adds an advanced icon powered inventory filter
// @author       Dael
// @updateURL    https://raw.githubusercontent.com/daelidle/ISscripts/main/userscripts/InventoryFilter.user.js
// @downloadURL  https://raw.githubusercontent.com/daelidle/ISscripts/main/userscripts/InventoryFilter.user.js
// @require      https://raw.githubusercontent.com/HighOnMikey/idlescape-socketio-listener/main/src/idlescape-listener.js
// @require      https://raw.githubusercontent.com/daelidle/ISscripts/main/src/DaelIS.js
// @require      https://raw.githubusercontent.com/daelidle/ISscripts/main/src/InventoryFilter/InventoryFilter.js
// @require      https://raw.githubusercontent.com/daelidle/ISscripts/main/src/State/State.js
// @require      https://raw.githubusercontent.com/daelidle/ISscripts/main/src/utils/GeneralUtils.js
// @match        *://*.idlescape.com/game*
// @match        *://idlescape.com/game*
// @grant        none
// ==/UserScript==
(function() {
    'use strict';

    const daelIS = new DaelIS();
    daelIS.addExtension(InventoryFilter);
})();