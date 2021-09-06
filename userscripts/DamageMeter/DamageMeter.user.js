// ==UserScript==
// @name         Idlescape Damage Meter
// @namespace    DaelIS
// @version      0.1.0
// @description  Show a damage meter on group combat
// @author       Dael
// @updateURL    https://raw.githubusercontent.com/daelidle/ISscripts/main/userscripts/DamageMeter/DamageMeter.user.js
// @downloadURL  https://raw.githubusercontent.com/daelidle/ISscripts/main/userscripts/DamageMeter/DamageMeter.user.js
// @require      https://raw.githubusercontent.com/HighOnMikey/idlescape-socketio-listener/main/src/idlescape-listener.js
// @resource     meterCSS https://raw.githubusercontent.com/daelidle/ISscripts/main/userscripts/DamageMeter/css/damagemeter.css
// @match        *://*.idlescape.com/game*
// @grant        GM_getResourceText
// @grant        GM_addStyle
// ==/UserScript==
(function() {
    'use strict';
    const BASE_DAMAGE_METER_SCRIPT_NAME = "damage_meter";
    let meter;
    let ui;

    // Intercept socket init
    IdlescapeSocketListener.attach();

    const playerTypes = {
        DPS: {
            PHYSICAL: "physical",
            RANGED: "ranged",
            MAGIC: "magic"
        },
        TANK: "tank",
        HEALER: "healer"
    }

    class Player {
        name = '';
        currentHP = 0;
        damageDealt = 0;
        damageReceived = 0;
        healing = 0;
        maxHit = 0;
        type = playerTypes.DPS.PHYSICAL;

        constructor(name) {
            this.name = name;
        }
    }

    class DamageMeter {
        group;
        onCombat = false;
        combatStartTimestamp = null;
        combatFinishTimestamp = null;

        constructor() {
            this.group = {};
            let attachToSocket = setInterval(()=> {
                if( typeof window.IdlescapeListener !== "undefined" ){
                    clearInterval(attachToSocket);
                    window.IdlescapeListener.messages.addEventListener("message", message => this.parseSocketMessage(message));
                    window.IdlescapeListener.messages.addEventListener("connected", () => start());
                    window.IdlescapeListener.messages.addEventListener("disconnected", () => start());
                    console.log('Idlescape Damage Meter: Attached to socket!');
                }
            }, 100);
        }

        parseSocketMessage(message){
            switch (message.event){
                case "combat hit":
                    this._parseCombatHit(message.data);
                    break;
                case "start attack animation":
                    this._parseAttackAnimation(message.data);
                    break;
                case "update player":
                    this._parseUpdatePlayer(message.data);
                    break;
                default:
                    break;
            }
        }

        _parseCombatHit(combatHit) {
            let damageType = combatHit.damageType;
            let source = combatHit.source;
            let target = combatHit.target;
            let damage = combatHit.hit;
            let isCritical = combatHit.crit;
            let isSourceMonster = !(source in this.group);

            switch (damageType) {
                case 'miss':
                    break;
                case 'heal':
                    if (!isSourceMonster) this.group[source].healing += damage;
                    break;
                case 'physical':
                    if (!isSourceMonster) {
                        this.group[source].damageDealt += damage;
                        if (damage > this.group[source].maxHit) this.group[source].maxHit = damage;
                    }
                    else this.group[target].damageReceived += damage;
                    break;
                default:
                    console.log(`New type of Hit ${damageType}`);
                    break;
            }
            this._updateMeter();
        }

        _parseUpdatePlayer(playerInfo) {
            if (playerInfo['portion'] === "all") {
                // Complete player message sent on login
                const inCombat = this._parseCombatStatusFromActionQue(playerInfo['value']['actionQue']);
                if (inCombat) {
                    const name = playerInfo['value']['username'];
                    this.group[name] = new Player(name);
                }
                this._changeCombatStatus(inCombat);
            } else if (Array.isArray(playerInfo['portion']) && playerInfo['portion'].includes("group")) {
                // Group info message
                for (const [_, player] of Object.entries(playerInfo['value'])) {
                    let playerName = player.username;
                    let currentHP = player.combatStats.currentHealth;
                    if (!(playerName in this.group)) this.group[playerName] = new Player(playerName);
                    this.group[playerName].currentHP = currentHP;
                }
            } else if (Array.isArray(playerInfo['portion']) && playerInfo['portion'].includes("actionQue")) {
                // New Action message
                const combatStatus = this._parseCombatStatusFromActionQue(playerInfo['value']);
                this._changeCombatStatus(combatStatus);
            }
        }

        _parseAttackAnimation(message) {
            //console.log("start attack animation");
        }

        _updateMeter(){
            let players = Object.values(this.group);
            players.sort((a, b) => parseFloat(a.damageDealt) - parseFloat(b.damageDealt));

            let totalDamage = 0;
            players.forEach(player => totalDamage += player.damageDealt);

            let elapsedSeconds = (new Date().getTime() - this.combatStartTimestamp.getTime()) / 1000;
            ui._updateMeter(players, totalDamage, elapsedSeconds);
        }

        _parseCombatStatusFromActionQue(actionQue){
            let inCombat = false;
            actionQue.forEach(action => {
                if ("action" in action){
                    inCombat = (action.action === "combat");
                }
            });
            return inCombat;
        }

        _changeCombatStatus(combatStatus){
            if (this.onCombat === combatStatus) return;
            console.log("Changing combat status to "+combatStatus);
            this.onCombat = combatStatus;
            if (this.onCombat) {
                this.combatStartTimestamp = new Date();
                this.group = {};
            } else {
                this.combatFinishTimestamp = new Date();
            }
        }
    }

    class UI {

        setupUI(){
            GM_addStyle(GM_getResourceText("meterCSS"));
            this._setUpMeterMutationObserver();
        }

        _setUpMeterMutationObserver(){
            const ui = this;
            const callback = function(mutationsList, observer) {
                let soloFightContainer = document.getElementsByClassName("combat-fight-container");
                let groupFightContainer = document.getElementsByClassName("group-combat-main");
                if (soloFightContainer.length === 0 && groupFightContainer.length === 0) {
                    document.querySelectorAll(`.${BASE_DAMAGE_METER_SCRIPT_NAME}`).forEach(meter => meter.remove());
                    return;
                }
                document.querySelectorAll(".nav-tab-spacer")
                    .forEach(navBar => {
                        if (navBar.getElementsByClassName(BASE_DAMAGE_METER_SCRIPT_NAME).length === 0) {
                            ui._injectDamageMeterDiv(navBar)
                        }
                    });
            };

            // Observe Play Area DOM changes
            const playAreaContainer = document.getElementsByClassName("play-area-container")[0];
            const config = {attributes: true, childList: true, subtree: true };
            const observer = new MutationObserver(callback);
            observer.observe(playAreaContainer, config);
        }

        _injectDamageMeterDiv(anchor){
            const baseDiv = `<div class="${BASE_DAMAGE_METER_SCRIPT_NAME}"></div>`;
            anchor.insertAdjacentHTML('beforeend', baseDiv);
        }

        _updateMeter(players, totalDamage, combatDurationSeconds){
            if (players.length === 0) return;
            const anchor = document.getElementsByClassName(BASE_DAMAGE_METER_SCRIPT_NAME);
            if (anchor.length === 0) return;

            let playersHtml = '';
            players.forEach((player, order) => playersHtml += this._generatePlayerHtml(player, order+1, totalDamage, combatDurationSeconds));
            anchor[0].innerHTML = playersHtml;
        }

        _generatePlayerHtml(player, order, totalDamage, combatDurationSeconds){
            const contribution = Math.round((player.damageDealt / totalDamage) * 100);
            const barPixels = contribution / 100 * 140;
            const dps = (player.damageDealt / combatDurationSeconds).toFixed(2);
            return `<div class="row job-dps" style="order: ${order};">
                          <div class="name"><span class="rank">${order}. </span><span class="character-name ">${player.name}</span></div>
                          <div class="data-items highlight">
                             <div class="dps">
                                <div><span class="damage-stats">${player.damageDealt}</span><span class="label"> DMG</span></div>
                             </div>
                             <div class="dps">
                                <div><span class="damage-stats">${dps}</span><span class="label"> DPS</span></div>
                             </div>
                          </div>
                          <div class="meterbar">
                             <div class="damage-percent-bg">
                                <div class="damage-percent-fg" style="width: ${barPixels}px;"></div>
                             </div>
                             <div class="damage-percent">${contribution}%</div>
                          </div>
                          <div class="maxhit">Max Hit: ${player.maxHit}</div>
                       </div>`;
        }

    }

    function _onGameReady(callback) {
        const gameContainer = document.getElementsByClassName("play-area-container");
        if(gameContainer.length === 0) {
            setTimeout(function(){_onGameReady(callback);}, 250 );
        } else {
            callback();
        }
    }

    function start(){
        _onGameReady(function(){
            ui = new UI();
            ui.setupUI();
        });
    }

    meter = new DamageMeter();
    start();
})();