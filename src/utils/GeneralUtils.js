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
    if (returnText.length === 0) returnText = 'less than a second';
    return returnText.trim();
}

async function getJSON (url) {
    let response;
    try {
        response = await fetch(url);
        if(response.ok) return await response.json();
    } catch(error) {
        // console.log("Api returned an invalid JSON: "+ response);
    }
    return {};
}

function getReact(dom) {
    for(let key in dom) {
        if( key.startsWith("__reactInternalInstance$") ){
            return dom[key];
        }
    }
}

function setReactNativeValue(element, value) {
    let lastValue = element.value;
    element.value = value;
    let event = new Event("input", { target: element, bubbles: true });
    // React 15
    event.simulated = true;
    // React 16
    let tracker = element._valueTracker;
    if (tracker) {
        tracker.setValue(lastValue);
    }
    element.dispatchEvent(event);
}

function isDictionary(variable) {
    if (variable === undefined || variable === null) return false;
    return (variable.constructor === Object);
}

function _fallbackCopyTextToClipboard(text) {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    textArea.style.top = "0";
    textArea.style.left = "0";
    textArea.style.position = "fixed";
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    try {
        document.execCommand('copy');
    } catch (err) {
        console.error('_fallbackCopyTextToClipboard: Could not copy text', err);
    }

    document.body.removeChild(textArea);
}

function copyTextToClipboard(text) {
    if (!navigator.clipboard) {
        _fallbackCopyTextToClipboard(text);
        return;
    }
    navigator.clipboard.writeText(text).then(function() {}, function(err) { console.error('copyTextToClipboard: Could not copy text: ', err);});
}

function stringCapitalize(string){
    if (string.length == 0) return '';
    return string.charAt(0).toUpperCase() + string.slice(1);
}