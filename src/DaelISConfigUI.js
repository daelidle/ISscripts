class DaelISConfigUI {

    daelis;
    configMenuIconUrl = 'https://raw.githubusercontent.com/daelidle/ISscripts/main/assets/images/config-icon.png';
    customPopupClass = 'daelis_config_popup';
    extensionCheckboxClass = 'daelis_config_checkbox';

    constructor(daelis) {
        this.daelis = daelis;
    }

    injectMenuOption() {
        const menuId = 'daelis_menu_config';
        if (document.getElementById(menuId) !== null) return;

        const menuHtml = `
        <div class="drawer-item active noselect" id="${menuId}">
            <div class="drawer-item-left">
                <img class="drawer-item-icon" src="${this.configMenuIconUrl}">
                DaelIS
            </div>
        </div>`;

        const navDrawerContainer = document.getElementsByClassName("nav-drawer-container")[0];
        for (let menuItem of navDrawerContainer.children){
            if (menuItem.innerText.includes('Settings')){
                menuItem.insertAdjacentHTML('afterend', menuHtml);
            }
        }
        document.getElementById(menuId).addEventListener('click', () => this.displayConfigScreen());
    }

    displayConfigScreen() {
        let configHtml = '<div>For changes to take effect reloading the page is required.</div><br><ul>';
        Object.keys(this.daelis.extensions).forEach(extensionName => configHtml += this._generateExtensionHtml(extensionName));
        configHtml += '</ul>';
        displayCompletePopup('DaelIS Configuration', configHtml, null, 'Save config', 'Cancel', () => this._processNewConfig(), ()=>{}, this.customPopupClass);
    }

    _generateExtensionHtml(extensionName){
        const checked = (extensionName in this.daelis.activeExtensions) ? 'checked' : '';
        return `<li>
                <input type="checkbox" class="${(this.extensionCheckboxClass)}" data-name="${extensionName}" ${checked} style="opacity: inherit; position: relative; margin-right: 5px;pointer-events: inherit">
                ${extensionName}
                </li>`;
    }

    _processNewConfig(){
        Array.from(document.getElementsByClassName(this.extensionCheckboxClass)).forEach(checkbox => {
            this.daelis.config[checkbox.dataset.name] = checkbox.checked;
        });
        this.daelis._configurationSave();
    }
}