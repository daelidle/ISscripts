class Player {
    name = '';
    currentHP = 0;
    damageDealt = 0;
    effectiveDamageDealt = 0;
    damageReceived = 0;
    damageDealtBreakdown = {}
    effectiveDamageDealtBreakdown = {}
    damageReceivedBreakdown = {}
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
    daelis;
    group;
    spawnedMonsters;
    onCombat = false;
    combatStartTimestamp;
    combatFinishTimestamp = null;
    characterIdToName = {};
    UNKNOWN_ABILITY_ID = -100;
    BREAKDOWN_BASE_DICTIONARY = {attacks: 0, damage: 0, hits: 0, criticals: 0, misses: 0};

    constructor(daelis) {
        this.group = {};
        this.spawnedMonsters = {};
        this.combatStartTimestamp = new Date();
        this.daelis = daelis;
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

    removeOldMembersFromGroup(newGroupMembers){
        const oldMembers = [];
        for (const playerName in this.group) {
            if (!newGroupMembers.includes(playerName)) {
                oldMembers.push(playerName);
            }
        }
        for (const playerName of oldMembers) delete this.group[playerName];
    }

    addDamageDealt(damageMessage){
        const playerName = this._getPlayerName(damageMessage.attackerId);
        const player = this.group[playerName];
        player.damageDealt += damageMessage.damage;
        // If we reconnect in the middle of a fight we may get a damage message before getting the monster info message
        const monsterHealth = this.spawnedMonsters[damageMessage.defenderId]?.monsterHealth ?? damageMessage.damage;
        player.effectiveDamageDealt += Math.min(damageMessage.damage, monsterHealth);
        if (damageMessage.damage > player.maxHit) player.maxHit = damageMessage.damage;

        const ability = damageMessage.abilityId ?? this.UNKNOWN_ABILITY_ID;
        if (!player.damageDealtBreakdown[ability]) {
            player.damageDealtBreakdown[ability] = {...this.BREAKDOWN_BASE_DICTIONARY};
            player.effectiveDamageDealtBreakdown[ability] = {...this.BREAKDOWN_BASE_DICTIONARY};
        }

        if (!damageMessage.isAoEAttack || (damageMessage.isAoEAttack && damageMessage.isPrimaryAoETarget)) {
            player.damageDealtBreakdown[ability].attacks++;
            player.effectiveDamageDealtBreakdown[ability].attacks++;
        }

        if (!damageMessage.isMiss) {
            player.damageDealtBreakdown[ability].damage += damageMessage.damage;
            player.damageDealtBreakdown[ability].hits++;
            player.effectiveDamageDealtBreakdown[ability].damage += Math.min(damageMessage.damage, monsterHealth);
            player.effectiveDamageDealtBreakdown[ability].hits++;
            if (damageMessage.isCritical){
                player.damageDealtBreakdown[ability].criticals++;
                player.effectiveDamageDealtBreakdown[ability].criticals++;
            }
        } else {
            player.damageDealtBreakdown[ability].misses++;
            player.effectiveDamageDealtBreakdown[ability].misses++;
        }
    }

    addDamageReceived(damageMessage) {
        const playerName = this._getPlayerName(damageMessage.defenderId);
        if (!playerName) return; // We still haven't received the full group player message

        this.group[playerName].damageReceived += damageMessage.damage;
        if (damageMessage.damage > this.group[playerName].maxReceived) this.group[playerName].maxReceived = damageMessage.damage;

        const ability = damageMessage.abilityId ?? this.UNKNOWN_ABILITY_ID;
        if (!this.group[playerName].damageReceivedBreakdown[ability]) this.group[playerName].damageReceivedBreakdown[ability] = {...this.BREAKDOWN_BASE_DICTIONARY};
        this.group[playerName].damageReceivedBreakdown[ability].attacks++;
        if (!damageMessage.isMiss) {
            this.group[playerName].damageReceivedBreakdown[ability].damage += damageMessage.damage;
            this.group[playerName].damageReceivedBreakdown[ability].hits++;
            if (damageMessage.isCritical) this.group[playerName].damageReceivedBreakdown[ability].criticals++;
        } else {
            this.group[playerName].damageReceivedBreakdown[ability].misses++;
        }
    }

    addHealing(damageMessage) {
        const playerName = this._getPlayerName(damageMessage.attackerId);
        this.group[playerName].healing += damageMessage.damage;
        if (damageMessage.damage > this.group[playerName].maxHeal) this.group[playerName].maxHeal = damageMessage.damage;
    }
    updateMonster(monstersData) {
        if (!monstersData) return;
        monstersData.forEach(monsterData => {
            if (monsterData.faction?.includes('playerSummon')){
                // We are dealing with a summoned Mercenary
                if (!this.isPlayerOnGroup(monsterData.id)) {
                    if (!this.daelis.gameData) return;
                    const monsterWeapon = this.daelis.gameData.items[monsterData?.playerEquipment?.weapon];
                    const attackSpeed = monsterWeapon?.equipmentStats?.attackSpeed ?? 3;
                    this.addPlayerToGroup(monsterData.id, monsterData.monsterName, attackSpeed);
                }
                this.setPlayerCurrentHP(monsterData.id, monsterData.monsterHealth);
            } else {
                if (!(monsterData.id in this.spawnedMonsters)) this.spawnedMonsters[monsterData.id] = monsterData;
                else this.spawnedMonsters[monsterData.id].monsterHealth = monsterData.monsterHealth;
            }
        });
    }

    monsterDead(monsterId){
        delete this.spawnedMonsters[monsterId];
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
            playerStats.dps = (combatDurationSeconds === 0) ? 0 : toFixedLocale(player.damageDealt / combatDurationSeconds);
            playerStats.edps = (combatDurationSeconds === 0) ? 0 : toFixedLocale(player.effectiveDamageDealt / combatDurationSeconds);
            playerStats.aps = (combatDurationSeconds === 0) ? 0 : toFixedLocale(player.damageReceived / combatDurationSeconds);
            playerStats.hps = (combatDurationSeconds === 0) ? 0 : toFixedLocale(player.healing / combatDurationSeconds);
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
        }
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