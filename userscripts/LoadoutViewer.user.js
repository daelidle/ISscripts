// ==UserScript==
// @name         Idlescape Loadout Viewer
// @namespace    DaelIS
// @version      1.1.0
// @description  Show currently saved Loadouts
// @author       Dael
// @updateURL    https://raw.githubusercontent.com/daelidle/ISscripts/main/userscripts/LoadoutViewer.user.js
// @downloadURL  https://raw.githubusercontent.com/daelidle/ISscripts/main/userscripts/LoadoutViewer.user.js
// @require      https://raw.githubusercontent.com/HighOnMikey/idlescape-socketio-listener/main/src/idlescape-listener.js
// @require      https://raw.githubusercontent.com/daelidle/ISscripts/main/src/DaelIS.js
// @require      https://raw.githubusercontent.com/daelidle/ISscripts/main/src/LoadoutViewer/LoadoutViewer.js
// @require      https://raw.githubusercontent.com/daelidle/ISscripts/main/src/LoadoutViewer/LoadoutConfig.js
// @require      https://raw.githubusercontent.com/daelidle/ISscripts/main/src/LoadoutViewer/LoadoutUI.js
// @require      https://raw.githubusercontent.com/daelidle/ISscripts/main/src/LoadoutViewer/LoadoutUIGear.js
// @require      https://raw.githubusercontent.com/daelidle/ISscripts/main/src/LoadoutViewer/LoadoutUIFood.js
// @require      https://raw.githubusercontent.com/daelidle/ISscripts/main/src/State/State.js
// @require      https://raw.githubusercontent.com/daelidle/ISscripts/main/src/utils/GeneralUtils.js
// @require      https://raw.githubusercontent.com/daelidle/ISscripts/main/src/utils/UiUtils.js
// @require      https://raw.githubusercontent.com/daelidle/ISscripts/main/data/IdlescapeGameData.js
// @match        *://*.idlescape.com/game*
// @match        *://idlescape.com/game*
// @grant        none
// ==/UserScript==
(function() {
    'use strict';

    const daelIS = new DaelIS();
    daelIS.addExtension(LoadoutViewer);
})();