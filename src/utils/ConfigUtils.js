function loadConfig(localStorageKey, defaultValue=null) {
    const storedData = localStorage.getItem(localStorageKey);
    if (storedData !== null) return JSON.parse(storedData);
    return defaultValue;
}

function saveConfig(localStorageKey, dictionary) {
    localStorage.setItem(localStorageKey, JSON.stringify(dictionary));
}