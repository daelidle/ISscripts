function generateTooltip(item) {
    const gameData = new IdlescapeGameData();
    const itemResource = gameData.gameResources[item.itemID];
    const nameStyle = getItemNameColorByAugment(item.augmentations);
    let name = itemResource.name;
    if (item.augmentations !== undefined && item.augmentations !== null){
        name += `<b class="augmented-text">+${item.augmentations}</b>`;
    }
    const tooltipGenerator = _getTooltipType(itemResource);
    const extraFlavorTextSection = tooltipGenerator.generateExtraFlavorTextSectionHtml(itemResource, item);
    const statsSection = tooltipGenerator.generateStatsSectionHtml(itemResource, item, gameData);
    const enchantSection = tooltipGenerator.generateEnchantSectionHtml(itemResource, item, gameData);
    return `
        <div class="item-tooltip daelis-tooltip">
          <span>
            <span style="${nameStyle};">${name}</span>
            <br>
          </span>
          <span><hr><br></span>
          <span>
            <span class="item-stat-block">
              <div class="item-tooltip-image-container">
                <img class="item-tooltip-image" src="${itemResource.itemImage}" alt="${item.name}">
              </div>
              ${extraFlavorTextSection}
              <span class="flavor-text">${itemResource?.extraTooltipInfo ?? ''}</span>
            </span>
            <br>
          </span>
          ${statsSection}
          ${enchantSection}
          <span><hr><br></span>
          <span>
            <div>
              <span class="tooltip-text-image left">Quantity: ${item?.stackSize ?? 1} <img src="" alt="" class=""></span>
              <span class="tooltip-text-image right">${itemResource?.value ?? 0}<img src="/images/gold_coin.png" alt="coins" class="icon16"></span>
            </div>
            <br>
          </span>
        </div>
        `;
}

function _getTooltipType(itemResource){
    switch (itemResource.class){
        case 'seed':
            return new SeedTooltip();
        case 'cooking-ingredient':
            return new FoodTooltip();
        case 'equipment':
            return new EquipmentTooltip();
        case 'gem':
            if (itemResource.isChampScroll === undefined || itemResource.isChampScroll === false) break;
            return new EliteScrollTooltip();
        default:
            break;
    }
    return new DefaultTooltip();
}

class SeedTooltip {

    generateExtraFlavorTextSectionHtml(itemResource, item){
        return `<span>Level Req: ${itemResource.level} <br>
                      </span>
                      <span>Experience: ${itemResource.farmingExperience} <br>
                      </span>
                      <span>Plot Size: ${itemResource.seedHeight}x${itemResource.seedWidth} <br>
                      </span>
                      <span>Harvest Time: ${itemResource.time} minutes <br>
                      </span>
                      <br>`;
    }

    generateStatsSectionHtml(itemResource, item, gameData) {
        let yieldHtml = '';
        itemResource.yield.forEach(production => {
            if (production.chance >= 1){
                yieldHtml += `<span class="item-stat">${production.min}-${production.max} ${gameData.gameResources[production.ingredient].name}</span>`;
            }
        });
        return (yieldHtml === '') ? '' : `<span><hr><br></span>
                      <span>
                        <span class="item-stats">
                            ${yieldHtml}
                        </span>
                        <br>
                      </span>`;
    }

    generateEnchantSectionHtml(itemResource, item, gameData) {
        return '';
    }
}



class FoodTooltip {

    generateExtraFlavorTextSectionHtml(itemResource, item){
        let healing = '';
        const types = [];
        if (itemResource.isEdible) {
            types.push('Consumable');
            healing = `<span>Heals: ${itemResource.healing * (1 + item.augmentations)} hp <br></span>`;
        }
        if (itemResource.isIngredient) types.push('Ingredient');
        return `<span>${types.join()}<br></span>${healing}<br>`;
    }

    generateStatsSectionHtml(itemResource, item, gameData) {
        return '';
    }

