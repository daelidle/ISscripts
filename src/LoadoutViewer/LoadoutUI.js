class LoadoutUI {
    loadoutTrigger = 'https://raw.githubusercontent.com/daelidle/ISscripts/main/assets/images/LoadoutViewer/loadout_trigger.png';
    loadoutTypeSwitch = 'https://raw.githubusercontent.com/daelidle/ISscripts/main/assets/images/LoadoutViewer/loadout_type_switch.png';
    iconClass = "daelis_loadout_viewer";
    loadoutClassPrefix = 'daelis_loadout_loadout_';
    tabClassPrefix = 'daelis_loadout_tab_';
    loadoutAliasButton = 'daelis_loadout_alias';
    changeTypeId = 'daelis_loadout_change_type';
    MAX_LOADOUTS = 5;

    gameData;
    config;
    viewer;

    constructor(config, viewer) {
        this.gameData = new IdlescapeGameData();
        this.config = config;
        this.viewer = viewer;
    }

    setupUI(isFirstGameReady) {
        if (isFirstGameReady) this._setupCss();
        this._setUpMeterMutationObserver();
    }

    _setupCss(){
        const css = `<style>
    
        img.${this.iconClass} {
            cursor: pointer;
            position: absolute;
            top: 170px;
            left: .9%;
            min-width: 50px;
            height: 50px
        }
        
        .play-area-container img.${this.iconClass} {
            float: left;
            top: 50%;
            left: 2%;
            min-width: 40px;
            height: 40px;
        }
        
        .combat-fight-container img.${this.iconClass} {
            display: none;
        }
                
        div[class^="${this.loadoutClassPrefix}"] .combat-gear {
            width: 350px;
        }
        
        div[class^="${this.tabClassPrefix}"] span {
            font-size: small;
        }
        
        #${this.changeTypeId} {
            width: 25px;
        }
        
        .daelis-loadout-icons {
            display: flex;
            width: 100%;
            padding: 10px;
            justify-content: center;
            margin: 1rem 0;
        }
        .daelis-loadout-icon { 
            width: 35px;
            height: 35px;
            margin-left: 1px;
            margin-right: 1px;
            padding: 1px;
            cursor: pointer;
        }
        
        .daelis-loadout-icon-selected {
            border: 1px solid grey;
        }

        .daelis_black_bg {
            background-color: rgba(0,0,0,.7);
            border: 2px solid hsla(0,0%,75.3%,.2);
        }
        </style>`;
        injectCSS(css);
    }

    _setUpMeterMutationObserver(){
        const ui = this;
        const callback = function(mutationsList, observer) {
            const gearContainers = document.getElementsByClassName("combat-gear-container");
            if (gearContainers.length === 0) return;

            const loadoutUI = `<img class="${(ui.iconClass)}" src="${ui.loadoutTrigger}" alt="Loadouts UI"/>`;

            Array.from(gearContainers).forEach(gearContainer => {
                const gearAnchor = gearContainer.getElementsByClassName("combat-gear");
                if (gearAnchor.length > 0){
                    const anchor = gearAnchor[0];
                    if (anchor.getElementsByClassName(ui.iconClass).length === 0) {
                        anchor.insertAdjacentHTML('afterbegin', loadoutUI);
                        const imageButton = anchor.getElementsByClassName(ui.iconClass)[0];
                        imageButton.addEventListener("click",() => ui.viewer._showLoadoutUI(),false);
                    }
                }
            });
        }

        // Observe Play Area DOM changes
        const mainAreaContainer = document.getElementsByClassName("combine-main-area")[0];
        const config = {attributes: true, childList: true, subtree: true };
        const observer = new MutationObserver(callback);
        observer.observe(mainAreaContainer, config);
    }

    generateLoadoutsPanelHtml(gearLoadouts, foodLoadouts){
        let tabsHtml = '<div class="nav-tab-container">';
        let loadoutsHtml = '';
        let loadouts;
        let loadoutGenerator;
        if (this.viewer.loadoutType === this.viewer.LOADOUT_GEAR) {
            loadouts = gearLoadouts;
            loadoutGenerator = new LoadoutUIGear();
        } else {
            loadouts = foodLoadouts;
            loadoutGenerator = new LoadoutUIFood();
        }
        for (const [id, loadout] of Object.entries(loadouts).sort()) {
            loadoutsHtml += `<div class="${(this.loadoutClassPrefix)}${id} hidden">${loadoutGenerator.generateLoadoutHtml(loadout, this.gameData)}</div>`;
            let tabLabel = (id in this.config.alias) ? `${this.config.alias[id]} <span>(${id})</span>` : id;
            tabsHtml += `<div class="${this.tabClassPrefix}${id} nav-tab-flex text-center noselect" data-id="${id}">${tabLabel}</div>`;
        }
        if (Object.keys(loadouts).length < this.MAX_LOADOUTS) tabsHtml += `<div class="${this.tabClassPrefix}add nav-tab-flex text-center noselect" data-id="add">+</div>`;
        tabsHtml += '</div>';
        const actionButtons = `<div class="MuiDialogActions-root MuiDialogActions-spacing" style="display: flex;">
            <div class="button-container-250px">
                <div variant="contained" color="secondary" id="${this.loadoutAliasButton}"
                     class="close-dialog-button idlescape-button idlescape-button-blue">Assign Alias</div>
            </div>
        </div>`;
        loadoutsHtml = `${tabsHtml}<br/>${loadoutsHtml}<br/>${actionButtons}`;
        const loadoutType = (this.viewer.loadoutType === this.viewer.LOADOUT_GEAR) ? 'Gear' : 'Food';
        const title = `${loadoutType} Loadouts <img id="${this.changeTypeId}" src="${this.loadoutTypeSwitch}" alt="Change loadout type">`;
        return {'title': title, 'loadoutsHtml': loadoutsHtml}
    }

    setupLoadoutsPanelTriggers(selectedLoadout, onRename, onTabClicked, onChangedTypeClicked){
        if (selectedLoadout !== undefined){
            document.getElementsByClassName(this.loadoutClassPrefix+selectedLoadout)[0].classList.remove('hidden');
            document.getElementsByClassName(this.tabClassPrefix+selectedLoadout)[0].classList.add('selected-tab');
            document.getElementById(this.loadoutAliasButton).addEventListener("click",function(){
                onRename();
            },false);
        } else {
            document.getElementById(this.loadoutAliasButton).classList.add('hidden');
        }
        document.querySelectorAll(`[class^="${this.tabClassPrefix}"]`).forEach(tab => tab.addEventListener("click",function(){
            onTabClicked(this);
        },false));
        document.getElementById(this.changeTypeId).addEventListener("click",function(){
            onChangedTypeClicked();
        },false);
    }

    selectedTabUiChanges(selectedLoadout){
        document.querySelectorAll(`[class^="${this.tabClassPrefix}"]`).forEach(tab => tab.classList.remove('selected-tab'));
        document.querySelectorAll(`[class^="${this.loadoutClassPrefix}"]`).forEach(loadout => loadout.classList.add('hidden'));
        document.getElementsByClassName(this.tabClassPrefix+selectedLoadout)[0].classList.add('selected-tab');
        document.getElementsByClassName(this.loadoutClassPrefix+selectedLoadout)[0].classList.remove('hidden');
    }

    writeMessageOnActiveChatWindow(message){
        let activeChatContainer = null;
        Array.from(document.getElementsByClassName('chat-message-container')).forEach(container => {
            if (container.style.visibility === 'visible') activeChatContainer = container;
        });
        if (activeChatContainer === null) return;

        const messageInput = activeChatContainer.getElementsByClassName('chat-message-entry-input');
        if (messageInput.length === 0) return;

        setReactNativeValue(messageInput[0], message);
        messageInput[0].setAttribute('tabindex', '-1');
        messageInput[0].focus();

        const hiddenChat = document.getElementsByClassName('play-area-chat-container-hidden');
        if (hiddenChat.length > 0){
            hiddenChat[0].classList.remove('play-area-chat-container-hidden');
            hiddenChat[0].classList.add('play-area-chat-container');
        }
    }
}