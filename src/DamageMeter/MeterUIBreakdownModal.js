class MeterUIBreakdownModal {
    breakdownTypeClassPrefix = 'daelis_meter_breakdown_type_';
    tabClassPrefix = 'daelis_meter_breakdown_tab_';
    unknownAbilityIcon = 'https://raw.githubusercontent.com/daelidle/ISscripts/main/assets/images/DamageMeter/unknown_ability.png';
    chartData = {};
    activeChart = null;
    cssClass = 'CssMeterUIBreakdownModal';

    setupCss(){
        const css = `<style>     
        div[class^="${this.tabClassPrefix}"] span {
            width: 100%;
        }
        .daelis-meters-breakdown-tab-container{
            flex-wrap: wrap;
            height: auto;
            flex-basis: auto;
            justify-content: center;
            overflow: initial;
        }
        .daelis-meters-breakdown-tab-container > div{
            min-width: 250px;
            height: 30px;
            flex: 0 0 auto;
        }
        .daelis-meters-breakdown-abilities {
            width: 70%;
            float: left;
        }
        .daelis-meters-breakdown-chart {
            width: 25%;
            margin-left: 20px;
            float: left;
        }
        .daelis-meters-breakdown-row {
            display: flex;
            margin: 15px 0;
            align-items: center;
        }
        .daelis-meters-breakdown-row img {
            max-width: 50px;
            margin-right: 10px;
        }
        .daelis-meters-breakdown-row > div {
            flex: 1 0 0;
        }
        .daelis_meter_breakdown {
            width: 100%;
        }
        .daelis-meters-breakdown-contained{
            display: flex;
        }
        .dmb-ability-image {
            flex-grow: 1.5 !important;
        }
        </style>`;
        injectCSS(css, this.cssClass);
    }

    removeCss(){
        document.getElementsByClassName(this.cssClass)[0]?.remove();
    }

    generatePlayerBreakdownPanelHtml(abilities, weaponAttackSpeed, damageDealtBreakdown, effectiveDamageDealtBreakdown, damageReceivedBreakdown){
        const tabsHtml = `<div class="nav-tab-container daelis-meters-breakdown-tab-container">
                            <div class="${this.tabClassPrefix}dps nav-tab nav-tab-flex text-center noselect" data-type="dps"><span>Damage</span></div>
                            <div class="${this.tabClassPrefix}edps nav-tab nav-tab-flex text-center noselect" data-type="edps"><span>Effective Damage</span></div>
                            <div class="${this.tabClassPrefix}tank nav-tab nav-tab-flex text-center noselect" data-type="tank"><span>Damage Taken</span></div>
                        </div>`;
        const breakdownHtml = `<div class="daelis_meter_breakdown">
                                <div class="${(this.breakdownTypeClassPrefix)}dps">${this._generateBreakdownHtml(abilities, damageDealtBreakdown, weaponAttackSpeed)}</div>
                                <div class="${(this.breakdownTypeClassPrefix)}edps hidden">${this._generateBreakdownHtml(abilities, effectiveDamageDealtBreakdown, weaponAttackSpeed)}</div>
                                <div class="${(this.breakdownTypeClassPrefix)}tank hidden">${this._generateBreakdownHtml(abilities, damageReceivedBreakdown)}</div>
                               </div>`;

        this.chartData['dps'] = this._generateChartData(abilities, damageDealtBreakdown, 'Damage Breakdown');
        this.chartData['edps'] = this._generateChartData(abilities, effectiveDamageDealtBreakdown, 'Effective Damage Breakdown');
        this.chartData['tank'] = this._generateChartData(abilities, damageReceivedBreakdown, 'Damage Taken Breakdown');

        return `${tabsHtml}<br/>${breakdownHtml}`;
    }

    _generateBreakdownHtml(abilities, breakdown, weaponSpeed) {
        let totalDamage = 0;
        for (const abilityStats of Object.values(breakdown)) totalDamage += abilityStats.damage;

        const dpsCssClass = weaponSpeed ? '' : 'hidden';
        let abilitiesHtml = '';
        for (const [abilityId, abilityStats] of Object.entries(breakdown)) {
            const ability = abilities[abilityId];
            const averageDamage = abilityStats.damage / abilityStats.attacks;
            const averageDPS = ability?.baseSpeedCoeff ? averageDamage / (ability.baseSpeedCoeff * weaponSpeed) : -1;
            abilitiesHtml += `<div class="daelis-meters-breakdown-row">
                <div class="dmb-ability-image"><img src="${ability?.abilityImage ?? this.unknownAbilityIcon }">${ability?.abilityName ?? 'Unknown Ability'}</div>
                <div class="dmb-ability-damage">${abilityStats.damage.toLocaleString()}</div>
                <div class="dmb-ability-average-damage">${toFixedLocale(averageDamage)}</div>
                <div class="dmb-ability-average-dps ${dpsCssClass}">${averageDPS === -1 ? 'N/A' : toFixedLocale(averageDPS)}</div>
                <div class="dmb-ability-hit">${toFixedLocale(abilityStats.hits / (abilityStats.hits + abilityStats.misses) * 100)}%</div>
                <div class="dmb-ability-crit">${abilityStats.hits === 0 ? 0 : toFixedLocale(abilityStats.criticals / abilityStats.hits * 100)}%</div>
                <div class="dmb-ability-total-contribution">${toFixedLocale(abilityStats.damage / totalDamage * 100)}%</div>
            </div>`;
        }
        return `<div id="daelis-meters-breakdown-contained">
                    <div class="daelis-meters-breakdown-abilities">
                        <div class="daelis-meters-breakdown-row">
                            <div class="dmb-ability-image">Ability</div>
                            <div class="dmb-ability-damage">Total Damage</div>
                            <div class="dmb-ability-average-damage">Average Damage</div>
                            <div class="dmb-ability-average-dps ${dpsCssClass}">Average DPS</div>
                            <div class="dmb-ability-hit">Hit %</div>
                            <div class="dmb-ability-crit">Crit %</div>
                            <div class="dmb-ability-total-contribution">Contribution</div>
                        </div>
                        ${abilitiesHtml}
                    </div>
                    <div class="daelis-meters-breakdown-chart">
                        <canvas class="dmb-chart" width="100%" height="100%" style="display: block; box-sizing: border-box; height: 100%; width: 100%;"></canvas>
                    </div>
                </div>`;
    }

    _generateChartData(abilities, breakdown, label) {
        const data = {labels: [], datasets: [{label: label, data: []}]};

        for (const [abilityId, abilityStats] of Object.entries(breakdown)) {
            const ability = abilities[abilityId];
            data.labels.push(ability?.abilityName ?? 'Unknown Ability');
            data.datasets[0].data.push(abilityStats.damage);
        }
        return data;
    }

    setupBreakdownModalTriggers(selectedBreakdownType){
        if (!selectedBreakdownType) selectedBreakdownType = 'dps';
        document.getElementsByClassName(this.breakdownTypeClassPrefix+selectedBreakdownType)[0].classList.remove('hidden');
        document.getElementsByClassName(this.tabClassPrefix+selectedBreakdownType)[0].classList.add('selected-tab');

        const that = this;
        document.querySelectorAll(`[class^="${this.tabClassPrefix}"]`).forEach(tab => tab.addEventListener("click",function(){
            that.selectedTabUiChanges(this.dataset.type);
        },false));

        this._showChart(selectedBreakdownType);
    }

    selectedTabUiChanges(selectedType){
        document.querySelectorAll(`[class^="${this.tabClassPrefix}"]`).forEach(tab => tab.classList.remove('selected-tab'));
        document.querySelectorAll(`[class^="${this.breakdownTypeClassPrefix}"]`).forEach(breakdown => breakdown.classList.add('hidden'));
        document.getElementsByClassName(this.tabClassPrefix+selectedType)[0].classList.add('selected-tab');
        document.getElementsByClassName(this.breakdownTypeClassPrefix+selectedType)[0].classList.remove('hidden');

        this._showChart(selectedType);
    }

    _showChart(selectedType){
        const chartAnchor = document.querySelectorAll(`.${this.breakdownTypeClassPrefix+selectedType} .dmb-chart`)[0];
        if (chartAnchor) {
            if (this.activeChart) this.activeChart.destroy();
            this.activeChart = new Chart(chartAnchor, {type: 'pie', data: this.chartData[selectedType], options: {plugins: {legend: {labels: {color: "#FFF"}}}}});
        }
    }
}