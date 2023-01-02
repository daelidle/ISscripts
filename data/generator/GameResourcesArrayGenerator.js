const dataMinedItems = require('../raw/items.json');
const dataMinedEnchants = require('../raw/enchantments.json');
const dataMinedLocations= require('../raw/locations.json');
const dataMinedAbilities = require('../raw/abilities.json');
const itemSets = require('../raw/sets.json');

let jsFileContent =
`class IdlescapeGameData {
    enchantments = ${JSON.stringify(dataMinedEnchants)};
    items = ${JSON.stringify(dataMinedItems)};
    locations = ${JSON.stringify(dataMinedLocations)};
    abilities = ${JSON.stringify(dataMinedAbilities)};
    sets = ${JSON.stringify(itemSets)};
}`;

writeFile('../IdlescapeGameData.js', jsFileContent);

function writeFile(filename, content){
    const fs = require('fs');
    const path = require('path');
    try {
        fs.writeFileSync(path.resolve(__dirname, filename), content);
    } catch (err) {
        console.error(err)
    }
}
