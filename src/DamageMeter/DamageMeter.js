const meterTypes = {
    DPS: 0,
    TANK: 1,
    HEALER: 2
}

class DamageMeter {
    static meta = {name: 'Damage Meter', description: 'Shows a damage meter on solo/group combat screen with additional combat information', image:'https://raw.githubusercontent.com/daelidle/ISscripts/main/assets/images/DamageMeter/meta_image.png'};
    combat;
    currentType;
    ui;
    config;
    daelis;

    constructor(daelis) {
        this.daelis = daelis;
        this.config = new MeterConfig(daelis);
        this.ui = new MeterUI(this.config);
        this.combat = new Combat(this.config);
        this.currentType = meterTypes.DPS;
        window.damageMeter = this;
    }

    onGameReady(isFirstGameReady){
        if (isFirstGameReady) this.config.load();
        this.ui.setupUI(isFirstGameReady);
    }

    onMessage(message){
        switch (message.event){
            case "combat hit":
                this._parseCombatHit(message.data);
                break;
            case "start attack animation":
                this._parseAttackAnimation(message.data);
                break;
            case "update player":
                this._parseUpdatePlayer(message.data);
                break;
            default:
                break;
        }
    }

    _parseCombatHit(combatHit) {
        if (!this.combat.inCombat()) return;
        let damageType = combatHit.damageType;
        let source = combatHit.source;
        let target = combatHit.target;
        let damage = combatHit.hit;
        let isCritical = combatHit.crit;
        let isSourceMonster = !this.combat.isPlayerOnGroup(source);

        switch (damageType) {
            case 'miss':
                break;
            case 'heal':
                if (!isSourceMonster) this.combat.addHealing(source, damage);
                break;
            case 'physical':
            case 'chaos':
            case 'fire':
            case 'ice':
            case 'earth':
            case 'light':
            case 'dark':
            case 'lightning':
            case 'poison':
                if (!isSourceMonster) this.combat.addDamageDealt(source, damage);
                else this.combat.addDamageReceived(target, damage);
                break;
            default:
                console.log(`New type of Hit ${damageType}`);
                break;
        }
        this._updateMeter();
    }

    _parseUpdatePlayer(playerInfo) {
        if (playerInfo['portion'] === "all") {
            // Complete player message sent on login
            this.combat.setSelfCharacterName(playerInfo['value']['username']);
            const inCombat = this._parseCombatStatusFromActionQueue(playerInfo['value']['actionQueue']);
            this.combat._changeCombatStatus(inCombat);
            this.combat._resetCombat();
        } else if (Array.isArray(playerInfo['portion']) && playerInfo['portion'].includes("group")) {
            // Group info message
            if (!('value' in playerInfo) || playerInfo['value'] === null) return;
            for (const [_, player] of Object.entries(playerInfo['value'])) {
                let playerName = player.username;
                let currentHP = player.combatStats.currentHealth;
                if (!this.combat.isPlayerOnGroup(playerName)) this.combat.addPlayerToGroup(playerName);
                this.combat.setPlayerCurrentHP(playerName, currentHP);
            }
        } else if (Array.isArray(playerInfo['portion']) && playerInfo['portion'].includes("actionQueue")) {
            // New Action message
            const combatStatus = this._parseCombatStatusFromActionQueue(playerInfo['value']);
            this.combat._changeCombatStatus(combatStatus);
        }
    }

    _parseAttackAnimation(message) {
        //console.log("start attack animation");
    }

    _parseCombatStatusFromActionQueue(actionQueue) {
        if (actionQueue === null) return false;
        if (!actionQueue.hasOwnProperty('actionType')) return false;
        return actionQueue.actionType === 'Action-Combat';
    }

    _updateMeter(){
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
                    uiPlayer = {order: order, name: playerStats.name, amount: playerStats.damageDealt, perSecond: playerStats.dps, contribution: playerStats.contributionDealt, max: playerStats.maxHit};
                    break;
                case meterTypes.TANK:
                    uiPlayer = {order: order, name: playerStats.name, amount: playerStats.damageReceived, perSecond: playerStats.aps, contribution: playerStats.contributionReceived, max: playerStats.maxReceived};
                    break;
                case meterTypes.HEALER:
                    uiPlayer = {order: order, name: playerStats.name, amount: playerStats.healing, perSecond: playerStats.hps, contribution: playerStats.contributionHeal, max: playerStats.maxHeal};
                    break;
            }
            uiPlayers.push(uiPlayer);
            order++;
        });

        this.ui._updateMeter(uiPlayers, type);
    }

    changeMeterType(){
        switch (this.currentType){
            case meterTypes.DPS:
                this.currentType = meterTypes.TANK;
                break;
            case meterTypes.TANK:
                this.currentType = meterTypes.HEALER;
                break;
            case meterTypes.HEALER:
                this.currentType = meterTypes.DPS;
                break;
        }
        this._updateMeter();
    }

    showExtensionSettings(){
        this.ui.showExtensionSettings();
    }
}