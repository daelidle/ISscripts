class TrackerUI {
    _gameData = new IdlescapeGameData();
    config;
    tracker;

    constructor(config, tracker) {
        this.config = config;
        this.tracker = tracker;
    }

    setupUI(){
        const buttonId = "daelis_resource_tracker";
        if (document.getElementById(buttonId) !== null) return;
        const imageButtonHtml = `<img src="/images/money_icon.png" id="${buttonId}" alt="Resources Tracker" class="header-league-icon" style="pointer-events: all !important;">`;
        document.getElementById('usersOnline').insertAdjacentHTML('afterend', imageButtonHtml);
        let imageButton = document.getElementById(buttonId);
        let that = this;
        imageButton.addEventListener("click",function(){
            that._showSummary();
        },false);
    }

    _showSummary(){
        let now = new Date();
        let elapsedSeconds = (now.getTime() - this.config.initialTime.getTime()) / 1000;
        let elapsedTime = timeForHumans(elapsedSeconds);
        this.tracker.readCurrentResources();

        let trackedResources = [];
        for (const [signature, resource] of Object.entries(this.config.resources).sort(function (a,b){return getItemFromItemSignature(a[0])['itemID'] - getItemFromItemSignature(b[0])['itemID'];})) {
            let gain = resource.gain();
            if (gain !== 0) trackedResources[signature] = gain;
        }

        let itemsHtml = this._generateItemsHtml(trackedResources);
        const title = 'Resources Tracker';
        const message = `Resources variance tracked in ${elapsedTime}`;
        const confirmLambda = () => {
            displayPopup('Reset resource tracker?', 'Are you sure you want to reset Resource Tracker data?', () => { this.config.reset(); }, () => {});
        };
        displayCompletePopup(title, message, itemsHtml, 'Reset', 'Close', confirmLambda, () => {});
        const daelis = this.config.daelis;
        tippy('.daelis-tooltip-item', {
            content(reference) {
                return daelis.generateTooltip(JSON.parse(base64decode(reference.dataset.item)));
            },
            allowHTML: true,
        });
    }

    _generateItemsHtml(trackedResources){
        let itemsHtml = '';
        for (const [signature, stack] of Object.entries(trackedResources)) {
            let item = getItemFromItemSignature(signature);
            let itemResource = this._gameData.items[item.itemID];
            if (itemResource === undefined){
                console.log(`can't find item with id ${item.itemID} on the gameData`);
                continue;
            }
            let stacksColourClass = stack < 0 ? 'lightred-text' : '';
            let itemStack = shortenNumber(stack);
            let icon = itemResource.itemIcon !== undefined ? itemResource.itemIcon : itemResource.itemImage;

            let itemHtml = `<div class="item ${itemResource['class']} daelis-tooltip-item" data-item='${base64encode(JSON.stringify(item))}' data-tip="true">`;
            if (item.augmentations > 0) itemHtml += `<img class="augmentation-glow-background" src="/images/augmentation_glow.png" style="position: absolute;">`;
            itemHtml += `<img src="${icon}" class="item-icon" alt="${itemResource.name}"><div class="centered ${stacksColourClass}">${itemStack}</div>`;
            if (item.enchantmentID > 0) itemHtml += `<div class="item-enchant"><img src="${this._gameData.enchantments[item.enchantmentID]['buffIcon']}"></div>`;
            if (item.augmentations > 0) itemHtml += `<div class="item-augment" style="color: rgb(227, 251, 227);">+${item.augmentations}</div>`;
            itemHtml += `<span style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></span></div>`;
            itemsHtml += itemHtml;
        }
        return itemsHtml;
    }
}