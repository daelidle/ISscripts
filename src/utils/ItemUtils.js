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