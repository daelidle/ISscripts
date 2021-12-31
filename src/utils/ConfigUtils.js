function loadConfig(localStorageKey) {
    const storedData = localStorage.getItem(localStorageKey);
    if (storedData !== null) return JSON.parse(storedData);
    return null;
}

function saveConfig(localStorageKey, dictionary) {
    localStorage.setItem(localStorageKey, JSON.stringify(dictionary));
}