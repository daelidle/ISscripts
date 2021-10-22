// ==UserScript==
// @name         Idlescape Resources Tracker
// @namespace    DaelIS
// @version      1.2.0
// @description  Show a summary for all resources gained/lost since you logged in
// @author       Dael
// @updateURL    https://raw.githubusercontent.com/daelidle/ISscripts/main/userscripts/ResourcesTracker.user.js
// @downloadURL  https://raw.githubusercontent.com/daelidle/ISscripts/main/userscripts/ResourcesTracker.user.js
// @require      https://raw.githubusercontent.com/HighOnMikey/idlescape-socketio-listener/main/src/idlescape-listener.js
// @require      https://raw.githubusercontent.com/daelidle/ISscripts/main/src/ResourcesTracker/ResourceTracker.js
// @require      https://raw.githubusercontent.com/daelidle/ISscripts/main/src/ResourcesTracker/TrackerUI.js
// @require      https://raw.githubusercontent.com/daelidle/ISscripts/main/src/utils/GeneralUtils.js
// @require      https://raw.githubusercontent.com/daelidle/ISscripts/main/src/utils/ItemUtils.js
// @require      https://raw.githubusercontent.com/daelidle/ISscripts/main/src/utils/UiUtils.js
// @require      https://raw.githubusercontent.com/daelidle/ISscripts/main/data/IdlescapeGameData.js
// @match        *://*.idlescape.com/game*
// @match        *://idlescape.com/game*
// @grant        none
// ==/UserScript==
(function() {
    'use strict';

    // Intercept socket init
    IdlescapeSocketListener.attach();

    const resources = {};
    new ResourceTracker(resources);
    onGameReady(() => new TrackerUI(resources).setupUI());
})();