    generateEnchantSectionHtml(itemResource, item, gameData) {
        if (itemResource.isEdible === undefined || itemResource.isEdible === false) return '';
        if (item.enchantmentID === undefined || item.enchantmentID === null) return '';

        const stacks = 1 + 2 * item.augmentations;
        const enchantment = gameData.enchantments[item.enchantmentID].name;
        const isCombatEnchantment = gameData.enchantments[item.enchantmentID].combat;
        const combatHtml = isCombatEnchantment ? '<span><b>Buff only granted when consumed in combat.</b><br></span>' : '';
        return `<span><hr><br></span>
                            <span>Grants ${stacks} stacks of <b class="enchanted-text">${enchantment}</b> when consumed.
                            <br>
                            </span>
                            ${combatHtml}`;
    }
}

class EquipmentTooltip {

    generateExtraFlavorTextSectionHtml(itemResource, item){
        let extraFlavor = '';
        let slot = itemResource.slot.toUpperCase();
        if (slot === "WEAPON") slot = itemResource.oneHanded ? "MAIN HAND" : "TWO HANDED";
        extraFlavor += `<span>Slot: ${slot} <br></span>`;
        if (itemResource.requiredLevel !== undefined){
            for (const [skill, level] of Object.entries(itemResource.requiredLevel)) {
                if (level > 1) extraFlavor += `<span>Required: ${level} ${skill.charAt(0).toUpperCase() + skill.slice(1)} <br></span>`;
            }
        }
        if (itemResource.attackSpeed !== undefined) {
            extraFlavor += `<span>Attack Speed: ${itemResource.attackSpeed}s <br></span>`;
            extraFlavor += `<span>Attack Style: ${itemResource.style.toUpperCase()} <br></span>`;
        }
        extraFlavor += "<br>";
        return extraFlavor;
    }

    generateStatsSectionHtml(itemResource, item, gameData) {
        const augmentStatsNormalizer = {"Strength (Melee):":"MELEE STR","Strength (Range):":"RANGE STR","Strength (Magic):":"MAGIC STR","Attack (Accuracy):":"ACCURACY","Defense (Stab):":"STAB DEF","Defense (Slash):":"SLASH DEF","Defense (Crush):":"CRUSH DEF","Defense (Range):":"RANGE DEF","Defense (Magic):":"MAGIC DEF","Cooking Skill:":"COOKING","Smithing Skill:":"SMITHING","Mining Skill:":"MINING","Foraging Skill:":"FORAGING","Farming Skill:":"FARMING","Fishing Skill:":"FISHING","Bait Power:":"BAIT","Reel Power:":"REEL","Bonus Rarity:":"BONUS","Christmas (Event):":"CHRISTMAS"};
        const defenseStatsNormalizer = {"stab": "STAB DEF","slash": "SLASH DEF","crush": "CRUSH DEF","magic": "MAGIC DEF","range": "RANGE DEF"};
        const strengthStatsNormalizer = {"melee": "MELEE STR","range": "RANGE STR","magic": "MAGIC STR", "Attack (Accuracy):":"ACCURACY"};
        const accuracy = itemResource.attackBonus?.accuracy ?? 0;
        const attackStats = {};
        const defenseStats = {};
        const otherStats = {};
        if (itemResource.strengthBonus !== undefined){
            for (const [type, bonus] of Object.entries(itemResource.strengthBonus)) if (bonus > 0) attackStats[strengthStatsNormalizer[type]] = bonus;
            if (accuracy > 0) attackStats["ACCURACY"] = accuracy;
        }
        if (itemResource.defenseBonus !== undefined){
            for (const [type, bonus] of Object.entries(itemResource.defenseBonus)) if (bonus > 0) defenseStats[defenseStatsNormalizer[type]] = bonus;
        }
        if (item.augmentations !== undefined && item.augmentations > 0 && itemResource.augmentationStats !== undefined){
            itemResource.augmentationStats.forEach(stat => {
                let statName = augmentStatsNormalizer[stat.description];
                if (Object.values(strengthStatsNormalizer).includes(statName)) {
                    if (attackStats[statName] === undefined) attackStats[statName] = 0;
                    attackStats[statName] += stat.value * item.augmentations;
                } else if (Object.values(defenseStatsNormalizer).includes(statName)){
                    if (defenseStats[statName] === undefined) defenseStats[statName] = 0;
                    defenseStats[statName] += stat.value * item.augmentations;
                } else otherStats[statName] = stat.value * item.augmentations;
            })
        }
        let statsHtml = '';
        if (Object.keys(attackStats).length > 0){
            let attackHtml = '<span><span class="item-stats">';
            for (const [type, bonus] of Object.entries(attackStats)) attackHtml += `<span class="item-stat">+${bonus} ${type}</span>`;
            attackHtml += '</span><br></span>';
            statsHtml += attackHtml;
        }
        if (Object.keys(defenseStats).length > 0) {
            let defenseHtml = '<span><span class="item-stats">';
            for (const [type, bonus] of Object.entries(defenseStats)) {
                const sign = (bonus > 0) ? '+' : '';
                defenseHtml += `<span class="item-stat">${sign}${bonus} ${type}</span>`;
            }
            defenseHtml += '</span><br></span>';
            statsHtml += defenseHtml;
        }
        if (Object.keys(otherStats).length > 0) {
            let otherHtml = '<span><span class="item-stats">';
            for (const [type, bonus] of Object.entries(otherStats)) otherHtml += `<span class="item-stat">+${bonus} ${type}</span>`;
            otherHtml += '</span><br></span>';
            statsHtml += otherHtml;
        }
        if (statsHtml.length > 0) statsHtml = `<span><hr><br></span>${statsHtml}`;
        return statsHtml;
    }

