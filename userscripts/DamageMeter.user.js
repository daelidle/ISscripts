// ==UserScript==
// @name         Idlescape Damage Meter
// @namespace    DaelIS
// @version      1.0.0
// @description  Show a damage meter on group combat
// @author       Dael
// @credits      UI design adapted from bsides's Horizoverlay FFXIV damage meter overlay (https://github.com/bsides/horizoverlay)
// @updateURL    https://raw.githubusercontent.com/daelidle/ISscripts/main/userscripts/DamageMeter.user.js
// @downloadURL  https://raw.githubusercontent.com/daelidle/ISscripts/main/userscripts/DamageMeter.user.js
// @require      https://raw.githubusercontent.com/HighOnMikey/idlescape-socketio-listener/main/src/idlescape-listener.js
// @require      https://raw.githubusercontent.com/daelidle/ISscripts/main/src/utils/GeneralUtils.js
// @require      https://raw.githubusercontent.com/daelidle/ISscripts/main/src/utils/ChatUtils.js
// @require      https://raw.githubusercontent.com/daelidle/ISscripts/main/src/DamageMeter/MeterUI.js
// @require      https://raw.githubusercontent.com/daelidle/ISscripts/main/src/DamageMeter/DamageMeter.js
// @require      https://raw.githubusercontent.com/daelidle/ISscripts/main/src/DamageMeter/Combat.js
// @match        *://*.idlescape.com/game*
// @grant        none
// ==/UserScript==
(function() {
    'use strict';

    // Intercept socket init
    IdlescapeSocketListener.attach();

    let ui = new UI();
    const meter = new DamageMeter(ui);
    window.damageMeter = meter;
    onGameReady(() => ui.setupUI());
})();