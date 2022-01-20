function generateItemSignature(item){
    if (item === null) return '';
    let augmentations = item['augmentations'] !== undefined ? item['augmentations'] : 0;
    let enchantmentID = item['enchantmentID'] !== undefined ? item['enchantmentID'] : 0;
    let enchantmentStrength = item['enchantmentStrength'] !== undefined ? item['enchantmentStrength'] : 0;
    return `${item['itemID']}_${augmentations}_${enchantmentID}_${enchantmentStrength}`;
}

function getItemFromItemSignature(itemSignature){
    const splittedSignature = itemSignature.split('_');
    const item = {};
    item['itemID'] = splittedSignature[0];
    if (splittedSignature[1] > 0) item['augmentations'] = splittedSignature[1];
    if (splittedSignature[2] > 0) item['enchantmentID'] = splittedSignature[2];
    if (splittedSignature[3] > 0) item['enchantmentStrength'] = splittedSignature[3];
    return item;
}

function getItemNameColorByAugment(augmentations){
    const augmentColors = ["color: rgb(255, 255, 255)","color: rgb(227,251,227)","color: rgb(200,247,200)","color: rgb(172,242,172)","color: rgb(144,238,144)","color: rgb(144,238,144)","color: rgb(151,233,166)","color: rgb(159,227,187)","color: rgb(166,222,209)","color: rgb(173,216,230)","color: rgb(173,216,230)","color: rgb(189,197,227)","color: rgb(205,179,224)","color: rgb(221,160,221)","color: rgb(221,160,221)","color: rgb(232,162,147)","color: rgb(244,164,74)","color: rgb(255,166,0)","color: rgb(255,83,0)","color: rgb(255,0,0)","color: rgb(255,0,0)","color: rgb(255,0,0)","color: rgb(255,0,0)","color: rgb(255,0,0)","color: rgb(255,0,0)","background: linear-gradient(to right,red,orange,green,yellow,purple,violet), WebkitBackgroundClip: text, WebkitTextFillColor: transparent, fontWeight: bold, textShadow: none"];
    return augmentColors[augmentations];
}

function normalizeItem(item){
    if (item.item_id !== undefined && item.itemID === undefined) {
        item.itemID = item.item_id;
        delete item.item_id;
    }
    if (item.enchantment_id !== undefined && item.enchantmentID === undefined){
        item.enchantmentID = item.enchantment_id;
        delete item.enchantment_id;
    }
    if (item.enchantment_strength !== undefined && item.enchantmentStrength === undefined){
        item.enchantmentStrength = item.enchantment_strength;
        delete item.enchantment_strength;
    }
    return item;
}