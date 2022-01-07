class LoadoutUIAlias {
    inputId;
    displayInputId;
    iconsDivId

    constructor() {
        const timestamp = new Date().getTime();
        this.inputId = `daelis_loadout_rename_input${timestamp}`;
        this.displayInputId = `daelis_loadout_display_input${timestamp}`;
        this.iconsDivId = `daelis_loadout_alias_icons${timestamp}`;
    }

    generateAliasPopupHtml(selectedLoadout){
        const title = `Do you want to assign a new Alias to Loadout #${selectedLoadout}?`;
        const inputHtml = `<div>
                                <input class="hidden" autocomplete="off" type="search" name="${(this.inputId)}" id="${(this.inputId)}" value="" style="width: 400px" placeholder="Enter custom alias here">
                            </div>`;

        const iconSelectionHtml = `
            <div id="${this.iconsDivId}">
                <p>Select one icon to serve as a visual alias for the loadout:</p>
                <br/>
                <p>Skills</p>
                <div id="" class="daelis_black_bg daelis-loadout-icons">
                    <img class="daelis-loadout-icon" src="/images/mining/iron_pickaxe.png" alt="mining">
                    <img class="daelis-loadout-icon" src="/images/foraging/foraging_icon.png" alt="foraging">
                    <img class="daelis-loadout-icon" src="/images/fishing/fishing_logo.png" alt="fishing">
                    <img class="daelis-loadout-icon" src="/images/enchanting/enchanting_logo.png" alt="enchanting">
                    <img class="daelis-loadout-icon" src="/images/runecrafting/RuneCraftingIcon.png" alt="runecrafting">
                    <img class="daelis-loadout-icon" src="/images/smithing/smithing_icon.png" alt="smithing">
                    <img class="daelis-loadout-icon" src="/images/ui/crafting_icon.png" alt="crafting">
                    <img class="daelis-loadout-icon" src="/images/cooking/cooking_icon.png" alt="cooking">
                    <img class="daelis-loadout-icon" src="/images/combat/attack_icon.png" alt="combat">
                </div>
                <p>Weapons</p>
                <div class="daelis_black_bg daelis-loadout-icons">
                    <img class="daelis-loadout-icon" src="/images/combat/equipment/moss_maul_icon.png" alt="maul">
                    <img class="daelis-loadout-icon" src="/images/combat/equipment/modified_diving_gloves_icon.png" alt="mdg">
                    <img class="daelis-loadout-icon" src="/images/combat/equipment/shard_of_kalanahmatti_icon.png" alt="kala">
                    <img class="daelis-loadout-icon" src="/images/combat/equipment/zero_edge_icon.png" alt="zedge">
                    <img class="daelis-loadout-icon" src="/images/combat/equipment/infernal_lance_icon.png" alt="lance">
                    <img class="daelis-loadout-icon" src="/images/combat/equipment/Shapeless_Scythe_Icon.png" alt="scythe">
                    <img class="daelis-loadout-icon" src="/images/combat/equipment/crystal_mace_icon.png" alt="mace">
                </div>
                <p>DPS/Tank Builds</p>
                <div class="daelis_black_bg daelis-loadout-icons">
                    <img class="daelis-loadout-icon" src="/images/combat/equipment/black_knight_titan_helm_icon.png" alt="titan">
                    <img class="daelis-loadout-icon" src="/images/combat/equipment/black_black_knight_great_helm_icon.png" alt="bkgh">
                    <img class="daelis-loadout-icon" src="/images/combat/equipment/kings_crown.png" alt="crown">
                </div>
                <p id="${(this.displayInputId)}" style="cursor: pointer;text-align: center">Do you prefer to use text?</p>
                <br/>
            </div>
        `;
        const message = `${iconSelectionHtml}${inputHtml}`;

        return {'title': title, 'body': message}
    }

    setUpTriggers(){
        const inputElement = document.getElementById(this.inputId);

        document.querySelectorAll(`#${(this.iconsDivId)} img`).forEach(image => image.addEventListener("click",event => {
            this._cleanSelectedIcons();
            event.target.classList.toggle("daelis-loadout-icon-selected");
            inputElement.value = `<img src="${event.target.src}" height=100% />`;
        },false));

        document.getElementById(this.displayInputId).addEventListener("click",() => {
            this._cleanSelectedIcons();
            document.getElementById(this.iconsDivId).classList.add('hidden');
            inputElement.value = '';
            inputElement.classList.remove('hidden');
        },false);
    }

    _cleanSelectedIcons(){
        Array.from(document.getElementsByClassName('daelis-loadout-icon-selected')).forEach(filter => filter.classList.remove('daelis-loadout-icon-selected'));
    }
}