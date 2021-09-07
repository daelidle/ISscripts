function onGameReady(callback) {
    const gameContainer = document.getElementsByClassName("play-area-container");
    if(gameContainer.length === 0) {
        setTimeout(function(){onGameReady(callback);}, 250 );
    } else {
        callback();
    }
}

function injectCSS(css){
    css = css.trim();
    if (css.startsWith('http')) css = `<link href="${css}" rel="stylesheet" type="text/css">`;
    else if (!css.startsWith('<style>')) css = `<style>${css}</style>`;
    const head = document.querySelector('head');
    head.insertAdjacentHTML('beforeend', css);
}

function isIronManCharacter(){
    return document.getElementsByClassName("header-league-icon")[0].getAttribute("src").includes("ironman");
}

function shortenNumber(number){
    if (Math.abs(number) < 1e4) return number;

    const SYMBOL = ["", "K", "M", "B", "T", "P", "E"];
    let tier = Math.log10(Math.abs(number)) / 3 | 0;

    let suffix = SYMBOL[tier];
    let scale = Math.pow(10, tier * 3);

    let scaled = number / scale;

    return Math.floor(scaled) + suffix;
}

function timeForHumans (seconds) {
    // https://stackoverflow.com/questions/8211744/convert-time-interval-given-in-seconds-into-more-human-readable-form
    let levels = [
        [Math.floor(seconds / 31536000), 'years'],
        [Math.floor((seconds % 31536000) / 86400), 'days'],
        [Math.floor(((seconds % 31536000) % 86400) / 3600), 'hours'],
        [Math.floor((((seconds % 31536000) % 86400) % 3600) / 60), 'minutes'],
        [Math.floor((((seconds % 31536000) % 86400) % 3600) % 60), 'seconds'],
    ];
    let returnText = '';

    for (let i = 0, max = levels.length; i < max; i++) {
        if ( levels[i][0] === 0 ) continue;
        returnText += ' ' + levels[i][0] + ' ' + (levels[i][0] === 1 ? levels[i][1].substr(0, levels[i][1].length-1): levels[i][1]);
    }
    return returnText.trim();
}

function getXYZPriceData() {
    GM_xmlhttpRequest({
        method: "GET",
        url: "https://api.idlescape.xyz/prices",
        onload: (response) => {
            const priceData = {};
            try{
                const apiPriceData = JSON.parse(response.responseText)['items'];
                apiPriceData.forEach(data => {
                    priceData[data["name"]] = data["price"];
                });
                return priceData;
            } catch(e) {
                //console.log("Api returned an invalid JSON: " + response.responseText);
            }
            return priceData;
        }
    });
}