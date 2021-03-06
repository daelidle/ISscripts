class DaelISConfigUI {

    daelis;
    configMenuIconUrl = 'https://raw.githubusercontent.com/daelidle/ISscripts/main/assets/images/config-icon.png';
    customPopupClass = 'daelis_config_popup';
    extensionCheckboxClass = 'daelis_config_checkbox';
    extensionListClass = 'daelidle_config_extensions';
    extensionClass = 'daelidle_config_extension';
    extensionImageContainerClass = 'daelis_config_extension_image';
    extensionSettingsClass = 'daelis_config_extension_settings_button';

    constructor(daelis) {
        this.daelis = daelis;
    }

    injectMenuOption() {
        this.injectCSS();
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
        let configHtml = `<div>For changes to take effect reloading the page is required.</div><br><div class="${this.extensionListClass}">`;
        Object.values(this.daelis.extensions).forEach(extension => configHtml += this._generateExtensionHtml(extension));
        configHtml += '</div>';
        displayCompletePopup('DaelIS Configuration', configHtml, null, 'Save config', 'Cancel', () => this._processNewConfig(), ()=>{}, this.customPopupClass);
        document.querySelectorAll(`.${this.extensionImageContainerClass} img`).forEach(image => image.addEventListener("click",() => BigPicture({el: image})),false);
        document.querySelectorAll(`.${this.extensionSettingsClass}`).forEach(button => button.addEventListener("click", event => this._handleExtensionSettingsClick(event.target),false));
    }

    _handleExtensionSettingsClick(button){
        const extensionName = button.dataset.extension;
        const extension = this.daelis.activeExtensions[extensionName];
        extension.showExtensionSettings();
    }

    _generateExtensionHtml(extension){
        const extensionName = extension.name;
        const checked = (extensionName in this.daelis.activeExtensions) ? 'checked' : '';
        let extensionConfig = '';
        if (checked) {
            const extensionInstance = this.daelis.activeExtensions[extensionName];
            if (typeof (extensionInstance.showExtensionSettings) == "function") {
                extensionConfig = `<div variant="contained" color="secondary" data-extension="${extensionName}" class="idlescape-button idlescape-button-blue ${this.extensionSettingsClass}">Extension Settings</div>`;
            }
        }
        let name = extensionName;
        let description = '';
        let image = '';
        const meta = extension.meta;
        if (meta !== undefined){
            name = meta.name;
            description = `<p>${meta.description}</p>`;
            image = `<div class="${this.extensionImageContainerClass}"><img src="${meta.image}"/></div>`;
        }
        return `<div class="${this.extensionClass}">
                ${image}
                ${description}
                <input type="checkbox" class="${(this.extensionCheckboxClass)}" data-name="${extensionName}" ${checked}>
                ${name}
                ${extensionConfig}
                </div>`;
    }

    _processNewConfig(){
        Array.from(document.getElementsByClassName(this.extensionCheckboxClass)).forEach(checkbox => {
            this.daelis.config[checkbox.dataset.name] = checkbox.checked;
        });
        this.daelis._configurationSave();
    }

    injectCSS() {
        const css = `<style>
            .${this.extensionListClass} {
                display: flex;
                flex-wrap: wrap;
                justify-content: center;
                width: 100%;
                margin-bottom: 20px;
            }
            .${this.extensionListClass} [type="checkbox"] {
                opacity: inherit;
                position: relative;
                margin-right: 5px;
                pointer-events: inherit;
            }
            .${this.extensionClass} {
                margin: 0 5px;
                width: 300px;
                background-color: rgba(0,0,0,.7);
                border: 2px solid hsla(0,0%,75.3%,.2);
                padding: 10px;
            }
            .${this.extensionImageContainerClass} {            
                width: 280px;
                height: 200px;
                display: flex;
                justify-content: center;
                align-items: center;
            }
            .${this.extensionImageContainerClass} img {
                max-width: 250px;
                max-height: 200px;
                cursor: -moz-zoom-in; 
                cursor: -webkit-zoom-in; 
                cursor: zoom-in;
            }
            .${this.customPopupClass} .MuiPaper-root {
                max-width: 75%;
                max-height: 100%;
            }
        </style>`;
        injectCSS(css);
    }
}