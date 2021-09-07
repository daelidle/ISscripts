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
                if (!isSourceMonster) this.group[source].healing += damage;
                break;
            case 'physical':
            case 'chaos':
            case 'fire':
                if (!isSourceMonster) {
                    this.group[source].damageDealt += damage;
                    if (damage > this.group[source].maxHit) this.group[source].maxHit = damage;
                }
                else this.group[target].damageReceived += damage;
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
        let players = Object.values(this.group);
        players = players.sort((a, b) => parseFloat(b.damageDealt) - parseFloat(a.damageDealt));

        let totalDamage = 0;
        players.forEach(player => totalDamage += player.damageDealt);

        let elapsedSeconds = (new Date().getTime() - this.combatStartTimestamp.getTime()) / 1000;
        this.ui._updateMeter(players, totalDamage, elapsedSeconds);
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
        }
    }

    _resetGroup(){
        this.group = {};
        this.group[this.selfCharacterName] = new Player(this.selfCharacterName);
    }
}