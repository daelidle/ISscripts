class DaelISConfigUI {

    daelis;
    configMenuIconUrl = 'https://raw.githubusercontent.com/daelidle/ISscripts/main/assets/images/config-icon.png';
    customPopupClass = 'daelis_config_popup';
    extensionCheckboxClass = 'daelis_config_checkbox';
    extensionListClass = 'daelidle_config_extensions';
    extensionClass = 'daelidle_config_extension';
    extensionImageContainerClass = 'daelis_config_extension_image';
    extensionSettingsClass = 'daelis_config_extension_settings_button';
    cssClass = 'CssDaelISConfigUI';
    menuId = 'daelis_menu_config';

    constructor(daelis) {
        this.daelis = daelis;
    }

    injectMenuOption() {
        if (document.getElementById(this.menuId) !== null) return;
        this.injectCSS();

        const menuHtml = `
        <div class="anchor-drawer-daelis" id="${this.menuId}">
            <img class="chakra-image" src="${this.configMenuIconUrl}">
            <div class="daelis-menu-text">DaelIS</div>
        </div>    
        `;

        const userscriptSettingsAnchor = document.getElementsByClassName("anchor-userscript-settings");
        for (let anchorPoint of userscriptSettingsAnchor) {
            anchorPoint.insertAdjacentHTML('beforeend', menuHtml);
            document.getElementById(this.menuId).addEventListener('click', () => this.displayConfigScreen());
        }
    }

    displayConfigScreen() {
        let extensionsHtml = '';
        Object.values(this.daelis.extensions).forEach(extension => extensionsHtml += this._generateExtensionHtml(extension));
        const configHtml = `<div class="${this.extensionListClass}">${extensionsHtml}</div>`;
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
            const extensionName = checkbox.dataset.name;
            this.daelis.config[extensionName] = checkbox.checked;

            const isCurrentlyActive = extensionName in this.daelis.activeExtensions;
            if (isCurrentlyActive && !checkbox.checked){
                this.daelis.stopExtension(extensionName);
            } else if (!isCurrentlyActive && checkbox.checked){
                this.daelis.startExtension(extensionName);
            }
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
            .anchor-drawer-daelis {
                cursor: pointer;
                margin-top: 5px;
                height: 30px;
                text-align: left;
                display: flex;
                vertical-align: middle;
                line-height: 30px;
                font-size: 16px;
                padding: 0px 10px;
            }
            .anchor-drawer-daelis img {
                width: 25px;
                object-fit: contain;
            }
            .daelis-menu-text {
                margin-left: 10px;
            }
        </style>`;
        injectCSS(css, this.cssClass);
    }
}