// ==UserScript==
// @name         Idlescape Show prices on Inventory
// @namespace    DaelIS
// @version      1.2.0
// @description  Display Idlescape official api prices on inventory items
// @author       Dael
// @run-at       document-start
// @match        *://*.idlescape.com/game*
// @match        *://idlescape.com/game*
// @updateURL    https://raw.githubusercontent.com/daelidle/ISscripts/main/userscripts/DisplayPricesOnInventory.user.js
// @downloadURL  https://raw.githubusercontent.com/daelidle/ISscripts/main/userscripts/DisplayPricesOnInventory.user.js
// @require      https://raw.githubusercontent.com/HighOnMikey/idlescape-socketio-listener/main/src/idlescape-listener.js
// @require      https://raw.githubusercontent.com/daelidle/ISscripts/main/src/DaelIS.js
// @require      https://raw.githubusercontent.com/daelidle/ISscripts/main/src/DisplayPricesInventory/DisplayPricesInventory.js
// @require      https://raw.githubusercontent.com/daelidle/ISscripts/main/src/State/State.js
// @require      https://raw.githubusercontent.com/daelidle/ISscripts/main/src/utils/GeneralUtils.js
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const daelIS = new DaelIS();
    daelIS.addExtension(DisplayPricesInventory);
})();