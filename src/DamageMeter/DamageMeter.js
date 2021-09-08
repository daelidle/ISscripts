const playerTypes = {
    DPS: {
        PHYSICAL: "physical",
        RANGED: "ranged",
        MAGIC: "magic"
    },
    TANK: "tank",
    HEALER: "healer"
}

const meterTypes = {
    DPS: 0,
    TANK: 1,
    HEALER: 2
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
    currentType;
    selfCharacterName;
    ui;

    constructor(ui) {
        this.ui = ui;
        this.group = {};
        this.currentType = meterTypes.DPS;
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
        const players = this._generateGroupStats();
        this.ui._updateMeter(players, this.currentType);
    }

    _generateGroupStats(){
        let players = [];
        let combatDurationSeconds = (new Date().getTime() - this.combatStartTimestamp.getTime()) / 1000;
        let group = Object.values(this.group);
        let total = 0;

        group.forEach(player => {
            switch (this.currentType) {
                case meterTypes.DPS:
                    total += player.damageDealt
                    break;
                case meterTypes.TANK:
                    total += player.damageReceived
                    break;
                case meterTypes.HEALER:
                    total += player.healing
                    break;
            }
        });

        let order = 1;
        group = group.sort(this._compareByType);
        group.forEach(player => {
            let amount;
            let max;
            switch (this.currentType) {
                case meterTypes.DPS:
                    amount = player.damageDealt;
                    max = player.maxHit;
                    break;
                case meterTypes.TANK:
                    amount = player.damageReceived;
                    max = player.maxReceived;
                    break;
                case meterTypes.HEALER:
                    amount = player.healing;
                    max = player.maxHeal;
                    break;
            }
            let contribution = Math.round((amount / total) * 100);
            let perSecond = (amount / combatDurationSeconds).toFixed(2);
            amount = shortenNumber(amount);
            players.push({amount: amount, perSecond: perSecond, contribution: contribution, max: max, name: player.name, order: order});
            order++;
        });

        return players;
    }

    _compareByType(player1, player2){
        let compare;
        switch (this.currentType) {
            case meterTypes.DPS:
                compare = parseFloat(player2.damageDealt) - parseFloat(player1.damageDealt);
                break;
            case meterTypes.TANK:
                compare = parseFloat(player2.damageReceived) - parseFloat(player1.damageReceived);
                break;
            case meterTypes.HEALER:
                compare = parseFloat(player2.healing) - parseFloat(player1.healing);
                break;
        }
        return compare;
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
            displayChatMessageRaw(combatSummary, chatChannels.Activity);
        }
    }

    _generateCombatSummaryMessages(){
        let combatDuration = (new Date().getTime() - this.combatStartTimestamp.getTime()) / 1000;
        let players = Object.values(this.group);
        players = players.sort((a, b) => parseFloat(b.damageDealt) - parseFloat(a.damageDealt));
        let totalDamage = 0;
        players.forEach(player => totalDamage += player.damageDealt);

        let order = 1;
        let message = '<div class="combatSummary"> <p>Damage Meter - Combat Summary</p><div class="dm_summary_row"> <div class="dm_item">Player</div><div class="dm_item">Damage</div><div class="dm_item">DPS</div><div class="dm_item">Max Hit</div><div class="dm_item">Contribution</div><div class="dm_item">Absorbed</div><div class="dm_item">APS</div><div class="dm_item">Max Absorbed</div><div class="dm_item">Healing</div><div class="dm_item">HPS</div><div class="dm_item">Max Heal</div></div>';
        players.forEach(player => {
            let contribution = Math.round((player.damageDealt / totalDamage) * 100);
            let dps = (player.damageDealt / combatDuration).toFixed(2);
            let tps = (player.damageReceived / combatDuration).toFixed(2);
            let hps = (player.healing / combatDuration).toFixed(2);
            let playerSummary = `<div class="dm_summary_row">
                <div class="dm_item">${order}. ${player.name}</div>
                <div class="dm_item">${player.damageDealt}</div>
                <div class="dm_item">${dps}</div>
                <div class="dm_item">${player.maxHit}</div>
                <div class="dm_item">${contribution}%</div>
                <div class="dm_item">${player.damageReceived}</div>
                <div class="dm_item">${tps}</div>
                <div class="dm_item">${player.maxReceived}</div>
                <div class="dm_item">${player.healing}</div>
                <div class="dm_item">${hps}</div>
                <div class="dm_item">${player.maxHeal}</div>
              </div>`;
            message += playerSummary;
            order++;
        });
        message += '</div>';
        return message;
    }

    _resetGroup(){
        this.group = {};
        this.group[this.selfCharacterName] = new Player(this.selfCharacterName);
    }
}