// ==UserScript==
// @name         Idlescape Inventory Filter
// @namespace    DaelIS
// @version      1.0.2
// @description  Adds an advanced icon powered inventory filter
// @author       Dael
// @updateURL    https://raw.githubusercontent.com/daelidle/ISscripts/main/userscripts/InventoryFilter.user.js
// @downloadURL  https://raw.githubusercontent.com/daelidle/ISscripts/main/userscripts/InventoryFilter.user.js
// @require      https://raw.githubusercontent.com/daelidle/ISscripts/main/src/utils/GeneralUtils.js
// @require      https://raw.githubusercontent.com/daelidle/ISscripts/main/src/InventoryFilter/InventoryFilter.js
// @match        *://*.idlescape.com/game*
// @match        *://idlescape.com/game*
// @grant        none
// ==/UserScript==
(function() {
    'use strict';
    onGameReady(() => new InventoryFilter());
})();