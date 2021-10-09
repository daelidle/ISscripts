class TrackerUI {
    _gameData = new IdlescapeGameData();
    initialTime = new Date();
    resources;

    constructor(resources) {
        this.resources = resources;
    }

    setupUI(){
        const buttonId = "rgsTrigger";
        const imageButtonHtml = `<img src="/images/money_icon.png" id="${buttonId}" alt="Resources Tracker" class="header-league-icon">`;
        document.getElementById('usersOnline').insertAdjacentHTML('beforeend', imageButtonHtml);
        let imageButton = document.getElementById(buttonId);
        let that = this;
        imageButton.addEventListener("click",function(){
            that._showSummary();
        },false);
    }

    _showSummary(){
        let now = new Date();
        let elapsedSeconds = (now.getTime() - this.initialTime.getTime()) / 1000;
        let elapsedTime = timeForHumans(elapsedSeconds);

        let trackedResources = [];
        for (const [signature, resource] of Object.entries(this.resources).sort(function (a,b){return getItemFromItemSignature(a[0])['itemID'] - getItemFromItemSignature(b[0])['itemID'];})) {
            let gain = resource.gain();
            if (gain !== 0) trackedResources[signature] = gain;
        }

        let itemsHtml = this._generateItemsHtml(trackedResources);
        this._displayPopUp(itemsHtml, elapsedTime);
    }

    _generateItemsHtml(trackedResources){
        let itemsHtml = '';
        for (const [signature, stack] of Object.entries(trackedResources)) {
            let [id, augmentations, enchantmentID] = signature.split('_');
            if (this._gameData.gameResources[id] === undefined) console.log(`can't find id ${id} on the gameResources`);
            let stacksColourClass = stack < 0 ? 'lightred-text' : '';
            let itemStack = shortenNumber(stack);

            let itemHtml = `<div class="item ${this._gameData.gameResources[id]['class']}" data-tip="true">`;
            if (augmentations > 0) itemHtml += `<img class="augmentation-glow-background" src="/images/augmentation_glow.png" style="position: absolute;">`;
            itemHtml += `<img src="${this._gameData.gameResources[id]['icon']}" class="item-icon" alt="${this._gameData.gameResources[id]['name']}"><div class="centered ${stacksColourClass}">${itemStack}</div>`;
            if (enchantmentID > 0) itemHtml += `<div class="item-enchant"><img src="${this._gameData.enchantments[enchantmentID]['buffIcon']}"></div>`;
            if (augmentations > 0) itemHtml += `<div class="item-augment" style="color: rgb(227, 251, 227);">+${augmentations}</div>`;
            itemHtml += `<span style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></span></div>`;
            itemsHtml += itemHtml;
        }
        return itemsHtml;
    }

    _displayPopUp(itemsHtml, elapsedTimeString){
        const popUpId = "rgsSummary";
        const popUpCloseId = 'rgsSummaryClose';
        const popUpTemplate = `<div role="presentation" id="${popUpId}" class="MuiDialog-root donate-dialog feedback-dialog sell-item-dialog popup-dialog" style="position: fixed; z-index: 1300; inset: 0;">
                       <div class="MuiBackdrop-root" aria-hidden="true" style="opacity: 1; transition: opacity 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;"></div>
                       <div tabindex="0" data-test="sentinelStart"></div>
                       <div class="MuiDialog-container MuiDialog-scrollPaper" role="none presentation" tabindex="-1" style="opacity: 1;transition: opacity 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;">
                          <div class="MuiPaper-root MuiDialog-paper MuiDialog-paperScrollPaper MuiDialog-paperWidthSm MuiPaper-elevation24 MuiPaper-rounded" role="dialog">
                             <div class="MuiDialogTitle-root">
                                <h2 class="MuiTypography-root MuiTypography-h6">Resources Tracker</h2>
                             </div>
                             <p class="MuiTypography-root MuiDialogContentText-root MuiTypography-body1 MuiTypography-colorTextSecondary"> Resources variance tracked in ${elapsedTimeString}</p>
                             <div class="offline-progress-box all-items">
                                ${itemsHtml}
                             </div>
                             <div class="MuiDialogActions-root MuiDialogActions-spacing">
                                <div class="button-container-250px">
                                   <div variant="contained" color="secondary" id="${popUpCloseId}" class="close-dialog-button idlescape-button idlescape-button-red">Close</div>
                                </div>
                             </div>
                          </div>
                       </div>
                       <div tabindex="0" data-test="sentinelEnd"></div>
                    </div>`;
        document.getElementsByTagName('body')[0].insertAdjacentHTML('beforeend', popUpTemplate);
        document.getElementById(popUpCloseId).addEventListener("click",function(){
            document.getElementById(popUpId).remove();
        },false);
    }
}