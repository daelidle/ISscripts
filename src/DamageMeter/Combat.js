class Player {
    name = '';
    currentHP = 0;
    damageDealt = 0;
    damageReceived = 0;
    healing = 0;
    maxHit = 0;
    maxReceived = 0;
    maxHeal = 0;

    constructor(name) {
        this.name = name;
    }
}

class Combat {
    group;
    onCombat = false;
    combatStartTimestamp;
    combatFinishTimestamp = null;
    selfCharacterName;
    config;

    constructor(config) {
        this.group = {};
        this.combatStartTimestamp = new Date();
        this.config = config;
    }

    setSelfCharacterName(playerName){
        this.selfCharacterName = playerName;
    }

    inCombat(){
        return this.onCombat;
    }

    isPlayerOnGroup(playerName){
        return (playerName in this.group);
    }

    addPlayerToGroup(playerName){
        this.group[playerName] = new Player(playerName);
    }

    setPlayerCurrentHP(playerName, hp){
        this.group[playerName].currentHP = hp;
    }

    addDamageDealt(playerName, damage) {
        this.group[playerName].damageDealt += damage;
        if (damage > this.group[playerName].maxHit) this.group[playerName].maxHit = damage;
    }

    addDamageReceived(playerName, damage) {
        this.group[playerName].damageReceived += damage;
        if (damage > this.group[playerName].maxReceived) this.group[playerName].maxReceived = damage;
    }

    addHealing(playerName, healing) {
        this.group[playerName].healing += healing;
        if (healing > this.group[playerName].maxHeal) this.group[playerName].maxHeal = healing;
    }

    _generateCombatStats(){
        let combatStats = {};
        let combatDurationSeconds = (new Date().getTime() - this.combatStartTimestamp.getTime()) / 1000;
        let players = Object.values(this.group);

        let totalDealt = 0;
        let totalReceived = 0;
        let totalHeal = 0;
        players.forEach(player => {
            totalDealt += player.damageDealt
            totalReceived += player.damageReceived
            totalHeal += player.healing
        });

        players.forEach(player => {
            let playerStats = {};
            playerStats.name = player.name;
            playerStats.damageDealt = player.damageDealt;
            playerStats.damageReceived = player.damageReceived;
            playerStats.healing = player.healing;
            playerStats.maxHit = player.maxHit;
            playerStats.maxReceived = player.maxReceived;
            playerStats.maxHeal = player.maxHeal;
            playerStats.contributionDealt = (totalDealt === 0) ? 0 : Math.round((player.damageDealt / totalDealt) * 100);
            playerStats.contributionReceived = (totalReceived === 0) ? 0 :  Math.round((player.damageReceived / totalReceived) * 100);
            playerStats.contributionHeal =  (totalHeal === 0) ? 0 : Math.round((player.healing / totalHeal) * 100);
            playerStats.dps = (player.damageDealt / combatDurationSeconds).toFixed(2);
            playerStats.aps = (player.damageReceived / combatDurationSeconds).toFixed(2);
            playerStats.hps = (player.healing / combatDurationSeconds).toFixed(2);
            combatStats[player.name] = playerStats;
        });

        return combatStats;
    }

    _getPlayersOrderedByType(meterType){
        let players = Object.values(this.group);
        switch (meterType) {
            case meterTypes.DPS:
                players = players.sort((a, b) => parseFloat(b.damageDealt) - parseFloat(a.damageDealt));
                break;
            case meterTypes.TANK:
                players = players.sort((a, b) => parseFloat(b.damageReceived) - parseFloat(a.damageReceived));
                break;
            case meterTypes.HEALER:
                players = players.sort((a, b) => parseFloat(b.healing) - parseFloat(a.healing));
                break;
        }
        return players;
    }

    _changeCombatStatus(combatStatus){
        if (this.onCombat === combatStatus) return;
        this.onCombat = combatStatus;
        if (this.onCombat) {
            this._resetCombat();
        } else {
            this.combatFinishTimestamp = new Date();
            if (this.config.showActivitySummary){
                const deleteMessageId = 'dm_delete_message_'+new Date().getTime();
                let combatSummary = this._generateCombatSummaryMessages(deleteMessageId);
                displayChatMessageRaw(combatSummary, chatChannels.Activity);
                document.getElementById(deleteMessageId).addEventListener("click",(event) => event.target.parentElement.parentElement.remove(), false);
            }
        }
    }

    _generateCombatSummaryMessages(deleteMessageId){
        let players = this._getPlayersOrderedByType(meterTypes.DPS);
        let combatStats = this._generateCombatStats();

        let order = 1;
        let combatDurationSeconds = timeForHumans((new Date().getTime() - this.combatStartTimestamp.getTime()) / 1000);
        let message = `<div class="combatSummary"><p>Damage Meter - Combat Summary <span class="dm_summary_duration">(Fighting for ${combatDurationSeconds})</span><span class="close_meter_message" id="${deleteMessageId}">X</span></p><div class="dm_summary_row"> <div class="dm_item">Player</div><div class="dm_item">Damage</div><div class="dm_item">DPS</div><div class="dm_item">Max Hit</div><div class="dm_item">Contribution</div><div class="dm_item">Absorbed</div><div class="dm_item">APS</div><div class="dm_item">Max Absorbed</div><div class="dm_item">Healing</div><div class="dm_item">HPS</div><div class="dm_item">Max Heal</div></div>`;
        players.forEach(player => {
            let playerStats = combatStats[player.name];
            let playerSummary = `<div class="dm_summary_row">
                <div class="dm_item">${order}. ${playerStats.name}</div>
                <div class="dm_item">${playerStats.damageDealt}</div>
                <div class="dm_item">${playerStats.dps}</div>
                <div class="dm_item">${playerStats.maxHit}</div>
                <div class="dm_item">${playerStats.contributionDealt}%</div>
                <div class="dm_item">${playerStats.damageReceived}</div>
                <div class="dm_item">${playerStats.aps}</div>
                <div class="dm_item">${playerStats.maxReceived}</div>
                <div class="dm_item">${playerStats.healing}</div>
                <div class="dm_item">${playerStats.hps}</div>
                <div class="dm_item">${playerStats.maxHeal}</div>
              </div>`;
            message += playerSummary;
            order++;
        });
        message += '</div>';
        return message;
    }

    _resetCombat(){
        this.combatStartTimestamp = new Date();
        this.group = {};
        this.group[this.selfCharacterName] = new Player(this.selfCharacterName);
    }

}