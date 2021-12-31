class NoGatheringIronman {

    onGameReady(){
        console.log('NGIM onGameReady');
        if (!this.isValidPlayer()) return;
        console.log('NGIM Valid Player');
        this.injectCSS();
        console.log('NGIM injected css');
        this.blockGatheringSkills();
        console.log('NGIM blocked gathering skills');
    }

    _isValidSkill(skillDOM){
        if (skillDOM.getElementsByClassName("max-skill-glow").length > 0) return false;
        if (skillDOM.getElementsByClassName("max-skill-glow30").length > 0) return false;
        if (skillDOM.getElementsByClassName("mastery-bar").length > 0) return false;

        let skillInfo = skillDOM.getElementsByClassName("CircularProgressbar-text");
        if (skillInfo.length === 0) skillInfo = skillDOM.getElementsByClassName("skill-level-bar-exp-level");
        if (skillInfo.length === 0) skillInfo = skillDOM.getElementsByClassName("skill-level-bar-ni-exp-level");

        const skillLevel = skillInfo[0].innerHTML;
        return parseInt(skillLevel) === 1;
    }

    isValidPlayer(){
        if (!isIronManCharacter()) return false;
        let miningSkill = false;
        let foragingSkill = false;
        let fishingSkill = false;

        if (document.querySelectorAll('[data-for="miningHeader"]').length > 0) {
            // Medium and Large Screens
            document.querySelectorAll('[data-for="miningHeader"]').forEach(e=> { miningSkill = this._isValidSkill(e) });
            document.querySelectorAll('[data-for="foragingHeader"]').forEach(e=> { foragingSkill = this._isValidSkill(e) });
            document.querySelectorAll('[data-for="fishingHeader"]').forEach(e=> { fishingSkill = this._isValidSkill(e) });
        } else {
            // Mobile mode
            document.querySelectorAll('[data-for="miningHeadernavDrawer"]').forEach(e=> { miningSkill = this._isValidSkill(e) });
            document.querySelectorAll('[data-for="foragingHeaderundefined"]').forEach(e=> { foragingSkill = this._isValidSkill(e) });
            document.querySelectorAll('[data-for="fishingHeaderundefined"]').forEach(e=> { fishingSkill = this._isValidSkill(e) });
        }
        return miningSkill && foragingSkill && fishingSkill;
    }

    injectCSS(){
        const NGIStyle="<style>.theme-mining .resource-wrapper{display: none;}.theme-foraging .resource-wrapper{display: none;}.theme-fishing .resource-wrapper{display: none;}</style>";
        injectCSS(NGIStyle);
    }

    blockGatheringSkills(){
        const callback = function(mutationsList, observer) {
            document.querySelectorAll(".theme-mining").forEach(e=>{e.querySelectorAll(".resource-wrapper").forEach(e=>e.parentNode.removeChild(e))});
            document.querySelectorAll(".theme-foraging").forEach(e=>{e.querySelectorAll(".resource-wrapper").forEach(e=>e.parentNode.removeChild(e))});
            document.querySelectorAll(".theme-fishing").forEach(e=>{e.querySelectorAll(".resource-wrapper").forEach(e=>e.parentNode.removeChild(e))});
        };

        // Observe Play Area DOM changes
        const playAreaContainer = document.getElementsByClassName("play-area-container")[0];
        const config = {attributes: true, childList: true, subtree: true };
        const observer = new MutationObserver(callback);
        observer.observe(playAreaContainer, config);
    }
}