const meterTypes = {
    DPS: 0,
    EDPS: 1,
    TANK: 2,
    HEALER: 3
}

class Damage {
    damageType;
    attackerId;
    defenderId;
    damage;
    isCritical;
    isMiss;
    abilityID;
    isOverTime;
    isAoEAttack;
    isPrimaryAoETarget;
    isSplashAoEDamage;
}

class DamageMeter {
    static meta = {
        name: 'Damage Meter',
        description: 'Shows a damage meter on solo/group combat screen with additional combat information',
        image: 'https://raw.githubusercontent.com/daelidle/ISscripts/main/assets/images/DamageMeter/meta_image.png'
    };
    customModalClass = 'daelis_meter_breakdown_modal';
    combat;
    currentType;
    ui;
    daelis;

    constructor(daelis) {
        this.daelis = daelis;
        this.ui = new MeterUI();
        this.combat = new Combat(daelis);
        this.currentType = meterTypes.DPS;
        window.damageMeter = this;
    }

    onGameReady(isFirstGameReady) {
        this.ui.setupUI(this.customModalClass);
    }

    onExtensionStop() {
        this.ui.removeUI()
        this.combat.resetGroup();
        window.damageMeter = undefined;
    }

    onMessage(message) {
        switch (message.event) {
            case "combat:splotch":
                this._parseCombatHit(message.data);
                break;
            case "combat:spawnMonster":
                this.combat.updateMonster(message.data);
                break;
            case "combat:updateMonster":
                this.combat.updateMonster([message.data]);
                break;
            case "combat:removeMonster":
                this.combat.monsterDead(message.data.id);
                break;
            case "update:player":
                this._parseUpdatePlayer(message.data);
                break;
            case "update:group":
                this._parseUpdateGroup(message.data);
                break;
            case "update:group-member":
                this._parseUpdateGroupMember(message.data);
                break;
            default:
                break;
        }
    }

    onPlayerStateInitialized(playerInitialState) {
        const inCombat = this._parseCombatStatusFromActionQueue(playerInitialState.actionQueue);
        this.combat._changeCombatStatus(inCombat);
        this.combat._startCombat();
    }

    _parseCombatHit(combatHit) {
        if (!this.combat.inCombat()) return;
        if (Object.keys(this.combat.group).length === 0) {
            console.log("[DaelIS][WARNING]: Received a combat:splotch message before group info.");
            return;
        }

        const damageMessage = new Damage();
        damageMessage.damageType = combatHit.damageType;
        damageMessage.attackerId = combatHit.attackerID;
        damageMessage.defenderId = combatHit.id;
        damageMessage.damage = combatHit.hit;
        damageMessage.isCritical = combatHit.crit;
        damageMessage.abilityId = combatHit.abilityID;
        damageMessage.isOverTime = combatHit.isOverTime;
        damageMessage.isAoEAttack = combatHit.isAoE;
        damageMessage.isPrimaryAoETarget = damageMessage.isAoEAttack && combatHit.primaryInAOE;
        damageMessage.isSplashAoEDamage = damageMessage.isAoEAttack && !combatHit.primaryInAOE;

        const isSourceMonster = !this.combat.isPlayerOnGroup(damageMessage.attackerId);
        switch (damageMessage.damageType) {
            case 'Heal':
                if (!isSourceMonster) this.combat.addHealing(damageMessage);
                break;
            default:
                damageMessage.isMiss = (damageMessage.damageType === 'Miss');
                if (!DamageUtils.allCombatSplotchDamageTypes.includes(damageMessage.damageType)) console.log(`[DaelIS][WARNING]: New type of Hit ${damageMessage.damageType}`);
                if (!isSourceMonster) this.combat.addDamageDealt(damageMessage);
                else this.combat.addDamageReceived(damageMessage);
                break;
        }
        this._updateMeter();
    }

    _parseUpdatePlayer(playerInfo) {
        if (playerInfo['portion'] === "actionQueue") {
            // New Action message
            const combatStatus = this._parseCombatStatusFromActionQueue(playerInfo['value']);
            this.combat._changeCombatStatus(combatStatus);
        }
    }

    _parseUpdateGroup(groupInfo) {
        if (!groupInfo?.value?.groupMemberData) return;
        const newGroupMembers = [];
        for (const player of Object.values(groupInfo.value.groupMemberData)) {
            newGroupMembers.push(player.username);
            if (!this.combat.isPlayerOnGroup(player.id)) {
                if (!player.combatStats) continue;
                this.combat.addPlayerToGroup(player.id, player.username, player.combatStats.attackSpeed);
            }
            this.combat.setPlayerCurrentHP(player.id, player.currentHealth);
        }
        this.combat.removeOldMembersFromGroup(newGroupMembers);
    }

    _parseUpdateGroupMember(playerInfo) {
        if (!(playerInfo.key === 'currentHealth')) return;
        if (Object.keys(this.combat.group).length === 0) {
            console.log("[DaelIS][WARNING]: Received a update:group-member message before group info.");
            return;
        }
        this.combat.setPlayerCurrentHP(playerInfo.userId, playerInfo.value);
    }

    _parseCombatStatusFromActionQueue(actionQueue) {
        if (actionQueue === null) return false;
        if (!actionQueue.hasOwnProperty('actionType')) return false;
        return actionQueue.actionType === 'Action-Combat';
    }

    _updateMeter() {
        let uiPlayers = [];
        let type = this.currentType;
        const players = this.combat._getPlayersOrderedByType(type);
        const combatStats = this.combat._generateCombatStats();
        let order = 1;
        players.forEach(player => {
            let playerStats = combatStats[player.name];
            let uiPlayer;
            switch (type) {
                case meterTypes.DPS:
                    uiPlayer = {
                        order: order,
                        name: playerStats.name,
                        amount: playerStats.damageDealt,
                        perSecond: playerStats.dps,
                        contribution: playerStats.contributionDealt,
                        max: playerStats.maxHit
                    };
                    break;
                case meterTypes.EDPS:
                    uiPlayer = {
                        order: order,
                        name: playerStats.name,
                        amount: playerStats.effectiveDamageDealt,
                        perSecond: playerStats.edps,
                        contribution: playerStats.contributionEffectiveDealt,
                        max: playerStats.maxHit
                    };
                    break;
                case meterTypes.TANK:
                    uiPlayer = {
                        order: order,
                        name: playerStats.name,
                        amount: playerStats.damageReceived,
                        perSecond: playerStats.aps,
                        contribution: playerStats.contributionReceived,
                        max: playerStats.maxReceived
                    };
                    break;
                case meterTypes.HEALER:
                    uiPlayer = {
                        order: order,
                        name: playerStats.name,
                        amount: playerStats.healing,
                        perSecond: playerStats.hps,
                        contribution: playerStats.contributionHeal,
                        max: playerStats.maxHeal
                    };
                    break;
            }
            uiPlayers.push(uiPlayer);
            order++;
        });

        this.ui._updateMeter(uiPlayers, type);
    }

    showBreakdownModal(icon) {
        const playerName = icon.dataset.playername;
        const player = this.combat.group[playerName];
        const modalHtml = this.ui.generateBreakdownModal(player, this.daelis.gameData.abilities);
        displayCompletePopup(modalHtml.title, modalHtml.message, null, '', 'Close', () => {
        }, () => {
        }, this.customModalClass);
        this.ui.setupBreakdownModalTriggers('dps');
    }

    changeMeterType() {
        this.currentType = (this.currentType + 1) % 4;
        this._updateMeter();
    }

    showExtensionSettings() {
        this.ui.showExtensionSettings();
    }
}