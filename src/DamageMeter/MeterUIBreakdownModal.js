class MeterUIBreakdownModal {
    breakdownTypeClassPrefix = 'daelis_meter_breakdown_type_';
    tabClassPrefix = 'daelis_meter_breakdown_tab_';
    unknownAbilityIcon = 'https://raw.githubusercontent.com/daelidle/ISscripts/main/assets/images/DamageMeter/unknown_ability.png';
    unknownAbilityIcon = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAQAAAC0NkA6AAAAIGNIUk0AAHomAACAhAAA+gAAAIDoAAB1MAAA6mAAADqYAAAXcJy6UTwAAAACYktHRAD/h4/MvwAAAAlwSFlzAAALEgAACxIB0t1+/AAAAAd0SU1FB+cCDw4OBHZGBjEAAAJoSURBVFjD3Zg9aBRBFIC/nbvjLgGDBhMRNIogIYJNVCwsojmiFsZK8A8bQQhYWFxzxEawSGWKYBG0SGHA4hRE0UZQwR8QRGyMegE5/EHuckbwL8iZXYt7u7nT5XbH/SnyFpY38+a9b+fNm73bAQBFlgJlTKyQLpMyBbIoRDLkqYQWvvGqkCdTn0WeWiQIC4saeRRkI5rF0myySUbokrTNco+fhCPtDLIZgC5GoCzEIv0hAerST1Eil3EqajJUBMCkXWkKQ7rCStSS2BENFSiMT1k+kKTvkSn62EkvncAcL3nKLGa4kO2cYS/dTtviIze5yCt/7vbOHG8x5gjvXHfzaw608Bq3x/lZk/1MsN7V0sslhrwDeEO6Oee8eKDKG4p8cdprGWNdcMgwO0T7RJ5BdjPAEGPMS+82jnnPpfWapLgu9u8cbbKc4KtYHrLC1df3mnSyRbQn3GiyXOW2aJtYEyxdq1gt2gsWmiy/mREtTVvrIF77ZJ7ztGGhePCXJUGfaAv8CAapMOHan+aUs0dKzAWDuPvs4jQHSUv7Dt/ChvQwymFWOu3nTHs/lZ5sYIo9De235Hjv5aT3qlfkGhAW9zn+T0EEnkkPww5ghstM89mPmx5ko7PtrnCWD/4ToCMdpAAwueUfoQtJyn8by+9v4v9AFAkAEnp+emtS5TEKMKlGB3nEPtF+RQdRZDAAi1p0kAEuSLpy3I0K0sFWR9NKgJ4sNtwjghhOCRs6bnrpKjFFAlikFB3kGSe1xossn0+HmCCWaO2hx7YjWrF8YhsUOCTd0RwWwLVYjj1iOsCJ5SiqXmORHqr9AciGC9s+uH7aAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDIzLTAyLTE1VDE0OjEzOjU1KzAwOjAw0XgV9gAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyMy0wMi0xNVQxNDoxMzo1NSswMDowMKAlrUoAAAAodEVYdGRhdGU6dGltZXN0YW1wADIwMjMtMDItMTVUMTQ6MTQ6MDQrMDA6MDD7e5I8AAAAAElFTkSuQmCC';
    chartData = {};
    activeChart = null;

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
        </style>`;
        injectCSS(css);
    }

    generatePlayerBreakdownPanelHtml(abilities, damageDealtBreakdown, effectiveDamageDealtBreakdown, damageReceivedBreakdown){
        const tabsHtml = `<div class="nav-tab-container daelis-meters-breakdown-tab-container">
                            <div class="${this.tabClassPrefix}dps nav-tab nav-tab-flex text-center noselect" data-type="dps"><span>Damage</span></div>
                            <div class="${this.tabClassPrefix}edps nav-tab nav-tab-flex text-center noselect" data-type="edps"><span>Effective Damage</span></div>
                            <div class="${this.tabClassPrefix}tank nav-tab nav-tab-flex text-center noselect" data-type="tank"><span>Damage Taken</span></div>
                        </div>`;
        const breakdownHtml = `<div class="daelis_meter_breakdown">
                                <div class="${(this.breakdownTypeClassPrefix)}dps">${this._generateBreakdownHtml(abilities, damageDealtBreakdown)}</div>
                                <div class="${(this.breakdownTypeClassPrefix)}edps hidden">${this._generateBreakdownHtml(abilities, effectiveDamageDealtBreakdown)}</div>
                                <div class="${(this.breakdownTypeClassPrefix)}tank hidden">${this._generateBreakdownHtml(abilities, damageReceivedBreakdown)}</div>
                               </div>`;

        this.chartData['dps'] = this._generateChartData(abilities, damageDealtBreakdown, 'Damage Breakdown');
        this.chartData['edps'] = this._generateChartData(abilities, effectiveDamageDealtBreakdown, 'Effective Damage Breakdown');
        this.chartData['tank'] = this._generateChartData(abilities, damageReceivedBreakdown, 'Damage Taken Breakdown');

        return `${tabsHtml}<br/>${breakdownHtml}`;
    }

    _generateBreakdownHtml(abilities, breakdown) {
        let totalDamage = 0;
        for (const abilityStats of Object.values(breakdown)) totalDamage += abilityStats.damage;

        let abilitiesHtml = '';
        for (const [abilityId, abilityStats] of Object.entries(breakdown)) {
            const ability = abilities[abilityId];
            abilitiesHtml += `<div class="daelis-meters-breakdown-row">
                <div class="dmb-ability-image"><img src="${ability?.abilityImage ?? this.unknownAbilityIcon }"></div>
                <div class="dmb-ability-name">${ability?.abilityName ?? 'Unknown Ability'}</div>
                <div class="dmb-ability-damage">${abilityStats.damage.toLocaleString()}</div>
                <div class="dmb-ability-average-damage">${(abilityStats.damage / abilityStats.count).toFixed(2)}</div>
                <div class="dmb-ability-total-contribution">${(abilityStats.damage / totalDamage * 100).toFixed(2)}%</div>
            </div>`;
        }
        return `<div id="daelis-meters-breakdown-contained">
                    <div class="daelis-meters-breakdown-abilities">
                        <div class="daelis-meters-breakdown-row">
                            <div class="dmb-ability-image">Ability</div>
                            <div class="dmb-ability-name">Ability Name</div>
                            <div class="dmb-ability-damage">Total Damage</div>
                            <div class="dmb-ability-average-damage">Average Damage</div>
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