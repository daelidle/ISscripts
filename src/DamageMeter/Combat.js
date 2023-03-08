class Player {
    name = '';
    currentHP = 0;
    damageDealt = 0;
    effectiveDamageDealt = 0;
    damageReceived = 0;
    damageDealtBreakdown = {}
    effectiveDamageDealtBreakdown = {}
    damageReceivedBreakdown = {}
    currentCastingAbility;
    healing = 0;
    maxHit = 0;
    maxReceived = 0;
    maxHeal = 0;
    weaponAttackSpeed = 0;

    constructor(name, weaponAttackSpeed) {
        this.name = name;
        this.weaponAttackSpeed = weaponAttackSpeed;
    }
}

class Combat {
    group;
    spawnedMonsters;
    onCombat = false;
    combatStartTimestamp;
    combatFinishTimestamp = null;
    characterIdToName = {};
    config;
    UNKNOWN_ABILITY_ID = -100;
    BREAKDOWN_BASE_DICTIONARY = {damage: 0, hits: 0, criticals: 0, misses: 0};

    constructor(config) {
        this.group = {};
        this.spawnedMonsters = {};
        this.combatStartTimestamp = new Date();
        this.config = config;
    }

    inCombat(){
        return this.onCombat;
    }

    isPlayerOnGroup(playerId){
        return (playerId in this.characterIdToName);
    }

    addPlayerToGroup(playerId, playerName, weaponAttackSpeed){
        this.characterIdToName[playerId] = playerName;
        this.group[playerName] = new Player(playerName, weaponAttackSpeed);
    }

    setPlayerCurrentHP(playerId, hp){
        const playerName = this._getPlayerName(playerId);
        this.group[playerName].currentHP = hp;
    }

    addDamageDealt(playerId, defender, damage, damageType, isCritical, isMiss) {
        const playerName = this._getPlayerName(playerId);
        const player = this.group[playerName];
        player.damageDealt += damage;
        // If we reconnect in the middle of a fight we may get a damage message before getting the monster info message
        const monsterHealth = this.spawnedMonsters[defender]?.monsterHealth ?? damage;
        player.effectiveDamageDealt += Math.min(damage, monsterHealth);
        if (damage > player.maxHit) player.maxHit = damage;

        const ability = player.currentCastingAbility ?? this.UNKNOWN_ABILITY_ID;
        if (!player.damageDealtBreakdown[ability]) {
            player.damageDealtBreakdown[ability] = {...this.BREAKDOWN_BASE_DICTIONARY};
            player.effectiveDamageDealtBreakdown[ability] = {...this.BREAKDOWN_BASE_DICTIONARY};;
        }

        if (!isMiss) {
            player.damageDealtBreakdown[ability].damage += damage;
            player.damageDealtBreakdown[ability].hits++;
            player.effectiveDamageDealtBreakdown[ability].damage += Math.min(damage, monsterHealth);
            player.effectiveDamageDealtBreakdown[ability].hits++;
            if (isCritical){
                player.damageDealtBreakdown[ability].criticals++;
                player.effectiveDamageDealtBreakdown[ability].criticals++;
            }
        } else {
            player.damageDealtBreakdown[ability].misses++;
            player.effectiveDamageDealtBreakdown[ability].misses++;
        }
    }

    addDamageReceived(playerId, monsterId, damage, damageType, isCritical, isMiss) {
        const playerName = this._getPlayerName(playerId);
        this.group[playerName].damageReceived += damage;
        if (damage > this.group[playerName].maxReceived) this.group[playerName].maxReceived = damage;

        const ability = this.spawnedMonsters[monsterId]?.currentCastingAbility ?? this.UNKNOWN_ABILITY_ID;
        if (!this.group[playerName].damageReceivedBreakdown[ability]) this.group[playerName].damageReceivedBreakdown[ability] = {...this.BREAKDOWN_BASE_DICTIONARY};;
        if (!isMiss) {
            this.group[playerName].damageReceivedBreakdown[ability].damage += damage;
            this.group[playerName].damageReceivedBreakdown[ability].hits++;
            if (isCritical) this.group[playerName].damageReceivedBreakdown[ability].criticals++;
        } else {
            this.group[playerName].damageReceivedBreakdown[ability].misses++;
        }

    }

