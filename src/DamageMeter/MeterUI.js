class UI {

    BASE_DAMAGE_METER_SCRIPT_NAME = "damage_meter";

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
                document.querySelectorAll(`.${ui.BASE_DAMAGE_METER_SCRIPT_NAME}`).forEach(meter => meter.remove());
                return;
            }
            document.querySelectorAll(".nav-tab-spacer")
                .forEach(navBar => {
                    if (navBar.getElementsByClassName(ui.BASE_DAMAGE_METER_SCRIPT_NAME).length === 0) {
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
        const baseDiv = `<div class="${this.BASE_DAMAGE_METER_SCRIPT_NAME}"></div>`;
        anchor.insertAdjacentHTML('beforeend', baseDiv);
    }

    _updateMeter(players, totalDamage, combatDurationSeconds){
        if (players.length === 0) return;
        const anchor = document.getElementsByClassName(this.BASE_DAMAGE_METER_SCRIPT_NAME);
        if (anchor.length === 0) return;

        let playersHtml = '';
        players.forEach((player, order) => playersHtml += this._generatePlayerHtml(player, order+1, totalDamage, combatDurationSeconds));
        anchor[0].innerHTML = playersHtml;
    }

    _generatePlayerHtml(player, order, totalDamage, combatDurationSeconds){
        const contribution = Math.round((player.damageDealt / totalDamage) * 100);
        const barPixels = contribution / 100 * 140;
        const dps = (player.damageDealt / combatDurationSeconds).toFixed(2);
        const dealtDamage = shortenNumber(player.damageDealt);
        return `<div class="row job-dps" style="order: ${order};">
                      <div class="name"><span class="rank">${order}. </span><span class="character-name ">${player.name}</span></div>
                      <div class="data-items highlight">
                         <div class="dps">
                            <div><span class="damage-stats">${dealtDamage}</span><span class="label"> DMG</span></div>
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
