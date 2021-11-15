// ==UserScript==
// @name         Idlescape Show prices on Inventory
// @namespace    DaelIS
// @version      1.1.2
// @description  Display Idlescape official api prices on inventory items
// @author       Dael
// @run-at       document-start
// @match        *://*.idlescape.com/game*
// @match        *://idlescape.com/game*
// @updateURL    https://raw.githubusercontent.com/daelidle/ISscripts/main/userscripts/DisplayPricesOnInventory.user.js
// @downloadURL  https://raw.githubusercontent.com/daelidle/ISscripts/main/userscripts/DisplayPricesOnInventory.user.js
// @require      https://raw.githubusercontent.com/daelidle/ISscripts/main/src/utils/GeneralUtils.js
// @require      https://raw.githubusercontent.com/daelidle/ISscripts/main/src/DisplayPricesInventory/DisplayPricesInventory.js
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    onGameReady(() => new DisplayPricesInventory().start());
})();