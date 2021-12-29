// ==UserScript==
// @name         Idlescape State Exposer
// @namespace    DaelIS
// @version      1.0.1
// @description  Expose Idlescape state to Window
// @author       Dael
// @updateURL    https://raw.githubusercontent.com/daelidle/ISscripts/main/userscripts/State.user.js
// @downloadURL  https://raw.githubusercontent.com/daelidle/ISscripts/main/userscripts/State.user.js
// @require      https://raw.githubusercontent.com/HighOnMikey/idlescape-socketio-listener/main/src/idlescape-listener.js
// @require      https://raw.githubusercontent.com/daelidle/ISscripts/main/src/State/State.js
// @require      https://raw.githubusercontent.com/daelidle/ISscripts/main/src/utils/GeneralUtils.js
// @match        *://*.idlescape.com/game*
// @match        *://idlescape.com/game*
// @grant        none

// ==/UserScript==
(function() {
    'use strict';

    // Intercept socket init
    IdlescapeSocketListener.attach();

    new State();
})();