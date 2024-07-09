class MeterUIBreakdownModal {
    tabContainerClass = 'daelis_meters_tab_container';
    unknownAbilityIcon = 'https://raw.githubusercontent.com/daelidle/ISscripts/main/assets/images/DamageMeter/unknown_ability.png';
    chartData = {};
    activeChart = null;
    cssClass = 'CssMeterUIBreakdownModal';

    constructor() {
        window.document.addEventListener("tabbis", e => {
            this._showChart(e.detail.pane);
        }, false);
    }

    setupCss() {
        const css = `<style>     
        div[class^="daelis_meter_breakdown_tab_"] span {
            width: 100%;
        }
        .daelis_meters_tab_container{
            flex-wrap: wrap;
            height: auto;
            flex-basis: auto;
            justify-content: center;
            overflow: initial;
        }
        .daelis_meters_tab_container > div{
            min-width: 250px;
            height: 30px;
            flex: 0 0 auto;
        }
        .daelis_meters_tab_container .nav-tab {
            display: block;
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
            margin-top: 10px;
        }
        .daelis-meters-breakdown-contained {
            display: flex;
        }
        .dmb-ability-image {
            flex-grow: 1.5 !important;
        }
        .${this.tabContainerClass} div[aria-selected = "true"] {
            background-image: linear-gradient(180deg, rgba(179, 202, 255, .202), hsla(0, 0%, 100%, .112)), url(/images/ui/frame_panel.png);
            background-repeat: no-repeat;
            background-size: 100% 100%;
        }
        .monster_tab {
            display: flex;
        }
        .daelis-tab-image img {
            height: 30px;
        }
        </style>`;
        injectCSS(css, this.cssClass);
    }

    removeCss() {
        document.getElementsByClassName(this.cssClass)[0]?.remove();
    }

    generatePlayerBreakdownPanelHtml(abilities, weaponAttackSpeed, damageDealtBreakdown, effectiveDamageDealtBreakdown, damageReceivedBreakdown, monsters) {
        const tabsHtml =
            `<div class="nav-tab-container ${this.tabContainerClass}" data-tabs>
        <div class="nav-tab nav-tab-flex text-center" data-type="dps" data-active><span>Damage</span></div>
        <div class="nav-tab nav-tab-flex text-center" data-type="edps"><span>Effective Damage</span></div>
        <div class="nav-tab nav-tab-flex text-center" data-type="tank"><span>Damage Taken</span></div>
        </div>`;

        const breakdownHtml =
            `<div class="daelis_meter_breakdown" data-panes>
        <div>${this._generateBreakdownsHtml(abilities, damageDealtBreakdown, monsters, weaponAttackSpeed, 'dps')}</div>
        <div>${this._generateBreakdownsHtml(abilities, effectiveDamageDealtBreakdown, monsters, weaponAttackSpeed, 'edps')}</div>
        <div>${this._generateBreakdownsHtml(abilities, damageReceivedBreakdown, monsters, undefined, 'tank')}</div>
        </div>`;

        this._generateChartData(abilities, damageDealtBreakdown, 'Damage Breakdown', 'dps');
        this._generateChartData(abilities, effectiveDamageDealtBreakdown, 'Effective Damage Breakdown', 'edps');
        this._generateChartData(abilities, damageReceivedBreakdown, 'Damage Taken Breakdown', 'tank');

        return `${tabsHtml}${breakdownHtml}`;
    }

    _generateBreakdownsHtml(abilities, breakdowns, monsters, weaponSpeed, breakdownType) {
        const breakDownHtmls = {};
        const breakDownTabs = {};
        for (const [breakdownName, breakdownStats] of Object.entries(breakdowns)) {
            if (breakdownName === UNKNOWN_MONSTER_NAME) continue;
            breakDownHtmls[breakdownName] = this._generateBreakdownHtml(abilities, breakdownStats, weaponSpeed, breakdownType, breakdownName);
            const tabImage = monsters[breakdownName] ? `<img src="${monsters[breakdownName]}"/>` : '';
            breakDownTabs[breakdownName] = `<div class="nav-tab nav-tab-flex text-center daelis-tab-image" data-type="${breakdownType}.${breakdownName}"><span>${tabImage}${breakdownName}</span></div>`;
        }

        return `<div class="${this.tabContainerClass} monster_tab" data-tabs>${Object.values(breakDownTabs).join('')}</div><div data-panes>${Object.values(breakDownHtmls).join('')}</div>`;
    }

    _generateBreakdownHtml(abilities, breakdown, weaponSpeed, breakdownType, breakdownName) {
        if (!breakdown) breakdown = {};

        let totalDamage = 0;
        for (const abilityStats of Object.values(breakdown)) totalDamage += abilityStats.damage;

        const dpsCssClass = weaponSpeed ? '' : 'hidden';
        let abilitiesHtml = '';
        for (const [abilityId, abilityStats] of Object.entries(breakdown)) {
            const ability = abilities[abilityId];
            const averageDamage = abilityStats.damage / abilityStats.attacks;
            const averageDPS = ability?.baseSpeedCoeff ? averageDamage / (ability.baseSpeedCoeff * weaponSpeed) : -1;
            abilitiesHtml += `<div class="daelis-meters-breakdown-row">
                <div class="dmb-ability-image"><img src="${ability?.abilityImage ?? this.unknownAbilityIcon}">${ability?.abilityName ?? 'Unknown Ability'}</div>
                <div class="dmb-ability-damage">${abilityStats.damage.toLocaleString()}</div>
                <div class="dmb-ability-average-damage">${toFixedLocale(averageDamage)}</div>
                <div class="dmb-ability-average-dps ${dpsCssClass}">${averageDPS === -1 ? 'N/A' : toFixedLocale(averageDPS)}</div>
                <div class="dmb-ability-hit">${toFixedLocale(abilityStats.hits / (abilityStats.hits + abilityStats.misses) * 100)}%</div>
                <div class="dmb-ability-crit">${abilityStats.hits === 0 ? 0 : toFixedLocale(abilityStats.criticals / abilityStats.hits * 100)}%</div>
                <div class="dmb-ability-total-contribution">${toFixedLocale(abilityStats.damage / totalDamage * 100)}%</div>
            </div>`;
        }
        return `<div id="daelis-meters-breakdown-contained" data-type="${breakdownType}.${breakdownName}">
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
                        <canvas class="dmb-chart" id="${breakdownType}.${breakdownName}" width="100%" height="100%" style="display: block; box-sizing: border-box; height: 100%; width: 100%;"></canvas>
                    </div>
                </div>`;
    }

    _generateChartData(abilities, breakdowns, label, breakdownType) {
        if (!breakdowns) breakdowns = {};

        for (const [breakdownName, breakdownStats] of Object.entries(breakdowns)) {
            if (breakdownName === UNKNOWN_MONSTER_NAME) continue;
            const data = {labels: [], datasets: [{label: label, data: []}]};
            for (const [abilityId, abilityStats] of Object.entries(breakdownStats)) {
                const ability = abilities[abilityId];
                data.labels.push(ability?.abilityName ?? 'Unknown Ability');
                data.datasets[0].data.push(abilityStats.damage);
            }
            _.setWith(this.chartData, `${breakdownType}.${breakdownName}`, data, Object);
        }
    }

    _showChart(pane) {
        let selectedType = pane.dataset.type;
        if (!selectedType) {
            const selectedPane = pane.querySelector('[aria-selected="true"]');
            selectedType = selectedPane?.dataset.type;
        }
        this._drawChart(selectedType);
    }

    _drawChart(selectedType) {
        const chartAnchor = document.getElementById(selectedType);
        if (chartAnchor) {
            if (this.activeChart) this.activeChart.destroy();
            this.activeChart = new Chart(chartAnchor, {
                type: 'pie',
                data: _.get(this.chartData, selectedType),
                options: {plugins: {legend: {labels: {color: "#FFF"}}}}
            });
        }
    }
}