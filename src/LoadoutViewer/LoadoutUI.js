class LoadoutUI {
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
    
        img.${(this.iconClass)} {
            cursor: pointer;
            position: absolute;
            top: 170px;
            left: .9%;
            min-width: 50px;
            height: 50px
        }
        
        .play-area-container img.${(this.iconClass)} {
            float: left;
            top: 50%;
            left: 2%;
            min-width: 40px;
            height: 40px;
        }
        
        div[class^="${this.loadoutClassPrefix}"] .combat-gear {
            width: 350px;
        }

        </style>`;
        injectCSS(css);
    }

    _setUpMeterMutationObserver(){
        const ui = this;
        const callback = function(mutationsList, observer) {
            const gearContainers = document.getElementsByClassName("combat-gear-container");
            if (gearContainers.length === 0) return;

            const loadoutUI = `<img class="${(ui.iconClass)}" src="data:image/png;base64,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" alt="Loadouts UI"/>`;

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
        for (const [id, loadout] of Object.entries(loadouts)) {
            loadoutsHtml += `<div class="${(this.loadoutClassPrefix)}${id} hidden">${loadoutGenerator.generateLoadoutHtml(loadout, this.gameData)}</div>`;
            let tabLabel = (id in this.config.alias) ? `${this.config.alias[id]} (${id})` : id;
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
        const title = `${loadoutType} Loadouts <img id="${(this.changeTypeId)}" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAAlxJREFUWIXFlklrFEEUxyfECOJBkBzcIgiCC6KHePAgBEN1tSS56ZxUjAsaBEHxYKiuoVAQQYl48ZCj14DgJ5Cg4BcQRHG5iIoLaDTRJF2L/+oZMt3VM+ChuvLgXaaL+f1f1dtqtUrN9ERMXqJcPSBc76mW1cFilo4Cbpouvx8Ven9QAZSlx9oClIm4/BoJvS+YgHrd9AI8kxdBE/kFN7E3mIghYdaURHD1mQqzu3BwcNr0UZ6OQeEkrqrh19WNKFFzznN8ivnirgxO2PJB/PDWUVm5R4l8VYsSvQNR/wgNb+XDbwhIH7pXg5J54dsR7YIDV5TJsxAgv7Xh6nF9xvT6TkQEdRIuc3AN7sXsY14V4fJ85XAOOLrjygEnKc75hLeSuwBH9JcLh6oUAPh44d2ZvFI6BEVpTsBpnwLIdbMBIp5lVeZGvqIyUdMt+IcRYTb5FPDfRif/7jw+pdetCnw1bEj86ifJ8uHBC6av66ExYfrrwqz1Dcck3GZ3g2Y/UI86HDE9+HCvVTIfiTDbfQrAf57IleXPTvD7+dKJG3rCp4A40adyVTdXVMfVlNMXFghf9LrLdRWAyO+4cNrQR3zCmxx9pvQEGEK3XTjG9LB3uNAb8d9Pc0PppZ2GvMOioOBLvj0bwYXRr27VSnM61DaEDcy2atuKnweHJ+oJTf4MZO8Ss/nNdjdztpV57AbXCJMTPr05HZcOlJKDCL0F4NeOiNnorl7vOxG72ijTW6HwjXNds4euBhxSqNEBRP7OSZbxYAKs2d4P8Pv2nqhHggqwNoznQGe8aQdH1ax/pK8dpsV8yIIAAAAASUVORK5CYII=" alt="Change loadout type">`;
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
    }
}