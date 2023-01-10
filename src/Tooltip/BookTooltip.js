class BookTooltip {

    fillTooltipData(tooltipData, item, itemResource, gameData, equippedItems) {
        if (!itemResource) return;

        tooltipData.type = 'Book';
        tooltipData.itemSkill = this.getItemSkillSection(itemResource, gameData.abilities);
        tooltipData.effects = this.getItemEffects(itemResource, gameData.abilities);

    }

    getItemSkillSection(itemResource, abilities) {
        if (!itemResource.relatedAbility) return '';

        const ability = abilities[itemResource.relatedAbility];
        if (!ability) return '';

        return `<div class="dwt-ability-active">Ability: ${ability.abilityName}</div>`;
    }

    getItemEffects(itemResource, abilities) {
        if (!itemResource.relatedAbility) return '';

        const ability = abilities[itemResource.relatedAbility];
        if (!ability) return '';

        return `<div>
                    <span class="dwt-effects-name">${ability.abilityName}:</span>&nbsp;
                    <span class="dwt-effects-description">${ability.description}</span>
                </div>`;
    }
}