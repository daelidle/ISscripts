// ==UserScript==
// @name         Idlescape No Gathering Ironman
// @namespace    DaelIS
// @version      1.1.3
// @description  Hides Gathering Skills Nodes
// @author       Dael
// @updateURL    https://raw.githubusercontent.com/daelidle/ISscripts/main/userscripts/NoGatheringIronman.user.js
// @downloadURL  https://raw.githubusercontent.com/daelidle/ISscripts/main/userscripts/NoGatheringIronman.user.js
// @require      https://raw.githubusercontent.com/HighOnMikey/idlescape-socketio-listener/main/src/idlescape-listener.js
// @require      https://raw.githubusercontent.com/daelidle/ISscripts/main/src/DaelIS.js
// @require      https://raw.githubusercontent.com/daelidle/ISscripts/main/src/NoGatheringIronman/NoGatheringIronman.js
// @require      https://raw.githubusercontent.com/daelidle/ISscripts/main/src/State/State.js
// @require      https://raw.githubusercontent.com/daelidle/ISscripts/main/src/utils/GeneralUtils.js
// @match        *://*.idlescape.com/game*
// @match        *://idlescape.com/game*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const daelIS = new DaelIS();
    daelIS.addExtension(NoGatheringIronman);
})();