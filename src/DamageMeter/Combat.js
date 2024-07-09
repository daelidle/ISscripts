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

const UNKNOWN_MONSTER_NAME = 'Unknown';
const GLOBAL_KEY = 'Global';

class Combat {
    daelis;
    group;
    spawnedMonsters;
    monsterImageCache = {};
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

    inCombat() {
        return this.onCombat;
    }

    isPlayerOnGroup(playerId) {
        return (playerId in this.characterIdToName);
    }

    addPlayerToGroup(playerId, playerName, weaponAttackSpeed) {
        this.characterIdToName[playerId] = playerName;
        this.group[playerName] = new Player(playerName, weaponAttackSpeed);
    }

    setPlayerCurrentHP(playerId, hp) {
        const playerName = this._getPlayerName(playerId);
        this.group[playerName].currentHP = hp;
    }

    removeOldMembersFromGroup(newGroupMembers) {
        const oldMembers = [];
        for (const playerName in this.group) {
            if (!newGroupMembers.includes(playerName)) {
                oldMembers.push(playerName);
            }
        }
        for (const playerName of oldMembers) delete this.group[playerName];
    }

    addDamageDealt(damageMessage) {
        const playerName = this._getPlayerName(damageMessage.attackerId);
        const player = this.group[playerName];

        // If we reconnect in the middle of a fight we may get a damage message before getting the monster info message
        const monsterName = this.spawnedMonsters[damageMessage.defenderId]?.monsterName ?? UNKNOWN_MONSTER_NAME;
        const monsterHealth = this.spawnedMonsters[damageMessage.defenderId]?.monsterHealth ?? damageMessage.damage;
        const effectiveDamage = Math.min(damageMessage.damage, monsterHealth);
        const ability = damageMessage.abilityId ?? this.UNKNOWN_ABILITY_ID;
        const globalAbility = `${GLOBAL_KEY}.${ability}`;
        const monsterAbility = `${monsterName}.${ability}`;

        if (!_.has(player.damageDealtBreakdown, globalAbility)) {
            _.setWith(player.damageDealtBreakdown, globalAbility, {...this.BREAKDOWN_BASE_DICTIONARY}, Object);
            _.setWith(player.effectiveDamageDealtBreakdown, globalAbility, {...this.BREAKDOWN_BASE_DICTIONARY}, Object);
        }
        if (!_.has(player.damageDealtBreakdown, monsterAbility)) {
            _.setWith(player.damageDealtBreakdown, monsterAbility, {...this.BREAKDOWN_BASE_DICTIONARY}, Object);
            _.setWith(player.effectiveDamageDealtBreakdown, monsterAbility, {...this.BREAKDOWN_BASE_DICTIONARY}, Object);
        }

        if (!damageMessage.isOverTime && !damageMessage.isSplashAoEDamage) {
            _.updateWith(player.damageDealtBreakdown, `${globalAbility}.attacks`, n => n + 1, Object);
            _.updateWith(player.damageDealtBreakdown, `${monsterAbility}.attacks`, n => n + 1, Object);
            _.updateWith(player.effectiveDamageDealtBreakdown, `${globalAbility}.attacks`, n => n + 1, Object);
            _.updateWith(player.effectiveDamageDealtBreakdown, `${monsterAbility}.attacks`, n => n + 1, Object);
        }

        if (!damageMessage.isMiss) {
            player.damageDealt += damageMessage.damage;
            if (damageMessage.damage > player.maxHit) player.maxHit = damageMessage.damage;
            player.effectiveDamageDealt += effectiveDamage

            _.updateWith(player.damageDealtBreakdown, `${globalAbility}.damage`, n => n + damageMessage.damage, Object);
            _.updateWith(player.damageDealtBreakdown, `${globalAbility}.hits`, n => n + 1, Object);
            _.updateWith(player.damageDealtBreakdown, `${monsterAbility}.damage`, n => n + damageMessage.damage, Object);
            _.updateWith(player.damageDealtBreakdown, `${monsterAbility}.hits`, n => n + 1, Object);
            _.updateWith(player.effectiveDamageDealtBreakdown, `${globalAbility}.damage`, n => n + effectiveDamage, Object);
            _.updateWith(player.effectiveDamageDealtBreakdown, `${globalAbility}.hits`, n => n + 1, Object);
            _.updateWith(player.effectiveDamageDealtBreakdown, `${monsterAbility}.damage`, n => n + effectiveDamage, Object);
            _.updateWith(player.effectiveDamageDealtBreakdown, `${monsterAbility}.hits`, n => n + 1, Object);
            if (damageMessage.isCritical) {
                _.updateWith(player.damageDealtBreakdown, `${globalAbility}.criticals`, n => n + 1, Object);
                _.updateWith(player.damageDealtBreakdown, `${monsterAbility}.criticals`, n => n + 1, Object);
                _.updateWith(player.effectiveDamageDealtBreakdown, `${globalAbility}.criticals`, n => n + 1, Object);
                _.updateWith(player.effectiveDamageDealtBreakdown, `${monsterAbility}.criticals`, n => n + 1, Object);
            }
        } else {
            _.updateWith(player.damageDealtBreakdown, `${globalAbility}.misses`, n => n + 1, Object);
            _.updateWith(player.damageDealtBreakdown, `${monsterAbility}.misses`, n => n + 1, Object);
            _.updateWith(player.effectiveDamageDealtBreakdown, `${globalAbility}.misses`, n => n + 1, Object);
            _.updateWith(player.effectiveDamageDealtBreakdown, `${monsterAbility}.misses`, n => n + 1, Object);
        }
    }

