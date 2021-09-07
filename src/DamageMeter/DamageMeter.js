const playerTypes = {
    DPS: {
        PHYSICAL: "physical",
        RANGED: "ranged",
        MAGIC: "magic"
    },
    TANK: "tank",
    HEALER: "healer"
}

class Player {
    name = '';
    currentHP = 0;
    damageDealt = 0;
    damageReceived = 0;
    healing = 0;
    maxHit = 0;
    maxReceived = 0;
    maxHeal = 0;
    type = playerTypes.DPS.PHYSICAL;

    constructor(name) {
        this.name = name;
    }
}

class DamageMeter {
    group;
    onCombat = false;
    combatStartTimestamp = null;
    combatFinishTimestamp = null;
    selfCharacterName;
    ui;

    constructor(ui) {
        this.ui = ui;
        this.group = {};
        let attachToSocket = setInterval(()=> {
            if( typeof window.IdlescapeListener !== "undefined" ){
                clearInterval(attachToSocket);
                window.IdlescapeListener.messages.addEventListener("message", message => this.parseSocketMessage(message));
                window.IdlescapeListener.messages.addEventListener("connected", () => onGameReady(() => this.ui.setupUI()));
                window.IdlescapeListener.messages.addEventListener("disconnected", () => onGameReady(() => this.ui.setupUI()));
                console.log('Idlescape Damage Meter: Attached to socket!');
            }
        }, 100);
    }

    parseSocketMessage(message){
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
        if (!this.onCombat) return;
        let damageType = combatHit.damageType;
        let source = combatHit.source;
        let target = combatHit.target;
        let damage = combatHit.hit;
        let isCritical = combatHit.crit;
        let isSourceMonster = !(source in this.group);

        switch (damageType) {
            case 'miss':
                break;
            case 'heal':
                if (!isSourceMonster) {
                    this.group[source].healing += damage;
                    if (damage > this.group[source].maxHeal) this.group[source].maxHeal = damage;
                }
                break;
            case 'physical':
            case 'chaos':
            case 'fire':
                if (!isSourceMonster) {
                    this.group[source].damageDealt += damage;
                    if (damage > this.group[source].maxHit) this.group[source].maxHit = damage;
                } else {
                    this.group[target].damageReceived += damage;
                    if (damage > this.group[target].maxReceived) this.group[target].maxReceived = damage;
                }
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
            this.selfCharacterName = playerInfo['value']['username'];
            const inCombat = this._parseCombatStatusFromActionQue(playerInfo['value']['actionQue']);
            this._changeCombatStatus(inCombat);
            this._resetGroup();
        } else if (Array.isArray(playerInfo['portion']) && playerInfo['portion'].includes("group")) {
            // Group info message
            if (!('value' in playerInfo)) return;
            for (const [_, player] of Object.entries(playerInfo['value'])) {
                let playerName = player.username;
                let currentHP = player.combatStats.currentHealth;
                if (!(playerName in this.group)) this.group[playerName] = new Player(playerName);
                this.group[playerName].currentHP = currentHP;
            }
        } else if (Array.isArray(playerInfo['portion']) && playerInfo['portion'].includes("actionQue")) {
            // New Action message
            const combatStatus = this._parseCombatStatusFromActionQue(playerInfo['value']);
            this._changeCombatStatus(combatStatus);
        }
    }

    _parseAttackAnimation(message) {
        //console.log("start attack animation");
    }

    _updateMeter(){
        const groupStats = this._generateGroupStats();
        this.ui._updateMeter(groupStats.players, groupStats.totalDamage, groupStats.combatDuration);
    }

    _generateGroupStats(){
        let players = Object.values(this.group);
        players = players.sort((a, b) => parseFloat(b.damageDealt) - parseFloat(a.damageDealt));

        let totalDamage = 0;
        players.forEach(player => totalDamage += player.damageDealt);

        let combatDurationSeconds = (new Date().getTime() - this.combatStartTimestamp.getTime()) / 1000;

        return {'players': players, 'totalDamage': totalDamage, 'combatDuration': combatDurationSeconds}
    }

    _parseCombatStatusFromActionQue(actionQue){
        let inCombat = false;
        actionQue.forEach(action => {
            if ("action" in action){
                inCombat = (action.action === "combat");
            }
        });
        return inCombat;
    }

    _changeCombatStatus(combatStatus){
        if (this.onCombat === combatStatus) return;
        this.onCombat = combatStatus;
        if (this.onCombat) {
            this.combatStartTimestamp = new Date();
            this._resetGroup();
        } else {
            this.combatFinishTimestamp = new Date();
            let combatSummary = this._generateCombatSummaryMessages();
            displayChatMessage(combatSummary, chatChannels.Activity);
        }
    }

    _generateCombatSummaryMessages(){
        const groupStats = this._generateGroupStats();
        let order = 1;
        const messages = ["DAMAGE METER SUMMARY:"];
        groupStats.players.forEach(player => {
            let contribution = Math.round((player.damageDealt / groupStats.totalDamage) * 100);
            let dps = (player.damageDealt / groupStats.combatDuration).toFixed(2);
            let drps = (player.damageReceived / groupStats.combatDuration).toFixed(2);
            let hps = (player.healing / groupStats.combatDuration).toFixed(2);
            let playerSummary = `${order}. ${player.name} -- Total damage: ${player.damageDealt} | Average DPS: ${dps} | Max Hit: ${player.maxHit} | Group contribution: ${contribution}% <br/>
            Total damage Received: ${player.damageReceived} | Average DRPS: ${drps} | Max Hit Received: ${player.maxReceived} <br/>
            Total healing: ${player.healing} | Average HPS: ${hps} | Max Heal: ${player.maxHeal}`;
            messages.push(playerSummary);
            order++;
        });
        return messages;
    }

    _resetGroup(){
        this.group = {};
        this.group[this.selfCharacterName] = new Player(this.selfCharacterName);
    }
}