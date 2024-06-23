class BestiaryExporter {
    static meta = {
        name: 'Bestiary Exporter',
        description: 'Adds a button to export the bestiary for easy wiki editing.',
        image: 'https://raw.githubusercontent.com/daelidle/ISscripts/main/assets/images/BestiaryExporter/meta_image.png'
    };
    imageUrl = 'https://raw.githubusercontent.com/daelidle/ISscripts/main/assets/images/BestiaryExporter/copy.png';
    currentBestiaryInfo = {};
    observer;
    daelis;

    constructor(daelis) {
        this.daelis = daelis;
    }

    onGameReady(isFirstGameReady) {
        this.setupMutationObserver();
    }

    onExtensionStop() {
        this.observer.disconnect();
    }

    onMessage(message) {
        switch (message.event) {
            case "bestiary:send":
                this.currentBestiaryInfo = this.parseBestiaryData(message.data);
                break;
            default:
                break;
        }
    }

    setupMutationObserver() {
        const context = this;
        const callback = function (mutationsList, observer) {
            context.showBestiaryExporter(context);
        };

        // Observe Play Area DOM changes
        const desktopContainer = document.getElementsByClassName("play-area-container");
        const mobileContainer = document.getElementsByClassName("mobile-layout");
        const playAreaContainer = desktopContainer.length > 0 ? desktopContainer[0] : mobileContainer[0];
        const config = {attributes: true, childList: true, subtree: true};
        this.observer = new MutationObserver(callback);
        this.observer.observe(playAreaContainer, config);
    }

    showBestiaryExporter(context) {
        const bestiaryContainer = document.getElementsByClassName("anchor-bestiary");
        if (bestiaryContainer.length === 0) return;

        const combatZonesContainer = document.getElementsByClassName("combat-zones-container");
        if (combatZonesContainer.length === 0) return;

        const preExistingButton = document.getElementsByClassName("exportBestiaryButton");
        if (preExistingButton.length > 0) return;

        const exportBestiaryButton = document.createElement("img");
        exportBestiaryButton.className = "exportBestiaryButton";
        exportBestiaryButton.style.position = "absolute";
        exportBestiaryButton.style.top = "30px";
        exportBestiaryButton.style.right = "40px";
        exportBestiaryButton.style.maxWidth = "40px";
        exportBestiaryButton.style.maxHeight = "40px";
        exportBestiaryButton.src = this.imageUrl;
        const lastNode = combatZonesContainer[0].lastElementNode;
        combatZonesContainer[0].insertBefore(exportBestiaryButton, lastNode);

        exportBestiaryButton.addEventListener("click", function () {
            const lootString = JSON.stringify(context.currentBestiaryInfo.monsterLoot);
            const statsString = JSON.stringify(context.currentBestiaryInfo.monsterStats);
            copyTextToClipboard(`${lootString}\n\n${statsString}`);
        }, false);
    }

    parseBestiaryData(bestiaryData) {
        if (!bestiaryData.monsters) return;

        const monsterLoot = {};
        const monsterStats = {};

        for (const monster of bestiaryData.monsters) {
            monsterLoot[monster.id] = monster.loot;
            monsterStats[monster.id] = monster.combatStatsData;
        }

        return {monsterLoot, monsterStats};
    }
}