    addHealing(playerId, healing) {
        const playerName = this._getPlayerName(playerId);
        this.group[playerName].healing += healing;
        if (healing > this.group[playerName].maxHeal) this.group[playerName].maxHeal = healing;
    }
    updateMonster(monstersData) {
        monstersData.forEach(monsterData => {
            if (!(monsterData.id in this.spawnedMonsters)) this.spawnedMonsters[monsterData.id] = monsterData;
            else this.spawnedMonsters[monsterData.id].monsterHealth = monsterData.monsterHealth;
        });
    }

    monsterDead(monsterId){
        delete this.spawnedMonsters[monsterId];
    }

    updatePlayerAbility(playerId, abilityId){
        const playerName = this._getPlayerName(playerId);
        this.group[playerName].currentCastingAbility = abilityId;
    }

    updateMonsterAbility(monsterId, abilityId){
        if (this.spawnedMonsters[monsterId]) this.spawnedMonsters[monsterId].currentCastingAbility = abilityId;
    }

    _getPlayerName(playerId) {
        return this.characterIdToName[playerId];
    }

    _generateCombatStats(){
        let combatStats = {};
        let combatDurationSeconds = (new Date().getTime() - this.combatStartTimestamp.getTime()) / 1000;
        let players = Object.values(this.group);

        let totalDealt = 0;
        let totalEffectiveDealt = 0;
        let totalReceived = 0;
        let totalHeal = 0;
        players.forEach(player => {
            totalDealt += player.damageDealt
            totalEffectiveDealt += player.effectiveDamageDealt
            totalReceived += player.damageReceived
            totalHeal += player.healing
        });

        players.forEach(player => {
            let playerStats = {};
            playerStats.name = player.name;
            playerStats.damageDealt = player.damageDealt;
            playerStats.effectiveDamageDealt = player.effectiveDamageDealt;
            playerStats.damageReceived = player.damageReceived;
            playerStats.healing = player.healing;
            playerStats.maxHit = player.maxHit;
            playerStats.maxReceived = player.maxReceived;
            playerStats.maxHeal = player.maxHeal;
            playerStats.contributionDealt = (totalDealt === 0) ? 0 : Math.round((player.damageDealt / totalDealt) * 100);
            playerStats.contributionEffectiveDealt = (totalEffectiveDealt === 0) ? 0 : Math.round((player.effectiveDamageDealt / totalEffectiveDealt) * 100);
            playerStats.contributionReceived = (totalReceived === 0) ? 0 : Math.round((player.damageReceived / totalReceived) * 100);
            playerStats.contributionHeal =  (totalHeal === 0) ? 0 : Math.round((player.healing / totalHeal) * 100);
            playerStats.dps = (combatDurationSeconds === 0) ? 0 : (player.damageDealt / combatDurationSeconds).toFixed(2);
            playerStats.edps = (combatDurationSeconds === 0) ? 0 : (player.effectiveDamageDealt / combatDurationSeconds).toFixed(2);
            playerStats.aps = (combatDurationSeconds === 0) ? 0 : (player.damageReceived / combatDurationSeconds).toFixed(2);
            playerStats.hps = (combatDurationSeconds === 0) ? 0 : (player.healing / combatDurationSeconds).toFixed(2);
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
            case meterTypes.EDPS:
                players = players.sort((a, b) => parseFloat(b.effectiveDamageDealt) - parseFloat(a.effectiveDamageDealt));
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
            this._startCombat();
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

    resetGroup(){
        this.group = {};
        this.characterIdToName = {};
    }

    _startCombat(){
        this.combatStartTimestamp = new Date();
        this.spawnedMonsters = {};
        Object.keys(this.group).forEach(playerName => this.group[playerName] = new Player(playerName, this.group[playerName].weaponAttackSpeed));
        window.damageMeter._updateMeter();
    }

}