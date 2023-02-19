class MeterUI {

    BASE_DAMAGE_METER_SCRIPT_NAME = "damage_meter";
    CSS_FILE_URL = 'https://daelidle.github.io/ISscripts/src/DamageMeter/css/damagemeter.css';
    meterSwitchIcon = 'https://raw.githubusercontent.com/daelidle/ISscripts/main/assets/images/DamageMeter/meter_switch.png';
    breakdownIcon = 'https://raw.githubusercontent.com/daelidle/ISscripts/main/assets/images/DamageMeter/breakdown.png';
    breakdownIcon = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAApgAAAKYB3X3/OAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAJVSURBVEiJtZZNSJRRFIafcz81R1NKImoROlphEE3RBymVtHBXQS4MkhYxYKlY0CpatRCiTRQITimJGUUUSAtdRC1yWmVDFGWgoaaVSUj+/4TzzWkh/pSjM1/pu7rcc+77vJcL915RVVwpmNwBMgYaQiSE44Q4MvMOohvJcgBvzcQWQQ8hmo9KPkJGd/n6XILJSxcIz1Hjp2Dyy9+lhGjm2YHxsyLcBDwgIDF2pRRC5ANBz0UKpuqXBeyo/pnuWEl1CCdjWEZTOugdXnoKOTxVMjdp5gaZgZGN4YSkN/9oviDVUwQ9/iUAC+uaQM5/mS9QbhBM2TYP8AZG84DS1TEHIB2J1IOIkcdYgrlF7KN0J6WQF4k+4/0xfhDwrar5nCzLNmqxd03MAVRtY5B9awZAbKOq7nYg9MbfrGkJwPZ427NvT/i6z01nucrjrRkLAfvjygNd/ArbuzP9rYjuiWNJpxElFHcayJF1iY0YqZrlxdSwUdG4AbPS4+39DTtV9GoczW1G1bgEAEhV58DdVqB5xSjwyvRUpL5FeeaSYMIR68G3ocpLQMeyAJU2A2A5lh8YcQnZNDydVx+RzcXAaJT605aipk4D8Om85ysqF1wCAD3wsf96OaKn+fPQByMziWdg0XXdXZHaKCINbhEC5e3f729QuLJorrSl+NEARHmTcwITJYpWAxkuKO97ytJ8R5+ceIjKUHNRU9l8Kdqjn1U7udU4Wgt6LIa1gt4LO9blvsqU/qjslb4t3tqxXHGMLaK2KjawCxhE6cXwWSKmrqsi5fVKCX4DDCDTtEDW0H0AAAAASUVORK5CYII=';
    config;

    constructor(config) {
        this.config = config;
        this.breakdownModal = new MeterUIBreakdownModal();
    }

    setupUI(isFirstGameReady, customModalClass){
        if (isFirstGameReady) {
            /* TODO: When Test server is released to prod, go back to CSS file (Github pages don't allow for branches on deployment)
             * injectCSS(`${this.CSS_FILE_URL}?t=${Date.now()}`);
             */
            const css = '.damage_meter{display:flex;text-align:center;justify-content:center;align-items:center;position:absolute;width:100%;z-index:31;}.damage_meter .row{flex:1;text-shadow:0 0 8px #000;margin:0 6px;max-width:160px;z-index:1}.damage_meter .row.job-dps .data-items:before{background:rgba(244,67,54,.5)}.damage_meter .row.job-dps .data-items.highlight:before{background-image:linear-gradient(to left,rgba(244,67,54,.5) 0,rgba(244,67,54,.5) 51%,rgba(244,67,54,.1) 51%,rgba(244,67,54,.1) 100%);background-repeat:no-repeat}.damage_meter .row.job-tank .data-items:before{background:rgba(32,149,243,.5)}.damage_meter .row.job-tank .data-items.highlight:before{background-image:linear-gradient(to left,rgba(32,149,243,.5) 0,rgba(32,149,243,.5) 51%,rgba(32,149,243,.1) 51%,rgba(32,149,243,.1) 100%);background-repeat:no-repeat}.damage_meter .row.job-healer .data-items:before{background:rgba(139,195,74,.5)}.damage_meter .row.job-healer .data-items.highlight:before{background-image:linear-gradient(to left,rgba(139,195,74,.5) 0,rgba(139,195,74,.5) 51%,rgba(139,195,74,.1) 51%,rgba(139,195,74,.1) 100%);background-repeat:no-repeat}.damage_meter .row.job-healer .data-items.highlight.inverse:before{background-image:linear-gradient(to left,rgba(139,195,74,.1) 0,rgba(139,195,74,.1) 51%,rgba(139,195,74,.5) 51%,rgba(139,195,74,.5) 100%);background-repeat:no-repeat}.damage_meter .row.job-dps .damage-percent-bg{background:rgba(244,67,54,.3)}.damage_meter .row.job-tank .damage-percent-bg{background:rgba(33,150,243,.3)}.damage_meter .row.job-healer .damage-percent-bg{background:rgba(139,195,74,.3)}.damage_meter .row.job-dps .damage-percent-fg{background:rgba(244,67,54,.7)}.damage_meter .row.job-tank .damage-percent-fg{background:rgba(33,150,243,.7)}.damage_meter .row.job-healer .damage-percent-fg{background:rgba(139,195,74,.7)}.damage_meter .row .damage-percent-bg{height:2px;background:rgba(0,0,0,.3);transform:skew(-30deg);position:relative;left:-8px;margin:0}.damage_meter .row .damage-percent-fg{height:2px;background:rgba(0,0,0,.7);transform:skew(-30deg);margin:0}.damage_meter .row .damage-percent{position:relative;text-align:right;width:100%;font-size:7px;top:-2px;right:10px}.damage_meter .row .meter-section{color:#fff;text-shadow:0 0 5px #000;padding:0 5px 2px 0;margin:3px 0 0;flex-grow:1;position:relative;text-align:right}.damage_meter .row .data-items:before{background:rgba(0,0,0,.3);transform:skew(-30deg);content:\'\';display:block;position:absolute;width:100%;height:96%}.damage_meter .row>div{margin:0 auto;padding:0 0 1px}.damage_meter .name{white-space:nowrap;text-shadow:none}.damage_meter .data-items{display:flex;width:160px;position:relative}.damage_meter .meter-section:last-child{text-align:right;padding-right:8px;padding-left:0}.damage_meter .meter-section span.label{font-size:8px;margin:0 0 0 2px;padding:0}.damage_meter .row .maxhit{font-size:.85em;margin-top:-.3em;margin-left:-.8em;text-align:center;width:140px;z-index:0}.damage_meter .row .meterbar{width:160px}.dm_summary_row{display:flex;flex-wrap:wrap;margin:-.5rem}.dm_summary_row .dm_item{margin:.5rem;font-size:12px;width:70px}.close_meter_message{float:right;cursor:pointer;margin-right:10px}.dm_summary_duration{font-size:smaller;margin-left:1em}.damage_meter .row.job-edps .data-items:before{background:rgba(244,168,54,.5)}.damage_meter .row.job-edps .data-items.highlight:before{background-image:linear-gradient(to left,rgba(244,168,54,.5) 0,rgba(244,168,54,.5) 51%,rgba(244,168,54,.1) 51%,rgba(244,168,54,.1) 100%);background-repeat:no-repeat}.damage_meter .row.job-edps .damage-percent-bg{background:rgba(244,168,54,.3)}.damage_meter .row.job-edps .damage-percent-fg{background:rgba(244,168,54,.7)}.dm_icon_button{width: 20px;height: 20px;margin-right:7px;z-index: 1;pointer-events: all !important;cursor:pointer;}.dm_breakdown{height:15px;width: 15px;margin-top: -3px;margin-right: -14px;}';
            injectCSS(css);
            injectCSS(`.${customModalClass} .MuiPaper-root {max-width: 75%;max-height: 100%;}`);
            this.breakdownModal.setupCss();
        }
        this._setUpMeterMutationObserver();
    }

    _setUpMeterMutationObserver(){
        const ui = this;
        const callback = function(mutationsList, observer) {
            let soloFightContainer = document.getElementsByClassName("combat-fight-container");
            let groupFightContainer = document.getElementsByClassName("group-combat-main");
            if (soloFightContainer.length === 0 && groupFightContainer.length === 0) {
                document.querySelectorAll(`.${ui.BASE_DAMAGE_METER_SCRIPT_NAME}`).forEach(meter => meter.remove());
                return;
            }
            document.querySelectorAll(".combat-fight-container, .group-combat-main")
                .forEach(combatContainer => {
                    if (combatContainer.getElementsByClassName(ui.BASE_DAMAGE_METER_SCRIPT_NAME).length === 0) {
                        ui._injectDamageMeterDiv(combatContainer);
                        window.damageMeter._updateMeter();
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
        const baseDiv = `<div class="${this.BASE_DAMAGE_METER_SCRIPT_NAME}"></div>`;
        anchor.insertAdjacentHTML('afterbegin', baseDiv);
    }

    _updateMeter(players, meterType){
        if (players.length === 0) return;
        const anchor = document.getElementsByClassName(this.BASE_DAMAGE_METER_SCRIPT_NAME);
        if (anchor.length === 0) return;

        let playersHtml = `<img class="dm_switcher dm_icon_button" alt="Switch between DPS/EDPS/Tanking/Healing Meters" src="${this.meterSwitchIcon}">`;
        players.forEach(player => playersHtml += this._generatePlayerHtml(player, meterType));
        anchor[0].innerHTML = playersHtml;
        const switcher = document.getElementsByClassName("dm_switcher")[0];
        switcher.addEventListener("click",function(){
            window.damageMeter.changeMeterType();
        },false);
        const breakdownContainers = document.getElementsByClassName("dm_breakdown");
        Array.from(breakdownContainers).forEach(breakdown => {
            breakdown.addEventListener("click",function(){
                window.damageMeter.showBreakdownModal(this);
            },false);
        });
    }

    _generatePlayerHtml(player, meterType){
        const barPixels = player.contribution / 100 * 140;
        let amountString;
        let perSecondString;
        let maxString;
        let cssClass;

        switch (meterType) {
            case meterTypes.DPS:
                cssClass = 'job-dps';
                amountString = 'DMG';
                perSecondString = 'DPS';
                maxString = 'Max Hit';
                break;
            case meterTypes.EDPS:
                cssClass = 'job-edps';
                amountString = 'DMG';
                perSecondString = 'EDPS';
                maxString = 'Max Hit';
                break;
            case meterTypes.TANK:
                cssClass = 'job-tank';
                amountString = 'ABS';
                perSecondString = 'APS';
                maxString = 'Max ABS';
                break;
            case meterTypes.HEALER:
                cssClass = 'job-healer';
                amountString = 'HEAL';
                perSecondString = 'HPS';
                maxString = 'Max HEAL';
                break;
        }
        return `<div class="row ${cssClass}" style="order: ${player.order};">
                      <div class="name"><span class="rank">${player.order}. </span><span class="character-name ">${player.name}</span></div>
                      <div class="data-items highlight">
                         <div class="meter-section meter-section-left">
                            <div><span class="damage-stats">${shortenNumber(player.amount)}</span><span class="label"> ${amountString}</span></div>
                         </div>
                         <div class="meter-section meter-section-right">
                            <div><span class="damage-stats">${player.perSecond}</span><span class="label"> ${perSecondString}</span></div>
                         </div>
                      </div>
                      <div class="meterbar">
                         <div class="damage-percent-bg">
                            <div class="damage-percent-fg" style="width: ${barPixels}px;"></div>
                         </div>
                         <div class="damage-percent">${player.contribution}%</div>
                      </div>
                      <img class="dm_breakdown dm_icon_button" alt="Breakdown Damage Metrics" src="${this.breakdownIcon}" data-playername="${player.name}">
                      <div class="maxhit">${maxString}: ${player.max}</div>
                   </div>`;
    }

    generateBreakdownModal(player, abilities){
        const title = `${player.name}'s Damage Breakdown`;
        const message = this.breakdownModal.generatePlayerBreakdownPanelHtml(abilities, player.damageDealtBreakdown, player.effectiveDamageDealtBreakdown, player.damageReceivedBreakdown);
        return {'title': title, 'message': message}
    }

    setupBreakdownModalTriggers(selectedBreakdownType){
        this.breakdownModal.setupBreakdownModalTriggers(selectedBreakdownType);
    }

    showExtensionSettings(){
        const title = "Damage Meter Configuration";
        const checked = (this.config.showActivitySummary) ? 'checked' : '';
        const message = `<div class="daelidle_config_extensions "><input type="checkbox" class="daelis_meter_config" data-field="showActivitySummary" ${checked}>showActivitySummary</div>`;
        displayPopup(title, message, () => this._processNewConfig(), () => {});
    }

    _processNewConfig(){
        const showActivitySummary = document.getElementsByClassName('daelis_meter_config')[0];
        if (showActivitySummary === undefined) return;

        this.config.showActivitySummary = showActivitySummary.checked;
        this.config.save();
    }

}
