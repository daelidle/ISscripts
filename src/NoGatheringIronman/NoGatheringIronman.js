class NoGatheringIronman {
    static meta = {
        name: 'No Gathering Ironman Helper',
        description: 'Hides all gathering nodes from characters that are IronMan with 0 exp on Mining, Foraging and Fishing.',
        image: 'https://raw.githubusercontent.com/daelidle/ISscripts/main/assets/images/NoGatheringIronman/meta_image.png'
    };
    IRONMAN_LEAGUE = 2;
    cssClass = 'CssNoGatheringIronman';
    observer;
    daelis;

    constructor(daelis) {
        this.daelis = daelis;
    }

    onGameReady(isFirstGameReady) {
        if (!this.isValidPlayer()) return;
        this.injectCSS();
        this.blockGatheringSkills();
    }

    onExtensionStop() {
        this.observer.disconnect();
        this._removeCSS();
    }

    isValidPlayer() {
        const state = this.daelis.getPlayerState();
        if (state.league !== this.IRONMAN_LEAGUE) return false;
        if (state.skills.mining.experience !== 0) return false;
        if (state.skills.foraging.experience !== 0) return false;
        if (state.skills.fishing.experience !== 0) return false;

        return true;
    }

    injectCSS() {
        const NGIStyle = "<style>.theme-mining .resource-wrapper{display: none;}.theme-foraging .resource-wrapper{display: none;}.theme-fishing .resource-wrapper{display: none;}</style>";
        injectCSS(NGIStyle, this.cssClass);
    }

    _removeCSS() {
        document.getElementsByClassName(this.cssClass)[0]?.remove();
    }

    blockGatheringSkills() {
        const callback = function (mutationsList, observer) {
            document.querySelectorAll(".theme-mining").forEach(e => {
                e.querySelectorAll(".resource-wrapper").forEach(e => e.parentNode.removeChild(e))
            });
            document.querySelectorAll(".theme-foraging").forEach(e => {
                e.querySelectorAll(".resource-wrapper").forEach(e => e.parentNode.removeChild(e))
            });
            document.querySelectorAll(".theme-fishing").forEach(e => {
                e.querySelectorAll(".resource-wrapper").forEach(e => e.parentNode.removeChild(e))
            });
        };

        // Observe Play Area DOM changes
        const desktopContainer = document.getElementsByClassName("play-area-container");
        const mobileContainer = document.getElementsByClassName("mobile-layout");
        const playAreaContainer = desktopContainer.length > 0 ? desktopContainer[0] : mobileContainer[0];
        const config = {attributes: true, childList: true, subtree: true};
        this.observer = new MutationObserver(callback);
        this.observer.observe(playAreaContainer, config);
    }
}