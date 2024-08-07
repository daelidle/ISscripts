class MeterUI {

    BASE_DAMAGE_METER_SCRIPT_NAME = "damage_meter";
    CSS_FILE_URL = 'https://daelidle.github.io/ISscripts/src/DamageMeter/css/damagemeter.css';
    meterSwitchIcon = 'https://raw.githubusercontent.com/daelidle/ISscripts/main/assets/images/DamageMeter/meter_switch.png';
    breakdownIcon = 'https://raw.githubusercontent.com/daelidle/ISscripts/main/assets/images/DamageMeter/breakdown.png';
    cssFileClass = 'CssMeterUiFile';
    cssClass = 'CssMeterUi';
    observer;

    constructor() {
        this.breakdownModal = new MeterUIBreakdownModal();
    }

    setupUI(customModalClass) {
        injectCSS(`${this.CSS_FILE_URL}?t=${Date.now()}`, this.cssFileClass);
        injectCSS(`.${customModalClass} .MuiPaper-root {max-width: 75%;max-height: 100%;}`, this.cssClass);
        this.breakdownModal.setupCss();
        this._setUpMeterMutationObserver();
    }

    removeUI() {
        document.getElementsByClassName(this.cssFileClass)[0]?.remove();
        document.getElementsByClassName(this.cssClass)[0]?.remove();
        this.breakdownModal.removeCss();
        this.observer.disconnect();
        document.querySelectorAll(`.${this.BASE_DAMAGE_METER_SCRIPT_NAME}`).forEach(meter => meter.remove());
    }

    _setUpMeterMutationObserver() {
        const ui = this;
        const callback = function (mutationsList, observer) {
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
        const desktopContainer = document.getElementsByClassName("play-area-container");
        const mobileContainer = document.getElementsByClassName("mobile-layout");
        const playAreaContainer = desktopContainer.length > 0 ? desktopContainer[0] : mobileContainer[0];
        const config = {attributes: true, childList: true, subtree: true};
        this.observer = new MutationObserver(callback);
        this.observer.observe(playAreaContainer, config);
    }

    _injectDamageMeterDiv(anchor) {
        const baseDiv = `<div class="${this.BASE_DAMAGE_METER_SCRIPT_NAME}"></div>`;
        anchor.insertAdjacentHTML('afterbegin', baseDiv);
    }

    _updateMeter(players, meterType) {
        if (players.length === 0) return;
        const anchor = document.getElementsByClassName(this.BASE_DAMAGE_METER_SCRIPT_NAME);
        if (anchor.length === 0) return;

        let playersHtml = `<img class="dm_switcher dm_icon_button" alt="Switch between DPS/EDPS/Tanking/Healing Meters" src="${this.meterSwitchIcon}">`;
        players.forEach(player => playersHtml += this._generatePlayerHtml(player, meterType));
        anchor[0].innerHTML = playersHtml;
        const switcher = document.getElementsByClassName("dm_switcher")[0];
        switcher.addEventListener("click", function () {
            window.damageMeter.changeMeterType();
        }, false);
        const breakdownContainers = document.getElementsByClassName("dm_breakdown");
        Array.from(breakdownContainers).forEach(breakdown => {
            breakdown.addEventListener("click", function () {
                window.damageMeter.showBreakdownModal(this);
            }, false);
        });
    }

    _generatePlayerHtml(player, meterType) {
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
                      <div class="dm_bottom_info">
                        <img class="dm_breakdown dm_icon_button" alt="Breakdown Damage Metrics" src="${this.breakdownIcon}" data-playername="${player.name}">
                        <div class="maxhit">${maxString}: ${player.max}</div>
                      </div>
                   </div>`;
    }

    generateBreakdownModal(player, abilities, monsters) {
        const title = `${player.name}'s Damage Breakdown`;
        const message = this.breakdownModal.generatePlayerBreakdownPanelHtml(abilities, player.weaponAttackSpeed, player.damageDealtBreakdown, player.effectiveDamageDealtBreakdown, player.damageReceivedBreakdown, monsters);
        return {'title': title, 'message': message}
    }
}