    generateEnchantSectionHtml(itemResource, item, gameData) {
        if (item.enchantmentID === undefined || item.enchantmentID === null) return '';

        const enchantment = gameData.enchantments[item.enchantmentID];
        const appliedEnchants = item.enchantmentStrength;
        let enchantsHtml = '';
        for (let slot = 0; slot < itemResource.enchantmentTier; slot++) {
            enchantsHtml += '<div class="item-enchant-slot-slot">';
            if (slot < appliedEnchants) enchantsHtml += '<div class="item-enchant-slot-slot"><img src="/images/16px/enchantment_filled.png"></div>';
            enchantsHtml += '<img class="item-enchant-slot-image" src="/images/16px/enchantmentslot_socket.png"></div>';
        }
        return `<span><hr><br></span>
              <span>
                <div class="item-enchant-text">
                  <b class="enchanted-text">${enchantment.name}</b>
                  <br>
                  <span class="enchanted-description"></span>
                </div>
                <br>
              </span>
              <span>
                <div class="item-enchant-slot-container">
                    ${enchantsHtml}
                </div>
                <br>
              </span>`;
    }
}

class EliteScrollTooltip {

    generateExtraFlavorTextSectionHtml(itemResource, item){
        return '';
    }

    generateStatsSectionHtml(itemResource, item, gameData) {

        let encounters = 1;
        let treasureHunter = 0;
        let eliteStats = 1;
        let loot = 1;
        itemResource.augmentationStats.forEach(stat => {
            switch (stat.description) {
                case 'Encounters:':
                    encounters = encounters + stat.value * item.augmentations;
                    break;
                case 'Treasure Hunter:':
                    treasureHunter = treasureHunter + stat.value * item.augmentations;
                    break;
                case 'Elite Stats:':
                    eliteStats = eliteStats + stat.value * item.augmentations;
                    break;
                case 'Loot:':
                    loot = loot + stat.value * item.augmentations;
                    break;
            }
        });
        return `<span><hr><br></span>
                    <span>
                        <span class="">Encounters: ${encounters}</span>
                        <br>
                    </span>
                    <span>
                        <span class="">Treasure Hunter: ${treasureHunter}</span>
                        <br>
                    </span>
                    <span>
                      <span class="">Elite Stats: ${eliteStats}x</span>
                      <br>
                    </span>
                    <span>
                      <span class="">Loot: ${loot}x</span>
                      <br>
                    </span>`;
    }

    generateEnchantSectionHtml(itemResource, item, gameData) {
        return '';
    }
}

class DefaultTooltip {

    generateExtraFlavorTextSectionHtml(itemResource, item){
        return '';
    }

    generateStatsSectionHtml(itemResource, item, gameData) {
        return '';
    }

    generateEnchantSectionHtml(itemResource, item, gameData) {
        return '';
    }
}
