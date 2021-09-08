class UI {

    BASE_DAMAGE_METER_SCRIPT_NAME = "damage_meter";
    CSS_FILE_URL = 'https://daelidle.github.io/ISscripts/src/DamageMeter/css/damagemeter.css';

    setupUI(){
        injectCSS(`${this.CSS_FILE_URL}?t=${Date.now()}`);
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

        let playersHtml = '<img class="dm_switcher" alt="Switch between DPS/Tanking/Healing Meters" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUEAYAAADdGcFOAAABJmlDQ1BBZG9iZSBSR0IgKDE5OTgpAAAoz2NgYDJwdHFyZRJgYMjNKykKcndSiIiMUmA/z8DGwMwABonJxQWOAQE+IHZefl4qAwb4do2BEURf1gWZxUAa4EouKCoB0n+A2CgltTiZgYHRAMjOLi8pAIozzgGyRZKywewNIHZRSJAzkH0EyOZLh7CvgNhJEPYTELsI6Akg+wtIfTqYzcQBNgfClgGxS1IrQPYyOOcXVBZlpmeUKBhaWloqOKbkJ6UqBFcWl6TmFit45iXnFxXkFyWWpKYA1ULcBwaCEIWgENMAarTQZKAyAMUDhPU5EBy+jGJnEGIIkFxaVAZlMjIZE+YjzJgjwcDgv5SBgeUPQsykl4FhgQ4DA/9UhJiaIQODgD4Dw745AMDGT/0ZOjZcAAAACXBIWXMAAC4jAAAuIwF4pT92AAAJwmlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNi4wLWMwMDIgNzkuMTY0NDg4LCAyMDIwLzA3LzEwLTIyOjA2OjUzICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtbG5zOnRpZmY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vdGlmZi8xLjAvIiB4bWxuczpleGlmPSJodHRwOi8vbnMuYWRvYmUuY29tL2V4aWYvMS4wLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgMjIuMCAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIxLTA5LTA4VDIwOjUxOjQyKzAyOjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIxLTA5LTA4VDIwOjU0OjQ5KzAyOjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMS0wOS0wOFQyMDo1NDo0OSswMjowMCIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NWI4MThkNTAtMmIxOC1iZDRiLTliYWQtODkzNGQyYWNhY2YzIiB4bXBNTTpEb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6YWRjZWM4Y2UtZDc4NC01YzRkLWE3ODMtMmQxOTM5MTFlMGQ5IiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6ZjZhYTlhZWYtYzRmMC0xZTQyLWJlNTAtZmY0N2E2MWNhOGQwIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiBwaG90b3Nob3A6SUNDUHJvZmlsZT0iQWRvYmUgUkdCICgxOTk4KSIgdGlmZjpPcmllbnRhdGlvbj0iMSIgdGlmZjpYUmVzb2x1dGlvbj0iMzAwMDAwMC8xMDAwMCIgdGlmZjpZUmVzb2x1dGlvbj0iMzAwMDAwMC8xMDAwMCIgdGlmZjpSZXNvbHV0aW9uVW5pdD0iMiIgZXhpZjpDb2xvclNwYWNlPSI2NTUzNSIgZXhpZjpQaXhlbFhEaW1lbnNpb249IjY4MSIgZXhpZjpQaXhlbFlEaW1lbnNpb249IjY5MCI+IDx4bXBNTTpIaXN0b3J5PiA8cmRmOlNlcT4gPHJkZjpsaSBzdEV2dDphY3Rpb249ImNyZWF0ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6ZjZhYTlhZWYtYzRmMC0xZTQyLWJlNTAtZmY0N2E2MWNhOGQwIiBzdEV2dDp3aGVuPSIyMDIxLTA5LTA4VDIwOjUxOjQyKzAyOjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgMjIuMCAoV2luZG93cykiLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249InNhdmVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOmM5YmJjZTM4LTdlMmQtM2U0ZS04ZjcyLWU1YWNlZDJiZGExZiIgc3RFdnQ6d2hlbj0iMjAyMS0wOS0wOFQyMDo1NDo0OSswMjowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDIyLjAgKFdpbmRvd3MpIiBzdEV2dDpjaGFuZ2VkPSIvIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjb252ZXJ0ZWQiIHN0RXZ0OnBhcmFtZXRlcnM9ImZyb20gYXBwbGljYXRpb24vdm5kLmFkb2JlLnBob3Rvc2hvcCB0byBpbWFnZS9wbmciLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249ImRlcml2ZWQiIHN0RXZ0OnBhcmFtZXRlcnM9ImNvbnZlcnRlZCBmcm9tIGFwcGxpY2F0aW9uL3ZuZC5hZG9iZS5waG90b3Nob3AgdG8gaW1hZ2UvcG5nIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDo1YjgxOGQ1MC0yYjE4LWJkNGItOWJhZC04OTM0ZDJhY2FjZjMiIHN0RXZ0OndoZW49IjIwMjEtMDktMDhUMjA6NTQ6NDkrMDI6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCAyMi4wIChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6YzliYmNlMzgtN2UyZC0zZTRlLThmNzItZTVhY2VkMmJkYTFmIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOmY2YWE5YWVm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">';
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
                            <div><span class="damage-stats">${player.amount}</span><span class="label"> ${amountString}</span></div>
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

}