    addDamageReceived(damageMessage) {
        const playerName = this._getPlayerName(damageMessage.defenderId);
        if (!playerName) return; // We still haven't received the full group player message

        const player = this.group[playerName];
        player.damageReceived += damageMessage.damage;
        if (damageMessage.damage > player.maxReceived) player.maxReceived = damageMessage.damage;

        const monsterName = this.spawnedMonsters[damageMessage.attackerId]?.monsterName ?? UNKNOWN_MONSTER_NAME;
        const ability = damageMessage.abilityId ?? this.UNKNOWN_ABILITY_ID;
        const globalAbility = `${GLOBAL_KEY}.${ability}`;
        const monsterAbility = `${monsterName}.${ability}`;

        if (!_.has(player.damageReceivedBreakdown, globalAbility)) _.setWith(player.damageReceivedBreakdown, globalAbility, {...this.BREAKDOWN_BASE_DICTIONARY}, Object);
        if (!_.has(player.damageReceivedBreakdown, monsterAbility)) _.setWith(player.damageReceivedBreakdown, monsterAbility, {...this.BREAKDOWN_BASE_DICTIONARY}, Object);
        _.updateWith(player.damageReceivedBreakdown, `${globalAbility}.attacks`, n => n + 1, Object);
        _.updateWith(player.damageReceivedBreakdown, `${monsterAbility}.attacks`, n => n + 1, Object);

        if (!damageMessage.isMiss) {
            _.updateWith(player.damageReceivedBreakdown, `${globalAbility}.damage`, n => n + damageMessage.damage, Object);
            _.updateWith(player.damageReceivedBreakdown, `${globalAbility}.hits`, n => n + 1, Object);
            _.updateWith(player.damageReceivedBreakdown, `${monsterAbility}.damage`, n => n + damageMessage.damage, Object);
            _.updateWith(player.damageReceivedBreakdown, `${monsterAbility}.hits`, n => n + 1, Object);
            if (damageMessage.isCritical) {
                _.updateWith(player.damageReceivedBreakdown, `${globalAbility}.criticals`, n => n + 1, Object);
                _.updateWith(player.damageReceivedBreakdown, `${monsterAbility}.criticals`, n => n + 1, Object);
            }
        } else {
            _.updateWith(player.damageReceivedBreakdown, `${globalAbility}.misses`, n => n + 1, Object);
            _.updateWith(player.damageReceivedBreakdown, `${monsterAbility}.misses`, n => n + 1, Object);
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
            if (monsterData.faction?.includes('playerSummon')) {
                // We are dealing with a summoned Mercenary
                if (!this.isPlayerOnGroup(monsterData.id)) {
                    if (!this.daelis.gameData) return;
                    const monsterWeapon = this.daelis.gameData.items[monsterData?.playerEquipment?.weapon];
                    const attackSpeed = monsterWeapon?.equipmentStats?.attackSpeed ?? 3;
                    this.addPlayerToGroup(monsterData.id, monsterData.monsterName, attackSpeed);
                }
                this.setPlayerCurrentHP(monsterData.id, monsterData.monsterHealth);
            } else {
                if (!this.monsterImageCache[monsterData.monsterName]) {
                    this.monsterImageCache[monsterData.monsterName] = monsterData.image;
                }
                if (!(monsterData.id in this.spawnedMonsters)) {
                    this.spawnedMonsters[monsterData.id] = {
                        monsterHealth: monsterData.monsterHealth,
                        monsterName: monsterData.monsterName
                    };
                } else this.spawnedMonsters[monsterData.id].monsterHealth = monsterData.monsterHealth;
            }
        });
    }

    monsterDead(monsterId) {
        // Delay the monster removal to allow for the combat:splotch messages to be processed
        setTimeout(() => delete this.spawnedMonsters[monsterId], 1000);
    }

    _getPlayerName(playerId) {
        return this.characterIdToName[playerId];
    }

    _generateCombatStats() {
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
            playerStats.contributionHeal = (totalHeal === 0) ? 0 : Math.round((player.healing / totalHeal) * 100);
            playerStats.dps = (combatDurationSeconds === 0) ? 0 : toFixedLocale(player.damageDealt / combatDurationSeconds);
            playerStats.edps = (combatDurationSeconds === 0) ? 0 : toFixedLocale(player.effectiveDamageDealt / combatDurationSeconds);
            playerStats.aps = (combatDurationSeconds === 0) ? 0 : toFixedLocale(player.damageReceived / combatDurationSeconds);
            playerStats.hps = (combatDurationSeconds === 0) ? 0 : toFixedLocale(player.healing / combatDurationSeconds);
            combatStats[player.name] = playerStats;
        });

        return combatStats;
    }

    _getPlayersOrderedByType(meterType) {
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

    _changeCombatStatus(combatStatus) {
        if (this.onCombat === combatStatus) return;
        this.onCombat = combatStatus;
        if (this.onCombat) {
            this._startCombat();
        } else {
            this.combatFinishTimestamp = new Date();
        }
    }

    resetGroup() {
        this.group = {};
        this.characterIdToName = {};
    }

    _startCombat() {
        this.combatStartTimestamp = new Date();
        this.spawnedMonsters = {};
        Object.keys(this.group).forEach(playerName => this.group[playerName] = new Player(playerName, this.group[playerName].weaponAttackSpeed));
        window.damageMeter._updateMeter();
    }

}