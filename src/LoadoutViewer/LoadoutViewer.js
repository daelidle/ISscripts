class LoadoutViewer {
    static meta = {name: 'Loadout Viewer', description: 'Displays current stored gear and food loaouts and helps with switching and creating new ones. Also allows to assign an alias to loadouts for better identifying them.', image:'https://raw.githubusercontent.com/daelidle/ISscripts/main/assets/images/LoadoutViewer/meta_image.png'};
    LOADOUT_GEAR = 0;
    LOADOUT_FOOD = 1;

    ui;
    config;
    selectedLoadout;
    loadoutType;

    constructor(daelis) {
        this.config = new LoadoutConfig(daelis);
        this.ui = new LoadoutUI(this.config, this);
        this.selectedLoadout = null;
        this.loadoutType = this.LOADOUT_GEAR;
    }

    onGameReady(isFirstGameReady) {
        if (isFirstGameReady) this.config.load();
        this.ui.setupUI(isFirstGameReady)
    }

    _showLoadoutUI() {
        const loadouts = this._readLoadoutsFromState();
        const panelHtml = this.ui.generateLoadoutsPanelHtml(loadouts.gearLoadouts, loadouts.foodLoadouts);
        const popUpIds = displayCompletePopup(panelHtml.title, panelHtml.loadoutsHtml, null, 'Load', 'Close', ()=>{this._onLoadClicked()}, ()=>{});
        const selectedLoadouts = (this.loadoutType === this.LOADOUT_GEAR) ? loadouts.gearLoadouts : loadouts.foodLoadouts;
        this.selectedLoadout = Object.keys(selectedLoadouts)[0];
        this.ui.setupLoadoutsPanelTriggers(this.selectedLoadout, ()=>{this._onRenameClicked()}, (tab)=>{this._onTabClicked(tab, popUpIds)}, ()=>{this._onChangeTypeClicked(popUpIds)});
    }

    _readLoadoutsFromState(){
        const loadouts = this.config.daelis.getPlayerState().loadouts;
        let gearLoadouts = {};
        let foodLoadouts = {};
        loadouts.forEach(item=> {
            if (item.loadout_id > 0) {
                if (!(item.loadout_id in gearLoadouts)) gearLoadouts[item.loadout_id] = [];
                gearLoadouts[item.loadout_id].push(item);
            } else {
                if (!(item.loadout_id in foodLoadouts)) foodLoadouts[item.loadout_id] = [];
                foodLoadouts[item.loadout_id].push(item);
            }
        });
        return {'gearLoadouts': gearLoadouts, 'foodLoadouts': foodLoadouts};
    }

    _onTabClicked(tab, popUpIds){
        const id = tab.dataset.id;
        if (id === 'add') {
            const nextId = this._getNextLoadoutId();
            this.ui.writeMessageOnActiveChatWindow(`/loadout save ${nextId}`);
            document.getElementById(popUpIds.popUpId).remove();
            return;
        }
        this.selectedLoadout = id;
        this.ui.selectedTabUiChanges(this.selectedLoadout);
    }

    _getNextLoadoutId(){
        const loadouts = this.config.daelis.getPlayerState().loadouts;
        let nextIdGear = 0;
        let nextIdFood = 0;
        loadouts.forEach(item=> {
            const loadoutId = parseInt(item.loadout_id);
            if (loadoutId > 0 && loadoutId > nextIdGear) nextIdGear = loadoutId;
            else if (loadoutId < nextIdFood) nextIdFood = loadoutId;
        });
        nextIdGear++;
        nextIdFood--;

        return (this.loadoutType === this.LOADOUT_GEAR) ? nextIdGear : nextIdFood;
    }

    _onRenameClicked() {
        const aliasUI = new LoadoutUIAlias();
        const generatedHtml = aliasUI.generateAliasPopupHtml(this.selectedLoadout);
        const that = this;
        displayPopup(generatedHtml.title, generatedHtml.body, ()=>{
            const alias = document.getElementById(aliasUI.inputId).value;
            that._assignAlias(alias);
        }, ()=>{});
        aliasUI.setUpTriggers();
    }

    _onChangeTypeClicked(popUpIds) {
        this.loadoutType = (this.loadoutType === this.LOADOUT_GEAR) ? this.LOADOUT_FOOD : this.LOADOUT_GEAR;
        document.getElementById(popUpIds.popUpId).remove();
        this._showLoadoutUI();
    }

    _onLoadClicked() {
        this.ui.writeMessageOnActiveChatWindow(`/loadout load ${this.selectedLoadout}`);
    }

    _assignAlias(newAlias){
        this.config.alias[this.selectedLoadout] = newAlias;
        this.config.save();
        document.getElementsByClassName(this.ui.tabClassPrefix+this.selectedLoadout)[0].innerHTML = `${newAlias} (${this.selectedLoadout})`;
    }
}