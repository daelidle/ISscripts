class MeterUI {

    BASE_DAMAGE_METER_SCRIPT_NAME = "damage_meter";
    CSS_FILE_URL = 'https://daelidle.github.io/ISscripts/src/DamageMeter/css/damagemeter.css';
    meterSwitchIcon = 'https://raw.githubusercontent.com/daelidle/ISscripts/main/assets/images/DamageMeter/meter_switch.png';
    config;

    constructor(config) {
        this.config = config;
    }

    setupUI(isFirstGameReady){
        if (isFirstGameReady) injectCSS(`${this.CSS_FILE_URL}?t=${Date.now()}`);
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
            document.querySelectorAll(".nav-tab-spacer")
                .forEach(navBar => {
                    if (navBar.getElementsByClassName(ui.BASE_DAMAGE_METER_SCRIPT_NAME).length === 0) {
                        ui._injectDamageMeterDiv(navBar);
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
        anchor.insertAdjacentHTML('beforeend', baseDiv);
    }

    _updateMeter(players, meterType){
        if (players.length === 0) return;
        const anchor = document.getElementsByClassName(this.BASE_DAMAGE_METER_SCRIPT_NAME);
        if (anchor.length === 0) return;

        let playersHtml = `<img class="dm_switcher" alt="Switch between DPS/Tanking/Healing Meters" src="${this.meterSwitchIcon}">`;
        players.forEach(player => playersHtml += this._generatePlayerHtml(player, meterType));
        anchor[0].innerHTML = playersHtml;
        const switcher = document.getElementsByClassName("dm_switcher")[0];
        switcher.addEventListener("click",function(){
            window.damageMeter.changeMeterType();
        },false);
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
                         <div class="dps">
                            <div><span class="damage-stats">${shortenNumber(player.amount)}</span><span class="label"> ${amountString}</span></div>
                         </div>
                         <div class="dps">
                            <div><span class="damage-stats">${player.perSecond}</span><span class="label"> ${perSecondString}</span></div>
                         </div>
                      </div>
                      <div class="meterbar">
                         <div class="damage-percent-bg">
                            <div class="damage-percent-fg" style="width: ${barPixels}px;"></div>
                         </div>
                         <div class="damage-percent">${player.contribution}%</div>
                      </div>
                      <div class="maxhit">${maxString}: ${player.max}</div>
                   </div>`;
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
