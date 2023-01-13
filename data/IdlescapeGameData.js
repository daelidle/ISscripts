class IdlescapeGameData {
    enchantments = {
        0: {
            id: 0,
            name: '',
            strengthPerLevel: 0,
            combat: false,
            // client
            buffIcon: '/images/misc/unknown_buff.png',
            getTooltip: (enchantmentStrength, strengthPerLevel) => `This isn't an enchantment. What are you doing?`,
            // endclient
        }, // no enchantment
        1: {
            id: 1,
            name: 'Embers',
            strengthPerLevel: 0.1,
            combat: false,
            scrollID: 1601,
            // client
            buffIcon: '/images/magic/buffs/embers_icon.png',
            getTooltip: (enchantmentStrength, strengthPerLevel) =>
                `Gain a ${Math.round(
                    enchantmentStrength * strengthPerLevel * 100
                )}% chance to additionally gain the heat from a burnable when gathering it without burning the item.`,
            // endclient
        }, // log burning
        2: {
            id: 2,
            name: 'Prospector',
            strengthPerLevel: 10,
            combat: false,
            scrollID: 1602,
            // client
            buffIcon: '/images/magic/buffs/prospector_icon.png',
            getTooltip: (enchantmentStrength, strengthPerLevel) =>
                `Increases your chance to find gems by a mysterious amount. Stronger enchantments are stronger chances.`,
            // endclient
        }, // gem chance
        3: {
            id: 3,
            name: 'Scholar',
            strengthPerLevel: 0.05,
            combat: false,
            scrollID: 1603,
            // client
            buffIcon: '/images/magic/buffs/scholar_icon.png',
            getTooltip: (enchantmentStrength, strengthPerLevel) =>
                `Gives a ${Math.round(
                    enchantmentStrength * strengthPerLevel * 100
                )}% chance that a gathering or production item is converted into +${Math.round(
                    enchantmentStrength * strengthPerLevel * 100
                )}% experience for that action. Does not affect Crafting. Does not stack with Scholar.`,
            // endclient
        }, // exp without resources
        4: {
            id: 4,
            name: 'Gathering',
            strengthPerLevel: 0.1,
            combat: false,
            scrollID: 1604,
            // client
            buffIcon: '/images/magic/buffs/gathering_icon.png',
            getTooltip: (enchantmentStrength, strengthPerLevel) =>
                `Gain a ${Math.round(
                    enchantmentStrength * strengthPerLevel * 100
                )}% chance to find an extra resource while gathering. Costs 1 nature rune per proc.`,
            // endclient
        }, // double resources
        5: {
            id: 5,
            name: 'Superheating',
            strengthPerLevel: 0.01,
            combat: false,
            scrollID: 1605,
            // client
            buffIcon: '/images/magic/buffs/superheated_icon.png',
            getTooltip: (enchantmentStrength, strengthPerLevel) =>
                `Gain a ${Math.round(
                    enchantmentStrength * strengthPerLevel * 100
                )}% chance to instantly smelt an ore into a bar when mining; uses 1.5x the base heat required to make one of that bar as well as 1 fire rune.`,
            // endclient
        }, // smelt when mining
        6: {
            id: 6,
            name: 'Pyromancy',
            strengthPerLevel: 0.05,
            strengthCap: 0.8,
            combat: false,
            scrollID: 1606,
            // client
            buffIcon: '/images/magic/buffs/pyromancy.png',
            getTooltip: (enchantmentStrength, strengthPerLevel) =>
                `Use ${Math.round(
                    enchantmentStrength * strengthPerLevel * 100
                )}% less heat when cooking and smithing. Caps at 80% reduction.`,
            // endclient
        }, // less heat used
        7: {
            id: 7,
            name: 'Wealth',
            strengthPerLevel: 0.05,
            combat: false,
            scrollID: 1607,
            // client
            buffIcon: '/images/magic/buffs/wealth_icon.png',
            getTooltip: (enchantmentStrength, strengthPerLevel) =>
                `Gives a ${Math.round(
                    enchantmentStrength * strengthPerLevel * 100
                )}% chance that a gathering or production item is automatically sold for ${
                    100 + Math.round(enchantmentStrength * strengthPerLevel * 100)
                }% vendor price. Does not affect Crafting. Does not stack with Scholar.`,
            // endclient
        }, // auto sell for more
        8: {
            id: 8,
            name: 'Haste',
            strengthPerLevel: 0.04,
            strengthCap: 1.0,
            combat: false,
            scrollID: 1608,
            // client
            buffIcon: '/images/magic/buffs/haste_icon.png',
            getTooltip: (enchantmentStrength, strengthPerLevel) =>
                `Increases non-combat action speed by ${Math.round(
                    enchantmentStrength * strengthPerLevel * 100
                )}%. Caps at halving action time.`,
            // endclient
        }, // gathering speed
        9: {
            id: 9,
            name: 'Naturalist',
            strengthPerLevel: 0.2,
            combat: false,
            scrollID: 1609,
            // client
            buffIcon: '/images/magic/buffs/naturalist_icon.png',
            getTooltip: (enchantmentStrength, strengthPerLevel) =>
                `Increase your chance to gain chests while gathering by ${Math.round(
                    enchantmentStrength * strengthPerLevel * 100
                )}%.`,
            // endclient
        }, // chest chance
        10: {
            id: 10,
            name: 'Acrobatics',
            strengthPerLevel: 0.03,
            combat: true,
            scrollID: 1610,
            // client
            buffIcon: '/images/misc/unknown_buff.png',
            getTooltip: (enchantmentStrength, strengthPerLevel) =>
                `Has a ${Math.round(
                    enchantmentStrength * strengthPerLevel * 100
                )}% chance to increase attack speed by 33%.`,
            // endclient
        }, // acrobatics, hit twice
        11: {
            id: 11,
            name: 'Critical Strike',
            strengthPerLevel: 0.025,
            combat: true,
            statBuffs: [
                { path: 'offensiveCritical.chance', additivePerLevel: 0.01, multiplicativePerLevel: 0 },
                { path: 'offensiveCritical.damageMultiplier', additivePerLevel: 0.01, multiplicativePerLevel: 0 },
            ],
            scrollID: 1611,
            // client
            buffIcon: '/images/magic/buffs/critical_strike_icon.png',
            getTooltip: (enchantmentStrength, strengthPerLevel) =>
                `Increases critical chance and damage multiplier by ${Math.round(
                    enchantmentStrength * strengthPerLevel * 100
                )}%.`,
            // endclient
        }, // critical strike
        12: {
            id: 12,
            name: 'Poisoning',
            strengthPerLevel: 1,
            combat: true,
            scrollID: 1612,
            // client
            buffIcon: '/images/misc/unknown_buff.png',
            getTooltip: (enchantmentStrength, strengthPerLevel) =>
                `Apply poison for ${enchantmentStrength * strengthPerLevel} damage per second.`,
            // endclient
        }, // poisoning, apply poison
        13: {
            id: 13,
            name: 'Accuracy',
            strengthPerLevel: 0.025,
            combat: true,
            scrollID: 1613,
            statBuffs: [
                { path: 'offensiveAccuracyAffinityRating.Melee', additivePerLevel: 0, multiplicativePerLevel: 0.025 },
                { path: 'offensiveAccuracyAffinityRating.Magic', additivePerLevel: 0, multiplicativePerLevel: 0.025 },
                { path: 'offensiveAccuracyAffinityRating.Range', additivePerLevel: 0, multiplicativePerLevel: 0.025 },
            ],
            // client
            buffIcon: '/images/magic/buffs/accuracy_icon.png',
            getTooltip: (enchantmentStrength, strengthPerLevel) =>
                `Multiplies the player's accuracy for all three combat styles by ${Math.round(
                    enchantmentStrength * strengthPerLevel * 100
                )}%.`,
            // endclient
        }, // increased hit accuracy
        14: {
            id: 14,
            name: 'Deflect',
            strengthPerLevel: 0.1,
            combat: true,
            scrollID: 1614,
            // client
            buffIcon: '/images/magic/buffs/force_icon.png',
            getTooltip: (enchantmentStrength, strengthPerLevel) =>
                `Decreases damage by and reflects ${Math.round(
                    enchantmentStrength * strengthPerLevel * 100
                )}% of damage back onto the attacker.`,
            // endclient
        }, // deflect on hit
        15: {
            id: 15,
            name: 'Force',
            strengthPerLevel: 0.01,
            combat: true,
            scrollID: 1615,
            // client
            buffIcon: '/images/magic/buffs/force_icon.png',
            getTooltip: (enchantmentStrength, strengthPerLevel) =>
                `Gain ${Math.round(enchantmentStrength * strengthPerLevel * 100)}% of your protection as strength.`,
            // endclient
        }, // defenses to offensive shield
        16: {
            id: 16,
            name: 'Healing',
            strengthPerLevel: 1,
            combat: true,
            scrollID: 1616,
            // client
            buffIcon: '/images/magic/buffs/healing_icon.png',
            getTooltip: (enchantmentStrength, strengthPerLevel) =>
                `Passive healing is increased by ${enchantmentStrength * strengthPerLevel * 0.5} health per minute.`,
            // endclient
        }, // boost health regen
        17: {
            id: 17,
            name: 'Weakening',
            strengthPerLevel: 1,
            combat: false,
            scrollID: 1617,
            // client
            buffIcon: '/images/magic/buffs/weakening_icon.png',
            getTooltip: (enchantmentStrength, strengthPerLevel) =>
                `Decreases the level requirements of the item by ${Math.round(enchantmentStrength * strengthPerLevel)}.`,
            // endclient
        }, // decrease defense level req
        18: {
            id: 18,
            name: 'Reinforcement',
            strengthPerLevel: 12,
            combat: true,
            scrollID: 1618,
            statBuffs: [{ path: 'armor.agility', additivePerLevel: 12, multiplicativePerLevel: 0 }],
            // client
            buffIcon: '/images/magic/buffs/reinforcement_icon.png',
            getTooltip: (enchantmentStrength, strengthPerLevel) =>
                `Increases agility by ${Math.round(enchantmentStrength * strengthPerLevel)}.`,
            // endclient
        }, // decrease enemy accuracy
        19: {
            id: 19,
            name: 'Protection',
            strengthPerLevel: 10,
            combat: true,
            scrollID: 1619,
            statBuffs: [{ path: 'armor.protection', additivePerLevel: 10, multiplicativePerLevel: 0 }],
            // client
            buffIcon: '/images/magic/buffs/protection_icon.png',
            getTooltip: (enchantmentStrength, strengthPerLevel) =>
                `Increases protection by ${Math.round(enchantmentStrength * strengthPerLevel)}.`,
            // endclient
        }, // reduce damage taken
        20: {
            id: 20,
            name: 'Parry',
            strengthPerLevel: 0.01,
            combat: true,
            scrollID: 1620,
            // client
            buffIcon: '/images/magic/buffs/recklessness_icon.png',
            getTooltip: (enchantmentStrength, strengthPerLevel) =>
                `Gives a ${Math.round(
                    enchantmentStrength * strengthPerLevel
                )}% chance to completely block an attack and immediately attack back.`,
            // endclient
        }, // parry
        21: {
            id: 21,
            name: 'Recklessness',
            strengthPerLevel: 0.015,
            combat: true,
            scrollID: 1621,
            // client
            buffIcon: '/images/magic/buffs/recklessness_icon.png',
            getTooltip: (enchantmentStrength, strengthPerLevel) =>
                `Increases maximum damage and decreases minimum damage by ${(
                    enchantmentStrength *
                    strengthPerLevel *
                    100
                ).toFixed(1)}%.`,
            // endclient
        }, // recklessness, increase incoming and outgoing damage
        22: {
            id: 22,
            name: 'Efficiency',
            strengthPerLevel: 0.01,
            combat: false,
            scrollID: 1622,
            // client
            buffIcon: '/images/magic/buffs/efficiency_icon.png',
            getTooltip: (enchantmentStrength, strengthPerLevel) =>
                `Gain ${Math.round(
                    enchantmentStrength * strengthPerLevel * 100
                )}% chance to produce an extra item during cooking, smithing, and scrollcrafting.`,
            // endclient
        }, // efficiency, chance to produce extra item
        23: {
            id: 23,
            name: 'Fishing',
            strengthPerLevel: 0.025,
            combat: false,
            scrollID: 1623,
            // client
            buffIcon: '/images/magic/buffs/fishing.png',
            getTooltip: (enchantmentStrength, strengthPerLevel) =>
                `Increases fish catch chance by ${(enchantmentStrength * strengthPerLevel * 100).toFixed(1)}%.`,
            // endclient
        }, // fishing, increased catch rate
        24: {
            id: 24,
            name: 'Cooking',
            strengthPerLevel: 0.04,
            combat: false,
            scrollID: 1624,
            // client
            buffIcon: '/images/magic/buffs/cooking_icon.png',
            getTooltip: (enchantmentStrength, strengthPerLevel) =>
                `Decrease chance to burn food while cooking by ${Math.round(
                    enchantmentStrength * strengthPerLevel * 100
                )}%.`,
            // endclient
        }, // cooking, reduced burn rate
        25: {
            id: 25,
            name: 'Crafting',
            strengthPerLevel: 0.02,
            combat: false,
            scrollID: 1625,
            // client
            buffIcon: '/images/magic/buffs/crafting_icon.png',
            getTooltip: (enchantmentStrength, strengthPerLevel) =>
                `Each crafted item costs ${Math.round(enchantmentStrength * strengthPerLevel * 100)}% less ingredients`,
            // endclient
        }, // crafting, reduced cost
        26: {
            id: 26,
            name: 'Refining',
            strengthPerLevel: 10,
            combat: false,
            scrollID: 1626,
            // client
            buffIcon: '/images/magic/buffs/refining_icon.png',
            getTooltip: (enchantmentStrength, strengthPerLevel) => `Gain a mysterious chance to find gems while smithing.`,
            // endclient
        }, // refining, gems while smithing
        27: {
            id: 27,
            name: 'Runecrafting',
            strengthPerLevel: 0.05,
            combat: false,
            scrollID: 1627,
            // client
            buffIcon: '/images/magic/buffs/runecrafting_icon.png',
            getTooltip: (enchantmentStrength, strengthPerLevel) =>
                `Reduces essence used in Runecrafting by ${Math.round(enchantmentStrength * strengthPerLevel * 100)}%.`,
            // endclient
        }, // runecrafting, reduces essence usage
        28: {
            id: 28,
            name: 'Chances',
            strengthPerLevel: 0.001,
            combat: false,
            scrollID: 1628,
            // client
            buffIcon: '/images/magic/buffs/chances-icon.png',
            getTooltip: (enchantmentStrength, strengthPerLevel) =>
                `Increased chance of successful augmentation by ${(enchantmentStrength * strengthPerLevel * 100).toFixed(
                    3
                )}%.`,
            // endclient
        }, // chances, increased chance of augmentation
        29: {
            id: 29,
            name: 'Shrimp Lord',
            strengthPerLevel: 0.05,
            combat: false,
            scrollID: 1629,
            // client
            buffIcon: '/images/magic/buffs/shrimlord_icon.png',
            getTooltip: (enchantmentStrength, strengthPerLevel) =>
                `Gain ${Math.round(
                    enchantmentStrength * strengthPerLevel * 100
                )}% chance per cooking action to gain one Raw Shrimp.`,
            // endclient
        }, // Shrimp Lord, chance to get shrimp while cooking
        30: {
            id: 30,
            name: 'Enlightenment',
            strengthPerLevel: 1,
            combat: false,
            scrollID: 1630,
            // client
            buffIcon: '/images/magic/buffs/enlightenment_icon.png',
            getTooltip: (enchantmentStrength, strengthPerLevel) =>
                `Gain ${Math.round(
                    enchantmentStrength * strengthPerLevel
                )} more essence per action where essence is acquired.`,
            // endclient
        }, // enlightment, gain more essence
        31: {
            id: 31,
            name: 'Prolonging',
            strengthPerLevel: 0.1,
            combat: false,
            scrollID: 1631,
            // client
            buffIcon: '/images/magic/buffs/prolonging_icon.png',
            getTooltip: (enchantmentStrength, strengthPerLevel) =>
                `Grants ${Math.round(enchantmentStrength * strengthPerLevel * 100)}% chance that a buff stack is not lost.`,
            // endclient
        }, // boosting, more actions
        32: {
            id: 32,
            name: 'Treasure Hunter',
            strengthPerLevel: 1,
            combat: true,
            scrollID: 1632,
            // client
            buffIcon: '/images/magic/buffs/treasurehunter_icon.png',
            getTooltip: (enchantmentStrength, strengthPerLevel) =>
                `Increases your chance of finding items from slain enemies by ${Math.round(enchantmentStrength * 3)}%.`,
            // endclient
        }, // treasure hunter, rare item from combat
        33: {
            id: 33,
            name: 'Inferno',
            strengthPerLevel: 0.04,
            strengthCap: 0.8,
            combat: false,
            scrollID: 1633,
            // client
            buffIcon: '/images/magic/buffs/inferno_icon.png',
            getTooltip: (enchantmentStrength, strengthPerLevel) =>
                `Gain a ${Math.round(
                    enchantmentStrength * strengthPerLevel * 100
                )}% chance per smithing/cooking action to complete another smithing/cooking action.
			Caps at 80% strength; every 25% strength increases the number of times inferno can proc by 1.
			For example at strength 1 (4%) it can proc once, at strength 7 (28%) it can proc twice, etc.`,
            // endclient
        }, // inferno, smelt ore, costs heat
        34: {
            id: 34,
            name: 'Destructive Testing',
            strengthPerLevel: 5,
            combat: false,
            scrollID: 1634,
            // client
            buffIcon: '/images/magic/buffs/destructivetesting_icon.png',
            getTooltip: (enchantmentStrength, strengthPerLevel) =>
                `Sand, Stone and Clay mined will be destroyed and provide ${Math.round(
                    enchantmentStrength * strengthPerLevel
                )} mining experience per piece.`,
            // endclient
        }, // destructive testing
        35: {
            id: 35,
            name: 'Nature',
            strengthPerLevel: 1,
            combat: false,
            scrollID: 1635,
            // client
            buffIcon: '/images/magic/buffs/nature_icon.png',
            getTooltip: (enchantmentStrength, strengthPerLevel) =>
                `Access hidden tree nodes and greatly increase your chance to find a tree related node while Foraging.`,
            // endclient
        }, // nature, bonus logs
        36: {
            id: 36,
            name: 'Root Digging',
            strengthPerLevel: 10,
            combat: false,
            scrollID: 1636,
            // client
            buffIcon: '/images/magic/buffs/rootdigging_icon.png',
            getTooltip: (enchantmentStrength, strengthPerLevel) =>
                `Gain a chance to find gems while foraging. Stronger enchantments are stronger chances.`,
            // endclient
        }, // root digging, gems from wc
        37: {
            id: 37,
            name: 'Patience',
            strengthPerLevel: 3,
            combat: true,
            scrollID: 1637,
            // client
            buffIcon: '/images/magic/buffs/patience_icon.png',
            getTooltip: (enchantmentStrength, strengthPerLevel) =>
                'Slower abilities and attacks receive a maximum damage bonus scaling on attack speed.',
            // endclient
        }, // patience, increases damage by attack speed
        38: {
            id: 38,
            name: 'Overhealing',
            strengthPerLevel: 0.01,
            combat: true,
            scrollID: 1638,
            // client
            buffIcon: '/images/magic/buffs/overhealing_icon.png',
            getTooltip: (enchantmentStrength, strengthPerLevel) =>
                `Heal for ${Math.round(enchantmentStrength * strengthPerLevel * 100)}% of overkill damage on a target.`,
            // endclient
        }, // overhealing, returns overkill damage as health
        39: {
            id: 39,
            name: 'Farming',
            strengthPerLevel: 0.01,
            combat: false,
            scrollID: 1639,
            // client
            buffIcon: '/images/magic/buffs/farming_icon.png',
            getTooltip: (enchantmentStrength, strengthPerLevel) =>
                `Gain a ${Math.round(
                    enchantmentStrength * strengthPerLevel * 100
                )}% chance to get double the yield when harvesting.`,
            // endclient
        }, // Sroll of Farming, Gain a 1% chance to get double yield when harvesting."
        40: {
            id: 40,
            name: 'Gold Digger',
            strengthPerLevel: 1000,
            combat: false,
            scrollID: 1640,
            // client
            buffIcon: '/images/magic/buffs/golddigger_icon.png',
            getTooltip: (enchantmentStrength, strengthPerLevel) =>
                `Gain a fixed 10% chance per harvested plant to get ${Math.round(
                    enchantmentStrength * strengthPerLevel
                )} Gold Coins.`,
            // endclient
        }, // gold digger, chance to get gold when farming
        41: {
            id: 41,
            name: 'Fertilizing',
            strengthPerLevel: 0.03,
            combat: false,
            scrollID: 1641,
            // client
            buffIcon: '/images/magic/buffs/fertilizing_icon.png',
            getTooltip: (enchantmentStrength, strengthPerLevel) =>
                `Increase minimum harvest yield by ${Math.round(enchantmentStrength * strengthPerLevel * 100)}%.`,
            // endclient
        }, // fertilizing, gain the effect of fertilizer
        42: {
            id: 42,
            name: 'Cultivation',
            strengthPerLevel: 0.01,
            combat: false,
            scrollID: 1642,
            // client
            buffIcon: '/images/magic/buffs/cultivation_icon.png',
            getTooltip: (enchantmentStrength, strengthPerLevel) =>
                `Gain a ${Math.round(
                    enchantmentStrength * strengthPerLevel * 100
                )}% chance to get a seed back when harvesting.`,
            // endclient
        }, // cultivation, gain 1% chance to get seed back
        43: {
            id: 43,
            name: 'Corruption',
            strengthPerLevel: 40,
            combat: true,
            // client
            buffIcon: '/images/magic/buffs/cultivation_icon.png',
            getTooltip: (enchantmentStrength, strengthPerLevel) =>
                `Consumes ichor received in combat to heal for ${strengthPerLevel * enchantmentStrength} health.`,
            // endclient
        }, // Corruption, eats ichor
        44: {
            id: 44,
            name: 'Fortitude',
            strengthPerLevel: 8,
            scrollID: 1643,
            combat: true,
            statBuffs: [{ path: 'armor.stamina', additivePerLevel: 8, multiplicativePerLevel: 0 }],
            // client
            buffIcon: '/images/magic/buffs/overhealing_icon.png',
            getTooltip: (enchantmentStrength, strengthPerLevel) =>
                `Increases stamina by ${strengthPerLevel * enchantmentStrength}.`,
            // endclient
        }, // Fortitude, increases max hp
        45: {
            id: 45,
            name: 'Aspect of Flame',
            strengthPerLevel: 0.05,
            combat: true,
            damageConversion: 'Fire',
            // client
            buffIcon: '/images/magic/buffs/embers_icon.png',
            getTooltip: (enchantmentStrength, strengthPerLevel) =>
                `Converts ${Math.round(enchantmentStrength * strengthPerLevel * 100)}% of damage into fire damage.`,
            // endclient
        }, // Aspect of Flame, swaps auto attack to fire
        46: {
            id: 46,
            name: 'Aspect of Lightning',
            strengthPerLevel: 0.05,
            combat: true,
            damageConversion: 'Lightning',
            // client
            buffIcon: '/images/magic/buffs/embers_icon.png',
            getTooltip: (enchantmentStrength, strengthPerLevel) =>
                `Converts ${Math.round(enchantmentStrength * strengthPerLevel * 100)}% of damage into lightning damage.`,
            // endclient
        }, // Aspect of Lightning, swaps auto attack to lightning
        47: {
            id: 47,
            name: 'Aspect of Chaos',
            strengthPerLevel: 0.05,
            combat: true,
            damageConversion: 'Chaos',
            // client
            buffIcon: '/images/magic/buffs/embers_icon.png',
            getTooltip: (enchantmentStrength, strengthPerLevel) =>
                `Converts ${Math.round(enchantmentStrength * strengthPerLevel * 100)}% of damage into chaos damage.`,
            // endclient
        }, // Aspect of Chaos, swaps auto attack to chaos,
        48: {
            id: 48,
            name: 'Fishing Magnetism',
            strengthPerLevel: 2,
            combat: false,
            scrollID: 1646,
            // client
            buffIcon: '/images/magic/buffs/fishingmagnetism_icon.png',
            getTooltip: (enchantmentStrength, strengthPerLevel) =>
                `Increases bonus rarity by ${
                    enchantmentStrength * strengthPerLevel
                } and decreases both bait and reel power by the same amount. Increases chance to find known rare nodes.`,
            // endclient
        }, // fishing bonus rarity, increases bonus, decreases bait and reel
        49: {
            id: 49,
            name: 'Pungent Bait',
            strengthPerLevel: 3,
            combat: false,
            scrollID: 1644,
            // client
            buffIcon: '/images/magic/buffs/pungentbait_icon.png',
            getTooltip: (enchantmentStrength, strengthPerLevel) =>
                `Increases bait power by ${enchantmentStrength * strengthPerLevel}.`,
            // endclient
        }, // fishing bait power buff
        50: {
            id: 50,
            name: 'Reinforced Line',
            strengthPerLevel: 3,
            scrollID: 1645,
            combat: false,
            // client
            buffIcon: '/images/magic/buffs/reinforcedline_icon.png',
            getTooltip: (enchantmentStrength, strengthPerLevel) =>
                `Increases reel power by ${enchantmentStrength * strengthPerLevel}.`,
            // endclient
        }, // fishing reel power buff
        51: {
            id: 51,
            name: 'Bait Preservation',
            strengthPerLevel: 0.04,
            scrollID: 1647,
            combat: false,
            // client
            buffIcon: '/images/magic/buffs/preservation_icon.png',
            getTooltip: (enchantmentStrength, strengthPerLevel) =>
                `Increases chance to preserve bait by ${Math.round(enchantmentStrength * strengthPerLevel * 100)}%.`,
            // endclient
        }, // chance to keep bait from being consumed
        52: {
            id: 52,
            name: 'Oil Spill',
            strengthPerLevel: 0.075,
            scrollID: 1648,
            combat: false,
            // client
            buffIcon: '/images/magic/buffs/oilspill_icon.png',
            getTooltip: (enchantmentStrength, strengthPerLevel) =>
                `Gives a ${Math.round(
                    enchantmentStrength * strengthPerLevel * 100
                )}% chance to try and extract fish oil from a fish based on the fish's size. There is a chance that fish oil may not be created if the fish is too small.`,
            // endclient
        }, // chance to roll for fish oil
        53: {
            id: 53,
            name: 'Deadliest Catch',
            strengthPerLevel: 0.05,
            scrollID: 1649,
            combat: false,
            // client
            buffIcon: '/images/magic/buffs/deadliestcatch_icon.png',
            getTooltip: (enchantmentStrength, strengthPerLevel) =>
                `Increases bonuses from using bait by ${Math.round(
                    enchantmentStrength * strengthPerLevel * 100
                )}% but decreases bait preservation chance by ${Math.round(
                    enchantmentStrength * strengthPerLevel * 100
                )}%. Increases chance to find known rare resources.`,
            // endclient
        }, // enhances fishing bait but makes it more likely to be consumed
        54: {
            id: 54,
            name: 'Master Chef',
            strengthPerLevel: 0.04,
            scrollID: 1650,
            combat: false,
            // client
            buffIcon: '/images/magic/buffs/masterchef_icon.png',
            getTooltip: (enchantmentStrength, strengthPerLevel) =>
                `Decreases chance to burn food while cooking by ${Math.round(
                    enchantmentStrength * strengthPerLevel * 100
                )}% of your effective cooking level.`,
            // endclient
        }, // decreases burn chance by cooking level
        55: {
            id: 55,
            name: 'Herbalist',
            strengthPerLevel: 1,
            scrollID: 1651,
            combat: false,
            // client
            buffIcon: '/images/magic/buffs/rootdigging_icon.png',
            getTooltip: (enchantmentStrength, strengthPerLevel) =>
                `Access hidden plant nodes and greatly increase your chance to find a plant related node while Foraging.`,
            // endclient
        }, // herbalist, plants are more likely to be found
        56: {
            id: 56,
            name: 'Seed Harvesting',
            strengthPerLevel: 1,
            scrollID: 1652,
            combat: false,
            // client
            buffIcon: '/images/magic/buffs/rootdigging_icon.png',
            getTooltip: (enchantmentStrength, strengthPerLevel) =>
                `Access hidden seed nodes and greatly increase your chance to find a seed related node while Foraging.`,
            // endclient
        }, // seed harvesting, more seeds are more likely to be found
        57: {
            id: 57,
            name: 'Metallurgy',
            strengthPerLevel: 0.6,
            scrollID: 1653,
            combat: false,
            // client
            buffIcon: '/images/magic/buffs/rootdigging_icon.png',
            getTooltip: (enchantmentStrength, strengthPerLevel) =>
                `Decreases the forge's heat intensity required to smelt a bar.`,
            // endclient
        }, // metallurgy, decreases the forge's heat intensity to smelt
        58: {
            id: 58,
            name: 'Pure Metals',
            strengthPerLevel: 0.04,
            scrollID: 1654,
            combat: false,
            // client
            buffIcon: '/images/magic/buffs/rootdigging_icon.png',
            getTooltip: (enchantmentStrength, strengthPerLevel) =>
                `Reduces the amount of materials required to smelt a bar by ${Math.round(
                    enchantmentStrength * strengthPerLevel * 100
                )}%.`,
            // endclient
        }, //
        59: {
            id: 59,
            name: 'Essence Concentration',
            strengthPerLevel: 1,
            scrollID: 1655,
            combat: false,
            // client
            buffIcon: '/images/magic/buffs/rootdigging_icon.png',
            getTooltip: (enchantmentStrength, strengthPerLevel) =>
                `Increases the number of runes crafted per action by ${
                    enchantmentStrength * strengthPerLevel
                } as well as increases essence cost by ${Math.round(enchantmentStrength * strengthPerLevel * 100)}%.`,
            // endclient
        }, //
        60: {
            id: 60,
            name: 'Endless Ammo',
            strengthPerLevel: 0.1,
            combat: true,
            // client
            buffIcon: '/images/magic/buffs/rootdigging_icon.png',
            getTooltip: (enchantmentStrength, strengthPerLevel) =>
                `Gives a ${Math.round(
                    enchantmentStrength * strengthPerLevel * 100
                )}% chance that an ability will cost no ranged projectiles.`,
            // endclient
        }, //
        61: {
            id: 61,
            name: 'Rune Reserves',
            strengthPerLevel: 0.1,
            combat: true,
            // client
            buffIcon: '/images/magic/buffs/rootdigging_icon.png',
            getTooltip: (enchantmentStrength, strengthPerLevel) =>
                `Gives a ${Math.round(
                    enchantmentStrength * strengthPerLevel * 100
                )}% chance that an ability will cost no runes.`,
            // endclient
        }, //
        62: {
            id: 62,
            name: 'Fiber Finder',
            strengthPerLevel: 0.25,
            scrollID: 1656,
            combat: true,
            // client
            buffIcon: '/images/magic/buffs/fishing.png',
            getTooltip: (enchantmentStrength, strengthPerLevel) =>
                `Increases chance to find aquatic fibers by ${enchantmentStrength * strengthPerLevel * 100}%.`,
            // endclient
        }, //
        63: {
            id: 63,
            name: 'Quiver',
            strengthPerLevel: 0.05,
            combat: true,
            // client
            buffIcon: '/images/magic/buffs/rootdigging_icon.png',
            getTooltip: (enchantmentStrength, strengthPerLevel) =>
                `Gives a ${Math.round(
                    enchantmentStrength * strengthPerLevel * 100
                )}% chance that an ability will cost no ranged projectiles. This enchantment's strength is halved if Endless Ammo is present.`,
            // endclient
        }, //
        64: {
            id: 64,
            name: 'Alacrity',
            strengthPerLevel: 15,
            combat: true,
            statBuffs: [
                { path: 'armor.agility', additivePerLevel: 15, multiplicativePerLevel: 0 },
                { path: 'offensiveAccuracyAffinityRating.Melee', additivePerLevel: -15, multiplicativePerLevel: 0 },
                { path: 'offensiveAccuracyAffinityRating.Magic', additivePerLevel: -15, multiplicativePerLevel: 0 },
                { path: 'offensiveAccuracyAffinityRating.Range', additivePerLevel: -15, multiplicativePerLevel: 0 },
            ],
            // client
            buffIcon: '/images/magic/buffs/reinforcement_icon.png',
            getTooltip: (enchantmentStrength, strengthPerLevel) =>
                `Increases agility by ${Math.round(
                    enchantmentStrength * strengthPerLevel
                )} at the expense of the same amount of accuracy in all combat styles.`,
            // endclient
        }, // massively increase agility, decrease accuracy
        65: {
            id: 65,
            name: 'Hold the Line',
            strengthPerLevel: 15,
            combat: true,
            statBuffs: [
                { path: 'armor.protection', additivePerLevel: 15, multiplicativePerLevel: 0 },
                { path: 'armor.resistance', additivePerLevel: 15, multiplicativePerLevel: 0 },
                { path: 'offensiveDamageAffinity.Melee', additivePerLevel: 0, multiplicativePerLevel: -0.05 },
                { path: 'offensiveDamageAffinity.Magic', additivePerLevel: 0, multiplicativePerLevel: -0.05 },
                { path: 'offensiveDamageAffinity.Range', additivePerLevel: 0, multiplicativePerLevel: -0.05 },
            ],
            // client
            buffIcon: '/images/magic/buffs/reinforcement_icon.png',
            getTooltip: (enchantmentStrength, strengthPerLevel) =>
                `Increases defenses by ${Math.round(
                    enchantmentStrength * strengthPerLevel
                )}, but lowers damage affinity in all styles by ${Math.round(enchantmentStrength * 0.05 * 100)}%.`,
            // endclient
        }, // massively increase protection, decrease damage
        66: {
            id: 66,
            name: 'Taxing',
            strengthPerLevel: 1,
            combat: true,
            statBuffs: [
                { path: 'armor.protection', additivePerLevel: 0, multiplicativePerLevel: -0.25 },
                { path: 'armor.protection', additivePerLevel: 0, multiplicativePerLevel: -0.25 },
                { path: 'armor.resistance', additivePerLevel: 0, multiplicativePerLevel: -0.25 },
                { path: 'weapon.strength', additivePerLevel: 0, multiplicativePerLevel: -0.25 },
                { path: 'weapon.intellect', additivePerLevel: 0, multiplicativePerLevel: -0.25 },
                { path: 'weapon.dexterity', additivePerLevel: 0, multiplicativePerLevel: -0.25 },
            ],
            // client
            buffIcon: '/images/magic/buffs/wealth_icon.png',
            getTooltip: (enchantmentStrength, strengthPerLevel) =>
                `Gives a 25% chance to find additional gold on killing a monster, but lowers combat experience gain by the same amount. Your primary combat stats are also reduced by 25%.`,
            // endclient
        }, // gives gold in exchange for xp and stats
        67: {
            id: 67,
            name: 'Archaeology',
            strengthPerLevel: 1,
            combat: true,
            // client
            buffIcon: '/images/magic/buffs/wealth_icon.png',
            getTooltip: (enchantmentStrength, strengthPerLevel) =>
                `Gives access to a secondary drop table while gathering with rewards scaling on enchantment strength.`,
            // endclient
        }, // archaeology
        68: {
            id: 68,
            name: 'Empowered Superheating',
            strengthPerLevel: 0.01,
            combat: false,
            // client
            buffIcon: '/images/magic/buffs/superheated_icon.png',
            getTooltip: (enchantmentStrength, strengthPerLevel) =>
                `Gain a ${Math.round(
                    enchantmentStrength * strengthPerLevel * 100
                )}% chance to instantly smelt an ore into a bar when mining; uses 1.5x the base heat required. Rolls before Superheating and does not stack with it; does not require a fire rune.`,
            // endclient
        }, // smelt when mining
        69: {
            id: 69,
            name: 'Empowered Gathering',
            strengthPerLevel: 0.1,
            combat: false,
            // client
            buffIcon: '/images/magic/buffs/gathering_icon.png',
            getTooltip: (enchantmentStrength, strengthPerLevel) =>
                `Gain a ${Math.round(
                    enchantmentStrength * strengthPerLevel * 100
                )}% chance to find an extra resource while gathering. Rolls before Gathering and does not stack with it; does not require a nature rune.`,
            // endclient
        }, // double resources

        // mostly monster effects
        1000: {
            id: 1000,
            name: 'Impenetrable Defense',
            strengthPerLevel: 1,
            combat: true,
            // client
            buffIcon: '/images/magic/buffs/impenetrabledefence_icon.png',
            getTooltip: (enchantmentStrength, strengthPerLevel) => 'All damage taken is reduced to 1.',
            // endclient
        }, // Impenetrable defense, reduces all incoming damage to 1

        // mostly food effects
        2000: {
            id: 2000,
            name: 'Nimble',
            strengthPerLevel: 0.1,
            combat: true,
            // client
            buffIcon: '/images/magic/buffs/nimble.png',
            getTooltip: (enchantmentStrength, strengthPerLevel) =>
                `Increases ability to dodge by ${strengthPerLevel * enchantmentStrength * 10}%.`,
            // endclient
        }, // nimble
        2001: {
            id: 2001,
            name: 'Demon Skin',
            strengthPerLevel: 9,
            setRequirements: [
                { count: 3, strength: 2 },
                { count: 4, strength: 4 },
                { count: 5, strength: 6 },
            ],
            combat: true,
            // client
            buffIcon: '/images/magic/buffs/demon_skin.png',
            getTooltip: (enchantmentStrength, strengthPerLevel) =>
                `All damage taken is reduced by ${enchantmentStrength * strengthPerLevel} to a minimum of 1.`,
            // endclient
        }, // demon skin, reduces damage taken by 1
        2002: {
            id: 2002,
            name: 'Intuition',
            strengthPerLevel: 0.05,
            combat: false,
            // client
            buffIcon: '/images/magic/buffs/xp_increased.png',
            getTooltip: (enchantmentStrength, strengthPerLevel) =>
                `Gain ${Math.round(
                    enchantmentStrength * strengthPerLevel * 100
                )}% increased experience while doing most things.`,
            // endclient
        }, // intuition, increases exp gain

        5000: {
            id: 5000,
            name: 'schfftph fzzz',
            strengthPerLevel: 0.0005,
            combat: false,
            // client
            buffIcon: '/images/magic/buffs/shrimlord_icon.png',
            getTooltip: (enchantmentStrength, strengthPerLevel) => `fzzglglfzzglgl kakfzz`,
            // endclient
        },

        7000: {
            id: 7000,
            name: 'Christmas Spirit',
            strengthPerLevel: 1,
            combat: false,
            // client
            buffIcon: '/images/christmas/snow.png',
            getTooltip: (enchantmentStrength, strengthPerLevel) =>
                `Merry Christmas! Santa Claus has buffed the server with Christmas Spirit!`,
            // endclient
        },
        7001: {
            id: 7001,
            name: 'Easter',
            strengthPerLevel: 1,
            combat: false,
            // client
            buffIcon: '/images/cooking/34573r_3gg.png',
            getTooltip: (enchantmentStrength, strengthPerLevel) => `Happy Easter! Code: iSawItFirst`,
            // endclient
        },

        8000: {
            id: 8000,
            name: 'Weakness',
            strengthPerLevel: 0.1,
            combat: true,
            // client
            buffIcon: '/images/magic/buffs/weakening_icon.png',
            getTooltip: (enchantmentStrength, strengthPerLevel) =>
                `Decreases max and min hits in combat by ${Math.round(enchantmentStrength * strengthPerLevel * 100)}%.`,
            // endclient
        },
        8001: {
            id: 8001,
            name: 'Corrosion',
            strengthPerLevel: 0.1,
            combat: true,
            // client
            buffIcon: '/images/magic/buffs/protection_icon.png',
            getTooltip: (enchantmentStrength, strengthPerLevel) =>
                `Decreases effectiveness of protection in combat by ${Math.round(
                    enchantmentStrength * strengthPerLevel * 100
                )}%.`,
            // endclient
        },
        8002: {
            id: 8002,
            name: 'Sick',
            strengthPerLevel: 0.1,
            combat: true,
            // client
            buffIcon: '/images/magic/buffs/prolonging_icon.png',
            getTooltip: (enchantmentStrength, strengthPerLevel) =>
                `Decreases healing in combat by ${Math.round(enchantmentStrength * strengthPerLevel * 100)}%.`,
            // endclient
        },
        8003: {
            id: 8003,
            name: 'Blind',
            strengthPerLevel: 0.1,
            combat: true,
            // client
            buffIcon: '/images/magic/buffs/accuracy_icon.png',
            getTooltip: (enchantmentStrength, strengthPerLevel) =>
                `Decreases accuracy in combat by ${Math.round(enchantmentStrength * strengthPerLevel * 100)}%.`,
            // endclient
        },
        8004: {
            id: 8004,
            name: 'Stunned',
            strengthPerLevel: 0.1,
            combat: true,
            // client
            buffIcon: '/images/magic/buffs/patience_icon.png',
            getTooltip: (enchantmentStrength, strengthPerLevel) =>
                `Decreases attack speed in combat by ${Math.round(enchantmentStrength * strengthPerLevel * 100)}%.`,
            // endclient
        },

        8005: {
            id: 8005,
            name: 'Resurrection Sickness',
            strengthPerLevel: 1,
            combat: true,
            // client
            buffIcon: '/images/magic/debuffs/resurrection_sickness.png',
            getTooltip: (enchantmentStrength, strengthPerLevel) =>
                `You're feeling weak after missing your appointment with death. Most stats and healing reduced.`,
            // endclient
        },
        8006: {
            id: 8006,
            name: 'Overheating',
            strengthPerLevel: 1,
            combat: true,
            // client
            hideStacks: true,
            buffIcon: '/images/magic/debuffs/overheating.png',
            getTooltip: (enchantmentStrength, strengthPerLevel) =>
                `This zone is dangerous, you're overheating! Offensive stats reduced. This effect can be mitigated by Flame Resistance food buff.`,
            // endclient
        },
        8007: {
            id: 8007,
            name: 'Flame Resistance',
            strengthPerLevel: 1,
            combat: true,
            stackMult: 2,
            // client
            buffIcon: '/images/magic/buffs/flame_resistance.png',
            getTooltip: (enchantmentStrength, strengthPerLevel) => `Grants some resistance to intense heat.`,
            // endclient
        },
        8008: {
            id: 8008,
            name: 'Soul Stealing',
            strengthPerLevel: 0.1,
            combat: true,
            // client
            buffIcon: '/images/magic/buffs/overhealing_icon.png',
            getTooltip: (enchantmentStrength, strengthPerLevel) =>
                `Heal for ${enchantmentStrength * strengthPerLevel * 100}% of damage dealt.`,
            // endclient
        },
        8009: {
            id: 8009,
            name: "Nature's Sanctuary",
            strengthPerLevel: 20,
            combat: true,
            // client
            buffIcon: '/images/magic/buffs/protection_icon.png',
            getTooltip: (enchantmentStrength, strengthPerLevel) =>
                `Increases resistance by ${enchantmentStrength * strengthPerLevel} and protection by ${
                    (enchantmentStrength * strengthPerLevel) / 2
                }.`,
            // endclient
        },
        8010: {
            id: 8010,
            name: 'Regal Might',
            strengthPerLevel: 50,
            combat: true,
            // client
            buffIcon: '/images/magic/buffs/protection_icon.png',
            getTooltip: (enchantmentStrength, strengthPerLevel) =>
                `Increases protection by ${enchantmentStrength * strengthPerLevel} and resistance by ${
                    (enchantmentStrength * strengthPerLevel) / 2
                }.`,
            // endclient
        },
        8011: {
            id: 8011,
            name: 'Wide Open',
            strengthPerLevel: 20,
            combat: true,
            // client
            buffIcon: '/images/magic/buffs/protection_icon.png',
            getTooltip: (enchantmentStrength, strengthPerLevel) =>
                `Decreases protection and resistance by ${enchantmentStrength * strengthPerLevel}%.`,
            // endclient
        },
        8012: {
            id: 8012,
            name: 'Guarded',
            strengthPerLevel: 20,
            combat: true,
            // client
            buffIcon: '/images/magic/buffs/protection_icon.png',
            getTooltip: (enchantmentStrength, strengthPerLevel) =>
                `Increases protection and resistance by ${enchantmentStrength * strengthPerLevel}%.`,
            // endclient
        },
        8013: {
            id: 8013,
            name: 'Taunting',
            strengthPerLevel: 0.05,
            combat: true,
            // client
            buffIcon: '/images/magic/buffs/reinforcement_icon.png',
            getTooltip: (enchantmentStrength, strengthPerLevel) =>
                `Increases your threat by ${Math.round(enchantmentStrength * strengthPerLevel * 100)}%.`,
            // endclient
        }, // threat
        8014: {
            id: 8014,
            name: 'Camouflage',
            strengthPerLevel: 0.05,
            combat: true,
            // client
            buffIcon: '/images/magic/buffs/reinforcement_icon.png',
            getTooltip: (enchantmentStrength, strengthPerLevel) =>
                `Decreases your threat by ${Math.round(enchantmentStrength * strengthPerLevel * 100)}%.`,
            // endclient
        }, // reduced threat
        8015: {
            id: 8015,
            name: 'Hard to Hit',
            strengthPerLevel: 0.1,
            combat: true,
            // client
            buffIcon: '/images/magic/buffs/reinforcement_icon.png',
            getTooltip: (enchantmentStrength, strengthPerLevel) =>
                `Increases your agility by ${Math.round(
                    enchantmentStrength * strengthPerLevel * 100
                )}% or by 20, whichever is higher.`,
            // endclient
        }, // increased agility
        8016: {
            id: 8016,
            name: 'Ice Armor',
            strengthPerLevel: 10,
            combat: true,
            // client
            buffIcon: '/images/magic/buffs/reinforcement_icon.png',
            getTooltip: (enchantmentStrength, strengthPerLevel) =>
                `Increases your protection and resistance by ${Math.round(
                    enchantmentStrength * strengthPerLevel
                )} and reduces agility by the same amount.`,
            // endclient
        }, // ice protection and affinity
        8017: {
            id: 8017,
            name: 'Rooted',
            strengthPerLevel: 0.1,
            combat: true,
            // client
            buffIcon: '/images/magic/buffs/reinforcement_icon.png',
            getTooltip: (enchantmentStrength, strengthPerLevel) =>
                `Decreases agility by ${Math.round(
                    enchantmentStrength * strengthPerLevel * 100
                )}% or by 20, whichever is higher.`,
            // endclient
        }, // increased agility

        // DOT stuff
        9000: {
            id: 9000,
            name: 'Regeneration',
            strengthPerLevel: 1,
            combat: true,
            // client
            buffIcon: '/images/magic/buffs/overhealing_icon.png',
            getTooltip: (enchantmentStrength, strengthPerLevel) =>
                `Regenerate ${enchantmentStrength * strengthPerLevel} health per second.`,
            // endclient
        },

        9001: {
            id: 9001,
            name: 'Poisoned',
            strengthPerLevel: 1,
            combat: true,
            // client
            buffIcon: '/images/magic/buffs/overhealing_icon.png',
            getTooltip: (enchantmentStrength, strengthPerLevel) =>
                `Lose ${enchantmentStrength * strengthPerLevel} health per second.`,
            // endclient
        },

        9500: {
            id: 9500,
            name: 'Danger Zone',
            strengthPerLevel: 0.1,
            combat: true,
            // client
            buffIcon: '/images/magic/buffs/weakening_icon.png',
            getTooltip: (enchantmentStrength, strengthPerLevel) =>
                `Increase chance of a dangerous encounter by ${enchantmentStrength * strengthPerLevel * 100}%.`,
            // endclient
        },

        // SHRIMP BONUS USES DEMONSKIN, ID 2001
        // SET BONUSES
        10000: {
            id: 10000,
            name: "Giant's Strength",
            strengthPerLevel: 20,
            combat: true,

            // client
            buffIcon: '/images/magic/buffs/overhealing_icon.png',
            getTooltip: (enchantmentStrength, strengthPerLevel) =>
                `Giant's Strength Set Bonus: +${enchantmentStrength * strengthPerLevel} Strength.`,
            // endclient
        },
        10001: {
            id: 10001,
            name: 'Master Fisherman',
            strengthPerLevel: 0.1,
            setRequirements: [
                { count: 3, strength: 1 },
                { count: 4, strength: 0 },
            ],
            combat: false,
            statBuffs: [
                { path: 'fishing', additivePerLevel: 0, multiplicativePerLevel: 0.1 },
                { path: 'fishingBaitPower', additivePerLevel: 0, multiplicativePerLevel: 0.1 },
                { path: 'fishingRarityPower', additivePerLevel: 0, multiplicativePerLevel: 0.1 },
                { path: 'fishingReelPower', additivePerLevel: 0, multiplicativePerLevel: 0.1 },
            ],
            // client
            buffIcon: '/images/magic/buffs/fishing.png',
            getTooltip: (enchantmentStrength, strengthPerLevel) =>
                `Increases fishing stats by ${Math.round(
                    enchantmentStrength * strengthPerLevel * 100
                )}%. Does not affect bait.`,
            // endclient
        },
        10002: {
            id: 10002,
            name: 'Legendary Angler',
            strengthPerLevel: 0.25,
            setRequirements: [{ count: 4, strength: 1 }],
            combat: false,
            statBuffs: [
                { path: 'fishing', additivePerLevel: 0, multiplicativePerLevel: 0.25 },
                { path: 'fishingBaitPower', additivePerLevel: 0, multiplicativePerLevel: 0.25 },
                { path: 'fishingRarityPower', additivePerLevel: 0, multiplicativePerLevel: 0.25 },
                { path: 'fishingReelPower', additivePerLevel: 0, multiplicativePerLevel: 0.25 },
            ],
            // client
            buffIcon: '/images/magic/buffs/fishing.png',
            getTooltip: (enchantmentStrength, strengthPerLevel) =>
                `Overrides Master Fisherman. Increases fishing stats by ${Math.round(
                    enchantmentStrength * strengthPerLevel * 100
                )}%. Does not affect bait.`,
            // endclient
        },
        10003: {
            id: 10003,
            name: 'Jolly',
            strengthPerLevel: 1,
            combat: false,
            // client
            buffIcon: '/images/magic/buffs/fishing.png',
            getTooltip: (enchantmentStrength, strengthPerLevel) => `Ho ho ho! Christmas 2021 Set Bonus!`,
            // endclient
        },
        10004: {
            id: 10004,
            name: "Phoenix's Flame",
            strengthPerLevel: 1,
            combat: false,
            setRequirements: [{ count: 1, strength: 1 }],
            // client
            buffIcon: '/images/magic/buffs/pyromancy.png',
            getTooltip: (enchantmentStrength, strengthPerLevel) =>
                `Gives a chance for a fatal blow to be rendered non-fatal; if this happens the Resurrection Sickness debuff with stacks equal to the damage ignored will be applied.`,
            // endclient
        },
        10005: {
            id: 10005,
            name: 'Master Forager',
            strengthPerLevel: 0.1,
            combat: false,
            setRequirements: [
                { count: 3, strength: 1 },
                { count: 4, strength: 0 },
            ],
            statBuffs: [{ path: 'foraging', additivePerLevel: 0, multiplicativePerLevel: 0.1 }],
            // client
            buffIcon: '/images/magic/buffs/fishing.png',
            getTooltip: (enchantmentStrength, strengthPerLevel) =>
                `Increases foraging stats by ${Math.round(enchantmentStrength * strengthPerLevel * 100)}%.`,
            // endclient
        },
        10006: {
            id: 10006,
            name: 'Legendary Lumberjack',
            strengthPerLevel: 0.25,
            setRequirements: [{ count: 4, strength: 1 }],
            combat: false,
            statBuffs: [{ path: 'foraging', additivePerLevel: 0, multiplicativePerLevel: 0.25 }],
            // client
            buffIcon: '/images/magic/buffs/fishing.png',
            getTooltip: (enchantmentStrength, strengthPerLevel) =>
                `Overrides Master Forager. Increases foraging stats by ${Math.round(
                    enchantmentStrength * strengthPerLevel * 100
                )}%.`,
            // endclient
        },
        10007: {
            id: 10007,
            name: 'Master Miner',
            strengthPerLevel: 0.1,
            setRequirements: [
                { count: 3, strength: 1 },
                { count: 4, strength: 0 },
            ],
            combat: false,
            statBuffs: [{ path: 'mining', additivePerLevel: 0, multiplicativePerLevel: 0.1 }],
            // client
            buffIcon: '/images/magic/buffs/fishing.png',
            getTooltip: (enchantmentStrength, strengthPerLevel) =>
                `Increases mining stats by ${Math.round(enchantmentStrength * strengthPerLevel * 100)}%.`,
            // endclient
        },
        10008: {
            id: 10008,
            name: 'Legendary Rockbreaker',
            strengthPerLevel: 0.25,
            setRequirements: [{ count: 4, strength: 1 }],
            combat: false,
            statBuffs: [{ path: 'mining', additivePerLevel: 0, multiplicativePerLevel: 0.25 }],
            // client
            buffIcon: '/images/magic/buffs/fishing.png',
            getTooltip: (enchantmentStrength, strengthPerLevel) =>
                `Overrides Master Miner. Increases mining stats by ${Math.round(
                    enchantmentStrength * strengthPerLevel * 100
                )}%.`,
            // endclient
        },
        10009: {
            id: 10009,
            name: 'Protective Plates',
            strengthPerLevel: 0.1,
            setRequirements: [
                { count: 2, strength: 1 },
                { count: 3, strength: 2 },
            ],
            combat: false,
            statBuffs: [{ path: 'armor.protection', additivePerLevel: 0, multiplicativePerLevel: 0.1 }],
            // client
            buffIcon: '/images/magic/buffs/fishing.png',
            getTooltip: (enchantmentStrength, strengthPerLevel) =>
                `Increases protection and stamina by ${Math.round(enchantmentStrength * strengthPerLevel * 100)}%.`,
            // endclient
        },
        10010: {
            id: 10010,
            name: "Ranger's Grace",
            strengthPerLevel: 0.3,
            setRequirements: [{ count: 2, strength: 1 }],
            combat: false,
            statBuffs: [{ path: 'armor.agility', additivePerLevel: 0, multiplicativePerLevel: 0.3 }],
            // client
            buffIcon: '/images/magic/buffs/fishing.png',
            getTooltip: (enchantmentStrength, strengthPerLevel) =>
                `Increases agility by ${Math.round(enchantmentStrength * strengthPerLevel * 100)}%.`,
            // endclient
        },
        10011: {
            id: 10011,
            name: 'Magical Barriers',
            strengthPerLevel: 0.1,
            setRequirements: [{ count: 2, strength: 1 }],
            combat: false,
            statBuffs: [{ path: 'armor.resistance', additivePerLevel: 0, multiplicativePerLevel: 0.1 }],
            // client
            buffIcon: '/images/magic/buffs/fishing.png',
            getTooltip: (enchantmentStrength, strengthPerLevel) =>
                `Increases resistance by ${Math.round(enchantmentStrength * strengthPerLevel * 100)}%.`,
            // endclient
        },
        10012: {
            id: 10012,
            name: 'Dextrous Shot',
            strengthPerLevel: 0.15,
            setRequirements: [{ count: 3, strength: 1 }],
            combat: false,
            statBuffs: [{ path: 'weapon.dexterity', additivePerLevel: 0, multiplicativePerLevel: 0.15 }],
            // client
            buffIcon: '/images/magic/buffs/fishing.png',
            getTooltip: (enchantmentStrength, strengthPerLevel) =>
                `Increases dexterity by ${(enchantmentStrength * strengthPerLevel * 100).toFixed(1)}%.`,
            // endclient
        },
        10013: {
            id: 10013,
            name: "Wizard's Wisdom",
            strengthPerLevel: 0.15,
            setRequirements: [{ count: 3, strength: 1 }],
            combat: false,
            statBuffs: [{ path: 'weapon.intellect', additivePerLevel: 0, multiplicativePerLevel: 0.15 }],
            // client
            buffIcon: '/images/magic/buffs/fishing.png',
            getTooltip: (enchantmentStrength, strengthPerLevel) =>
                `Increases intellect by ${(enchantmentStrength * strengthPerLevel * 100).toFixed(1)}%.`,
            // endclient
        },
    };
    items = {
        1: {
            id: 1,
            name: 'Gold',
            tradeable: false,
            itemImage: '/images/money_icon.png',
            extraTooltipInfo:
                'Gold is used to purchase items from the market and shops. You can get more gold by selling resources or fighting monsters.',
            class: 'gold',
            tags: [],
        },
        2: {
            id: 2,
            name: 'Heat',
            tradeable: false,
            itemImage: '/images/heat_icon.png',
            extraTooltipInfo:
                'Heat is used to smelt bars and cook food. You can get heat by burning various items such as logs, branches and coal.',
            class: 'heat',
            tags: [],
        },
        3: {
            id: 3,
            name: 'Air Essence',
            essence: true,
            tradeable: false,
            itemImage: '/images/runecrafting/air_essence.png',
            extraTooltipInfo: 'Air Essence can be gathered by waiting patiently.',
            class: 'rune',
            tags: ['magic', 'runecrafting'],
        },
        4: {
            id: 4,
            name: 'Earth Essence',
            essence: true,
            tradeable: false,
            itemImage: '/images/runecrafting/earth_essence.png',
            extraTooltipInfo: 'Earth Essence can be gathered while mining.',
            class: 'rune',
            tags: ['magic', 'runecrafting'],
        },
        5: {
            id: 5,
            name: 'Fire Essence',
            essence: true,
            tradeable: false,
            itemImage: '/images/runecrafting/fire_essence.png',
            extraTooltipInfo: 'Fire Essence can be gathered while smithing or cooking.',
            class: 'rune',
            tags: ['magic', 'runecrafting'],
        },
        6: {
            id: 6,
            name: 'Water Essence',
            essence: true,
            tradeable: false,
            itemImage: '/images/runecrafting/water_essence.png',
            extraTooltipInfo: 'Water Essence can be gathered by fishing.',
            class: 'rune',
            tags: ['magic', 'runecrafting'],
        },
        7: {
            id: 7,
            name: 'Blood Essence',
            essence: true,
            tradeable: false,
            itemImage: '/images/runecrafting/blood_essence.png',
            extraTooltipInfo: 'Blood Essence can be gathered by dealing damage.',
            class: 'rune',
            tags: ['magic', 'runecrafting'],
        },
        8: {
            id: 8,
            name: 'Death Essence',
            essence: true,
            tradeable: false,
            itemImage: '/images/runecrafting/death_essence.png',
            extraTooltipInfo: 'Death Essence can be gathered by killing opponents.',
            class: 'rune',
            tags: ['magic', 'runecrafting'],
        },
        9: {
            id: 9,
            name: 'Chaos Essence',
            essence: true,
            tradeable: false,
            itemImage: '/images/runecrafting/chaos_essence.png',
            extraTooltipInfo: 'Chaos Essence can be gathered by attempting to hit an enemy.',
            class: 'rune',
            tags: ['magic', 'runecrafting'],
        },
        10: {
            id: 10,
            name: 'Nature Essence',
            essence: true,
            tradeable: false,
            itemImage: '/images/runecrafting/nature_essence.png',
            extraTooltipInfo: 'Nature Essence can be gathered by foraging and farming.',
            class: 'rune',
            tags: ['magic', 'runecrafting'],
        },
        11: {
            id: 11,
            name: 'Mind Essence',
            essence: true,
            tradeable: false,
            itemImage: '/images/runecrafting/mind_essence.png',
            extraTooltipInfo: 'Mind Essence can be gathered by enchanting and augmenting items.',
            class: 'rune',
            tags: ['magic', 'runecrafting'],
        },
        12: {
            id: 12,
            name: 'Cosmic Essence',
            essence: true,
            tradeable: false,
            itemImage: '/images/runecrafting/cosmic_essence.png',
            extraTooltipInfo: 'Cosmic Essence can be gathered by enchanting or runecrafting.',
            class: 'rune',
            tags: ['magic', 'runecrafting'],
        },
        20: {
            id: 20,
            name: 'Platinum',
            tradeable: false,
            itemImage: '/images/premium/platinum_icon.png',
            extraTooltipInfo: 'Platinum is used to purchase items from the Platinum Shop.',
            class: 'platinum',
            tags: [],
        },
        50: {
            name: 'Book',
            id: 50,
            value: 500,
            tradeable: true,
            heat: 50,
            itemImage: '/images/misc/book.png',
            extraTooltipInfo: 'A dusty tome. Perhaps I should read it?',
            class: 'gem',
            tags: ['book'],
        },
        51: {
            name: 'Task',
            id: 51,
            tradeable: false,
            itemImage: '/images/misc/task.png',
            altItemImage: '/images/christmas/wishlist.png',
            extraTooltipInfo: 'Adventure awaits! HUZZAH!',
            class: 'gem',
            tags: ['book'],
        },
        60: {
            id: 60,
            name: 'Raw Shrimp',
            level: 1,
            value: 5,
            ingredientTags: ['fish', 'meat'],
            tradeable: true,
            experience: 5,
            skill: 'fishing',
            size: 1,
            difficulty: 1,
            cookingEnchantment: 29,
            alchemySize: 3,
            itemImage: '/images/fishing/raw_shrimp.png',
            class: 'fish',
            extraTooltipInfo: 'S h r i m p',
            time: 10000,
            tags: ['ingredient', 'fish', 'cooking', 'fishing'],
        },
        61: {
            id: 61,
            name: 'Raw Anchovy',
            level: 15,
            value: 15,
            tradeable: true,
            ingredientTags: ['fish', 'meat'],
            experience: 10,
            skill: 'fishing',
            size: 1,
            difficulty: 1,
            itemImage: '/images/fishing/raw_anchovy.png',
            class: 'fish',
            extraTooltipInfo: 'In what scape would these look like blue shrimp?',
            time: 10000,
            tags: ['ingredient', 'fish', 'cooking', 'fishing'],
        },
        62: {
            id: 62,
            name: 'Raw Trout',
            level: 20,
            value: 25,
            tradeable: true,
            experience: 25,
            ingredientTags: ['fish', 'meat'],
            skill: 'fishing',
            size: 2,
            difficulty: 2,
            bonusDifficultyXP: 1,
            itemImage: '/images/fishing/raw_trout.png',
            class: 'fish',
            extraTooltipInfo: "The fisherman's participation award.",
            time: 10000,
            tags: ['ingredient', 'fish', 'cooking', 'fishing'],
        },
        63: {
            id: 63,
            name: 'Raw Salmon',
            level: 35,
            value: 50,
            tradeable: true,
            experience: 40,
            ingredientTags: ['fish', 'meat'],
            skill: 'fishing',
            size: 2,
            difficulty: 2,
            bonusDifficultyXP: 1,
            itemImage: '/images/fishing/raw_salmon.png',
            class: 'fish',
            extraTooltipInfo: 'Not going up any rivers anymore.',
            time: 10000,
            tags: ['ingredient', 'fish', 'cooking', 'fishing'],
        },
        64: {
            id: 64,
            name: 'Raw Lobster',
            level: 40,
            value: 75,
            tradeable: true,
            experience: 75,
            ingredientTags: ['fish', 'meat'],
            skill: 'fishing',
            size: 3,
            difficulty: 3,
            bonusDifficultyXP: 2,
            itemImage: '/images/fishing/raw_lobster.png',
            class: 'fish',
            extraTooltipInfo: 'Raw Lobster!',
            time: 10000,
            tags: ['ingredient', 'fish', 'cooking', 'fishing'],
        },
        65: {
            id: 65,
            name: 'Raw Tuna',
            level: 50,
            value: 100,
            tradeable: true,
            experience: 100,
            ingredientTags: ['fish', 'meat'],
            skill: 'fishing',
            size: 3,
            difficulty: 3,
            bonusDifficultyXP: 1,
            itemImage: '/images/fishing/raw_tuna.png',
            class: 'fish',
            extraTooltipInfo: 'Tuna Tuna Tuna',
            time: 10000,
            tags: ['ingredient', 'fish', 'cooking', 'fishing'],
            rarity: 'uncommon',
        },
        66: {
            id: 66,
            name: 'Raw Shark',
            level: 70,
            value: 125,
            tradeable: true,
            experience: 125,
            ingredientTags: ['fish', 'meat'],
            skill: 'fishing',
            size: 4,
            difficulty: 4,
            bonusDifficultyXP: 2,
            itemImage: '/images/fishing/raw_shark.png',
            class: 'fish',
            extraTooltipInfo: "A big toothy fish. It's a fish, right?",
            time: 10000,
            tags: ['ingredient', 'fish', 'cooking', 'fishing'],
            rarity: 'rare',
        },
        67: {
            id: 67,
            name: 'Raw Megalodon',
            level: 90,
            value: 350,
            tradeable: true,
            experience: 175,
            ingredientTags: ['monster', 'meat'],
            skill: 'fishing',
            size: 7,
            difficulty: 7,
            bonusDifficultyXP: 3,
            itemImage: '/images/fishing/raw_megalodon.png',
            class: 'fish',
            extraTooltipInfo: 'A monstrously large shark with incredibly tough meat.',
            time: 10000,
            tags: ['ingredient', 'cooking', 'fishing'],
            rarity: 'epic',
        },
        68: {
            id: 68,
            name: 'Raw Ancient Lobster',
            level: 40,
            value: 225,
            tradeable: true,
            experience: 150,
            ingredientTags: ['monster', 'meat'],
            skill: 'fishing',
            size: 5,
            difficulty: 5,
            bonusDifficultyXP: 3,
            itemImage: '/images/fishing/raw_ancient_lobster.png',
            class: 'fish',
            extraTooltipInfo: "A mean looking and monstrously heavy lobster. It's definitely a lot older than you are.",
            time: 10000,
            tags: ['ingredient', 'cooking', 'fishing'],
        },
        69: {
            id: 69,
            name: 'Raw Tentacle Meat',
            level: 40,
            value: 400,
            tradeable: true,
            experience: 200,
            ingredientTags: ['monster', 'meat'],
            skill: 'fishing',
            size: 9,
            difficulty: 9,
            bonusDifficultyXP: 6,
            itemImage: '/images/fishing/raw_tentacle_chunk.png',
            class: 'fish',
            extraTooltipInfo: 'A massive chunk of ancient rubbery meat torn from some sort of tentacled monster.',
            time: 10000,
            tags: ['ingredient', 'cooking', 'fishing'],
        },
        70: {
            id: 70,
            name: 'Raw Huge Tuna',
            level: 70,
            value: 150,
            tradeable: true,
            experience: 150,
            ingredientTags: ['fish', 'meat'],
            skill: 'fishing',
            size: 6,
            difficulty: 6,
            bonusDifficultyXP: 3,
            itemImage: '/images/fishing/raw_huge_tuna.png',
            class: 'fish',
            extraTooltipInfo: 'A huge tuna!',
            time: 10000,
            tags: ['ingredient', 'fish', 'cooking', 'fishing'],
            rarity: 'rare',
        },
        71: {
            id: 71,
            name: 'Seaweed',
            tradeable: true,
            value: 25,
            experience: 10,
            ingredientTags: ['vegetable'],
            size: 1,
            difficulty: 1,
            cookingEnchantment: 49,
            alchemySize: 1,
            itemImage: 'images/fishing/seaweed.png',
            extraTooltipInfo: 'Smells real bad.',
            class: 'fish',
            tags: ['ingredient', 'cooking'],
        },
        72: {
            id: 72,
            name: 'Raw Magnetic Minnow',
            tradeable: true,
            value: 150,
            experience: 50,
            ingredientTags: ['fish', 'meat'],
            size: 1,
            difficulty: 1,
            bonusDifficultyXP: 1,
            alchemySize: 2.5,
            cookingEnchantment: 48,
            itemImage: 'images/fishing/raw_minnow.png',
            extraTooltipInfo: "It didn't even bite the hook, it just got stuck to it.",
            class: 'fish',
            tags: ['ingredient', 'fish', 'cooking'],
        },
        73: {
            id: 73,
            name: 'Raw Tigerfish',
            tradeable: true,
            value: 100,
            experience: 50,
            ingredientTags: ['fish', 'meat'],
            size: 3,
            difficulty: 3,
            bonusDifficultyXP: 2,
            cookingEnchantment: 50,
            alchemySize: 2,
            itemImage: 'images/fishing/raw_tigerfish.png',
            extraTooltipInfo: 'Mean looking and strong to boot!',
            class: 'fish',
            tags: ['ingredient', 'fish', 'cooking'],
        },
        74: {
            id: 74,
            name: 'Raw Slippery Eel',
            tradeable: true,
            value: 125,
            experience: 75,
            ingredientTags: ['fish', 'meat'],
            size: 3,
            difficulty: 3,
            bonusDifficultyXP: 2,
            cookingEnchantment: 52,
            alchemySize: 2,
            itemImage: 'images/fishing/raw_eel.png',
            extraTooltipInfo: 'Slippery and oily!',
            class: 'fish',
            tags: ['ingredient', 'fish', 'cooking'],
        },
        75: {
            id: 75,
            name: 'Raw Great White Shark',
            tradeable: true,
            value: 150,
            experience: 125,
            ingredientTags: ['fish', 'meat'],
            size: 5,
            difficulty: 5,
            bonusDifficultyXP: 3,
            cookingEnchantment: 53,
            alchemySize: 2.5,
            itemImage: 'images/fishing/raw_greatwhite.png',
            extraTooltipInfo: 'A deadly creature to be sure.',
            class: 'fish',
            tags: ['ingredient', 'fish', 'cooking'],
        },
        76: {
            id: 76,
            name: 'Raw Hammerhead Shark',
            value: 150,
            tradeable: true,
            experience: 125,
            ingredientTags: ['fish', 'meat'],
            skill: 'fishing',
            size: 5,
            difficulty: 5,
            bonusDifficultyXP: 2,
            itemImage: '/images/fishing/raw_hammerhead.png',
            extraTooltipInfo: "Probably can't actually be used as a hammer.",
            class: 'fish',
            time: 10000,
            tags: ['ingredient', 'fish', 'cooking', 'fishing'],
        },
        77: {
            id: 77,
            name: 'Raw Crab',
            value: 85,
            tradeable: true,
            experience: 75,
            ingredientTags: ['fish', 'meat'],
            skill: 'fishing',
            size: 3,
            difficulty: 3,
            bonusDifficultyXP: 3,
            itemImage: '/images/fishing/raw_crab.png',
            extraTooltipInfo: "In some places it's considered less desirable than lobster, but not here.",
            class: 'fish',
            time: 10000,
            tags: ['ingredient', 'fish', 'cooking', 'fishing'],
        },
        95: {
            id: 95,
            name: 'Burnt Fish',
            value: 1,
            tradeable: true,



            itemImage: '/images/cooking/burnt_fish.png',
            class: 'cookedFish',
            extraTooltipInfo: 'The result of an overzealous cook. Perhaps studying this will make you a better cook?',
            tags: ['cooking'],
        },
        96: {
            id: 96,
            name: 'Burnt Food',
            value: 1,
            tradeable: true,



            itemImage: '/images/cooking/burnt_food.png',
            class: 'cookedFish',
            extraTooltipInfo: 'The result of an overzealous cook. Perhaps studying this will make you a better cook?',
            tags: ['cooking'],
        },
        101: {
            id: 101,
            name: 'Copper Ore',
            level: 1,
            value: 5,
            tradeable: true,
            experience: 5,
            time: 5000,



            itemImage: '/images/mining/copper_ore.png',
            extraTooltipInfo: 'Can be smelted into bronze bars with the help of some tin.',
            tags: ['mining', 'smithing'],
            class: 'ore',
        },
        102: {
            id: 102,
            name: 'Tin Ore',
            level: 1,
            value: 5,
            tradeable: true,
            experience: 5,
            time: 5000,



            itemImage: '/images/mining/tin_ore.png',
            extraTooltipInfo: 'Can be smelted into bronze bars with the help of some copper.',
            tags: ['mining', 'smithing'],
            class: 'ore',
        },
        103: {
            id: 103,
            name: 'Iron Ore',
            level: 15,
            value: 20,
            tradeable: true,
            experience: 15,
            time: 15000,



            itemImage: '/images/mining/iron_ore.png',
            extraTooltipInfo: 'Can be smelted into the most basic of basic metal bars, iron.',
            tags: ['mining', 'smithing'],
            class: 'ore',
        },
        104: {
            id: 104,
            name: 'Gold Ore',
            level: 30,
            value: 100,
            tradeable: true,
            experience: 25,
            time: 30000,



            itemImage: '/images/mining/gold_ore.png',
            extraTooltipInfo: 'A large chunk of gold ready to be smelted into a bar.',
            class: 'ore',
            tags: ['mining', 'smithing'],
        },
        105: {
            id: 105,
            name: 'Mithril Ore',
            level: 50,
            value: 75,
            tradeable: true,
            experience: 50,
            time: 45000,



            itemImage: '/images/mining/mithril_ore.png',
            extraTooltipInfo: 'A dark blue tinted and hardy metal that can be smelted into bars.',
            class: 'ore',
            tags: ['mining', 'smithing'],
        },
        106: {
            id: 106,
            name: 'Adamantite Ore',
            level: 60,
            value: 100,
            tradeable: true,
            experience: 75,
            time: 60000,



            itemImage: '/images/mining/adamantite_ore.png',
            extraTooltipInfo: 'A green hued metal most consider nearly worthless that can be smelted into bars.',
            class: 'ore',
            tags: ['mining', 'smithing'],
        },
        107: {
            id: 107,
            name: 'Runite Ore',
            level: 85,
            value: 200,
            tradeable: true,
            experience: 100,
            time: 120000,



            itemImage: '/images/mining/runite_ore.png',
            extraTooltipInfo: 'One of the hardest naturally occuring metals that may be smelted into tough bars.',
            class: 'ore',
            tags: ['mining', 'smithing'],
            rarity: 'uncommon',
        },
        108: {
            id: 108,
            name: 'Clay',
            level: 1,
            value: 1,
            tradeable: true,
            experience: 1,
            time: 5000,



            itemImage: '/images/mining/clay.png',
            extraTooltipInfo:
                'It may not be what plants crave, but you could probably mix this with sand to make fertilizer.',
            class: 'ore',
            tags: ['mining', 'smithing'],
        },
        109: {
            id: 109,
            name: 'Stone',
            level: 1,
            value: 1,
            tradeable: true,
            experience: 1,
            time: 5000,



            itemImage: '/images/mining/stone.png',
            extraTooltipInfo: "This doesn't seem useful.",
            class: 'ore',
            tags: ['mining', 'smithing'],
        },
        110: {
            id: 110,
            name: 'Sand',
            level: 1,
            value: 1,
            tradeable: true,
            experience: 1,
            time: 5000,



            itemImage: '/images/mining/sand.png',
            extraTooltipInfo:
                "Some particularly nutritious sand can be used to create fertilizer, though eating the sand itself doesn't seem like a good idea...",
            class: 'ore',
            tags: ['mining', 'smithing'],
        },
        111: {
            id: 111,
            name: 'Silver',
            level: 30,
            value: 100,
            tradeable: true,
            experience: 25,
            time: 5000,



            itemImage: '/images/mining/silver.png',
            extraTooltipInfo: 'A great material for channeling magic essence.',
            class: 'ore',
            tags: ['mining', 'smithing'],
        },
        112: {
            id: 112,
            name: 'Coal',
            level: 1,
            value: 20,
            tradeable: true,
            experience: 10,
            time: 5000,
            heat: 10,



            itemImage: '/images/mining/coal.png',
            extraTooltipInfo:
                "Burn it up to make heat! It's okay, the industrial revolution hasn't happened yet so you're safe from environmental activists.",
            class: 'ore',
            tags: ['mining', 'smithing'],
        },
        113: {
            id: 113,
            name: 'Rune Slate',
            level: 1,
            value: 15,
            tradeable: true,
            experience: 10,
            time: 5000,



            itemImage: '/images/runecrafting/rune_slate.png',
            extraTooltipInfo: 'A blank magical canvas.',
            class: 'ore',
            tags: ['mining', 'smithing'],
        },
        114: {
            id: 114,
            name: 'Stygian Ore',
            level: 90,
            value: 500,
            tradeable: true,
            experience: 150,
            time: 5000,



            itemImage: '/images/mining/stygian_ore.png',
            extraTooltipInfo:
                'An unnaturally glittering ore sourced from the deepest of delves. May be smelted into bars with the aid of ichor.',
            class: 'ore',
            tags: ['mining', 'smithing'],
            rarity: 'rare',
        },
        115: {
            id: 115,
            name: 'Void Stone',
            level: 90,
            value: 1500,
            tradeable: true,
            experience: 175,
            time: 5000,



            itemImage: '/images/mining/void_shard.png',
            extraTooltipInfo: 'A stone pulsing with chaotic energy.',
            class: 'ore',
            tags: ['mining', 'smithing'],
            rarity: 'epic',
        },
        150: {
            id: 150,
            name: 'Fertilizer',
            value: 15,
            tradeable: true,
            class: 'seed',
            craftingLevel: 1,
            craftingExperience: 24,
            requiredResources: [
                { 96: 10, 110: 10 },
                { 95: 10, 110: 10 },
                { 110: 10, 2014: 10 },
                { 108: 10, 110: 10 },
            ],
            craftingMultiplier: [4, 4, 4, 4],



            itemImage: '/images/farming/fertilizer.png',
            extraTooltipInfo: 'Stinky sack of nutrients. Increases minimum yield and experience of plants.',
            craftingDescription: 'Stinky sack of nutrients. Increases minimum yield and experience of plants.',
            tags: ['farming', 'crafting'],
            category: 'Farming',
        },
        151: {
            id: 151,
            name: 'Carrot Seed',
            level: 1,
            value: 5,
            experience: 10,
            farmingExperience: 30,
            time: 30,
            tradeable: true,
            seedHeight: 1,
            seedWidth: 1,
            yield: [
                { chance: 1, id: 2021, min: 1, max: 5 },
                { chance: 1 / 600, id: 185, min: 1, max: 1 },
            ],
            class: 'seed',



            itemImage: '/images/farming/carrot_seed.png',
            plantImage: '/images/farming/carrot_plant.png',
            tags: ['seed', 'farming'],
        },
        152: {
            id: 152,
            name: 'Peppercorn Seed',
            level: 30,
            value: 5,
            experience: 20,
            farmingExperience: 120,
            time: 30,
            tradeable: true,
            seedHeight: 1,
            seedWidth: 1,
            yield: [
                { chance: 1, id: 2012, min: 5, max: 15 },
                { chance: 1 / 600, id: 185, min: 1, max: 1 },
            ],
            class: 'seed',



            itemImage: '/images/farming/peppercorn_seed.png',
            plantImage: '/images/farming/peppercorn_plant.png',
            tags: ['seed', 'farming'],
        },
        153: {
            id: 153,
            name: 'Sugarcane Seed',
            level: 20,
            value: 5,
            experience: 15,
            farmingExperience: 80,
            time: 30,
            tradeable: true,
            seedHeight: 1,
            seedWidth: 1,
            yield: [
                { chance: 1, id: 2015, min: 5, max: 15 },
                { chance: 1 / 600, id: 185, min: 1, max: 1 },
            ],
            class: 'seed',



            itemImage: '/images/farming/sugarcane_seed.png',
            plantImage: '/images/farming/sugarcane_plant.png',
            tags: ['seed', 'farming'],
        },
        154: {
            id: 154,
            name: 'Wheat Seed',
            level: 8,
            value: 5,
            experience: 10,
            farmingExperience: 50,
            time: 30,
            tradeable: true,
            seedHeight: 1,
            seedWidth: 1,
            yield: [
                { chance: 1, id: 2029, min: 1, max: 5 },
                { chance: 1 / 600, id: 185, min: 1, max: 1 },
            ],
            class: 'seed',



            itemImage: '/images/farming/wheat_seed.png',
            plantImage: '/images/farming/wheat_plant.png',
            tags: ['seed', 'farming'],
        },
        155: {
            id: 155,
            name: 'Potato Seed',
            level: 3,
            value: 5,
            experience: 10,
            farmingExperience: 40,
            time: 30,
            tradeable: true,
            seedHeight: 1,
            seedWidth: 1,
            yield: [
                { chance: 1, id: 2023, min: 1, max: 5 },
                { chance: 1 / 600, id: 185, min: 1, max: 1 },
            ],
            class: 'seed',



            itemImage: '/images/farming/potato_seed.png',
            plantImage: '/images/farming/potato_plant.png',
            tags: ['seed', 'farming'],
        },
        156: {
            id: 156,
            name: 'Rice Seed',
            level: 25,
            value: 5,
            experience: 10,
            farmingExperience: 100,
            time: 30,
            tradeable: true,
            seedHeight: 1,
            seedWidth: 1,
            yield: [
                { chance: 1, id: 2030, min: 1, max: 5 },
                { chance: 1 / 600, id: 185, min: 1, max: 1 },
            ],
            class: 'seed',



            itemImage: '/images/farming/rice_seed.png',
            plantImage: '/images/farming/rice_plant.png',
            tags: ['seed', 'farming'],
        },
        157: {
            id: 157,
            name: 'Tomato Seed',
            level: 12,
            value: 5,
            experience: 10,
            farmingExperience: 60,
            time: 30,
            tradeable: true,
            seedHeight: 1,
            seedWidth: 1,
            yield: [
                { chance: 1, id: 2025, min: 1, max: 5 },
                { chance: 1 / 600, id: 185, min: 1, max: 1 },
            ],
            class: 'seed',



            itemImage: '/images/farming/tomato_seed.png',
            plantImage: '/images/farming/tomato_plant.png',
            tags: ['seed', 'farming'],
        },
        158: {
            id: 158,
            name: 'Wildberry Bush Seed',
            level: 5,
            value: 5,
            experience: 10,
            farmingExperience: 200,
            time: 60,
            tradeable: true,
            seedHeight: 1,
            seedWidth: 2,
            yield: [
                { chance: 1, id: 2027, min: 5, max: 15 },
                { chance: 1 / 600, id: 185, min: 1, max: 1 },
            ],
            class: 'seed',



            itemImage: '/images/farming/wildberry_bush_seed.png',
            plantImage: '/images/farming/wildberry_plant.png',
            tags: ['seed', 'farming'],
        },
        159: {
            id: 159,
            name: 'Chili Pepper Seed',
            level: 20,
            value: 5,
            experience: 30,
            farmingExperience: 90,
            time: 30,
            tradeable: true,
            seedHeight: 1,
            seedWidth: 1,
            yield: [
                { chance: 1, id: 2022, min: 1, max: 5 },
                { chance: 1 / 600, id: 185, min: 1, max: 1 },
            ],
            class: 'seed',



            itemImage: '/images/farming/chili_pepper_seed.png',
            plantImage: '/images/farming/chili_pepper_plant.png',
            tags: ['seed', 'farming'],
        },
        160: {
            id: 160,
            name: 'Pumpkin Seed',
            level: 25,
            value: 5,
            experience: 30,
            farmingExperience: 110,
            time: 30,
            tradeable: true,
            seedHeight: 1,
            seedWidth: 1,
            yield: [
                { chance: 1, id: 2024, min: 1, max: 4 },
                { chance: 1 / 600, id: 185, min: 1, max: 1 },
            ],
            class: 'seed',



            itemImage: '/images/farming/pumpkin_seed.png',
            plantImage: '/images/farming/pumpkin_plant.png',
            tags: ['seed', 'farming'],
        },
        161: {
            id: 161,
            name: 'Mushroom Spore',
            level: 15,
            value: 5,
            experience: 10,
            farmingExperience: 70,
            time: 30,
            tradeable: true,
            seedHeight: 1,
            seedWidth: 1,
            yield: [
                { chance: 1, id: 2020, min: 1, max: 2 },
                { chance: 1 / 600, id: 185, min: 1, max: 1 },
            ],
            class: 'seed',



            itemImage: '/images/farming/mushroom_spore.png',
            plantImage: '/images/farming/mushroom_plant.png',
            tags: ['seed', 'farming'],
        },
        170: {
            id: 170,
            name: 'Tree Seed',
            level: 10,
            value: 5,
            experience: 20,
            farmingExperience: 450,
            time: 120,
            tradeable: true,
            seedHeight: 2,
            seedWidth: 2,
            yield: [
                { chance: 1, id: 302, min: 20, max: 50 },
                { chance: 1, id: 301, min: 2, max: 20 },
                { chance: 1 / 300, id: 185, min: 1, max: 1 },
            ],
            class: 'seed',



            itemImage: '/images/farming/tree_seed.png',
            plantImage: '/images/farming/normal_tree_plant.png',
            tags: ['seed', 'farming'],
        },
        171: {
            id: 171,
            name: 'Oak Tree Seed',
            level: 17,
            value: 5,
            experience: 40,
            farmingExperience: 1250,
            time: 120,
            tradeable: true,
            seedHeight: 2,
            seedWidth: 2,
            yield: [
                { chance: 1, id: 303, min: 20, max: 50 },
                { chance: 1, id: 301, min: 2, max: 20 },
                { chance: 1 / 300, id: 185, min: 1, max: 1 },
            ],
            class: 'seed',



            itemImage: '/images/farming/oak_tree_seed.png',
            plantImage: '/images/farming/oak_tree_plant.png',
            tags: ['seed', 'farming'],
        },
        172: {
            id: 172,
            name: 'Willow Tree Seed',
            level: 20,
            value: 5,
            experience: 60,
            farmingExperience: 1800,
            time: 120,
            tradeable: true,
            seedHeight: 2,
            seedWidth: 2,
            yield: [
                { chance: 1, id: 304, min: 20, max: 50 },
                { chance: 1, id: 301, min: 2, max: 20 },
                { chance: 1 / 300, id: 185, min: 1, max: 1 },
            ],
            class: 'seed',



            itemImage: '/images/farming/willow_tree_seed.png',
            plantImage: '/images/farming/willow_tree_plant.png',
            tags: ['seed', 'farming'],
        },
        173: {
            id: 173,
            name: 'Maple Tree Seed',
            level: 25,
            value: 5,
            experience: 80,
            farmingExperience: 2000,
            time: 120,
            tradeable: true,
            seedHeight: 2,
            seedWidth: 2,
            yield: [
                { chance: 1, id: 305, min: 20, max: 50 },
                { chance: 1, id: 301, min: 2, max: 20 },
                { chance: 1 / 300, id: 185, min: 1, max: 1 },
            ],
            class: 'seed',



            itemImage: '/images/farming/maple_tree_seed.png',
            plantImage: '/images/farming/maple_tree_plant.png',
            tags: ['seed', 'farming'],
        },
        174: {
            id: 174,
            name: 'Yew Tree Seed',
            level: 35,
            value: 5,
            experience: 100,
            farmingExperience: 2200,
            time: 120,
            tradeable: true,
            seedHeight: 2,
            seedWidth: 2,
            yield: [
                { chance: 1, id: 306, min: 20, max: 50 },
                { chance: 1, id: 301, min: 2, max: 20 },
                { chance: 1 / 300, id: 185, min: 1, max: 1 },
            ],
            class: 'seed',



            itemImage: '/images/farming/yew_tree_seed.png',
            plantImage: '/images/farming/yew_tree_plant.png',
            tags: ['seed', 'farming'],
        },
        175: {
            id: 175,
            name: 'Banana Tree Seed',
            level: 20,
            value: 5,
            experience: 25,
            farmingExperience: 2250,
            time: 150,
            tradeable: true,
            seedHeight: 2,
            seedWidth: 2,
            yield: [
                { chance: 1, id: 2028, min: 10, max: 20 },
                { chance: 1 / 250, id: 185, min: 1, max: 1 },
            ],
            class: 'seed',



            itemImage: '/images/farming/banana_tree_seed.png',
            plantImage: '/images/farming/banana_tree_plant.png',
            tags: ['seed', 'farming'],
        },
        176: {
            id: 176,
            name: 'Apple Tree Seed',
            level: 20,
            value: 5,
            experience: 25,
            farmingExperience: 2250,
            time: 150,
            tradeable: true,
            seedHeight: 2,
            seedWidth: 2,
            yield: [
                { chance: 1, id: 2026, min: 10, max: 20 },
                { chance: 1, id: 301, min: 2, max: 20 },
                { chance: 1, id: 302, min: 20, max: 40 },
                { chance: 1 / 250, id: 185, min: 1, max: 1 },
            ],
            class: 'seed',



            itemImage: '/images/farming/apple_tree_seed.png',
            plantImage: '/images/farming/apple_tree_plant.png',
            tags: ['seed', 'farming'],
        },
        177: {
            id: 177,
            name: 'Elder Tree Seed',
            level: 50,
            value: 100,
            experience: 50,
            farmingExperience: 20000,
            time: 240,
            tradeable: true,
            seedHeight: 4,
            seedWidth: 4,
            yield: [
                { chance: 1 / 6, id: 301, min: 20, max: 40 },
                { chance: 1 / 6, id: 302, min: 40, max: 80 },
                { chance: 1 / 6, id: 303, min: 40, max: 80 },
                { chance: 1 / 6, id: 304, min: 40, max: 80 },
                { chance: 1 / 6, id: 305, min: 40, max: 80 },
                { chance: 1 / 6, id: 306, min: 40, max: 80 },
                { chance: 1, id: 307, min: 50, max: 100 },
                { chance: 1 / 100, id: 185, min: 1, max: 1 },
            ],
            class: 'seed',



            itemImage: '/images/farming/elder_tree_seed.png',
            extraTooltipInfo: 'Every type of forest can be traced back to one of these trees.',
            plantImage: '/images/farming/elder_tree_plant.png',
            tags: ['seed', 'farming'],
            rarity: 'uncommon',
        },
        180: {
            id: 180,
            name: 'Sageberry Bush Seed',
            level: 25,
            value: 5,
            experience: 25,
            farmingExperience: 450,
            time: 60,
            tradeable: true,
            seedHeight: 1,
            seedWidth: 2,
            yield: [
                { chance: 1, id: 2031, min: 1, max: 4 },
                { chance: 1 / 300, id: 185, min: 1, max: 1 },
            ],
            class: 'seed',



            itemImage: '/images/farming/sageberry_seed.png',
            extraTooltipInfo: 'It may be wise to plant this.',
            plantImage: '/images/farming/sageberry_bush.png',
            tags: ['seed', 'farming'],
        },
        185: {
            id: 185,
            name: 'Mysterious Seed',
            level: 1,
            value: 7,
            experience: 50,
            farmingExperience: 800,
            time: 60,
            tradeable: true,
            seedHeight: 1,
            seedWidth: 1,
            seedMaxHeight: 4,
            seedMaxWidth: 4,
            yield: [
                { chance: 1 / 20, id: 185, min: 1, max: 1 },
                { chance: 1 / 15, id: 11019, min: 3, max: 9 },
                { chance: 0.1, id: 150, min: 1, max: 10 },
                { chance: 0.2, id: 109, min: 2, max: 25 },
                { chance: 1 / 50, id: 900, min: 1, max: 1 },
                { chance: 1 / 25, id: 108, min: 2, max: 25 },
                { chance: 1 / 25, id: 110, min: 2, max: 25 },
                { chance: 0.1, id: 101, min: 10, max: 50 },
                { chance: 0.1, id: 102, min: 10, max: 50 },
                { chance: 1 / 15, id: 103, min: 10, max: 50 },
                { chance: 1 / 20, id: 104, min: 10, max: 50 },
                { chance: 1 / 25, id: 111, min: 10, max: 50 },
                { chance: 1 / 30, id: 105, min: 10, max: 50 },
                { chance: 1 / 35, id: 106, min: 10, max: 50 },
                { chance: 1 / 40, id: 107, min: 10, max: 50 },
                { chance: 1 / 60, id: 114, min: 1, max: 10 },
                { chance: 1 / 15, id: 113, min: 10, max: 50 },
                { chance: 0.1, id: 112, min: 10, max: 50 },
                { chance: 1 / 50, id: 400, min: 1, max: 3 },
                { chance: 1 / 75, id: 401, min: 1, max: 2 },
                { chance: 1 / 100, id: 402, min: 1, max: 1 },
                { chance: 1 / 125, id: 403, min: 1, max: 1 },
                { chance: 1 / 150, id: 404, min: 1, max: 1 },
                { id: 151, chance: 1 / 3, min: 1, max: 30 },
                { id: 152, chance: 1 / 3, min: 1, max: 30 },
                { id: 153, chance: 1 / 3, min: 1, max: 30 },
                { id: 154, chance: 1 / 4, min: 1, max: 30 },
                { id: 155, chance: 1 / 4, min: 1, max: 30 },
                { id: 156, chance: 1 / 4, min: 1, max: 30 },
                { id: 157, chance: 0.2, min: 1, max: 30 },
                { id: 158, chance: 0.2, min: 1, max: 30 },
                { id: 159, chance: 0.2, min: 1, max: 30 },
                { id: 160, chance: 1 / 6, min: 1, max: 30 },
                { id: 161, chance: 1 / 6, min: 1, max: 30 },
                { id: 170, chance: 1 / 25, min: 1, max: 5 },
                { id: 171, chance: 1 / 25, min: 1, max: 5 },
                { id: 172, chance: 1 / 25, min: 1, max: 5 },
                { id: 173, chance: 1 / 25, min: 1, max: 5 },
                { id: 174, chance: 1 / 25, min: 1, max: 5 },
                { id: 175, chance: 1 / 25, min: 1, max: 5 },
                { id: 176, chance: 1 / 25, min: 1, max: 5 },
                { id: 901, chance: 1 / 20, min: 1, max: 1 },
                { chance: 1 / 20, id: 201, min: 5, max: 25 },
                { chance: 1 / 30, id: 202, min: 5, max: 25 },
                { chance: 1 / 40, id: 203, min: 5, max: 25 },
                { chance: 1 / 60, id: 204, min: 5, max: 25 },
                { chance: 1 / 70, id: 205, min: 5, max: 25 },
                { chance: 1 / 80, id: 206, min: 5, max: 25 },
                { chance: 1 / 120, id: 207, min: 1, max: 10 },
            ],
            class: 'seed',
            craftingLevel: 70,
            craftingExperience: 6000,



            craftingDescription:
                'The blessing of life steeped in the ooze of corruption. This will have a random size when created.',
            itemImage: '/images/farming/mysterious_seed.png',
            extraTooltipInfo: 'Life is not necessarily the opposite of corruption. I wonder what this could grow into?',
            category: 'Rare',
            plantImage: '/images/farming/mysterious_plant.png',
            tags: ['seed', 'farming', 'crafting'],
            requiredResources: [{ 180: 1, 800: 100 }],
            rarity: 'rare',
        },
        201: {
            id: 201,
            name: 'Bronze Bar',
            skill: 'smithing',
            level: 1,
            value: 25,
            tradeable: true,
            experience: 10,
            time: 6000,
            itemImage: '/images/smithing/bronze_bar.png',
            class: 'bar',
            extraTooltipInfo: 'Used as a crafting material.',
            tags: ['mining', 'smithing'],
            skillIcon: '/images/smithing/smithing_icon.png',
            requiredResources: [{ 2: 1, 101: 1, 102: 1 }],
        },
        202: {
            id: 202,
            name: 'Iron Bar',
            skill: 'smithing',
            level: 10,
            value: 250,
            tradeable: true,
            experience: 100,
            time: 12000,
            itemImage: '/images/smithing/iron_bar.png',
            class: 'bar',
            extraTooltipInfo: 'May be used to craft iron equipment or to augment obsidian gear.',
            tags: ['mining', 'smithing'],
            skillIcon: '/images/smithing/smithing_icon.png',
            requiredResources: [{ 2: 5, 103: 3 }],
        },
        203: {
            id: 203,
            name: 'Gold Bar',
            skill: 'smithing',
            level: 25,
            value: 1000,
            tradeable: true,
            experience: 100,
            time: 20000,
            itemImage: '/images/smithing/gold_bar.png',
            class: 'bar',
            extraTooltipInfo:
                "May be used to craft or augment jewelry. Sadly you aren't authorized to create your own currency.",
            tags: ['mining', 'smithing'],
            skillIcon: '/images/smithing/smithing_icon.png',
            requiredResources: [{ 2: 20, 104: 10 }],
        },
        204: {
            id: 204,
            name: 'Mithril Bar',
            skill: 'smithing',
            level: 35,
            value: 500,
            tradeable: true,
            experience: 200,
            time: 30000,
            itemImage: '/images/smithing/mithril_bar.png',
            class: 'bar',
            extraTooltipInfo: 'May be used to craft mithril equipment or to augment obsidian gear.',
            tags: ['mining', 'smithing'],
            skillIcon: '/images/smithing/smithing_icon.png',
            requiredResources: [{ 2: 50, 105: 5 }],
        },
        205: {
            id: 205,
            name: 'Adamantite Bar',
            skill: 'smithing',
            level: 50,
            value: 2000,
            tradeable: true,
            experience: 300,
            time: 44000,
            itemImage: '/images/smithing/adamantite_bar.png',
            class: 'bar',
            extraTooltipInfo: 'A rather limited, yet hard, metal. May only be used to create Adamantite gear.',
            tags: ['mining', 'smithing'],
            skillIcon: '/images/smithing/smithing_icon.png',
            requiredResources: [{ 2: 100, 106: 10 }],
            rarity: 'uncommon',
        },
        206: {
            id: 206,
            name: 'Runite Bar',
            skill: 'smithing',
            level: 65,
            value: 7000,
            tradeable: true,
            experience: 1000,
            time: 90000,
            itemImage: '/images/smithing/runite_bar.png',
            class: 'bar',
            extraTooltipInfo: 'One of the toughest natural metals. May be used to craft Runite equipment.',
            tags: ['mining', 'smithing'],
            skillIcon: '/images/smithing/smithing_icon.png',
            requiredResources: [{ 2: 200, 107: 15 }],
            rarity: 'rare',
        },
        207: {
            id: 207,
            name: 'Stygian Bar',
            skill: 'smithing',
            level: 70,
            value: 9000,
            tradeable: true,
            experience: 1500,
            time: 106000,
            itemImage: '/images/smithing/stygian_bar.png',
            class: 'bar',
            extraTooltipInfo:
                'An unnaturally tough metal that is almost crystalline in nature. May be used to craft Stygian equipment.',
            tags: ['mining', 'smithing'],
            skillIcon: '/images/smithing/smithing_icon.png',
            requiredResources: [{ 2: 500, 114: 25, 800: 10 }],
            rarity: 'rare',
        },
        208: {
            id: 208,
            name: 'Chaotic Crystal',
            skill: 'smithing',
            level: 75,
            value: 15000,
            tradeable: true,
            experience: 2000,
            time: 132000,
            itemImage: '/images/mining/void_crystal.png',
            class: 'bar',
            extraTooltipInfo:
                'A condensed crystal formed through processing a large amount of void stones. May be used to craft or enhance unique equipment.',
            tags: ['mining', 'smithing'],
            skillIcon: '/images/smithing/smithing_icon.png',
            requiredResources: [{ 2: 500, 115: 40 }],
            rarity: 'rare',
        },
        209: {
            id: 209,
            name: 'Obsidian Glass',
            value: 300,
            tradeable: true,
            itemImage: '/images/combat/materials/obsidian_glass.png',
            extraTooltipInfo: 'A splinter of mildly reflective obsidian glass.',
            class: 'bar',
            tags: ['mining', 'smithing'],
        },
        301: {
            id: 301,
            name: 'Branch',
            level: 1,
            value: 1,
            tradeable: true,
            heat: 1,
            experience: 1,
            time: 2000,



            itemImage: '/images/foraging/branch.png',
            class: 'log',
            extraTooltipInfo: 'Used as a crafting material or turned into heat.',
            tags: ['foraging'],
        },
        302: {
            id: 302,
            name: 'Log',
            level: 5,
            value: 3,
            tradeable: true,
            heat: 5,
            experience: 20,
            craftingExperience: 12,
            time: 5000,
            craftingLevel: 1,



            itemImage: '/images/foraging/log.png',
            craftingDescription: 'Combine your branches to craft one log',
            class: 'log',
            extraTooltipInfo: 'Used as a crafting material or turned into heat.',
            category: 'General',
            tags: ['foraging', 'crafting'],
            requiredResources: [{ 301: 20 }],
        },
        303: {
            id: 303,
            name: 'Oak Log',
            level: 10,
            value: 10,
            tradeable: true,
            heat: 10,
            experience: 40,
            time: 10000,



            itemImage: '/images/foraging/oak_log.png',
            class: 'log',
            extraTooltipInfo: 'Used as a crafting material or turned into heat.',
            tags: ['foraging'],
        },
        304: {
            id: 304,
            name: 'Willow Log',
            level: 30,
            value: 20,
            tradeable: true,
            heat: 20,
            experience: 60,
            time: 15000,



            itemImage: '/images/foraging/willow_log.png',
            class: 'log',
            extraTooltipInfo: 'Used as a crafting material or turned into heat.',
            tags: ['foraging'],
        },
        305: {
            id: 305,
            name: 'Maple Log',
            level: 45,
            value: 40,
            tradeable: true,
            heat: 70,
            experience: 80,
            time: 25000,



            itemImage: '/images/foraging/maple_log.png',
            class: 'log',
            extraTooltipInfo: 'Used as a crafting material or turned into heat.',
            tags: ['foraging'],
        },
        306: {
            id: 306,
            name: 'Yew Log',
            level: 60,
            value: 100,
            tradeable: true,
            heat: 200,
            experience: 100,
            time: 60000,



            itemImage: '/images/foraging/yew_log.png',
            class: 'log',
            extraTooltipInfo: 'Used as a crafting material or turned into heat.',
            tags: ['foraging'],
            rarity: 'rare',
        },
        307: {
            id: 307,
            name: 'Elder Log',
            level: 70,
            value: 250,
            tradeable: true,
            heat: 350,
            experience: 150,
            time: 60000,



            itemImage: '/images/foraging/elder_log.png',
            class: 'log',
            extraTooltipInfo: 'Used as a crafting material or turned into heat.',
            tags: ['foraging'],
            rarity: 'rare',
        },
        400: {
            id: 400,
            name: 'Sapphire',
            value: 1000,
            tradeable: true,



            itemImage: '/images/mining/sapphire.png',
            class: 'gem',
            extraTooltipInfo: 'An inexpensive blue gem that may be used for crafting.',
            tags: [],
        },
        401: {
            id: 401,
            name: 'Emerald',
            value: 2000,
            tradeable: true,



            itemImage: '/images/mining/emerald.png',
            class: 'gem',
            extraTooltipInfo: 'An inexpensive green gem that may be used for crafting.',
            tags: [],
        },
        402: {
            id: 402,
            name: 'Ruby',
            value: 5000,
            tradeable: true,



            itemImage: '/images/mining/ruby.png',
            class: 'gem',
            extraTooltipInfo: 'An uncommon red gem that may be used for crafting.',
            tags: [],
        },
        403: {
            id: 403,
            name: 'Diamond',
            value: 10000,
            tradeable: true,



            itemImage: '/images/mining/diamond.png',
            class: 'gem',
            extraTooltipInfo: 'An uncommon gem that may be used for crafting.',
            tags: [],
        },
        404: {
            id: 404,
            name: 'Black Opal',
            value: 50000,
            tradeable: true,



            itemImage: '/images/mining/black_opal.png',
            class: 'gem',
            extraTooltipInfo:
                'A rare black gem that may be used for crafting. It is said that you can see the whole universe inside of one of these.',
            tags: [],
            rarity: 'uncommon',
        },
        500: {
            id: 500,
            name: 'Air Talisman',
            talisman: true,
            tradeable: true,
            value: 20000,
            craftingExperience: 1000,
            craftingLevel: 50,
            requiredResources: [{ 520: 1, 3: 50000 }],
            category: 'Skilling',



            itemImage: '/images/runecrafting/air_talisman.png',
            extraTooltipInfo: 'A magical talisman that can be consumed to strengthen your link to air magic.',
            class: 'rune',
            tags: ['magic', 'runecrafting'],
            rarity: 'uncommon',
        },
        501: {
            id: 501,
            name: 'Earth Talisman',
            talisman: true,
            tradeable: true,
            value: 20000,
            craftingExperience: 1000,
            craftingLevel: 50,
            requiredResources: [{ 520: 1, 4: 50000 }],
            category: 'Skilling',



            itemImage: '/images/runecrafting/earth_talisman.png',
            extraTooltipInfo: 'A magical talisman that can be consumed to strengthen your link to earth magic.',
            class: 'rune',
            tags: ['magic', 'runecrafting'],
            rarity: 'uncommon',
        },
        502: {
            id: 502,
            name: 'Fire Talisman',
            talisman: true,
            tradeable: true,
            value: 20000,
            craftingExperience: 1000,
            craftingLevel: 50,
            requiredResources: [{ 520: 1, 5: 50000 }],
            category: 'Skilling',



            itemImage: '/images/runecrafting/fire_talisman.png',
            extraTooltipInfo: 'A magical talisman that can be consumed to strengthen your link to fire magic.',
            class: 'rune',
            tags: ['magic', 'runecrafting'],
            rarity: 'uncommon',
        },
        503: {
            id: 503,
            name: 'Water Talisman',
            talisman: true,
            tradeable: true,
            value: 20000,
            craftingExperience: 1000,
            craftingLevel: 50,
            requiredResources: [{ 520: 1, 6: 50000 }],
            category: 'Skilling',



            itemImage: '/images/runecrafting/water_talisman.png',
            extraTooltipInfo: 'A magical talisman that can be consumed to strengthen your link to water magic.',
            class: 'rune',
            tags: ['magic', 'runecrafting'],
            rarity: 'uncommon',
        },
        504: {
            id: 504,
            name: 'Blood Talisman',
            talisman: true,
            tradeable: true,
            value: 20000,
            craftingExperience: 1000,
            craftingLevel: 50,
            requiredResources: [{ 520: 1, 7: 50000 }],
            category: 'Skilling',



            itemImage: '/images/runecrafting/blood_talisman.png',
            extraTooltipInfo: 'A magical talisman that can be consumed to strengthen your link to blood magic.',
            class: 'rune',
            tags: ['magic', 'runecrafting'],
            rarity: 'uncommon',
        },
        505: {
            id: 505,
            name: 'Death Talisman',
            talisman: true,
            tradeable: true,
            value: 20000,
            craftingExperience: 1000,
            craftingLevel: 50,
            requiredResources: [{ 520: 1, 8: 50000 }],
            category: 'Skilling',



            itemImage: '/images/runecrafting/death_talisman.png',
            extraTooltipInfo: 'A magical talisman that can be consumed to strengthen your link to death magic.',
            class: 'rune',
            tags: ['magic', 'runecrafting'],
            rarity: 'uncommon',
        },
        506: {
            id: 506,
            name: 'Chaos Talisman',
            talisman: true,
            tradeable: true,
            value: 20000,
            craftingExperience: 1000,
            craftingLevel: 50,
            requiredResources: [{ 520: 1, 9: 50000 }],
            category: 'Skilling',



            itemImage: '/images/runecrafting/chaos_talisman.png',
            extraTooltipInfo: 'A magical talisman that can be consumed to strengthen your link to chaos magic.',
            class: 'rune',
            tags: ['magic', 'runecrafting'],
            rarity: 'uncommon',
        },
        507: {
            id: 507,
            name: 'Nature Talisman',
            talisman: true,
            tradeable: true,
            value: 20000,
            craftingExperience: 1000,
            craftingLevel: 50,
            requiredResources: [{ 520: 1, 10: 50000 }],
            category: 'Skilling',



            itemImage: '/images/runecrafting/nature_talisman.png',
            extraTooltipInfo: 'A magical talisman that can be consumed to strengthen your link to nature magic.',
            class: 'rune',
            tags: ['magic', 'runecrafting'],
            rarity: 'uncommon',
        },
        508: {
            id: 508,
            name: 'Mind Talisman',
            talisman: true,
            tradeable: true,
            value: 20000,
            craftingExperience: 1000,
            craftingLevel: 50,
            requiredResources: [{ 520: 1, 11: 50000 }],
            category: 'Skilling',



            itemImage: '/images/runecrafting/mind_talisman.png',
            extraTooltipInfo: 'A magical talisman that can be consumed to strengthen your link to mind magic.',
            class: 'rune',
            tags: ['magic', 'runecrafting'],
            rarity: 'uncommon',
        },
        509: {
            id: 509,
            name: 'Cosmic Talisman',
            talisman: true,
            tradeable: true,
            value: 20000,
            craftingExperience: 1000,
            craftingLevel: 50,
            requiredResources: [{ 520: 1, 12: 50000 }],
            category: 'Skilling',



            itemImage: '/images/runecrafting/cosmic_talisman.png',
            extraTooltipInfo: 'A magical talisman that can be consumed to strengthen your link to cosmic magic.',
            class: 'rune',
            tags: ['magic', 'runecrafting'],
            rarity: 'uncommon',
        },
        510: {
            name: 'Air Rune',
            id: 510,
            value: 10,
            tradeable: true,
            time: 5000,



            itemImage: '/images/runecrafting/air_rune.png',
            extraTooltipInfo: 'A slate imbued with magic essence. Often needed to perform magic.',
            class: 'rune',
            tags: ['ammunition', 'magic', 'runecrafting'],
            requiredResources: [{ 3: 400, 113: 1 }],
        },
        511: {
            name: 'Earth Rune',
            id: 511,
            value: 10,
            tradeable: true,
            time: 5000,



            itemImage: '/images/runecrafting/earth_rune.png',
            extraTooltipInfo: 'A slate imbued with magic essence. Often needed to perform magic.',
            class: 'rune',
            tags: ['ammunition', 'magic', 'runecrafting'],
            requiredResources: [{ 4: 400, 113: 1 }],
        },
        512: {
            name: 'Fire Rune',
            id: 512,
            value: 10,
            tradeable: true,
            time: 5000,



            itemImage: '/images/runecrafting/fire_rune.png',
            extraTooltipInfo: 'A slate imbued with magic essence. Often needed to perform magic.',
            class: 'rune',
            tags: ['ammunition', 'magic', 'runecrafting'],
            requiredResources: [{ 5: 400, 113: 1 }],
        },
        513: {
            name: 'Water Rune',
            id: 513,
            value: 10,
            tradeable: true,
            time: 5000,



            itemImage: '/images/runecrafting/water_rune.png',
            extraTooltipInfo: 'A slate imbued with magic essence. Often needed to perform magic.',
            class: 'rune',
            tags: ['ammunition', 'magic', 'runecrafting'],
            requiredResources: [{ 6: 400, 113: 1 }],
        },
        514: {
            name: 'Blood Rune',
            id: 514,
            value: 10,
            tradeable: true,
            time: 5000,



            itemImage: '/images/runecrafting/blood_rune.png',
            extraTooltipInfo: 'A slate imbued with magic essence. Often needed to perform magic.',
            class: 'rune',
            tags: ['ammunition', 'magic', 'runecrafting'],
            requiredResources: [{ 7: 400, 113: 1 }],
        },
        515: {
            name: 'Death Rune',
            id: 515,
            value: 10,
            tradeable: true,
            time: 5000,



            itemImage: '/images/runecrafting/death_rune.png',
            extraTooltipInfo: 'A slate imbued with magic essence. Often needed to perform magic.',
            class: 'rune',
            tags: ['ammunition', 'magic', 'runecrafting'],
            requiredResources: [{ 8: 400, 113: 1 }],
        },
        516: {
            name: 'Chaos Rune',
            id: 516,
            value: 10,
            tradeable: true,
            time: 5000,



            itemImage: '/images/runecrafting/chaos_rune.png',
            extraTooltipInfo: 'A slate imbued with magic essence. Often needed to perform magic.',
            class: 'rune',
            tags: ['ammunition', 'magic', 'runecrafting'],
            requiredResources: [{ 9: 400, 113: 1 }],
        },
        517: {
            name: 'Nature Rune',
            id: 517,
            value: 10,
            tradeable: true,
            time: 5000,



            itemImage: '/images/runecrafting/nature_rune.png',
            extraTooltipInfo: 'A slate imbued with magic essence. Often needed to perform magic.',
            class: 'rune',
            tags: ['ammunition', 'magic', 'runecrafting'],
            requiredResources: [{ 10: 400, 113: 1 }],
        },
        518: {
            name: 'Mind Rune',
            activeMessage: 'Crafting mind runes',
            id: 518,
            value: 10,
            tradeable: true,
            time: 5000,



            itemImage: '/images/runecrafting/mind_rune.png',
            extraTooltipInfo: 'A slate imbued with magic essence. Often needed to perform magic.',
            class: 'rune',
            actionButton: 'Craft',
            tags: ['ammunition', 'magic', 'runecrafting'],
            requiredResources: [{ 11: 400, 113: 1 }],
        },
        519: {
            name: 'Cosmic Rune',
            id: 519,
            value: 10,
            tradeable: true,
            time: 5000,



            itemImage: '/images/runecrafting/cosmic_rune.png',
            extraTooltipInfo: 'A slate imbued with magic essence. Often needed to perform magic.',
            class: 'rune',
            tags: ['ammunition', 'magic', 'runecrafting'],
            requiredResources: [{ 12: 400, 113: 1 }],
        },
        520: {
            id: 520,
            name: 'Unstable Talisman',
            value: 25000,



            itemImage: '/images/runecrafting/unstable_talisman.png',
            extraTooltipInfo:
                'An unstable talisman that is brimming with potential. Requires essence in order to condense it into a normal talisman, though some essence may be lost in the conversion process.',
            class: 'rune',
            tags: ['magic', 'runecrafting'],
            rarity: 'uncommon',
        },
        600: {
            id: 600,
            name: 'Bronze Pickaxe',
            value: 800,
            tradeable: true,
            enchantmentTier: 1,
            augmentationCost: { 201: 4, 302: 2 },
            craftingExperience: 156,
            craftingLevel: 2,
            requiredLevel: { mining: 1 },



            itemImage: '/images/mining/bronze_pickaxe.png',
            tool: true,
            class: 'equipment',
            craftingDescription: 'Adds 10 to your effective mining level when determining speed.',
            extraTooltipInfo: 'Adds 10 to your effective mining level when determining speed.',
            category: 'Mining',
            enchantable: true,
            tags: ['tool', 'crafting'],
            equipmentStats: {
                slot: 'pickaxe',
                toolBoost: [{ skill: 'mining', boost: 10 }],
                augmentationBonus: [{ stat: 'toolBoost.mining', value: 0.5 }],
            },
            requiredResources: [{ 201: 40, 302: 20 }],
        },
        601: {
            id: 601,
            name: 'Iron Pickaxe',
            value: 6000,
            tradeable: true,
            enchantmentTier: 2,
            augmentationCost: { 202: 8, 303: 4 },
            craftingExperience: 252,
            craftingLevel: 7,
            requiredLevel: { mining: 10 },



            itemImage: '/images/mining/iron_pickaxe.svg',
            tool: true,
            class: 'equipment',
            craftingDescription: 'Adds 20 to your mining level when determining speed.',
            extraTooltipInfo: 'Adds 20 to your mining level when determining speed.',
            category: 'Mining',
            enchantable: true,
            tags: ['tool', 'crafting'],
            equipmentStats: {
                slot: 'pickaxe',
                toolBoost: [{ skill: 'mining', boost: 20 }],
                augmentationBonus: [{ stat: 'toolBoost.mining', value: 1 }],
            },
            requiredResources: [{ 202: 75, 303: 35 }],
        },
        602: {
            id: 602,
            name: 'Mithril Pickaxe',
            value: 52000,
            tradeable: true,
            enchantmentTier: 3,
            augmentationCost: { 204: 13, 304: 7 },
            craftingExperience: 2798,
            craftingLevel: 25,
            requiredLevel: { mining: 30 },



            itemImage: '/images/mining/mithril_pickaxe.png',
            tool: true,
            class: 'equipment',
            craftingDescription: 'Adds 30 to your mining level when determining speed.',
            extraTooltipInfo: 'Adds 30 to your mining level when determining speed.',
            category: 'Mining',
            enchantable: true,
            tags: ['tool', 'crafting'],
            equipmentStats: {
                slot: 'pickaxe',
                toolBoost: [{ skill: 'mining', boost: 30 }],
                augmentationBonus: [{ stat: 'toolBoost.mining', value: 1.5 }],
            },
            requiredResources: [{ 204: 130, 304: 65 }],
        },
        603: {
            id: 603,
            name: 'Adamantite Pickaxe',
            value: 480000,
            tradeable: true,
            enchantmentTier: 4,
            augmentationCost: { 205: 20, 305: 10 },
            craftingExperience: 8296,
            craftingLevel: 41,
            requiredLevel: { mining: 40 },



            itemImage: '/images/mining/adamantite_pickaxe.png',
            tool: true,
            class: 'equipment',
            craftingDescription: 'Adds 40 to your mining level when determining speed.',
            extraTooltipInfo: 'Adds 40 to your mining level when determining speed.',
            category: 'Mining',
            enchantable: true,
            tags: ['tool', 'crafting'],
            equipmentStats: {
                slot: 'pickaxe',
                toolBoost: [{ skill: 'mining', boost: 40 }],
                augmentationBonus: [{ stat: 'toolBoost.mining', value: 2 }],
            },
            requiredResources: [{ 205: 200, 305: 100 }],
            rarity: 'uncommon',
        },
        604: {
            id: 604,
            name: 'Runite Pickaxe',
            value: 1944000,
            tradeable: true,
            enchantmentTier: 5,
            augmentationCost: { 206: 27, 306: 14 },
            craftingExperience: 19491,
            craftingLevel: 51,
            requiredLevel: { mining: 50 },



            itemImage: '/images/mining/rune_pickaxe.png',
            tool: true,
            class: 'equipment',
            craftingDescription: 'Adds 50 to your mining level when determining speed.',
            extraTooltipInfo: 'Adds 50 to your mining level when determining speed.',
            category: 'Mining',
            enchantable: true,
            tags: ['tool', 'crafting'],
            equipmentStats: {
                slot: 'pickaxe',
                toolBoost: [{ skill: 'mining', boost: 50 }],
                augmentationBonus: [{ stat: 'toolBoost.mining', value: 2.5 }],
            },
            requiredResources: [{ 206: 270, 306: 135 }],
            rarity: 'uncommon',
        },
        605: {
            id: 605,
            name: 'Stygian Pickaxe',
            value: 3360000,
            tradeable: true,
            enchantmentTier: 6,
            augmentationCost: { 207: 35, 800: 20 },
            craftingExperience: 56280,
            craftingLevel: 67,
            requiredLevel: { mining: 60 },



            itemImage: '/images/mining/stygian_pickaxe.png',
            tool: true,
            class: 'equipment',
            craftingDescription: 'Adds 60 to your mining level when determining speed.',
            extraTooltipInfo: 'Adds 60 to your mining level when determining speed.',
            category: 'Mining',
            enchantable: true,
            tags: ['tool', 'crafting'],
            equipmentStats: {
                slot: 'pickaxe',
                toolBoost: [{ skill: 'mining', boost: 60 }],
                augmentationBonus: [{ stat: 'toolBoost.mining', value: 3 }],
            },
            requiredResources: [{ 207: 350, 800: 175 }],
            rarity: 'rare',
        },
        606: {
            id: 606,
            name: 'Dwarven Rocksmasher',
            value: 15000000,
            tradeable: false,
            enchantmentTier: 8,
            augmentationCost: { 207: 350, 208: 200, 11037: 3, 11038: 3, 11039: 3 },
            craftingExperience: 256000,
            craftingLevel: 90,
            requiredLevel: { mining: 80 },
            forcedAugmentChance: 1,



            itemImage: '/images/mining/dwarven_pickaxe.png',
            tool: true,
            class: 'equipment',
            craftingDescription: 'A legendary mining tool using lost dwarven technology.',
            extraTooltipInfo: 'A legendary mining tool using lost dwarven technology.',
            category: 'Mining',
            enchantable: true,
            tags: ['tool', 'crafting'],
            equipmentStats: {
                slot: 'pickaxe',
                toolBoost: [{ skill: 'mining', boost: 60 }],
                augmentationBonus: [{ stat: 'toolBoost.mining', value: 5 }],
                itemSet: [10007, 10008],
            },
            requiredResources: [{ 207: 200, 208: 100, 11037: 1, 11038: 1, 11039: 1 }],
            rarity: 'legendary',
        },
        610: {
            id: 610,
            name: 'Bronze Hatchet',
            value: 800,
            tradeable: true,
            enchantmentTier: 1,
            augmentationCost: { 201: 4, 302: 2 },
            craftingExperience: 156,
            craftingLevel: 2,
            requiredLevel: { foraging: 1 },



            itemImage: '/images/foraging/bronze_hatchet.png',
            tool: true,
            class: 'equipment',
            craftingDescription: 'Adds 10 to your effective foraging level when determining speed.',
            extraTooltipInfo: 'Adds 10 to your effective foraging level when determining speed.',
            category: 'Foraging',
            enchantable: true,
            tags: ['tool', 'crafting'],
            equipmentStats: {
                slot: 'hatchet',
                toolBoost: [{ skill: 'foraging', boost: 10 }],
                augmentationBonus: [{ stat: 'toolBoost.foraging', value: 0.5 }],
            },
            requiredResources: [{ 201: 40, 302: 20 }],
        },
        611: {
            id: 611,
            name: 'Iron Hatchet',
            value: 6000,
            tradeable: true,
            enchantmentTier: 2,
            augmentationCost: { 202: 8, 303: 4 },
            craftingExperience: 252,
            craftingLevel: 7,
            requiredLevel: { foraging: 10 },



            itemImage: '/images/foraging/iron_hatchet.png',
            tool: true,
            class: 'equipment',
            craftingDescription: 'Adds 20 to your foraging level when determining speed.',
            extraTooltipInfo: 'Adds 20 to your foraging level when determining speed.',
            category: 'Foraging',
            enchantable: true,
            tags: ['tool', 'crafting'],
            equipmentStats: {
                slot: 'hatchet',
                toolBoost: [{ skill: 'foraging', boost: 20 }],
                augmentationBonus: [{ stat: 'toolBoost.foraging', value: 1 }],
            },
            requiredResources: [{ 202: 75, 303: 35 }],
        },
        612: {
            id: 612,
            name: 'Mithril Hatchet',
            value: 52000,
            tradeable: true,
            enchantmentTier: 3,
            augmentationCost: { 204: 13, 304: 7 },
            craftingExperience: 2687,
            craftingLevel: 24,
            requiredLevel: { foraging: 30 },



            itemImage: '/images/foraging/mithril_hatchet.png',
            tool: true,
            class: 'equipment',
            craftingDescription: 'Adds 30 to your foraging level when determining speed.',
            extraTooltipInfo: 'Adds 30 to your foraging level when determining speed.',
            category: 'Foraging',
            enchantable: true,
            tags: ['tool', 'crafting'],
            equipmentStats: {
                slot: 'hatchet',
                toolBoost: [{ skill: 'foraging', boost: 30 }],
                augmentationBonus: [{ stat: 'toolBoost.foraging', value: 1.5 }],
            },
            requiredResources: [{ 204: 130, 304: 65 }],
        },
        613: {
            id: 613,
            name: 'Adamantite Hatchet',
            value: 480000,
            tradeable: true,
            enchantmentTier: 4,
            augmentationCost: { 205: 20, 305: 10 },
            craftingExperience: 8296,
            craftingLevel: 41,
            requiredLevel: { foraging: 40 },



            itemImage: '/images/foraging/adamantite_hatchet.png',
            tool: true,
            class: 'equipment',
            craftingDescription: 'Adds 40 to your foraging level when determining speed.',
            extraTooltipInfo: 'Adds 40 to your foraging level when determining speed.',
            category: 'Foraging',
            enchantable: true,
            tags: ['tool', 'crafting'],
            equipmentStats: {
                slot: 'hatchet',
                toolBoost: [{ skill: 'foraging', boost: 40 }],
                augmentationBonus: [{ stat: 'toolBoost.foraging', value: 2 }],
            },
            requiredResources: [{ 205: 200, 305: 100 }],
            rarity: 'uncommon',
        },
        614: {
            id: 614,
            name: 'Runite Hatchet',
            value: 1944000,
            tradeable: true,
            enchantmentTier: 5,
            augmentationCost: { 206: 27, 306: 14 },
            craftingExperience: 19491,
            craftingLevel: 51,
            requiredLevel: { foraging: 50 },



            itemImage: '/images/foraging/rune_hatchet.png',
            tool: true,
            class: 'equipment',
            craftingDescription: 'Adds 50 to your foraging level when determining speed.',
            extraTooltipInfo: 'Adds 50 to your foraging level when determining speed.',
            category: 'Foraging',
            enchantable: true,
            tags: ['tool', 'crafting'],
            equipmentStats: {
                slot: 'hatchet',
                toolBoost: [{ skill: 'foraging', boost: 50 }],
                augmentationBonus: [{ stat: 'toolBoost.foraging', value: 2.5 }],
            },
            requiredResources: [{ 206: 270, 306: 135 }],
            rarity: 'uncommon',
        },
        615: {
            id: 615,
            name: 'Stygian Hatchet',
            value: 3360000,
            tradeable: true,
            enchantmentTier: 6,
            augmentationCost: { 207: 35, 800: 20 },
            craftingExperience: 56280,
            craftingLevel: 67,
            requiredLevel: { foraging: 60 },



            itemImage: '/images/foraging/stygian_hatchet.png',
            tool: true,
            class: 'equipment',
            craftingDescription: 'Adds 60 to your foraging level when determining speed.',
            extraTooltipInfo: 'Adds 60 to your foraging level when determining speed.',
            category: 'Foraging',
            enchantable: true,
            tags: ['tool', 'crafting'],
            equipmentStats: {
                slot: 'hatchet',
                toolBoost: [{ skill: 'foraging', boost: 60 }],
                augmentationBonus: [{ stat: 'toolBoost.foraging', value: 3 }],
            },
            requiredResources: [{ 207: 350, 800: 175 }],
            rarity: 'rare',
        },
        616: {
            id: 616,
            name: 'The Grovekeeper',
            value: 15000000,
            tradeable: false,
            enchantmentTier: 8,
            augmentationCost: { 306: 2500, 307: 1000, 11040: 3, 11041: 3, 11042: 3 },
            craftingExperience: 256000,
            craftingLevel: 90,
            requiredLevel: { foraging: 80 },



            itemImage: '/images/foraging/grovekeeper.png',
            tool: true,
            class: 'equipment',
            craftingDescription: 'A legendary foraging tool. It appears to actually be alive.',
            extraTooltipInfo: 'A legendary foraging tool. It appears to actually be alive.',
            category: 'Foraging',
            enchantable: true,
            tags: ['tool', 'crafting'],
            equipmentStats: {
                slot: 'hatchet',
                toolBoost: [{ skill: 'foraging', boost: 60 }],
                augmentationBonus: [{ stat: 'toolBoost.foraging', value: 5 }],
                itemSet: [10005, 10006],
            },
            requiredResources: [{ 306: 1000, 307: 500, 11040: 1, 11041: 1, 11042: 1 }],
            rarity: 'legendary',
        },
        620: {
            id: 620,
            name: 'Sapphire Ring',
            value: 120000,
            tradeable: true,
            enchantmentTier: 1,
            augmentationCost: { 203: 50, 400: 1 },
            craftingExperience: 1920,
            craftingLevel: 5,



            itemImage: '/images/jewellery/sapphire_ring.png',
            class: 'equipment',
            craftingDescription: 'A ring capable of holding weak enchantments.',
            extraTooltipInfo: 'A ring capable of holding weak enchantments.',
            category: 'Gold',
            enchantable: true,
            tags: ['jewelry', 'crafting'],
            equipmentStats: {
                slot: 'ring',
                augmentationBonus: [{ stat: 'offensiveAccuracyAffinityRating.Ice', value: 0.2 }],
            },
            requiredResources: [{ 203: 50, 400: 1, 640: 1 }],
            rarity: 'uncommon',
        },
        621: {
            id: 621,
            name: 'Sapphire Necklace',
            value: 120000,
            tradeable: true,
            enchantmentTier: 1,
            augmentationCost: { 203: 50, 400: 1 },
            craftingExperience: 1920,
            craftingLevel: 5,



            itemImage: '/images/jewellery/sapphire_necklace.png',
            class: 'equipment',
            craftingDescription: 'A necklace capable of holding weak enchantments.',
            extraTooltipInfo: 'A necklace capable of holding weak enchantments.',
            category: 'Gold',
            enchantable: true,
            tags: ['jewelry', 'crafting'],
            equipmentStats: {
                slot: 'necklace',
                augmentationBonus: [{ stat: 'offensiveAccuracyAffinityRating.Ice', value: 0.2 }],
            },
            requiredResources: [{ 203: 50, 400: 1, 641: 1 }],
            rarity: 'uncommon',
        },
        622: {
            id: 622,
            name: 'Emerald Ring',
            value: 140000,
            tradeable: true,
            enchantmentTier: 2,
            augmentationCost: { 203: 50, 401: 1 },
            craftingExperience: 3120,
            craftingLevel: 10,



            itemImage: '/images/jewellery/emerald_ring.png',
            class: 'equipment',
            craftingDescription: 'A ring capable of holding moderate enchantments.',
            extraTooltipInfo: 'A ring capable of holding moderate enchantments.',
            category: 'Gold',
            enchantable: true,
            tags: ['jewelry', 'crafting'],
            equipmentStats: {
                slot: 'ring',
                augmentationBonus: [{ stat: 'offensiveAccuracyAffinityRating.Nature', value: 0.2 }],
            },
            requiredResources: [{ 203: 50, 401: 1, 640: 1 }],
            rarity: 'uncommon',
        },
        623: {
            id: 623,
            name: 'Emerald Necklace',
            value: 140000,
            tradeable: true,
            enchantmentTier: 2,
            augmentationCost: { 203: 50, 401: 1 },
            craftingExperience: 3120,
            craftingLevel: 10,



            itemImage: '/images/jewellery/emerald_necklace.png',
            class: 'equipment',
            craftingDescription: 'A necklace capable of holding moderate enchantments.',
            extraTooltipInfo: 'A necklace capable of holding moderate enchantments.',
            category: 'Gold',
            enchantable: true,
            tags: ['jewelry', 'crafting'],
            equipmentStats: {
                slot: 'necklace',
                augmentationBonus: [{ stat: 'offensiveAccuracyAffinityRating.Nature', value: 0.2 }],
            },
            requiredResources: [{ 203: 50, 401: 1, 641: 1 }],
            rarity: 'uncommon',
        },
        624: {
            id: 624,
            name: 'Ruby Ring',
            value: 200000,
            tradeable: true,
            enchantmentTier: 3,
            augmentationCost: { 203: 50, 402: 1 },
            craftingExperience: 4320,
            craftingLevel: 25,



            itemImage: '/images/jewellery/ruby_ring.png',
            class: 'equipment',
            craftingDescription: 'A ring capable of holding decent enchantments.',
            extraTooltipInfo: 'A ring capable of holding decent enchantments.',
            category: 'Gold',
            enchantable: true,
            tags: ['jewelry', 'crafting'],
            equipmentStats: {
                slot: 'ring',
                augmentationBonus: [{ stat: 'offensiveAccuracyAffinityRating.Fire', value: 0.2 }],
            },
            requiredResources: [{ 203: 50, 402: 1, 640: 1 }],
            rarity: 'uncommon',
        },
        625: {
            id: 625,
            name: 'Ruby Necklace',
            value: 200000,
            tradeable: true,
            enchantmentTier: 3,
            augmentationCost: { 203: 50, 402: 1 },
            craftingExperience: 4320,
            craftingLevel: 25,



            itemImage: '/images/jewellery/ruby_necklace.png',
            class: 'equipment',
            craftingDescription: 'A necklace capable of holding decent enchantments.',
            extraTooltipInfo: 'A necklace capable of holding decent enchantments.',
            category: 'Gold',
            enchantable: true,
            tags: ['jewelry', 'crafting'],
            equipmentStats: {
                slot: 'necklace',
                augmentationBonus: [{ stat: 'offensiveAccuracyAffinityRating.Fire', value: 0.2 }],
            },
            requiredResources: [{ 203: 50, 402: 1, 641: 1 }],
            rarity: 'uncommon',
        },
        626: {
            id: 626,
            name: 'Diamond Ring',
            value: 300000,
            tradeable: true,
            enchantmentTier: 4,
            augmentationCost: { 203: 50, 403: 1 },
            craftingExperience: 5520,
            craftingLevel: 50,



            itemImage: '/images/jewellery/diamond_ring.png',
            class: 'equipment',
            craftingDescription: 'A ring capable of holding strong enchantments.',
            extraTooltipInfo: 'A ring capable of holding strong enchantments.',
            category: 'Gold',
            enchantable: true,
            tags: ['jewelry', 'crafting'],
            equipmentStats: {
                slot: 'ring',
                augmentationBonus: [{ stat: 'offensiveAccuracyAffinityRating.Lightning', value: 0.2 }],
            },
            requiredResources: [{ 203: 50, 403: 1, 640: 1 }],
            rarity: 'uncommon',
        },
        627: {
            id: 627,
            name: 'Diamond Necklace',
            value: 300000,
            tradeable: true,
            enchantmentTier: 4,
            augmentationCost: { 203: 50, 403: 1 },
            craftingExperience: 5520,
            craftingLevel: 50,



            itemImage: '/images/jewellery/diamond_necklace.png',
            class: 'equipment',
            craftingDescription: 'A necklace capable of holding strong enchantments.',
            extraTooltipInfo: 'A necklace capable of holding strong enchantments.',
            category: 'Gold',
            enchantable: true,
            tags: ['jewelry', 'crafting'],
            equipmentStats: {
                slot: 'necklace',
                augmentationBonus: [{ stat: 'offensiveAccuracyAffinityRating.Lightning', value: 0.2 }],
            },
            requiredResources: [{ 203: 50, 403: 1, 641: 1 }],
            rarity: 'uncommon',
        },
        628: {
            id: 628,
            name: 'Prismatic Necklace',
            value: 7500000,
            tradeable: true,
            enchantmentTier: 6,
            augmentationCost: { 203: 100, 400: 1, 401: 1, 402: 1, 403: 1, 404: 1 },
            craftingExperience: 120000,
            craftingLevel: 70,



            itemImage: '/images/jewellery/prismatic_necklace.png',
            extraTooltipInfo: 'A necklace capable of holding extraordinary enchantments.',
            class: 'equipment',
            category: 'Gold',
            enchantable: true,
            tags: ['jewelry', 'crafting'],
            equipmentStats: {
                slot: 'necklace',
                augmentationBonus: [{ stat: 'offensiveAccuracyAffinityRating.Magic', value: 0.2 }],
            },
            requiredResources: [{ 621: 150, 623: 120, 625: 90, 627: 60, 12012: 650 }],
            rarity: 'legendary',
        },
        629: {
            id: 629,
            name: 'Prismatic Ring',
            value: 7500000,
            tradeable: true,
            enchantmentTier: 6,
            augmentationCost: { 203: 500, 400: 1, 401: 1, 402: 1, 403: 1 },
            craftingExperience: 120000,
            craftingLevel: 70,



            itemImage: '/images/jewellery/prismatic_ring.png',
            craftingDescription: 'A ring capable of holding extraordinary enchantments.',
            extraTooltipInfo: 'A ring capable of holding extraordinary enchantments.',
            category: 'Gold',
            class: 'equipment',
            enchantable: true,
            tags: ['jewelry', 'crafting'],
            equipmentStats: {
                slot: 'ring',
                augmentationBonus: [{ stat: 'offensiveAccuracyAffinityRating.Magic', value: 0.2 }],
            },
            requiredResources: [{ 620: 150, 622: 120, 624: 90, 626: 60, 12012: 650 }],
            rarity: 'legendary',
        },
        630: {
            id: 630,
            name: 'Black Opal Ring',
            value: 1500000,
            tradeable: true,
            enchantmentTier: 5,
            augmentationCost: { 203: 50, 404: 1 },
            craftingExperience: 6720,
            craftingLevel: 60,



            itemImage: '/images/jewellery/black_opal_ring.png',
            class: 'equipment',
            craftingDescription: 'A ring capable of holding powerful enchantments.',
            extraTooltipInfo: 'A ring capable of holding powerful enchantments.',
            category: 'Gold',
            enchantable: true,
            tags: ['jewelry', 'crafting'],
            equipmentStats: {
                slot: 'ring',
                augmentationBonus: [{ stat: 'offensiveAccuracyAffinityRating.Chaos', value: 0.2 }],
            },
            requiredResources: [{ 203: 50, 404: 1, 640: 1 }],
            augmentingFailItem: 12012,
            rarity: 'rare',
        },
        631: {
            id: 631,
            name: 'Black Opal Necklace',
            value: 1500000,
            tradeable: true,
            enchantmentTier: 5,
            augmentationCost: { 203: 50, 404: 1 },
            craftingExperience: 6720,
            craftingLevel: 60,



            itemImage: '/images/jewellery/black_opal_necklace.png',
            class: 'equipment',
            craftingDescription: 'A necklace capable of holding powerful enchantments.',
            extraTooltipInfo: 'A necklace capable of holding powerful enchantments.',
            category: 'Gold',
            enchantable: true,
            tags: ['jewelry', 'crafting'],
            equipmentStats: {
                slot: 'necklace',
                augmentationBonus: [{ stat: 'offensiveAccuracyAffinityRating.Chaos', value: 0.2 }],
            },
            requiredResources: [{ 203: 50, 404: 1, 641: 1 }],
            augmentingFailItem: 12012,
            rarity: 'rare',
        },
        640: {
            id: 640,
            name: 'Gold Ring',
            value: 100000,
            tradeable: true,
            enchantmentTier: 0,
            craftingExperience: 1200,
            craftingLevel: 1,



            itemImage: '/images/jewellery/gold_ring.png',
            class: 'equipment',
            craftingDescription: 'An ordinary ring with no special properties.',
            category: 'Gold',
            tags: ['jewelry', 'crafting'],
            equipmentStats: { slot: 'ring' },
            requiredResources: [{ 203: 100 }],
            rarity: 'uncommon',
        },
        641: {
            id: 641,
            name: 'Gold Necklace',
            value: 100000,
            tradeable: true,
            enchantmentTier: 0,
            craftingExperience: 1200,
            craftingLevel: 1,



            itemImage: '/images/jewellery/gold_necklace.png',
            class: 'equipment',
            craftingDescription: 'An ordinary necklace with no special properties.',
            category: 'Gold',
            tags: ['jewelry', 'crafting'],
            equipmentStats: { slot: 'necklace' },
            requiredResources: [{ 203: 100 }],
            rarity: 'uncommon',
        },
        642: {
            id: 642,
            name: 'Corrupted Ring',
            value: 200000,
            tradeable: false,
            enchantmentTier: 3,
            augmentationCost: { 203: 50, 401: 5 },
            craftingExperience: 21480,
            craftingLevel: 55,
            forcedEnchant: 43,
            forcedEnchantAmount: 3,
            overwriteEnchant: false,



            itemImage: '/images/jewellery/corrupted_ring.png',
            class: 'equipment',
            craftingDescription:
                'None are incorruptible. Succumb to the hunger. Once crafted the Corruption enchant will be applied to the ring.',
            extraTooltipInfo: 'None are incorruptible. Succumb to the hunger.',
            category: 'Gold',
            tags: ['jewelry', 'melee', 'crafting'],
            equipmentStats: {
                slot: 'ring',
                weaponBonus: { strength: 5, intellect: 0, dexterity: 0 },
                augmentationBonus: [{ stat: 'weaponBonus.strength', value: 2 }],
            },
            requiredResources: [{ 203: 300, 401: 10, 404: 2, 1544: 1 }],
            rarity: 'uncommon',
        },
        643: {
            id: 643,
            name: 'Ancient Nature Amulet',
            value: 200000,
            tradeable: true,
            enchantmentTier: 3,
            augmentationCost: { 10: 5000, 507: 1, 517: 50 },
            enchantmentOverrideSlot: 'combat-talisman',
            forcedEnchant: 44,
            forcedEnchantAmount: 4,



            itemImage: '/images/jewellery/ancient_nature_talisman.png',
            class: 'equipment',
            extraTooltipInfo: 'An ancient energy keeps you from attempting to absorb the talisman.',
            tags: ['jewelry', 'crafting'],
            enchantable: true,
            equipmentStats: {
                grantedAbility: [9],
                slot: 'necklace',
                weaponBonus: { strength: 0, intellect: 0, dexterity: 0 },
                armorBonus: { protection: 0, resistance: 3, agility: 0, stamina: 0 },
                defensiveDamageAffinity: { Magic: 1.025, Nature: 1.15 },
                augmentationBonus: [{ stat: 'armorBonus.protection', value: 0.5 }],
            },
            rarity: 'rare',
        },
        644: {
            id: 644,
            name: 'Ancient Fire Amulet',
            value: 200000,
            tradeable: true,
            enchantmentTier: 1,
            augmentationCost: { 5: 5000, 502: 1, 512: 50 },
            enchantmentOverrideSlot: 'combat-talisman',
            forcedEnchant: 45,
            forcedEnchantAmount: 1,



            itemImage: '/images/jewellery/ancient_fire_talisman.png',
            class: 'equipment',
            extraTooltipInfo:
                "An ancient energy keeps you from attempting to absorb the talisman. With this you could wield an aspect of flame. Ability: 'Fire Ball' - A fire attack that is 10% slower, 10% more accurate, and does 50% more damage with a cooldown of at least 45 seconds. ABILITY DOES NOT STACK WITH FIRE ORB.",
            tags: ['jewelry', 'melee', 'crafting'],
            enchantable: true,
            equipmentStats: {
                grantedAbility: [7],
                slot: 'necklace',
                weaponBonus: { strength: 3, intellect: 0, dexterity: 0 },
                offensiveDamageAffinity: { Fire: 1.15 },
                defensiveDamageAffinity: { Fire: 1.15 },
                augmentationBonus: [{ stat: 'weaponBonus.strength', value: 0.5 }],
            },
            rarity: 'rare',
        },
        660: {
            id: 660,
            name: 'Bronze Hoe',
            value: 800,
            tradeable: true,
            enchantmentTier: 1,
            augmentationCost: { 201: 4, 302: 2 },
            craftingExperience: 156,
            craftingLevel: 2,
            requiredLevel: { farming: 1 },



            itemImage: '/images/farming/bronze_hoe.png',
            tool: true,
            class: 'equipment',
            craftingDescription: 'Adds 10 to your effective farming level when determining plant yield.',
            extraTooltipInfo: 'Adds 10 to your effective farming level when determining plant yield.',
            category: 'Farming',
            enchantable: true,
            tags: ['tool', 'crafting'],
            equipmentStats: {
                slot: 'hoe',
                toolBoost: [{ skill: 'farming', boost: 10 }],
                augmentationBonus: [{ stat: 'toolBoost.farming', value: 0.5 }],
            },
            requiredResources: [{ 201: 40, 302: 20 }],
        },
        661: {
            id: 661,
            name: 'Iron Hoe',
            value: 6000,
            tradeable: true,
            enchantmentTier: 2,
            augmentationCost: { 202: 8, 303: 4 },
            craftingExperience: 252,
            craftingLevel: 7,
            requiredLevel: { farming: 10 },



            itemImage: '/images/farming/iron_hoe.png',
            tool: true,
            class: 'equipment',
            craftingDescription: 'Adds 20 to your farming level when determining plant yield.',
            extraTooltipInfo: 'Adds 20 to your farming level when determining plant yield.',
            category: 'Farming',
            enchantable: true,
            tags: ['tool', 'crafting'],
            equipmentStats: {
                slot: 'hoe',
                toolBoost: [{ skill: 'farming', boost: 20 }],
                augmentationBonus: [{ stat: 'toolBoost.farming', value: 1 }],
            },
            requiredResources: [{ 202: 75, 303: 35 }],
        },
        662: {
            id: 662,
            name: 'Mithril Hoe',
            value: 52000,
            tradeable: true,
            enchantmentTier: 3,
            augmentationCost: { 204: 13, 304: 7 },
            craftingExperience: 2687,
            craftingLevel: 24,
            requiredLevel: { farming: 30 },



            itemImage: '/images/farming/mithril_hoe.png',
            tool: true,
            class: 'equipment',
            craftingDescription: 'Adds 30 to your farming level when determining plant yield.',
            extraTooltipInfo: 'Adds 30 to your farming level when determining plant yield.',
            category: 'Farming',
            enchantable: true,
            tags: ['tool', 'crafting'],
            equipmentStats: {
                slot: 'hoe',
                toolBoost: [{ skill: 'farming', boost: 30 }],
                augmentationBonus: [{ stat: 'toolBoost.farming', value: 1.5 }],
            },
            requiredResources: [{ 204: 130, 304: 65 }],
        },
        663: {
            id: 663,
            name: 'Adamantite Hoe',
            value: 480000,
            tradeable: true,
            enchantmentTier: 4,
            augmentationCost: { 205: 20, 305: 10 },
            craftingExperience: 8296,
            craftingLevel: 41,
            requiredLevel: { farming: 40 },



            itemImage: '/images/farming/adamantite_hoe.png',
            tool: true,
            class: 'equipment',
            craftingDescription: 'Adds 40 to your farming level when determining plant yield.',
            extraTooltipInfo: 'Adds 40 to your farming level when determining plant yield.',
            category: 'Farming',
            enchantable: true,
            tags: ['tool', 'crafting'],
            equipmentStats: {
                slot: 'hoe',
                toolBoost: [{ skill: 'farming', boost: 40 }],
                augmentationBonus: [{ stat: 'toolBoost.farming', value: 2 }],
            },
            requiredResources: [{ 205: 200, 305: 100 }],
            rarity: 'uncommon',
        },
        664: {
            id: 664,
            name: 'Runite Hoe',
            value: 1944000,
            tradeable: true,
            enchantmentTier: 5,
            augmentationCost: { 206: 27, 306: 14 },
            craftingExperience: 19491,
            craftingLevel: 51,
            requiredLevel: { farming: 50 },



            itemImage: '/images/farming/runite_hoe.png',
            tool: true,
            class: 'equipment',
            craftingDescription: 'Adds 50 to your farming level when determining plant yield.',
            extraTooltipInfo: 'Adds 50 to your farming level when determining plant yield.',
            category: 'Farming',
            enchantable: true,
            tags: ['tool', 'crafting'],
            equipmentStats: {
                slot: 'hoe',
                toolBoost: [{ skill: 'farming', boost: 50 }],
                augmentationBonus: [{ stat: 'toolBoost.farming', value: 2.5 }],
            },
            requiredResources: [{ 206: 270, 306: 135 }],
            rarity: 'uncommon',
        },
        665: {
            id: 665,
            name: 'Stygian Hoe',
            value: 3360000,
            tradeable: true,
            enchantmentTier: 6,
            augmentationCost: { 207: 35, 800: 20 },
            craftingExperience: 56280,
            craftingLevel: 67,
            requiredLevel: { farming: 60 },



            itemImage: '/images/farming/stygian_hoe.png',
            tool: true,
            class: 'equipment',
            craftingDescription: 'Adds 60 to your farming level when determining plant yield.',
            extraTooltipInfo: 'Adds 60 to your farming level when determining plant yield.',
            category: 'Farming',
            enchantable: true,
            tags: ['tool', 'crafting'],
            equipmentStats: {
                slot: 'hoe',
                toolBoost: [{ skill: 'farming', boost: 60 }],
                augmentationBonus: [{ stat: 'toolBoost.farming', value: 3 }],
            },
            requiredResources: [{ 207: 350, 800: 175 }],
            rarity: 'rare',
        },
        666: {
            id: 666,
            name: 'Bronze Tongs',
            value: 800,
            tradeable: true,
            enchantmentTier: 1,
            augmentationCost: { 201: 4, 302: 2 },
            craftingExperience: 156,
            craftingLevel: 2,
            requiredLevel: { smithing: 1 },
            requiredResources: [{ 201: 40, 302: 20 }],



            itemImage: '/images/smithing/Bronze_Tongs.png',
            tool: true,
            class: 'equipment',
            craftingDescription: 'Adds 10 to your effective smithing level.',
            extraTooltipInfo: 'Adds 10 to your effective smithing level.',
            category: 'Skilling',
            enchantable: true,
            tags: ['tool', 'crafting'],
            equipmentStats: {
                slot: 'tongs',
                toolBoost: [{ skill: 'smithing', boost: 10 }],
                augmentationBonus: [{ stat: 'toolBoost.smithing', value: 0.5 }],
            },
        },
        667: {
            id: 667,
            name: 'Iron Tongs',
            value: 800,
            tradeable: true,
            enchantmentTier: 2,
            augmentationCost: { 202: 8, 303: 4 },
            craftingExperience: 252,
            craftingLevel: 7,
            requiredLevel: { smithing: 10 },
            requiredResources: [{ 202: 75, 303: 35 }],



            itemImage: '/images/smithing/Iron_Tongs.png',
            tool: true,
            class: 'equipment',
            craftingDescription: 'Adds 20 to your smithing level.',
            extraTooltipInfo: 'Adds 20 to your smithing level.',
            category: 'Skilling',
            enchantable: true,
            tags: ['tool', 'crafting'],
            equipmentStats: {
                slot: 'tongs',
                toolBoost: [{ skill: 'smithing', boost: 20 }],
                augmentationBonus: [{ stat: 'toolBoost.smithing', value: 1 }],
            },
        },
        668: {
            id: 668,
            name: 'Mithril Tongs',
            value: 800,
            tradeable: true,
            enchantmentTier: 3,
            augmentationCost: { 204: 13, 304: 7 },
            craftingExperience: 2687,
            craftingLevel: 24,
            requiredLevel: { smithing: 20 },
            requiredResources: [{ 204: 130, 304: 65 }],



            itemImage: '/images/smithing/Mithril_Tongs.png',
            tool: true,
            class: 'equipment',
            craftingDescription: 'Adds 30 to your smithing level.',
            extraTooltipInfo: 'Adds 30 to your smithing level.',
            category: 'Skilling',
            enchantable: true,
            tags: ['tool', 'crafting'],
            equipmentStats: {
                slot: 'tongs',
                toolBoost: [{ skill: 'smithing', boost: 30 }],
                augmentationBonus: [{ stat: 'toolBoost.smithing', value: 1.5 }],
            },
        },
        669: {
            id: 669,
            name: 'Adamantite Tongs',
            value: 800,
            tradeable: true,
            enchantmentTier: 4,
            augmentationCost: { 205: 20, 305: 10 },
            craftingExperience: 8296,
            craftingLevel: 41,
            requiredLevel: { smithing: 30 },
            requiredResources: [{ 205: 200, 305: 100 }],



            itemImage: '/images/smithing/Adamantite_Tongs.png',
            tool: true,
            class: 'equipment',
            craftingDescription: 'Adds 40 to your smithing level.',
            extraTooltipInfo: 'Adds 40 to your smithing level.',
            category: 'Skilling',
            enchantable: true,
            tags: ['tool', 'crafting'],
            equipmentStats: {
                slot: 'tongs',
                toolBoost: [{ skill: 'smithing', boost: 40 }],
                augmentationBonus: [{ stat: 'toolBoost.smithing', value: 2 }],
            },
        },
        670: {
            id: 670,
            name: 'Runite Tongs',
            value: 800,
            tradeable: true,
            enchantmentTier: 5,
            augmentationCost: { 206: 27, 306: 14 },
            craftingExperience: 19491,
            craftingLevel: 51,
            requiredLevel: { smithing: 40 },
            requiredResources: [{ 206: 270, 306: 135 }],



            itemImage: '/images/smithing/Runite_Tongs.png',
            tool: true,
            class: 'equipment',
            craftingDescription: 'Adds 50 to your smithing level.',
            extraTooltipInfo: 'Adds 50 to your smithing level.',
            category: 'Skilling',
            enchantable: true,
            tags: ['tool', 'crafting'],
            equipmentStats: {
                slot: 'tongs',
                toolBoost: [{ skill: 'smithing', boost: 50 }],
                augmentationBonus: [{ stat: 'toolBoost.smithing', value: 2.5 }],
            },
            rarity: 'uncommon',
        },
        671: {
            id: 671,
            name: 'Stygian Tongs',
            value: 800,
            tradeable: true,
            enchantmentTier: 6,
            augmentationCost: { 207: 35, 800: 20 },
            craftingExperience: 56280,
            craftingLevel: 67,
            requiredLevel: { smithing: 50 },



            itemImage: '/images/smithing/Stygian_Tongs.png',
            tool: true,
            class: 'equipment',
            craftingDescription: 'Adds 60 to your smithing level.',
            extraTooltipInfo: 'Adds 60 to your smithing level.',
            category: 'Skilling',
            enchantable: true,
            tags: ['tool', 'crafting'],
            equipmentStats: {
                slot: 'tongs',
                toolBoost: [{ skill: 'smithing', boost: 60 }],
                augmentationBonus: [{ stat: 'toolBoost.smithing', value: 3 }],
            },
            requiredResources: [{ 207: 350, 800: 175 }],
            rarity: 'uncommon',
        },
        672: {
            id: 672,
            name: 'Lesser Magic Tome',
            value: 800,
            requiredLevel: { enchanting: 1 },
            itemImage: '/images/enchanting/Lesser_Magic_Tome_embossed.png',
            tool: true,
            class: 'equipment',
            craftingDescription: 'Increases max augmentation level by 2.',
            extraTooltipInfo: 'Increases max augmentation level by 2.',
            enchantable: true,
            tags: ['tool', 'crafting'],
            equipmentStats: { slot: 'tome', toolBoost: [{ skill: 'enchanting', boost: 10 }] },



            category: 'Skilling',
            craftingExperience: 15000,
            craftingLevel: 15,
            requiredResources: [{ 4015: 250 }],
        },
        673: {
            id: 673,
            name: 'Major Magic Tome',
            value: 800,
            requiredLevel: { enchanting: 10 },
            itemImage: '/images/enchanting/Major_Magic_Tome.png',
            tool: true,
            class: 'equipment',
            craftingDescription: 'Increases max augmentation level by 4.',
            extraTooltipInfo: 'Increases max augmentation level by 4.',
            enchantable: true,
            tags: ['tool', 'crafting'],
            equipmentStats: { slot: 'tome', toolBoost: [{ skill: 'enchanting', boost: 20 }] },



            category: 'Skilling',
            craftingExperience: 30000,
            craftingLevel: 30,
            requiredResources: [{ 4016: 360 }],
        },
        674: {
            id: 674,
            name: 'Greater Magic Tome',
            value: 800,
            requiredLevel: { enchanting: 20 },
            itemImage: '/images/enchanting/Greater_Magic_Tome.png',
            tool: true,
            class: 'equipment',
            craftingDescription: 'Increases max augmentation level by 6.',
            extraTooltipInfo: 'Increases max augmentation level by 6.',
            enchantable: true,
            tags: ['tool', 'crafting'],
            equipmentStats: { slot: 'tome', toolBoost: [{ skill: 'enchanting', boost: 30 }] },



            category: 'Skilling',
            craftingExperience: 45000,
            craftingLevel: 45,
            requiredResources: [{ 4017: 510 }],
        },
        675: {
            id: 675,
            name: 'Elder Magic Tome',
            value: 800,
            requiredLevel: { enchanting: 30 },
            itemImage: '/images/enchanting/Elder_Magic_Tome.png',
            tool: true,
            class: 'equipment',
            craftingDescription: 'Increases max augmentation level by 8.',
            extraTooltipInfo: 'Increases max augmentation level by 8.',
            enchantable: true,
            tags: ['tool', 'crafting'],
            equipmentStats: { slot: 'tome', toolBoost: [{ skill: 'enchanting', boost: 40 }] },



            category: 'Skilling',
            craftingExperience: 60000,
            craftingLevel: 60,
            requiredResources: [{ 4018: 760 }],
        },
        676: {
            id: 676,
            name: 'Ancient Magic Tome',
            value: 800,
            requiredLevel: { enchanting: 40 },
            itemImage: '/images/enchanting/Elder_Magic_Tome.png',
            tool: true,
            class: 'equipment',
            craftingDescription: 'Increases max augmentation level by 10.',
            extraTooltipInfo: 'Increases max augmentation level by 10.',
            enchantable: true,
            tags: ['tool', 'crafting'],
            equipmentStats: { slot: 'tome', toolBoost: [{ skill: 'enchanting', boost: 50 }] },



            category: 'Skilling',
            craftingExperience: 75000,
            craftingLevel: 75,
            requiredResources: [{ 4019: 1040 }],
            rarity: 'uncommon',
        },
        690: {
            id: 690,
            name: 'Fishing Net',
            value: 100,
            tradeable: true,
            craftingExperience: 90,
            craftingLevel: 1,



            itemImage: '/images/fishing/net.png',
            craftingDescription: 'A rough net assembled from branches. Used as part of tackleboxes and other fishing gear.',
            extraTooltipInfo: 'A rough net assembled from branches. Used as part of tackleboxes and other fishing gear.',
            class: 'fish',
            category: 'Fishing',
            tags: ['tool', 'crafting'],
            requiredResources: [{ 301: 150 }],
        },
        691: {
            id: 691,
            name: 'Fly Fishing Rod',
            value: 200,
            tradeable: true,
            craftingExperience: 240,
            craftingLevel: 15,



            itemImage: '/images/fishing/fishing_rod.png',
            craftingDescription: 'String on a stick. Used as part of tackleboxes and other fishing gear.',
            extraTooltipInfo: 'String on a stick. Used as part of tackleboxes and other fishing gear.',
            class: 'fish',
            category: 'Fishing',
            tags: ['tool', 'crafting'],
            requiredResources: [{ 301: 200, 302: 100 }],
        },
        692: {
            id: 692,
            name: 'Cage',
            value: 500,
            tradeable: true,
            craftingExperience: 1320,
            craftingLevel: 25,



            itemImage: '/images/fishing/fishing_cage_2.png',
            craftingDescription: 'An iron cage. Used as part of tackleboxes and other fishing gear.',
            extraTooltipInfo: 'An iron cage. Used as part of tackleboxes and other fishing gear.',
            class: 'fish',
            category: 'Fishing',
            tags: ['tool', 'crafting'],
            requiredResources: [{ 202: 50, 303: 200 }],
        },
        693: {
            id: 693,
            name: 'Harpoon',
            value: 1000,
            tradeable: true,
            craftingExperience: 1680,
            craftingLevel: 40,



            itemImage: '/images/fishing/harpoon.png',
            craftingDescription: 'A barbed spear. Used as part of tackleboxes and other fishing gear.',
            extraTooltipInfo: 'A barbed spear. Used as part of tackleboxes and other fishing gear.',
            class: 'fish',
            category: 'Fishing',
            tags: ['tool', 'crafting'],
            requiredResources: [{ 205: 25, 304: 200 }],
        },
        700: {
            id: 700,
            name: 'Feather',
            tradeable: true,
            value: 6,



            itemImage: 'images/fishing/feather.png',
            description: 'Feather, from a chicken most likely.',
            class: 'fish',
            tags: ['fishing'],
        },
        701: {
            id: 701,
            name: 'Fish Oil',
            value: 50,
            tradeable: true,
            ingredientTags: [],
            skill: 'cooking',
            size: -5,
            sizeForHeat: 6,
            difficulty: 0,
            bonusDifficultyXP: 3,
            itemImage: '/images/cooking/fish_oil.png',
            extraTooltipInfo: 'Ew, slimy. Should make logs burn longer or make cooking faster, though!',
            description: 'Oil from cooking fish.',
            class: 'cookedFish',
            tags: ['ingredient', 'cooking'],
        },
        702: {
            id: 702,
            name: 'Pyre Log',
            craftingLevel: 5,
            value: 60,
            tradeable: true,
            heat: 100,
            craftingExperience: 60,



            itemImage: '/images/foraging/pyre.png',
            craftingDescription: 'Pour your fish oil on logs and make them incredibly flammable',
            extraTooltipInfo: 'These can be burned for some heat.',
            class: 'log',
            category: 'General',
            tags: ['foraging', 'crafting'],
            requiredResources: [{ 302: 10, 701: 1 }],
        },
        703: {
            id: 703,
            name: 'Pyre Oak Log',
            craftingLevel: 10,
            value: 200,
            tradeable: true,
            heat: 200,
            craftingExperience: 120,



            itemImage: '/images/foraging/oak_pyre.png',
            craftingDescription: 'Pour your fish oil on oak logs and make them incredibly flammable',
            extraTooltipInfo: 'These can be burned for moderate heat.',
            class: 'log',
            category: 'General',
            tags: ['foraging', 'crafting'],
            requiredResources: [{ 303: 10, 701: 2 }],
        },
        704: {
            id: 704,
            name: 'Pyre Willow Log',
            craftingLevel: 20,
            value: 400,
            tradeable: true,
            heat: 400,
            craftingExperience: 180,



            itemImage: '/images/foraging/willow_pyre.png',
            craftingDescription: 'Pour your fish oil on willow logs and make them incredibly flammable',
            extraTooltipInfo: 'These can be burned for high heat.',
            class: 'log',
            category: 'General',
            tags: ['foraging', 'crafting'],
            requiredResources: [{ 304: 10, 701: 3 }],
        },
        705: {
            id: 705,
            name: 'Pyre Maple Log',
            craftingLevel: 30,
            value: 1100,
            tradeable: true,
            heat: 1100,
            craftingExperience: 240,



            itemImage: '/images/foraging/maple_pyre.png',
            craftingDescription: 'Pour your fish oil on maple logs and make them incredibly flammable',
            extraTooltipInfo: 'These can be burned for a lot of heat.',
            class: 'log',
            category: 'General',
            tags: ['foraging', 'crafting'],
            requiredResources: [{ 305: 10, 701: 4 }],
        },
        706: {
            id: 706,
            name: 'Pyre Yew Log',
            craftingLevel: 40,
            value: 3000,
            tradeable: true,
            heat: 3000,
            craftingExperience: 300,



            itemImage: '/images/foraging/yew_pyre.png',
            craftingDescription: 'Pour your fish oil on yew logs and make them incredibly flammable',
            extraTooltipInfo: 'These can be burned for massive heat.',
            class: 'log',
            category: 'General',
            tags: ['foraging', 'crafting'],
            requiredResources: [{ 306: 10, 701: 5 }],
        },
        707: {
            id: 707,
            name: 'Pyre Elder Log',
            craftingLevel: 50,
            value: 5000,
            tradeable: true,
            heat: 5000,
            craftingExperience: 360,



            itemImage: '/images/foraging/elder_pyre.png',
            craftingDescription: 'Pour your fish oil on elder logs and make them incredibly flammable',
            extraTooltipInfo: 'These can be burned for massive heat.',
            class: 'log',
            category: 'General',
            tags: ['foraging', 'crafting'],
            requiredResources: [{ 307: 10, 701: 6 }],
            rarity: 'uncommon',
        },
        800: {
            id: 800,
            name: 'Ichor',
            value: 10,
            tradeable: true,
            ingredientTags: ['monster', 'spice'],
            skill: 'smithing',
            size: 1,
            difficulty: 4,
            cookingEnchantment: 2001,
            alchemySize: 2,
            itemImage: '/images/smithing/ichor.png',
            extraTooltipInfo: 'A strange substance found in the presence of demons.',
            class: 'bar',
            tags: ['ingredient', 'mining', 'smithing', 'cooking'],
        },
        801: {
            id: 801,
            name: "Phoenix's Feather",
            value: 5000,
            tradeable: true,
            ingredientTags: ['monster', 'spice'],
            skill: 'smithing',
            size: 1,
            difficulty: 4,
            cookingEnchantment: 2001,
            alchemySize: 1.5,
            itemImage: '/images/magic/phoenix_feather.png',
            extraTooltipInfo: 'A white-hot feather taken from a fallen phoenix.',
            class: 'bar',
            tags: ['ingredient', 'mining', 'smithing', 'cooking'],
        },
        900: {
            name: 'Geode',
            id: 900,
            value: 1000,
            tradeable: true,



            itemImage: '/images/misc/geode.png',
            canBeOpened: true,
            class: 'gem',
            tags: [],
            rarity: 'uncommon',
        },
        901: {
            name: "Bird's Nest",
            id: 901,
            value: 1000,
            tradeable: true,



            itemImage: '/images/misc/bird_nest.png',
            canBeOpened: true,
            class: 'gem',
            tags: [],
            rarity: 'uncommon',
        },
        902: {
            name: 'Sunken Treasure',
            id: 902,
            value: 1000,
            tradeable: true,



            itemImage: '/images/misc/sunken_treasure.png',
            canBeOpened: true,
            class: 'gem',
            tags: [],
            rarity: 'uncommon',
        },
        903: {
            name: 'Satchel',
            id: 903,
            value: 1000,
            tradeable: true,



            itemImage: '/images/misc/satchel.png',
            canBeOpened: true,
            class: 'gem',
            tags: [],
            rarity: 'uncommon',
        },
        904: {
            name: 'Ancient Treasure',
            id: 904,
            value: 100000,
            tradeable: true,



            itemImage: '/images/misc/unsunken_treasure.png',
            canBeOpened: true,
            class: 'gem',
            tags: [],
            rarity: 'rare',
        },
        905: {
            name: 'Greater Geode',
            id: 905,
            value: 100000,
            tradeable: true,



            itemImage: '/images/misc/greater_geode.png',
            canBeOpened: true,
            class: 'gem',
            tags: [],
            rarity: 'rare',
        },
        906: {
            name: "Greater Bird's Nest",
            id: 906,
            value: 100000,
            tradeable: true,



            itemImage: '/images/misc/greater_bird_nest.png',
            canBeOpened: true,
            class: 'gem',
            tags: [],
            rarity: 'rare',
        },
        1000: {
            name: 'Bronze Scimitar',
            id: 1000,
            tradeable: true,
            enchantmentTier: 1,
            augmentationCost: { 201: 4, 302: 1 },
            craftingLevel: 4,
            craftingExperience: 110,
            value: 800,



            itemImage: '/images/combat/equipment/bronze_scimitar.png',
            itemIcon: '/images/combat/equipment/bronze_scimitar_icon.png',
            class: 'equipment',
            visual: 'scimitar',
            craftingDescription: 'Slash your enemies. Requires Attack level of 1 to wield.',
            category: 'Melee',
            tags: ['melee', 'weapon', 'onehand', 'crafting'],
            equipmentStats: {
                slot: 'weapon',
                offensiveCritical: { chance: 1 / 20, damageMultiplier: 1.3 },
                offensiveAccuracyAffinityRating: { Melee: 4, Magic: -14, Range: -14, Slashing: 5 },
                offensiveDamageAffinity: {
                    Melee: 1,
                    Magic: 1 / 4,
                    Range: 0.1,
                    Piercing: 1 / 4,
                    Blunt: 1 / 4,
                    Slashing: 1.33,
                },
                weaponBonus: { strength: 11, intellect: 0, dexterity: 0 },
                oneHanded: true,
                attackSpeed: 2.4,
                augmentationBonus: [
                    { stat: 'offensiveAccuracyAffinityRating.Melee', value: 0.1 },
                    { stat: 'weaponBonus.strength', value: 0.1 },
                ],
            },
            requiredResources: [{ 201: 40, 302: 10 }],
        },
        1001: {
            name: 'Bronze Battleaxe',
            id: 1001,
            enchantmentTier: 1,
            augmentationCost: { 201: 6, 302: 2 },
            craftingLevel: 6,
            craftingExperience: 162,
            value: 960,
            tradeable: true,
            requiredLevel: { constitution: 1, attack: 1, strength: 1, defense: 1 },



            itemImage: '/images/combat/equipment/bronze_battleaxe.png',
            itemIcon: '/images/combat/equipment/bronze_battleaxe_icon.png',
            class: 'equipment',
            visual: 'battleaxe',
            craftingDescription: 'Crush your enemies. Requires Attack level of 1 to wield.',
            category: 'Melee',
            tags: ['melee', 'weapon', 'onehand', 'crafting'],
            equipmentStats: {
                slot: 'weapon',
                offensiveCritical: { chance: 7 / 200, damageMultiplier: 1.13 },
                offensiveAccuracyAffinityRating: {
                    Melee: 3,
                    Magic: -12,
                    Range: -12,
                    Piercing: -4,
                    Blunt: 8,
                    Slashing: 5,
                },
                offensiveDamageAffinity: {
                    Melee: 1,
                    Magic: 0.1,
                    Range: 0.1,
                    Piercing: 1 / 4,
                    Blunt: 1.25,
                    Slashing: 3 / 4,
                },
                weaponBonus: { strength: 17, intellect: 0, dexterity: 0 },
                oneHanded: true,
                attackSpeed: 3,
                augmentationBonus: [
                    { stat: 'offensiveAccuracyAffinityRating.Melee', value: 0.1 },
                    { stat: 'weaponBonus.strength', value: 0.1 },
                ],
            },
            requiredResources: [{ 201: 60, 302: 20 }],
        },
        1002: {
            name: 'Bronze Daggers',
            id: 1002,
            enchantmentTier: 1,
            augmentationCost: { 201: 2, 302: 1 },
            craftingLevel: 1,
            craftingExperience: 69,
            value: 400,
            tradeable: true,
            requiredLevel: { constitution: 1, attack: 1, strength: 1, defense: 1 },



            itemImage: '/images/combat/equipment/bronze_dagger.png',
            itemIcon: '/images/combat/equipment/bronze_daggers_icon.png',
            class: 'equipment',
            visual: 'daggers',
            isDaggers: true,
            craftingDescription: 'Stab your enemies. Requires Attack level of 1 to wield.',
            category: 'Melee',
            tags: ['melee', 'weapon', 'twohand', 'crafting'],
            equipmentStats: {
                slot: 'weapon',
                offensiveCritical: { chance: 11 / 200, damageMultiplier: 1.75 },
                offensiveAccuracyAffinityRating: {
                    Melee: 5,
                    Magic: -10,
                    Range: -10,
                    Piercing: 3,
                    Blunt: -8,
                    Slashing: 3,
                },
                offensiveDamageAffinity: {
                    Melee: 1,
                    Magic: 33 / 100,
                    Range: 0.2,
                    Piercing: 1.1,
                    Blunt: 33 / 100,
                    Slashing: 3 / 4,
                },
                weaponBonus: { strength: 5, intellect: 0, dexterity: 0 },
                armorBonus: { protection: 0, resistance: 0, agility: 2, stamina: 0 },
                attackSpeed: 2,
                augmentationBonus: [
                    { stat: 'offensiveCritical.chance', value: 1 / 100 },
                    {
                        stat: 'offensiveCritical.damageMultiplier',
                        value: 1 / 100,
                    },
                    { stat: 'armorBonus.agility', value: 0.1 },
                ],
            },
            requiredResources: [{ 201: 20, 302: 5 }],
        },
        1003: {
            name: 'Bronze Greatsword',
            id: 1003,
            enchantmentTier: 1,
            augmentationCost: { 201: 8, 302: 2 },
            craftingLevel: 6,
            craftingExperience: 178,
            value: 1000,
            tradeable: true,
            requiredLevel: { constitution: 1, attack: 1, strength: 1, defense: 1 },



            itemImage: '/images/combat/equipment/bronze_2h_sword.png',
            itemIcon: '/images/combat/equipment/bronze_2h_sword_icon.png',
            class: 'equipment',
            visual: 'sword-2h',
            craftingDescription: 'Powerfully slash your enemies. Requires Attack level of 1 to wield.',
            category: 'Melee',
            tags: ['melee', 'weapon', 'twohand', 'crafting'],
            equipmentStats: {
                slot: 'weapon',
                offensiveCritical: { chance: 1 / 25, damageMultiplier: 1.15 },
                offensiveAccuracyAffinityRating: {
                    Melee: 5,
                    Magic: -20,
                    Range: -20,
                    Piercing: 7,
                    Blunt: 3,
                    Slashing: 8,
                },
                offensiveDamageAffinity: {
                    Melee: 1,
                    Magic: 0.1,
                    Range: 0.1,
                    Piercing: 33 / 50,
                    Blunt: 33 / 100,
                    Slashing: 1.33,
                },
                weaponBonus: { strength: 21, intellect: 0, dexterity: 0 },
                attackSpeed: 3.4,
                augmentationBonus: [
                    { stat: 'offensiveAccuracyAffinityRating.Melee', value: 0.1 },
                    { stat: 'weaponBonus.strength', value: 0.1 },
                ],
            },
            requiredResources: [{ 201: 80, 302: 15 }],
        },
        1004: {
            name: 'Iron Scimitar',
            id: 1004,
            enchantmentTier: 2,
            augmentationCost: { 202: 8, 303: 2 },
            craftingLevel: 10,
            craftingExperience: 243,
            value: 6000,
            tradeable: true,
            requiredLevel: { constitution: 1, attack: 1, strength: 10, defense: 1 },



            itemImage: '/images/combat/equipment/iron_scimitar.png',
            itemIcon: '/images/combat/equipment/iron_scimitar_icon.png',
            class: 'equipment',
            visual: 'scimitar',
            craftingDescription: 'Slash your enemies. Requires Attack level of 10 to wield.',
            category: 'Melee',
            tags: ['melee', 'weapon', 'onehand', 'crafting'],
            equipmentStats: {
                slot: 'weapon',
                offensiveCritical: { chance: 1 / 20, damageMultiplier: 1.3 },
                offensiveAccuracyAffinityRating: { Melee: 6, Magic: -14, Range: -14, Slashing: 7 },
                offensiveDamageAffinity: {
                    Melee: 1,
                    Magic: 1 / 4,
                    Range: 0.1,
                    Piercing: 1 / 4,
                    Blunt: 1 / 4,
                    Slashing: 1.33,
                },
                weaponBonus: { strength: 13, intellect: 0, dexterity: 0 },
                oneHanded: true,
                attackSpeed: 2.4,
                augmentationBonus: [
                    {
                        stat: 'offensiveAccuracyAffinityRating.Melee',
                        value: 33 / 100,
                    },
                    { stat: 'weaponBonus.strength', value: 33 / 100 },
                ],
            },
            requiredResources: [{ 202: 75, 303: 15 }],
        },
        1005: {
            name: 'Iron Battleaxe',
            id: 1005,
            enchantmentTier: 2,
            augmentationCost: { 202: 10, 303: 3 },
            craftingLevel: 13,
            craftingExperience: 368,
            value: 8000,
            tradeable: true,
            requiredLevel: { constitution: 1, attack: 1, strength: 10, defense: 1 },



            itemImage: '/images/combat/equipment/iron_battleaxe.png',
            itemIcon: '/images/combat/equipment/iron_battleaxe_icon.png',
            class: 'equipment',
            visual: 'battleaxe',
            craftingDescription: 'Crush your enemies. Requires Attack level of 10 to wield.',
            category: 'Melee',
            tags: ['melee', 'weapon', 'onehand', 'crafting'],
            equipmentStats: {
                slot: 'weapon',
                offensiveCritical: { chance: 7 / 200, damageMultiplier: 1.13 },
                offensiveAccuracyAffinityRating: {
                    Melee: 5,
                    Magic: -12,
                    Range: -12,
                    Piercing: -4,
                    Blunt: 12,
                    Slashing: 8,
                },
                offensiveDamageAffinity: {
                    Melee: 1,
                    Magic: 0.1,
                    Range: 0.1,
                    Piercing: 1 / 4,
                    Blunt: 1.25,
                    Slashing: 3 / 4,
                },
                weaponBonus: { strength: 20, intellect: 0, dexterity: 0 },
                oneHanded: true,
                attackSpeed: 3,
                augmentationBonus: [
                    {
                        stat: 'offensiveAccuracyAffinityRating.Melee',
                        value: 3 / 20,
                    },
                    { stat: 'weaponBonus.strength', value: 0.5 },
                ],
            },
            requiredResources: [{ 202: 100, 303: 30 }],
        },
        1006: {
            name: 'Iron Daggers',
            id: 1006,
            enchantmentTier: 2,
            augmentationCost: { 202: 5, 303: 1 },
            craftingLevel: 7,
            craftingExperience: 156,
            value: 4000,
            tradeable: true,
            requiredLevel: { constitution: 1, attack: 1, strength: 10, defense: 1 },



            itemImage: '/images/combat/equipment/iron_dagger.png',
            itemIcon: '/images/combat/equipment/iron_daggers_icon.png',
            class: 'equipment',
            visual: 'daggers',
            isDaggers: true,
            craftingDescription: 'Stab your enemies. Requires Attack level of 10 to wield.',
            category: 'Melee',
            tags: ['melee', 'weapon', 'twohand', 'crafting'],
            equipmentStats: {
                slot: 'weapon',
                offensiveCritical: { chance: 11 / 200, damageMultiplier: 1.75 },
                offensiveAccuracyAffinityRating: {
                    Melee: 8,
                    Magic: -10,
                    Range: -10,
                    Piercing: 5,
                    Blunt: -8,
                    Slashing: 5,
                },
                offensiveDamageAffinity: {
                    Melee: 1,
                    Magic: 33 / 100,
                    Range: 0.2,
                    Piercing: 1.1,
                    Blunt: 33 / 100,
                    Slashing: 3 / 4,
                },
                weaponBonus: { strength: 6, intellect: 0, dexterity: 0 },
                armorBonus: { protection: 0, resistance: 0, agility: 2, stamina: 0 },
                attackSpeed: 2,
                augmentationBonus: [
                    { stat: 'offensiveCritical.chance', value: 1 / 100 },
                    {
                        stat: 'offensiveCritical.damageMultiplier',
                        value: 1 / 100,
                    },
                    { stat: 'armorBonus.agility', value: 0.1 },
                ],
            },
            requiredResources: [{ 202: 50, 303: 10 }],
        },
        1007: {
            name: 'Iron Greatsword',
            id: 1007,
            enchantmentTier: 2,
            augmentationCost: { 202: 13, 303: 3 },
            craftingLevel: 16,
            craftingExperience: 463,
            value: 10000,
            tradeable: true,
            requiredLevel: { constitution: 1, attack: 1, strength: 10, defense: 1 },



            itemImage: '/images/combat/equipment/iron_2h_sword.png',
            itemIcon: '/images/combat/equipment/iron_2h_sword_icon.png',
            class: 'equipment',
            visual: 'sword-2h',
            craftingDescription: 'Powerfully slash your enemies. Requires Attack level of 10 to wield.',
            category: 'Melee',
            tags: ['melee', 'weapon', 'twohand', 'crafting'],
            equipmentStats: {
                slot: 'weapon',
                offensiveCritical: { chance: 1 / 25, damageMultiplier: 1.15 },
                offensiveAccuracyAffinityRating: {
                    Melee: 7,
                    Magic: -20,
                    Range: -20,
                    Piercing: 10,
                    Blunt: 4,
                    Slashing: 12,
                },
                offensiveDamageAffinity: {
                    Melee: 1,
                    Magic: 0.1,
                    Range: 0.1,
                    Piercing: 33 / 50,
                    Blunt: 33 / 100,
                    Slashing: 1.33,
                },
                weaponBonus: { strength: 25, intellect: 0, dexterity: 0 },
                attackSpeed: 3.4,
                augmentationBonus: [
                    {
                        stat: 'offensiveAccuracyAffinityRating.Melee',
                        value: 1 / 4,
                    },
                    { stat: 'weaponBonus.strength', value: 3 / 4 },
                ],
            },
            requiredResources: [{ 202: 125, 303: 25 }],
        },
        1008: {
            name: 'Obsidian Scimitar',
            id: 1008,
            enchantmentTier: 5,
            augmentationCost: { 202: 10, 204: 10, 303: 2, 304: 2, 209: 1 },
            craftingLevel: 1,
            craftingExperience: 1,
            value: 92000,
            tradeable: true,
            requiredLevel: { constitution: 1, attack: 1, strength: 20, defense: 1 },



            itemImage: '/images/combat/equipment/black_scimitar.png',
            itemIcon: '/images/combat/equipment/black_scimitar_icon.png',
            class: 'equipment',
            visual: 'scimitar',
            tags: ['melee', 'weapon', 'onehand', 'crafting'],
            equipmentStats: {
                slot: 'weapon',
                offensiveCritical: { chance: 1 / 20, damageMultiplier: 1.3 },
                offensiveAccuracyAffinityRating: { Melee: 15, Magic: -14, Range: -14, Slashing: 18 },
                offensiveDamageAffinity: {
                    Melee: 1,
                    Magic: 1 / 4,
                    Range: 0.1,
                    Piercing: 1 / 4,
                    Blunt: 1 / 4,
                    Slashing: 1.33,
                },
                weaponBonus: { strength: 22, intellect: 0, dexterity: 0 },
                oneHanded: true,
                attackSpeed: 2.4,
                augmentationBonus: [
                    {
                        stat: 'offensiveAccuracyAffinityRating.Melee',
                        value: 33 / 50,
                    },
                    { stat: 'weaponBonus.strength', value: 33 / 50 },
                ],
            },
            requiredResources: [{ 204: 10, 302: 10 }],
            rarity: 'uncommon',
        },
        1009: {
            name: 'Obsidian Battleaxe',
            id: 1009,
            enchantmentTier: 5,
            augmentationCost: { 202: 12, 204: 12, 303: 4, 304: 4, 209: 1 },
            craftingLevel: 1,
            craftingExperience: 1,
            value: 116000,
            tradeable: true,
            requiredLevel: { constitution: 1, attack: 1, strength: 20, defense: 1 },



            itemImage: '/images/combat/equipment/black_battleaxe.png',
            itemIcon: '/images/combat/equipment/black_battleaxe_icon.png',
            class: 'equipment',
            visual: 'battleaxe',
            tags: ['melee', 'weapon', 'onehand', 'crafting'],
            equipmentStats: {
                slot: 'weapon',
                offensiveCritical: { chance: 7 / 200, damageMultiplier: 1.13 },
                offensiveAccuracyAffinityRating: {
                    Melee: 13,
                    Magic: -12,
                    Range: -12,
                    Piercing: -4,
                    Blunt: 30,
                    Slashing: 20,
                },
                offensiveDamageAffinity: {
                    Melee: 1,
                    Magic: 0.1,
                    Range: 0.1,
                    Piercing: 1 / 4,
                    Blunt: 1.25,
                    Slashing: 3 / 4,
                },
                weaponBonus: { strength: 33, intellect: 0, dexterity: 0 },
                oneHanded: true,
                attackSpeed: 3,
                augmentationBonus: [
                    { stat: 'offensiveAccuracyAffinityRating.Melee', value: 0.3 },
                    { stat: 'weaponBonus.strength', value: 1 },
                ],
            },
            requiredResources: [{ 204: 10, 302: 10 }],
            rarity: 'uncommon',
        },
        1010: {
            name: 'Obsidian Daggers',
            id: 1010,
            enchantmentTier: 5,
            augmentationCost: { 202: 8, 204: 8, 303: 2, 304: 2, 209: 1 },
            craftingLevel: 1,
            craftingExperience: 1,
            value: 68000,
            tradeable: true,
            requiredLevel: { constitution: 1, attack: 1, strength: 20, defense: 1 },



            itemImage: '/images/combat/equipment/black_dagger.png',
            itemIcon: '/images/combat/equipment/black_daggers_icon.png',
            class: 'equipment',
            visual: 'daggers',
            isDaggers: true,
            tags: ['melee', 'weapon', 'twohand', 'crafting'],
            equipmentStats: {
                slot: 'weapon',
                offensiveCritical: { chance: 11 / 200, damageMultiplier: 1.75 },
                offensiveAccuracyAffinityRating: {
                    Melee: 20,
                    Magic: -10,
                    Range: -10,
                    Piercing: 13,
                    Blunt: -8,
                    Slashing: 13,
                },
                offensiveDamageAffinity: {
                    Melee: 1,
                    Magic: 33 / 100,
                    Range: 0.2,
                    Piercing: 1.1,
                    Blunt: 33 / 100,
                    Slashing: 3 / 4,
                },
                weaponBonus: { strength: 11, intellect: 0, dexterity: 0 },
                armorBonus: { protection: 0, resistance: 0, agility: 4, stamina: 0 },
                attackSpeed: 2,
                augmentationBonus: [
                    { stat: 'offensiveCritical.chance', value: 1 / 100 },
                    {
                        stat: 'offensiveCritical.damageMultiplier',
                        value: 1 / 100,
                    },
                    { stat: 'armorBonus.agility', value: 0.1 },
                ],
            },
            requiredResources: [{ 204: 10, 304: 10 }],
            rarity: 'uncommon',
        },
        1011: {
            name: 'Obsidian Greatsword',
            id: 1011,
            enchantmentTier: 5,
            augmentationCost: { 202: 15, 204: 15, 303: 3, 304: 3, 209: 1 },
            craftingLevel: 1,
            craftingExperience: 1,
            value: 140000,
            tradeable: true,
            requiredLevel: { constitution: 1, attack: 1, strength: 20, defense: 1 },



            itemImage: '/images/combat/equipment/black_2h_sword.png',
            itemIcon: '/images/combat/equipment/black_2h_sword_icon.png',
            class: 'equipment',
            visual: 'sword-2h',
            tags: ['melee', 'weapon', 'twohand', 'crafting'],
            equipmentStats: {
                slot: 'weapon',
                offensiveCritical: { chance: 1 / 25, damageMultiplier: 1.15 },
                offensiveAccuracyAffinityRating: {
                    Melee: 18,
                    Magic: -20,
                    Range: -20,
                    Piercing: 25,
                    Blunt: 10,
                    Slashing: 30,
                },
                offensiveDamageAffinity: {
                    Melee: 1,
                    Magic: 0.1,
                    Range: 0.1,
                    Piercing: 33 / 50,
                    Blunt: 33 / 100,
                    Slashing: 1.33,
                },
                weaponBonus: { strength: 41, intellect: 0, dexterity: 0 },
                attackSpeed: 3.4,
                augmentationBonus: [
                    { stat: 'offensiveAccuracyAffinityRating.Melee', value: 0.5 },
                    { stat: 'weaponBonus.strength', value: 1.5 },
                ],
            },
            requiredResources: [{ 204: 10, 304: 10 }],
            rarity: 'uncommon',
        },
        1012: {
            name: 'Mithril Scimitar',
            id: 1012,
            enchantmentTier: 3,
            augmentationCost: { 204: 13, 304: 3 },
            craftingLevel: 27,
            craftingExperience: 2511,
            value: 52000,
            tradeable: true,
            requiredLevel: { constitution: 1, attack: 1, strength: 30, defense: 1 },



            itemImage: '/images/combat/equipment/mithril_scimitar.png',
            itemIcon: '/images/combat/equipment/mithril_scimitar_icon.png',
            class: 'equipment',
            visual: 'scimitar',
            craftingDescription: 'Slash your enemies. Requires Attack level of 30 to wield.',
            category: 'Melee',
            tags: ['melee', 'weapon', 'onehand', 'crafting'],
            equipmentStats: {
                slot: 'weapon',
                offensiveCritical: { chance: 1 / 20, damageMultiplier: 1.3 },
                offensiveAccuracyAffinityRating: { Melee: 26, Magic: -14, Range: -14, Slashing: 31 },
                offensiveDamageAffinity: {
                    Melee: 1,
                    Magic: 1 / 4,
                    Range: 0.1,
                    Piercing: 1 / 4,
                    Blunt: 1 / 4,
                    Slashing: 1.33,
                },
                weaponBonus: { strength: 33, intellect: 0, dexterity: 0 },
                oneHanded: true,
                attackSpeed: 2.4,
                augmentationBonus: [
                    {
                        stat: 'offensiveAccuracyAffinityRating.Melee',
                        value: 99 / 100,
                    },
                    { stat: 'weaponBonus.strength', value: 99 / 100 },
                ],
            },
            requiredResources: [{ 204: 130, 304: 25 }],
        },
        1013: {
            name: 'Mithril Battleaxe',
            id: 1013,
            enchantmentTier: 3,
            augmentationCost: { 204: 16, 304: 5 },
            craftingLevel: 30,
            craftingExperience: 3082,
            value: 65000,
            tradeable: true,
            requiredLevel: { constitution: 1, attack: 1, strength: 30, defense: 1 },



            itemImage: '/images/combat/equipment/mithril_battleaxe.png',
            itemIcon: '/images/combat/equipment/mithril_battleaxe_icon.png',
            class: 'equipment',
            visual: 'battleaxe',
            craftingDescription: 'Crush your enemies. Requires Attack level of 30 to wield.',
            category: 'Melee',
            tags: ['melee', 'weapon', 'onehand', 'crafting'],
            equipmentStats: {
                slot: 'weapon',
                offensiveCritical: { chance: 7 / 200, damageMultiplier: 1.13 },
                offensiveAccuracyAffinityRating: {
                    Melee: 22,
                    Magic: -12,
                    Range: -12,
                    Piercing: -4,
                    Blunt: 52,
                    Slashing: 35,
                },
                offensiveDamageAffinity: {
                    Melee: 1,
                    Magic: 0.1,
                    Range: 0.1,
                    Piercing: 1 / 4,
                    Blunt: 1.25,
                    Slashing: 3 / 4,
                },
                weaponBonus: { strength: 49, intellect: 0, dexterity: 0 },
                oneHanded: true,
                attackSpeed: 3,
                augmentationBonus: [
                    {
                        stat: 'offensiveAccuracyAffinityRating.Melee',
                        value: 9 / 20,
                    },
                    { stat: 'weaponBonus.strength', value: 1.5 },
                ],
            },
            requiredResources: [{ 204: 160, 304: 50 }],
        },
        1014: {
            name: 'Mithril Daggers',
            id: 1014,
            enchantmentTier: 3,
            augmentationCost: { 204: 10, 304: 3 },
            craftingLevel: 23,
            craftingExperience: 1943,
            value: 39000,
            tradeable: true,
            requiredLevel: { constitution: 1, attack: 1, strength: 30, defense: 1 },



            itemImage: '/images/combat/equipment/mithril_dagger.png',
            itemIcon: '/images/combat/equipment/mithril_daggers_icon.png',
            class: 'equipment',
            visual: 'daggers',
            isDaggers: true,
            craftingDescription: 'Stab your enemies. Requires Attack level of 30 to wield.',
            category: 'Melee',
            tags: ['melee', 'weapon', 'twohand', 'crafting'],
            equipmentStats: {
                slot: 'weapon',
                offensiveCritical: { chance: 11 / 200, damageMultiplier: 1.75 },
                offensiveAccuracyAffinityRating: {
                    Melee: 35,
                    Magic: -10,
                    Range: -10,
                    Piercing: 22,
                    Blunt: -8,
                    Slashing: 22,
                },
                offensiveDamageAffinity: {
                    Melee: 1,
                    Magic: 33 / 100,
                    Range: 0.2,
                    Piercing: 1.1,
                    Blunt: 33 / 100,
                    Slashing: 3 / 4,
                },
                weaponBonus: { strength: 16, intellect: 0, dexterity: 0 },
                armorBonus: { protection: 0, resistance: 0, agility: 6, stamina: 0 },
                attackSpeed: 2,
                augmentationBonus: [
                    { stat: 'offensiveCritical.chance', value: 1 / 100 },
                    {
                        stat: 'offensiveCritical.damageMultiplier',
                        value: 1 / 100,
                    },
                    { stat: 'armorBonus.agility', value: 0.1 },
                ],
            },
            requiredResources: [{ 204: 100, 304: 25 }],
        },
        1015: {
            name: 'Mithril Greatsword',
            id: 1015,
            enchantmentTier: 3,
            augmentationCost: { 204: 20, 304: 4 },
            craftingLevel: 33,
            craftingExperience: 3672,
            value: 78000,
            tradeable: true,
            requiredLevel: { constitution: 1, attack: 1, strength: 30, defense: 1 },



            itemImage: '/images/combat/equipment/mithril_2h_sword.png',
            itemIcon: '/images/combat/equipment/mithril_2h_sword_icon.png',
            class: 'equipment',
            visual: 'sword-2h',
            craftingDescription: 'Powerfully slash your enemies. Requires Attack level of 30 to wield.',
            category: 'Melee',
            tags: ['melee', 'weapon', 'twohand', 'crafting'],
            equipmentStats: {
                slot: 'weapon',
                offensiveCritical: { chance: 1 / 25, damageMultiplier: 1.15 },
                offensiveAccuracyAffinityRating: {
                    Melee: 31,
                    Magic: -20,
                    Range: -20,
                    Piercing: 44,
                    Blunt: 17,
                    Slashing: 52,
                },
                offensiveDamageAffinity: {
                    Melee: 1,
                    Magic: 0.1,
                    Range: 0.1,
                    Piercing: 33 / 50,
                    Blunt: 33 / 100,
                    Slashing: 1.33,
                },
                weaponBonus: { strength: 60, intellect: 0, dexterity: 0 },
                attackSpeed: 3.4,
                augmentationBonus: [
                    {
                        stat: 'offensiveAccuracyAffinityRating.Melee',
                        value: 3 / 4,
                    },
                    { stat: 'weaponBonus.strength', value: 2.25 },
                ],
            },
            requiredResources: [{ 204: 195, 304: 40 }],
        },
        1016: {
            name: 'Adamantite Scimitar',
            id: 1016,
            enchantmentTier: 4,
            augmentationCost: { 205: 20, 305: 4 },
            craftingLevel: 43,
            craftingExperience: 7786,
            value: 480000,
            tradeable: true,
            requiredLevel: { constitution: 1, attack: 1, strength: 40, defense: 1 },



            itemImage: '/images/combat/equipment/adamantite_scimitar.png',
            itemIcon: '/images/combat/equipment/adamantite_scimitar_icon.png',
            class: 'equipment',
            visual: 'scimitar',
            craftingDescription: 'Slash your enemies. Requires Attack level of 40 to wield.',
            category: 'Melee',
            tags: ['melee', 'weapon', 'onehand', 'crafting'],
            equipmentStats: {
                slot: 'weapon',
                offensiveCritical: { chance: 1 / 20, damageMultiplier: 1.3 },
                offensiveAccuracyAffinityRating: { Melee: 38, Magic: -14, Range: -14, Slashing: 45 },
                offensiveDamageAffinity: {
                    Melee: 1,
                    Magic: 1 / 4,
                    Range: 0.1,
                    Piercing: 1 / 4,
                    Blunt: 1 / 4,
                    Slashing: 1.33,
                },
                weaponBonus: { strength: 44, intellect: 0, dexterity: 0 },
                oneHanded: true,
                attackSpeed: 2.4,
                augmentationBonus: [
                    { stat: 'offensiveAccuracyAffinityRating.Melee', value: 1.32 },
                    { stat: 'weaponBonus.strength', value: 1.32 },
                ],
            },
            requiredResources: [{ 205: 200, 305: 40 }],
            rarity: 'uncommon',
        },
        1017: {
            name: 'Adamantite Battleaxe',
            id: 1017,
            enchantmentTier: 4,
            augmentationCost: { 205: 24, 305: 7 },
            craftingLevel: 47,
            craftingExperience: 9418,
            value: 576000,
            tradeable: true,
            requiredLevel: { constitution: 1, attack: 1, strength: 40, defense: 1 },



            itemImage: '/images/combat/equipment/adamantite_battleaxe.png',
            itemIcon: '/images/combat/equipment/adamantite_battleaxe_icon.png',
            class: 'equipment',
            visual: 'battleaxe',
            craftingDescription: 'Crush your enemies. Requires Attack level of 40 to wield.',
            category: 'Melee',
            tags: ['melee', 'weapon', 'onehand', 'crafting'],
            equipmentStats: {
                slot: 'weapon',
                offensiveCritical: { chance: 7 / 200, damageMultiplier: 1.13 },
                offensiveAccuracyAffinityRating: {
                    Melee: 32,
                    Magic: -12,
                    Range: -12,
                    Piercing: -4,
                    Blunt: 77,
                    Slashing: 51,
                },
                offensiveDamageAffinity: {
                    Melee: 1,
                    Magic: 0.1,
                    Range: 0.1,
                    Piercing: 1 / 4,
                    Blunt: 1.25,
                    Slashing: 3 / 4,
                },
                weaponBonus: { strength: 67, intellect: 0, dexterity: 0 },
                oneHanded: true,
                attackSpeed: 3,
                augmentationBonus: [
                    { stat: 'offensiveAccuracyAffinityRating.Melee', value: 0.6 },
                    { stat: 'weaponBonus.strength', value: 2 },
                ],
            },
            requiredResources: [{ 205: 240, 305: 70 }],
            rarity: 'uncommon',
        },
        1018: {
            name: 'Adamantite Daggers',
            id: 1018,
            enchantmentTier: 4,
            augmentationCost: { 205: 16, 305: 3 },
            craftingLevel: 40,
            craftingExperience: 6316,
            value: 384000,
            tradeable: true,
            requiredLevel: { constitution: 1, attack: 1, strength: 40, defense: 1 },



            itemImage: '/images/combat/equipment/adamantite_dagger.png',
            itemIcon: '/images/combat/equipment/adamantite_daggers_icon.png',
            class: 'equipment',
            visual: 'daggers',
            isDaggers: true,
            craftingDescription: 'Stab your enemies. Requires Attack level of 40 to wield.',
            category: 'Melee',
            tags: ['melee', 'weapon', 'twohand', 'crafting'],
            equipmentStats: {
                slot: 'weapon',
                offensiveCritical: { chance: 11 / 200, damageMultiplier: 1.75 },
                offensiveAccuracyAffinityRating: {
                    Melee: 51,
                    Magic: -10,
                    Range: -10,
                    Piercing: 32,
                    Blunt: -8,
                    Slashing: 32,
                },
                offensiveDamageAffinity: {
                    Melee: 1,
                    Magic: 33 / 100,
                    Range: 0.2,
                    Piercing: 1.1,
                    Blunt: 33 / 100,
                    Slashing: 3 / 4,
                },
                weaponBonus: { strength: 22, intellect: 0, dexterity: 0 },
                armorBonus: { protection: 0, resistance: 0, agility: 8, stamina: 0 },
                attackSpeed: 2,
                augmentationBonus: [
                    { stat: 'offensiveCritical.chance', value: 1 / 100 },
                    {
                        stat: 'offensiveCritical.damageMultiplier',
                        value: 1 / 100,
                    },
                    { stat: 'armorBonus.agility', value: 0.1 },
                ],
            },
            requiredResources: [{ 205: 160, 305: 30 }],
            rarity: 'uncommon',
        },
        1019: {
            name: 'Adamantite Greatsword',
            id: 1019,
            enchantmentTier: 4,
            augmentationCost: { 205: 28, 305: 6 },
            craftingLevel: 49,
            craftingExperience: 10593,
            value: 672000,
            tradeable: true,
            requiredLevel: { constitution: 1, attack: 1, strength: 40, defense: 1 },



            itemImage: '/images/combat/equipment/adamantite_2h_sword.png',
            itemIcon: '/images/combat/equipment/adamantite_2h_sword_icon.png',
            class: 'equipment',
            visual: 'sword-2h',
            craftingDescription: 'Powerfully slash your enemies. Requires Attack level of 40 to wield.',
            category: 'Melee',
            tags: ['melee', 'weapon', 'twohand', 'crafting'],
            equipmentStats: {
                slot: 'weapon',
                offensiveCritical: { chance: 1 / 25, damageMultiplier: 1.15 },
                offensiveAccuracyAffinityRating: {
                    Melee: 45,
                    Magic: -20,
                    Range: -20,
                    Piercing: 64,
                    Blunt: 26,
                    Slashing: 77,
                },
                offensiveDamageAffinity: {
                    Melee: 1,
                    Magic: 0.1,
                    Range: 0.1,
                    Piercing: 33 / 50,
                    Blunt: 33 / 100,
                    Slashing: 1.33,
                },
                weaponBonus: { strength: 82, intellect: 0, dexterity: 0 },
                attackSpeed: 3.4,
                augmentationBonus: [
                    { stat: 'offensiveAccuracyAffinityRating.Melee', value: 1 },
                    { stat: 'weaponBonus.strength', value: 3 },
                ],
            },
            requiredResources: [{ 205: 280, 305: 55 }],
            rarity: 'uncommon',
        },
        1020: {
            name: 'Runite Scimitar',
            id: 1020,
            enchantmentTier: 5,
            augmentationCost: { 206: 27, 306: 6 },
            craftingLevel: 53,
            craftingExperience: 18666,
            value: 1944000,
            tradeable: true,
            requiredLevel: { constitution: 1, attack: 1, strength: 50, defense: 1 },



            itemImage: '/images/combat/equipment/rune_scimitar.png',
            itemIcon: '/images/combat/equipment/rune_scimitar_icon.png',
            class: 'equipment',
            visual: 'scimitar',
            craftingDescription: 'Slash your enemies. Requires Attack level of 50 to wield.',
            category: 'Melee',
            tags: ['melee', 'weapon', 'onehand', 'crafting'],
            equipmentStats: {
                slot: 'weapon',
                offensiveCritical: { chance: 1 / 20, damageMultiplier: 1.3 },
                offensiveAccuracyAffinityRating: { Melee: 52, Magic: -14, Range: -14, Slashing: 60 },
                offensiveDamageAffinity: {
                    Melee: 1,
                    Magic: 1 / 4,
                    Range: 0.1,
                    Piercing: 1 / 4,
                    Blunt: 1 / 4,
                    Slashing: 1.33,
                },
                weaponBonus: { strength: 57, intellect: 0, dexterity: 0 },
                oneHanded: true,
                attackSpeed: 2.4,
                augmentationBonus: [
                    { stat: 'offensiveAccuracyAffinityRating.Melee', value: 1.65 },
                    { stat: 'weaponBonus.strength', value: 1.65 },
                ],
            },
            requiredResources: [{ 206: 270, 306: 55 }],
            rarity: 'uncommon',
        },
        1021: {
            name: 'Runite Battleaxe',
            id: 1021,
            enchantmentTier: 5,
            augmentationCost: { 206: 32, 306: 19 },
            craftingLevel: 57,
            craftingExperience: 22155,
            value: 2268000,
            tradeable: true,
            requiredLevel: { constitution: 1, attack: 1, strength: 50, defense: 1 },



            itemImage: '/images/combat/equipment/rune_battleaxe.png',
            itemIcon: '/images/combat/equipment/rune_battleaxe_icon.png',
            class: 'equipment',
            visual: 'battleaxe',
            craftingDescription: 'Crush your enemies. Requires Attack level of 50 to wield.',
            category: 'Melee',
            tags: ['melee', 'weapon', 'onehand', 'crafting'],
            equipmentStats: {
                slot: 'weapon',
                offensiveCritical: { chance: 7 / 200, damageMultiplier: 1.13 },
                offensiveAccuracyAffinityRating: {
                    Melee: 43,
                    Magic: -12,
                    Range: -12,
                    Piercing: -4,
                    Blunt: 104,
                    Slashing: 69,
                },
                offensiveDamageAffinity: {
                    Melee: 1,
                    Magic: 0.1,
                    Range: 0.1,
                    Piercing: 1 / 4,
                    Blunt: 1.25,
                    Slashing: 3 / 4,
                },
                weaponBonus: { strength: 86, intellect: 0, dexterity: 0 },
                oneHanded: true,
                attackSpeed: 3,
                augmentationBonus: [
                    {
                        stat: 'offensiveAccuracyAffinityRating.Melee',
                        value: 3 / 4,
                    },
                    { stat: 'weaponBonus.strength', value: 2.5 },
                ],
            },
            requiredResources: [{ 206: 315, 306: 95 }],
            rarity: 'uncommon',
        },
        1022: {
            name: 'Runite Daggers',
            id: 1022,
            enchantmentTier: 5,
            augmentationCost: { 206: 23, 306: 5 },
            craftingLevel: 50,
            craftingExperience: 15717,
            value: 1620000,
            tradeable: true,
            requiredLevel: { constitution: 1, attack: 1, strength: 50, defense: 1 },



            itemImage: '/images/combat/equipment/rune_dagger.png',
            itemIcon: '/images/combat/equipment/rune_daggers_icon.png',
            class: 'equipment',
            visual: 'daggers',
            isDaggers: true,
            craftingDescription: 'Stab your enemies. Requires Attack level of 50 to wield.',
            category: 'Melee',
            tags: ['melee', 'weapon', 'twohand', 'crafting'],
            equipmentStats: {
                slot: 'weapon',
                offensiveCritical: { chance: 11 / 200, damageMultiplier: 1.75 },
                offensiveAccuracyAffinityRating: {
                    Melee: 69,
                    Magic: -10,
                    Range: -10,
                    Piercing: 43,
                    Blunt: -8,
                    Slashing: 43,
                },
                offensiveDamageAffinity: {
                    Melee: 1,
                    Magic: 33 / 100,
                    Range: 0.2,
                    Piercing: 1.1,
                    Blunt: 33 / 100,
                    Slashing: 3 / 4,
                },
                weaponBonus: { strength: 29, intellect: 0, dexterity: 0 },
                armorBonus: { protection: 0, resistance: 0, agility: 10, stamina: 0 },
                attackSpeed: 2,
                augmentationBonus: [
                    { stat: 'offensiveCritical.chance', value: 1 / 100 },
                    {
                        stat: 'offensiveCritical.damageMultiplier',
                        value: 1 / 100,
                    },
                    { stat: 'armorBonus.agility', value: 0.1 },
                ],
            },
            requiredResources: [{ 206: 225, 306: 45 }],
            rarity: 'uncommon',
        },
        1023: {
            name: 'Runite Greatsword',
            id: 1023,
            enchantmentTier: 5,
            augmentationCost: { 206: 36, 306: 7 },
            craftingLevel: 59,
            craftingExperience: 24716,
            value: 2592000,
            tradeable: true,
            requiredLevel: { constitution: 1, attack: 1, strength: 50, defense: 1 },



            itemImage: '/images/combat/equipment/rune_2h_sword.png',
            itemIcon: '/images/combat/equipment/rune_2h_sword_icon.png',
            class: 'equipment',
            visual: 'sword-2h',
            craftingDescription: 'Powerfully slash your enemies. Requires Attack level of 50 to wield.',
            category: 'Melee',
            tags: ['melee', 'weapon', 'twohand', 'crafting'],
            equipmentStats: {
                slot: 'weapon',
                offensiveCritical: { chance: 1 / 25, damageMultiplier: 1.15 },
                offensiveAccuracyAffinityRating: {
                    Melee: 60,
                    Magic: -20,
                    Range: -20,
                    Piercing: 86,
                    Blunt: 35,
                    Slashing: 104,
                },
                offensiveDamageAffinity: {
                    Melee: 1,
                    Magic: 0.1,
                    Range: 0.1,
                    Piercing: 33 / 50,
                    Blunt: 33 / 100,
                    Slashing: 1.33,
                },
                weaponBonus: { strength: 106, intellect: 0, dexterity: 0 },
                attackSpeed: 3.4,
                augmentationBonus: [
                    { stat: 'offensiveAccuracyAffinityRating.Melee', value: 1.25 },
                    { stat: 'weaponBonus.strength', value: 3.75 },
                ],
            },
            requiredResources: [{ 206: 360, 306: 70 }],
            rarity: 'uncommon',
        },
        1024: {
            name: 'Stygian Scimitar',
            id: 1024,
            enchantmentTier: 6,
            augmentationCost: { 207: 35, 800: 7 },
            craftingLevel: 63,
            craftingExperience: 52297,
            value: 3360000,
            tradeable: true,
            requiredLevel: { constitution: 1, attack: 1, strength: 60, defense: 1 },



            itemImage: '/images/combat/equipment/stygian_scimitar.png',
            itemIcon: '/images/combat/equipment/stygian_scimitar_icon.png',
            class: 'equipment',
            visual: 'scimitar',
            craftingDescription: 'Slash your enemies. Requires Attack level of 60 to wield.',
            category: 'Melee',
            tags: ['melee', 'weapon', 'onehand', 'crafting'],
            equipmentStats: {
                slot: 'weapon',
                offensiveCritical: { chance: 1 / 20, damageMultiplier: 1.3 },
                offensiveAccuracyAffinityRating: { Melee: 66, Magic: -14, Range: -14, Slashing: 77 },
                offensiveDamageAffinity: {
                    Melee: 1,
                    Magic: 1 / 4,
                    Range: 0.1,
                    Piercing: 1 / 4,
                    Blunt: 1 / 4,
                    Slashing: 1.33,
                },
                weaponBonus: { strength: 71, intellect: 0, dexterity: 0 },
                oneHanded: true,
                attackSpeed: 2.4,
                augmentationBonus: [
                    { stat: 'offensiveAccuracyAffinityRating.Melee', value: 1.98 },
                    { stat: 'weaponBonus.strength', value: 1.98 },
                ],
            },
            requiredResources: [{ 207: 350, 800: 70 }],
            rarity: 'rare',
        },
        1025: {
            name: 'Stygian Battleaxe',
            id: 1025,
            enchantmentTier: 6,
            augmentationCost: { 207: 40, 800: 12 },
            craftingLevel: 67,
            craftingExperience: 61461,
            value: 3840000,
            tradeable: true,
            requiredLevel: { constitution: 1, attack: 1, strength: 60, defense: 1 },



            itemImage: '/images/combat/equipment/stygian_battleaxe.png',
            itemIcon: '/images/combat/equipment/stygian_battleaxe_icon.png',
            class: 'equipment',
            visual: 'stygian-battleaxe',
            craftingDescription: 'Crush your enemies. Requires Attack level of 60 to wield.',
            category: 'Melee',
            tags: ['melee', 'weapon', 'onehand', 'crafting'],
            equipmentStats: {
                slot: 'weapon',
                offensiveCritical: { chance: 7 / 200, damageMultiplier: 1.13 },
                offensiveAccuracyAffinityRating: {
                    Melee: 55,
                    Magic: -12,
                    Range: -12,
                    Piercing: -4,
                    Blunt: 132,
                    Slashing: 88,
                },
                offensiveDamageAffinity: {
                    Melee: 1,
                    Magic: 0.1,
                    Range: 0.1,
                    Piercing: 1 / 4,
                    Blunt: 1.25,
                    Slashing: 3 / 4,
                },
                weaponBonus: { strength: 107, intellect: 0, dexterity: 0 },
                oneHanded: true,
                attackSpeed: 3,
                augmentationBonus: [
                    { stat: 'offensiveAccuracyAffinityRating.Melee', value: 0.9 },
                    { stat: 'weaponBonus.strength', value: 3 },
                ],
            },
            requiredResources: [{ 207: 400, 800: 120 }],
            rarity: 'rare',
        },
        1026: {
            name: 'Stygian Daggers',
            id: 1026,
            enchantmentTier: 6,
            augmentationCost: { 207: 30, 800: 6 },
            craftingLevel: 60,
            craftingExperience: 45360,
            value: 2880000,
            tradeable: true,
            requiredLevel: { constitution: 1, attack: 1, strength: 60, defense: 1 },



            itemImage: '/images/combat/equipment/stygian_dagger.png',
            itemIcon: '/images/combat/equipment/stygian_daggers_icon.png',
            class: 'equipment',
            visual: 'stygian-daggers',
            isDaggers: true,
            craftingDescription: 'Stab your enemies. Requires Attack level of 60 to wield.',
            category: 'Melee',
            tags: ['melee', 'weapon', 'twohand', 'crafting'],
            equipmentStats: {
                slot: 'weapon',
                offensiveCritical: { chance: 11 / 200, damageMultiplier: 1.75 },
                offensiveAccuracyAffinityRating: {
                    Melee: 88,
                    Magic: -10,
                    Range: -10,
                    Piercing: 55,
                    Blunt: -8,
                    Slashing: 55,
                },
                offensiveDamageAffinity: {
                    Melee: 1,
                    Magic: 33 / 100,
                    Range: 0.2,
                    Piercing: 1.1,
                    Blunt: 33 / 100,
                    Slashing: 3 / 4,
                },
                weaponBonus: { strength: 35, intellect: 0, dexterity: 0 },
                armorBonus: { protection: 0, resistance: 0, agility: 12, stamina: 0 },
                attackSpeed: 2,
                augmentationBonus: [
                    { stat: 'offensiveCritical.chance', value: 1 / 100 },
                    {
                        stat: 'offensiveCritical.damageMultiplier',
                        value: 1 / 100,
                    },
                    { stat: 'armorBonus.agility', value: 0.1 },
                ],
            },
            requiredResources: [{ 207: 300, 800: 60 }],
            rarity: 'rare',
        },
        1027: {
            name: 'Stygian Greatsword',
            id: 1027,
            enchantmentTier: 6,
            augmentationCost: { 207: 45, 800: 9 },
            craftingLevel: 69,
            craftingExperience: 66592,
            value: 4320000,
            tradeable: true,
            requiredLevel: { constitution: 1, attack: 1, strength: 60, defense: 1 },



            itemImage: '/images/combat/equipment/stygian_2h_sword.png',
            itemIcon: '/images/combat/equipment/stygian_2h_sword_icon.png',
            class: 'equipment',
            visual: 'stygian-sword-2h',
            craftingDescription: 'Powerfully slash your enemies. Requires Attack level of 60 to wield.',
            category: 'Melee',
            tags: ['melee', 'weapon', 'twohand', 'crafting'],
            equipmentStats: {
                slot: 'weapon',
                offensiveCritical: { chance: 1 / 25, damageMultiplier: 1.15 },
                offensiveAccuracyAffinityRating: {
                    Melee: 77,
                    Magic: -20,
                    Range: -20,
                    Piercing: 110,
                    Blunt: 44,
                    Slashing: 132,
                },
                offensiveDamageAffinity: {
                    Melee: 1,
                    Magic: 0.1,
                    Range: 0.1,
                    Piercing: 33 / 50,
                    Blunt: 33 / 100,
                    Slashing: 1.33,
                },
                weaponBonus: { strength: 131, intellect: 0, dexterity: 0 },
                attackSpeed: 3.4,
                augmentationBonus: [
                    { stat: 'offensiveAccuracyAffinityRating.Melee', value: 1.5 },
                    { stat: 'weaponBonus.strength', value: 4.5 },
                ],
            },
            requiredResources: [{ 207: 450, 800: 90 }],
            rarity: 'rare',
        },
        1050: {
            name: 'Bronze Helm',
            id: 1050,
            enchantmentTier: 1,
            augmentationCost: { 201: 2 },
            craftingLevel: 2,
            craftingExperience: 40,
            value: 400,
            tradeable: true,
            requiredLevel: { constitution: 1, attack: 1, strength: 1, defense: 1 },



            itemImage: '/images/combat/equipment/bronze_med_helm.png',
            itemIcon: '/images/combat/equipment/bronze_med_helm_icon.png',
            twoSided: true,
            class: 'equipment',
            visual: 'med-helm',
            craftingDescription: 'Requires Defense level of 1 to wield.',
            category: 'Melee',
            tags: ['armor', 'crafting'],
            equipmentStats: {
                slot: 'helm',
                defensiveDamageAffinity: {
                    Melee: 1,
                    Magic: 97 / 100,
                    Range: 1,
                    Piercing: 1,
                    Blunt: 1,
                    Slashing: 1,
                },
                armorBonus: { protection: 2, resistance: -1, agility: 0, stamina: 0 },
                augmentationBonus: [{ stat: 'armorBonus.protection', value: 0.1 }],
            },
            requiredResources: [{ 201: 20 }],
        },
        1051: {
            name: 'Iron Helm',
            id: 1051,
            enchantmentTier: 2,
            augmentationCost: { 202: 5 },
            craftingLevel: 9,
            craftingExperience: 150,
            value: 4000,
            tradeable: true,
            requiredLevel: { constitution: 1, attack: 1, strength: 1, defense: 10 },



            itemImage: '/images/combat/equipment/iron_med_helm.png',
            itemIcon: '/images/combat/equipment/iron_med_helm_icon.png',
            twoSided: true,
            class: 'equipment',
            visual: 'med-helm',
            craftingDescription: 'Requires Defense level of 10 to wield.',
            category: 'Melee',
            tags: ['armor', 'crafting'],
            equipmentStats: {
                slot: 'helm',
                defensiveDamageAffinity: {
                    Melee: 1,
                    Magic: 97 / 100,
                    Range: 1,
                    Piercing: 1,
                    Blunt: 1,
                    Slashing: 1,
                },
                armorBonus: { protection: 3, resistance: -1, agility: 0, stamina: 0 },
                augmentationBonus: [{ stat: 'armorBonus.protection', value: 3 / 20 }],
            },
            requiredResources: [{ 202: 50 }],
        },
        1052: {
            name: 'Obsidian Helm',
            id: 1052,
            enchantmentTier: 5,
            augmentationCost: { 202: 8, 204: 8, 209: 1 },
            craftingLevel: 1,
            craftingExperience: 1,
            value: 68000,
            tradeable: true,
            requiredLevel: { constitution: 1, attack: 1, strength: 1, defense: 20 },



            itemImage: '/images/combat/equipment/black_med_helm.png',
            itemIcon: '/images/combat/equipment/black_med_helm_icon.png',
            twoSided: true,
            class: 'equipment',
            visual: 'med-helm',
            category: ['armor', 'combat'],
            tags: ['armor', 'crafting'],
            equipmentStats: {
                slot: 'helm',
                defensiveDamageAffinity: {
                    Melee: 1,
                    Magic: 97 / 100,
                    Range: 1,
                    Piercing: 1,
                    Blunt: 1,
                    Slashing: 1,
                },
                armorBonus: { protection: 8, resistance: -1, agility: 0, stamina: 0 },
                augmentationBonus: [{ stat: 'armorBonus.protection', value: 0.3 }],
            },
            requiredResources: [{ 204: 200 }],
            rarity: 'uncommon',
        },
        1053: {
            name: 'Mithril Helm',
            id: 1053,
            enchantmentTier: 3,
            augmentationCost: { 204: 10 },
            craftingLevel: 25,
            craftingExperience: 1817,
            value: 39000,
            tradeable: true,
            requiredLevel: { constitution: 1, attack: 1, strength: 1, defense: 30 },



            itemImage: '/images/combat/equipment/mithril_med_helm.png',
            itemIcon: '/images/combat/equipment/mithril_med_helm_icon.png',
            twoSided: true,
            class: 'equipment',
            visual: 'med-helm',
            craftingDescription: 'Requires Defense level of 30 to wield.',
            category: 'Melee',
            tags: ['armor', 'crafting'],
            equipmentStats: {
                slot: 'helm',
                defensiveDamageAffinity: {
                    Melee: 1,
                    Magic: 97 / 100,
                    Range: 1,
                    Piercing: 1,
                    Blunt: 1,
                    Slashing: 1,
                },
                armorBonus: { protection: 13, resistance: -1, agility: 0, stamina: 0 },
                augmentationBonus: [{ stat: 'armorBonus.protection', value: 9 / 20 }],
            },
            requiredResources: [{ 204: 100 }],
        },
        1054: {
            name: 'Adamantite Helm',
            id: 1054,
            enchantmentTier: 4,
            augmentationCost: { 205: 16 },
            craftingLevel: 42,
            craftingExperience: 6086,
            value: 384000,
            tradeable: true,
            requiredLevel: { constitution: 1, attack: 1, strength: 1, defense: 40 },



            itemImage: '/images/combat/equipment/adamantite_med_helm.png',
            itemIcon: '/images/combat/equipment/adamantite_med_helm_icon.png',
            twoSided: true,
            class: 'equipment',
            visual: 'med-helm',
            craftingDescription: 'Requires Defense level of 40 to wield.',
            category: 'Melee',
            tags: ['armor', 'crafting'],
            equipmentStats: {
                slot: 'helm',
                defensiveDamageAffinity: {
                    Melee: 1,
                    Magic: 97 / 100,
                    Range: 1,
                    Piercing: 1,
                    Blunt: 1,
                    Slashing: 1,
                },
                armorBonus: { protection: 19, resistance: -1, agility: 0, stamina: 0 },
                augmentationBonus: [{ stat: 'armorBonus.protection', value: 0.6 }],
            },
            requiredResources: [{ 205: 160 }],
            rarity: 'uncommon',
        },
        1055: {
            name: 'Runite Helm',
            id: 1055,
            enchantmentTier: 5,
            augmentationCost: { 206: 23 },
            craftingLevel: 52,
            craftingExperience: 15386,
            value: 1620000,
            tradeable: true,
            requiredLevel: { constitution: 1, attack: 1, strength: 1, defense: 50 },



            itemImage: '/images/combat/equipment/rune_med_helm.png',
            itemIcon: '/images/combat/equipment/rune_med_helm_icon.png',
            twoSided: true,
            class: 'equipment',
            visual: 'med-helm',
            craftingDescription: 'Requires Defense level of 50 to wield.',
            category: 'Melee',
            tags: ['armor', 'crafting'],
            equipmentStats: {
                slot: 'helm',
                defensiveDamageAffinity: {
                    Melee: 1,
                    Magic: 97 / 100,
                    Range: 1,
                    Piercing: 1,
                    Blunt: 1,
                    Slashing: 1,
                },
                armorBonus: { protection: 26, resistance: -1, agility: 0, stamina: 0 },
                augmentationBonus: [{ stat: 'armorBonus.protection', value: 3 / 4 }],
            },
            requiredResources: [{ 206: 225 }],
            rarity: 'uncommon',
        },
        1056: {
            name: 'Stygian Helm',
            id: 1056,
            enchantmentTier: 6,
            augmentationCost: { 207: 30, 800: 6 },
            craftingLevel: 62,
            craftingExperience: 45177,
            value: 2880000,
            tradeable: true,
            requiredLevel: { constitution: 1, attack: 1, strength: 1, defense: 60 },



            itemImage: '/images/combat/equipment/stygian_med_helm.png',
            itemIcon: '/images/combat/equipment/stygian_med_helm_icon.png',
            twoSided: true,
            class: 'equipment',
            visual: 'med-helm',
            craftingDescription: 'Requires Defense level of 60 to wield.',
            category: 'Melee',
            tags: ['armor', 'crafting'],
            equipmentStats: {
                slot: 'helm',
                defensiveDamageAffinity: {
                    Melee: 1,
                    Magic: 97 / 100,
                    Range: 1,
                    Piercing: 1,
                    Blunt: 1,
                    Slashing: 1,
                },
                armorBonus: { protection: 33, resistance: -1, agility: 0, stamina: 0 },
                augmentationBonus: [{ stat: 'armorBonus.protection', value: 0.9 }],
            },
            requiredResources: [{ 207: 300, 800: 60 }],
            rarity: 'rare',
        },
        1060: {
            name: 'Bronze Full Helm',
            id: 1060,
            enchantmentTier: 1,
            augmentationCost: { 201: 4 },
            craftingLevel: 5,
            craftingExperience: 85,
            value: 800,
            tradeable: true,
            requiredLevel: { constitution: 1, attack: 1, strength: 1, defense: 1 },



            itemImage: '/images/combat/equipment/bronze_full_helm.png',
            class: 'equipment',
            visual: 'full-helm',
            craftingDescription: 'Requires Defense level of 1 to wield.',
            category: 'Melee',
            tags: ['armor', 'melee', 'crafting'],
            equipmentStats: {
                slot: 'helm',
                defensiveCritical: { chance: 0.1, damageMultiplier: 0.8 },
                defensiveDamageAffinity: {
                    Melee: 1.06,
                    Magic: 47 / 50,
                    Range: 1.06,
                    Piercing: 1.08,
                    Blunt: 47 / 50,
                    Slashing: 1.08,
                },
                armorBonus: { protection: 3, resistance: -1, agility: -1, stamina: 3.75 },
                augmentationBonus: [
                    { stat: 'armorBonus.protection', value: 0.1 },
                    { stat: 'armorBonus.stamina', value: 0.1 },
                ],
                itemSet: [10009],
            },
            requiredResources: [{ 201: 40 }],
        },
        1061: {
            name: 'Iron Full Helm',
            id: 1061,
            enchantmentTier: 2,
            augmentationCost: { 202: 8 },
            craftingLevel: 11,
            craftingExperience: 225,
            value: 4800,
            tradeable: true,
            requiredLevel: { constitution: 1, attack: 1, strength: 1, defense: 10 },



            itemImage: '/images/combat/equipment/iron_full_helm.png',
            class: 'equipment',
            visual: 'full-helm',
            craftingDescription: 'Requires Defense level of 10 to wield.',
            category: 'Melee',
            tags: ['armor', 'melee', 'crafting'],
            equipmentStats: {
                slot: 'helm',
                defensiveCritical: { chance: 0.1, damageMultiplier: 0.8 },
                defensiveDamageAffinity: {
                    Melee: 1.06,
                    Magic: 47 / 50,
                    Range: 1.06,
                    Piercing: 1.08,
                    Blunt: 47 / 50,
                    Slashing: 1.08,
                },
                armorBonus: { protection: 5, resistance: -1, agility: -1, stamina: 4 },
                augmentationBonus: [
                    { stat: 'armorBonus.protection', value: 1 / 4 },
                    { stat: 'armorBonus.stamina', value: 0.1 },
                ],
                itemSet: [10009],
            },
            requiredResources: [{ 202: 75 }],
        },
        1062: {
            name: 'Obsidian Full Helm',
            id: 1062,
            enchantmentTier: 5,
            augmentationCost: { 202: 10, 204: 10, 209: 1 },
            craftingLevel: 1,
            craftingExperience: 1,
            value: 89600,
            tradeable: true,
            requiredLevel: { constitution: 1, attack: 1, strength: 1, defense: 20 },



            itemImage: '/images/combat/equipment/black_full_helm.png',
            class: 'equipment',
            visual: 'full-helm',
            category: ['armor', 'combat'],
            tags: ['armor', 'melee', 'crafting'],
            equipmentStats: {
                slot: 'helm',
                defensiveCritical: { chance: 0.1, damageMultiplier: 0.8 },
                defensiveDamageAffinity: {
                    Melee: 1.06,
                    Magic: 47 / 50,
                    Range: 1.06,
                    Piercing: 1.08,
                    Blunt: 47 / 50,
                    Slashing: 1.08,
                },
                armorBonus: { protection: 13, resistance: -1, agility: -1, stamina: 5 },
                augmentationBonus: [
                    { stat: 'armorBonus.protection', value: 0.5 },
                    { stat: 'armorBonus.stamina', value: 0.1 },
                ],
                itemSet: [10009],
            },
            requiredResources: [{ 204: 200 }],
            rarity: 'uncommon',
        },
        1063: {
            name: 'Mithril Full Helm',
            id: 1063,
            enchantmentTier: 3,
            augmentationCost: { 204: 13 },
            craftingLevel: 28,
            craftingExperience: 2361,
            value: 52000,
            tradeable: true,
            requiredLevel: { constitution: 1, attack: 1, strength: 1, defense: 30 },



            itemImage: '/images/combat/equipment/mithril_full_helm.png',
            class: 'equipment',
            visual: 'full-helm',
            craftingDescription: 'Requires Defense level of 30 to wield.',
            category: 'Melee',
            tags: ['armor', 'melee', 'crafting'],
            equipmentStats: {
                slot: 'helm',
                defensiveCritical: { chance: 0.1, damageMultiplier: 0.8 },
                defensiveDamageAffinity: {
                    Melee: 1.06,
                    Magic: 47 / 50,
                    Range: 1.06,
                    Piercing: 1.08,
                    Blunt: 47 / 50,
                    Slashing: 1.08,
                },
                armorBonus: { protection: 22, resistance: -1, agility: -1, stamina: 6 },
                augmentationBonus: [
                    { stat: 'armorBonus.protection', value: 3 / 4 },
                    { stat: 'armorBonus.stamina', value: 0.1 },
                ],
                itemSet: [10009],
            },
            requiredResources: [{ 204: 130 }],
        },
        1064: {
            name: 'Adamantite Full Helm',
            id: 1064,
            enchantmentTier: 4,
            augmentationCost: { 205: 20 },
            craftingLevel: 45,
            craftingExperience: 7578,
            value: 480000,
            tradeable: true,
            requiredLevel: { constitution: 1, attack: 1, strength: 1, defense: 40 },



            itemImage: '/images/combat/equipment/adamantite_full_helm.png',
            class: 'equipment',
            visual: 'full-helm',
            craftingDescription: 'Requires Defense level of 40 to wield.',
            category: 'Melee',
            tags: ['armor', 'melee', 'crafting'],
            equipmentStats: {
                slot: 'helm',
                defensiveCritical: { chance: 0.1, damageMultiplier: 0.8 },
                defensiveDamageAffinity: {
                    Melee: 1.06,
                    Magic: 47 / 50,
                    Range: 1.06,
                    Piercing: 1.08,
                    Blunt: 47 / 50,
                    Slashing: 1.08,
                },
                armorBonus: { protection: 32, resistance: -1, agility: -1, stamina: 7 },
                augmentationBonus: [
                    { stat: 'armorBonus.protection', value: 1 },
                    { stat: 'armorBonus.stamina', value: 0.1 },
                ],
                itemSet: [10009],
            },
            requiredResources: [{ 205: 200 }],
            rarity: 'uncommon',
        },
        1065: {
            name: 'Runite Full Helm',
            id: 1065,
            enchantmentTier: 5,
            augmentationCost: { 206: 27 },
            craftingLevel: 55,
            craftingExperience: 18514,
            value: 1944000,
            tradeable: true,
            requiredLevel: { constitution: 1, attack: 1, strength: 1, defense: 50 },



            itemImage: '/images/combat/equipment/rune_full_helm.png',
            class: 'equipment',
            visual: 'full-helm',
            craftingDescription: 'Requires Defense level of 50 to wield.',
            category: 'Melee',
            tags: ['armor', 'melee', 'crafting'],
            equipmentStats: {
                slot: 'helm',
                defensiveCritical: { chance: 0.1, damageMultiplier: 0.8 },
                defensiveDamageAffinity: {
                    Melee: 1.06,
                    Magic: 47 / 50,
                    Range: 1.06,
                    Piercing: 1.08,
                    Blunt: 47 / 50,
                    Slashing: 1.08,
                },
                armorBonus: { protection: 43, resistance: -1, agility: -1, stamina: 8 },
                augmentationBonus: [
                    { stat: 'armorBonus.protection', value: 1.25 },
                    { stat: 'armorBonus.stamina', value: 0.1 },
                ],
                itemSet: [10009],
            },
            requiredResources: [{ 206: 270 }],
            rarity: 'uncommon',
        },
        1066: {
            name: 'Stygian Full Helm',
            id: 1066,
            enchantmentTier: 6,
            augmentationCost: { 207: 35, 800: 7 },
            craftingLevel: 65,
            craftingExperience: 52717,
            value: 3360000,
            tradeable: true,
            requiredLevel: { constitution: 1, attack: 1, strength: 1, defense: 60 },



            itemImage: '/images/combat/equipment/stygian_full_helm.png',
            class: 'equipment',
            visual: 'full-helm',
            craftingDescription: 'Requires Defense level of 60 to wield.',
            category: 'Melee',
            tags: ['armor', 'melee', 'crafting'],
            equipmentStats: {
                slot: 'helm',
                defensiveCritical: { chance: 0.1, damageMultiplier: 0.8 },
                defensiveDamageAffinity: {
                    Melee: 1.06,
                    Magic: 47 / 50,
                    Range: 1.06,
                    Piercing: 1.08,
                    Blunt: 47 / 50,
                    Slashing: 1.08,
                },
                armorBonus: { protection: 55, resistance: -1, agility: -1, stamina: 9 },
                augmentationBonus: [
                    { stat: 'armorBonus.protection', value: 1.5 },
                    { stat: 'armorBonus.stamina', value: 0.1 },
                ],
                itemSet: [10009],
            },
            requiredResources: [{ 207: 350, 800: 70 }],
            rarity: 'rare',
        },
        1070: {
            name: 'Bronze Shield',
            id: 1070,
            enchantmentTier: 1,
            augmentationCost: { 201: 6 },
            craftingLevel: 6,
            craftingExperience: 135,
            value: 1200,
            tradeable: true,
            requiredLevel: { constitution: 1, attack: 1, strength: 1, defense: 1 },



            itemImage: '/images/combat/equipment/bronze_shield.png',
            itemIcon: '/images/combat/equipment/bronze_shield_icon.png',
            class: 'equipment',
            visual: 'shield',
            craftingDescription: 'Requires Defense level of 1 to wield.',
            category: 'Melee',
            tags: ['armor', 'weapon', 'melee', 'crafting'],
            equipmentStats: {
                slot: 'shield',
                defensiveCritical: { chance: 0.1, damageMultiplier: 0.8 },
                defensiveDamageAffinity: {
                    Melee: 1.06,
                    Magic: 47 / 50,
                    Range: 1.06,
                    Piercing: 1.13,
                    Blunt: 1.33,
                    Slashing: 1.13,
                },
                armorBonus: { protection: 4, resistance: -1, agility: -1, stamina: 3.75 },
                augmentationBonus: [
                    { stat: 'armorBonus.protection', value: 0.1 },
                    { stat: 'armorBonus.stamina', value: 0.1 },
                ],
                itemSet: [10009],
            },
            requiredResources: [{ 201: 60 }],
        },
        1071: {
            name: 'Iron Shield',
            id: 1071,
            enchantmentTier: 2,
            augmentationCost: { 202: 10 },
            craftingLevel: 12,
            craftingExperience: 312,
            value: 8000,
            tradeable: true,
            requiredLevel: { constitution: 1, attack: 1, strength: 1, defense: 10 },



            itemImage: '/images/combat/equipment/iron_shield.png',
            itemIcon: '/images/combat/equipment/iron_shield_icon.png',
            class: 'equipment',
            visual: 'shield',
            craftingDescription: 'Requires Defense level of 10 to wield.',
            category: 'Melee',
            tags: ['armor', 'weapon', 'melee', 'crafting'],
            equipmentStats: {
                slot: 'shield',
                defensiveCritical: { chance: 0.1, damageMultiplier: 0.8 },
                defensiveDamageAffinity: {
                    Melee: 1.06,
                    Magic: 47 / 50,
                    Range: 1.06,
                    Piercing: 1.13,
                    Blunt: 1.33,
                    Slashing: 1.13,
                },
                armorBonus: { protection: 6, resistance: -1, agility: -1, stamina: 4 },
                augmentationBonus: [
                    { stat: 'armorBonus.protection', value: 1 / 4 },
                    { stat: 'armorBonus.stamina', value: 0.1 },
                ],
                itemSet: [10009],
            },
            requiredResources: [{ 202: 100 }],
        },
        1072: {
            name: 'Obsidian Shield',
            id: 1072,
            enchantmentTier: 5,
            augmentationCost: { 202: 14, 204: 14, 209: 1 },
            craftingLevel: 1,
            craftingExperience: 1,
            value: 116000,
            tradeable: true,
            requiredLevel: { constitution: 1, attack: 1, strength: 1, defense: 20 },



            itemImage: '/images/combat/equipment/black_shield.png',
            itemIcon: '/images/combat/equipment/black_shield_icon.png',
            class: 'equipment',
            visual: 'shield',
            tags: ['armor', 'weapon', 'melee', 'crafting'],
            equipmentStats: {
                slot: 'shield',
                defensiveCritical: { chance: 0.1, damageMultiplier: 0.8 },
                defensiveDamageAffinity: {
                    Melee: 1.06,
                    Magic: 47 / 50,
                    Range: 1.06,
                    Piercing: 1.13,
                    Blunt: 1.33,
                    Slashing: 1.13,
                },
                armorBonus: { protection: 15, resistance: -1, agility: -1, stamina: 5 },
                augmentationBonus: [
                    { stat: 'armorBonus.protection', value: 0.5 },
                    { stat: 'armorBonus.stamina', value: 0.1 },
                ],
                itemSet: [10009],
            },
            requiredResources: [{ 201: 10 }],
            rarity: 'uncommon',
        },
        1073: {
            name: 'Mithril Shield',
            id: 1073,
            enchantmentTier: 3,
            augmentationCost: { 204: 16 },
            craftingLevel: 29,
            craftingExperience: 2930,
            value: 65000,
            tradeable: true,
            requiredLevel: { constitution: 1, attack: 1, strength: 1, defense: 30 },



            itemImage: '/images/combat/equipment/mithril_shield.png',
            itemIcon: '/images/combat/equipment/mithril_shield_icon.png',
            class: 'equipment',
            visual: 'shield',
            craftingDescription: 'Requires Defense level of 30 to wield.',
            category: 'Melee',
            tags: ['armor', 'weapon', 'melee', 'crafting'],
            equipmentStats: {
                slot: 'shield',
                defensiveCritical: { chance: 0.1, damageMultiplier: 0.8 },
                defensiveDamageAffinity: {
                    Melee: 1.06,
                    Magic: 47 / 50,
                    Range: 1.06,
                    Piercing: 1.13,
                    Blunt: 1.33,
                    Slashing: 1.13,
                },
                armorBonus: { protection: 26, resistance: -1, agility: -1, stamina: 6 },
                augmentationBonus: [
                    { stat: 'armorBonus.protection', value: 3 / 4 },
                    { stat: 'armorBonus.stamina', value: 0.1 },
                ],
                itemSet: [10009],
            },
            requiredResources: [{ 204: 160 }],
        },
        1074: {
            name: 'Adamantite Shield',
            id: 1074,
            enchantmentTier: 4,
            augmentationCost: { 205: 24 },
            craftingLevel: 45,
            craftingExperience: 8937,
            value: 576000,
            tradeable: true,
            requiredLevel: { constitution: 1, attack: 1, strength: 1, defense: 40 },



            itemImage: '/images/combat/equipment/adamantite_shield.png',
            itemIcon: '/images/combat/equipment/adamantite_shield_icon.png',
            class: 'equipment',
            visual: 'shield',
            craftingDescription: 'Requires Defense level of 40 to wield.',
            category: 'Melee',
            tags: ['armor', 'weapon', 'melee', 'crafting'],
            equipmentStats: {
                slot: 'shield',
                defensiveCritical: { chance: 0.1, damageMultiplier: 0.8 },
                defensiveDamageAffinity: {
                    Melee: 1.06,
                    Magic: 47 / 50,
                    Range: 1.06,
                    Piercing: 1.13,
                    Blunt: 1.33,
                    Slashing: 1.13,
                },
                armorBonus: { protection: 38, resistance: -1, agility: -1, stamina: 7 },
                augmentationBonus: [
                    { stat: 'armorBonus.protection', value: 1 },
                    { stat: 'armorBonus.stamina', value: 0.1 },
                ],
                itemSet: [10009],
            },
            requiredResources: [{ 205: 240 }],
            rarity: 'uncommon',
        },
        1075: {
            name: 'Runite Shield',
            id: 1075,
            enchantmentTier: 5,
            augmentationCost: { 206: 32 },
            craftingLevel: 55,
            craftingExperience: 21323,
            value: 2268000,
            tradeable: true,
            requiredLevel: { constitution: 1, attack: 1, strength: 1, defense: 50 },



            itemImage: '/images/combat/equipment/rune_shield.png',
            itemIcon: '/images/combat/equipment/rune_shield_icon.png',
            class: 'equipment',
            visual: 'shield',
            craftingDescription: 'Requires Defense level of 50 to wield.',
            category: 'Melee',
            tags: ['armor', 'weapon', 'melee', 'crafting'],
            equipmentStats: {
                slot: 'shield',
                defensiveCritical: { chance: 0.1, damageMultiplier: 0.8 },
                defensiveDamageAffinity: {
                    Melee: 1.06,
                    Magic: 47 / 50,
                    Range: 1.06,
                    Piercing: 1.13,
                    Blunt: 1.33,
                    Slashing: 1.13,
                },
                armorBonus: { protection: 52, resistance: -1, agility: -1, stamina: 8 },
                augmentationBonus: [
                    { stat: 'armorBonus.protection', value: 1.25 },
                    { stat: 'armorBonus.stamina', value: 0.1 },
                ],
                itemSet: [10009],
            },
            requiredResources: [{ 206: 315 }],
            rarity: 'uncommon',
        },
        1076: {
            name: 'Stygian Shield',
            id: 1076,
            enchantmentTier: 6,
            augmentationCost: { 207: 40, 800: 8 },
            craftingLevel: 65,
            craftingExperience: 59563,
            value: 3840000,
            tradeable: true,
            requiredLevel: { constitution: 1, attack: 1, strength: 1, defense: 60 },



            itemImage: '/images/combat/equipment/stygian_shield.png',
            itemIcon: '/images/combat/equipment/stygian_shield_icon.png',
            class: 'equipment',
            visual: 'shield',
            craftingDescription: 'Requires Defense level of 60 to wield.',
            category: 'Melee',
            tags: ['armor', 'weapon', 'melee', 'crafting'],
            equipmentStats: {
                slot: 'shield',
                defensiveCritical: { chance: 0.1, damageMultiplier: 0.8 },
                defensiveDamageAffinity: {
                    Melee: 1.06,
                    Magic: 47 / 50,
                    Range: 1.06,
                    Piercing: 1.13,
                    Blunt: 1.33,
                    Slashing: 1.13,
                },
                armorBonus: { protection: 66, resistance: -1, agility: -1, stamina: 9 },
                augmentationBonus: [
                    { stat: 'armorBonus.protection', value: 1.5 },
                    { stat: 'armorBonus.stamina', value: 0.1 },
                ],
                itemSet: [10009],
            },
            requiredResources: [{ 207: 400, 800: 80 }],
            rarity: 'rare',
        },
        1090: {
            name: 'Bronze Breastplate',
            id: 1090,
            enchantmentTier: 1,
            augmentationCost: { 201: 10 },
            craftingLevel: 12,
            craftingExperience: 200,
            value: 2000,
            tradeable: true,
            requiredLevel: { constitution: 1, attack: 1, strength: 1, defense: 1 },



            itemImage: '/images/combat/equipment/bronze_platebody.png',
            class: 'equipment',
            visual: 'platebody',
            craftingDescription: 'Requires Defense level of 1 to wield.',
            category: 'Melee',
            tags: ['armor', 'melee', 'crafting'],
            equipmentStats: {
                slot: 'body',
                defensiveCritical: { chance: 0.1, damageMultiplier: 0.8 },
                defensiveDamageAffinity: {
                    Melee: 1.13,
                    Magic: 47 / 50,
                    Range: 1.06,
                    Piercing: 1.13,
                    Blunt: 47 / 50,
                    Slashing: 1.13,
                },
                armorBonus: { protection: 9, resistance: -6, agility: -6, stamina: 7.75 },
                augmentationBonus: [
                    { stat: 'armorBonus.protection', value: 0.1 },
                    { stat: 'armorBonus.stamina', value: 0.1 },
                ],
                itemSet: [10009],
            },
            requiredResources: [{ 201: 100 }],
        },
        1091: {
            name: 'Bronze Chainmail',
            id: 1091,
            enchantmentTier: 1,
            augmentationCost: { 201: 6 },
            craftingLevel: 8,
            craftingExperience: 130,
            value: 1200,
            tradeable: true,
            requiredLevel: { constitution: 1, attack: 1, strength: 1, defense: 1 },



            itemImage: '/images/combat/equipment/bronze_chainbody.png',
            class: 'equipment',
            visual: 'chainbody',
            craftingDescription: 'Requires Defense level of 1 to wield.',
            category: 'Melee',
            tags: ['armor', 'crafting'],
            equipmentStats: {
                slot: 'body',
                defensiveDamageAffinity: {
                    Melee: 19 / 20,
                    Magic: 19 / 20,
                    Range: 1,
                    Piercing: 97 / 100,
                    Blunt: 99 / 100,
                    Slashing: 1.04,
                },
                armorBonus: { protection: 5, resistance: -3, agility: 3, stamina: 0 },
                augmentationBonus: [
                    { stat: 'armorBonus.protection', value: 0.1 },
                    { stat: 'armorBonus.agility', value: 0.1 },
                ],
            },
            requiredResources: [{ 201: 60 }],
        },
        1092: {
            name: 'Iron Breastplate',
            id: 1092,
            enchantmentTier: 2,
            augmentationCost: { 202: 15 },
            craftingLevel: 19,
            craftingExperience: 518,
            value: 12000,
            tradeable: true,
            requiredLevel: { constitution: 1, attack: 1, strength: 1, defense: 10 },



            itemImage: '/images/combat/equipment/iron_platebody.png',
            class: 'equipment',
            visual: 'platebody',
            craftingDescription: 'Requires Defense level of 10 to wield.',
            category: 'Melee',
            tags: ['armor', 'melee', 'crafting'],
            equipmentStats: {
                slot: 'body',
                defensiveCritical: { chance: 0.1, damageMultiplier: 0.8 },
                defensiveDamageAffinity: {
                    Melee: 1.13,
                    Magic: 47 / 50,
                    Range: 1.06,
                    Piercing: 1.13,
                    Blunt: 47 / 50,
                    Slashing: 1.13,
                },
                armorBonus: { protection: 13, resistance: -6, agility: -6, stamina: 8 },
                augmentationBonus: [
                    { stat: 'armorBonus.protection', value: 1 / 4 },
                    { stat: 'armorBonus.stamina', value: 0.1 },
                ],
                itemSet: [10009],
            },
            requiredResources: [{ 202: 150 }],
        },
        1093: {
            name: 'Iron Chainmail',
            id: 1093,
            enchantmentTier: 2,
            augmentationCost: { 202: 10 },
            craftingLevel: 14,
            craftingExperience: 323,
            value: 8000,
            tradeable: true,
            requiredLevel: { constitution: 1, attack: 1, strength: 1, defense: 10 },



            itemImage: '/images/combat/equipment/iron_chainbody.png',
            class: 'equipment',
            visual: 'chainbody',
            craftingDescription: 'Requires Defense level of 10 to wield.',
            category: 'Melee',
            tags: ['armor', 'crafting'],
            equipmentStats: {
                slot: 'body',
                defensiveDamageAffinity: {
                    Melee: 19 / 20,
                    Magic: 19 / 20,
                    Range: 1,
                    Piercing: 97 / 100,
                    Blunt: 99 / 100,
                    Slashing: 1.04,
                },
                armorBonus: { protection: 8, resistance: -3, agility: 4, stamina: 0 },
                augmentationBonus: [
                    { stat: 'armorBonus.protection', value: 1 / 4 },
                    { stat: 'armorBonus.agility', value: 0.1 },
                ],
            },
            requiredResources: [{ 202: 100 }],
        },
        1094: {
            name: 'Obsidian Breastplate',
            id: 1094,
            enchantmentTier: 5,
            augmentationCost: { 202: 20, 204: 20, 209: 1 },
            craftingLevel: 1,
            craftingExperience: 1,
            value: 164000,
            tradeable: true,
            requiredLevel: { constitution: 1, attack: 1, strength: 1, defense: 20 },



            itemImage: '/images/combat/equipment/black_platebody.png',
            class: 'equipment',
            visual: 'platebody',
            category: ['armor', 'combat'],
            tags: ['armor', 'melee', 'crafting'],
            equipmentStats: {
                slot: 'body',
                defensiveCritical: { chance: 0.1, damageMultiplier: 0.8 },
                defensiveDamageAffinity: {
                    Melee: 1.13,
                    Magic: 47 / 50,
                    Range: 1.06,
                    Piercing: 1.13,
                    Blunt: 47 / 50,
                    Slashing: 1.13,
                },
                armorBonus: { protection: 33, resistance: -6, agility: -6, stamina: 9 },
                augmentationBonus: [
                    { stat: 'armorBonus.protection', value: 3 / 4 },
                    { stat: 'armorBonus.stamina', value: 0.1 },
                ],
                itemSet: [10009],
            },
            requiredResources: [{ 205: 2000 }],
            rarity: 'uncommon',
        },
        1095: {
            name: 'Obsidian Chainmail',
            id: 1095,
            enchantmentTier: 5,
            augmentationCost: { 202: 15, 204: 15, 209: 1 },
            craftingLevel: 1,
            craftingExperience: 1,
            value: 116000,
            tradeable: true,
            requiredLevel: { constitution: 1, attack: 1, strength: 1, defense: 20 },



            itemImage: '/images/combat/equipment/black_chainbody.png',
            class: 'equipment',
            visual: 'chainbody',
            category: ['armor', 'combat'],
            tags: ['armor', 'crafting'],
            equipmentStats: {
                slot: 'body',
                defensiveDamageAffinity: {
                    Melee: 19 / 20,
                    Magic: 19 / 20,
                    Range: 1,
                    Piercing: 97 / 100,
                    Blunt: 99 / 100,
                    Slashing: 1.04,
                },
                armorBonus: { protection: 20, resistance: -3, agility: 8, stamina: 0 },
                augmentationBonus: [
                    { stat: 'armorBonus.protection', value: 0.5 },
                    { stat: 'armorBonus.agility', value: 0.1 },
                ],
            },
            requiredResources: [{ 206: 3000 }],
            rarity: 'uncommon',
        },
        1096: {
            name: 'Mithril Breastplate',
            id: 1096,
            enchantmentTier: 3,
            augmentationCost: { 204: 23 },
            craftingLevel: 35,
            craftingExperience: 4025,
            value: 91000,
            tradeable: true,
            requiredLevel: { constitution: 1, attack: 1, strength: 1, defense: 30 },



            itemImage: '/images/combat/equipment/mithril_platebody.png',
            class: 'equipment',
            visual: 'platebody',
            craftingDescription: 'Requires Defense level of 30 to wield.',
            category: 'Melee',
            tags: ['armor', 'melee', 'crafting'],
            equipmentStats: {
                slot: 'body',
                defensiveCritical: { chance: 0.1, damageMultiplier: 0.8 },
                defensiveDamageAffinity: {
                    Melee: 1.13,
                    Magic: 47 / 50,
                    Range: 1.06,
                    Piercing: 1.13,
                    Blunt: 47 / 50,
                    Slashing: 1.13,
                },
                armorBonus: { protection: 57, resistance: -6, agility: -6, stamina: 10 },
                augmentationBonus: [
                    { stat: 'armorBonus.protection', value: 1 },
                    { stat: 'armorBonus.stamina', value: 0.1 },
                ],
                itemSet: [10009],
            },
            requiredResources: [{ 204: 230 }],
        },
        1097: {
            name: 'Mithril Chainmail',
            id: 1097,
            enchantmentTier: 3,
            augmentationCost: { 204: 16 },
            craftingLevel: 31,
            craftingExperience: 2903,
            value: 65000,
            tradeable: true,
            requiredLevel: { constitution: 1, attack: 1, strength: 1, defense: 30 },



            itemImage: '/images/combat/equipment/mithril_chainbody.png',
            class: 'equipment',
            visual: 'chainbody',
            craftingDescription: 'Requires Defense level of 30 to wield.',
            category: 'Melee',
            tags: ['armor', 'crafting'],
            equipmentStats: {
                slot: 'body',
                defensiveDamageAffinity: {
                    Melee: 19 / 20,
                    Magic: 19 / 20,
                    Range: 1,
                    Piercing: 97 / 100,
                    Blunt: 99 / 100,
                    Slashing: 1.04,
                },
                armorBonus: { protection: 35, resistance: -3, agility: 12, stamina: 0 },
                augmentationBonus: [
                    { stat: 'armorBonus.protection', value: 3 / 4 },
                    { stat: 'armorBonus.agility', value: 0.1 },
                ],
            },
            requiredResources: [{ 204: 160 }],
        },
        1098: {
            name: 'Adamantite Breastplate',
            id: 1098,
            enchantmentTier: 4,
            augmentationCost: { 205: 32 },
            craftingLevel: 52,
            craftingExperience: 11745,
            value: 768000,
            tradeable: true,
            requiredLevel: { constitution: 1, attack: 1, strength: 1, defense: 40 },



            itemImage: '/images/combat/equipment/adamantite_platebody.png',
            class: 'equipment',
            visual: 'platebody',
            craftingDescription: 'Requires Defense level of 40 to wield.',
            category: 'Melee',
            tags: ['armor', 'melee', 'crafting'],
            equipmentStats: {
                slot: 'body',
                defensiveCritical: { chance: 0.1, damageMultiplier: 0.8 },
                defensiveDamageAffinity: {
                    Melee: 1.13,
                    Magic: 47 / 50,
                    Range: 1.06,
                    Piercing: 1.13,
                    Blunt: 47 / 50,
                    Slashing: 1.13,
                },
                armorBonus: { protection: 83, resistance: -6, agility: -6, stamina: 11 },
                augmentationBonus: [
                    { stat: 'armorBonus.protection', value: 1.5 },
                    { stat: 'armorBonus.stamina', value: 0.1 },
                ],
                itemSet: [10009],
            },
            requiredResources: [{ 205: 320 }],
            rarity: 'uncommon',
        },
        1099: {
            name: 'Adamantite Chainmail',
            id: 1099,
            enchantmentTier: 4,
            augmentationCost: { 205: 24 },
            craftingLevel: 47,
            craftingExperience: 8876,
            value: 576000,
            tradeable: true,
            requiredLevel: { constitution: 1, attack: 1, strength: 1, defense: 40 },



            itemImage: '/images/combat/equipment/adamantite_chainbody.png',
            class: 'equipment',
            visual: 'chainbody',
            craftingDescription: 'Requires Defense level of 40 to wield.',
            category: 'Melee',
            tags: ['armor', 'crafting'],
            equipmentStats: {
                slot: 'body',
                defensiveDamageAffinity: {
                    Melee: 19 / 20,
                    Magic: 19 / 20,
                    Range: 1,
                    Piercing: 97 / 100,
                    Blunt: 99 / 100,
                    Slashing: 1.04,
                },
                armorBonus: { protection: 51, resistance: -3, agility: 16, stamina: 0 },
                augmentationBonus: [
                    { stat: 'armorBonus.protection', value: 1 },
                    { stat: 'armorBonus.agility', value: 0.1 },
                ],
            },
            requiredResources: [{ 205: 240 }],
            rarity: 'uncommon',
        },
        1100: {
            name: 'Runite Breastplate',
            id: 1100,
            enchantmentTier: 5,
            augmentationCost: { 206: 41 },
            craftingLevel: 62,
            craftingExperience: 27392,
            value: 2916000,
            tradeable: true,
            requiredLevel: { constitution: 1, attack: 1, strength: 1, defense: 50 },



            itemImage: '/images/combat/equipment/rune_platebody.png',
            class: 'equipment',
            visual: 'platebody',
            craftingDescription: 'Requires Defense level of 50 to wield.',
            category: 'Melee',
            tags: ['armor', 'melee', 'crafting'],
            equipmentStats: {
                slot: 'body',
                defensiveCritical: { chance: 0.1, damageMultiplier: 0.8 },
                defensiveDamageAffinity: {
                    Melee: 1.13,
                    Magic: 47 / 50,
                    Range: 1.06,
                    Piercing: 1.13,
                    Blunt: 47 / 50,
                    Slashing: 1.13,
                },
                armorBonus: { protection: 112, resistance: -6, agility: -6, stamina: 12 },
                augmentationBonus: [
                    { stat: 'armorBonus.protection', value: 1.5 },
                    { stat: 'armorBonus.stamina', value: 0.1 },
                ],
                itemSet: [10009],
            },
            requiredResources: [{ 206: 405 }],
            rarity: 'uncommon',
        },
        1101: {
            name: 'Runite Chainmail',
            id: 1101,
            enchantmentTier: 5,
            augmentationCost: { 206: 32 },
            craftingLevel: 57,
            craftingExperience: 21280,
            value: 2268000,
            tradeable: true,
            requiredLevel: { constitution: 1, attack: 1, strength: 1, defense: 50 },



            itemImage: '/images/combat/equipment/rune_chainbody.png',
            class: 'equipment',
            visual: 'chainbody',
            craftingDescription: 'Requires Defense level of 50 to wield.',
            category: 'Melee',
            tags: ['armor', 'crafting'],
            equipmentStats: {
                slot: 'body',
                defensiveDamageAffinity: {
                    Melee: 19 / 20,
                    Magic: 19 / 20,
                    Range: 1,
                    Piercing: 97 / 100,
                    Blunt: 99 / 100,
                    Slashing: 1.04,
                },
                armorBonus: { protection: 69, resistance: -3, agility: 20, stamina: 0 },
                augmentationBonus: [
                    { stat: 'armorBonus.protection', value: 1.25 },
                    { stat: 'armorBonus.agility', value: 0.1 },
                ],
            },
            requiredResources: [{ 206: 315 }],
            rarity: 'uncommon',
        },
        1102: {
            name: 'Stygian Breastplate',
            id: 1102,
            enchantmentTier: 6,
            augmentationCost: { 207: 50, 800: 10 },
            craftingLevel: 72,
            craftingExperience: 74057,
            value: 4800000,
            tradeable: true,
            requiredLevel: { constitution: 1, attack: 1, strength: 1, defense: 60 },



            itemImage: '/images/combat/equipment/stygian_platebody.png',
            class: 'equipment',
            visual: 'platebody',
            craftingDescription: 'Requires Defense level of 60 to wield.',
            category: 'Melee',
            tags: ['armor', 'melee', 'crafting'],
            equipmentStats: {
                slot: 'body',
                defensiveCritical: { chance: 0.1, damageMultiplier: 0.8 },
                defensiveDamageAffinity: {
                    Melee: 1.13,
                    Magic: 47 / 50,
                    Range: 1.06,
                    Piercing: 1.13,
                    Blunt: 47 / 50,
                    Slashing: 1.13,
                },
                armorBonus: { protection: 143, resistance: -6, agility: -6, stamina: 13 },
                augmentationBonus: [
                    { stat: 'armorBonus.protection', value: 1.75 },
                    { stat: 'armorBonus.stamina', value: 0.1 },
                ],
                itemSet: [10009],
            },
            requiredResources: [{ 207: 500, 800: 100 }],
            rarity: 'rare',
        },
        1103: {
            name: 'Stygian Chainmail',
            id: 1103,
            enchantmentTier: 6,
            augmentationCost: { 207: 40, 800: 8 },
            craftingLevel: 67,
            craftingExperience: 59372,
            value: 3840000,
            tradeable: true,
            requiredLevel: { constitution: 1, attack: 1, strength: 1, defense: 60 },



            itemImage: '/images/combat/equipment/stygian_chainbody.png',
            class: 'equipment',
            visual: 'chainbody',
            craftingDescription: 'Requires Defense level of 60 to wield.',
            category: 'Melee',
            tags: ['armor', 'crafting'],
            equipmentStats: {
                slot: 'body',
                defensiveDamageAffinity: {
                    Melee: 19 / 20,
                    Magic: 19 / 20,
                    Range: 1,
                    Piercing: 97 / 100,
                    Blunt: 99 / 100,
                    Slashing: 1.04,
                },
                armorBonus: { protection: 88, resistance: -3, agility: 24, stamina: 0 },
                augmentationBonus: [
                    { stat: 'armorBonus.protection', value: 1 },
                    { stat: 'armorBonus.agility', value: 0.1 },
                ],
            },
            requiredResources: [{ 207: 400, 800: 80 }],
            rarity: 'rare',
        },
        1110: {
            name: 'Bronze Plate Leggings',
            id: 1110,
            enchantmentTier: 1,
            augmentationCost: { 201: 4 },
            craftingLevel: 11,
            craftingExperience: 82,
            value: 800,
            tradeable: true,
            requiredLevel: { constitution: 1, attack: 1, strength: 1, defense: 1 },



            itemImage: '/images/combat/equipment/bronze_platelegs.png',
            class: 'equipment',
            visual: 'platelegs',
            craftingDescription: 'Requires Defense level of 1 to wield.',
            category: 'Melee',
            tags: ['armor', 'melee', 'crafting'],
            equipmentStats: {
                slot: 'legs',
                defensiveCritical: { chance: 0.1, damageMultiplier: 0.8 },
                defensiveDamageAffinity: {
                    Melee: 1.08,
                    Magic: 47 / 50,
                    Range: 1.06,
                    Piercing: 1.08,
                    Blunt: 47 / 50,
                    Slashing: 1.08,
                },
                armorBonus: { protection: 5, resistance: -4, agility: -4, stamina: 4.75 },
                augmentationBonus: [
                    { stat: 'armorBonus.protection', value: 0.1 },
                    { stat: 'armorBonus.stamina', value: 0.1 },
                ],
                itemSet: [10009],
            },
            requiredResources: [{ 201: 40 }],
        },
        1111: {
            name: 'Iron Plate Leggings',
            id: 1111,
            enchantmentTier: 2,
            augmentationCost: { 202: 8 },
            craftingLevel: 17,
            craftingExperience: 246,
            value: 6000,
            tradeable: true,
            requiredLevel: { constitution: 1, attack: 1, strength: 1, defense: 10 },



            itemImage: '/images/combat/equipment/iron_platelegs.png',
            class: 'equipment',
            visual: 'platelegs',
            craftingDescription: 'Requires Defense level of 10 to wield.',
            category: 'Melee',
            tags: ['armor', 'melee', 'crafting'],
            equipmentStats: {
                slot: 'legs',
                defensiveCritical: { chance: 0.1, damageMultiplier: 0.8 },
                defensiveDamageAffinity: {
                    Melee: 1.08,
                    Magic: 47 / 50,
                    Range: 1.06,
                    Piercing: 1.08,
                    Blunt: 47 / 50,
                    Slashing: 1.08,
                },
                armorBonus: { protection: 7, resistance: -4, agility: -4, stamina: 5 },
                augmentationBonus: [
                    { stat: 'armorBonus.protection', value: 1 / 4 },
                    { stat: 'armorBonus.stamina', value: 0.1 },
                ],
                itemSet: [10009],
            },
            requiredResources: [{ 202: 75 }],
        },
        1112: {
            name: 'Obsidian Plate Leggings',
            id: 1112,
            enchantmentTier: 5,
            augmentationCost: { 202: 15, 204: 15, 209: 1 },
            craftingLevel: 1,
            craftingExperience: 1,
            value: 92000,
            tradeable: true,
            requiredLevel: { constitution: 1, attack: 1, strength: 1, defense: 20 },



            itemImage: '/images/combat/equipment/black_platelegs.png',
            class: 'equipment',
            visual: 'platelegs',
            tags: ['armor', 'melee', 'crafting'],
            equipmentStats: {
                slot: 'legs',
                defensiveCritical: { chance: 0.1, damageMultiplier: 0.8 },
                defensiveDamageAffinity: {
                    Melee: 1.08,
                    Magic: 47 / 50,
                    Range: 1.06,
                    Piercing: 1.08,
                    Blunt: 47 / 50,
                    Slashing: 1.08,
                },
                armorBonus: { protection: 18, resistance: -4, agility: -4, stamina: 6 },
                augmentationBonus: [
                    { stat: 'armorBonus.protection', value: 0.5 },
                    { stat: 'armorBonus.stamina', value: 0.1 },
                ],
                itemSet: [10009],
            },
            requiredResources: [{ 201: 10 }],
            rarity: 'uncommon',
        },
        1113: {
            name: 'Mithril Plate Leggings',
            id: 1113,
            enchantmentTier: 3,
            augmentationCost: { 204: 13 },
            craftingLevel: 34,
            craftingExperience: 2306,
            value: 52000,
            tradeable: true,
            requiredLevel: { constitution: 1, attack: 1, strength: 1, defense: 30 },



            itemImage: '/images/combat/equipment/mithril_platelegs.png',
            class: 'equipment',
            visual: 'platelegs',
            craftingDescription: 'Requires Defense level of 30 to wield.',
            category: 'Melee',
            tags: ['armor', 'melee', 'crafting'],
            equipmentStats: {
                slot: 'legs',
                defensiveCritical: { chance: 0.1, damageMultiplier: 0.8 },
                defensiveDamageAffinity: {
                    Melee: 1.08,
                    Magic: 47 / 50,
                    Range: 1.06,
                    Piercing: 1.08,
                    Blunt: 47 / 50,
                    Slashing: 1.08,
                },
                armorBonus: { protection: 31, resistance: -4, agility: -4, stamina: 7 },
                augmentationBonus: [
                    { stat: 'armorBonus.protection', value: 3 / 4 },
                    { stat: 'armorBonus.stamina', value: 0.1 },
                ],
                itemSet: [10009],
            },
            requiredResources: [{ 204: 130 }],
        },
        1114: {
            name: 'Adamantite Plate Leggings',
            id: 1114,
            enchantmentTier: 4,
            augmentationCost: { 205: 20 },
            craftingLevel: 51,
            craftingExperience: 7418,
            value: 480000,
            tradeable: true,
            requiredLevel: { constitution: 1, attack: 1, strength: 1, defense: 40 },



            itemImage: '/images/combat/equipment/adamantite_platelegs.png',
            class: 'equipment',
            visual: 'platelegs',
            craftingDescription: 'Requires Defense level of 40 to wield.',
            category: 'Melee',
            tags: ['armor', 'melee', 'crafting'],
            equipmentStats: {
                slot: 'legs',
                defensiveCritical: { chance: 0.1, damageMultiplier: 0.8 },
                defensiveDamageAffinity: {
                    Melee: 1.08,
                    Magic: 47 / 50,
                    Range: 1.06,
                    Piercing: 1.08,
                    Blunt: 47 / 50,
                    Slashing: 1.08,
                },
                armorBonus: { protection: 45, resistance: -4, agility: -4, stamina: 8 },
                augmentationBonus: [
                    { stat: 'armorBonus.protection', value: 1 },
                    { stat: 'armorBonus.stamina', value: 0.1 },
                ],
                itemSet: [10009],
            },
            requiredResources: [{ 205: 200 }],
            rarity: 'uncommon',
        },
        1115: {
            name: 'Runite Plate Leggings',
            id: 1115,
            enchantmentTier: 5,
            augmentationCost: { 206: 27 },
            craftingLevel: 61,
            craftingExperience: 18385,
            value: 1944000,
            tradeable: true,
            requiredLevel: { constitution: 1, attack: 1, strength: 1, defense: 50 },



            itemImage: '/images/combat/equipment/rune_platelegs.png',
            class: 'equipment',
            visual: 'platelegs',
            craftingDescription: 'Requires Defense level of 50 to wield.',
            category: 'Melee',
            tags: ['armor', 'melee', 'crafting'],
            equipmentStats: {
                slot: 'legs',
                defensiveCritical: { chance: 0.1, damageMultiplier: 0.8 },
                defensiveDamageAffinity: {
                    Melee: 1.08,
                    Magic: 47 / 50,
                    Range: 1.06,
                    Piercing: 1.08,
                    Blunt: 47 / 50,
                    Slashing: 1.08,
                },
                armorBonus: { protection: 60, resistance: -4, agility: -4, stamina: 9 },
                augmentationBonus: [
                    { stat: 'armorBonus.protection', value: 1.25 },
                    { stat: 'armorBonus.stamina', value: 0.1 },
                ],
                itemSet: [10009],
            },
            requiredResources: [{ 206: 270 }],
            rarity: 'uncommon',
        },
        1116: {
            name: 'Stygian Plate Leggings',
            id: 1116,
            enchantmentTier: 6,
            augmentationCost: { 207: 35, 800: 7 },
            craftingLevel: 71,
            craftingExperience: 52185,
            value: 3360000,
            tradeable: true,
            requiredLevel: { constitution: 1, attack: 1, strength: 1, defense: 60 },



            itemImage: '/images/combat/equipment/stygian_platelegs.png',
            class: 'equipment',
            visual: 'platelegs',
            craftingDescription: 'Requires Defense level of 60 to wield.',
            category: 'Melee',
            tags: ['armor', 'melee', 'crafting'],
            equipmentStats: {
                slot: 'legs',
                defensiveCritical: { chance: 0.1, damageMultiplier: 0.8 },
                defensiveDamageAffinity: {
                    Melee: 1.08,
                    Magic: 47 / 50,
                    Range: 1.06,
                    Piercing: 1.08,
                    Blunt: 47 / 50,
                    Slashing: 1.08,
                },
                armorBonus: { protection: 77, resistance: -4, agility: -4, stamina: 10 },
                augmentationBonus: [
                    { stat: 'armorBonus.protection', value: 1.5 },
                    { stat: 'armorBonus.stamina', value: 0.1 },
                ],
                itemSet: [10009],
            },
            requiredResources: [{ 207: 350, 800: 70 }],
            rarity: 'rare',
        },
        1130: {
            name: 'Bronze Boots',
            id: 1130,
            enchantmentTier: 1,
            augmentationCost: { 201: 4 },
            craftingLevel: 1,
            craftingExperience: 1,
            value: 1000,
            tradeable: false,
            requiredLevel: { constitution: 1, attack: 1, strength: 1, defense: 1 },



            itemImage: '/images/combat/equipment/bronze_boots.png',
            itemIcon: '/images/combat/equipment/bronze_boots_icon.png',
            extraTooltipInfo: 'These boots cannot be traded.',
            class: 'equipment',
            visual: 'boots',
            tags: ['armor', 'crafting'],
            equipmentStats: {
                slot: 'boots',
                armorBonus: { protection: 6, resistance: 6, agility: 0, stamina: 0 },
                augmentationBonus: [
                    { stat: 'armorBonus.protection', value: 0.1 },
                    { stat: 'armorBonus.resistance', value: 0.1 },
                ],
            },
        },
        1131: {
            name: 'Iron Boots',
            id: 1131,
            enchantmentTier: 2,
            augmentationCost: { 202: 8 },
            craftingLevel: 1,
            craftingExperience: 1,
            value: 8000,
            tradeable: false,
            requiredLevel: { constitution: 1, attack: 1, strength: 1, defense: 1 },



            itemImage: '/images/combat/equipment/iron_boots.png',
            itemIcon: '/images/combat/equipment/iron_boots_icon.png',
            extraTooltipInfo: 'These boots cannot be traded.',
            class: 'equipment',
            visual: 'boots',
            tags: ['armor', 'crafting'],
            equipmentStats: {
                slot: 'boots',
                armorBonus: { protection: 8, resistance: 8, agility: 0, stamina: 0 },
                augmentationBonus: [
                    { stat: 'armorBonus.protection', value: 0.1 },
                    { stat: 'armorBonus.resistance', value: 0.1 },
                ],
            },
        },
        1132: {
            name: 'Obsidian Boots',
            id: 1132,
            enchantmentTier: 5,
            augmentationCost: { 202: 10, 204: 10, 209: 1 },
            craftingLevel: 1,
            craftingExperience: 1,
            value: 68000,
            tradeable: true,
            requiredLevel: { constitution: 1, attack: 1, strength: 1, defense: 1 },



            itemImage: '/images/combat/equipment/black_boots.png',
            itemIcon: '/images/combat/equipment/black_boots_icon.png',
            class: 'equipment',
            visual: 'boots',
            tags: ['armor', 'crafting'],
            equipmentStats: {
                slot: 'boots',
                armorBonus: { protection: 10, resistance: 10, agility: 0, stamina: 0 },
                augmentationBonus: [
                    { stat: 'armorBonus.protection', value: 0.1 },
                    { stat: 'armorBonus.resistance', value: 0.1 },
                ],
            },
            rarity: 'uncommon',
        },
        1133: {
            name: 'Mithril Boots',
            id: 1133,
            enchantmentTier: 3,
            augmentationCost: { 204: 13 },
            craftingLevel: 1,
            craftingExperience: 1,
            value: 60000,
            tradeable: false,
            requiredLevel: { constitution: 1, attack: 1, strength: 1, defense: 1 },



            itemImage: '/images/combat/equipment/mithril_boots.png',
            itemIcon: '/images/combat/equipment/mithril_boots_icon.png',
            extraTooltipInfo: 'These boots cannot be traded.',
            class: 'equipment',
            visual: 'boots',
            tags: ['armor', 'crafting'],
            equipmentStats: {
                slot: 'boots',
                armorBonus: { protection: 12, resistance: 12, agility: 0, stamina: 0 },
                augmentationBonus: [
                    { stat: 'armorBonus.protection', value: 0.1 },
                    { stat: 'armorBonus.resistance', value: 0.1 },
                ],
            },
        },
        1134: {
            name: 'Adamantite Boots',
            id: 1134,
            enchantmentTier: 4,
            augmentationCost: { 205: 20 },
            craftingLevel: 1,
            craftingExperience: 1,
            value: 480000,
            tradeable: false,
            requiredLevel: { constitution: 1, attack: 1, strength: 1, defense: 1 },



            itemImage: '/images/combat/equipment/adamantite_boots.png',
            itemIcon: '/images/combat/equipment/adamantite_boots_icon.png',
            extraTooltipInfo: 'These boots cannot be traded.',
            class: 'equipment',
            visual: 'boots',
            tags: ['armor', 'melee', 'crafting'],
            equipmentStats: {
                slot: 'boots',
                armorBonus: { protection: 14, resistance: 14, agility: 0, stamina: 0 },
                augmentationBonus: [
                    { stat: 'armorBonus.protection', value: 0.1 },
                    { stat: 'armorBonus.resistance', value: 0.1 },
                ],
            },
            rarity: 'uncommon',
        },
        1135: {
            name: 'Runite Boots',
            id: 1135,
            enchantmentTier: 5,
            augmentationCost: { 206: 28 },
            craftingLevel: 1,
            craftingExperience: 1,
            value: 1800000,
            tradeable: false,
            requiredLevel: { constitution: 1, attack: 1, strength: 1, defense: 1 },



            itemImage: '/images/combat/equipment/rune_boots.png',
            itemIcon: '/images/combat/equipment/rune_boots_icon.png',
            extraTooltipInfo: 'These boots cannot be traded.',
            class: 'equipment',
            visual: 'boots',
            tags: ['armor', 'melee', 'crafting'],
            equipmentStats: {
                slot: 'boots',
                armorBonus: { protection: 16, resistance: 16, agility: 0, stamina: 0 },
                augmentationBonus: [
                    { stat: 'armorBonus.protection', value: 0.1 },
                    { stat: 'armorBonus.resistance', value: 0.1 },
                ],
            },
            rarity: 'uncommon',
        },
        1136: {
            name: 'Stygian Boots',
            id: 1136,
            enchantmentTier: 6,
            augmentationCost: { 207: 35, 800: 5 },
            value: 2880000,
            tradeable: false,
            requiredLevel: { constitution: 1, attack: 1, strength: 1, defense: 1 },



            itemImage: '/images/combat/equipment/stygian_boots.png',
            itemIcon: '/images/combat/equipment/stygian_boots_icon.png',
            extraTooltipInfo: 'These boots cannot be traded.',
            class: 'equipment',
            visual: 'boots',
            tags: ['armor', 'melee', 'crafting'],
            equipmentStats: {
                slot: 'boots',
                armorBonus: { protection: 18, resistance: 18, agility: 0, stamina: 0 },
                augmentationBonus: [
                    { stat: 'armorBonus.protection', value: 0.1 },
                    { stat: 'armorBonus.resistance', value: 0.1 },
                ],
            },
            rarity: 'rare',
        },
        1150: {
            name: 'Bronze Gloves',
            id: 1150,
            enchantmentTier: 1,
            augmentationCost: { 201: 8 },
            craftingLevel: 1,
            craftingExperience: 1,
            value: 20,
            tradeable: false,



            itemImage: '/images/combat/equipment/bronze_gloves.png',
            itemIcon: '/images/combat/equipment/bronze_gloves.png',
            extraTooltipInfo: 'Gloves cannot be traded.',
            class: 'equipment',
            visual: 'gloves',
            tags: ['armor', 'melee', 'crafting'],
            equipmentStats: {
                slot: 'gloves',
                weaponBonus: { strength: 2, intellect: 2, dexterity: 2 },
                offensiveAccuracyAffinityRating: { Melee: 2, Magic: 2, Range: 2 },
                defensiveDamageAffinity: { Melee: 1.01, Magic: 1.01, Range: 1.01 },
                armorBonus: { protection: 4, resistance: 4, agility: 0, stamina: 0 },
                augmentationBonus: [
                    { stat: 'armorBonus.protection', value: 0.1 },
                    { stat: 'armorBonus.resistance', value: 0.1 },
                    { stat: 'weaponBonus.strength', value: 0.1 },
                    { stat: 'weaponBonus.intellect', value: 0.1 },
                    { stat: 'weaponBonus.dexterity', value: 0.1 },
                ],
            },
        },
        1151: {
            name: 'Iron Gloves',
            id: 1151,
            enchantmentTier: 2,
            augmentationCost: { 202: 13 },
            craftingLevel: 1,
            craftingExperience: 1,
            value: 600,
            tradeable: false,



            itemImage: '/images/combat/equipment/iron_gloves.png',
            itemIcon: '/images/combat/equipment/iron_gloves.png',
            extraTooltipInfo: 'Gloves cannot be traded.',
            class: 'equipment',
            visual: 'gloves',
            tags: ['armor', 'melee', 'crafting'],
            equipmentStats: {
                slot: 'gloves',
                weaponBonus: { strength: 3, intellect: 3, dexterity: 3 },
                offensiveAccuracyAffinityRating: { Melee: 3, Magic: 3, Range: 3 },
                defensiveDamageAffinity: { Melee: 1.02, Magic: 1.02, Range: 1.02 },
                armorBonus: { protection: 6, resistance: 6, agility: 0, stamina: 0 },
                augmentationBonus: [
                    { stat: 'armorBonus.protection', value: 0.1 },
                    { stat: 'armorBonus.resistance', value: 0.1 },
                    { stat: 'weaponBonus.strength', value: 0.1 },
                    { stat: 'weaponBonus.intellect', value: 0.1 },
                    { stat: 'weaponBonus.dexterity', value: 0.1 },
                ],
            },
        },
        1152: {
            name: 'Obsidian Gloves',
            id: 1152,
            enchantmentTier: 5,
            augmentationCost: { 202: 20, 204: 20, 209: 1 },
            craftingLevel: 1,
            craftingExperience: 1,
            value: 8000,
            tradeable: false,



            itemImage: '/images/combat/equipment/black_gloves.png',
            itemIcon: '/images/combat/equipment/black_gloves.png',
            extraTooltipInfo: 'Gloves cannot be traded.',
            class: 'equipment',
            visual: 'gloves',
            tags: ['armor', 'melee', 'crafting'],
            equipmentStats: {
                slot: 'gloves',
                weaponBonus: { strength: 5, intellect: 5, dexterity: 5 },
                offensiveAccuracyAffinityRating: { Melee: 5, Magic: 5, Range: 5 },
                defensiveDamageAffinity: { Melee: 1.02, Magic: 1.02, Range: 1.02 },
                armorBonus: { protection: 10, resistance: 10, agility: 0, stamina: 0 },
                augmentationBonus: [
                    { stat: 'armorBonus.protection', value: 0.1 },
                    { stat: 'armorBonus.resistance', value: 0.1 },
                    { stat: 'weaponBonus.strength', value: 0.1 },
                    { stat: 'weaponBonus.intellect', value: 0.1 },
                    { stat: 'weaponBonus.dexterity', value: 0.1 },
                ],
            },
            rarity: 'uncommon',
        },
        1153: {
            name: 'Mithril Gloves',
            id: 1153,
            enchantmentTier: 3,
            augmentationCost: { 204: 20 },
            craftingLevel: 1,
            craftingExperience: 1,
            value: 50000,
            tradeable: false,



            itemImage: '/images/combat/equipment/mithril_gloves.png',
            itemIcon: '/images/combat/equipment/mithril_gloves.png',
            extraTooltipInfo: 'Gloves cannot be traded.',
            class: 'equipment',
            visual: 'gloves',
            tags: ['armor', 'melee', 'crafting'],
            equipmentStats: {
                slot: 'gloves',
                weaponBonus: { strength: 6, intellect: 6, dexterity: 6 },
                offensiveAccuracyAffinityRating: { Melee: 6, Magic: 6, Range: 6 },
                defensiveDamageAffinity: { Melee: 1.02, Magic: 1.02, Range: 1.02 },
                armorBonus: { protection: 12, resistance: 12, agility: 0, stamina: 0 },
                augmentationBonus: [
                    { stat: 'armorBonus.protection', value: 0.1 },
                    { stat: 'armorBonus.resistance', value: 0.1 },
                    { stat: 'weaponBonus.strength', value: 0.1 },
                    { stat: 'weaponBonus.intellect', value: 0.1 },
                    { stat: 'weaponBonus.dexterity', value: 0.1 },
                ],
            },
        },
        1154: {
            name: 'Adamantite Gloves',
            id: 1154,
            enchantmentTier: 4,
            augmentationCost: { 205: 28 },
            craftingLevel: 1,
            craftingExperience: 1,
            value: 300000,
            tradeable: false,



            itemImage: '/images/combat/equipment/adamantite_gloves.png',
            itemIcon: '/images/combat/equipment/adamantite_gloves.png',
            extraTooltipInfo: 'Gloves cannot be traded.',
            class: 'equipment',
            visual: 'gloves',
            tags: ['armor', 'melee', 'crafting'],
            equipmentStats: {
                slot: 'gloves',
                weaponBonus: { strength: 7, intellect: 7, dexterity: 7 },
                offensiveAccuracyAffinityRating: { Melee: 7, Magic: 7, Range: 7 },
                defensiveDamageAffinity: { Melee: 1.02, Magic: 1.02, Range: 1.02 },
                armorBonus: { protection: 14, resistance: 14, agility: 0, stamina: 0 },
                augmentationBonus: [
                    { stat: 'armorBonus.protection', value: 0.1 },
                    { stat: 'armorBonus.resistance', value: 0.1 },
                    { stat: 'weaponBonus.strength', value: 0.1 },
                    { stat: 'weaponBonus.intellect', value: 0.1 },
                    { stat: 'weaponBonus.dexterity', value: 0.1 },
                ],
            },
            rarity: 'uncommon',
        },
        1155: {
            name: 'Runite Gloves',
            id: 1155,
            enchantmentTier: 5,
            augmentationCost: { 206: 36 },
            craftingLevel: 1,
            craftingExperience: 1,
            value: 1500000,
            tradeable: false,



            itemImage: '/images/combat/equipment/rune_gloves.png',
            itemIcon: '/images/combat/equipment/rune_gloves.png',
            extraTooltipInfo: 'Gloves cannot be traded.',
            class: 'equipment',
            visual: 'gloves',
            tags: ['armor', 'melee', 'crafting'],
            equipmentStats: {
                slot: 'gloves',
                weaponBonus: { strength: 8, intellect: 8, dexterity: 8 },
                offensiveAccuracyAffinityRating: { Melee: 8, Magic: 8, Range: 8 },
                defensiveDamageAffinity: { Melee: 1.02, Magic: 1.02, Range: 1.02 },
                armorBonus: { protection: 16, resistance: 16, agility: 0, stamina: 0 },
                augmentationBonus: [
                    { stat: 'armorBonus.protection', value: 0.1 },
                    { stat: 'armorBonus.resistance', value: 0.1 },
                    { stat: 'weaponBonus.strength', value: 0.1 },
                    { stat: 'weaponBonus.intellect', value: 0.1 },
                    { stat: 'weaponBonus.dexterity', value: 0.1 },
                ],
            },
            rarity: 'uncommon',
        },
        1156: {
            name: 'Stygian Gloves',
            id: 1156,
            enchantmentTier: 6,
            augmentationCost: { 207: 70, 800: 10 },
            value: 5000000,



            itemImage: '/images/combat/equipment/stygian_gloves.png',
            extraTooltipInfo: 'Gloves cannot be traded.',
            class: 'equipment',
            visual: 'gloves',
            tags: ['armor', 'melee', 'crafting'],
            equipmentStats: {
                slot: 'gloves',
                weaponBonus: { strength: 9, intellect: 9, dexterity: 9 },
                offensiveAccuracyAffinityRating: { Melee: 9, Magic: 9, Range: 9 },
                defensiveDamageAffinity: { Melee: 1.03, Magic: 1.03, Range: 1.03 },
                armorBonus: { protection: 18, resistance: 18, agility: 0, stamina: 0 },
                augmentationBonus: [
                    { stat: 'armorBonus.protection', value: 0.1 },
                    { stat: 'armorBonus.resistance', value: 0.1 },
                    { stat: 'weaponBonus.strength', value: 0.1 },
                    { stat: 'weaponBonus.intellect', value: 0.1 },
                    { stat: 'weaponBonus.dexterity', value: 0.1 },
                ],
            },
            rarity: 'rare',
        },
        1157: {
            name: 'Hide Body',
            id: 1157,
            enchantmentTier: 1,
            augmentationCost: { 4007: 8 },
            craftingLevel: 3,
            craftingExperience: 96,
            value: 3600,
            tradeable: true,
            requiredLevel: { constitution: 1, attack: 1, strength: 1, defense: 1 },



            itemImage: '/images/combat/equipment/range/hide_body.png',
            class: 'equipment',
            visual: 'rangebody',
            craftingDescription: 'Requires Defense level of 1 to wield.',
            tags: ['armor', 'range', 'crafting'],
            equipmentStats: {
                slot: 'body',
                defensiveDamageAffinity: {
                    Melee: 47 / 50,
                    Magic: 47 / 50,
                    Range: 1.06,
                    Piercing: 24 / 25,
                    Blunt: 97 / 100,
                    Slashing: 1,
                },
                armorBonus: { protection: 3, resistance: 0, agility: 5, stamina: 0 },
                augmentationBonus: [
                    { stat: 'armorBonus.protection', value: 0.1 },
                    { stat: 'armorBonus.agility', value: 0.1 },
                ],
                itemSet: [10010, 10012],
            },
            requiredResources: [{ 4007: 80 }],
            category: 'Range',
        },
        1158: {
            name: 'Fur Body',
            id: 1158,
            enchantmentTier: 1,
            augmentationCost: { 4007: 8 },
            craftingLevel: 6,
            craftingExperience: 162,
            value: 10800,
            tradeable: true,
            requiredLevel: { constitution: 1, attack: 1, strength: 1, defense: 10 },



            itemImage: '/images/combat/equipment/range/fur_body.png',
            class: 'equipment',
            visual: 'rangebody',
            craftingDescription: 'Requires Defense level of 10 to wield.',
            tags: ['armor', 'range', 'crafting'],
            equipmentStats: {
                slot: 'body',
                defensiveDamageAffinity: {
                    Melee: 47 / 50,
                    Magic: 47 / 50,
                    Range: 1.06,
                    Piercing: 24 / 25,
                    Blunt: 97 / 100,
                    Slashing: 1,
                },
                armorBonus: { protection: 5, resistance: 0, agility: 6, stamina: 0 },
                augmentationBonus: [
                    { stat: 'armorBonus.protection', value: 1 / 4 },
                    { stat: 'armorBonus.agility', value: 0.1 },
                ],
                itemSet: [10010, 10012],
            },
            requiredResources: [{ 4004: 80 }],
            category: 'Range',
        },
        1159: {
            name: 'Thick Hide Body',
            id: 1159,
            enchantmentTier: 2,
            augmentationCost: { 4004: 10, 4008: 3 },
            craftingLevel: 13,
            craftingExperience: 441,
            value: 16875,
            tradeable: true,
            requiredLevel: { constitution: 1, attack: 1, strength: 1, defense: 20 },



            itemImage: '/images/combat/equipment/range/thick_hide_body.png',
            class: 'equipment',
            visual: 'platebody',
            craftingDescription: 'Requires Defense level of 10 to wield.',
            tags: ['armor', 'range', 'crafting'],
            equipmentStats: {
                slot: 'body',
                defensiveDamageAffinity: {
                    Melee: 47 / 50,
                    Magic: 47 / 50,
                    Range: 1.06,
                    Piercing: 24 / 25,
                    Blunt: 97 / 100,
                    Slashing: 1,
                },
                armorBonus: { protection: 13, resistance: 0, agility: 12, stamina: 0 },
                augmentationBonus: [
                    { stat: 'armorBonus.protection', value: 0.5 },
                    { stat: 'armorBonus.agility', value: 0.1 },
                ],
                itemSet: [10010, 10012],
            },
            requiredResources: [{ 4004: 100, 4008: 30 }],
            category: 'Range',
        },
        1160: {
            name: 'Leather Body',
            id: 1160,
            enchantmentTier: 3,
            augmentationCost: { 4012: 18 },
            craftingLevel: 21,
            craftingExperience: 1291,
            value: 48600,
            tradeable: true,
            requiredLevel: { constitution: 1, attack: 1, strength: 1, defense: 30 },



            itemImage: '/images/combat/equipment/range/leather_body.png',
            class: 'equipment',
            visual: 'platebody',
            craftingDescription: 'Requires Defense level of 10 to wield.',
            tags: ['armor', 'range', 'crafting'],
            equipmentStats: {
                slot: 'body',
                defensiveDamageAffinity: {
                    Melee: 47 / 50,
                    Magic: 47 / 50,
                    Range: 1.06,
                    Piercing: 24 / 25,
                    Blunt: 97 / 100,
                    Slashing: 1,
                },
                armorBonus: { protection: 22, resistance: 0, agility: 18, stamina: 0 },
                augmentationBonus: [
                    { stat: 'armorBonus.protection', value: 3 / 4 },
                    { stat: 'armorBonus.agility', value: 0.1 },
                ],
                itemSet: [10010, 10012],
            },
            requiredResources: [{ 4012: 180 }],
            category: 'Range',
        },
        1161: {
            name: 'Reinforced Leather Body',
            id: 1161,
            enchantmentTier: 4,
            augmentationCost: { 4005: 3, 4012: 23 },
            craftingLevel: 31,
            craftingExperience: 4115,
            value: 67433,
            tradeable: true,
            requiredLevel: { constitution: 1, attack: 1, strength: 1, defense: 40 },



            itemImage: '/images/combat/equipment/range/reinforced_leather_body.png',
            class: 'equipment',
            visual: 'platebody',
            craftingDescription: 'Requires Defense level of 10 to wield.',
            tags: ['armor', 'range', 'crafting'],
            equipmentStats: {
                slot: 'body',
                defensiveDamageAffinity: {
                    Melee: 47 / 50,
                    Magic: 47 / 50,
                    Range: 1.06,
                    Piercing: 24 / 25,
                    Blunt: 97 / 100,
                    Slashing: 1,
                },
                armorBonus: { protection: 32, resistance: 0, agility: 24, stamina: 0 },
                augmentationBonus: [
                    { stat: 'armorBonus.protection', value: 1 },
                    { stat: 'armorBonus.agility', value: 0.1 },
                ],
                itemSet: [10010, 10012],
            },
            requiredResources: [{ 4005: 33, 4012: 225 }],
            category: 'Range',
        },
        1162: {
            name: 'Chitin Body',
            id: 1162,
            enchantmentTier: 5,
            augmentationCost: { 4002: 15, 4003: 3 },
            craftingLevel: 44,
            craftingExperience: 14162,
            value: 455625,
            tradeable: true,
            requiredLevel: { constitution: 1, attack: 1, strength: 1, defense: 50 },



            itemImage: '/images/combat/equipment/range/chitin_body.png',
            class: 'equipment',
            visual: 'platebody',
            craftingDescription: 'Requires Defense level of 10 to wield.',
            tags: ['armor', 'range', 'crafting'],
            equipmentStats: {
                slot: 'body',
                defensiveDamageAffinity: {
                    Melee: 47 / 50,
                    Magic: 47 / 50,
                    Range: 1.06,
                    Piercing: 24 / 25,
                    Blunt: 97 / 100,
                    Slashing: 1,
                },
                armorBonus: { protection: 43, resistance: 0, agility: 30, stamina: 0 },
                augmentationBonus: [
                    { stat: 'armorBonus.protection', value: 1.25 },
                    { stat: 'armorBonus.agility', value: 0.1 },
                ],
                itemSet: [10010, 10012],
            },
            requiredResources: [{ 4002: 150, 4003: 25 }],
            category: 'Range',
            rarity: 'uncommon',
        },
        1163: {
            name: 'Scale Body',
            id: 1163,
            enchantmentTier: 6,
            augmentationCost: { 4009: 20, 4010: 3 },
            craftingLevel: 61,
            craftingExperience: 52107,
            value: 272250,
            tradeable: true,
            requiredLevel: { constitution: 1, attack: 1, strength: 1, defense: 60 },



            itemImage: '/images/combat/equipment/range/scale_body.png',
            class: 'equipment',
            visual: 'platebody',
            craftingDescription: 'Requires Defense level of 10 to wield.',
            tags: ['armor', 'range', 'crafting'],
            equipmentStats: {
                slot: 'body',
                defensiveDamageAffinity: {
                    Melee: 47 / 50,
                    Magic: 47 / 50,
                    Range: 1.06,
                    Piercing: 24 / 25,
                    Blunt: 97 / 100,
                    Slashing: 1,
                },
                armorBonus: { protection: 55, resistance: 0, agility: 36, stamina: 0 },
                augmentationBonus: [
                    { stat: 'armorBonus.protection', value: 1.5 },
                    { stat: 'armorBonus.agility', value: 0.1 },
                ],
                itemSet: [10010, 10012],
            },
            requiredResources: [{ 4009: 200, 4010: 30 }],
            category: 'Range',
            rarity: 'rare',
        },
        1164: {
            name: 'Hide Coif',
            id: 1164,
            enchantmentTier: 1,
            augmentationCost: { 4007: 3 },
            craftingLevel: 1,
            craftingExperience: 55,
            value: 1125,
            tradeable: true,
            requiredLevel: { constitution: 1, attack: 1, strength: 1, defense: 1 },



            itemImage: '/images/combat/equipment/range/hide_coif.png',
            itemIcon: '/images/combat/equipment/range/hide_coif_icon.png',
            class: 'equipment',
            twoSided: true,
            visual: 'range-med-helm',
            craftingDescription: 'Requires Defense level of 1 to wield.',
            tags: ['armor', 'range', 'crafting'],
            equipmentStats: {
                slot: 'helm',
                defensiveDamageAffinity: {
                    Melee: 19 / 20,
                    Magic: 1,
                    Range: 1,
                    Piercing: 19 / 20,
                    Blunt: 97 / 100,
                    Slashing: 97 / 100,
                },
                armorBonus: { protection: 3, resistance: 0, agility: 2, stamina: 0 },
                weaponBonus: { strength: 0, intellect: 0, dexterity: 5 },
                augmentationBonus: [
                    { stat: 'armorBonus.protection', value: 0.1 },
                    { stat: 'weaponBonus.dexterity', value: 0.1 },
                    { stat: 'armorBonus.agility', value: 0.1 },
                ],
                itemSet: [10010, 10012],
            },
            requiredResources: [{ 4007: 25 }],
            category: 'Range',
        },
        1165: {
            name: 'Fur Coif',
            id: 1165,
            enchantmentTier: 1,
            augmentationCost: { 4004: 3 },
            craftingLevel: 4,
            craftingExperience: 99,
            value: 2813,
            tradeable: true,
            requiredLevel: { constitution: 1, attack: 1, strength: 1, defense: 10 },



            itemImage: '/images/combat/equipment/range/fur_coif.png',
            itemIcon: '/images/combat/equipment/range/fur_coif_icon.png',
            class: 'equipment',
            twoSided: true,
            visual: 'range-med-helm-alt',
            craftingDescription: 'Requires Defense level of 10 to wield.',
            tags: ['armor', 'range', 'crafting'],
            equipmentStats: {
                slot: 'helm',
                defensiveDamageAffinity: {
                    Melee: 19 / 20,
                    Magic: 1,
                    Range: 1,
                    Piercing: 19 / 20,
                    Blunt: 97 / 100,
                    Slashing: 97 / 100,
                },
                armorBonus: { protection: 4, resistance: 0, agility: 2, stamina: 0 },
                weaponBonus: { strength: 0, intellect: 0, dexterity: 6 },
                augmentationBonus: [
                    { stat: 'armorBonus.protection', value: 3 / 20 },
                    { stat: 'weaponBonus.dexterity', value: 0.1 },
                    { stat: 'armorBonus.agility', value: 0.1 },
                ],
                itemSet: [10010, 10012],
            },
            requiredResources: [{ 4004: 25 }],
            category: 'Range',
        },
        1166: {
            name: 'Thick Hide Coif',
            id: 1166,
            enchantmentTier: 2,
            augmentationCost: { 4004: 4, 4008: 1 },
            craftingLevel: 9,
            craftingExperience: 270,
            value: 5850,
            tradeable: true,
            requiredLevel: { constitution: 1, attack: 1, strength: 1, defense: 20 },



            itemImage: '/images/combat/equipment/range/hide_coif.png',
            itemIcon: '/images/combat/equipment/range/thick_hide_coif.png',
            class: 'equipment',
            twoSided: true,
            visual: 'range-med-helm',
            craftingDescription: 'Requires Defense level of 10 to wield.',
            tags: ['armor', 'range', 'crafting'],
            equipmentStats: {
                slot: 'helm',
                defensiveDamageAffinity: {
                    Melee: 19 / 20,
                    Magic: 1,
                    Range: 1,
                    Piercing: 19 / 20,
                    Blunt: 97 / 100,
                    Slashing: 97 / 100,
                },
                armorBonus: { protection: 10, resistance: 0, agility: 4, stamina: 0 },
                weaponBonus: { strength: 0, intellect: 0, dexterity: 11 },
                augmentationBonus: [
                    { stat: 'armorBonus.protection', value: 0.3 },
                    { stat: 'weaponBonus.dexterity', value: 0.2 },
                    { stat: 'armorBonus.agility', value: 0.1 },
                ],
                itemSet: [10010, 10012],
            },
            requiredResources: [{ 4004: 35, 4008: 10 }],
            category: 'Range',
        },
        1167: {
            name: 'Leather Coif',
            id: 1167,
            enchantmentTier: 3,
            augmentationCost: { 4012: 5 },
            craftingLevel: 15,
            craftingExperience: 789,
            value: 12960,
            tradeable: true,
            requiredLevel: { constitution: 1, attack: 1, strength: 1, defense: 30 },



            itemImage: '/images/combat/equipment/range/hide_coif.png',
            itemIcon: '/images/combat/equipment/range/leather_coif.png',
            class: 'equipment',
            twoSided: true,
            visual: 'range-med-helm',
            craftingDescription: 'Requires Defense level of 10 to wield.',
            tags: ['armor', 'range', 'crafting'],
            equipmentStats: {
                slot: 'helm',
                defensiveDamageAffinity: {
                    Melee: 19 / 20,
                    Magic: 1,
                    Range: 1,
                    Piercing: 19 / 20,
                    Blunt: 97 / 100,
                    Slashing: 97 / 100,
                },
                armorBonus: { protection: 17, resistance: 0, agility: 6, stamina: 0 },
                weaponBonus: { strength: 0, intellect: 0, dexterity: 16 },
                augmentationBonus: [
                    { stat: 'armorBonus.protection', value: 9 / 20 },
                    { stat: 'weaponBonus.dexterity', value: 0.3 },
                    { stat: 'armorBonus.agility', value: 0.1 },
                ],
                itemSet: [10010, 10012],
            },
            requiredResources: [{ 4012: 48 }],
            category: 'Range',
        },
        1168: {
            name: 'Reinforced Leather Coif',
            id: 1168,
            enchantmentTier: 4,
            augmentationCost: { 4005: 1, 4012: 7 },
            craftingLevel: 24,
            craftingExperience: 2515,
            value: 19035,
            tradeable: true,
            requiredLevel: { constitution: 1, attack: 1, strength: 1, defense: 40 },



            itemImage: '/images/combat/equipment/range/hide_coif.png',
            itemIcon: '/images/combat/equipment/range/reinforced_leather_coif.png',
            class: 'equipment',
            twoSided: true,
            visual: 'range-med-helm',
            craftingDescription: 'Requires Defense level of 10 to wield.',
            tags: ['armor', 'range', 'crafting'],
            equipmentStats: {
                slot: 'helm',
                defensiveDamageAffinity: {
                    Melee: 19 / 20,
                    Magic: 1,
                    Range: 1,
                    Piercing: 19 / 20,
                    Blunt: 97 / 100,
                    Slashing: 97 / 100,
                },
                armorBonus: { protection: 26, resistance: 0, agility: 8, stamina: 0 },
                weaponBonus: { strength: 0, intellect: 0, dexterity: 22 },
                augmentationBonus: [
                    { stat: 'armorBonus.protection', value: 0.6 },
                    { stat: 'weaponBonus.dexterity', value: 0.4 },
                    { stat: 'armorBonus.agility', value: 0.1 },
                ],
                itemSet: [10010, 10012],
            },
            requiredResources: [{ 4005: 6, 4012: 66 }],
            category: 'Range',
        },
        1169: {
            name: 'Chitin Coif',
            id: 1169,
            enchantmentTier: 5,
            augmentationCost: { 4002: 5, 4003: 1 },
            craftingLevel: 37,
            craftingExperience: 8655,
            value: 145125,
            tradeable: true,
            requiredLevel: { constitution: 1, attack: 1, strength: 1, defense: 50 },



            itemImage: '/images/combat/equipment/range/hide_coif.png',
            itemIcon: '/images/combat/equipment/range/chitin_coif.png',
            class: 'equipment',
            twoSided: true,
            visual: 'range-med-helm',
            craftingDescription: 'Requires Defense level of 10 to wield.',
            tags: ['armor', 'range', 'crafting'],
            equipmentStats: {
                slot: 'helm',
                defensiveDamageAffinity: {
                    Melee: 19 / 20,
                    Magic: 1,
                    Range: 1,
                    Piercing: 19 / 20,
                    Blunt: 97 / 100,
                    Slashing: 97 / 100,
                },
                armorBonus: { protection: 35, resistance: 0, agility: 10, stamina: 0 },
                weaponBonus: { strength: 0, intellect: 0, dexterity: 28 },
                augmentationBonus: [
                    { stat: 'armorBonus.protection', value: 3 / 4 },
                    { stat: 'weaponBonus.dexterity', value: 0.5 },
                    { stat: 'armorBonus.agility', value: 0.1 },
                ],
                itemSet: [10010, 10012],
            },
            requiredResources: [{ 4002: 45, 4003: 10 }],
            category: 'Range',
            rarity: 'uncommon',
        },
        1170: {
            name: 'Scale Coif',
            id: 1170,
            enchantmentTier: 6,
            augmentationCost: { 4009: 4, 4010: 1 },
            craftingLevel: 57,
            craftingExperience: 31843,
            value: 47250,
            tradeable: true,
            requiredLevel: { constitution: 1, attack: 1, strength: 1, defense: 60 },



            itemImage: '/images/combat/equipment/range/hide_coif.png',
            itemIcon: '/images/combat/equipment/range/scale_coif.png',
            class: 'equipment',
            twoSided: true,
            visual: 'range-med-helm',
            craftingDescription: 'Requires Defense level of 10 to wield.',
            tags: ['armor', 'range', 'crafting'],
            equipmentStats: {
                slot: 'helm',
                defensiveDamageAffinity: {
                    Melee: 19 / 20,
                    Magic: 1,
                    Range: 1,
                    Piercing: 19 / 20,
                    Blunt: 97 / 100,
                    Slashing: 97 / 100,
                },
                armorBonus: { protection: 44, resistance: 0, agility: 12, stamina: 0 },
                weaponBonus: { strength: 0, intellect: 0, dexterity: 35 },
                augmentationBonus: [
                    { stat: 'armorBonus.protection', value: 0.9 },
                    { stat: 'weaponBonus.dexterity', value: 0.6 },
                    { stat: 'armorBonus.agility', value: 0.1 },
                ],
                itemSet: [10010, 10012],
            },
            requiredResources: [{ 4009: 35, 4010: 5 }],
            category: 'Range',
            rarity: 'rare',
        },
        1171: {
            name: 'Hide Trousers',
            id: 1171,
            enchantmentTier: 1,
            augmentationCost: { 4007: 5 },
            craftingLevel: 2,
            craftingExperience: 78,
            value: 2250,
            tradeable: true,
            requiredLevel: { constitution: 1, attack: 1, strength: 1, defense: 1 },



            itemIcon: '/images/combat/equipment/range/hide_legs.png',
            itemImage: '/images/combat/equipment/range/hide_legs.png',
            class: 'equipment',
            visual: 'platelegs',
            craftingDescription: 'Requires Defense level of 1 to wield.',
            tags: ['armor', 'range', 'crafting'],
            equipmentStats: {
                slot: 'legs',
                defensiveDamageAffinity: {
                    Melee: 19 / 20,
                    Magic: 19 / 20,
                    Range: 1,
                    Piercing: 19 / 20,
                    Blunt: 99 / 100,
                    Slashing: 99 / 100,
                },
                armorBonus: { protection: 3, resistance: 0, agility: 2, stamina: 0 },
                augmentationBonus: [
                    { stat: 'armorBonus.protection', value: 0.1 },
                    { stat: 'armorBonus.agility', value: 0.1 },
                ],
                itemSet: [10010, 10012],
            },
            requiredResources: [{ 4007: 50 }],
            category: 'Range',
        },
        1172: {
            name: 'Fur Trousers',
            id: 1172,
            enchantmentTier: 1,
            augmentationCost: { 4004: 5 },
            craftingLevel: 5,
            craftingExperience: 138,
            value: 5625,
            tradeable: true,
            requiredLevel: { constitution: 1, attack: 1, strength: 1, defense: 10 },



            itemIcon: '/images/combat/equipment/range/fur_legs.png',
            itemImage: '/images/combat/equipment/range/fur_legs.png',
            class: 'equipment',
            visual: 'platelegs',
            craftingDescription: 'Requires Defense level of 10 to wield.',
            tags: ['armor', 'range', 'crafting'],
            equipmentStats: {
                slot: 'legs',
                defensiveDamageAffinity: {
                    Melee: 19 / 20,
                    Magic: 19 / 20,
                    Range: 1,
                    Piercing: 19 / 20,
                    Blunt: 99 / 100,
                    Slashing: 99 / 100,
                },
                armorBonus: { protection: 4, resistance: 0, agility: 3, stamina: 0 },
                augmentationBonus: [
                    { stat: 'armorBonus.protection', value: 0.2 },
                    { stat: 'armorBonus.agility', value: 0.1 },
                ],
                itemSet: [10010, 10012],
            },
            requiredResources: [{ 4004: 50 }],
            category: 'Range',
        },
        1173: {
            name: 'Thick Hide Trousers',
            id: 1173,
            enchantmentTier: 2,
            augmentationCost: { 4004: 7, 4008: 1 },
            craftingLevel: 11,
            craftingExperience: 376,
            value: 9338,
            tradeable: true,
            requiredLevel: { constitution: 1, attack: 1, strength: 1, defense: 20 },



            itemIcon: '/images/combat/equipment/range/thick_hide_legs.png',
            itemImage: '/images/combat/equipment/range/hide_legs.png',
            class: 'equipment',
            visual: 'platelegs',
            craftingDescription: 'Requires Defense level of 10 to wield.',
            tags: ['armor', 'range', 'crafting'],
            equipmentStats: {
                slot: 'legs',
                defensiveDamageAffinity: {
                    Melee: 19 / 20,
                    Magic: 19 / 20,
                    Range: 1,
                    Piercing: 19 / 20,
                    Blunt: 99 / 100,
                    Slashing: 99 / 100,
                },
                armorBonus: { protection: 10, resistance: 0, agility: 6, stamina: 0 },
                augmentationBonus: [
                    { stat: 'armorBonus.protection', value: 0.4 },
                    { stat: 'armorBonus.agility', value: 0.1 },
                ],
                itemSet: [10010, 10012],
            },
            requiredResources: [{ 4004: 65, 4008: 5 }],
            category: 'Range',
        },
        1174: {
            name: 'Leather Trousers',
            id: 1174,
            enchantmentTier: 3,
            augmentationCost: { 4012: 11 },
            craftingLevel: 18,
            craftingExperience: 1100,
            value: 11925,
            tradeable: true,
            requiredLevel: { constitution: 1, attack: 1, strength: 1, defense: 30 },



            itemIcon: '/images/combat/equipment/range/leather_legs.png',
            itemImage: '/images/combat/equipment/range/hide_legs.png',
            class: 'equipment',
            visual: 'platelegs',
            craftingDescription: 'Requires Defense level of 10 to wield.',
            tags: ['armor', 'range', 'crafting'],
            equipmentStats: {
                slot: 'legs',
                defensiveDamageAffinity: {
                    Melee: 19 / 20,
                    Magic: 19 / 20,
                    Range: 1,
                    Piercing: 19 / 20,
                    Blunt: 99 / 100,
                    Slashing: 99 / 100,
                },
                armorBonus: { protection: 17, resistance: 0, agility: 9, stamina: 0 },
                augmentationBonus: [
                    { stat: 'armorBonus.protection', value: 0.6 },
                    { stat: 'armorBonus.agility', value: 0.1 },
                ],
                itemSet: [10010, 10012],
            },
            requiredResources: [{ 4012: 106 }],
            category: 'Range',
        },
        1175: {
            name: 'Reinforced Leather Trousers',
            id: 1175,
            enchantmentTier: 4,
            augmentationCost: { 4005: 1, 4012: 12 },
            craftingLevel: 28,
            craftingExperience: 3505,
            value: 34830,
            tradeable: true,
            requiredLevel: { constitution: 1, attack: 1, strength: 1, defense: 40 },



            itemIcon: '/images/combat/equipment/range/reinforced_leather_legs.png',
            itemImage: '/images/combat/equipment/range/hide_legs.png',
            class: 'equipment',
            visual: 'platelegs',
            craftingDescription: 'Requires Defense level of 10 to wield.',
            tags: ['armor', 'range', 'crafting'],
            equipmentStats: {
                slot: 'legs',
                defensiveDamageAffinity: {
                    Melee: 19 / 20,
                    Magic: 19 / 20,
                    Range: 1,
                    Piercing: 19 / 20,
                    Blunt: 99 / 100,
                    Slashing: 99 / 100,
                },
                armorBonus: { protection: 26, resistance: 0, agility: 12, stamina: 0 },
                augmentationBonus: [
                    { stat: 'armorBonus.protection', value: 0.8 },
                    { stat: 'armorBonus.agility', value: 0.1 },
                ],
                itemSet: [10010, 10012],
            },
            requiredResources: [{ 4005: 12, 4012: 120 }],
            category: 'Range',
        },
        1176: {
            name: 'Chitin Trousers',
            id: 1176,
            enchantmentTier: 5,
            augmentationCost: { 4002: 15, 4003: 1 },
            craftingLevel: 41,
            craftingExperience: 12064,
            value: 388125,
            tradeable: true,
            requiredLevel: { constitution: 1, attack: 1, strength: 1, defense: 50 },



            itemIcon: '/images/combat/equipment/range/chitin_legs.png',
            itemImage: '/images/combat/equipment/range/hide_legs.png',
            class: 'equipment',
            visual: 'platelegs',
            craftingDescription: 'Requires Defense level of 10 to wield.',
            tags: ['armor', 'range', 'crafting'],
            equipmentStats: {
                slot: 'legs',
                defensiveDamageAffinity: {
                    Melee: 19 / 20,
                    Magic: 19 / 20,
                    Range: 1,
                    Piercing: 19 / 20,
                    Blunt: 99 / 100,
                    Slashing: 99 / 100,
                },
                armorBonus: { protection: 35, resistance: 0, agility: 15, stamina: 0 },
                augmentationBonus: [
                    { stat: 'armorBonus.protection', value: 1 },
                    { stat: 'armorBonus.agility', value: 0.1 },
                ],
                itemSet: [10010, 10012],
            },
            requiredResources: [{ 4002: 150, 4003: 5 }],
            category: 'Range',
            rarity: 'uncommon',
        },
        1177: {
            name: 'Scale Trousers',
            id: 1177,
            enchantmentTier: 6,
            augmentationCost: { 4009: 13, 4010: 1 },
            craftingLevel: 59,
            craftingExperience: 44387,
            value: 156375,
            tradeable: true,
            requiredLevel: { constitution: 1, attack: 1, strength: 1, defense: 60 },



            itemIcon: '/images/combat/equipment/range/scale_legs.png',
            itemImage: '/images/combat/equipment/range/hide_legs.png',
            class: 'equipment',
            visual: 'platelegs',
            craftingDescription: 'Requires Defense level of 10 to wield.',
            tags: ['armor', 'range', 'crafting'],
            equipmentStats: {
                slot: 'legs',
                defensiveDamageAffinity: {
                    Melee: 19 / 20,
                    Magic: 19 / 20,
                    Range: 1,
                    Piercing: 19 / 20,
                    Blunt: 99 / 100,
                    Slashing: 99 / 100,
                },
                armorBonus: { protection: 44, resistance: 0, agility: 18, stamina: 0 },
                augmentationBonus: [
                    { stat: 'armorBonus.protection', value: 1.2 },
                    { stat: 'armorBonus.agility', value: 0.1 },
                ],
                itemSet: [10010, 10012],
            },
            requiredResources: [{ 4009: 125, 4010: 10 }],
            category: 'Range',
            rarity: 'rare',
        },
        1178: {
            name: 'Robe Top',
            id: 1178,
            enchantmentTier: 1,
            augmentationCost: { 4013: 8 },
            craftingLevel: 3,
            craftingExperience: 93,
            value: 2160,
            tradeable: true,
            requiredLevel: { constitution: 1, attack: 1, strength: 1, defense: 1 },



            itemImage: '/images/combat/equipment/magic/robe_top.png',
            class: 'equipment',
            visual: 'robetop',
            craftingDescription: 'Requires Defense level of 1 to wield.',
            tags: ['armor', 'range', 'magic', 'hybrid', 'crafting'],
            equipmentStats: {
                slot: 'body',
                defensiveDamageAffinity: {
                    Melee: 47 / 50,
                    Magic: 1.08,
                    Range: 47 / 50,
                    Piercing: 47 / 50,
                    Blunt: 97 / 100,
                    Slashing: 47 / 50,
                },
                armorBonus: { protection: 2, resistance: 7, agility: 0, stamina: 0 },
                weaponBonus: { strength: 0, intellect: 3, dexterity: 0 },
                augmentationBonus: [
                    { stat: 'armorBonus.protection', value: 0.1 },
                    { stat: 'armorBonus.resistance', value: 0.1 },
                    { stat: 'weaponBonus.intellect', value: 0.1 },
                ],
                itemSet: [10011, 10013],
            },
            requiredResources: [{ 4013: 80 }],
            category: 'Magic',
        },
        1179: {
            name: 'Practitioner Robe Top',
            id: 1179,
            enchantmentTier: 1,
            augmentationCost: { 4014: 8 },
            craftingLevel: 6,
            craftingExperience: 164,
            value: 4320,
            tradeable: true,
            requiredLevel: { constitution: 1, attack: 1, strength: 1, defense: 10 },



            itemIcon: '/images/combat/equipment/magic/practitioner_robe_top.png',
            itemImage: '/images/combat/equipment/magic/robe_top.png',
            class: 'equipment',
            visual: 'robetop',
            craftingDescription: 'Requires Defense level of 10 to wield.',
            tags: ['armor', 'range', 'magic', 'hybrid', 'crafting'],
            equipmentStats: {
                slot: 'body',
                defensiveDamageAffinity: {
                    Melee: 47 / 50,
                    Magic: 1.08,
                    Range: 47 / 50,
                    Piercing: 47 / 50,
                    Blunt: 97 / 100,
                    Slashing: 47 / 50,
                },
                armorBonus: { protection: 3, resistance: 11, agility: 0, stamina: 0 },
                weaponBonus: { strength: 0, intellect: 4, dexterity: 0 },
                augmentationBonus: [
                    { stat: 'armorBonus.protection', value: 0.1 },
                    { stat: 'armorBonus.resistance', value: 3 / 20 },
                    { stat: 'weaponBonus.intellect', value: 0.1 },
                ],
                itemSet: [10011, 10013],
            },
            requiredResources: [{ 4014: 80 }],
            category: 'Magic',
        },
        1180: {
            name: 'Academy Robe Top',
            id: 1180,
            enchantmentTier: 2,
            augmentationCost: { 4015: 12 },
            craftingLevel: 13,
            craftingExperience: 447,
            value: 15930,
            tradeable: true,
            requiredLevel: { constitution: 1, attack: 1, strength: 1, defense: 20 },



            itemIcon: '/images/combat/equipment/magic/academy_robe_top.png',
            itemImage: '/images/combat/equipment/magic/robe_top.png',
            class: 'equipment',
            visual: 'robetop',
            craftingDescription: 'Requires Defense level of 10 to wield.',
            tags: ['armor', 'range', 'magic', 'hybrid', 'crafting'],
            equipmentStats: {
                slot: 'body',
                defensiveDamageAffinity: {
                    Melee: 47 / 50,
                    Magic: 1.08,
                    Range: 47 / 50,
                    Piercing: 47 / 50,
                    Blunt: 97 / 100,
                    Slashing: 47 / 50,
                },
                armorBonus: { protection: 8, resistance: 28, agility: 0, stamina: 0 },
                weaponBonus: { strength: 0, intellect: 7, dexterity: 0 },
                augmentationBonus: [
                    { stat: 'armorBonus.protection', value: 0.1 },
                    { stat: 'armorBonus.resistance', value: 0.3 },
                    { stat: 'weaponBonus.intellect', value: 0.2 },
                ],
                itemSet: [10011, 10013],
            },
            requiredResources: [{ 4015: 118 }],
            category: 'Magic',
        },
        1181: {
            name: 'Imbued Robe Top',
            id: 1181,
            enchantmentTier: 3,
            augmentationCost: { 4016: 18 },
            craftingLevel: 21,
            craftingExperience: 1307,
            value: 78300,
            tradeable: true,
            requiredLevel: { constitution: 1, attack: 1, strength: 1, defense: 30 },



            itemIcon: '/images/combat/equipment/magic/imbued_robe_top.png',
            itemImage: '/images/combat/equipment/magic/robe_top.png',
            class: 'equipment',
            visual: 'robetop',
            craftingDescription: 'Requires Defense level of 10 to wield.',
            tags: ['armor', 'range', 'magic', 'hybrid', 'crafting'],
            equipmentStats: {
                slot: 'body',
                defensiveDamageAffinity: {
                    Melee: 47 / 50,
                    Magic: 1.08,
                    Range: 47 / 50,
                    Piercing: 47 / 50,
                    Blunt: 97 / 100,
                    Slashing: 47 / 50,
                },
                armorBonus: { protection: 13, resistance: 48, agility: 0, stamina: 0 },
                weaponBonus: { strength: 0, intellect: 11, dexterity: 0 },
                augmentationBonus: [
                    { stat: 'armorBonus.protection', value: 3 / 20 },
                    { stat: 'armorBonus.resistance', value: 9 / 20 },
                    { stat: 'weaponBonus.intellect', value: 0.3 },
                ],
                itemSet: [10011, 10013],
            },
            requiredResources: [{ 4016: 174 }],
            category: 'Magic',
        },
        1182: {
            name: 'Major Imbued Robe Top',
            id: 1182,
            enchantmentTier: 4,
            augmentationCost: { 4017: 26 },
            craftingLevel: 31,
            craftingExperience: 4166,
            value: 230400,
            tradeable: true,
            requiredLevel: { constitution: 1, attack: 1, strength: 1, defense: 40 },



            itemIcon: '/images/combat/equipment/magic/major_imbued_robe_top.png',
            itemImage: '/images/combat/equipment/magic/robe_top.png',
            class: 'equipment',
            visual: 'robetop',
            craftingDescription: 'Requires Defense level of 10 to wield.',
            tags: ['armor', 'range', 'magic', 'hybrid', 'crafting'],
            equipmentStats: {
                slot: 'body',
                defensiveDamageAffinity: {
                    Melee: 47 / 50,
                    Magic: 1.08,
                    Range: 47 / 50,
                    Piercing: 47 / 50,
                    Blunt: 97 / 100,
                    Slashing: 47 / 50,
                },
                armorBonus: { protection: 19, resistance: 70, agility: 0, stamina: 0 },
                weaponBonus: { strength: 0, intellect: 14, dexterity: 0 },
                augmentationBonus: [
                    { stat: 'armorBonus.protection', value: 0.2 },
                    { stat: 'armorBonus.resistance', value: 0.6 },
                    { stat: 'weaponBonus.intellect', value: 0.4 },
                ],
                itemSet: [10011, 10013],
            },
            requiredResources: [{ 4017: 256 }],
            category: 'Magic',
            rarity: 'uncommon',
        },
        1183: {
            name: 'Greater Imbued Robe Top',
            id: 1183,
            enchantmentTier: 5,
            augmentationCost: { 4018: 38 },
            craftingLevel: 44,
            craftingExperience: 14336,
            value: 676800,
            tradeable: true,
            requiredLevel: { constitution: 1, attack: 1, strength: 1, defense: 50 },



            itemIcon: '/images/combat/equipment/magic/greater_imbued_robe_top.png',
            itemImage: '/images/combat/equipment/magic/robe_top.png',
            class: 'equipment',
            visual: 'robetop',
            craftingDescription: 'Requires Defense level of 10 to wield.',
            tags: ['armor', 'range', 'magic', 'hybrid', 'crafting'],
            equipmentStats: {
                slot: 'body',
                defensiveDamageAffinity: {
                    Melee: 47 / 50,
                    Magic: 1.08,
                    Range: 47 / 50,
                    Piercing: 47 / 50,
                    Blunt: 97 / 100,
                    Slashing: 47 / 50,
                },
                armorBonus: { protection: 26, resistance: 95, agility: 0, stamina: 0 },
                weaponBonus: { strength: 0, intellect: 19, dexterity: 0 },
                augmentationBonus: [
                    { stat: 'armorBonus.protection', value: 1 / 4 },
                    { stat: 'armorBonus.resistance', value: 3 / 4 },
                    { stat: 'weaponBonus.intellect', value: 0.5 },
                ],
                itemSet: [10011, 10013],
            },
            requiredResources: [{ 4018: 376 }],
            category: 'Magic',
            rarity: 'uncommon',
        },
        1184: {
            name: 'Elder Robe Top',
            id: 1184,
            enchantmentTier: 6,
            augmentationCost: { 4019: 56 },
            craftingLevel: 61,
            craftingExperience: 52750,
            value: 1994400,
            tradeable: true,
            requiredLevel: { constitution: 1, attack: 1, strength: 1, defense: 60 },



            itemIcon: '/images/combat/equipment/magic/elder_robe_top.png',
            itemImage: '/images/combat/equipment/magic/robe_top.png',
            class: 'equipment',
            visual: 'robetop',
            craftingDescription: 'Requires Defense level of 10 to wield.',
            tags: ['armor', 'range', 'magic', 'hybrid', 'crafting'],
            equipmentStats: {
                slot: 'body',
                defensiveDamageAffinity: {
                    Melee: 47 / 50,
                    Magic: 1.08,
                    Range: 47 / 50,
                    Piercing: 47 / 50,
                    Blunt: 97 / 100,
                    Slashing: 47 / 50,
                },
                armorBonus: { protection: 33, resistance: 121, agility: 0, stamina: 0 },
                weaponBonus: { strength: 0, intellect: 23, dexterity: 0 },
                augmentationBonus: [
                    { stat: 'armorBonus.protection', value: 0.3 },
                    { stat: 'armorBonus.resistance', value: 0.9 },
                    { stat: 'weaponBonus.intellect', value: 0.6 },
                ],
                itemSet: [10011, 10013],
            },
            requiredResources: [{ 4019: 554 }],
            category: 'Magic',
            rarity: 'rare',
        },
        1185: {
            name: 'Robe Hood',
            id: 1185,
            enchantmentTier: 1,
            augmentationCost: { 4013: 3 },
            craftingLevel: 1,
            craftingExperience: 42,
            value: 675,
            tradeable: true,
            requiredLevel: { constitution: 1, attack: 1, strength: 1, defense: 1 },



            itemIcon: '/images/combat/equipment/magic/robe_hood.png',
            itemImage: '/images/combat/equipment/magic/robe_hood.png',
            class: 'equipment',
            twoSided: true,
            visual: 'hood',
            craftingDescription: 'Requires Defense level of 1 to wield.',
            tags: ['armor', 'range', 'magic', 'hybrid', 'crafting'],
            equipmentStats: {
                slot: 'helm',
                defensiveDamageAffinity: {
                    Melee: 47 / 50,
                    Magic: 1.02,
                    Range: 47 / 50,
                    Piercing: 47 / 50,
                    Blunt: 97 / 100,
                    Slashing: 47 / 50,
                },
                armorBonus: { protection: 1, resistance: 3, agility: 0, stamina: 0 },
                weaponBonus: { strength: 0, intellect: 3, dexterity: 0 },
                augmentationBonus: [
                    { stat: 'armorBonus.protection', value: 0.1 },
                    { stat: 'armorBonus.resistance', value: 0.1 },
                    { stat: 'weaponBonus.intellect', value: 0.1 },
                ],
                itemSet: [10011, 10013],
            },
            requiredResources: [{ 4013: 25 }],
            category: 'Magic',
        },
        1186: {
            name: 'Practitioner Robe Hood',
            id: 1186,
            enchantmentTier: 1,
            augmentationCost: { 4014: 3 },
            craftingLevel: 4,
            craftingExperience: 96,
            value: 11,
            tradeable: true,
            requiredLevel: { constitution: 1, attack: 1, strength: 1, defense: 10 },



            itemIcon: '/images/combat/equipment/magic/practitioner_robe_hood.png',
            itemImage: '/images/combat/equipment/magic/robe_hood.png',
            class: 'equipment',
            twoSided: true,
            visual: 'hood',
            craftingDescription: 'Requires Defense level of 10 to wield.',
            tags: ['armor', 'range', 'magic', 'hybrid', 'crafting'],
            equipmentStats: {
                slot: 'helm',
                defensiveDamageAffinity: {
                    Melee: 47 / 50,
                    Magic: 1.02,
                    Range: 47 / 50,
                    Piercing: 47 / 50,
                    Blunt: 97 / 100,
                    Slashing: 47 / 50,
                },
                armorBonus: { protection: 1, resistance: 5, agility: 0, stamina: 0 },
                weaponBonus: { strength: 0, intellect: 4, dexterity: 0 },
                augmentationBonus: [
                    { stat: 'armorBonus.protection', value: 0.1 },
                    { stat: 'armorBonus.resistance', value: 0.1 },
                    { stat: 'weaponBonus.intellect', value: 0.1 },
                ],
                itemSet: [10011, 10013],
            },
            requiredResources: [{ 4014: 25 }],
            category: 'Magic',
        },
        1187: {
            name: 'Academy Hood',
            id: 1187,
            enchantmentTier: 2,
            augmentationCost: { 4015: 4 },
            craftingLevel: 9,
            craftingExperience: 262,
            value: 111,
            tradeable: true,
            requiredLevel: { constitution: 1, attack: 1, strength: 1, defense: 20 },



            itemIcon: '/images/combat/equipment/magic/academy_robe_hood.png',
            itemImage: '/images/combat/equipment/magic/robe_hood.png',
            class: 'equipment',
            twoSided: true,
            visual: 'hood',
            craftingDescription: 'Requires Defense level of 10 to wield.',
            tags: ['armor', 'range', 'magic', 'hybrid', 'crafting'],
            equipmentStats: {
                slot: 'helm',
                defensiveDamageAffinity: {
                    Melee: 47 / 50,
                    Magic: 1.02,
                    Range: 47 / 50,
                    Piercing: 47 / 50,
                    Blunt: 97 / 100,
                    Slashing: 47 / 50,
                },
                armorBonus: { protection: 3, resistance: 13, agility: 0, stamina: 0 },
                weaponBonus: { strength: 0, intellect: 7, dexterity: 0 },
                augmentationBonus: [
                    { stat: 'armorBonus.protection', value: 0.1 },
                    { stat: 'armorBonus.resistance', value: 0.1 },
                    { stat: 'weaponBonus.intellect', value: 0.2 },
                ],
                itemSet: [10011, 10013],
            },
            requiredResources: [{ 4015: 35 }],
            category: 'Magic',
        },
        1188: {
            name: 'Imbued Hood',
            id: 1188,
            enchantmentTier: 3,
            augmentationCost: { 4016: 5 },
            craftingLevel: 15,
            craftingExperience: 765,
            value: 1111,
            tradeable: true,
            requiredLevel: { constitution: 1, attack: 1, strength: 1, defense: 30 },



            itemIcon: '/images/combat/equipment/magic/imbued_robe_hood.png',
            itemImage: '/images/combat/equipment/magic/robe_hood.png',
            class: 'equipment',
            twoSided: true,
            visual: 'hood',
            craftingDescription: 'Requires Defense level of 10 to wield.',
            tags: ['armor', 'range', 'magic', 'hybrid', 'crafting'],
            equipmentStats: {
                slot: 'helm',
                defensiveDamageAffinity: {
                    Melee: 47 / 50,
                    Magic: 1.02,
                    Range: 47 / 50,
                    Piercing: 47 / 50,
                    Blunt: 97 / 100,
                    Slashing: 47 / 50,
                },
                armorBonus: { protection: 4, resistance: 22, agility: 0, stamina: 0 },
                weaponBonus: { strength: 0, intellect: 11, dexterity: 0 },
                augmentationBonus: [
                    { stat: 'armorBonus.protection', value: 0.1 },
                    { stat: 'armorBonus.resistance', value: 3 / 20 },
                    { stat: 'weaponBonus.intellect', value: 0.3 },
                ],
                itemSet: [10011, 10013],
            },
            requiredResources: [{ 4016: 48 }],
            category: 'Magic',
        },
        1189: {
            name: 'Major Imbued Hood',
            id: 1189,
            enchantmentTier: 4,
            augmentationCost: { 4017: 7 },
            craftingLevel: 24,
            craftingExperience: 2439,
            value: 11111,
            tradeable: true,
            requiredLevel: { constitution: 1, attack: 1, strength: 1, defense: 40 },



            itemIcon: '/images/combat/equipment/magic/major_imbued_robe_hood.png',
            itemImage: '/images/combat/equipment/magic/robe_hood.png',
            class: 'equipment',
            twoSided: true,
            visual: 'hood',
            craftingDescription: 'Requires Defense level of 10 to wield.',
            tags: ['armor', 'range', 'magic', 'hybrid', 'crafting'],
            equipmentStats: {
                slot: 'helm',
                defensiveDamageAffinity: {
                    Melee: 47 / 50,
                    Magic: 1.02,
                    Range: 47 / 50,
                    Piercing: 47 / 50,
                    Blunt: 97 / 100,
                    Slashing: 47 / 50,
                },
                armorBonus: { protection: 6, resistance: 32, agility: 0, stamina: 0 },
                weaponBonus: { strength: 0, intellect: 14, dexterity: 0 },
                augmentationBonus: [
                    { stat: 'armorBonus.protection', value: 0.1 },
                    { stat: 'armorBonus.resistance', value: 0.2 },
                    { stat: 'weaponBonus.intellect', value: 0.4 },
                ],
                itemSet: [10011, 10013],
            },
            requiredResources: [{ 4017: 66 }],
            category: 'Magic',
        },
        1190: {
            name: 'Greater Imbued Hood',
            id: 1190,
            enchantmentTier: 5,
            augmentationCost: { 4018: 10 },
            craftingLevel: 37,
            craftingExperience: 8392,
            value: 111111,
            tradeable: true,
            requiredLevel: { constitution: 1, attack: 1, strength: 1, defense: 50 },



            itemIcon: '/images/combat/equipment/magic/greater_imbued_robe_hood.png',
            itemImage: '/images/combat/equipment/magic/robe_hood.png',
            class: 'equipment',
            twoSided: true,
            visual: 'hood',
            craftingDescription: 'Requires Defense level of 10 to wield.',
            tags: ['armor', 'range', 'magic', 'hybrid', 'crafting'],
            equipmentStats: {
                slot: 'helm',
                defensiveDamageAffinity: {
                    Melee: 47 / 50,
                    Magic: 1.02,
                    Range: 47 / 50,
                    Piercing: 47 / 50,
                    Blunt: 97 / 100,
                    Slashing: 47 / 50,
                },
                armorBonus: { protection: 9, resistance: 43, agility: 0, stamina: 0 },
                weaponBonus: { strength: 0, intellect: 19, dexterity: 0 },
                augmentationBonus: [
                    { stat: 'armorBonus.protection', value: 1 / 8 },
                    { stat: 'armorBonus.resistance', value: 1 / 4 },
                    { stat: 'weaponBonus.intellect', value: 0.5 },
                ],
                itemSet: [10011, 10013],
            },
            requiredResources: [{ 4018: 91 }],
            category: 'Magic',
            rarity: 'uncommon',
        },
        1191: {
            name: 'Elder Hood',
            id: 1191,
            enchantmentTier: 6,
            augmentationCost: { 4019: 13 },
            craftingLevel: 57,
            craftingExperience: 30878,
            value: 1111111,
            tradeable: true,
            requiredLevel: { constitution: 1, attack: 1, strength: 1, defense: 60 },



            itemIcon: '/images/combat/equipment/magic/elder_robe_hood.png',
            itemImage: '/images/combat/equipment/magic/robe_hood.png',
            class: 'equipment',
            twoSided: true,
            visual: 'hood',
            craftingDescription: 'Requires Defense level of 10 to wield.',
            tags: ['armor', 'range', 'magic', 'hybrid', 'crafting'],
            equipmentStats: {
                slot: 'helm',
                defensiveDamageAffinity: {
                    Melee: 47 / 50,
                    Magic: 1.02,
                    Range: 47 / 50,
                    Piercing: 47 / 50,
                    Blunt: 97 / 100,
                    Slashing: 47 / 50,
                },
                armorBonus: { protection: 11, resistance: 55, agility: 0, stamina: 0 },
                weaponBonus: { strength: 0, intellect: 23, dexterity: 0 },
                augmentationBonus: [
                    { stat: 'armorBonus.protection', value: 3 / 20 },
                    { stat: 'armorBonus.resistance', value: 0.3 },
                    { stat: 'weaponBonus.intellect', value: 0.6 },
                ],
                itemSet: [10011, 10013],
            },
            requiredResources: [{ 4019: 125 }],
            category: 'Magic',
            rarity: 'rare',
        },
        1192: {
            name: 'Robe Bottom',
            id: 1192,
            enchantmentTier: 1,
            augmentationCost: { 4013: 5 },
            craftingLevel: 2,
            craftingExperience: 72,
            value: 1350,
            tradeable: true,
            requiredLevel: { constitution: 1, attack: 1, strength: 1, defense: 1 },



            itemImage: '/images/combat/equipment/magic/robe_legs.png',
            class: 'equipment',
            visual: 'robebottom',
            craftingDescription: 'Requires Defense level of 1 to wield.',
            tags: ['armor', 'range', 'magic', 'hybrid', 'crafting'],
            equipmentStats: {
                slot: 'legs',
                defensiveDamageAffinity: {
                    Melee: 47 / 50,
                    Magic: 1.06,
                    Range: 47 / 50,
                    Piercing: 47 / 50,
                    Blunt: 97 / 100,
                    Slashing: 47 / 50,
                },
                armorBonus: { protection: 1, resistance: 4, agility: 0, stamina: 0 },
                weaponBonus: { strength: 0, intellect: 3, dexterity: 0 },
                augmentationBonus: [
                    { stat: 'armorBonus.protection', value: 0.1 },
                    { stat: 'armorBonus.resistance', value: 0.1 },
                    { stat: 'weaponBonus.intellect', value: 0.1 },
                ],
                itemSet: [10011, 10013],
            },
            requiredResources: [{ 4013: 50 }],
            category: 'Magic',
        },
        1193: {
            name: 'Practitioner Robe Bottom',
            id: 1193,
            enchantmentTier: 1,
            augmentationCost: { 4014: 5 },
            craftingLevel: 5,
            craftingExperience: 136,
            value: 11,
            tradeable: true,
            requiredLevel: { constitution: 1, attack: 1, strength: 1, defense: 10 },



            itemIcon: '/images/combat/equipment/magic/practitioner_robe_legs.png',
            itemImage: '/images/combat/equipment/magic/robe_legs.png',
            class: 'equipment',
            visual: 'robebottom',
            craftingDescription: 'Requires Defense level of 10 to wield.',
            tags: ['armor', 'range', 'magic', 'hybrid', 'crafting'],
            equipmentStats: {
                slot: 'legs',
                defensiveDamageAffinity: {
                    Melee: 47 / 50,
                    Magic: 1.06,
                    Range: 47 / 50,
                    Piercing: 47 / 50,
                    Blunt: 97 / 100,
                    Slashing: 47 / 50,
                },
                armorBonus: { protection: 2, resistance: 6, agility: 0, stamina: 0 },
                weaponBonus: { strength: 0, intellect: 4, dexterity: 0 },
                augmentationBonus: [
                    { stat: 'armorBonus.protection', value: 0.1 },
                    { stat: 'armorBonus.resistance', value: 0.1 },
                    { stat: 'weaponBonus.intellect', value: 0.1 },
                ],
                itemSet: [10011, 10013],
            },
            requiredResources: [{ 4014: 50 }],
            category: 'Magic',
        },
        1194: {
            name: 'Academy Robe Bottom',
            id: 1194,
            enchantmentTier: 2,
            augmentationCost: { 4015: 8 },
            craftingLevel: 11,
            craftingExperience: 371,
            value: 111,
            tradeable: true,
            requiredLevel: { constitution: 1, attack: 1, strength: 1, defense: 20 },



            itemIcon: '/images/combat/equipment/magic/academy_robe_legs.png',
            itemImage: '/images/combat/equipment/magic/robe_legs.png',
            class: 'equipment',
            visual: 'robebottom',
            craftingDescription: 'Requires Defense level of 10 to wield.',
            tags: ['armor', 'range', 'magic', 'hybrid', 'crafting'],
            equipmentStats: {
                slot: 'legs',
                defensiveDamageAffinity: {
                    Melee: 47 / 50,
                    Magic: 1.06,
                    Range: 47 / 50,
                    Piercing: 47 / 50,
                    Blunt: 97 / 100,
                    Slashing: 47 / 50,
                },
                armorBonus: { protection: 5, resistance: 15, agility: 0, stamina: 0 },
                weaponBonus: { strength: 0, intellect: 7, dexterity: 0 },
                augmentationBonus: [
                    { stat: 'armorBonus.protection', value: 0.1 },
                    { stat: 'armorBonus.resistance', value: 3 / 20 },
                    { stat: 'weaponBonus.intellect', value: 0.2 },
                ],
                itemSet: [10011, 10013],
            },
            requiredResources: [{ 4015: 73 }],
            category: 'Magic',
        },
        1195: {
            name: 'Imbued Robe Bottom',
            id: 1195,
            enchantmentTier: 3,
            augmentationCost: { 4016: 11 },
            craftingLevel: 18,
            craftingExperience: 1084,
            value: 1111,
            tradeable: true,
            requiredLevel: { constitution: 1, attack: 1, strength: 1, defense: 30 },



            itemIcon: '/images/combat/equipment/magic/imbued_robe_legs.png',
            itemImage: '/images/combat/equipment/magic/robe_legs.png',
            class: 'equipment',
            visual: 'robebottom',
            craftingDescription: 'Requires Defense level of 10 to wield.',
            tags: ['armor', 'range', 'magic', 'hybrid', 'crafting'],
            equipmentStats: {
                slot: 'legs',
                defensiveDamageAffinity: {
                    Melee: 47 / 50,
                    Magic: 1.06,
                    Range: 47 / 50,
                    Piercing: 47 / 50,
                    Blunt: 97 / 100,
                    Slashing: 47 / 50,
                },
                armorBonus: { protection: 9, resistance: 26, agility: 0, stamina: 0 },
                weaponBonus: { strength: 0, intellect: 11, dexterity: 0 },
                augmentationBonus: [
                    { stat: 'armorBonus.protection', value: 21 / 200 },
                    { stat: 'armorBonus.resistance', value: 9 / 40 },
                    { stat: 'weaponBonus.intellect', value: 0.3 },
                ],
                itemSet: [10011, 10013],
            },
            requiredResources: [{ 4016: 106 }],
            category: 'Magic',
        },
        1196: {
            name: 'Major Imbued Robe Bottom',
            id: 1196,
            enchantmentTier: 4,
            augmentationCost: { 4017: 16 },
            craftingLevel: 28,
            craftingExperience: 3455,
            value: 11111,
            tradeable: true,
            requiredLevel: { constitution: 1, attack: 1, strength: 1, defense: 40 },



            itemIcon: '/images/combat/equipment/magic/major_imbued_robe_legs.png',
            itemImage: '/images/combat/equipment/magic/robe_legs.png',
            class: 'equipment',
            visual: 'robebottom',
            craftingDescription: 'Requires Defense level of 10 to wield.',
            tags: ['armor', 'range', 'magic', 'hybrid', 'crafting'],
            equipmentStats: {
                slot: 'legs',
                defensiveDamageAffinity: {
                    Melee: 47 / 50,
                    Magic: 1.06,
                    Range: 47 / 50,
                    Piercing: 47 / 50,
                    Blunt: 97 / 100,
                    Slashing: 47 / 50,
                },
                armorBonus: { protection: 13, resistance: 38, agility: 0, stamina: 0 },
                weaponBonus: { strength: 0, intellect: 14, dexterity: 0 },
                augmentationBonus: [
                    { stat: 'armorBonus.protection', value: 7 / 50 },
                    { stat: 'armorBonus.resistance', value: 0.3 },
                    { stat: 'weaponBonus.intellect', value: 0.4 },
                ],
                itemSet: [10011, 10013],
            },
            requiredResources: [{ 4017: 153 }],
            category: 'Magic',
        },
        1197: {
            name: 'Greater Imbued Robe Bottom',
            id: 1197,
            enchantmentTier: 5,
            augmentationCost: { 4018: 23 },
            craftingLevel: 41,
            craftingExperience: 11889,
            value: 111111,
            tradeable: true,
            requiredLevel: { constitution: 1, attack: 1, strength: 1, defense: 50 },



            itemIcon: '/images/combat/equipment/magic/greater_imbued_robe_legs.png',
            itemImage: '/images/combat/equipment/magic/robe_legs.png',
            class: 'equipment',
            visual: 'robebottom',
            craftingDescription: 'Requires Defense level of 10 to wield.',
            tags: ['armor', 'range', 'magic', 'hybrid', 'crafting'],
            equipmentStats: {
                slot: 'legs',
                defensiveDamageAffinity: {
                    Melee: 47 / 50,
                    Magic: 1.06,
                    Range: 47 / 50,
                    Piercing: 47 / 50,
                    Blunt: 97 / 100,
                    Slashing: 47 / 50,
                },
                armorBonus: { protection: 17, resistance: 52, agility: 0, stamina: 0 },
                weaponBonus: { strength: 0, intellect: 19, dexterity: 0 },
                augmentationBonus: [
                    { stat: 'armorBonus.protection', value: 7 / 40 },
                    { stat: 'armorBonus.resistance', value: 3 / 8 },
                    { stat: 'weaponBonus.intellect', value: 0.5 },
                ],
                itemSet: [10011, 10013],
            },
            requiredResources: [{ 4018: 222 }],
            category: 'Magic',
            rarity: 'uncommon',
        },
        1198: {
            name: 'Elder Robe Bottom',
            id: 1198,
            enchantmentTier: 6,
            augmentationCost: { 4019: 33 },
            craftingLevel: 59,
            craftingExperience: 43744,
            value: 1111111,
            tradeable: true,
            requiredLevel: { constitution: 1, attack: 1, strength: 1, defense: 60 },



            itemIcon: '/images/combat/equipment/magic/elder_robe_legs.png',
            itemImage: '/images/combat/equipment/magic/robe_legs.png',
            class: 'equipment',
            visual: 'robebottom',
            craftingDescription: 'Requires Defense level of 10 to wield.',
            tags: ['armor', 'range', 'magic', 'hybrid', 'crafting'],
            equipmentStats: {
                slot: 'legs',
                defensiveDamageAffinity: {
                    Melee: 47 / 50,
                    Magic: 1.06,
                    Range: 47 / 50,
                    Piercing: 47 / 50,
                    Blunt: 97 / 100,
                    Slashing: 47 / 50,
                },
                armorBonus: { protection: 22, resistance: 66, agility: 0, stamina: 0 },
                weaponBonus: { strength: 0, intellect: 23, dexterity: 0 },
                augmentationBonus: [
                    { stat: 'armorBonus.protection', value: 21 / 100 },
                    { stat: 'armorBonus.resistance', value: 9 / 20 },
                    { stat: 'weaponBonus.intellect', value: 0.6 },
                ],
                itemSet: [10011, 10013],
            },
            requiredResources: [{ 4019: 323 }],
            category: 'Magic',
            rarity: 'rare',
        },
        1199: {
            name: 'Flimsy Recurve Bow',
            id: 1199,
            tradeable: true,
            enchantmentTier: 1,
            augmentationCost: { 302: 2, 1450: 32 },
            requiredResources: [{ 302: 20, 1450: 300 }],
            craftingLevel: 1,
            craftingExperience: 44,
            value: 54,
            craftable: true,
            type: 'weapon',
            requiredLevel: { constitution: 1, attack: 1, strength: 1, defense: 1, range: 1 },
            skill: 'crafting',
            itemImage: '/images/combat/equipment/range/bow_wood_recurve.png',
            itemIcon: '/images/combat/equipment/range/bow_wood_recurve.png',
            class: 'equipment',
            visual: 'recurvebow',
            craftingDescription: 'Recurve Bow WIP',
            category: 'Range',
            tags: ['range', 'weapon', 'crafting'],
            equipmentStats: {
                slot: 'weapon',
                offensiveCritical: { chance: 1 / 20, damageMultiplier: 1.4 },
                offensiveAccuracyAffinityRating: { Melee: -16, Magic: -16, Range: 4, Piercing: 5 },
                offensiveDamageAffinity: {
                    Melee: 1 / 3,
                    Magic: 0.2,
                    Range: 1,
                    Piercing: 1.25,
                    Blunt: 1 / 4,
                    Slashing: 1 / 4,
                },
                weaponBonus: { strength: 0, intellect: 0, dexterity: 9 },
                attackSpeed: 2.2,
                augmentationBonus: [
                    { stat: 'offensiveAccuracyAffinityRating.Range', value: 0.1 },
                    { stat: 'weaponBonus.dexterity', value: 0.1 },
                ],
            },
        },
        1200: {
            name: 'Sturdy Recurve Bow',
            id: 1200,
            tradeable: true,
            enchantmentTier: 1,
            augmentationCost: { 302: 4, 1451: 32 },
            requiredResources: [{ 302: 35, 1451: 300 }],
            craftingLevel: 2,
            craftingExperience: 66,
            value: 95,
            craftable: true,
            type: 'weapon',
            requiredLevel: { constitution: 1, attack: 1, strength: 1, defense: 1, range: 10 },
            skill: 'crafting',
            itemImage: '/images/combat/equipment/range/bow_sturdy_recurve.png',
            itemIcon: '/images/combat/equipment/range/bow_sturdy_recurve.png',
            class: 'equipment',
            visual: 'recurvebow',
            craftingDescription: 'Recurve Bow WIP',
            category: 'Range',
            tags: ['range', 'weapon', 'crafting'],
            equipmentStats: {
                slot: 'weapon',
                offensiveCritical: { chance: 1 / 20, damageMultiplier: 1.4 },
                offensiveAccuracyAffinityRating: { Melee: -16, Magic: -16, Range: 6, Piercing: 8 },
                offensiveDamageAffinity: {
                    Melee: 1 / 3,
                    Magic: 0.2,
                    Range: 1,
                    Piercing: 1.25,
                    Blunt: 1 / 4,
                    Slashing: 1 / 4,
                },
                weaponBonus: { strength: 0, intellect: 0, dexterity: 11 },
                attackSpeed: 2.2,
                augmentationBonus: [
                    { stat: 'offensiveAccuracyAffinityRating.Range', value: 0.5 },
                    { stat: 'weaponBonus.dexterity', value: 0.5 },
                ],
            },
        },
        1201: {
            name: 'Oak Recurve Bow',
            id: 1201,
            tradeable: true,
            enchantmentTier: 2,
            augmentationCost: { 303: 5, 1452: 32 },
            requiredResources: [{ 303: 50, 1452: 300 }],
            craftingLevel: 5,
            craftingExperience: 180,
            value: 450,
            craftable: true,
            type: 'weapon',
            requiredLevel: { constitution: 1, attack: 1, strength: 1, defense: 1, range: 20 },
            skill: 'crafting',
            itemImage: '/images/combat/equipment/range/bow_sturdy_recurve.png',
            itemIcon: '/images/combat/equipment/range/bow_sturdy_recurve.png',
            class: 'equipment',
            visual: 'recurvebow',
            craftingDescription: 'Recurve Bow WIP',
            category: 'Range',
            tags: ['range', 'weapon', 'crafting'],
            equipmentStats: {
                slot: 'weapon',
                offensiveCritical: { chance: 1 / 20, damageMultiplier: 1.4 },
                offensiveAccuracyAffinityRating: { Melee: -16, Magic: -16, Range: 15, Piercing: 20 },
                offensiveDamageAffinity: {
                    Melee: 1 / 3,
                    Magic: 0.2,
                    Range: 1,
                    Piercing: 1.25,
                    Blunt: 1 / 4,
                    Slashing: 1 / 4,
                },
                weaponBonus: { strength: 0, intellect: 0, dexterity: 18 },
                attackSpeed: 2.2,
                augmentationBonus: [
                    { stat: 'offensiveAccuracyAffinityRating.Range', value: 1 },
                    { stat: 'weaponBonus.dexterity', value: 1 },
                ],
            },
        },
        1202: {
            name: 'Willow Recurve Bow',
            id: 1202,
            tradeable: true,
            enchantmentTier: 3,
            augmentationCost: { 304: 8, 1453: 32 },
            requiredResources: [{ 304: 72, 1453: 300 }],
            craftingLevel: 9,
            craftingExperience: 526,
            value: 1296,
            craftable: true,
            type: 'weapon',
            requiredLevel: { constitution: 1, attack: 1, strength: 1, defense: 1, range: 30 },
            skill: 'crafting',
            itemImage: '/images/combat/equipment/range/bow_wood_recurve.png',
            itemIcon: '/images/combat/equipment/range/bow_willow.png',
            class: 'equipment',
            visual: 'recurvebow',
            craftingDescription: 'Recurve Bow WIP',
            category: 'Range',
            tags: ['range', 'weapon', 'crafting'],
            equipmentStats: {
                slot: 'weapon',
                offensiveCritical: { chance: 1 / 20, damageMultiplier: 1.4 },
                offensiveAccuracyAffinityRating: { Melee: -16, Magic: -16, Range: 26, Piercing: 35 },
                offensiveDamageAffinity: {
                    Melee: 1 / 3,
                    Magic: 0.2,
                    Range: 1,
                    Piercing: 1.25,
                    Blunt: 1 / 4,
                    Slashing: 1 / 4,
                },
                weaponBonus: { strength: 0, intellect: 0, dexterity: 27 },
                attackSpeed: 2.2,
                augmentationBonus: [
                    { stat: 'offensiveAccuracyAffinityRating.Range', value: 1.5 },
                    { stat: 'weaponBonus.dexterity', value: 1.5 },
                ],
            },
        },
        1203: {
            name: 'Maple Recurve Bow',
            id: 1203,
            tradeable: true,
            enchantmentTier: 4,
            augmentationCost: { 305: 11, 1454: 32 },
            requiredResources: [{ 305: 102, 1454: 300 }],
            craftingLevel: 16,
            craftingExperience: 1677,
            value: 3672,
            craftable: true,
            type: 'weapon',
            requiredLevel: { constitution: 1, attack: 1, strength: 1, defense: 1, range: 40 },
            skill: 'crafting',
            itemImage: '/images/combat/equipment/range/bow_wood_recurve.png',
            itemIcon: '/images/combat/equipment/range/bow_yew.png',
            class: 'equipment',
            visual: 'recurvebow',
            craftingDescription: 'Recurve Bow WIP',
            category: 'Range',
            tags: ['range', 'weapon', 'crafting'],
            equipmentStats: {
                slot: 'weapon',
                offensiveCritical: { chance: 1 / 20, damageMultiplier: 1.4 },
                offensiveAccuracyAffinityRating: { Melee: -16, Magic: -16, Range: 38, Piercing: 51 },
                offensiveDamageAffinity: {
                    Melee: 1 / 3,
                    Magic: 0.2,
                    Range: 1,
                    Piercing: 1.25,
                    Blunt: 1 / 4,
                    Slashing: 1 / 4,
                },
                weaponBonus: { strength: 0, intellect: 0, dexterity: 37 },
                attackSpeed: 2.2,
                augmentationBonus: [
                    { stat: 'offensiveAccuracyAffinityRating.Range', value: 2 },
                    { stat: 'weaponBonus.dexterity', value: 2 },
                ],
            },
        },
        1204: {
            name: 'Yew Recurve Bow',
            id: 1204,
            tradeable: true,
            enchantmentTier: 5,
            augmentationCost: { 306: 15, 1455: 32 },
            requiredResources: [{ 306: 146, 1455: 300 }],
            craftingLevel: 27,
            craftingExperience: 5770,
            value: 13140,
            craftable: true,
            type: 'weapon',
            requiredLevel: { constitution: 1, attack: 1, strength: 1, defense: 1, range: 50 },
            skill: 'crafting',
            itemImage: '/images/combat/equipment/range/bow_wood_recurve.png',
            itemIcon: '/images/combat/equipment/range/bow_yew.png',
            class: 'equipment',
            visual: 'recurvebow',
            craftingDescription: 'Recurve Bow WIP',
            category: 'Range',
            tags: ['range', 'weapon', 'crafting'],
            equipmentStats: {
                slot: 'weapon',
                offensiveCritical: { chance: 1 / 20, damageMultiplier: 1.4 },
                offensiveAccuracyAffinityRating: { Melee: -16, Magic: -16, Range: 52, Piercing: 69 },
                offensiveDamageAffinity: {
                    Melee: 1 / 3,
                    Magic: 0.2,
                    Range: 1,
                    Piercing: 1.25,
                    Blunt: 1 / 4,
                    Slashing: 1 / 4,
                },
                weaponBonus: { strength: 0, intellect: 0, dexterity: 48 },
                attackSpeed: 2.2,
                augmentationBonus: [
                    { stat: 'offensiveAccuracyAffinityRating.Range', value: 2.5 },
                    { stat: 'weaponBonus.dexterity', value: 2.5 },
                ],
            },
            rarity: 'uncommon',
        },
        1205: {
            name: 'Elder Recurve Bow',
            id: 1205,
            tradeable: true,
            enchantmentTier: 6,
            augmentationCost: { 307: 21, 1456: 32 },
            requiredResources: [{ 307: 208, 1456: 300 }],
            craftingLevel: 48,
            craftingExperience: 21229,
            value: 46800,
            craftable: true,
            type: 'weapon',
            requiredLevel: { constitution: 1, attack: 1, strength: 1, defense: 1, range: 60 },
            skill: 'crafting',
            itemImage: '/images/combat/equipment/range/bow_wood_recurve.png',
            itemIcon: '/images/combat/equipment/range/bow_elder.png',
            class: 'equipment',
            visual: 'recurvebow',
            craftingDescription: 'Recurve Bow WIP',
            category: 'Range',
            tags: ['range', 'weapon', 'crafting'],
            equipmentStats: {
                slot: 'weapon',
                offensiveCritical: { chance: 1 / 20, damageMultiplier: 1.4 },
                offensiveAccuracyAffinityRating: { Melee: -16, Magic: -16, Range: 66, Piercing: 88 },
                offensiveDamageAffinity: {
                    Melee: 1 / 3,
                    Magic: 0.2,
                    Range: 1,
                    Piercing: 1.25,
                    Blunt: 1 / 4,
                    Slashing: 1 / 4,
                },
                weaponBonus: { strength: 0, intellect: 0, dexterity: 59 },
                attackSpeed: 2.2,
                augmentationBonus: [
                    { stat: 'offensiveAccuracyAffinityRating.Range', value: 3 },
                    { stat: 'weaponBonus.dexterity', value: 3 },
                ],
            },
            rarity: 'rare',
        },
        1206: {
            name: 'Flimsy Longbow',
            id: 1206,
            tradeable: true,
            enchantmentTier: 1,
            augmentationCost: { 302: 3, 1450: 32 },
            requiredResources: [{ 302: 30, 1450: 300 }],
            craftingLevel: 2,
            craftingExperience: 68,
            value: 81,
            craftable: true,
            type: 'weapon',
            requiredLevel: { constitution: 1, attack: 1, strength: 1, defense: 1, range: 1 },
            skill: 'crafting',
            itemImage: '/images/combat/equipment/range/bow_wood.png',
            itemIcon: '/images/combat/equipment/range/bow_wood.png',
            class: 'equipment',
            visual: 'longbow',
            craftingDescription: 'Longbow WIP',
            category: 'Range',
            tags: ['range', 'weapon', 'crafting'],
            equipmentStats: {
                slot: 'weapon',
                offensiveCritical: { chance: 1 / 20, damageMultiplier: 1.3 },
                offensiveAccuracyAffinityRating: {
                    Melee: -18,
                    Magic: -18,
                    Range: 6,
                    Piercing: 7,
                    Blunt: 1,
                    Slashing: 1,
                },
                offensiveDamageAffinity: {
                    Melee: 1 / 4,
                    Magic: 0.2,
                    Range: 1,
                    Piercing: 1.3333333333333333,
                    Blunt: 0.5,
                    Slashing: 0.5,
                },
                weaponBonus: { strength: 0, intellect: 0, dexterity: 19 },
                attackSpeed: 2.8,
                augmentationBonus: [
                    { stat: 'offensiveAccuracyAffinityRating.Range', value: 0.1 },
                    { stat: 'weaponBonus.dexterity', value: 0.1 },
                ],
            },
        },
        1207: {
            name: 'Sturdy Longbow',
            id: 1207,
            tradeable: true,
            enchantmentTier: 1,
            augmentationCost: { 302: 6, 1451: 32 },
            requiredResources: [{ 302: 60, 1451: 300 }],
            craftingLevel: 5,
            craftingExperience: 148,
            value: 162,
            craftable: true,
            type: 'weapon',
            requiredLevel: { constitution: 1, attack: 1, strength: 1, defense: 1, range: 10 },
            skill: 'crafting',
            itemImage: '/images/combat/equipment/range/bow_sturdy.png',
            itemIcon: '/images/combat/equipment/range/bow_sturdy.png',
            class: 'equipment',
            visual: 'longbow',
            craftingDescription: 'Longbow WIP',
            category: 'Range',
            tags: ['range', 'weapon', 'crafting'],
            equipmentStats: {
                slot: 'weapon',
                offensiveCritical: { chance: 1 / 20, damageMultiplier: 1.3 },
                offensiveAccuracyAffinityRating: {
                    Melee: -18,
                    Magic: -18,
                    Range: 9,
                    Piercing: 10,
                    Blunt: 2,
                    Slashing: 2,
                },
                offensiveDamageAffinity: {
                    Melee: 1 / 4,
                    Magic: 0.2,
                    Range: 1,
                    Piercing: 1.3333333333333333,
                    Blunt: 0.5,
                    Slashing: 0.5,
                },
                weaponBonus: { strength: 0, intellect: 0, dexterity: 26 },
                attackSpeed: 2.8,
                augmentationBonus: [
                    { stat: 'offensiveAccuracyAffinityRating.Range', value: 0.5 },
                    { stat: 'weaponBonus.dexterity', value: 0.5 },
                ],
            },
        },
        1208: {
            name: 'Oak Longbow',
            id: 1208,
            tradeable: true,
            enchantmentTier: 2,
            augmentationCost: { 303: 9, 1452: 32 },
            requiredResources: [{ 303: 89, 1452: 300 }],
            craftingLevel: 11,
            craftingExperience: 403,
            value: 801,
            craftable: true,
            type: 'weapon',
            requiredLevel: { constitution: 1, attack: 1, strength: 1, defense: 1, range: 20 },
            skill: 'crafting',
            itemImage: '/images/combat/equipment/range/bow_sturdy.png',
            itemIcon: '/images/combat/equipment/range/bow_sturdy.png',
            class: 'equipment',
            visual: 'longbow',
            craftingDescription: 'Longbow WIP',
            category: 'Range',
            tags: ['range', 'weapon', 'crafting'],
            equipmentStats: {
                slot: 'weapon',
                offensiveCritical: { chance: 1 / 20, damageMultiplier: 1.3 },
                offensiveAccuracyAffinityRating: {
                    Melee: -18,
                    Magic: -18,
                    Range: 23,
                    Piercing: 25,
                    Blunt: 5,
                    Slashing: 5,
                },
                offensiveDamageAffinity: {
                    Melee: 1 / 4,
                    Magic: 0.2,
                    Range: 1,
                    Piercing: 1.3333333333333333,
                    Blunt: 0.5,
                    Slashing: 0.5,
                },
                weaponBonus: { strength: 0, intellect: 0, dexterity: 40 },
                attackSpeed: 2.8,
                augmentationBonus: [
                    { stat: 'offensiveAccuracyAffinityRating.Range', value: 1 },
                    { stat: 'weaponBonus.dexterity', value: 1 },
                ],
            },
        },
        1209: {
            name: 'Willow Longbow',
            id: 1209,
            tradeable: true,
            enchantmentTier: 3,
            augmentationCost: { 304: 14, 1453: 32 },
            requiredResources: [{ 304: 131, 1453: 300 }],
            craftingLevel: 18,
            craftingExperience: 1179,
            value: 2358,
            craftable: true,
            type: 'weapon',
            requiredLevel: { constitution: 1, attack: 1, strength: 1, defense: 1, range: 30 },
            skill: 'crafting',
            itemImage: '/images/combat/equipment/range/bow_wood.png',
            itemIcon: '/images/combat/equipment/range/bow_willow.png',
            class: 'equipment',
            visual: 'longbow',
            craftingDescription: 'Longbow WIP',
            category: 'Range',
            tags: ['range', 'weapon', 'crafting'],
            equipmentStats: {
                slot: 'weapon',
                offensiveCritical: { chance: 1 / 20, damageMultiplier: 1.3 },
                offensiveAccuracyAffinityRating: {
                    Melee: -18,
                    Magic: -18,
                    Range: 39,
                    Piercing: 44,
                    Blunt: 9,
                    Slashing: 9,
                },
                offensiveDamageAffinity: {
                    Melee: 1 / 4,
                    Magic: 0.2,
                    Range: 1,
                    Piercing: 1.3333333333333333,
                    Blunt: 0.5,
                    Slashing: 0.5,
                },
                weaponBonus: { strength: 0, intellect: 0, dexterity: 52 },
                attackSpeed: 2.8,
                augmentationBonus: [
                    { stat: 'offensiveAccuracyAffinityRating.Range', value: 1.5 },
                    { stat: 'weaponBonus.dexterity', value: 1.5 },
                ],
            },
        },
        1210: {
            name: 'Maple Longbow',
            id: 1210,
            tradeable: true,
            enchantmentTier: 4,
            augmentationCost: { 305: 20, 1454: 32 },
            requiredResources: [{ 305: 194, 1454: 300 }],
            craftingLevel: 28,
            craftingExperience: 3759,
            value: 6984,
            craftable: true,
            type: 'weapon',
            requiredLevel: { constitution: 1, attack: 1, strength: 1, defense: 1, range: 40 },
            skill: 'crafting',
            itemImage: '/images/combat/equipment/range/bow_wood.png',
            itemIcon: '/images/combat/equipment/range/bow_yew.png',
            class: 'equipment',
            visual: 'longbow',
            craftingDescription: 'Longbow WIP',
            category: 'Range',
            tags: ['range', 'weapon', 'crafting'],
            equipmentStats: {
                slot: 'weapon',
                offensiveCritical: { chance: 1 / 20, damageMultiplier: 1.3 },
                offensiveAccuracyAffinityRating: {
                    Melee: -18,
                    Magic: -18,
                    Range: 58,
                    Piercing: 64,
                    Blunt: 13,
                    Slashing: 13,
                },
                offensiveDamageAffinity: {
                    Melee: 1 / 4,
                    Magic: 0.2,
                    Range: 1,
                    Piercing: 1.3333333333333333,
                    Blunt: 0.5,
                    Slashing: 0.5,
                },
                weaponBonus: { strength: 0, intellect: 0, dexterity: 64 },
                attackSpeed: 2.8,
                augmentationBonus: [
                    { stat: 'offensiveAccuracyAffinityRating.Range', value: 2 },
                    { stat: 'weaponBonus.dexterity', value: 2 },
                ],
            },
        },
        1211: {
            name: 'Yew Longbow',
            id: 1211,
            tradeable: true,
            enchantmentTier: 5,
            augmentationCost: { 306: 29, 1455: 32 },
            requiredResources: [{ 306: 286, 1455: 300 }],
            craftingLevel: 41,
            craftingExperience: 12938,
            value: 25740,
            craftable: true,
            type: 'weapon',
            requiredLevel: { constitution: 1, attack: 1, strength: 1, defense: 1, range: 50 },
            skill: 'crafting',
            itemImage: '/images/combat/equipment/range/bow_wood.png',
            itemIcon: '/images/combat/equipment/range/bow_yew.png',
            class: 'equipment',
            visual: 'longbow',
            craftingDescription: 'Longbow WIP',
            category: 'Range',
            tags: ['range', 'weapon', 'crafting'],
            equipmentStats: {
                slot: 'weapon',
                offensiveCritical: { chance: 1 / 20, damageMultiplier: 1.3 },
                offensiveAccuracyAffinityRating: {
                    Melee: -18,
                    Magic: -18,
                    Range: 78,
                    Piercing: 86,
                    Blunt: 17,
                    Slashing: 17,
                },
                offensiveDamageAffinity: {
                    Melee: 1 / 4,
                    Magic: 0.2,
                    Range: 1,
                    Piercing: 1.3333333333333333,
                    Blunt: 0.5,
                    Slashing: 0.5,
                },
                weaponBonus: { strength: 0, intellect: 0, dexterity: 75 },
                attackSpeed: 2.8,
                augmentationBonus: [
                    { stat: 'offensiveAccuracyAffinityRating.Range', value: 2.5 },
                    { stat: 'weaponBonus.dexterity', value: 2.5 },
                ],
            },
            rarity: 'uncommon',
        },
        1212: {
            name: 'Elder Longbow',
            id: 1212,
            tradeable: true,
            enchantmentTier: 6,
            augmentationCost: { 307: 43, 1456: 32 },
            requiredResources: [{ 307: 422, 1456: 300 }],
            craftingLevel: 59,
            craftingExperience: 47604,
            value: 94950,
            craftable: true,
            type: 'weapon',
            requiredLevel: { constitution: 1, attack: 1, strength: 1, defense: 1, range: 60 },
            skill: 'crafting',
            itemImage: '/images/combat/equipment/range/bow_wood.png',
            itemIcon: '/images/combat/equipment/range/bow_elder.png',
            class: 'equipment',
            visual: 'longbow',
            craftingDescription: 'Longbow WIP',
            category: 'Range',
            tags: ['range', 'weapon', 'crafting'],
            equipmentStats: {
                slot: 'weapon',
                offensiveCritical: { chance: 1 / 20, damageMultiplier: 1.3 },
                offensiveAccuracyAffinityRating: {
                    Melee: -18,
                    Magic: -18,
                    Range: 99,
                    Piercing: 110,
                    Blunt: 22,
                    Slashing: 22,
                },
                offensiveDamageAffinity: {
                    Melee: 1 / 4,
                    Magic: 0.2,
                    Range: 1,
                    Piercing: 1.3333333333333333,
                    Blunt: 0.5,
                    Slashing: 0.5,
                },
                weaponBonus: { strength: 0, intellect: 0, dexterity: 99 },
                attackSpeed: 2.8,
                augmentationBonus: [
                    { stat: 'offensiveAccuracyAffinityRating.Range', value: 3 },
                    { stat: 'weaponBonus.dexterity', value: 3 },
                ],
            },
            rarity: 'rare',
        },
        1213: {
            name: 'Flimsy Crossbow',
            id: 1213,
            tradeable: true,
            enchantmentTier: 1,
            augmentationCost: { 201: 1, 302: 3, 1450: 32 },
            requiredResources: [{ 201: 5, 302: 25, 1450: 300 }],
            craftingLevel: 3,
            craftingExperience: 78,
            value: 180,
            craftable: true,
            type: 'weapon',
            requiredLevel: { constitution: 1, attack: 1, strength: 1, defense: 1, range: 1 },
            skill: 'crafting',
            itemImage: '/images/combat/equipment/range/crossbow_wood.png',
            visual: 'crossbow',
            itemIcon: '/images/combat/equipment/range/crossbow_wood.png',
            class: 'equipment',
            craftingDescription: 'Crossbow WIP',
            category: 'Range',
            tags: ['range', 'weapon', 'crafting'],
            equipmentStats: {
                slot: 'weapon',
                offensiveCritical: { chance: 1 / 20, damageMultiplier: 1.25 },
                offensiveAccuracyAffinityRating: {
                    Melee: -24,
                    Magic: -24,
                    Range: 8,
                    Piercing: 10,
                    Blunt: 3,
                    Slashing: 3,
                },
                offensiveDamageAffinity: {
                    Melee: 1 / 3,
                    Magic: 0.2,
                    Range: 1,
                    Piercing: 1.3333333333333333,
                    Blunt: 3 / 4,
                    Slashing: 3 / 4,
                },
                weaponBonus: { strength: 0, intellect: 0, dexterity: 17 },
                attackSpeed: 3.2,
                augmentationBonus: [
                    { stat: 'offensiveAccuracyAffinityRating.Range', value: 0.1 },
                    { stat: 'weaponBonus.dexterity', value: 0.1 },
                ],
                oneHanded: true,
            },
        },
        1214: {
            name: 'Light Crossbow',
            id: 1214,
            tradeable: true,
            enchantmentTier: 1,
            augmentationCost: { 201: 1, 302: 5, 1451: 32 },
            requiredResources: [{ 201: 5, 302: 50, 1451: 300 }],
            craftingLevel: 6,
            craftingExperience: 162,
            value: 248,
            craftable: true,
            type: 'weapon',
            requiredLevel: { constitution: 1, attack: 1, strength: 1, defense: 1, range: 10 },
            skill: 'crafting',
            itemImage: '/images/combat/equipment/range/crossbow_sturdy.png',
            visual: 'crossbow',
            itemIcon: '/images/combat/equipment/range/crossbow_sturdy.png',
            class: 'equipment',
            craftingDescription: 'Crossbow WIP',
            category: 'Range',
            tags: ['range', 'weapon', 'crafting'],
            equipmentStats: {
                slot: 'weapon',
                offensiveCritical: { chance: 1 / 20, damageMultiplier: 1.25 },
                offensiveAccuracyAffinityRating: {
                    Melee: -24,
                    Magic: -24,
                    Range: 12,
                    Piercing: 14,
                    Blunt: 4,
                    Slashing: 4,
                },
                offensiveDamageAffinity: {
                    Melee: 1 / 3,
                    Magic: 0.2,
                    Range: 1,
                    Piercing: 1.3333333333333333,
                    Blunt: 3 / 4,
                    Slashing: 3 / 4,
                },
                weaponBonus: { strength: 0, intellect: 0, dexterity: 20 },
                attackSpeed: 3.2,
                augmentationBonus: [
                    { stat: 'offensiveAccuracyAffinityRating.Range', value: 0.5 },
                    { stat: 'weaponBonus.dexterity', value: 0.5 },
                ],
                oneHanded: true,
            },
        },
        1215: {
            name: 'Bone Crossbow',
            id: 1215,
            tradeable: true,
            enchantmentTier: 2,
            augmentationCost: { 202: 1, 303: 8, 1452: 32 },
            requiredResources: [{ 202: 6, 303: 73, 1452: 300 }],
            craftingLevel: 13,
            craftingExperience: 441,
            value: 2007,
            craftable: true,
            type: 'weapon',
            requiredLevel: { constitution: 1, attack: 1, strength: 1, defense: 1, range: 20 },
            skill: 'crafting',
            itemImage: '/images/combat/equipment/range/crossbow_wood.png',
            visual: 'crossbow',
            itemIcon: '/images/combat/equipment/range/crossbow_bone.png',
            class: 'equipment',
            craftingDescription: 'Crossbow WIP',
            category: 'Range',
            tags: ['range', 'weapon', 'crafting'],
            equipmentStats: {
                slot: 'weapon',
                offensiveCritical: { chance: 1 / 20, damageMultiplier: 1.25 },
                offensiveAccuracyAffinityRating: {
                    Melee: -24,
                    Magic: -24,
                    Range: 30,
                    Piercing: 35,
                    Blunt: 10,
                    Slashing: 10,
                },
                offensiveDamageAffinity: {
                    Melee: 1 / 3,
                    Magic: 0.2,
                    Range: 1,
                    Piercing: 1.3333333333333333,
                    Blunt: 3 / 4,
                    Slashing: 3 / 4,
                },
                weaponBonus: { strength: 0, intellect: 0, dexterity: 33 },
                attackSpeed: 3.2,
                augmentationBonus: [
                    { stat: 'offensiveAccuracyAffinityRating.Range', value: 1 },
                    { stat: 'weaponBonus.dexterity', value: 1 },
                ],
                oneHanded: true,
            },
        },
        1216: {
            name: 'Heavy Crossbow',
            id: 1216,
            tradeable: true,
            enchantmentTier: 3,
            augmentationCost: { 204: 1, 304: 11, 1453: 32 },
            requiredResources: [{ 204: 7, 304: 106, 1453: 300 }],
            craftingLevel: 21,
            craftingExperience: 1291,
            value: 5058,
            craftable: true,
            type: 'weapon',
            requiredLevel: { constitution: 1, attack: 1, strength: 1, defense: 1, range: 30 },
            skill: 'crafting',
            itemImage: '/images/combat/equipment/range/crossbow_wood.png',
            visual: 'crossbow',
            itemIcon: '/images/combat/equipment/range/crossbow_heavy.png',
            class: 'equipment',
            craftingDescription: 'Crossbow WIP',
            category: 'Range',
            tags: ['range', 'weapon', 'crafting'],
            equipmentStats: {
                slot: 'weapon',
                offensiveCritical: { chance: 1 / 20, damageMultiplier: 1.25 },
                offensiveAccuracyAffinityRating: {
                    Melee: -24,
                    Magic: -24,
                    Range: 52,
                    Piercing: 61,
                    Blunt: 17,
                    Slashing: 17,
                },
                offensiveDamageAffinity: {
                    Melee: 1 / 3,
                    Magic: 0.2,
                    Range: 1,
                    Piercing: 1.3333333333333333,
                    Blunt: 3 / 4,
                    Slashing: 3 / 4,
                },
                weaponBonus: { strength: 0, intellect: 0, dexterity: 49 },
                attackSpeed: 3.2,
                augmentationBonus: [
                    { stat: 'offensiveAccuracyAffinityRating.Range', value: 1.5 },
                    { stat: 'weaponBonus.dexterity', value: 1.5 },
                ],
                oneHanded: true,
            },
        },
        1217: {
            name: 'Reinforced Crossbow',
            id: 1217,
            tradeable: true,
            enchantmentTier: 4,
            augmentationCost: { 205: 1, 305: 16, 1454: 32 },
            requiredResources: [{ 205: 9, 305: 153, 1454: 300 }],
            craftingLevel: 31,
            craftingExperience: 4115,
            value: 21708,
            craftable: true,
            type: 'weapon',
            requiredLevel: { constitution: 1, attack: 1, strength: 1, defense: 1, range: 40 },
            skill: 'crafting',
            itemImage: '/images/combat/equipment/range/crossbow_wood.png',
            visual: 'crossbow',
            itemIcon: '/images/combat/equipment/range/crossbow_metal.png',
            class: 'equipment',
            craftingDescription: 'Crossbow WIP',
            category: 'Range',
            tags: ['range', 'weapon', 'crafting'],
            equipmentStats: {
                slot: 'weapon',
                offensiveCritical: { chance: 1 / 20, damageMultiplier: 1.25 },
                offensiveAccuracyAffinityRating: {
                    Melee: -24,
                    Magic: -24,
                    Range: 77,
                    Piercing: 90,
                    Blunt: 26,
                    Slashing: 26,
                },
                offensiveDamageAffinity: {
                    Melee: 1 / 3,
                    Magic: 0.2,
                    Range: 1,
                    Piercing: 1.3333333333333333,
                    Blunt: 3 / 4,
                    Slashing: 3 / 4,
                },
                weaponBonus: { strength: 0, intellect: 0, dexterity: 67 },
                attackSpeed: 3.2,
                augmentationBonus: [
                    { stat: 'offensiveAccuracyAffinityRating.Range', value: 2 },
                    { stat: 'weaponBonus.dexterity', value: 2 },
                ],
                oneHanded: true,
            },
        },
        1218: {
            name: 'Arbalest',
            id: 1218,
            tradeable: true,
            enchantmentTier: 5,
            augmentationCost: { 206: 1, 306: 23, 1455: 32 },
            requiredResources: [{ 206: 10, 306: 222, 1455: 300 }],
            craftingLevel: 44,
            craftingExperience: 14162,
            value: 82980,
            craftable: true,
            type: 'weapon',
            requiredLevel: { constitution: 1, attack: 1, strength: 1, defense: 1, range: 50 },
            skill: 'crafting',
            itemImage: '/images/combat/equipment/range/crossbow_wood.png',
            visual: 'crossbow',
            itemIcon: '/images/combat/equipment/range/crossbow_arbalest.png',
            class: 'equipment',
            craftingDescription: 'Crossbow WIP',
            category: 'Range',
            tags: ['range', 'weapon', 'crafting'],
            equipmentStats: {
                slot: 'weapon',
                offensiveCritical: { chance: 1 / 20, damageMultiplier: 1.25 },
                offensiveAccuracyAffinityRating: {
                    Melee: -24,
                    Magic: -24,
                    Range: 104,
                    Piercing: 121,
                    Blunt: 35,
                    Slashing: 35,
                },
                offensiveDamageAffinity: {
                    Melee: 1 / 3,
                    Magic: 0.2,
                    Range: 1,
                    Piercing: 1.3333333333333333,
                    Blunt: 3 / 4,
                    Slashing: 3 / 4,
                },
                weaponBonus: { strength: 0, intellect: 0, dexterity: 86 },
                attackSpeed: 3.2,
                augmentationBonus: [
                    { stat: 'offensiveAccuracyAffinityRating.Range', value: 2.5 },
                    { stat: 'weaponBonus.dexterity', value: 2.5 },
                ],
                oneHanded: true,
            },
            rarity: 'uncommon',
        },
        1219: {
            name: 'Elder Crossbow',
            id: 1219,
            tradeable: true,
            enchantmentTier: 6,
            augmentationCost: { 207: 2, 307: 33, 1456: 32 },
            requiredResources: [{ 207: 12, 307: 323, 1456: 300 }],
            craftingLevel: 61,
            craftingExperience: 52107,
            value: 169875,
            craftable: true,
            type: 'weapon',
            requiredLevel: { constitution: 1, attack: 1, strength: 1, defense: 1, range: 60 },
            skill: 'crafting',
            itemImage: '/images/combat/equipment/range/crossbow_wood.png',
            visual: 'crossbow',
            itemIcon: '/images/combat/equipment/range/crossbow_elder.png',
            class: 'equipment',
            craftingDescription: 'Crossbow WIP',
            category: 'Range',
            tags: ['range', 'weapon', 'crafting'],
            equipmentStats: {
                slot: 'weapon',
                offensiveCritical: { chance: 1 / 20, damageMultiplier: 1.25 },
                offensiveAccuracyAffinityRating: {
                    Melee: -24,
                    Magic: -24,
                    Range: 132,
                    Piercing: 154,
                    Blunt: 44,
                    Slashing: 44,
                },
                offensiveDamageAffinity: {
                    Melee: 1 / 3,
                    Magic: 0.2,
                    Range: 1,
                    Piercing: 1.3333333333333333,
                    Blunt: 3 / 4,
                    Slashing: 3 / 4,
                },
                weaponBonus: { strength: 0, intellect: 0, dexterity: 107 },
                attackSpeed: 3.2,
                augmentationBonus: [
                    { stat: 'offensiveAccuracyAffinityRating.Range', value: 3 },
                    { stat: 'weaponBonus.dexterity', value: 3 },
                ],
                oneHanded: true,
            },
            rarity: 'rare',
        },
        1220: {
            name: 'Rough Throwing Knife',
            id: 1220,
            tradeable: true,
            enchantmentTier: 1,
            augmentationCost: { 201: 1, 302: 1, 1450: 32 },
            requiredResources: [{ 201: 5, 302: 10, 1450: 300 }],
            craftingLevel: 1,
            craftingExperience: 34,
            value: 140,
            craftable: true,
            type: 'weapon',
            requiredLevel: { constitution: 1, attack: 1, strength: 1, defense: 1, range: 1 },
            skill: 'crafting',
            itemImage: '/images/combat/equipment/range/bronze_knife.png',
            itemIcon: '/images/combat/equipment/range/thrown_knife_rough.png',
            class: 'equipment',
            visual: 'throwingdagger',
            craftingDescription: 'Throwing WIP',
            category: 'Range',
            tags: ['range', 'weapon', 'crafting'],
            equipmentStats: {
                slot: 'weapon',
                offensiveCritical: { chance: 1 / 20, damageMultiplier: 1.25 },
                offensiveAccuracyAffinityRating: {
                    Melee: -5,
                    Magic: -20,
                    Range: 7,
                    Piercing: 3,
                    Blunt: 3,
                    Slashing: 3,
                },
                offensiveDamageAffinity: {
                    Melee: 3 / 4,
                    Magic: 1 / 3,
                    Range: 1,
                    Piercing: 1,
                    Blunt: 1,
                    Slashing: 1,
                },
                weaponBonus: { strength: 0, intellect: 0, dexterity: 11 },
                attackSpeed: 2.5,
                augmentationBonus: [
                    { stat: 'offensiveAccuracyAffinityRating.Range', value: 0.1 },
                    { stat: 'weaponBonus.dexterity', value: 0.1 },
                ],
                oneHanded: true,
            },
        },
        1221: {
            name: 'Throwing Knife',
            id: 1221,
            tradeable: true,
            enchantmentTier: 1,
            augmentationCost: { 201: 1, 302: 3, 1451: 32 },
            requiredResources: [{ 201: 5, 302: 25, 1451: 300 }],
            craftingLevel: 3,
            craftingExperience: 90,
            value: 180,
            craftable: true,
            type: 'weapon',
            requiredLevel: { constitution: 1, attack: 1, strength: 1, defense: 1, range: 10 },
            skill: 'crafting',
            itemImage: '/images/combat/equipment/range/iron_knife.png',
            itemIcon: '/images/combat/equipment/range/thrown_knife.png',
            class: 'equipment',
            visual: 'throwingdagger',
            craftingDescription: 'Throwing WIP',
            category: 'Range',
            tags: ['range', 'weapon', 'crafting'],
            equipmentStats: {
                slot: 'weapon',
                offensiveCritical: { chance: 1 / 20, damageMultiplier: 1.25 },
                offensiveAccuracyAffinityRating: {
                    Melee: -5,
                    Magic: -20,
                    Range: 10,
                    Piercing: 4,
                    Blunt: 4,
                    Slashing: 4,
                },
                offensiveDamageAffinity: {
                    Melee: 3 / 4,
                    Magic: 1 / 3,
                    Range: 1,
                    Piercing: 1,
                    Blunt: 1,
                    Slashing: 1,
                },
                weaponBonus: { strength: 0, intellect: 0, dexterity: 13 },
                attackSpeed: 2.5,
                augmentationBonus: [
                    { stat: 'offensiveAccuracyAffinityRating.Range', value: 0.5 },
                    { stat: 'weaponBonus.dexterity', value: 0.5 },
                ],
                oneHanded: true,
            },
        },
        1222: {
            name: 'Light Throwing Knife',
            id: 1222,
            tradeable: true,
            enchantmentTier: 2,
            augmentationCost: { 202: 1, 303: 4, 1452: 32 },
            requiredResources: [{ 202: 6, 303: 35, 1452: 300 }],
            craftingLevel: 7,
            craftingExperience: 245,
            value: 1665,
            craftable: true,
            type: 'weapon',
            requiredLevel: { constitution: 1, attack: 1, strength: 1, defense: 1, range: 20 },
            skill: 'crafting',
            itemImage: '/images/combat/equipment/range/obby_knife.png',
            itemIcon: '/images/combat/equipment/range/thrown_knife_2.png',
            class: 'equipment',
            visual: 'throwingdagger',
            craftingDescription: 'Throwing WIP',
            category: 'Range',
            tags: ['range', 'weapon', 'crafting'],
            equipmentStats: {
                slot: 'weapon',
                offensiveCritical: { chance: 1 / 20, damageMultiplier: 1.25 },
                offensiveAccuracyAffinityRating: {
                    Melee: -5,
                    Magic: -20,
                    Range: 25,
                    Piercing: 10,
                    Blunt: 10,
                    Slashing: 10,
                },
                offensiveDamageAffinity: {
                    Melee: 3 / 4,
                    Magic: 1 / 3,
                    Range: 1,
                    Piercing: 1,
                    Blunt: 1,
                    Slashing: 1,
                },
                weaponBonus: { strength: 0, intellect: 0, dexterity: 22 },
                attackSpeed: 2.5,
                augmentationBonus: [
                    { stat: 'offensiveAccuracyAffinityRating.Range', value: 1 },
                    { stat: 'weaponBonus.dexterity', value: 1 },
                ],
                oneHanded: true,
            },
        },
        1223: {
            name: 'Refined Throwing Knife',
            id: 1223,
            tradeable: true,
            enchantmentTier: 3,
            augmentationCost: { 204: 1, 304: 5, 1453: 32 },
            requiredResources: [{ 204: 7, 304: 48, 1453: 300 }],
            craftingLevel: 12,
            craftingExperience: 717,
            value: 4014,
            craftable: true,
            type: 'weapon',
            requiredLevel: { constitution: 1, attack: 1, strength: 1, defense: 1, range: 30 },
            skill: 'crafting',
            itemImage: '/images/combat/equipment/range/mithril_knife.png',
            itemIcon: '/images/combat/equipment/range/thrown_knife_refined.png',
            class: 'equipment',
            visual: 'throwingdagger',
            craftingDescription: 'Throwing WIP',
            category: 'Range',
            tags: ['range', 'weapon', 'crafting'],
            equipmentStats: {
                slot: 'weapon',
                offensiveCritical: { chance: 1 / 20, damageMultiplier: 1.25 },
                offensiveAccuracyAffinityRating: {
                    Melee: -5,
                    Magic: -20,
                    Range: 44,
                    Piercing: 17,
                    Blunt: 17,
                    Slashing: 17,
                },
                offensiveDamageAffinity: {
                    Melee: 3 / 4,
                    Magic: 1 / 3,
                    Range: 1,
                    Piercing: 1,
                    Blunt: 1,
                    Slashing: 1,
                },
                weaponBonus: { strength: 0, intellect: 0, dexterity: 33 },
                attackSpeed: 2.5,
                augmentationBonus: [
                    { stat: 'offensiveAccuracyAffinityRating.Range', value: 1.5 },
                    { stat: 'weaponBonus.dexterity', value: 1.5 },
                ],
                oneHanded: true,
            },
        },
        1224: {
            name: 'Throwing Axe',
            id: 1224,
            tradeable: true,
            enchantmentTier: 4,
            augmentationCost: { 205: 1, 305: 7, 1454: 32 },
            requiredResources: [{ 205: 9, 305: 66, 1454: 300 }],
            craftingLevel: 20,
            craftingExperience: 2286,
            value: 18576,
            craftable: true,
            type: 'weapon',
            requiredLevel: { constitution: 1, attack: 1, strength: 1, defense: 1, range: 40 },
            skill: 'crafting',
            itemImage: '/images/combat/equipment/range/throwing_axe.png',
            class: 'equipment',
            visual: 'throwingaxe',
            craftingDescription: 'Throwing WIP',
            category: 'Range',
            tags: ['range', 'weapon', 'crafting'],
            equipmentStats: {
                slot: 'weapon',
                offensiveCritical: { chance: 1 / 20, damageMultiplier: 1.25 },
                offensiveAccuracyAffinityRating: {
                    Melee: -5,
                    Magic: -20,
                    Range: 64,
                    Piercing: 26,
                    Blunt: 26,
                    Slashing: 26,
                },
                offensiveDamageAffinity: {
                    Melee: 3 / 4,
                    Magic: 1 / 3,
                    Range: 1,
                    Piercing: 1,
                    Blunt: 1,
                    Slashing: 1,
                },
                weaponBonus: { strength: 0, intellect: 0, dexterity: 44 },
                attackSpeed: 2.5,
                augmentationBonus: [
                    { stat: 'offensiveAccuracyAffinityRating.Range', value: 2 },
                    { stat: 'weaponBonus.dexterity', value: 2 },
                ],
                oneHanded: true,
            },
        },
        1225: {
            name: 'Throwing Javelin',
            id: 1225,
            tradeable: true,
            enchantmentTier: 5,
            augmentationCost: { 206: 1, 306: 10, 1455: 32 },
            requiredResources: [{ 206: 10, 306: 91, 1455: 300 }],
            craftingLevel: 32,
            craftingExperience: 7868,
            value: 71190,
            craftable: true,
            type: 'weapon',
            requiredLevel: { constitution: 1, attack: 1, strength: 1, defense: 1, range: 50 },
            skill: 'crafting',
            itemImage: '/images/combat/equipment/range/throwing_jav.png',
            itemIcon: '/images/combat/equipment/range/thrown_jav.png',
            class: 'equipment',
            visual: 'throwingjavelin',
            craftingDescription: 'Throwing WIP',
            category: 'Range',
            tags: ['range', 'weapon', 'crafting'],
            equipmentStats: {
                slot: 'weapon',
                offensiveCritical: { chance: 1 / 20, damageMultiplier: 1.25 },
                offensiveAccuracyAffinityRating: {
                    Melee: -5,
                    Magic: -20,
                    Range: 86,
                    Piercing: 35,
                    Blunt: 35,
                    Slashing: 35,
                },
                offensiveDamageAffinity: {
                    Melee: 3 / 4,
                    Magic: 1 / 3,
                    Range: 1,
                    Piercing: 1,
                    Blunt: 1,
                    Slashing: 1,
                },
                weaponBonus: { strength: 0, intellect: 0, dexterity: 57 },
                attackSpeed: 2.5,
                augmentationBonus: [
                    { stat: 'offensiveAccuracyAffinityRating.Range', value: 2.5 },
                    { stat: 'weaponBonus.dexterity', value: 2.5 },
                ],
                oneHanded: true,
            },
            rarity: 'uncommon',
        },
        1226: {
            name: 'Throwing Spinner',
            id: 1226,
            tradeable: true,
            enchantmentTier: 6,
            augmentationCost: { 207: 2, 307: 13, 1456: 32 },
            requiredResources: [{ 207: 12, 307: 125, 1456: 300 }],
            craftingLevel: 52,
            craftingExperience: 28949,
            value: 125325,
            craftable: true,
            type: 'weapon',
            requiredLevel: { constitution: 1, attack: 1, strength: 1, defense: 1, range: 60 },
            skill: 'crafting',
            itemImage: '/images/combat/equipment/range/thrown_spinner.png',
            class: 'equipment',
            visual: 'throwingspinner',
            craftingDescription: 'Throwing WIP',
            category: 'Range',
            tags: ['range', 'weapon', 'crafting'],
            equipmentStats: {
                slot: 'weapon',
                offensiveCritical: { chance: 1 / 20, damageMultiplier: 1.25 },
                offensiveAccuracyAffinityRating: {
                    Melee: -5,
                    Magic: -20,
                    Range: 110,
                    Piercing: 44,
                    Blunt: 44,
                    Slashing: 44,
                },
                offensiveDamageAffinity: {
                    Melee: 3 / 4,
                    Magic: 1 / 3,
                    Range: 1,
                    Piercing: 1,
                    Blunt: 1,
                    Slashing: 1,
                },
                weaponBonus: { strength: 0, intellect: 0, dexterity: 71 },
                attackSpeed: 2.5,
                augmentationBonus: [
                    { stat: 'offensiveAccuracyAffinityRating.Range', value: 3 },
                    { stat: 'weaponBonus.dexterity', value: 3 },
                ],
                oneHanded: true,
            },
            rarity: 'rare',
        },
        1227: {
            name: 'Driftwood Wand',
            id: 1227,
            tradeable: true,
            enchantmentTier: 1,
            augmentationCost: { 3: 10, 302: 1, 11030: 1 },
            requiredResources: [{ 3: 100, 302: 5, 11030: 10 }],
            craftingLevel: 1,
            craftingExperience: 36,
            value: 149,
            craftable: true,
            type: 'weapon',
            requiredLevel: { constitution: 1, attack: 1, strength: 1, defense: 1, range: 1, magic: 1 },
            skill: 'crafting',
            itemImage: '/images/combat/equipment/magic/driftwood_wand.png',
            class: 'equipment',
            visual: 'wand',
            craftingDescription: 'Wand WIP',
            category: 'Magic',
            tags: ['magic', 'weapon', 'crafting'],
            equipmentStats: {
                slot: 'weapon',
                offensiveCritical: { chance: 1 / 20, damageMultiplier: 1.25 },
                offensiveAccuracyAffinityRating: {
                    Melee: -20,
                    Magic: 7,
                    Range: -20,
                    Piercing: -8,
                    Blunt: -8,
                    Slashing: -8,
                },
                offensiveDamageAffinity: {
                    Melee: 1 / 3,
                    Magic: 1.15,
                    Range: 0.1,
                    Piercing: 0.1,
                    Blunt: 0.1,
                    Slashing: 0.1,
                },
                oneHanded: true,
                weaponBonus: { strength: 0, intellect: 11, dexterity: 0 },
                attackSpeed: 2.2,
                augmentationBonus: [
                    { stat: 'offensiveAccuracyAffinityRating.Magic', value: 0.1 },
                    { stat: 'weaponBonus.intellect', value: 0.1 },
                ],
            },
        },
        1228: {
            name: 'Sturdy Wand',
            id: 1228,
            tradeable: true,
            enchantmentTier: 1,
            augmentationCost: { 4: 100, 302: 1, 11030: 3 },
            requiredResources: [{ 4: 1000, 302: 5, 11030: 25 }],
            craftingLevel: 5,
            craftingExperience: 128,
            value: 351,
            craftable: true,
            type: 'weapon',
            requiredLevel: { constitution: 1, attack: 1, strength: 1, defense: 1, range: 1, magic: 10 },
            skill: 'crafting',
            itemImage: '/images/combat/equipment/magic/sturdy_wand.png',
            class: 'equipment',
            visual: 'scimitar',
            craftingDescription: 'Wand WIP',
            category: 'Magic',
            tags: ['magic', 'weapon', 'crafting'],
            equipmentStats: {
                slot: 'weapon',
                offensiveCritical: { chance: 1 / 20, damageMultiplier: 1.25 },
                offensiveAccuracyAffinityRating: {
                    Melee: -20,
                    Magic: 10,
                    Range: -20,
                    Piercing: -8,
                    Blunt: -8,
                    Slashing: -8,
                },
                offensiveDamageAffinity: {
                    Melee: 1 / 3,
                    Magic: 1.15,
                    Range: 0.1,
                    Piercing: 0.1,
                    Blunt: 0.1,
                    Slashing: 0.1,
                },
                oneHanded: true,
                weaponBonus: { strength: 0, intellect: 13, dexterity: 0 },
                attackSpeed: 2.2,
                augmentationBonus: [
                    { stat: 'offensiveAccuracyAffinityRating.Magic', value: 0.5 },
                    { stat: 'weaponBonus.intellect', value: 0.5 },
                ],
            },
        },
        1229: {
            name: 'Academy Wand',
            id: 1229,
            tradeable: true,
            enchantmentTier: 2,
            augmentationCost: { 3: 100, 4: 100, 303: 1, 11031: 4 },
            requiredResources: [{ 3: 1000, 4: 1000, 303: 6, 11031: 35 }],
            craftingLevel: 11,
            craftingExperience: 349,
            value: 1629,
            craftable: true,
            type: 'weapon',
            requiredLevel: { constitution: 1, attack: 1, strength: 1, defense: 1, range: 1, magic: 20 },
            skill: 'crafting',
            itemImage: '/images/combat/equipment/magic/academy_wand.png',
            class: 'equipment',
            visual: 'scimitar',
            craftingDescription: 'Wand WIP',
            category: 'Magic',
            tags: ['magic', 'weapon', 'crafting'],
            equipmentStats: {
                slot: 'weapon',
                offensiveCritical: { chance: 1 / 20, damageMultiplier: 1.25 },
                offensiveAccuracyAffinityRating: {
                    Melee: -20,
                    Magic: 25,
                    Range: -20,
                    Piercing: -8,
                    Blunt: -8,
                    Slashing: -8,
                },
                offensiveDamageAffinity: {
                    Melee: 1 / 3,
                    Magic: 1.15,
                    Range: 0.1,
                    Piercing: 0.1,
                    Blunt: 0.1,
                    Slashing: 0.1,
                },
                oneHanded: true,
                weaponBonus: { strength: 0, intellect: 22, dexterity: 0 },
                attackSpeed: 2.2,
                augmentationBonus: [
                    { stat: 'offensiveAccuracyAffinityRating.Magic', value: 1 },
                    { stat: 'weaponBonus.intellect', value: 1 },
                ],
            },
        },
        1230: {
            name: 'Imbued Wand',
            id: 1230,
            tradeable: true,
            enchantmentTier: 3,
            augmentationCost: { 5: 250, 304: 1, 11031: 5 },
            requiredResources: [{ 5: 2500, 304: 7, 11031: 48 }],
            craftingLevel: 18,
            craftingExperience: 1020,
            value: 2286,
            craftable: true,
            type: 'weapon',
            requiredLevel: { constitution: 1, attack: 1, strength: 1, defense: 1, range: 1, magic: 30 },
            skill: 'crafting',
            itemImage: '/images/combat/equipment/magic/imbued_wand.png',
            class: 'equipment',
            visual: 'scimitar',
            craftingDescription: 'Wand WIP',
            category: 'Magic',
            tags: ['magic', 'weapon', 'crafting'],
            equipmentStats: {
                slot: 'weapon',
                offensiveCritical: { chance: 1 / 20, damageMultiplier: 1.25 },
                offensiveAccuracyAffinityRating: {
                    Melee: -20,
                    Magic: 44,
                    Range: -20,
                    Piercing: -8,
                    Blunt: -8,
                    Slashing: -8,
                },
                offensiveDamageAffinity: {
                    Melee: 1 / 3,
                    Magic: 1.15,
                    Range: 0.1,
                    Piercing: 0.1,
                    Blunt: 0.1,
                    Slashing: 0.1,
                },
                oneHanded: true,
                weaponBonus: { strength: 0, intellect: 32, dexterity: 0 },
                attackSpeed: 2.2,
                augmentationBonus: [
                    { stat: 'offensiveAccuracyAffinityRating.Magic', value: 1.5 },
                    { stat: 'weaponBonus.intellect', value: 1.5 },
                ],
            },
        },
        1231: {
            name: 'Major Imbued Wand',
            id: 1231,
            tradeable: true,
            enchantmentTier: 4,
            augmentationCost: { 5: 250, 6: 250, 305: 1, 11036: 7 },
            requiredResources: [{ 5: 2500, 6: 2500, 305: 9, 11036: 66 }],
            craftingLevel: 28,
            craftingExperience: 3251,
            value: 9234,
            craftable: true,
            type: 'weapon',
            requiredLevel: { constitution: 1, attack: 1, strength: 1, defense: 1, range: 1, magic: 40 },
            skill: 'crafting',
            itemImage: '/images/combat/equipment/magic/major_imbued_wand.png',
            class: 'equipment',
            visual: 'scimitar',
            craftingDescription: 'Wand WIP',
            category: 'Magic',
            tags: ['magic', 'weapon', 'crafting'],
            equipmentStats: {
                slot: 'weapon',
                offensiveCritical: { chance: 1 / 20, damageMultiplier: 1.25 },
                offensiveAccuracyAffinityRating: {
                    Melee: -20,
                    Magic: 64,
                    Range: -20,
                    Piercing: -8,
                    Blunt: -8,
                    Slashing: -8,
                },
                offensiveDamageAffinity: {
                    Melee: 1 / 3,
                    Magic: 1.15,
                    Range: 0.1,
                    Piercing: 0.1,
                    Blunt: 0.1,
                    Slashing: 0.1,
                },
                oneHanded: true,
                weaponBonus: { strength: 0, intellect: 44, dexterity: 0 },
                attackSpeed: 2.2,
                augmentationBonus: [
                    { stat: 'offensiveAccuracyAffinityRating.Magic', value: 2 },
                    { stat: 'weaponBonus.intellect', value: 2 },
                ],
            },
        },
        1232: {
            name: 'Greater Imbued Wand',
            id: 1232,
            tradeable: true,
            enchantmentTier: 5,
            augmentationCost: { 7: 10, 8: 10, 306: 1, 11036: 10 },
            requiredResources: [{ 7: 100, 8: 100, 306: 10, 11036: 91 }],
            craftingLevel: 41,
            craftingExperience: 11190,
            value: 13185,
            craftable: true,
            type: 'weapon',
            requiredLevel: { constitution: 1, attack: 1, strength: 1, defense: 1, range: 1, magic: 50 },
            skill: 'crafting',
            itemImage: '/images/combat/equipment/magic/greater_imbued_wand.png',
            class: 'equipment',
            visual: 'scimitar',
            craftingDescription: 'Wand WIP',
            category: 'Magic',
            tags: ['magic', 'weapon', 'crafting'],
            equipmentStats: {
                slot: 'weapon',
                offensiveCritical: { chance: 1 / 20, damageMultiplier: 1.25 },
                offensiveAccuracyAffinityRating: {
                    Melee: -20,
                    Magic: 86,
                    Range: -20,
                    Piercing: -8,
                    Blunt: -8,
                    Slashing: -8,
                },
                offensiveDamageAffinity: {
                    Melee: 1 / 3,
                    Magic: 1.15,
                    Range: 0.1,
                    Piercing: 0.1,
                    Blunt: 0.1,
                    Slashing: 0.1,
                },
                oneHanded: true,
                weaponBonus: { strength: 0, intellect: 57, dexterity: 0 },
                attackSpeed: 2.2,
                augmentationBonus: [
                    { stat: 'offensiveAccuracyAffinityRating.Magic', value: 2.5 },
                    { stat: 'weaponBonus.intellect', value: 2.5 },
                ],
            },
            rarity: 'uncommon',
        },
        1233: {
            name: 'Elder Wand',
            id: 1233,
            tradeable: true,
            enchantmentTier: 6,
            augmentationCost: { 9: 5000, 10: 5000, 11: 5000, 12: 5000, 307: 2, 11036: 13 },
            requiredResources: [{ 9: 25000, 10: 25000, 11: 25000, 12: 25000, 307: 12, 11036: 125 }],
            craftingLevel: 59,
            craftingExperience: 41171,
            value: 19575,
            craftable: true,
            type: 'weapon',
            requiredLevel: { constitution: 1, attack: 1, strength: 1, defense: 1, range: 1, magic: 60 },
            skill: 'crafting',
            itemImage: '/images/combat/equipment/magic/elder_imbued_wand.png',
            class: 'equipment',
            visual: 'scimitar',
            craftingDescription: 'Wand WIP',
            category: 'Magic',
            tags: ['magic', 'weapon', 'crafting'],
            equipmentStats: {
                slot: 'weapon',
                offensiveCritical: { chance: 1 / 20, damageMultiplier: 1.25 },
                offensiveAccuracyAffinityRating: {
                    Melee: -20,
                    Magic: 110,
                    Range: -20,
                    Piercing: -8,
                    Blunt: -8,
                    Slashing: -8,
                },
                offensiveDamageAffinity: {
                    Melee: 1 / 3,
                    Magic: 1.15,
                    Range: 0.1,
                    Piercing: 0.1,
                    Blunt: 0.1,
                    Slashing: 0.1,
                },
                oneHanded: true,
                weaponBonus: { strength: 0, intellect: 71, dexterity: 0 },
                attackSpeed: 2.2,
                augmentationBonus: [
                    { stat: 'offensiveAccuracyAffinityRating.Magic', value: 3 },
                    { stat: 'weaponBonus.intellect', value: 3 },
                ],
            },
            rarity: 'rare',
        },
        1234: {
            name: 'Driftwood Staff',
            id: 1234,
            tradeable: true,
            enchantmentTier: 1,
            augmentationCost: { 3: 10, 302: 2, 11030: 4 },
            requiredResources: [{ 3: 100, 302: 15, 11030: 35 }],
            craftingLevel: 2,
            craftingExperience: 54,
            value: 513,
            craftable: true,
            type: 'weapon',
            requiredLevel: { constitution: 1, attack: 1, strength: 1, defense: 1, range: 1, magic: 1 },
            skill: 'crafting',
            itemImage: '/images/combat/equipment/magic/driftwood_staff.png',
            class: 'equipment',
            visual: 'staff',
            craftingDescription: 'Staff WIP',
            category: 'Magic',
            tags: ['magic', 'weapon', 'crafting'],
            equipmentStats: {
                slot: 'weapon',
                offensiveCritical: { chance: 1 / 20, damageMultiplier: 1.25 },
                offensiveAccuracyAffinityRating: {
                    Melee: -14,
                    Magic: 10,
                    Range: -28,
                    Piercing: -8,
                    Blunt: 3,
                    Slashing: -8,
                },
                offensiveDamageAffinity: {
                    Melee: 0.5,
                    Magic: 1.3333333333333333,
                    Range: 0.1,
                    Piercing: 0.1,
                    Blunt: 1 / 3,
                    Slashing: 0.1,
                },
                weaponBonus: { strength: 0, intellect: 25, dexterity: 0 },
                attackSpeed: 3,
                augmentationBonus: [
                    { stat: 'offensiveAccuracyAffinityRating.Magic', value: 0.1 },
                    { stat: 'weaponBonus.intellect', value: 0.1 },
                ],
            },
        },
        1235: {
            name: 'Sturdy Staff',
            id: 1235,
            tradeable: true,
            enchantmentTier: 1,
            augmentationCost: { 4: 100, 302: 2, 11030: 4 },
            requiredResources: [{ 4: 1000, 302: 15, 11030: 35 }],
            craftingLevel: 6,
            craftingExperience: 168,
            value: 513,
            craftable: true,
            type: 'weapon',
            requiredLevel: { constitution: 1, attack: 1, strength: 1, defense: 1, range: 1, magic: 10 },
            skill: 'crafting',
            itemImage: '/images/combat/equipment/magic/sturdy_staff.png',
            class: 'equipment',
            visual: 'scimitar',
            craftingDescription: 'Staff WIP',
            category: 'Magic',
            tags: ['magic', 'weapon', 'crafting'],
            equipmentStats: {
                slot: 'weapon',
                offensiveCritical: { chance: 1 / 20, damageMultiplier: 1.25 },
                offensiveAccuracyAffinityRating: {
                    Melee: -14,
                    Magic: 14,
                    Range: -28,
                    Piercing: -8,
                    Blunt: 4,
                    Slashing: -8,
                },
                offensiveDamageAffinity: {
                    Melee: 0.5,
                    Magic: 1.3333333333333333,
                    Range: 0.1,
                    Piercing: 0.1,
                    Blunt: 1 / 3,
                    Slashing: 0.1,
                },
                weaponBonus: { strength: 0, intellect: 30, dexterity: 0 },
                attackSpeed: 3,
                augmentationBonus: [
                    { stat: 'offensiveAccuracyAffinityRating.Magic', value: 0.5 },
                    { stat: 'weaponBonus.intellect', value: 0.5 },
                ],
            },
        },
        1236: {
            name: 'Academy Staff',
            id: 1236,
            tradeable: true,
            enchantmentTier: 2,
            augmentationCost: { 3: 100, 4: 100, 303: 2, 11031: 5 },
            requiredResources: [{ 3: 1000, 4: 1000, 303: 20, 11031: 50 }],
            craftingLevel: 13,
            craftingExperience: 458,
            value: 2430,
            craftable: true,
            type: 'weapon',
            requiredLevel: { constitution: 1, attack: 1, strength: 1, defense: 1, range: 1, magic: 20 },
            skill: 'crafting',
            itemImage: '/images/combat/equipment/magic/academy_staff.png',
            class: 'equipment',
            visual: 'scimitar',
            craftingDescription: 'Staff WIP',
            category: 'Magic',
            tags: ['magic', 'weapon', 'crafting'],
            equipmentStats: {
                slot: 'weapon',
                offensiveCritical: { chance: 1 / 20, damageMultiplier: 1.25 },
                offensiveAccuracyAffinityRating: {
                    Melee: -14,
                    Magic: 35,
                    Range: -28,
                    Piercing: -8,
                    Blunt: 10,
                    Slashing: -8,
                },
                offensiveDamageAffinity: {
                    Melee: 0.5,
                    Magic: 1.3333333333333333,
                    Range: 0.1,
                    Piercing: 0.1,
                    Blunt: 1 / 3,
                    Slashing: 0.1,
                },
                weaponBonus: { strength: 0, intellect: 46, dexterity: 0 },
                attackSpeed: 3,
                augmentationBonus: [
                    { stat: 'offensiveAccuracyAffinityRating.Magic', value: 1 },
                    { stat: 'weaponBonus.intellect', value: 1 },
                ],
            },
        },
        1237: {
            name: 'Imbued Staff',
            id: 1237,
            tradeable: true,
            enchantmentTier: 3,
            augmentationCost: { 5: 250, 304: 3, 11031: 8 },
            requiredResources: [{ 5: 2500, 304: 26, 11031: 72 }],
            craftingLevel: 21,
            craftingExperience: 1339,
            value: 3708,
            craftable: true,
            type: 'weapon',
            requiredLevel: { constitution: 1, attack: 1, strength: 1, defense: 1, range: 1, magic: 30 },
            skill: 'crafting',
            itemImage: '/images/combat/equipment/magic/imbued_staff.png',
            class: 'equipment',
            visual: 'scimitar',
            craftingDescription: 'Staff WIP',
            category: 'Magic',
            tags: ['magic', 'weapon', 'crafting'],
            equipmentStats: {
                slot: 'weapon',
                offensiveCritical: { chance: 1 / 20, damageMultiplier: 1.25 },
                offensiveAccuracyAffinityRating: {
                    Melee: -14,
                    Magic: 61,
                    Range: -28,
                    Piercing: -8,
                    Blunt: 17,
                    Slashing: -8,
                },
                offensiveDamageAffinity: {
                    Melee: 0.5,
                    Magic: 1.3333333333333333,
                    Range: 0.1,
                    Piercing: 0.1,
                    Blunt: 1 / 3,
                    Slashing: 0.1,
                },
                weaponBonus: { strength: 0, intellect: 62, dexterity: 0 },
                attackSpeed: 3,
                augmentationBonus: [
                    { stat: 'offensiveAccuracyAffinityRating.Magic', value: 1.5 },
                    { stat: 'weaponBonus.intellect', value: 1.5 },
                ],
            },
        },
        1238: {
            name: 'Major Imbued Staff',
            id: 1238,
            tradeable: true,
            enchantmentTier: 4,
            augmentationCost: { 5: 250, 6: 250, 305: 4, 11036: 11 },
            requiredResources: [{ 5: 2500, 6: 2500, 305: 34, 11036: 102 }],
            craftingLevel: 31,
            craftingExperience: 4267,
            value: 14994,
            craftable: true,
            type: 'weapon',
            requiredLevel: { constitution: 1, attack: 1, strength: 1, defense: 1, range: 1, magic: 40 },
            skill: 'crafting',
            itemImage: '/images/combat/equipment/magic/major_imbued_staff.png',
            class: 'equipment',
            visual: 'scimitar',
            craftingDescription: 'Staff WIP',
            category: 'Magic',
            tags: ['magic', 'weapon', 'crafting'],
            equipmentStats: {
                slot: 'weapon',
                offensiveCritical: { chance: 1 / 20, damageMultiplier: 1.25 },
                offensiveAccuracyAffinityRating: {
                    Melee: -14,
                    Magic: 90,
                    Range: -28,
                    Piercing: -8,
                    Blunt: 26,
                    Slashing: -8,
                },
                offensiveDamageAffinity: {
                    Melee: 0.5,
                    Magic: 1.3333333333333333,
                    Range: 0.1,
                    Piercing: 0.1,
                    Blunt: 1 / 3,
                    Slashing: 0.1,
                },
                weaponBonus: { strength: 0, intellect: 80, dexterity: 0 },
                attackSpeed: 3,
                augmentationBonus: [
                    { stat: 'offensiveAccuracyAffinityRating.Magic', value: 2 },
                    { stat: 'weaponBonus.intellect', value: 2 },
                ],
            },
        },
        1239: {
            name: 'Greater Imbued Staff',
            id: 1239,
            tradeable: true,
            enchantmentTier: 5,
            augmentationCost: { 7: 500, 8: 500, 306: 5, 11036: 15 },
            requiredResources: [{ 7: 5000, 8: 5000, 306: 45, 11036: 146 }],
            craftingLevel: 44,
            craftingExperience: 14686,
            value: 23760,
            craftable: true,
            type: 'weapon',
            requiredLevel: { constitution: 1, attack: 1, strength: 1, defense: 1, range: 1, magic: 50 },
            skill: 'crafting',
            itemImage: '/images/combat/equipment/magic/greater_imbued_staff.png',
            class: 'equipment',
            visual: 'scimitar',
            craftingDescription: 'Staff WIP',
            category: 'Magic',
            tags: ['magic', 'weapon', 'crafting'],
            equipmentStats: {
                slot: 'weapon',
                offensiveCritical: { chance: 1 / 20, damageMultiplier: 1.25 },
                offensiveAccuracyAffinityRating: {
                    Melee: -14,
                    Magic: 121,
                    Range: -28,
                    Piercing: -8,
                    Blunt: 35,
                    Slashing: -8,
                },
                offensiveDamageAffinity: {
                    Melee: 0.5,
                    Magic: 1.3333333333333333,
                    Range: 0.1,
                    Piercing: 0.1,
                    Blunt: 1 / 3,
                    Slashing: 0.1,
                },
                weaponBonus: { strength: 0, intellect: 100, dexterity: 0 },
                attackSpeed: 3,
                augmentationBonus: [
                    { stat: 'offensiveAccuracyAffinityRating.Magic', value: 2.5 },
                    { stat: 'weaponBonus.intellect', value: 2.5 },
                ],
            },
            rarity: 'uncommon',
        },
        1240: {
            name: 'Elder Staff',
            id: 1240,
            tradeable: true,
            enchantmentTier: 6,
            augmentationCost: { 9: 5000, 10: 5000, 11: 5000, 12: 5000, 307: 6, 11036: 21 },
            requiredResources: [{ 9: 25000, 10: 25000, 11: 25000, 12: 25000, 307: 59, 11036: 208 }],
            craftingLevel: 61,
            craftingExperience: 54037,
            value: 41355,
            craftable: true,
            type: 'weapon',
            requiredLevel: { constitution: 1, attack: 1, strength: 1, defense: 1, range: 1, magic: 60 },
            skill: 'crafting',
            itemImage: '/images/combat/equipment/magic/elder_imbued_staff.png',
            class: 'equipment',
            visual: 'scimitar',
            craftingDescription: 'Staff WIP',
            category: 'Magic',
            tags: ['magic', 'weapon', 'crafting'],
            equipmentStats: {
                slot: 'weapon',
                offensiveCritical: { chance: 1 / 20, damageMultiplier: 1.25 },
                offensiveAccuracyAffinityRating: {
                    Melee: -14,
                    Magic: 154,
                    Range: -28,
                    Piercing: -8,
                    Blunt: 44,
                    Slashing: -8,
                },
                offensiveDamageAffinity: {
                    Melee: 0.5,
                    Magic: 1.3333333333333333,
                    Range: 0.1,
                    Piercing: 0.1,
                    Blunt: 1 / 3,
                    Slashing: 0.1,
                },
                weaponBonus: { strength: 0, intellect: 134, dexterity: 0 },
                attackSpeed: 3,
                augmentationBonus: [
                    { stat: 'offensiveAccuracyAffinityRating.Magic', value: 3 },
                    { stat: 'weaponBonus.intellect', value: 3 },
                ],
            },
            rarity: 'rare',
        },
        1241: {
            name: 'Arcane Notes',
            id: 1241,
            tradeable: true,
            enchantmentTier: 1,
            augmentationCost: { 3: 10, 4013: 4, 11030: 1 },
            requiredResources: [{ 3: 100, 4013: 35, 11030: 10 }],
            craftingLevel: 1,
            craftingExperience: 33,
            value: 2025,
            craftable: true,
            type: 'weapon',
            requiredLevel: { constitution: 1, attack: 1, strength: 1, defense: 1, range: 1, magic: 1 },
            skill: 'crafting',
            itemImage: '/images/combat/equipment/magic/starter_focus.png',
            class: 'equipment',
            visual: 'focus',
            craftingDescription: 'Focus WIP',
            category: 'Magic',
            tags: ['magic', 'weapon', 'crafting'],
            equipmentStats: {
                slot: 'shield',
                offensiveCritical: { chance: 1 / 20, damageMultiplier: 1.25 },
                offensiveAccuracyAffinityRating: { Magic: 3 },
                offensiveDamageAffinity: { Magic: 1.15 },
                weaponBonus: { strength: 0, intellect: 3, dexterity: 0 },
                armorBonus: { protection: 0, resistance: 4, agility: 0, stamina: 0 },
                augmentationBonus: [
                    { stat: 'offensiveAccuracyAffinityRating.Magic', value: 0.1 },
                    { stat: 'weaponBonus.intellect', value: 0.1 },
                ],
                itemSet: [10011, 10013],
            },
        },
        1242: {
            name: 'Simple Arcane Focus',
            id: 1242,
            tradeable: true,
            enchantmentTier: 1,
            augmentationCost: { 4: 100, 4014: 4, 11030: 1 },
            requiredResources: [{ 4: 1000, 4014: 35, 11030: 10 }],
            craftingLevel: 5,
            craftingExperience: 128,
            value: 1080,
            craftable: true,
            type: 'weapon',
            requiredLevel: {
                constitution: 1,
                attack: 1,
                strength: 1,
                defense: 10,
                range: 1,
                magic: 10,
            },
            skill: 'crafting',
            itemImage: '/images/combat/equipment/magic/practitioner_focus.png',
            class: 'equipment',
            visual: 'scimitar',
            craftingDescription: 'Focus WIP',
            category: 'Magic',
            tags: ['magic', 'weapon', 'crafting'],
            equipmentStats: {
                slot: 'shield',
                offensiveCritical: { chance: 1 / 20, damageMultiplier: 1.25 },
                offensiveAccuracyAffinityRating: { Magic: 4 },
                offensiveDamageAffinity: { Magic: 1.15 },
                weaponBonus: { strength: 0, intellect: 4, dexterity: 0 },
                armorBonus: { protection: 0, resistance: 6, agility: 0, stamina: 0 },
                augmentationBonus: [
                    { stat: 'offensiveAccuracyAffinityRating.Magic', value: 0.5 },
                    { stat: 'weaponBonus.intellect', value: 0.5 },
                ],
                itemSet: [10011, 10013],
            },
        },
        1243: {
            name: 'Academy Focus',
            id: 1243,
            tradeable: true,
            enchantmentTier: 2,
            augmentationCost: { 3: 100, 4: 100, 4015: 5, 11031: 2 },
            requiredResources: [{ 3: 1000, 4: 1000, 4015: 50, 11031: 13 }],
            craftingLevel: 11,
            craftingExperience: 349,
            value: 7335,
            craftable: true,
            type: 'weapon',
            requiredLevel: {
                constitution: 1,
                attack: 1,
                strength: 1,
                defense: 20,
                range: 1,
                magic: 20,
            },
            skill: 'crafting',
            itemImage: '/images/combat/equipment/magic/academy_focus.png',
            class: 'equipment',
            visual: 'scimitar',
            craftingDescription: 'Focus WIP',
            category: 'Magic',
            tags: ['magic', 'weapon', 'crafting'],
            equipmentStats: {
                slot: 'shield',
                offensiveCritical: { chance: 1 / 20, damageMultiplier: 1.25 },
                offensiveAccuracyAffinityRating: { Magic: 10 },
                offensiveDamageAffinity: { Magic: 1.15 },
                weaponBonus: { strength: 0, intellect: 7, dexterity: 0 },
                armorBonus: { protection: 0, resistance: 15, agility: 0, stamina: 0 },
                augmentationBonus: [
                    { stat: 'offensiveAccuracyAffinityRating.Magic', value: 1 },
                    { stat: 'weaponBonus.intellect', value: 1 },
                ],
                itemSet: [10011, 10013],
            },
        },
        1244: {
            name: 'Imbued Focus',
            id: 1244,
            tradeable: true,
            enchantmentTier: 3,
            augmentationCost: { 5: 250, 4016: 8, 11031: 2 },
            requiredResources: [{ 5: 2500, 4016: 72, 11031: 16 }],
            craftingLevel: 18,
            craftingExperience: 1020,
            value: 33120,
            craftable: true,
            type: 'weapon',
            requiredLevel: {
                constitution: 1,
                attack: 1,
                strength: 1,
                defense: 30,
                range: 1,
                magic: 30,
            },
            skill: 'crafting',
            itemImage: '/images/combat/equipment/magic/imbued_focus.png',
            class: 'equipment',
            visual: 'scimitar',
            craftingDescription: 'Focus WIP',
            category: 'Magic',
            tags: ['magic', 'weapon', 'crafting'],
            equipmentStats: {
                slot: 'shield',
                offensiveCritical: { chance: 1 / 20, damageMultiplier: 1.25 },
                offensiveAccuracyAffinityRating: { Magic: 17 },
                offensiveDamageAffinity: { Magic: 1.15 },
                weaponBonus: { strength: 0, intellect: 11, dexterity: 0 },
                armorBonus: { protection: 0, resistance: 26, agility: 0, stamina: 0 },
                augmentationBonus: [
                    { stat: 'offensiveAccuracyAffinityRating.Magic', value: 1.5 },
                    { stat: 'weaponBonus.intellect', value: 1.5 },
                ],
                itemSet: [10011, 10013],
            },
        },
        1245: {
            name: 'Major Imbued Focus',
            id: 1245,
            tradeable: true,
            enchantmentTier: 4,
            augmentationCost: { 5: 250, 6: 250, 4017: 11, 11036: 2 },
            requiredResources: [{ 5: 2500, 6: 2500, 4017: 102, 11036: 20 }],
            craftingLevel: 28,
            craftingExperience: 3251,
            value: 94500,
            craftable: true,
            type: 'weapon',
            requiredLevel: {
                constitution: 1,
                attack: 1,
                strength: 1,
                defense: 40,
                range: 1,
                magic: 40,
            },
            skill: 'crafting',
            itemImage: '/images/combat/equipment/magic/major_imbued_focus.png',
            class: 'equipment',
            visual: 'scimitar',
            craftingDescription: 'Focus WIP',
            category: 'Magic',
            tags: ['magic', 'weapon', 'crafting'],
            equipmentStats: {
                slot: 'shield',
                offensiveCritical: { chance: 1 / 20, damageMultiplier: 1.25 },
                offensiveAccuracyAffinityRating: { Magic: 26 },
                offensiveDamageAffinity: { Magic: 1.15 },
                weaponBonus: { strength: 0, intellect: 14, dexterity: 0 },
                armorBonus: { protection: 0, resistance: 38, agility: 0, stamina: 0 },
                augmentationBonus: [
                    { stat: 'offensiveAccuracyAffinityRating.Magic', value: 2 },
                    { stat: 'weaponBonus.intellect', value: 2 },
                ],
                itemSet: [10011, 10013],
            },
        },
        1246: {
            name: 'Greater Imbued Focus',
            id: 1246,
            tradeable: true,
            enchantmentTier: 5,
            augmentationCost: { 7: 500, 8: 500, 4018: 15, 11036: 3 },
            requiredResources: [{ 7: 5000, 8: 5000, 4018: 146, 11036: 26 }],
            craftingLevel: 41,
            craftingExperience: 11190,
            value: 266310,
            craftable: true,
            type: 'weapon',
            requiredLevel: {
                constitution: 1,
                attack: 1,
                strength: 1,
                defense: 50,
                range: 1,
                magic: 50,
            },
            skill: 'crafting',
            itemImage: '/images/combat/equipment/magic/greater_imbued_focus.png',
            class: 'equipment',
            visual: 'scimitar',
            craftingDescription: 'Focus WIP',
            category: 'Magic',
            tags: ['magic', 'weapon', 'crafting'],
            equipmentStats: {
                slot: 'shield',
                offensiveCritical: { chance: 1 / 20, damageMultiplier: 1.25 },
                offensiveAccuracyAffinityRating: { Magic: 35 },
                offensiveDamageAffinity: { Magic: 1.15 },
                weaponBonus: { strength: 0, intellect: 19, dexterity: 0 },
                armorBonus: { protection: 0, resistance: 52, agility: 0, stamina: 0 },
                augmentationBonus: [
                    { stat: 'offensiveAccuracyAffinityRating.Magic', value: 2.5 },
                    { stat: 'weaponBonus.intellect', value: 2.5 },
                ],
                itemSet: [10011, 10013],
            },
            rarity: 'uncommon',
        },
        1247: {
            name: 'Elder Focus',
            id: 1247,
            tradeable: true,
            enchantmentTier: 6,
            augmentationCost: { 9: 5000, 10: 5000, 11: 5000, 12: 5000, 4019: 21, 11036: 4 },
            requiredResources: [{ 9: 25000, 10: 25000, 11: 25000, 12: 25000, 4019: 208, 11036: 32 }],
            craftingLevel: 59,
            craftingExperience: 41171,
            value: 753120,
            craftable: true,
            type: 'weapon',
            requiredLevel: {
                constitution: 1,
                attack: 1,
                strength: 1,
                defense: 60,
                range: 1,
                magic: 60,
            },
            skill: 'crafting',
            itemImage: '/images/combat/equipment/magic/elder_focus.png',
            class: 'equipment',
            visual: 'scimitar',
            craftingDescription: 'Focus WIP',
            category: 'Magic',
            tags: ['magic', 'weapon', 'crafting'],
            equipmentStats: {
                slot: 'shield',
                offensiveCritical: { chance: 1 / 20, damageMultiplier: 1.25 },
                offensiveAccuracyAffinityRating: { Magic: 44 },
                offensiveDamageAffinity: { Magic: 1.15 },
                weaponBonus: { strength: 0, intellect: 23, dexterity: 0 },
                armorBonus: { protection: 0, resistance: 66, agility: 0, stamina: 0 },
                augmentationBonus: [
                    { stat: 'offensiveAccuracyAffinityRating.Magic', value: 3 },
                    { stat: 'weaponBonus.intellect', value: 3 },
                ],
                itemSet: [10011, 10013],
            },
            rarity: 'rare',
        },
        1450: {
            name: 'Shoddy Ammo',
            id: 1450,
            tradeable: true,
            requiredResources: [{ 109: 1, 301: 1, 700: 8 }],
            craftingLevel: 1,
            craftingExperience: 1,
            value: 1,
            craftingMultiplier: [32],
            craftable: true,
            type: 'weapon',
            requiredLevel: { constitution: 1, attack: 1, strength: 1, defense: 1, range: 1, magic: 1 },
            ammunitionMults: { damageMult: 0.9, accuracyMult: 0.9 },
            skill: 'crafting',
            itemImage: '/images/combat/equipment/range/arrow_0.png',
            craftingDescription: 'Each craft results in 32 projectiles.',
            extraTooltipInfo: 'A bunch of shoddily crafted ammunition for ranged weapons.',
            class: 'ammo',
            category: 'Range',
            tags: ['range', 'weapon', 'ammunition', 'crafting'],
        },
        1451: {
            name: 'Amateur Ammo',
            id: 1451,
            tradeable: true,
            requiredResources: [{ 201: 1, 302: 1, 700: 8 }],
            craftingLevel: 2,
            craftingExperience: 2,
            value: 2,
            craftingMultiplier: [32],
            craftable: true,
            type: 'weapon',
            requiredLevel: { constitution: 1, attack: 1, strength: 1, defense: 1, range: 10, magic: 1 },
            ammunitionMults: {
                damageMult: 19 / 20,
                accuracyMult: 19 / 20,
            },
            skill: 'crafting',
            itemImage: '/images/combat/equipment/range/arrow_1.png',
            craftingDescription: 'Each craft results in 32 projectiles.',
            extraTooltipInfo: 'Ammo crafted by an amateur.',
            class: 'ammo',
            category: 'Range',
            tags: ['range', 'weapon', 'ammunition', 'crafting'],
        },
        1452: {
            name: 'Apprentice Ammo',
            id: 1452,
            tradeable: true,
            requiredResources: [{ 202: 1, 303: 1, 700: 8 }],
            craftingLevel: 7,
            craftingExperience: 7,
            value: 7,
            craftingMultiplier: [32],
            craftable: true,
            type: 'weapon',
            requiredLevel: { constitution: 1, attack: 1, strength: 1, defense: 1, range: 20, magic: 1 },
            ammunitionMults: { damageMult: 1, accuracyMult: 1 },
            skill: 'crafting',
            itemImage: '/images/combat/equipment/range/arrow_2.png',
            craftingDescription: 'Each craft results in 32 projectiles.',
            extraTooltipInfo: 'Ammo that would be passable as being crafted by an apprentice crafter.',
            class: 'ammo',
            category: 'Range',
            tags: ['range', 'weapon', 'ammunition', 'crafting'],
        },
        1453: {
            name: 'Journeyman Ammo',
            id: 1453,
            tradeable: true,
            requiredResources: [{ 204: 1, 304: 1, 700: 8 }],
            craftingLevel: 14,
            craftingExperience: 14,
            value: 14,
            craftingMultiplier: [32],
            craftable: true,
            type: 'weapon',
            requiredLevel: { constitution: 1, attack: 1, strength: 1, defense: 1, range: 30, magic: 1 },
            ammunitionMults: { damageMult: 1.025, accuracyMult: 1.025 },
            skill: 'crafting',
            itemImage: '/images/combat/equipment/range/arrow_3.png',
            craftingDescription: 'Each craft results in 32 projectiles.',
            extraTooltipInfo: 'Ammo that would be passable as being crafted by a journeyman crafter.',
            class: 'ammo',
            category: 'Range',
            tags: ['range', 'weapon', 'ammunition', 'crafting'],
        },
        1454: {
            name: 'Professional Ammo',
            id: 1454,
            tradeable: true,
            requiredResources: [{ 204: 1, 305: 1, 700: 8 }],
            craftingLevel: 21,
            craftingExperience: 21,
            value: 21,
            craftingMultiplier: [32],
            craftable: true,
            type: 'weapon',
            requiredLevel: { constitution: 1, attack: 1, strength: 1, defense: 1, range: 40, magic: 1 },
            ammunitionMults: { damageMult: 1.05, accuracyMult: 1.05 },
            skill: 'crafting',
            itemImage: '/images/combat/equipment/range/arrow_4.png',
            craftingDescription: 'Each craft results in 32 projectiles.',
            extraTooltipInfo: 'Ammo that has clearly been crafted by a professional.',
            class: 'ammo',
            category: 'Range',
            tags: ['range', 'weapon', 'ammunition', 'crafting'],
        },
        1455: {
            name: 'Master Ammo',
            id: 1455,
            tradeable: true,
            requiredResources: [{ 205: 1, 306: 1, 700: 8 }],
            craftingLevel: 28,
            craftingExperience: 28,
            value: 28,
            craftingMultiplier: [32],
            craftable: true,
            type: 'weapon',
            requiredLevel: { constitution: 1, attack: 1, strength: 1, defense: 1, range: 50, magic: 1 },
            ammunitionMults: { damageMult: 1.025, accuracyMult: 1.075 },
            skill: 'crafting',
            itemImage: '/images/combat/equipment/range/shot.png',
            craftingDescription: 'Each craft results in 32 projectiles.',
            extraTooltipInfo:
                'Ammo that has been crafted by a master and is clearly intended for more exotic weaponry. Has enhanced accuracy due to its lighter materials.',
            class: 'ammo',
            category: 'Range',
            tags: ['range', 'weapon', 'ammunition', 'crafting'],
            rarity: 'uncommon',
        },
        1456: {
            name: 'Experimental Ammo',
            id: 1456,
            tradeable: true,
            requiredResources: [{ 206: 1, 306: 1, 700: 8 }],
            craftingLevel: 35,
            craftingExperience: 35,
            value: 35,
            craftingMultiplier: [32],
            craftable: true,
            type: 'weapon',
            requiredLevel: { constitution: 1, attack: 1, strength: 1, defense: 1, range: 60, magic: 1 },
            ammunitionMults: { damageMult: 1.075, accuracyMult: 1.025 },
            skill: 'crafting',
            itemImage: '/images/combat/equipment/range/shot_void_0.png',
            craftingDescription: 'Each craft results in 32 projectiles.',
            extraTooltipInfo:
                'An experimental ammo that is on the edge of science and magic! Has enhanced damage due to its experimental nature.',
            class: 'ammo',
            category: 'Range',
            tags: ['range', 'weapon', 'ammunition', 'crafting'],
            rarity: 'rare',
        },
        1457: {
            name: 'Void Ammo',
            id: 1457,
            tradeable: true,
            requiredResources: [{ 207: 1, 307: 1, 700: 8 }],
            craftingLevel: 42,
            craftingExperience: 42,
            value: 42,
            craftingMultiplier: [32],
            craftable: true,
            type: 'weapon',
            requiredLevel: { constitution: 1, attack: 1, strength: 1, defense: 1, range: 70, magic: 1 },
            ammunitionMults: { damageMult: 1.075, accuracyMult: 1.075 },
            skill: 'crafting',
            itemImage: '/images/combat/equipment/range/shot_void_1.png',
            craftingDescription: 'Each craft results in 32 projectiles.',
            extraTooltipInfo:
                'The fully realized peak of ammunition technology made from the coalescence of science and magic.',
            class: 'ammo',
            category: 'Range',
            tags: ['range', 'weapon', 'ammunition', 'crafting'],
            rarity: 'rare',
        },
        1500: {
            name: 'Santa Hat',
            id: 1500,
            enchantmentTier: 5,
            augmentationCost: { 112: 1000 },
            craftingLevel: 1,
            craftingExperience: 1,
            value: 42069,
            tradeable: true,
            requiredLevel: { constitution: 1, attack: 1, strength: 1, defense: 1 },



            itemImage: '/images/combat/equipment/santa_hat.png',
            class: 'equipment',
            visual: 'santa-hat',
            tags: ['armor', 'event', 'crafting'],
            equipmentStats: { slot: 'helm' },
            requiredResources: [{ 201: 10 }],
            rarity: 'uncommon',
        },
        1501: {
            name: 'Snowman Head',
            id: 1501,
            enchantmentTier: 5,
            augmentationCost: { 112: 1000 },
            craftingLevel: 1,
            craftingExperience: 1,
            value: 42069,
            tradeable: true,
            requiredLevel: { constitution: 1, attack: 1, strength: 1, defense: 1 },



            itemImage: '/images/combat/equipment/snowman_head.png',
            class: 'equipment',
            visual: 'snowman-head',
            tags: ['armor', 'event', 'crafting'],
            equipmentStats: { slot: 'helm' },
            requiredResources: [{ 201: 10 }],
            rarity: 'uncommon',
        },
        1502: {
            name: 'Tophat',
            id: 1502,
            enchantmentTier: 5,
            augmentationCost: { 112: 1000 },
            craftingLevel: 1,
            craftingExperience: 1,
            value: 42069,
            tradeable: true,
            requiredLevel: { constitution: 1, attack: 1, strength: 1, defense: 1 },



            itemImage: '/images/combat/equipment/tophat.png',
            class: 'equipment',
            visual: 'tophat',
            tags: ['armor', 'event', 'crafting'],
            equipmentStats: { slot: 'helm' },
            requiredResources: [{ 201: 10 }],
            rarity: 'uncommon',
        },
        1503: {
            name: 'Lesser Ladle',
            id: 1503,
            enchantmentTier: 5,
            augmentationCost: { 95: 600, 402: 1 },
            craftingLevel: 1,
            craftingExperience: 1,
            value: 20000,
            tradeable: true,
            enchantmentOverrideSlot: 'ladle',
            requiredLevel: { constitution: 1, attack: 1, strength: 1, defense: 1 },



            itemImage: '/images/combat/equipment/lesser_ladle.png',
            extraTooltipInfo:
                "This could help you with cooking even if it doesn't look like much! Grants 2 hidden levels of haste while cooking.",
            class: 'equipment',
            visual: 'lesser-ladle',
            tags: ['melee', 'onehand', 'weapon', 'crafting'],
            equipmentStats: {
                slot: 'weapon',
                offensiveAccuracyAffinityRating: { Melee: 10, Magic: 0, Range: 0 },
                weaponBonus: { strength: 7, intellect: 0, dexterity: 0 },
                oneHanded: true,
                attackSpeed: 2,
                augmentationBonus: [{ stat: 'toolBoost.cooking', value: 3 }],
            },
            rarity: 'uncommon',
        },
        1504: {
            name: 'Ladle',
            id: 1504,
            enchantmentTier: 5,
            augmentationCost: { 95: 600, 402: 1 },
            craftingLevel: 1,
            craftingExperience: 1,
            value: 25000,
            tradeable: true,
            enchantmentOverrideSlot: 'ladle',
            requiredLevel: { constitution: 1, attack: 1, strength: 1, defense: 1 },



            itemImage: '/images/combat/equipment/ladle.png',
            extraTooltipInfo: 'This could help you with cooking! Grants 2 hidden levels of haste while cooking.',
            class: 'equipment',
            visual: 'ladle',
            tags: ['melee', 'onehand', 'weapon', 'crafting'],
            equipmentStats: {
                slot: 'weapon',
                offensiveAccuracyAffinityRating: { Melee: 19, Magic: 0, Range: 0 },
                weaponBonus: { strength: 14, intellect: 0, dexterity: 0 },
                oneHanded: true,
                attackSpeed: 2.4,
                augmentationBonus: [{ stat: 'toolBoost.cooking', value: 3 }],
            },
            rarity: 'uncommon',
        },
        1505: {
            name: 'Greater Ladle',
            id: 1505,
            enchantmentTier: 5,
            augmentationCost: { 95: 600, 402: 1 },
            craftingLevel: 1,
            craftingExperience: 1,
            value: 30000,
            tradeable: true,
            enchantmentOverrideSlot: 'ladle',
            requiredLevel: { constitution: 1, attack: 1, strength: 1, defense: 1 },



            itemImage: '/images/combat/equipment/greater_ladle.png',
            extraTooltipInfo:
                "For when you're allowed only a single spoonful. Grants 2 hidden levels of haste while cooking.",
            class: 'equipment',
            visual: 'greater-ladle',
            tags: ['melee', 'twohand', 'weapon', 'crafting'],
            equipmentStats: {
                slot: 'weapon',
                offensiveAccuracyAffinityRating: { Melee: 27, Magic: 0, Range: 0 },
                weaponBonus: { strength: 26, intellect: 0, dexterity: 0 },
                attackSpeed: 3,
                augmentationBonus: [{ stat: 'toolBoost.cooking', value: 3 }],
            },
            rarity: 'uncommon',
        },
        1506: {
            name: 'Moss Maul',
            id: 1506,
            enchantmentTier: 8,
            augmentationCost: { 306: 1000, 401: 3 },
            value: 6360000,
            tradeable: true,
            requiredLevel: { constitution: 1, attack: 85, strength: 1, defense: 1 },



            itemImage: '/images/combat/equipment/moss_maul.png',
            itemIcon: '/images/combat/equipment/moss_maul_icon.png',
            extraTooltipInfo: "A hulking mass of moss covered material; requires a giant's strength to wield properly!",
            class: 'equipment',
            visual: 'moss-maul',
            category: ['weapon', 'combat'],
            tags: ['melee', 'weapon', 'twohand', 'crafting'],
            equipmentStats: {
                grantedAbility: [13, 45],
                slot: 'weapon',
                offensiveCritical: { chance: 1 / 40, damageMultiplier: 1.33 },
                offensiveAccuracyAffinityRating: {
                    Melee: 103,
                    Magic: -20,
                    Range: -20,
                    Piercing: -4,
                    Blunt: 256,
                    Slashing: 44,
                    Nature: 64,
                },
                offensiveDamageAffinity: {
                    Melee: 1.1,
                    Magic: 1 / 4,
                    Range: 0.1,
                    Piercing: 1 / 8,
                    Blunt: 1.5,
                    Slashing: 1 / 4,
                    Nature: 1.25,
                },
                weaponBonus: { strength: 196, intellect: 0, dexterity: 0 },
                armorBonus: { protection: 36, resistance: 0, agility: -8, stamina: 0 },
                attackSpeed: 3.6,
                augmentationBonus: [
                    { stat: 'offensiveAccuracyAffinityRating.Melee', value: 2 },
                    { stat: 'weaponBonus.strength', value: 6 },
                    { stat: 'armorBonus.protection', value: 1 },
                ],
            },
            rarity: 'epic',
        },
        1507: {
            name: 'Modified Diving Gloves',
            id: 1507,
            enchantmentTier: 6,
            augmentationCost: { 513: 50, 701: 20 },
            value: 2120000,
            tradeable: true,
            requiredLevel: { constitution: 1, attack: 1, strength: 55, defense: 1 },



            itemImage: '/images/combat/equipment/modified_diving_gloves.png',
            itemIcon: '/images/combat/equipment/modified_diving_gloves_icon.png',
            extraTooltipInfo: 'Ready to punch anything you might encounter underwater or above!',
            class: 'equipment',
            visual: 'modified-diving-gloves',
            category: ['weapon', 'combat'],
            tags: ['melee', 'weapon', 'twohand', 'crafting'],
            equipmentStats: {
                grantedAbility: [44, 51],
                slot: 'weapon',
                offensiveCritical: { chance: 11 / 200, damageMultiplier: 1.75 },
                offensiveAccuracyAffinityRating: {
                    Melee: 88,
                    Magic: -10,
                    Range: -10,
                    Piercing: 55,
                    Blunt: -8,
                    Slashing: 55,
                },
                offensiveDamageAffinity: {
                    Melee: 1,
                    Magic: 33 / 100,
                    Range: 0.2,
                    Piercing: 1.05,
                    Blunt: 3 / 4,
                    Slashing: 3 / 4,
                },
                weaponBonus: { strength: 41, intellect: 0, dexterity: 0 },
                armorBonus: { protection: 0, resistance: 0, agility: 6, stamina: 0 },
                attackSpeed: 2,
                augmentationBonus: [
                    { stat: 'offensiveCritical.chance', value: 1 / 100 },
                    {
                        stat: 'offensiveCritical.damageMultiplier',
                        value: 1 / 100,
                    },
                    { stat: 'weaponBonus.strength', value: 3 / 4 },
                    { stat: 'armorBonus.agility', value: 0.1 },
                ],
            },
            rarity: 'rare',
        },
        1508: {
            name: "King's Crown",
            id: 1508,
            enchantmentTier: 8,
            augmentationCost: { 403: 2, 513: 100 },
            value: 6360000,
            tradeable: true,
            requiredLevel: { constitution: 1, attack: 1, strength: 1, defense: 85 },



            itemImage: '/images/combat/equipment/kings_crown.png',
            extraTooltipInfo: "The crown of a Valley's true forever king.",
            class: 'equipment',
            visual: 'kings-crown',
            category: ['armor', 'combat'],
            tags: ['armor', 'melee', 'crafting'],
            equipmentStats: {
                grantedAbility: [19],
                slot: 'helm',
                defensiveCritical: { chance: 0.1, damageMultiplier: 0.8 },
                offensiveDamageAffinity: { Fire: 0.9, Ice: 1.33 },
                defensiveDamageAffinity: {
                    Fire: 1.08,
                    Ice: 1.08,
                    Melee: 1.13,
                    Magic: 97 / 100,
                    Range: 1.08,
                },
                weaponBonus: { strength: 0, intellect: -24, dexterity: -24 },
                armorBonus: { protection: 120, resistance: 64, agility: -24, stamina: 32 },
                augmentationBonus: [
                    { stat: 'armorBonus.protection', value: 1.75 },
                    { stat: 'armorBonus.resistance', value: 0.5 },
                    { stat: 'armorBonus.stamina', value: 0.5 },
                ],
            },
            rarity: 'epic',
        },
        1509: {
            name: 'Fire Orb',
            id: 1509,
            enchantmentTier: 8,
            augmentationCost: { 402: 4, 512: 100 },
            value: 6360000,
            tradeable: true,
            requiredLevel: { constitution: 1, attack: 85, strength: 85, defense: 1 },



            itemImage: '/images/combat/equipment/fire_orb.png',
            extraTooltipInfo: 'This orb of living flame sharpens the senses to an inhuman degree.',
            class: 'equipment',
            visual: 'fire-orb',
            category: ['armor', 'combat'],
            tags: ['armor', 'weapon', 'melee', 'crafting'],
            equipmentStats: {
                grantedAbility: [7],
                slot: 'shield',
                defensiveCritical: {
                    chance: 1 / 100,
                    damageMultiplier: 3 / 4,
                },
                offensiveAccuracyAffinityRating: { Melee: 36, Fire: 24, Magic: 12, Range: 0 },
                offensiveDamageAffinity: { Fire: 1.5, Melee: 1, Magic: 1.33 },
                defensiveDamageAffinity: { Fire: 1.06, Melee: 1.02, Magic: 1.04, Range: 1 },
                weaponBonus: { strength: 0, intellect: 24, dexterity: 0 },
                armorBonus: { protection: 102, resistance: 64, agility: -4, stamina: 12 },
                augmentationBonus: [
                    { stat: 'armorBonus.protection', value: 1.75 },
                    { stat: 'armorBonus.resistance', value: 0.5 },
                    { stat: 'armorBonus.stamina', value: 0.5 },
                    { stat: 'weaponBonus.intellect', value: 0.5 },
                ],
            },
            rarity: 'epic',
        },
        1510: {
            id: 1510,
            name: 'Kalanahmatti',
            value: 3360000,
            tradeable: true,



            itemImage: '/images/combat/equipment/kalanahmatti.png',
            extraTooltipInfo:
                "A mere fragment of the legendary spear 'Kalanahmatti' can still be fashioned into a powerful weapon!",
            class: 'bar',
            tags: ['mining', 'smithing'],
            rarity: 'epic',
        },
        1511: {
            name: 'Shard of Kalanahmatti',
            id: 1511,
            enchantmentTier: 8,
            augmentationCost: { 206: 100, 306: 500 },
            craftingLevel: 80,
            craftingExperience: 148200,
            value: 6360000,
            tradeable: true,
            requiredLevel: { constitution: 1, attack: 1, strength: 85, defense: 1 },



            itemImage: '/images/combat/equipment/shard_of_kalanahmatti.png',
            itemIcon: '/images/combat/equipment/shard_of_kalanahmatti_icon.png',
            class: 'equipment',
            visual: 'shard-of-kalanahmatti',
            craftingDescription: "Powerful weapon made out of the legendary spear 'Kalanahmatti'.",
            extraTooltipInfo: "This powerful blade is fashioned from a shard of the legendary spear 'Kalanahmatti.'",
            category: 'Rare',
            tags: ['melee', 'weapon', 'onehand', 'shard', 'fragment', 'crafting'],
            equipmentStats: {
                grantedAbility: [4, 8],
                slot: 'weapon',
                offensiveCritical: { chance: 1 / 20, damageMultiplier: 1.3 },
                offensiveAccuracyAffinityRating: {
                    Melee: 94,
                    Slashing: 123,
                    Ice: 32,
                    Magic: 14,
                    Range: -14,
                },
                offensiveDamageAffinity: {
                    Melee: 1.1,
                    Slashing: 1.33,
                    Blunt: 1 / 4,
                    Piercing: 1 / 4,
                    Magic: 0.5,
                    Ice: 1.25,
                    Range: 0.1,
                },
                weaponBonus: { strength: 109, intellect: 0, dexterity: 0 },
                oneHanded: true,
                attackSpeed: 2.4,
                augmentationBonus: [
                    { stat: 'offensiveAccuracyAffinityRating.Melee', value: 2.25 },
                    { stat: 'offensiveAccuracyAffinityRating.Ice', value: 1 },
                    { stat: 'weaponBonus.strength', value: 2.25 },
                ],
            },
            requiredResources: [{ 206: 200, 306: 1000, 1510: 1 }],
            rarity: 'epic',
        },
        1512: {
            name: 'Zero Edge',
            id: 1512,
            enchantmentTier: 5,
            augmentationCost: { 206: 50 },
            value: 3360000,
            tradeable: true,
            requiredLevel: { constitution: 1, attack: 1, strength: 50, defense: 1 },



            itemImage: '/images/combat/equipment/zero_edge.png',
            itemIcon: '/images/combat/equipment/zero_edge_icon.png',
            class: 'equipment',
            extraTooltipInfo: 'Lightning never strikes twice, so surely this is an anomaly.',
            visual: 'zero',
            category: ['weapon', 'combat'],
            tags: ['melee', 'weapon', 'onehand', 'crafting'],
            equipmentStats: {
                grantedAbility: [16, 50],
                slot: 'weapon',
                offensiveCritical: { chance: 1 / 20, damageMultiplier: 1.3 },
                offensiveAccuracyAffinityRating: {
                    Melee: 52,
                    Magic: -14,
                    Range: -14,
                    Slashing: 60,
                    Lightning: 33,
                },
                offensiveDamageAffinity: {
                    Melee: 1,
                    Magic: 1 / 4,
                    Range: 0.1,
                    Piercing: 1 / 4,
                    Blunt: 1 / 4,
                    Slashing: 1.33,
                    Lightning: 1.5,
                },
                defensiveDamageAffinity: { Lightning: 1.06 },
                weaponBonus: { strength: 57, intellect: 16, dexterity: 0 },
                oneHanded: true,
                attackSpeed: 2.4,
                augmentationBonus: [
                    { stat: 'offensiveAccuracyAffinityRating.Melee', value: 1.65 },
                    { stat: 'offensiveAccuracyAffinityRating.Lightning', value: 1.75 },
                    { stat: 'weaponBonus.intellect', value: 1 / 4 },
                    { stat: 'weaponBonus.strength', value: 1.65 },
                ],
            },
            rarity: 'uncommon',
        },
        1513: {
            name: 'Crest of Chaos',
            id: 1513,
            enchantmentTier: 5,
            augmentationCost: { 112: 200 },
            craftingLevel: 1,
            craftingExperience: 1,
            value: 68000,
            tradeable: true,
            requiredLevel: { constitution: 1, attack: 1, strength: 1, defense: 20 },



            itemImage: '/images/combat/equipment/crest_of_chaos.png',
            itemIcon: '/images/combat/equipment/crest_of_chaos_icon.png',
            extraTooltipInfo: 'The heat of this helm could empower your smithing abilities!',
            class: 'equipment',
            visual: 'crest-of-chaos',
            category: ['armor', 'combat'],
            tags: ['armor', 'crafting'],
            equipmentStats: {
                grantedAbility: [20],
                slot: 'helm',
                offensiveAccuracyAffinityRating: { Fire: 64 },
                offensiveDamageAffinity: { Fire: 2 },
                defensiveDamageAffinity: { Fire: 1.25 },
                weaponBonus: { strength: 0, intellect: 12, dexterity: 0 },
                armorBonus: { protection: 12, resistance: 18, agility: 0, stamina: 0 },
                toolBoost: [{ skill: 'smithing', boost: 5 }],
                augmentationBonus: [{ stat: 'toolBoost.smithing', value: 0.5 }],
            },
            requiredResources: [{ 204: 200 }],
            rarity: 'uncommon',
        },
        1514: {
            name: 'Forgotten Soul',
            id: 1514,
            enchantmentTier: 7,
            augmentationCost: { 515: 100, 800: 50 },
            value: 3360000,
            tradeable: true,
            requiredLevel: { constitution: 1, attack: 1, strength: 70, defense: 1 },



            itemImage: '/images/combat/equipment/forgotten-soul-axe.png',
            itemIcon: '/images/combat/equipment/forgotten-soul-sad-icon.png',
            extraTooltipInfo: 'Long forgotten in the waves. Can you throw it?',
            class: 'equipment',
            visual: 'forgotten-soul-axe',
            category: ['weapon', 'combat'],
            tags: ['melee', 'weapon', 'onehand', 'crafting'],
            equipmentStats: {
                grantedAbility: [35],
                slot: 'weapon',
                offensiveCritical: { chance: 7 / 200, damageMultiplier: 1.13 },
                offensiveAccuracyAffinityRating: {
                    Melee: 24,
                    Magic: -12,
                    Range: 55,
                    Piercing: -4,
                    Blunt: 132,
                    Slashing: 88,
                },
                offensiveDamageAffinity: {
                    Melee: 1,
                    Magic: 0.1,
                    Range: 1,
                    Piercing: 1 / 4,
                    Blunt: 1.25,
                    Slashing: 3 / 4,
                },
                weaponBonus: { strength: 72, intellect: 0, dexterity: 107 },
                oneHanded: true,
                attackSpeed: 2.7,
                augmentationBonus: [
                    { stat: 'offensiveAccuracyAffinityRating.Melee', value: 0.9 },
                    { stat: 'weaponBonus.strength', value: 3 },
                    { stat: 'offensiveAccuracyAffinityRating.Range', value: 0.9 },
                    { stat: 'weaponBonus.dexterity', value: 3 },
                ],
            },
            rarity: 'rare',
        },
        1515: {
            name: 'Forgotten Soul',
            id: 1515,
            enchantmentTier: 7,
            augmentationCost: { 515: 100, 800: 50 },
            value: 3360000,
            tradeable: true,
            requiredLevel: { constitution: 1, attack: 1, strength: 70, defense: 1 },



            itemImage: '/images/combat/equipment/forgotten-soul-scimitar.png',
            itemIcon: '/images/combat/equipment/forgotten-soul-crazy-icon.png',
            extraTooltipInfo: 'Driven mad by its endless drifting. Appears to channel magical energy.',
            class: 'equipment',
            visual: 'forgotten-soul-scim',
            category: ['weapon', 'combat'],
            tags: ['melee', 'weapon', 'onehand', 'crafting'],
            equipmentStats: {
                grantedAbility: [35],
                slot: 'weapon',
                offensiveCritical: { chance: 1 / 20, damageMultiplier: 1.3 },
                offensiveAccuracyAffinityRating: { Melee: 48, Magic: 66, Range: -14, Slashing: 77 },
                offensiveDamageAffinity: {
                    Melee: 1,
                    Magic: 1,
                    Range: 0.1,
                    Piercing: 1 / 4,
                    Blunt: 1 / 4,
                    Slashing: 1.33,
                },
                weaponBonus: { strength: 64, intellect: 71, dexterity: 0 },
                oneHanded: true,
                augmentationBonus: [
                    { stat: 'offensiveAccuracyAffinityRating.Melee', value: 1.98 },
                    { stat: 'weaponBonus.strength', value: 1.98 },
                    { stat: 'offensiveAccuracyAffinityRating.Magic', value: 1.98 },
                    { stat: 'weaponBonus.intellect', value: 1.98 },
                ],
                attackSpeed: 2.1,
            },
            rarity: 'rare',
        },
        1516: {
            name: 'Forgotten Soul',
            id: 1516,
            enchantmentTier: 7,
            augmentationCost: { 515: 100, 800: 50 },
            value: 3360000,
            tradeable: true,
            requiredLevel: { constitution: 1, attack: 1, strength: 70, defense: 1 },



            itemImage: '/images/combat/equipment/forgotten-soul-two-handed.png',
            itemIcon: '/images/combat/equipment/forgotten-soul-mad-icon.png',
            class: 'equipment',
            extraTooltipInfo: 'Perhaps forgotten, absolutely enraged. Only good for melee!',
            visual: 'forgotten-soul-two',
            category: ['weapon', 'combat'],
            tags: ['melee', 'weapon', 'twohand', 'crafting'],
            equipmentStats: {
                grantedAbility: [35],
                slot: 'weapon',
                offensiveCritical: { chance: 1 / 25, damageMultiplier: 1.15 },
                offensiveAccuracyAffinityRating: {
                    Melee: 77,
                    Magic: -20,
                    Range: -20,
                    Piercing: 110,
                    Blunt: 44,
                    Slashing: 132,
                },
                offensiveDamageAffinity: {
                    Melee: 1.05,
                    Magic: 0.1,
                    Range: 0.1,
                    Piercing: 33 / 50,
                    Blunt: 33 / 100,
                    Slashing: 1.33,
                },
                weaponBonus: { strength: 131, intellect: 0, dexterity: 0 },
                attackSpeed: 3,
                augmentationBonus: [
                    { stat: 'offensiveAccuracyAffinityRating.Melee', value: 1.5 },
                    { stat: 'weaponBonus.strength', value: 4.5 },
                ],
            },
            rarity: 'rare',
        },
        1517: {
            name: 'Gargoyle Chainmail',
            id: 1517,
            enchantmentTier: 5,
            augmentationCost: { 202: 100, 204: 100 },
            value: 232000,
            tradeable: true,
            requiredLevel: { constitution: 1, attack: 1, strength: 1, defense: 40 },



            itemImage: '/images/combat/equipment/gargoyle_chain.png',
            class: 'equipment',
            visual: 'chainbody-gargoyle',
            tags: ['armor', 'crafting'],
            equipmentStats: {
                slot: 'body',
                defensiveDamageAffinity: {
                    Melee: 19 / 20,
                    Magic: 19 / 20,
                    Range: 1,
                    Piercing: 97 / 100,
                    Blunt: 99 / 100,
                    Slashing: 1.04,
                },
                armorBonus: { protection: 69, resistance: -3, agility: 20, stamina: 0 },
                augmentationBonus: [
                    { stat: 'armorBonus.protection', value: 1.25 },
                    { stat: 'armorBonus.agility', value: 0.1 },
                ],
            },
            rarity: 'uncommon',
        },
        1518: {
            name: 'Gargoyle Legs',
            id: 1518,
            enchantmentTier: 5,
            augmentationCost: { 202: 80, 204: 80 },
            value: 184000,
            tradeable: true,
            requiredLevel: { constitution: 1, attack: 1, strength: 1, defense: 40 },



            itemImage: '/images/combat/equipment/gargoyle_pants.png',
            class: 'equipment',
            visual: 'platelegs',
            tags: ['armor', 'crafting'],
            equipmentStats: {
                slot: 'legs',
                defensiveCritical: { chance: 0.1, damageMultiplier: 0.8 },
                defensiveDamageAffinity: {
                    Melee: 1.08,
                    Magic: 47 / 50,
                    Range: 1.06,
                    Piercing: 1.08,
                    Blunt: 47 / 50,
                    Slashing: 1.08,
                },
                armorBonus: { protection: 60, resistance: -4, agility: -4, stamina: 9 },
                augmentationBonus: [
                    { stat: 'armorBonus.protection', value: 1.25 },
                    { stat: 'armorBonus.stamina', value: 0.1 },
                ],
            },
            rarity: 'uncommon',
        },
        1519: {
            name: 'Gargoyle Boots',
            id: 1519,
            enchantmentTier: 5,
            augmentationCost: { 202: 80, 204: 80 },
            value: 136000,
            tradeable: true,
            requiredLevel: { constitution: 1, attack: 1, strength: 1, defense: 40 },



            itemImage: '/images/combat/equipment/gargoyle_boots.png',
            itemIcon: '/images/combat/equipment/gargoyle_boots_icon.png',
            class: 'equipment',
            visual: 'boots',
            tags: ['armor', 'melee', 'crafting'],
            equipmentStats: {
                slot: 'boots',
                armorBonus: { protection: 16, resistance: 16, agility: 0, stamina: 0 },
                augmentationBonus: [
                    { stat: 'armorBonus.protection', value: 0.1 },
                    { stat: 'armorBonus.resistance', value: 0.1 },
                ],
            },
            rarity: 'uncommon',
        },
        1520: {
            name: 'Gargoyle Helm',
            id: 1520,
            enchantmentTier: 5,
            augmentationCost: { 202: 60, 204: 60 },
            value: 136000,
            tradeable: true,
            requiredLevel: { constitution: 1, attack: 1, strength: 1, defense: 40 },



            itemImage: '/images/combat/equipment/gargoyle_helm.png',
            itemIcon: '/images/combat/equipment/gargoyle_helm_icon.png',
            twoSided: true,
            class: 'equipment',
            visual: 'gargoyle-helm',
            tags: ['armor', 'crafting'],
            equipmentStats: {
                slot: 'helm',
                defensiveDamageAffinity: {
                    Melee: 1,
                    Magic: 97 / 100,
                    Range: 1,
                    Piercing: 1,
                    Blunt: 1,
                    Slashing: 1,
                },
                armorBonus: { protection: 26, resistance: -1, agility: 0, stamina: 0 },
                augmentationBonus: [{ stat: 'armorBonus.protection', value: 3 / 4 }],
            },
            rarity: 'uncommon',
        },
        1521: {
            name: 'Gargoyle Shield',
            id: 1521,
            enchantmentTier: 5,
            augmentationCost: { 202: 100, 204: 100 },
            value: 232000,
            tradeable: true,
            requiredLevel: { constitution: 1, attack: 1, strength: 1, defense: 40 },



            itemImage: '/images/combat/equipment/gargoyle_shield.png',
            itemIcon: '/images/combat/equipment/gargoyle_shield_1.png',
            class: 'equipment',
            visual: 'gargoyle-shield',
            tags: ['armor', 'weapon', 'melee'],
            equipmentStats: {
                slot: 'shield',
                defensiveCritical: { chance: 0.1, damageMultiplier: 0.8 },
                defensiveDamageAffinity: {
                    Melee: 1.06,
                    Magic: 47 / 50,
                    Range: 1.06,
                    Piercing: 1.13,
                    Blunt: 1.06,
                    Slashing: 1.13,
                },
                armorBonus: { protection: 52, resistance: -1, agility: -1, stamina: 8 },
                augmentationBonus: [
                    { stat: 'armorBonus.protection', value: 1.25 },
                    { stat: 'armorBonus.stamina', value: 0.1 },
                ],
            },
            rarity: 'uncommon',
        },
        1522: {
            name: 'Gargoyle Falchion',
            id: 1522,
            enchantmentTier: 5,
            augmentationCost: { 202: 80, 204: 80, 303: 20, 304: 20 },
            value: 184000,
            tradeable: true,
            requiredLevel: { constitution: 1, attack: 1, strength: 40, defense: 1 },



            itemImage: '/images/combat/equipment/gargoyle_falchion.png',
            itemIcon: '/images/combat/equipment/gargoyle_falcion_icon.png',
            class: 'equipment',
            visual: 'gargoyle-falchion',
            tags: ['melee', 'weapon', 'onehand'],
            equipmentStats: {
                slot: 'weapon',
                offensiveCritical: { chance: 1 / 20, damageMultiplier: 1.3 },
                offensiveAccuracyAffinityRating: { Melee: 52, Magic: -14, Range: -14, Slashing: 60 },
                offensiveDamageAffinity: {
                    Melee: 1,
                    Magic: 1 / 4,
                    Range: 0.1,
                    Piercing: 1 / 4,
                    Blunt: 1 / 4,
                    Slashing: 1.33,
                },
                weaponBonus: { strength: 57, intellect: 0, dexterity: 0 },
                oneHanded: true,
                attackSpeed: 2.4,
                augmentationBonus: [
                    { stat: 'offensiveAccuracyAffinityRating.Melee', value: 1.65 },
                    { stat: 'weaponBonus.strength', value: 1.65 },
                ],
            },
            rarity: 'uncommon',
        },
        1523: {
            name: 'Gargoyle Daggers',
            id: 1523,
            enchantmentTier: 5,
            augmentationCost: { 202: 60, 204: 60, 303: 15, 304: 15 },
            value: 136000,
            tradeable: true,
            requiredLevel: { constitution: 1, attack: 1, strength: 40, defense: 1 },



            itemImage: '/images/combat/equipment/dagger_gargoyle.png',
            itemIcon: '/images/combat/equipment/dagger_gargoyle_icon.png',
            class: 'equipment',
            visual: 'gargoyle-daggers',
            isDaggers: true,
            tags: ['melee', 'weapon', 'twohand'],
            equipmentStats: {
                slot: 'weapon',
                offensiveCritical: { chance: 11 / 200, damageMultiplier: 1.75 },
                offensiveAccuracyAffinityRating: {
                    Melee: 69,
                    Magic: -10,
                    Range: -10,
                    Piercing: 43,
                    Blunt: -8,
                    Slashing: 43,
                },
                offensiveDamageAffinity: {
                    Melee: 1,
                    Magic: 33 / 100,
                    Range: 0.2,
                    Piercing: 1.1,
                    Blunt: 33 / 100,
                    Slashing: 3 / 4,
                },
                weaponBonus: { strength: 29, intellect: 0, dexterity: 0 },
                armorBonus: { protection: 0, resistance: 0, agility: 10, stamina: 0 },
                attackSpeed: 2,
                augmentationBonus: [
                    { stat: 'offensiveCritical.chance', value: 1 / 100 },
                    {
                        stat: 'offensiveCritical.damageMultiplier',
                        value: 1 / 100,
                    },
                    { stat: 'armorBonus.agility', value: 0.1 },
                ],
            },
            rarity: 'uncommon',
        },
        1524: {
            name: 'Gargoyle Glaive',
            id: 1524,
            enchantmentTier: 5,
            augmentationCost: { 202: 120, 204: 120, 303: 30, 304: 30 },
            value: 280000,
            tradeable: true,
            requiredLevel: { constitution: 1, attack: 1, strength: 40, defense: 1 },



            itemImage: '/images/combat/equipment/gargoyle_glaive.png',
            itemIcon: '/images/combat/equipment/gargoyle_glaive_icon.png',
            class: 'equipment',
            visual: 'spear',
            tags: ['melee', 'weapon', 'twohand'],
            equipmentStats: {
                grantedAbility: [22],
                slot: 'weapon',
                offensiveCritical: { chance: 1 / 20, damageMultiplier: 1.35 },
                offensiveAccuracyAffinityRating: {
                    Melee: 78,
                    Piercing: 138,
                    Blunt: 52,
                    Magic: -24,
                    Range: -24,
                },
                offensiveDamageAffinity: {
                    Melee: 1,
                    Piercing: 1.5,
                    Blunt: 3 / 4,
                    Slashing: 1 / 4,
                    Magic: 0.1,
                    Range: 0.1,
                },
                weaponBonus: { strength: 77, intellect: 0, dexterity: 0 },
                armorBonus: { protection: 18, resistance: 0, agility: 0, stamina: 0 },
                attackSpeed: 3.2,
                augmentationBonus: [
                    { stat: 'offensiveAccuracyAffinityRating.Melee', value: 1.25 },
                    { stat: 'weaponBonus.strength', value: 2.5 },
                    { stat: 'armorBonus.protection', value: 1.25 },
                ],
            },
            rarity: 'uncommon',
        },
        1525: {
            name: 'Infernal Lance',
            id: 1525,
            enchantmentTier: 8,
            augmentationCost: { 112: 100, 207: 50, 512: 100 },
            value: 420000,
            tradeable: true,
            requiredLevel: { constitution: 1, attack: 1, strength: 40, defense: 1 },



            itemImage: '/images/combat/equipment/infernal_lance.png',
            itemIcon: '/images/combat/equipment/infernal_lance_icon.png',
            extraTooltipInfo: 'A legendary weapon of great prestige and power.',
            class: 'equipment',
            visual: 'spear',
            tags: ['melee', 'weapon', 'twohand'],
            equipmentStats: {
                grantedAbility: [22, 36],
                slot: 'weapon',
                offensiveCritical: { chance: 1 / 20, damageMultiplier: 1.35 },
                offensiveAccuracyAffinityRating: {
                    Melee: 146,
                    Piercing: 260,
                    Blunt: 97,
                    Fire: 60,
                    Magic: -24,
                    Range: -24,
                },
                offensiveDamageAffinity: {
                    Melee: 1,
                    Piercing: 1.5,
                    Blunt: 3 / 4,
                    Slashing: 1 / 4,
                    Magic: 0.1,
                    Fire: 1.25,
                    Range: 0.1,
                },
                weaponBonus: { strength: 119, intellect: 0, dexterity: 0 },
                armorBonus: { protection: 33, resistance: 0, agility: 0, stamina: 0 },
                attackSpeed: 3.2,
                augmentationBonus: [
                    { stat: 'offensiveAccuracyAffinityRating.Melee', value: 1.5 },
                    { stat: 'weaponBonus.strength', value: 3.5 },
                    { stat: 'armorBonus.protection', value: 2 },
                ],
                isTransmog: true,
            },
            rarity: 'epic',
        },
        1526: {
            name: 'Black Knight Great Helm',
            id: 1526,
            enchantmentTier: 5,
            tradeable: true,
            augmentationCost: { 202: 60, 204: 60 },
            value: 192000,
            requiredLevel: { constitution: 1, attack: 1, strength: 1, defense: 40 },



            itemImage: '/images/combat/equipment/black_black_knight_great_helm.png',
            itemIcon: '/images/combat/equipment/black_black_knight_great_helm_icon.png',
            extraTooltipInfo: 'A helm of unknown make that grants superhuman strength to its wearer!',
            class: 'equipment',
            visual: 'black-knight-full-helm',
            tags: ['armor', 'crafting'],
            equipmentStats: {
                slot: 'helm',
                defensiveCritical: { chance: 0.1, damageMultiplier: 1.33 },
                defensiveDamageAffinity: {
                    Melee: 1.06,
                    Magic: 81 / 100,
                    Range: 1.06,
                    Piercing: 1.08,
                    Blunt: 47 / 50,
                    Slashing: 1.08,
                },
                weaponBonus: { strength: 32, intellect: -24, dexterity: -24 },
                armorBonus: { protection: 24, resistance: -6, agility: -12, stamina: 0 },
                augmentationBonus: [
                    { stat: 'armorBonus.protection', value: 1 / 4 },
                    { stat: 'armorBonus.resistance', value: -0.5 },
                    { stat: 'weaponBonus.strength', value: 3 / 4 },
                ],
            },
            rarity: 'uncommon',
        },
        1527: {
            name: 'Chorus of Souls',
            id: 1527,
            enchantmentTier: 6,
            augmentationCost: { 515: 200, 800: 100 },
            value: 2000000,
            tradeable: true,
            requiredLevel: { constitution: 1, attack: 1, strength: 70, defense: 1 },



            itemImage: '/images/combat/equipment/chorus_of_souls.png',
            itemIcon: '/images/combat/equipment/chorus_of_souls_icon.png',
            extraTooltipInfo: 'It wails with every swing. Unnerving.',
            class: 'equipment',
            visual: 'chorus-of-souls',
            category: ['weapon', 'combat'],
            tags: ['melee', 'weapon', 'onehand', 'crafting'],
            equipmentStats: {
                grantedAbility: [37],
                slot: 'weapon',
                offensiveCritical: { chance: 7 / 200, damageMultiplier: 1.13 },
                offensiveAccuracyAffinityRating: {
                    Melee: 62,
                    Magic: -12,
                    Range: -12,
                    Piercing: -4,
                    Blunt: 148,
                    Slashing: 98,
                },
                offensiveDamageAffinity: {
                    Melee: 1,
                    Magic: 0.1,
                    Range: 0.1,
                    Piercing: 1 / 4,
                    Blunt: 1.25,
                    Slashing: 3 / 4,
                },
                weaponBonus: { strength: 120, intellect: 0, dexterity: 0 },
                oneHanded: true,
                attackSpeed: 3,
                augmentationBonus: [
                    { stat: 'offensiveAccuracyAffinityRating.Melee', value: 1 },
                    { stat: 'weaponBonus.strength', value: 3.25 },
                ],
            },
            rarity: 'epic',
        },
        1528: {
            name: 'Decayed Cloak',
            id: 1528,
            enchantmentTier: 0,
            augmentationCost: { 515: 500, 800: 50 },
            value: 2560000,
            tradeable: true,
            requiredLevel: { constitution: 1, attack: 1, strength: 1, defense: 1 },



            itemImage: '/images/combat/equipment/decayed_cloak.png',
            itemIcon: '/images/combat/equipment/decayed_cloak_hood.png',
            extraTooltipInfo: 'Despite its ragged appearance it is immensely durable. What could have caused this damage?',
            class: 'equipment',
            visual: 'cape',
            category: ['weapon', 'combat', 'christmas'],
            tags: ['melee', 'armor', 'crafting'],
            equipmentStats: {
                slot: 'cape',
                defensiveDamageAffinity: { Melee: 1.02, Magic: 1.02, Range: 1.02 },
                weaponBonus: { strength: 0, intellect: 0, dexterity: 0 },
                armorBonus: { protection: 4, resistance: 4, agility: 4, stamina: 4 },
                augmentationBonus: [
                    { stat: 'armorBonus.protection', value: 0.5 },
                    { stat: 'armorBonus.resistance', value: 0.5 },
                    { stat: 'armorBonus.agility', value: 0.5 },
                    { stat: 'armorBonus.stamina', value: 0.5 },
                ],
            },
            rarity: 'epic',
        },
        1530: {
            name: 'Mysterious Man',
            id: 1530,
            enchantmentTier: 5,
            augmentationCost: { 800: 10000 },
            craftingLevel: 1,
            craftingExperience: 1,
            value: 0,
            tradeable: true,
            requiredLevel: { constitution: 1, attack: 1, strength: 1, defense: 1 },



            itemImage: '/images/combat/equipment/hatcontest_mysterious_man.png',
            itemIcon: '/images/combat/equipment/hatcontest_mysterious_man_icon.png',
            extraTooltipInfo: 'Who are they? What are they? How did they get here?',
            class: 'equipment',
            visual: 'mysteriousman',
            tags: ['armor', 'crafting'],
            equipmentStats: { slot: 'helm' },
            rarity: 'uncommon',
        },
        1531: {
            name: 'Corny Joke',
            id: 1531,
            enchantmentTier: 5,
            augmentationCost: { 800: 10000 },
            craftingLevel: 1,
            craftingExperience: 1,
            value: 0,
            tradeable: true,
            requiredLevel: { constitution: 1, attack: 1, strength: 1, defense: 1 },



            itemImage: '/images/combat/equipment/hatcontest_cornyjoke.png',
            itemIcon: '/images/combat/equipment/hatcontest_cornyjoke_icon.png',
            extraTooltipInfo: 'You ever heard of this joke? Me neither',
            class: 'equipment',
            visual: 'cornyjoke',
            tags: ['armor', 'crafting'],
            equipmentStats: { slot: 'helm' },
            requiredResources: [{ 201: 10 }],
            rarity: 'uncommon',
        },
        1532: {
            name: 'Death Metal Wig',
            id: 1532,
            enchantmentTier: 5,
            augmentationCost: { 800: 10000 },
            craftingLevel: 1,
            craftingExperience: 1,
            value: 0,
            tradeable: true,
            requiredLevel: { constitution: 1, attack: 1, strength: 1, defense: 1 },



            itemImage: '/images/combat/equipment/hatcontest_death_metal_wig.png',
            itemIcon: '/images/combat/equipment/hatcontest_death_metal_wig_icon.png',
            extraTooltipInfo: 'Who said Death metal is all evil?',
            twoSided: true,
            class: 'equipment',
            visual: 'deathmetalwig',
            tags: ['armor', 'crafting'],
            equipmentStats: { slot: 'helm' },
            requiredResources: [{ 201: 10 }],
            rarity: 'uncommon',
        },
        1540: {
            name: 'Shrimp Carapace',
            id: 1540,
            enchantmentTier: 0,
            value: 10000,
            augmentationCost: { 5000: 1 },
            tradeable: false,
            requiredLevel: { constitution: 1, attack: 1, strength: 1, defense: 30, magic: 30 },



            itemImage: '/images/combat/equipment/shrimp_armor.png',
            itemIcon: '/images/combat/equipment/shrimp_armor_icon.png',
            extraTooltipInfo:
                "The chitinous shell of the Aberrant Shrimp formed into armor; it's tainted by some sort of demonic magic. Is this a blessing or a curse?",
            class: 'equipment',
            visual: 'shrimp-armor',
            tags: ['armor'],
            equipmentStats: {
                slot: 'body',
                defensiveCritical: { chance: 0.1, damageMultiplier: 0.8 },
                defensiveDamageAffinity: {
                    Melee: 0.97,
                    Magic: 0.97,
                    Range: 0.97,
                    Piercing: 1.06,
                    Blunt: 22 / 25,
                    Slashing: 1.06,
                },
                armorBonus: { protection: 44, resistance: 24, agility: -6, stamina: 12 },
                augmentationBonus: [
                    { stat: 'armorBonus.protection', value: 1 },
                    { stat: 'armorBonus.resistance', value: 1 },
                    { stat: 'armorBonus.stamina', value: 0.1 },
                ],
                itemSet: [2001],
            },
        },
        1541: {
            name: 'Shrimp Greaves',
            id: 1541,
            enchantmentTier: 0,
            value: 10000,
            augmentationCost: { 5000: 1 },
            tradeable: false,
            requiredLevel: { constitution: 1, attack: 1, strength: 1, defense: 30, magic: 30 },



            itemImage: '/images/combat/equipment/shrimp_pants.png',
            extraTooltipInfo:
                "The chitinous shell of the Aberrant Shrimp formed into greaves; it's tainted by some sort of demonic magic. Is this a blessing or a curse?",
            class: 'equipment',
            visual: 'shrimp-legs',
            tags: ['armor'],
            equipmentStats: {
                slot: 'legs',
                defensiveCritical: { chance: 0.1, damageMultiplier: 0.8 },
                defensiveDamageAffinity: {
                    Melee: 0.97,
                    Magic: 0.97,
                    Range: 0.97,
                    Piercing: 1.08,
                    Blunt: 22 / 25,
                    Slashing: 1.04,
                },
                armorBonus: { protection: 31, resistance: 11, agility: -4, stamina: 7 },
                augmentationBonus: [
                    { stat: 'armorBonus.protection', value: 3 / 4 },
                    { stat: 'armorBonus.resistance', value: 3 / 4 },
                    { stat: 'armorBonus.stamina', value: 0.1 },
                ],
                itemSet: [2001],
            },
        },
        1542: {
            name: 'Shrimp Helm',
            id: 1542,
            enchantmentTier: 0,
            value: 10000,
            augmentationCost: { 5000: 1 },
            tradeable: false,
            requiredLevel: { constitution: 1, attack: 1, strength: 1, defense: 30, magic: 30 },



            itemImage: '/images/combat/equipment/shrimp_helm.png',
            itemIcon: '/images/combat/equipment/shrimp_helm_icon.png',
            extraTooltipInfo:
                "The chitinous shell of the Aberrant Shrimp formed into a helmet; it's tainted by some sort of demonic magic. Is this a blessing or a curse?",
            class: 'equipment',
            visual: 'shrimp-helm',
            tags: ['armor'],
            equipmentStats: {
                slot: 'helm',
                defensiveCritical: { chance: 0.1, damageMultiplier: 0.8 },
                defensiveDamageAffinity: {
                    Melee: 0.97,
                    Magic: 0.97,
                    Range: 0.97,
                    Piercing: 1.08,
                    Blunt: 47 / 50,
                    Slashing: 1.08,
                },
                armorBonus: { protection: 22, resistance: 4, agility: -1, stamina: 6 },
                augmentationBonus: [
                    { stat: 'armorBonus.protection', value: 3 / 4 },
                    { stat: 'armorBonus.resistance', value: 3 / 4 },
                    { stat: 'armorBonus.stamina', value: 0.1 },
                ],
                itemSet: [2001],
            },
        },
        1543: {
            name: 'Shrimp Shell',
            id: 1543,
            enchantmentTier: 0,
            value: 10000,
            augmentationCost: { 5000: 1 },
            tradeable: false,
            requiredLevel: { constitution: 1, attack: 1, strength: 1, defense: 30, magic: 30 },



            itemImage: '/images/combat/equipment/shrimp_shield.png',
            itemIcon: '/images/combat/equipment/shrimp_shield_icon.png',
            extraTooltipInfo:
                "The chitinous shell of the Aberrant Shrimp formed into a shield; it's tainted by some sort of demonic magic. Is this a blessing or a curse?",
            class: 'equipment',
            visual: 'shrimp-shield',
            tags: ['armor', 'weapon'],
            equipmentStats: {
                slot: 'shield',
                defensiveCritical: { chance: 0.1, damageMultiplier: 0.8 },
                defensiveDamageAffinity: {
                    Melee: 0.97,
                    Magic: 0.97,
                    Range: 0.97,
                    Piercing: 1.13,
                    Blunt: 1.06,
                    Slashing: 1.13,
                },
                armorBonus: { protection: 26, resistance: 12, agility: -1, stamina: 6 },
                augmentationBonus: [
                    { stat: 'armorBonus.protection', value: 3 / 4 },
                    { stat: 'armorBonus.resistance', value: 3 / 4 },
                    { stat: 'armorBonus.stamina', value: 0.1 },
                ],
                itemSet: [2001],
            },
        },
        1544: {
            name: "Naga's Bracelet",
            id: 1544,
            enchantmentTier: 0,
            value: 75000,
            tradeable: true,



            itemImage: '/images/combat/equipment/nagas_bracelet.png',
            itemIcon: '/images/combat/equipment/nagas_bracelet.png',
            extraTooltipInfo:
                'The liquid inlaid into the carvings seems far too familiar... Wearing the bracelet gives you a craving you cannot describe; if used to create an enchanted piece of jewelry perhaps it will become more apparent to you, but you may run the risk of corrupting its original power...',
            class: 'equipment',
            visual: '',
            tags: ['armor', 'crafting'],
            equipmentStats: { slot: 'gloves' },
            rarity: 'rare',
        },
        1545: {
            name: 'Titanic Gauntlet',
            id: 1545,
            enchantmentTier: 0,
            augmentationCost: { 400: 15, 401: 12, 402: 9, 403: 6, 404: 3, 1548: 1 },
            craftingLevel: 90,
            craftingExperience: 192000,
            value: 7500000,
            forcedAugmentChance: 1,



            itemImage: '/images/combat/equipment/titanic_gauntlet.png',
            craftingDescription: 'This gauntlet could become so much more if wielded by one with a strong will.',
            extraTooltipInfo: 'This gauntlet could become so much more if wielded by one with a strong will.',
            category: 'Rare',
            class: 'equipment',
            visual: 'awakened-titanic-gauntlet gloves',
            tags: ['armor', 'melee', 'crafting'],
            equipmentStats: {
                slot: 'gloves',
                weaponBonus: { strength: 11, intellect: 0, dexterity: 0 },
                offensiveAccuracyAffinityRating: { Melee: 11, Magic: 11, Range: 11 },
                defensiveDamageAffinity: { Melee: 1.03, Magic: 1.03, Range: 1.03 },
                armorBonus: { protection: 22, resistance: 22, agility: 0, stamina: 0 },
                augmentationBonus: [
                    { stat: 'armorBonus.protection', value: 0.1 },
                    { stat: 'armorBonus.resistance', value: 0.1 },
                    { stat: 'weaponBonus.strength', value: 0.1 },
                    { stat: 'weaponBonus.intellect', value: 0.1 },
                    { stat: 'weaponBonus.dexterity', value: 0.1 },
                ],
            },
            requiredResources: [{ 1549: 400 }],
            rarity: 'rare',
        },
        1546: {
            name: 'Awakened World Shaper',
            id: 1546,
            enchantmentTier: 6,
            augmentationCost: { 400: 15, 401: 12, 402: 9, 403: 6, 404: 3, 1548: 1 },
            value: 10000000,



            itemImage: '/images/combat/equipment/awakened_world_shaper.png',
            extraTooltipInfo: 'You feel as if infinite power lies within your grasp.',
            class: 'equipment',
            visual: 'awakened-titanic-gauntlet gloves',
            tags: ['armor', 'melee', 'crafting'],
            equipmentStats: {
                slot: 'gloves',
                weaponBonus: { strength: 11, intellect: 0, dexterity: 0 },
                offensiveAccuracyAffinityRating: { Melee: 11, Magic: 11, Range: 11 },
                defensiveDamageAffinity: { Melee: 1.03, Magic: 1.03, Range: 1.03 },
                armorBonus: { protection: 24, resistance: 24, agility: 0, stamina: 0 },
                augmentationBonus: [
                    { stat: 'armorBonus.protection', value: 0.1 },
                    { stat: 'armorBonus.resistance', value: 0.1 },
                    { stat: 'weaponBonus.strength', value: 0.1 },
                    { stat: 'weaponBonus.intellect', value: 0.1 },
                    { stat: 'weaponBonus.dexterity', value: 0.1 },
                ],
            },
            rarity: 'epic',
        },
        1547: {
            name: 'Shapeless Scythe',
            id: 1547,
            enchantmentTier: 8,
            augmentationCost: { 1548: 1, 1549: 40 },
            value: 12000000,
            tradeable: true,
            requiredLevel: { constitution: 1, attack: 1, strength: 85, defense: 1 },



            itemImage: '/images/combat/equipment/Shapeless_Scythe.png',
            itemIcon: '/images/combat/equipment/Shapeless_Scythe_Icon.png',
            class: 'equipment',
            extraTooltipInfo: 'Its vorpal edge seems to shimmer and distort as you examine it.',
            visual: 'scythe',
            tags: ['melee', 'weapon', 'twohand'],
            equipmentStats: {
                grantedAbility: [22, 38, 11],
                slot: 'weapon',
                offensiveCritical: { chance: 1 / 20, damageMultiplier: 1.2 },
                offensiveAccuracyAffinityRating: {
                    Melee: 166,
                    Slashing: 256,
                    Piercing: 80,
                    Blunt: 80,
                    Magic: -22,
                    Chaos: 88,
                    Range: -22,
                },
                offensiveDamageAffinity: {
                    Melee: 1,
                    Slashing: 1.75,
                    Piercing: 33 / 50,
                    Blunt: 33 / 50,
                    Magic: 0.5,
                    Chaos: 1.5,
                    Range: 0.1,
                },
                weaponBonus: { strength: 196, intellect: 96, dexterity: 0 },
                armorBonus: { protection: 24, resistance: 12, agility: 0, stamina: 0 },
                attackSpeed: 3,
                augmentationBonus: [
                    { stat: 'offensiveAccuracyAffinityRating.Melee', value: 6.5 },
                    { stat: 'weaponBonus.strength', value: 6.5 },
                    { stat: 'offensiveAccuracyAffinityRating.Chaos', value: 3.5 },
                ],
            },
            rarity: 'legendary',
        },
        1548: {
            name: "Giant King's Jewel",
            id: 1548,
            value: 2500000,
            craftingLevel: 85,
            craftingExperience: 12500,
            tradeable: true,



            itemImage: '/images/magic/giants_gem.png',
            class: 'gem',
            craftingDescription: 'Surely a jewel can be scavenged from these scraps.',
            extraTooltipInfo: 'You feel limitless energy pulsing from the jewel.',
            category: 'Rare',
            tags: ['crafting'],
            requiredResources: [{ 1549: 250 }],
            rarity: 'legendary',
        },
        1549: {
            name: 'Giant Scraps',
            id: 1549,
            value: 50000,
            tradeable: true,
            itemImage: '/images/misc/Giant_Scrap.png',
            class: 'bar',
            extraTooltipInfo: 'It would take a master craftsman to reshape this into something usable.',
            tags: ['mining', 'smithing'],
            rarity: 'uncommon',
        },
        1550: {
            name: 'World Walkers',
            id: 1550,
            enchantmentTier: 6,
            augmentationCost: { 1549: 50 },
            craftingLevel: 85,
            craftingExperience: 192000,
            value: 5000000,
            tradeable: true,
            requiredLevel: { constitution: 1, attack: 1, strength: 1, defense: 85 },



            itemImage: '/images/combat/equipment/World_Walkers_Silver_Version.png',
            itemIcon: '/images/combat/equipment/World_Walkers_Silver_Version_Icon.png',
            extraTooltipInfo: 'No terrain is too difficult to traverse with these on.',
            craftingDescription: 'No terrain is too difficult to traverse with these on.',
            category: 'Rare',
            class: 'equipment',
            visual: 'winged-boots',
            tags: ['armor', 'melee', 'crafting'],
            equipmentStats: {
                slot: 'boots',
                armorBonus: { protection: 22, resistance: 22, agility: 0, stamina: 0 },
                augmentationBonus: [
                    { stat: 'armorBonus.protection', value: 0.1 },
                    { stat: 'armorBonus.resistance', value: 0.1 },
                ],
            },
            requiredResources: [{ 1549: 400 }],
            rarity: 'epic',
        },
        1551: {
            name: "Giant King's Nails",
            id: 1551,
            value: 20,
            tradeable: false,
            ingredientTags: ['nail'],



            itemImage: '/images/cooking/giants_toe_nail.png',
            extraTooltipInfo: '... You could try cooking it?',
            class: 'cooking-ingredient',
            tags: ['ingredient', 'consumable', 'food', 'cooking'],
        },
        1552: {
            name: "Cooked Giant King's Nails",
            id: 1552,
            value: 20,
            tradeable: false,



            itemImage: '/images/cooking/Crispy_toe_nail.png',
            extraTooltipInfo: "Why would you eat this? That's disgusting.",
            class: 'cooking-ingredient',
            tags: ['consumable', 'food', 'cooking'],
            healing: {
                hp: 5,
                cooldown: 5000,
                perTick: 5,
                totalTicks: 90,
                tickDelay: 5000,
                ignoreCooldown: true,
            },
        },
        1553: {
            name: 'Crystal Mace',
            id: 1553,
            enchantmentTier: 8,
            augmentationCost: { 208: 30, 304: 750, 307: 250, 403: 4, 516: 5000 },
            value: 6360000,
            tradeable: true,
            requiredLevel: { constitution: 1, attack: 1, strength: 85, defense: 1 },



            itemImage: '/images/combat/equipment/crystal_mace.png',
            itemIcon: '/images/combat/equipment/crystal_mace_icon.png',
            extraTooltipInfo: "A manifested shard of chaos. If only you knew how to utilize it's energy to perform magic!",
            class: 'equipment',
            visual: 'crystal-mace',
            category: ['weapon', 'combat'],
            tags: ['melee', 'weapon', 'onehand', 'crafting'],
            equipmentStats: {
                grantedAbility: [13, 14],
                slot: 'weapon',
                offensiveCritical: { chance: 7 / 200, damageMultiplier: 1.13 },
                offensiveAccuracyAffinityRating: {
                    Melee: 88,
                    Magic: 32,
                    Range: -12,
                    Piercing: -4,
                    Blunt: 211,
                    Slashing: 141,
                    Chaos: 99,
                },
                offensiveDamageAffinity: {
                    Melee: 1,
                    Magic: 0.1,
                    Range: 0.1,
                    Piercing: 1 / 4,
                    Blunt: 1.25,
                    Slashing: 3 / 4,
                    Chaos: 1.5,
                },
                weaponBonus: { strength: 164, intellect: 0, dexterity: 0 },
                oneHanded: true,
                attackSpeed: 3,
                augmentationBonus: [
                    { stat: 'offensiveAccuracyAffinityRating.Melee', value: 1.5 },
                    { stat: 'offensiveAccuracyAffinityRating.Chaos', value: 2 },
                    { stat: 'weaponBonus.strength', value: 4.5 },
                ],
            },
            rarity: 'epic',
        },
        1554: {
            id: 1554,
            name: 'Signet Ring',
            value: 450000,
            tradeable: false,
            enchantmentTier: 3,
            augmentationCost: { 2: 50000, 203: 100, 208: 10, 404: 1, 516: 2500 },
            forcedEnchant: 47,
            forcedEnchantAmount: 3,
            overwriteEnchant: false,
            itemImage: '/images/jewellery/signet_ring.png',
            class: 'equipment',
            extraTooltipInfo: 'Carries the signature of some unknown entity.',
            tags: ['jewelry'],
            equipmentStats: {
                grantedAbility: [17],
                slot: 'ring',
                offensiveAccuracyAffinityRating: { Melee: 5, Chaos: 5 },
                offensiveDamageAffinity: { Chaos: 1.5 },
                defensiveDamageAffinity: { Chaos: 1.13 },
                weaponBonus: { strength: 5, intellect: 5, dexterity: 0 },
                augmentationBonus: [
                    { stat: 'weaponBonus.strength', value: 1 },
                    { stat: 'weaponBonus.intellect', value: 1 },
                    { stat: 'offensiveAccuracyAffinityRating.Melee', value: 1 },
                    { stat: 'offensiveAccuracyAffinityRating.Chaos', value: 1 },
                ],
            },
            rarity: 'rare',
        },
        1555: {
            name: 'Mantle of Flame',
            id: 1555,
            enchantmentTier: 0,
            augmentationCost: { 2: 15000, 512: 2500, 700: 1000, 9013: 1 },
            value: 3120000,
            tradeable: true,
            requiredLevel: { constitution: 40, attack: 1, strength: 1, defense: 40, magic: 40 },



            itemImage: '/images/combat/equipment/mantle_of_flame.gif',
            itemIcon: '/images/combat/equipment/mantle_of_flame.png',
            extraTooltipInfo: 'Wrap yourself in the cozy flames of a dying star and be reborn.',
            class: 'equipment',
            visual: 'phoenix-cape',
            category: ['weapon', 'combat'],
            tags: ['melee', 'armor', 'magic', 'hybrid', 'crafting'],
            equipmentStats: {
                grantedAbility: [7, 18],
                slot: 'cape',
                offensiveAccuracyAffinityRating: { Melee: 3, Magic: 15, Fire: 15, Range: 3 },
                offensiveDamageAffinity: { Melee: 1, Magic: 1.15, Range: 1, Fire: 1.5 },
                defensiveDamageAffinity: { Melee: 1, Magic: 1.04, Range: 1, Fire: 1.13 },
                weaponBonus: { strength: 0, intellect: 20, dexterity: 0 },
                armorBonus: { protection: 0, resistance: 10, agility: 3, stamina: 0 },
                augmentationBonus: [
                    { stat: 'armorBonus.resistance', value: 1 },
                    { stat: 'weaponBonus.intellect', value: 1 },
                    { stat: 'offensiveAccuracyAffinityRating.Magic', value: 1 },
                    { stat: 'offensiveAccuracyAffinityRating.Fire', value: 1 },
                ],
            },
            rarity: 'epic',
        },
        1556: {
            name: 'max account consumable dev',
            id: 1556,
            value: 9,
            tradeable: false,
            itemImage: '/images/cooking/banana.png',
            extraTooltipInfo: 'yes',
            tags: [],
        },
        1557: {
            name: 'stone castle bricks',
            id: 1557,
            value: 9,
            tradeable: false,
            itemImage: '/images/cooking/banana.png',
            extraTooltipInfo: 'yes',
            tags: [],
        },
        1558: {
            name: 'elite moon god potion',
            id: 1558,
            value: 9,
            tradeable: false,
            itemImage: '/images/cooking/banana.png',
            extraTooltipInfo: 'yes',
            tags: [],
        },
        1559: {
            name: "Black Knight Titan's Helm",
            id: 1559,
            enchantmentTier: 6,
            tradeable: true,
            augmentationCost: { 203: 150, 205: 150, 209: 150 },
            value: 4880000,
            requiredLevel: { constitution: 1, attack: 1, strength: 1, defense: 70 },



            itemImage: '/images/combat/equipment/black_knight_titan_helm.png',
            itemIcon: '/images/combat/equipment/black_knight_titan_helm_icon.png',
            extraTooltipInfo: 'A helm that grants the strength of titans to its wearer!',
            class: 'equipment',
            visual: 'black-knight-full-helm',
            tags: ['armor', 'crafting'],
            equipmentStats: {
                grantedAbility: [15],
                slot: 'helm',
                defensiveCritical: { chance: 0.1, damageMultiplier: 1.33 },
                offensiveDamageAffinity: { Melee: 1.33, Magic: 0.1, Range: 0.1 },
                defensiveDamageAffinity: {
                    Melee: 1.06,
                    Magic: 81 / 100,
                    Range: 1.06,
                    Piercing: 1.08,
                    Blunt: 47 / 50,
                    Slashing: 1.08,
                },
                weaponBonus: { strength: 56, intellect: -32, dexterity: -32 },
                armorBonus: { protection: 48, resistance: -18, agility: -12, stamina: 0 },
                augmentationBonus: [
                    { stat: 'armorBonus.protection', value: 1 / 4 },
                    { stat: 'armorBonus.resistance', value: -0.5 },
                    { stat: 'weaponBonus.strength', value: 1.5 },
                ],
            },
            rarity: 'rare',
        },
        1560: {
            name: 'Elven Hat',
            id: 1560,
            enchantmentTier: 6,
            tradeable: true,
            value: 5000000,
            augmentationCost: { 4011: 5 },
            requiredLevel: { constitution: 1, attack: 1, strength: 1, defense: 65 },



            itemImage: '/images/combat/equipment/range/elven_hat.png',
            extraTooltipInfo: 'A magical hat of elven make.',
            class: 'equipment',
            visual: 'med-helm',
            tags: ['armor', 'magic'],
            equipmentStats: {
                slot: 'helm',
                defensiveDamageAffinity: { Magic: 1.08, Nature: 1.06 },
                weaponBonus: { strength: 6, intellect: 12, dexterity: 6 },
                armorBonus: { protection: 32, resistance: 12, agility: 18, stamina: 0 },
                augmentationBonus: [
                    { stat: 'weaponBonus.intellect', value: 1.5 },
                    { stat: 'armorBonus.protection', value: 0.5 },
                    { stat: 'armorBonus.resistance', value: 1.5 },
                    { stat: 'armorBonus.agility', value: 0.5 },
                ],
            },
            rarity: 'rare',
        },
        1561: {
            name: 'Elven Armor',
            id: 1561,
            enchantmentTier: 6,
            augmentationCost: { 4011: 5 },
            value: 5000000,
            tradeable: true,
            requiredLevel: { constitution: 1, attack: 1, strength: 1, defense: 65 },



            itemImage: '/images/combat/equipment/range/elven_chest.png',
            class: 'equipment',
            visual: 'chainbody',
            extraTooltipInfo: 'An unnaturally light chainmail of elven make.',
            tags: ['armor', 'melee'],
            equipmentStats: {
                slot: 'body',
                defensiveDamageAffinity: { Melee: 1.08, Nature: 1.06 },
                weaponBonus: { strength: 12, intellect: 6, dexterity: 6 },
                armorBonus: { protection: 56, resistance: 6, agility: 28, stamina: 32 },
                augmentationBonus: [
                    { stat: 'weaponBonus.strength', value: 1.5 },
                    { stat: 'armorBonus.protection', value: 1.5 },
                    { stat: 'armorBonus.resistance', value: 0.5 },
                    { stat: 'armorBonus.agility', value: 0.5 },
                ],
            },
            rarity: 'rare',
        },
        1562: {
            name: 'Elven Leggings',
            id: 1562,
            enchantmentTier: 6,
            augmentationCost: { 4011: 5 },
            value: 5000000,
            tradeable: true,
            requiredLevel: { constitution: 1, attack: 1, strength: 1, defense: 65 },



            itemImage: '/images/combat/equipment/range/elven_legs.png',
            class: 'equipment',
            visual: 'platelegs',
            extraTooltipInfo: 'A pair of comfortably fitting leggings of elven make.',
            tags: ['armor', 'range'],
            equipmentStats: {
                slot: 'legs',
                defensiveDamageAffinity: { Range: 1.08, Nature: 1.06 },
                weaponBonus: { strength: 6, intellect: 6, dexterity: 16 },
                armorBonus: { protection: 32, resistance: 12, agility: 48, stamina: 0 },
                augmentationBonus: [
                    { stat: 'weaponBonus.dexterity', value: 1.5 },
                    { stat: 'armorBonus.protection', value: 0.5 },
                    { stat: 'armorBonus.resistance', value: 0.5 },
                    { stat: 'armorBonus.agility', value: 1.5 },
                ],
            },
            rarity: 'rare',
        },
        1563: {
            name: 'Elven Boots',
            id: 1563,
            enchantmentTier: 6,
            augmentationCost: { 4011: 5 },
            value: 5000000,
            tradeable: true,
            requiredLevel: { constitution: 1, attack: 1, strength: 1, defense: 65 },



            itemImage: '/images/combat/equipment/range/elven_boots.png',
            class: 'equipment',
            visual: 'boots',
            extraTooltipInfo: 'A set of light cavalry boots of elven make.',
            tags: ['armor'],
            equipmentStats: {
                slot: 'boots',
                defensiveDamageAffinity: { Melee: 1.04, Magic: 1.04, Range: 1.04, Nature: 1.06 },
                weaponBonus: { strength: 8, intellect: 8, dexterity: 8 },
                armorBonus: { protection: 24, resistance: 24, agility: 24, stamina: 0 },
                augmentationBonus: [
                    { stat: 'armorBonus.protection', value: 3 / 4 },
                    { stat: 'armorBonus.resistance', value: 3 / 4 },
                    { stat: 'armorBonus.agility', value: 3 / 4 },
                ],
            },
            rarity: 'rare',
        },
        1564: {
            name: 'Searing Ladle',
            id: 1564,
            enchantmentTier: 6,
            augmentationCost: { 5: 15000, 95: 1000, 96: 100, 402: 1, 403: 1 },
            value: 25000,
            tradeable: true,
            enchantmentOverrideSlot: 'ladle',
            requiredLevel: { constitution: 1, attack: 1, strength: 1, defense: 1 },



            itemImage: '/images/combat/equipment/searing_ladle.png',
            extraTooltipInfo:
                'Almost too hot to handle! Burned food rewards full experience. Grants 3 hidden levels of haste while cooking.',
            class: 'equipment',
            visual: 'ladle',
            tags: ['melee', 'onehand', 'weapon'],
            equipmentStats: {
                grantedAbility: [39, 53],
                slot: 'weapon',
                offensiveAccuracyAffinityRating: { Melee: 21, Magic: 21, Fire: 48 },
                offensiveDamageAffinity: { Melee: 1.33, Magic: 1.33, Fire: 2 },
                weaponBonus: { strength: 18, intellect: 18, dexterity: 0 },
                armorBonus: { protection: 0, resistance: 0, agility: 0, stamina: 0 },
                augmentationBonus: [{ stat: 'toolBoost.cooking', value: 5 }],
                oneHanded: true,
                attackSpeed: 2.4,
            },
            rarity: 'epic',
        },
        1565: {
            name: "Black Knight's Gauntlets",
            id: 1565,
            enchantmentTier: 0,
            augmentationCost: { 205: 100, 207: 35 },
            value: 128000,
            tradeable: true,



            itemImage: '/images/combat/equipment/black_gloves.png',
            itemIcon: '/images/combat/equipment/black_gloves.png',
            extraTooltipInfo: 'You feel like you could bend steel with these gauntlets on... but what is steel?',
            class: 'equipment',
            visual: 'gloves',
            tags: ['armor', 'melee', 'crafting'],
            equipmentStats: {
                grantedAbility: [15],
                slot: 'gloves',
                weaponBonus: { strength: 10, intellect: 0, dexterity: 0 },
                offensiveAccuracyAffinityRating: { Melee: 9 },
                augmentationBonus: [{ stat: 'weaponBonus.strength', value: 1 / 4 }],
            },
            rarity: 'rare',
        },
        1566: {
            name: 'Bestial Dagger',
            id: 1566,
            enchantmentTier: 5,
            augmentationCost: { 1: 1 },
            value: 250000,
            tradeable: true,
            requiredLevel: { constitution: 1, attack: 1, strength: 50, defense: 1 },



            itemImage: '/images/combat/equipment/beast_dagger_main.png',
            extraTooltipInfo: 'WIP',
            class: 'equipment',
            visual: 'scimitar',
            tags: ['melee', 'onehand', 'weapon'],
            equipmentStats: {
                grantedAbility: [40],
                slot: 'weapon',
                offensiveCritical: { chance: 0.1, damageMultiplier: 2 },
                offensiveAccuracyAffinityRating: {
                    Melee: 69,
                    Piercing: 49,
                    Slashing: 49,
                    Blunt: -8,
                    Magic: -12,
                    Range: -12,
                },
                offensiveDamageAffinity: {
                    Melee: 1,
                    Piercing: 1.1,
                    Slashing: 3 / 4,
                    Blunt: 0.1,
                    Magic: 33 / 100,
                    Range: 33 / 100,
                },
                weaponBonus: { strength: 22, intellect: 0, dexterity: 0 },
                armorBonus: { protection: 0, resistance: 0, agility: 8, stamina: 0 },
                augmentationBonus: [
                    {
                        stat: 'offensiveAccuracyAffinityRating.Melee',
                        value: 3 / 4,
                    },
                    { stat: 'weaponBonus.strength', value: 1 / 4 },
                    { stat: 'armorBonus.agility', value: 0.5 },
                ],
                oneHanded: true,
                attackSpeed: 2.2,
            },
            rarity: 'epic',
        },
        1567: {
            name: 'Empowered Bestial Dagger',
            id: 1567,
            enchantmentTier: 7,
            augmentationCost: { 1: 1 },
            value: 2500000,
            tradeable: true,
            requiredLevel: { constitution: 1, attack: 1, strength: 70, defense: 1 },



            itemImage: '/images/combat/equipment/beast_dagger_main_e.png',
            extraTooltipInfo: 'WIP',
            class: 'equipment',
            visual: 'scimitar',
            tags: ['melee', 'onehand', 'weapon'],
            equipmentStats: {
                grantedAbility: [40, 41],
                slot: 'weapon',
                offensiveCritical: { chance: 0.1, damageMultiplier: 2 },
                offensiveAccuracyAffinityRating: {
                    Melee: 104,
                    Piercing: 74,
                    Slashing: 74,
                    Blunt: -8,
                    Magic: -12,
                    Range: -12,
                },
                offensiveDamageAffinity: {
                    Melee: 1,
                    Piercing: 1.1,
                    Slashing: 3 / 4,
                    Blunt: 0.1,
                    Magic: 33 / 100,
                    Range: 33 / 100,
                },
                weaponBonus: { strength: 31, intellect: 0, dexterity: 0 },
                armorBonus: { protection: 0, resistance: 0, agility: 12, stamina: 0 },
                augmentationBonus: [
                    { stat: 'offensiveAccuracyAffinityRating.Melee', value: 1.25 },
                    { stat: 'weaponBonus.strength', value: 0.5 },
                    { stat: 'armorBonus.agility', value: 0.5 },
                ],
                oneHanded: true,
                attackSpeed: 2.2,
            },
            rarity: 'epic',
        },
        1568: {
            name: 'Bestial Defender',
            id: 1568,
            enchantmentTier: 5,
            augmentationCost: { 1: 1 },
            value: 250000,
            tradeable: true,
            requiredLevel: { constitution: 1, attack: 1, strength: 50, defense: 1 },



            itemImage: '/images/combat/equipment/beast_dagger_off.png',
            extraTooltipInfo: 'WIP',
            class: 'equipment',
            visual: 'scimitar',
            tags: ['melee', 'onehand', 'weapon'],
            equipmentStats: {
                grantedAbility: [40],
                slot: 'shield',
                defensiveCritical: { chance: 0.1, damageMultiplier: 0.5 },
                offensiveAccuracyAffinityRating: {
                    Melee: 35,
                    Piercing: 25,
                    Slashing: 25,
                    Blunt: -8,
                    Magic: -12,
                    Range: -12,
                },
                offensiveDamageAffinity: {
                    Melee: 1,
                    Piercing: 1.1,
                    Slashing: 3 / 4,
                    Blunt: 0.1,
                    Magic: 33 / 100,
                    Range: 33 / 100,
                },
                weaponBonus: { strength: 11, intellect: 0, dexterity: 0 },
                armorBonus: { protection: 0, resistance: 0, agility: 13, stamina: 0 },
                augmentationBonus: [
                    {
                        stat: 'offensiveAccuracyAffinityRating.Melee',
                        value: 3 / 4,
                    },
                    { stat: 'weaponBonus.strength', value: 1 / 4 },
                    { stat: 'armorBonus.agility', value: 0.5 },
                ],
            },
            rarity: 'epic',
        },
        1569: {
            name: 'Empowered Bestial Defender',
            id: 1569,
            enchantmentTier: 7,
            augmentationCost: { 1: 1 },
            value: 2500000,
            tradeable: true,
            requiredLevel: { constitution: 1, attack: 1, strength: 70, defense: 1 },



            itemImage: '/images/combat/equipment/beast_dagger_off_e.png',
            extraTooltipInfo: 'WIP',
            class: 'equipment',
            visual: 'scimitar',
            tags: ['melee', 'onehand', 'weapon'],
            equipmentStats: {
                grantedAbility: [40, 41],
                slot: 'shield',
                defensiveCritical: { chance: 0.1, damageMultiplier: 0.5 },
                offensiveAccuracyAffinityRating: {
                    Melee: 52,
                    Piercing: 37,
                    Slashing: 37,
                    Blunt: -8,
                    Magic: -12,
                    Range: -12,
                },
                offensiveDamageAffinity: {
                    Melee: 1,
                    Piercing: 1.1,
                    Slashing: 3 / 4,
                    Blunt: 0.1,
                    Magic: 33 / 100,
                    Range: 33 / 100,
                },
                weaponBonus: { strength: 16, intellect: 0, dexterity: 0 },
                armorBonus: { protection: 0, resistance: 0, agility: 18, stamina: 0 },
                augmentationBonus: [
                    { stat: 'offensiveAccuracyAffinityRating.Melee', value: 1.25 },
                    { stat: 'weaponBonus.strength', value: 0.5 },
                    { stat: 'armorBonus.agility', value: 0.5 },
                ],
            },
            rarity: 'epic',
        },
        1570: {
            name: "Elven King's Longbow",
            id: 1570,
            tradeable: true,
            enchantmentTier: 8,
            augmentationCost: { 307: 75, 4011: 15, 4028: 1 },
            value: 4495000,
            type: 'weapon',
            requiredLevel: { constitution: 1, attack: 1, strength: 1, defense: 1, range: 85 },
            itemImage: '/images/combat/equipment/range/bow_king.png',
            itemIcon: '/images/combat/equipment/range/bow_king.png',
            class: 'equipment',
            visual: 'scimitar',
            extraTooltipInfo:
                'A weapon fit for royalty. Its craftsmanship is unmatched and the method to create weapons such as this is lost to time.',
            tags: ['range', 'weapon'],
            equipmentStats: {
                grantedAbility: [23, 42],
                slot: 'weapon',
                offensiveCritical: { chance: 1 / 20, damageMultiplier: 1.3 },
                offensiveAccuracyAffinityRating: {
                    Melee: -18,
                    Magic: -18,
                    Range: 164,
                    Piercing: 192,
                    Blunt: 35,
                    Slashing: 35,
                    Nature: 70,
                },
                offensiveDamageAffinity: {
                    Melee: 1 / 4,
                    Magic: 0.2,
                    Range: 1,
                    Piercing: 1.3333333333333333,
                    Blunt: 0.5,
                    Slashing: 0.5,
                    Nature: 1.33,
                },
                weaponBonus: { strength: 0, intellect: 0, dexterity: 136 },
                attackSpeed: 2.8,
                augmentationBonus: [
                    { stat: 'offensiveAccuracyAffinityRating.Range', value: 6.5 },
                    { stat: 'weaponBonus.dexterity', value: 6.5 },
                    { stat: 'offensiveAccuracyAffinityRating.Nature', value: 3.5 },
                ],
            },
            rarity: 'legendary',
        },
        1571: {
            name: 'Ancient Trident',
            id: 1571,
            tradeable: true,
            enchantmentTier: 8,
            augmentationCost: { 4026: 16, 4027: 1 },
            value: 4495000,
            type: 'weapon',
            requiredLevel: { constitution: 1, attack: 1, strength: 1, defense: 1, range: 1, magic: 85 },
            itemImage: '/images/combat/equipment/melee/trident.png',
            itemIcon: '/images/combat/equipment/melee/trident.png',
            class: 'equipment',
            visual: 'scimitar',
            extraTooltipInfo: "A weapon whose origins are lost to time; don't try using it as a fishing harpoon!",
            tags: ['magic', 'weapon'],
            equipmentStats: {
                grantedAbility: [43],
                slot: 'weapon',
                offensiveCritical: { chance: 1 / 20, damageMultiplier: 1.33 },
                offensiveAccuracyAffinityRating: {
                    Magic: 166,
                    Ice: 256,
                    Piercing: 80,
                    Chaos: 22,
                    Range: -22,
                },
                offensiveDamageAffinity: {
                    Melee: 33 / 50,
                    Piercing: 1.33,
                    Ice: 1.5,
                    Chaos: 1.33,
                    Range: 0.1,
                },
                weaponBonus: { strength: 96, intellect: 196, dexterity: 0 },
                armorBonus: { protection: 12, resistance: 24, agility: 0, stamina: 0 },
                attackSpeed: 3,
                augmentationBonus: [
                    { stat: 'offensiveAccuracyAffinityRating.Magic', value: 6.5 },
                    { stat: 'weaponBonus.intellect', value: 6.5 },
                    { stat: 'offensiveAccuracyAffinityRating.Ice', value: 3.5 },
                ],
            },
            rarity: 'legendary',
        },
        1572: {
            name: 'Fishtail',
            id: 1572,
            enchantmentTier: 6,
            augmentationCost: { 206: 33, 11032: 1 },
            value: 2500000,
            tradeable: true,
            requiredLevel: { constitution: 1, attack: 1, strength: 50, defense: 1 },



            itemImage: '/images/combat/equipment/fishtail.png',
            itemIcon: '/images/combat/equipment/fishtail.png',
            class: 'equipment',
            visual: 'scimitar',
            craftingDescription: 'A large scimitar taken from a fish! You could probably use it as a paddle!',
            tags: ['melee', 'weapon', 'onehand'],
            equipmentStats: {
                slot: 'weapon',
                offensiveCritical: { chance: 1 / 20, damageMultiplier: 1.33 },
                offensiveAccuracyAffinityRating: { Melee: 52, Magic: -14, Range: -14, Slashing: 66 },
                offensiveDamageAffinity: {
                    Melee: 1,
                    Magic: 1 / 4,
                    Range: 0.1,
                    Piercing: 1 / 4,
                    Blunt: 1 / 4,
                    Slashing: 1.33,
                },
                weaponBonus: { strength: 60, intellect: 0, dexterity: 0 },
                oneHanded: true,
                attackSpeed: 2.5,
                augmentationBonus: [
                    { stat: 'offensiveAccuracyAffinityRating.Melee', value: 1.65 },
                    { stat: 'weaponBonus.strength', value: 1.65 },
                ],
            },
            rarity: 'rare',
        },
        1573: {
            name: 'Razorfin',
            id: 1573,
            enchantmentTier: 7,
            augmentationCost: { 206: 25, 207: 4, 11032: 1 },
            value: 4495000,
            tradeable: true,
            requiredLevel: { constitution: 1, attack: 1, strength: 70, defense: 1 },



            itemImage: '/images/combat/equipment/razorfin.png',
            itemIcon: '/images/combat/equipment/razorfin.png',
            class: 'equipment',
            visual: 'scimitar',
            craftingDescription:
                'A large scimitar taken from a fish! You could probably use it as a paddle! Seems mildly magical, almost...',
            tags: ['melee', 'weapon', 'onehand'],
            equipmentStats: {
                slot: 'weapon',
                offensiveCritical: { chance: 1 / 20, damageMultiplier: 1.33 },
                offensiveAccuracyAffinityRating: { Melee: 76, Magic: 4, Range: -14, Slashing: 84 },
                offensiveDamageAffinity: {
                    Melee: 1,
                    Magic: 2 / 3,
                    Range: 0.1,
                    Piercing: 1 / 4,
                    Blunt: 1 / 4,
                    Slashing: 1.33,
                },
                weaponBonus: { strength: 80, intellect: 30, dexterity: 0 },
                oneHanded: true,
                attackSpeed: 2.5,
                augmentationBonus: [
                    { stat: 'offensiveAccuracyAffinityRating.Melee', value: 1.65 },
                    { stat: 'weaponBonus.strength', value: 1.65 },
                ],
            },
            rarity: 'epic',
        },
        1574: {
            name: 'Elven Quiver',
            id: 1574,
            enchantmentTier: 5,
            augmentationCost: { 307: 75, 4011: 15, 4028: 1 },
            value: 4495000,
            tradeable: true,
            requiredLevel: { constitution: 1, attack: 1, strength: 1, defense: 1, range: 70 },
            forcedEnchant: 63,
            forcedEnchantAmount: 5,



            itemImage: '/images/combat/equipment/range/quiver_elven_alt.png',
            class: 'equipment',
            visual: 'scimitar',
            craftingDescription:
                'A quiver blessed by Elven magic! It appears to retrieve your expended ammunition automatically!',
            tags: ['range'],
            equipmentStats: {
                slot: 'arrows',
                offensiveAccuracyAffinityRating: { Melee: 0, Magic: 0, Range: 15, Slashing: 0 },
                offensiveDamageAffinity: { Range: 1.05 },
                weaponBonus: { strength: 0, intellect: 0, dexterity: 20 },
                augmentationBonus: [{ stat: 'offensiveAccuracyAffinityRating.Range', value: 1.5 }],
            },
            rarity: 'epic',
        },
        1575: {
            name: 'Magic Quiver',
            id: 1575,
            enchantmentTier: 3,
            augmentationCost: { 4005: 8, 4012: 20 },
            value: 2495000,
            tradeable: true,
            requiredLevel: { constitution: 1, attack: 1, strength: 1, defense: 1, range: 35 },
            forcedEnchant: 63,
            forcedEnchantAmount: 3,



            itemImage: '/images/combat/equipment/range/quiver_leather.png',
            class: 'equipment',
            visual: 'scimitar',
            craftingDescription:
                'A slightly magical quiver that seems to retrieve some of your expended ammunition automatically!',
            tags: ['range'],
            equipmentStats: {
                slot: 'arrows',
                offensiveAccuracyAffinityRating: { Melee: 0, Magic: 0, Range: 5, Slashing: 0 },
                offensiveDamageAffinity: { Range: 1.05 },
                weaponBonus: { strength: 0, intellect: 0, dexterity: 10 },
                augmentationBonus: [{ stat: 'offensiveAccuracyAffinityRating.Range', value: 0.5 }],
            },
            rarity: 'epic',
        },
        1576: {
            id: 1576,
            name: "Defender's Band",
            value: 450000,
            tradeable: false,
            enchantmentTier: 3,
            augmentationCost: { 103: 100, 105: 100, 107: 100, 109: 100 },
            forcedEnchant: 19,
            forcedEnchantAmount: 3,
            itemImage: '/images/jewellery/defenders_band.png',
            class: 'equipment',
            extraTooltipInfo: 'A ring fashioned from the cornerstone of a great castle.',
            tags: ['jewelry'],
            equipmentStats: {
                grantedAbility: [26],
                slot: 'ring',
                armorBonus: { protection: 1, resistance: 0, agility: -4, stamina: 1 },
                augmentationBonus: [
                    { stat: 'armorBonus.protection', value: 1.5 },
                    { stat: 'armorBonus.stamina', value: 0.1 },
                ],
                itemSet: [10009],
            },
            rarity: 'epic',
        },
        1577: {
            id: 1577,
            name: "Defender's Pendant",
            value: 450000,
            tradeable: false,
            enchantmentTier: 3,
            augmentationCost: { 103: 100, 105: 100, 107: 100, 109: 100 },
            forcedEnchant: 65,
            forcedEnchantAmount: 3,
            itemImage: '/images/jewellery/defenders_pendant.png',
            class: 'equipment',
            extraTooltipInfo: 'A pendant fashioned from the cornerstone of a great castle.',
            tags: ['jewelry'],
            equipmentStats: {
                grantedAbility: [26],
                slot: 'arrows',
                armorBonus: { protection: 16, resistance: 16, agility: 0, stamina: 1 },
                augmentationBonus: [
                    { stat: 'armorBonus.protection', value: 1.5 },
                    { stat: 'armorBonus.resistance', value: 1.5 },
                    { stat: 'armorBonus.stamina', value: 0.1 },
                ],
                itemSet: [10009],
            },
            rarity: 'epic',
        },
        1578: {
            id: 1578,
            name: 'Scaled Circuit',
            value: 450000,
            tradeable: false,
            enchantmentTier: 3,
            augmentationCost: { 103: 100, 105: 100, 107: 100, 109: 100 },
            forcedEnchant: 19,
            forcedEnchantAmount: 3,
            itemImage: '/images/jewellery/scale_ring.png',
            class: 'equipment',
            extraTooltipInfo: "Some long forgotten beast's scales wreathe an ancient gemstone.",
            tags: ['jewelry'],
            equipmentStats: {
                slot: 'ring',
                armorBonus: { protection: 8, resistance: 4, agility: 0, stamina: 4 },
                defensiveDamageAffinity: { Range: 1.05, Piercing: 1.05 },
                augmentationBonus: [{ stat: 'armorBonus.protection', value: 2 }],
            },
            rarity: 'epic',
        },
        1579: {
            id: 1579,
            name: "Devourer's Band",
            value: 450000,
            tradeable: false,
            enchantmentTier: 5,
            augmentationCost: { 4027: 1, 4028: 1, 9021: 1 },
            forcedEnchant: 38,
            forcedEnchantAmount: 5,
            itemImage: '/images/jewellery/ouroboros_ring.png',
            class: 'equipment',
            extraTooltipInfo: 'What was, will be. What will be, was.',
            tags: ['jewelry'],
            equipmentStats: {
                slot: 'ring',
                offensiveDamageAffinity: { Melee: 1.25, Magic: 1.25, Range: 1.25 },
                defensiveDamageAffinity: { Melee: 0.5, Magic: 0.5, Range: 0.5 },
                armorBonus: { protection: 0, resistance: 0, agility: 0, stamina: 66 },
                augmentationBonus: [{ stat: 'armorBonus.stamina', value: 4 }],
            },
            rarity: 'legendary',
        },
        1580: {
            id: 1580,
            name: "Slayer's Pendant",
            value: 450000,
            tradeable: false,
            enchantmentTier: 3,
            augmentationCost: { 103: 100, 105: 100, 107: 100, 109: 100 },
            forcedEnchant: 38,
            forcedEnchantAmount: 3,
            itemImage: '/images/jewellery/slayer_pendant.png',
            class: 'equipment',
            extraTooltipInfo: 'A pendant depicting a sword through a skull. Small enough to fit in the palm of your hand!',
            tags: ['jewelry'],
            equipmentStats: {
                grantedAbility: [52],
                slot: 'arrows',
                armorBonus: { protection: 1, resistance: 0, agility: -4, stamina: 1 },
                augmentationBonus: [
                    { stat: 'armorBonus.protection', value: 1.5 },
                    { stat: 'armorBonus.stamina', value: 0.1 },
                ],
            },
            rarity: 'legendary',
        },
        1581: {
            id: 1581,
            name: 'Alacrity Pendant',
            value: 450000,
            tradeable: false,
            enchantmentTier: 3,
            augmentationCost: { 3: 10000, 403: 3 },
            forcedEnchant: 64,
            forcedEnchantAmount: 3,
            itemImage: '/images/jewellery/speed_pendant.png',
            class: 'equipment',
            extraTooltipInfo:
                'A pendant with a lightning bolt engraved on it. Though it greatly increases your speed, it also makes it harder to be accurate.',
            tags: ['jewelry'],
            equipmentStats: {
                slot: 'arrows',
                armorBonus: { protection: 0, resistance: 0, agility: 15, stamina: 0 },
                augmentationBonus: [
                    { stat: 'armorBonus.agility', value: 1.5 },
                    { stat: 'offensiveAccuracyAffinityRating.Lightning', value: 1 },
                ],
            },
            rarity: 'legendary',
        },
        1582: {
            id: 1582,
            name: 'Ring of Taxes',
            value: 450000,
            tradeable: false,
            enchantmentTier: 3,
            augmentationCost: { 3: 10000, 403: 3 },
            forcedEnchant: 66,
            forcedEnchantAmount: 3,
            itemImage: '/images/jewellery/habs_ring.png',
            class: 'equipment',
            extraTooltipInfo:
                'Causes you immense pain while you wear it, but allows you to collect taxes from defeated enemies in combat at the expense of your experience.',
            tags: ['jewelry'],
            equipmentStats: { slot: 'ring' },
            rarity: 'legendary',
        },
        1600: {
            name: 'Scroll',
            skill: 'enchanting',
            id: 1600,
            tradeable: true,
            value: 900,
            extraTooltipInfo: 'Used in magic to store magical properties: enchantments.',
            class: 'enchanted-scroll',
            tags: ['enchanting'],
            itemImage: '/images/enchanting/scroll.png',
        },
        1601: {
            name: 'Scroll of Embers',
            activeMessage: 'Making Scrolls of Embers',
            enchant: true,
            enchantmentID: 1,
            categories: ['hatchet'],
            time: 15000,
            id: 1601,
            level: 61,
            experience: 4200,
            baseSuccessChance: 0.4,
            tradeable: true,
            value: 2000,



            itemImage: '/images/enchanting/scroll_of_embers.png',
            enchantName: 'embers',
            skillIcon: '/images/enchanting/enchanting_logo.png',
            class: 'enchanted-scroll',
            actionButton: 'Craft',
            getChance: (resource, playerLevel) => {
                return (Math.min(1, Math.max(0.4, 0.4 + (playerLevel - resource.level) / 25)) * 100).toFixed(0) + '%';
            },
            tags: ['enchanting'],
            requiredResources: [{ 111: 700, 512: 70, 517: 70, 1600: 1 }],
            rarity: 'rare',
        },
        1602: {
            name: 'Scroll of the Prospector',
            activeMessage: 'Making Scrolls of the Prospector',
            enchant: true,
            enchantmentID: 2,
            categories: ['pickaxe'],
            time: 15000,
            id: 1602,
            level: 25,
            experience: 1500,
            baseSuccessChance: 0.4,
            tradeable: true,
            value: 2000,



            itemImage: '/images/enchanting/scroll_of_the_prospector.png',
            enchantName: 'prospector',
            skillIcon: '/images/enchanting/enchanting_logo.png',
            class: 'enchanted-scroll',
            actionButton: 'Craft',
            getChance: (resource, playerLevel) => {
                return (Math.min(1, Math.max(0.4, 0.4 + (playerLevel - resource.level) / 25)) * 100).toFixed(0) + '%';
            },
            tags: ['enchanting'],
            requiredResources: [{ 111: 300, 510: 40, 512: 40, 519: 40, 1600: 1 }],
        },
        1603: {
            name: 'Scroll of the Scholar',
            activeMessage: 'Making Scrolls of the Scholar',
            enchant: true,
            enchantmentID: 3,
            categories: ['ring', 'necklace'],
            time: 15000,
            id: 1603,
            level: 88,
            experience: 6500,
            baseSuccessChance: 0.6,
            tradeable: true,
            value: 2000,



            itemImage: '/images/enchanting/scroll_of_the_scholar.png',
            enchantName: 'scholar',
            skillIcon: '/images/enchanting/enchanting_logo.png',
            class: 'enchanted-scroll',
            actionButton: 'Craft',
            getChance: (resource, playerLevel) => {
                return (Math.min(1, Math.max(0.6, 0.6 + (playerLevel - resource.level) / 25)) * 100).toFixed(0) + '%';
            },
            tags: ['enchanting'],
            requiredResources: [{ 111: 1300, 516: 110, 518: 110, 519: 110, 1600: 1 }],
            rarity: 'epic',
        },
        1604: {
            name: 'Scroll of Gathering',
            activeMessage: 'Making Scrolls of Gathering',
            enchant: true,
            enchantmentID: 4,
            categories: ['ring', 'necklace'],
            time: 15000,
            id: 1604,
            level: 64,
            experience: 4300,
            baseSuccessChance: 0.4,
            tradeable: true,
            value: 2000,



            itemImage: '/images/enchanting/scroll_of_gathering.png',
            enchantName: 'gathering',
            skillIcon: '/images/enchanting/enchanting_logo.png',
            class: 'enchanted-scroll',
            actionButton: 'Craft',
            getChance: (resource, playerLevel) => {
                return (Math.min(1, Math.max(0.4, 0.4 + (playerLevel - resource.level) / 25)) * 100).toFixed(0) + '%';
            },
            tags: ['enchanting'],
            requiredResources: [{ 111: 800, 511: 70, 512: 70, 513: 70, 518: 70, 519: 70, 1600: 1 }],
            rarity: 'rare',
        },
        1605: {
            name: 'Scroll of Superheating',
            activeMessage: 'Making Scrolls of Superheating',
            enchant: true,
            enchantmentID: 5,
            categories: ['pickaxe'],
            time: 15000,
            id: 1605,
            level: 76,
            experience: 5400,
            baseSuccessChance: 0.4,
            tradeable: true,
            value: 2000,



            itemImage: '/images/enchanting/scroll_of_superheating.png',
            enchantName: 'superheating',
            skillIcon: '/images/enchanting/enchanting_logo.png',
            class: 'enchanted-scroll',
            actionButton: 'Craft',
            getChance: (resource, playerLevel) => {
                return (Math.min(1, Math.max(0.4, 0.4 + (playerLevel - resource.level) / 25)) * 100).toFixed(0) + '%';
            },
            tags: ['enchanting'],
            requiredResources: [{ 111: 900, 511: 80, 512: 80, 519: 80, 1600: 1 }],
            rarity: 'rare',
        },
        1606: {
            name: 'Scroll of Pyromancy',
            activeMessage: 'Making Scrolls of Pyromancy',
            enchant: true,
            enchantmentID: 6,
            categories: ['ring', 'necklace'],
            time: 15000,
            id: 1606,
            level: 7,
            experience: 600,
            baseSuccessChance: 0.4,
            tradeable: true,
            value: 2000,



            itemImage: '/images/enchanting/scroll_of_pyromancy.png',
            enchantName: 'pyromancy',
            skillIcon: '/images/enchanting/enchanting_logo.png',
            class: 'enchanted-scroll',
            actionButton: 'Craft',
            getChance: (resource, playerLevel) => {
                return (Math.min(1, Math.max(0.4, 0.4 + (playerLevel - resource.level) / 25)) * 100).toFixed(0) + '%';
            },
            tags: ['enchanting'],
            requiredResources: [{ 111: 100, 512: 30, 513: 30, 517: 30, 1600: 1 }],
        },
        1607: {
            name: 'Scroll of Wealth',
            activeMessage: 'Making scrolls of wealth',
            enchant: true,
            enchantmentID: 7,
            categories: ['ring', 'necklace'],
            time: 15000,
            id: 1607,
            level: 37,
            experience: 2300,
            baseSuccessChance: 0.4,
            tradeable: true,
            value: 2000,



            itemImage: '/images/enchanting/scroll_of_wealth.png',
            enchantName: 'wealth',
            skillIcon: '/images/enchanting/enchanting_logo.png',
            class: 'enchanted-scroll',
            actionButton: 'Craft',
            getChance: (resource, playerLevel) => {
                return (Math.min(1, Math.max(0.4, 0.4 + (playerLevel - resource.level) / 25)) * 100).toFixed(0) + '%';
            },
            tags: ['enchanting'],
            requiredResources: [{ 111: 500, 517: 50, 518: 50, 519: 50, 1600: 1 }],
        },
        1608: {
            name: 'Scroll of Haste',
            activeMessage: 'Making scrolls of haste',
            enchant: true,
            enchantmentID: 8,
            categories: ['ring', 'necklace'],
            time: 15000,
            id: 1608,
            level: 94,
            experience: 7500,
            baseSuccessChance: 0.8,
            tradeable: true,
            value: 2000,



            itemImage: '/images/enchanting/scroll_of_haste.png',
            enchantName: 'haste',
            skillIcon: '/images/enchanting/enchanting_logo.png',
            class: 'enchanted-scroll',
            actionButton: 'Craft',
            getChance: (resource, playerLevel) => {
                return (Math.min(1, Math.max(0.8, 0.8 + (playerLevel - resource.level) / 25)) * 100).toFixed(0) + '%';
            },
            tags: ['enchanting'],
            requiredResources: [{ 111: 2000, 510: 200, 516: 200, 518: 200, 519: 200, 1600: 1 }],
            rarity: 'epic',
        },
        1609: {
            name: 'Scroll of Naturalist',
            activeMessage: 'Making scrolls of naturalist',
            enchant: true,
            enchantmentID: 9,
            categories: ['gloves', 'boots'],
            time: 15000,
            id: 1609,
            level: 49,
            experience: 3200,
            baseSuccessChance: 0.4,
            tradeable: true,
            value: 2000,



            itemImage: '/images/enchanting/scroll_of_naturalist_v2.png',
            enchantName: 'naturalist',
            skillIcon: '/images/enchanting/enchanting_logo.png',
            class: 'enchanted-scroll',
            actionButton: 'Craft',
            getChance: (resource, playerLevel) => {
                return (Math.min(1, Math.max(0.4, 0.4 + (playerLevel - resource.level) / 25)) * 100).toFixed(0) + '%';
            },
            tags: ['enchanting'],
            requiredResources: [{ 111: 600, 510: 60, 513: 60, 517: 60, 519: 60, 1600: 1 }],
        },
        1610: {
            name: 'Scroll of Acrobatics',
            activeMessage: 'Making scrolls of acrobatics',
            enchant: true,
            hidden: true,
            enchantmentID: 10,
            categories: ['weapon'],
            time: 15000,
            id: 1610,
            level: 100,
            experience: 1,
            baseSuccessChance: 0.4,
            tradeable: true,
            value: 2000,



            itemImage: '/images/enchanting/scroll_of_naturalist_v2.png',
            enchantName: 'acrobatics',
            skillIcon: '/images/enchanting/enchanting_logo.png',
            class: 'enchanted-scroll',
            actionButton: 'Craft',
            getChance: (resource, playerLevel) => {
                return (Math.min(1, Math.max(0.4, 0.4 + (playerLevel - resource.level) / 25)) * 100).toFixed(0) + '%';
            },
            tags: ['weapon', 'enchanting'],
            requiredResources: [{ 1: 9999999999 }],
            rarity: 'epic',
        },
        1611: {
            name: 'Scroll of Critical Strike',
            activeMessage: 'Making scrolls of critical strike',
            enchant: true,
            enchantmentID: 11,
            categories: ['weapon'],
            time: 15000,
            id: 1611,
            level: 52,
            experience: 3300,
            baseSuccessChance: 0.4,
            tradeable: true,
            value: 2000,



            itemImage: '/images/enchanting/scroll_of_critical_strike.png',
            enchantName: 'critical strike',
            skillIcon: '/images/enchanting/enchanting_logo.png',
            class: 'enchanted-scroll',
            actionButton: 'Craft',
            getChance: (resource, playerLevel) => {
                return (Math.min(1, Math.max(0.4, 0.4 + (playerLevel - resource.level) / 25)) * 100).toFixed(0) + '%';
            },
            tags: ['weapon', 'enchanting'],
            requiredResources: [{ 111: 600, 514: 60, 515: 60, 516: 60, 519: 60, 1600: 1 }],
            rarity: 'uncommon',
        },
        1612: {
            name: 'Scroll of Poisoning',
            activeMessage: 'Making scrolls of poisoning',
            enchant: true,
            hidden: true,
            enchantmentID: 12,
            categories: ['weapon'],
            time: 15000,
            id: 1612,
            level: 100,
            experience: 1,
            baseSuccessChance: 0.4,
            tradeable: true,
            value: 2000,



            itemImage: '/images/enchanting/scroll_of_naturalist_v2.png',
            enchantName: 'poisoning',
            skillIcon: '/images/enchanting/enchanting_logo.png',
            class: 'enchanted-scroll',
            actionButton: 'Craft',
            getChance: (resource, playerLevel) => {
                return (Math.min(1, Math.max(0.4, 0.4 + (playerLevel - resource.level) / 25)) * 100).toFixed(0) + '%';
            },
            tags: ['weapon', 'enchanting'],
            requiredResources: [{ 1: 9999999999 }],
            rarity: 'epic',
        },
        1613: {
            name: 'Scroll of Accuracy',
            activeMessage: 'Making scrolls of accuracy',
            enchant: true,
            enchantmentID: 13,
            categories: ['weapon'],
            time: 15000,
            id: 1613,
            level: 28,
            experience: 1600,
            baseSuccessChance: 0.4,
            tradeable: true,
            value: 2000,



            itemImage: '/images/enchanting/scroll_of_accuracy.png',
            enchantName: 'accuracy',
            skillIcon: '/images/enchanting/enchanting_logo.png',
            class: 'enchanted-scroll',
            actionButton: 'Craft',
            getChance: (resource, playerLevel) => {
                return (Math.min(1, Math.max(0.4, 0.4 + (playerLevel - resource.level) / 25)) * 100).toFixed(0) + '%';
            },
            tags: ['weapon', 'enchanting'],
            requiredResources: [{ 111: 400, 514: 40, 515: 40, 518: 40, 1600: 1 }],
        },
        1614: {
            name: 'Scroll of Deflect',
            activeMessage: 'Making scrolls of deflect',
            enchant: true,
            hidden: true,
            enchantmentID: 14,
            categories: ['shield'],
            time: 15000,
            id: 1614,
            level: 100,
            experience: 1,
            baseSuccessChance: 0.4,
            tradeable: true,
            value: 2000,



            itemImage: '/images/enchanting/scroll_of_naturalist_v2.png',
            enchantName: 'deflect',
            skillIcon: '/images/enchanting/enchanting_logo.png',
            class: 'enchanted-scroll',
            actionButton: 'Craft',
            getChance: (resource, playerLevel) => {
                return (Math.min(1, Math.max(0.4, 0.4 + (playerLevel - resource.level) / 25)) * 100).toFixed(0) + '%';
            },
            tags: ['enchanting'],
            requiredResources: [{ 1: 999999999999999 }],
            rarity: 'epic',
        },
        1615: {
            name: 'Scroll of Force',
            activeMessage: 'Making scrolls of force',
            enchant: true,
            enchantmentID: 15,
            categories: ['shield'],
            time: 15000,
            id: 1615,
            level: 79,
            experience: 5500,
            baseSuccessChance: 0.4,
            tradeable: true,
            value: 2000,



            itemImage: '/images/enchanting/scroll_of_force.png',
            enchantName: 'force',
            skillIcon: '/images/enchanting/enchanting_logo.png',
            class: 'enchanted-scroll',
            actionButton: 'Craft',
            getChance: (resource, playerLevel) => {
                return (Math.min(1, Math.max(0.4, 0.4 + (playerLevel - resource.level) / 25)) * 100).toFixed(0) + '%';
            },
            tags: ['enchanting'],
            requiredResources: [{ 111: 900, 514: 80, 515: 80, 516: 80, 1600: 1 }],
            rarity: 'rare',
        },
        1616: {
            name: 'Scroll of Healing',
            activeMessage: 'Making scrolls of healing',
            enchant: true,
            enchantmentID: 16,
            categories: ['shield', 'combat-talisman'],
            time: 15000,
            id: 1616,
            level: 10,
            experience: 700,
            baseSuccessChance: 0.4,
            tradeable: true,
            value: 2000,



            itemImage: '/images/enchanting/scroll_of_healing.png',
            enchantName: 'healing',
            skillIcon: '/images/enchanting/enchanting_logo.png',
            class: 'enchanted-scroll',
            actionButton: 'Craft',
            getChance: (resource, playerLevel) => {
                return (Math.min(1, Math.max(0.4, 0.4 + (playerLevel - resource.level) / 25)) * 100).toFixed(0) + '%';
            },
            tags: ['enchanting'],
            requiredResources: [{ 111: 200, 514: 30, 517: 30, 519: 30, 1600: 1 }],
        },
        1617: {
            name: 'Scroll of Weakening',
            activeMessage: 'Making scrolls of weakening',
            enchant: true,
            enchantmentID: 17,
            categories: ['helm', 'body', 'legs', 'shield', 'weapon'],
            time: 15000,
            id: 1617,
            level: 4,
            experience: 300,
            baseSuccessChance: 0.4,
            tradeable: true,
            value: 2000,



            itemImage: '/images/enchanting/scroll_of_weakening.png',
            enchantName: 'weakening',
            skillIcon: '/images/enchanting/enchanting_logo.png',
            class: 'enchanted-scroll',
            actionButton: 'Craft',
            getChance: (resource, playerLevel) => {
                return (Math.min(1, Math.max(0.4, 0.4 + (playerLevel - resource.level) / 25)) * 100).toFixed(0) + '%';
            },
            tags: ['weapon', 'enchanting'],
            requiredResources: [{ 111: 100, 510: 20, 512: 20, 518: 20, 1600: 1 }],
        },
        1618: {
            name: 'Scroll of Reinforcement',
            activeMessage: 'Making scrolls of reinforcement',
            enchant: true,
            enchantmentID: 18,
            categories: ['helm', 'body', 'legs'],
            time: 15000,
            id: 1618,
            level: 13,
            experience: 800,
            baseSuccessChance: 0.4,
            tradeable: true,
            value: 2000,



            itemImage: '/images/enchanting/scroll_of_reinforcement.png',
            enchantName: 'reinforcement',
            skillIcon: '/images/enchanting/enchanting_logo.png',
            class: 'enchanted-scroll',
            actionButton: 'Craft',
            getChance: (resource, playerLevel) => {
                return (Math.min(1, Math.max(0.4, 0.4 + (playerLevel - resource.level) / 25)) * 100).toFixed(0) + '%';
            },
            tags: ['enchanting'],
            requiredResources: [{ 111: 200, 515: 30, 516: 30, 518: 30, 1600: 1 }],
        },
        1619: {
            name: 'Scroll of Protection',
            activeMessage: 'Making scrolls of protection',
            enchant: true,
            enchantmentID: 19,
            categories: ['helm', 'body', 'legs'],
            time: 15000,
            id: 1619,
            level: 31,
            experience: 1700,
            baseSuccessChance: 0.4,
            tradeable: true,
            value: 2000,



            itemImage: '/images/enchanting/scroll_of_protection.png',
            enchantName: 'protection',
            skillIcon: '/images/enchanting/enchanting_logo.png',
            class: 'enchanted-scroll',
            actionButton: 'Craft',
            getChance: (resource, playerLevel) => {
                return (Math.min(1, Math.max(0.4, 0.4 + (playerLevel - resource.level) / 25)) * 100).toFixed(0) + '%';
            },
            tags: ['enchanting'],
            requiredResources: [{ 111: 400, 510: 40, 511: 40, 519: 40, 1600: 1 }],
        },
        1620: {
            name: 'Scroll of Parry',
            activeMessage: 'Making scrolls of parry',
            enchant: true,
            hidden: true,
            enchantmentID: 20,
            categories: ['body', 'legs'],
            time: 15000,
            id: 1620,
            level: 100,
            experience: 1,
            baseSuccessChance: 0.4,
            tradeable: true,
            value: 2000,



            itemImage: '/images/enchanting/scroll_of_naturalist_v2.png',
            enchantName: 'counterattack',
            skillIcon: '/images/enchanting/enchanting_logo.png',
            class: 'enchanted-scroll',
            actionButton: 'Craft',
            getChance: (resource, playerLevel) => {
                return (Math.min(1, Math.max(0.4, 0.4 + (playerLevel - resource.level) / 25)) * 100).toFixed(0) + '%';
            },
            tags: ['enchanting'],
            requiredResources: [{ 1: 999999999999 }],
            rarity: 'epic',
        },
        1621: {
            name: 'Scroll of Recklessness',
            activeMessage: 'Making scrolls of recklessness',
            enchant: true,
            enchantmentID: 21,
            categories: ['helm', 'body', 'legs'],
            time: 15000,
            id: 1621,
            level: 81,
            experience: 5600,
            baseSuccessChance: 0.4,
            tradeable: true,
            value: 2000,



            itemImage: '/images/enchanting/scroll_of_recklessness.png',
            enchantName: 'recklessness',
            skillIcon: '/images/enchanting/enchanting_logo.png',
            class: 'enchanted-scroll',
            actionButton: 'Craft',
            getChance: (resource, playerLevel) => {
                return (Math.min(1, Math.max(0.4, 0.4 + (playerLevel - resource.level) / 25)) * 100).toFixed(0) + '%';
            },
            tags: ['enchanting'],
            requiredResources: [{ 111: 1000, 514: 80, 515: 80, 516: 80, 1600: 1 }],
            rarity: 'epic',
        },
        1622: {
            name: 'Scroll of Efficiency',
            activeMessage: 'Making scrolls of efficiency',
            enchant: true,
            enchantmentID: 22,
            categories: ['gloves', 'boots'],
            time: 15000,
            id: 1622,
            level: 91,
            experience: 6600,
            baseSuccessChance: 0.8,
            tradeable: true,
            value: 2000,



            itemImage: '/images/enchanting/scroll_of_efficiency.png',
            enchantName: 'efficiency',
            skillIcon: '/images/enchanting/enchanting_logo.png',
            class: 'enchanted-scroll',
            actionButton: 'Craft',
            getChance: (resource, playerLevel) => {
                return (Math.min(1, Math.max(0.8, 0.8 + (playerLevel - resource.level) / 25)) * 100).toFixed(0) + '%';
            },
            tags: ['enchanting'],
            requiredResources: [{ 111: 1500, 510: 130, 511: 130, 512: 130, 513: 130, 517: 130, 1600: 1 }],
            rarity: 'epic',
        },
        1623: {
            name: 'Scroll of Fishing',
            activeMessage: 'Making scrolls of fishing',
            enchant: true,
            enchantmentID: 23,
            categories: ['gloves', 'boots'],
            time: 15000,
            id: 1623,
            level: 55,
            experience: 3400,
            baseSuccessChance: 0.4,
            tradeable: true,
            value: 2000,



            itemImage: '/images/enchanting/scroll_of_fishing.png',
            enchantName: 'fishing',
            skillIcon: '/images/enchanting/enchanting_logo.png',
            class: 'enchanted-scroll',
            actionButton: 'Craft',
            getChance: (resource, playerLevel) => {
                return (Math.min(1, Math.max(0.4, 0.4 + (playerLevel - resource.level) / 25)) * 100).toFixed(0) + '%';
            },
            tags: ['enchanting'],
            requiredResources: [{ 111: 700, 511: 60, 513: 60, 518: 60, 1600: 1 }],
            rarity: 'uncommon',
        },
        1624: {
            name: 'Scroll of Cooking',
            activeMessage: 'Making scrolls of cooking',
            enchant: true,
            enchantmentID: 24,
            categories: ['gloves', 'boots'],
            time: 15000,
            id: 1624,
            level: 40,
            experience: 2400,
            baseSuccessChance: 0.4,
            tradeable: true,
            value: 2000,



            itemImage: '/images/enchanting/scroll_of_cooking.png',
            enchantName: 'cooking',
            skillIcon: '/images/enchanting/enchanting_logo.png',
            class: 'enchanted-scroll',
            actionButton: 'Craft',
            getChance: (resource, playerLevel) => {
                return (Math.min(1, Math.max(0.4, 0.4 + (playerLevel - resource.level) / 25)) * 100).toFixed(0) + '%';
            },
            tags: ['enchanting'],
            requiredResources: [{ 111: 500, 511: 50, 512: 50, 513: 50, 1600: 1 }],
        },
        1625: {
            name: 'Scroll of Crafting',
            activeMessage: 'Making scrolls of crafting',
            enchant: true,
            enchantmentID: 25,
            categories: ['gloves', 'boots'],
            time: 15000,
            id: 1625,
            level: 67,
            experience: 4400,
            baseSuccessChance: 0.4,
            tradeable: true,
            value: 2000,



            itemImage: '/images/enchanting/scroll_of_crafting.png',
            enchantName: 'crafting',
            skillIcon: '/images/enchanting/enchanting_logo.png',
            class: 'enchanted-scroll',
            actionButton: 'Craft',
            getChance: (resource, playerLevel) => {
                return (Math.min(1, Math.max(0.4, 0.4 + (playerLevel - resource.level) / 25)) * 100).toFixed(0) + '%';
            },
            tags: ['enchanting'],
            requiredResources: [{ 111: 800, 510: 70, 517: 70, 1600: 1 }],
            rarity: 'rare',
        },
        1626: {
            name: 'Scroll of Refining',
            activeMessage: 'Making scrolls of refining',
            enchant: true,
            enchantmentID: 26,
            categories: ['gloves', 'boots'],
            time: 15000,
            id: 1626,
            level: 34,
            experience: 1800,
            baseSuccessChance: 0.4,
            tradeable: true,
            value: 2000,



            itemImage: '/images/enchanting/scroll_of_refining.png',
            enchantName: 'refining',
            skillIcon: '/images/enchanting/enchanting_logo.png',
            class: 'enchanted-scroll',
            actionButton: 'Craft',
            getChance: (resource, playerLevel) => {
                return (Math.min(1, Math.max(0.4, 0.4 + (playerLevel - resource.level) / 25)) * 100).toFixed(0) + '%';
            },
            tags: ['enchanting'],
            requiredResources: [{ 111: 400, 510: 40, 511: 40, 512: 40, 519: 40, 1600: 1 }],
        },
        1627: {
            name: 'Scroll of Runecrafting',
            activeMessage: 'Making scrolls of runecrafting',
            enchant: true,
            enchantmentID: 27,
            categories: ['gloves', 'boots'],
            time: 15000,
            id: 1627,
            level: 43,
            experience: 2500,
            baseSuccessChance: 0.4,
            tradeable: true,
            value: 2000,



            itemImage: '/images/enchanting/scroll_of_runecrafting.png',
            enchantName: 'runecrafting',
            skillIcon: '/images/enchanting/enchanting_logo.png',
            class: 'enchanted-scroll',
            actionButton: 'Craft',
            getChance: (resource, playerLevel) => {
                return (Math.min(1, Math.max(0.4, 0.4 + (playerLevel - resource.level) / 25)) * 100).toFixed(0) + '%';
            },
            tags: ['enchanting'],
            requiredResources: [{ 111: 500, 517: 50, 518: 50, 519: 50, 1600: 1 }],
        },
        1628: {
            name: 'Scroll of Chances',
            activeMessage: 'Making scrolls of chances',
            enchant: true,
            enchantmentID: 28,
            categories: ['gloves', 'boots'],
            time: 15000,
            id: 1628,
            level: 70,
            experience: 4500,
            baseSuccessChance: 0.4,
            tradeable: true,
            value: 2000,



            itemImage: '/images/enchanting/scroll_of_chances_v2.png',
            enchantName: 'chance',
            skillIcon: '/images/enchanting/enchanting_logo.png',
            class: 'enchanted-scroll',
            actionButton: 'Craft',
            getChance: (resource, playerLevel) => {
                return (Math.min(1, Math.max(0.4, 0.4 + (playerLevel - resource.level) / 25)) * 100).toFixed(0) + '%';
            },
            tags: ['enchanting'],
            requiredResources: [{ 111: 800, 517: 70, 518: 70, 519: 70, 1600: 1 }],
            rarity: 'rare',
        },
        1629: {
            name: 'Scroll of the Shrimp Lord',
            activeMessage: 'Making scrolls of the Shrimp Lord',
            enchant: true,
            enchantmentID: 29,
            categories: ['gloves', 'boots'],
            time: 15000,
            id: 1629,
            level: 1,
            experience: 80,
            baseSuccessChance: 0.4,
            tradeable: true,
            value: 2000,



            itemImage: '/images/enchanting/scroll_of_the_shrimp_lord.png',
            enchantName: 'Shrimp Lord',
            skillIcon: '/images/enchanting/enchanting_logo.png',
            class: 'enchanted-scroll',
            actionButton: 'Craft',
            getChance: (resource, playerLevel) => {
                return (Math.min(1, Math.max(0.4, 0.4 + (playerLevel - resource.level) / 25)) * 100).toFixed(0) + '%';
            },
            tags: ['enchanting'],
            requiredResources: [{ 111: 100, 510: 10, 513: 10, 516: 10, 517: 10, 1600: 1 }],
        },
        1630: {
            name: 'Scroll of Enlightenment',
            activeMessage: 'Making scrolls of enlightment',
            enchant: true,
            enchantmentID: 30,
            categories: ['gloves', 'boots'],
            time: 15000,
            id: 1630,
            level: 73,
            experience: 4600,
            baseSuccessChance: 0.4,
            tradeable: true,
            value: 2000,



            itemImage: '/images/enchanting/scroll_of_enlightment.png',
            enchantName: 'enlightenment',
            skillIcon: '/images/enchanting/enchanting_logo.png',
            class: 'enchanted-scroll',
            actionButton: 'Craft',
            getChance: (resource, playerLevel) => {
                return (Math.min(1, Math.max(0.4, 0.4 + (playerLevel - resource.level) / 25)) * 100).toFixed(0) + '%';
            },
            tags: ['enchanting'],
            requiredResources: [{ 111: 900, 510: 70, 513: 70, 516: 70, 518: 70, 1600: 1 }],
            rarity: 'rare',
        },
        1631: {
            name: 'Scroll of Prolonging',
            activeMessage: 'Making scrolls of prolonging',
            enchant: true,
            enchantmentID: 31,
            categories: ['gloves', 'boots'],
            time: 15000,
            id: 1631,
            level: 58,
            experience: 3500,
            baseSuccessChance: 0.4,
            tradeable: true,
            value: 2000,



            itemImage: '/images/enchanting/scroll_of_boosting.png',
            enchantName: 'prolonging',
            skillIcon: '/images/enchanting/enchanting_logo.png',
            class: 'enchanted-scroll',
            actionButton: 'Craft',
            getChance: (resource, playerLevel) => {
                return (Math.min(1, Math.max(0.4, 0.4 + (playerLevel - resource.level) / 25)) * 100).toFixed(0) + '%';
            },
            tags: ['enchanting'],
            requiredResources: [{ 111: 700, 517: 60, 518: 60, 1600: 1 }],
            rarity: 'uncommon',
        },
        1632: {
            name: 'Scroll of the Treasure Hunter',
            activeMessage: 'Making scrolls of treasure hunter',
            enchant: true,
            enchantmentID: 32,
            categories: ['gloves', 'boots', 'combat-boots', 'combat-gloves'],
            time: 15000,
            id: 1632,
            level: 85,
            experience: 5700,
            baseSuccessChance: 9 / 20,
            tradeable: true,
            value: 2000,



            itemImage: '/images/enchanting/scroll_of_treasure_hunter.png',
            enchantName: 'treasure hunter',
            skillIcon: '/images/enchanting/enchanting_logo.png',
            class: 'enchanted-scroll',
            actionButton: 'Craft',
            getChance: (resource, playerLevel) => {
                return (Math.min(1, Math.max(0.45, 0.45 + (playerLevel - resource.level) / 25)) * 100).toFixed(0) + '%';
            },
            tags: ['enchanting'],
            requiredResources: [{ 111: 1200, 516: 100, 517: 100, 519: 100, 1600: 1 }],
            rarity: 'epic',
        },
        1633: {
            name: 'Scroll of Inferno',
            activeMessage: 'Making scrolls of inferno',
            enchant: true,
            enchantmentID: 33,
            categories: ['boots', 'gloves'],
            time: 15000,
            id: 1633,
            level: 46,
            experience: 2600,
            baseSuccessChance: 0.4,
            tradeable: true,
            value: 2000,



            itemImage: '/images/enchanting/scroll_of_inferno.png',
            enchantName: 'inferno',
            skillIcon: '/images/enchanting/enchanting_logo.png',
            class: 'enchanted-scroll',
            actionButton: 'Craft',
            getChance: (resource, playerLevel) => {
                return (Math.min(1, Math.max(0.4, 0.4 + (playerLevel - resource.level) / 25)) * 100).toFixed(0) + '%';
            },
            tags: ['enchanting'],
            requiredResources: [{ 111: 600, 511: 50, 512: 50, 516: 50, 1600: 1 }],
        },
        1634: {
            name: 'Scroll of Destructive Testing',
            activeMessage: 'Making scrolls of destructive testing',
            enchant: true,
            enchantmentID: 34,
            categories: ['pickaxe'],
            time: 15000,
            id: 1634,
            level: 16,
            experience: 900,
            baseSuccessChance: 0.4,
            tradeable: true,
            value: 2000,



            itemImage: '/images/enchanting/scroll_of_destructive_testing.png',
            enchantName: 'destructive testing',
            skillIcon: '/images/enchanting/enchanting_logo.png',
            class: 'enchanted-scroll',
            actionButton: 'Craft',
            getChance: (resource, playerLevel) => {
                return (Math.min(1, Math.max(0.4, 0.4 + (playerLevel - resource.level) / 25)) * 100).toFixed(0) + '%';
            },
            tags: ['enchanting'],
            requiredResources: [{ 111: 200, 511: 30, 512: 30, 516: 30, 518: 30, 1600: 1 }],
        },
        1635: {
            name: 'Scroll of Nature',
            activeMessage: 'Making scrolls of the nature',
            enchant: true,
            enchantmentID: 35,
            categories: ['hatchet'],
            time: 15000,
            id: 1635,
            level: 19,
            experience: 1000,
            baseSuccessChance: 0.4,
            tradeable: true,
            value: 2000,



            itemImage: '/images/enchanting/scroll_of_nature.png',
            enchantName: 'nature',
            skillIcon: '/images/enchanting/enchanting_logo.png',
            class: 'enchanted-scroll',
            actionButton: 'Craft',
            getChance: (resource, playerLevel) => {
                return (Math.min(1, Math.max(0.4, 0.4 + (playerLevel - resource.level) / 25)) * 100).toFixed(0) + '%';
            },
            tags: ['enchanting'],
            requiredResources: [{ 111: 300, 511: 30, 513: 30, 517: 30, 519: 30, 1600: 1 }],
        },
        1636: {
            name: 'Scroll of Root Digging',
            activeMessage: 'Making scrolls of root digging',
            enchant: true,
            enchantmentID: 36,
            categories: ['hatchet'],
            time: 15000,
            id: 1636,
            level: 22,
            experience: 1000,
            baseSuccessChance: 0.4,
            tradeable: true,
            value: 2000,



            itemImage: '/images/enchanting/scroll_of_root_digging.png',
            enchantName: 'root digging',
            skillIcon: '/images/enchanting/enchanting_logo.png',
            class: 'enchanted-scroll',
            actionButton: 'Craft',
            getChance: (resource, playerLevel) => {
                return (Math.min(1, Math.max(0.4, 0.4 + (playerLevel - resource.level) / 25)) * 100).toFixed(0) + '%';
            },
            tags: ['enchanting'],
            requiredResources: [{ 111: 300, 511: 30, 517: 30, 519: 30, 1600: 1 }],
        },
        1637: {
            name: 'Scroll of Patience',
            activeMessage: 'Making scrolls of patience',
            enchant: true,
            enchantmentID: 37,
            categories: ['body', 'legs'],
            time: 15000,
            id: 1637,
            level: 82,
            experience: 5600,
            baseSuccessChance: 0.4,
            tradeable: true,
            value: 2000,



            itemImage: '/images/enchanting/scroll_of_patience.png',
            enchantName: 'patience',
            skillIcon: '/images/enchanting/enchanting_logo.png',
            class: 'enchanted-scroll',
            actionButton: 'Craft',
            getChance: (resource, playerLevel) => {
                return (Math.min(1, Math.max(0.4, 0.4 + (playerLevel - resource.level) / 25)) * 100).toFixed(0) + '%';
            },
            tags: ['enchanting'],
            requiredResources: [{ 111: 1000, 510: 80, 513: 80, 515: 80, 1600: 1 }],
            rarity: 'epic',
        },
        1638: {
            name: 'Scroll of Overhealing',
            activeMessage: 'Making scrolls of overhealing',
            enchant: true,
            enchantmentID: 38,
            categories: ['weapon'],
            time: 15000,
            id: 1638,
            level: 11,
            experience: 700,
            baseSuccessChance: 0.4,
            tradeable: true,
            value: 2000,



            itemImage: '/images/enchanting/scroll_of_overhealing.png',
            enchantName: 'overhealing',
            skillIcon: '/images/enchanting/enchanting_logo.png',
            class: 'enchanted-scroll',
            actionButton: 'Craft',
            getChance: (resource, playerLevel) => {
                return (Math.min(1, Math.max(0.4, 0.4 + (playerLevel - resource.level) / 25)) * 100).toFixed(0) + '%';
            },
            tags: ['weapon', 'enchanting'],
            requiredResources: [{ 111: 200, 510: 30, 513: 30, 515: 30, 1600: 1 }],
        },
        1639: {
            name: 'Scroll of Farming',
            activeMessage: 'Making scrolls of farming',
            enchant: true,
            enchantmentID: 39,
            categories: ['hoe'],
            time: 15000,
            id: 1639,
            level: 72,
            experience: 4600,
            baseSuccessChance: 0.4,
            tradeable: true,
            value: 2000,



            itemImage: '/images/enchanting/scroll_of_farming.png',
            enchantName: 'farming',
            skillIcon: '/images/enchanting/enchanting_logo.png',
            class: 'enchanted-scroll',
            actionButton: 'Craft',
            getChance: (resource, playerLevel) => {
                return (Math.min(1, Math.max(0.4, 0.4 + (playerLevel - resource.level) / 25)) * 100).toFixed(0) + '%';
            },
            tags: ['enchanting'],
            requiredResources: [{ 111: 900, 511: 70, 513: 70, 517: 70, 1600: 1 }],
            rarity: 'rare',
        },
        1640: {
            name: 'Scroll of the Gold Digger',
            activeMessage: 'Making scrolls of gold digger',
            enchant: true,
            enchantmentID: 40,
            categories: ['hoe'],
            time: 15000,
            id: 1640,
            level: 36,
            experience: 2300,
            baseSuccessChance: 0.4,
            tradeable: true,
            value: 2000,



            itemImage: '/images/enchanting/scroll_of_the_gold_digger.png',
            enchantName: 'Gold Digger',
            skillIcon: '/images/enchanting/enchanting_logo.png',
            class: 'enchanted-scroll',
            actionButton: 'Craft',
            getChance: (resource, playerLevel) => {
                return (Math.min(1, Math.max(0.4, 0.4 + (playerLevel - resource.level) / 25)) * 100).toFixed(0) + '%';
            },
            tags: ['enchanting'],
            requiredResources: [{ 111: 500, 511: 50, 517: 50, 519: 50, 1600: 1 }],
        },
        1641: {
            name: 'Scroll of Fertilizing',
            activeMessage: 'Making scrolls of fertilizing',
            enchant: true,
            enchantmentID: 41,
            categories: ['hoe'],
            time: 15000,
            id: 1641,
            level: 90,
            experience: 6600,
            baseSuccessChance: 0.7,
            tradeable: true,
            value: 2000,



            itemImage: '/images/enchanting/scroll_of_fertilizing.png',
            enchantName: 'Fertilizing',
            skillIcon: '/images/enchanting/enchanting_logo.png',
            class: 'enchanted-scroll',
            actionButton: 'Craft',
            getChance: (resource, playerLevel) => {
                return (Math.min(1, Math.max(0.7, 0.7 + (playerLevel - resource.level) / 25)) * 100).toFixed(0) + '%';
            },
            tags: ['enchanting'],
            requiredResources: [{ 111: 1400, 510: 120, 511: 120, 513: 120, 517: 120, 519: 120, 1600: 1 }],
            rarity: 'epic',
        },
        1642: {
            name: 'Scroll of Cultivation',
            activeMessage: 'Making scrolls of cultivation',
            enchant: true,
            enchantmentID: 42,
            categories: ['hoe'],
            time: 15000,
            id: 1642,
            level: 12,
            experience: 800,
            baseSuccessChance: 0.4,
            tradeable: true,
            value: 2000,



            itemImage: '/images/enchanting/scroll_of_cultivation.png',
            enchantName: 'Cultivation',
            skillIcon: '/images/enchanting/enchanting_logo.png',
            class: 'enchanted-scroll',
            actionButton: 'Craft',
            getChance: (resource, playerLevel) => {
                return (Math.min(1, Math.max(0.4, 0.4 + (playerLevel - resource.level) / 25)) * 100).toFixed(0) + '%';
            },
            tags: ['enchanting'],
            requiredResources: [{ 111: 200, 510: 30, 513: 30, 514: 30, 1600: 1 }],
        },
        1643: {
            name: 'Scroll of Fortitude',
            activeMessage: 'Making scrolls of fortitude',
            enchant: true,
            hidden: true,
            enchantmentID: 44,
            categories: ['shield', 'combat-talisman'],
            id: 1643,
            tradeable: true,
            value: 250000,



            itemImage: '/images/enchanting/scroll_of_fortitude.png',
            enchantName: 'Fortitude',
            skillIcon: '/images/enchanting/enchanting_logo.png',
            class: 'enchanted-scroll',
            tags: ['enchanting'],
            requiredResources: [{ 1: 1 }],
            rarity: 'uncommon',
        },
        1644: {
            name: 'Scroll of Pungent Bait',
            activeMessage: 'Making scrolls of pungent bait',
            enchant: true,
            enchantmentID: 49,
            categories: ['tacklebox', 'fishingset'],
            time: 15000,
            id: 1644,
            level: 14,
            experience: 850,
            baseSuccessChance: 0.4,
            tradeable: true,
            value: 2000,



            itemImage: '/images/enchanting/scroll_of_pungentbait.png',
            enchantName: 'pungentBait',
            skillIcon: '/images/enchanting/enchanting_logo.png',
            class: 'enchanted-scroll',
            actionButton: 'Craft',
            getChance: (resource, playerLevel) => {
                return (Math.min(1, Math.max(0.4, 0.4 + (playerLevel - resource.level) / 25)) * 100).toFixed(0) + '%';
            },
            tags: ['enchanting'],
            requiredResources: [{ 111: 200, 513: 30, 517: 30, 1600: 1 }],
        },
        1645: {
            name: 'Scroll of Reinforced Line',
            activeMessage: 'Making scrolls of reinforced line',
            enchant: true,
            enchantmentID: 50,
            categories: ['tacklebox', 'fishingset'],
            time: 15000,
            id: 1645,
            level: 23,
            experience: 1250,
            baseSuccessChance: 0.4,
            tradeable: true,
            value: 2000,



            itemImage: '/images/enchanting/scroll_of_reinforcedline.png',
            enchantName: 'reinforcedLine',
            skillIcon: '/images/enchanting/enchanting_logo.png',
            class: 'enchanted-scroll',
            actionButton: 'Craft',
            getChance: (resource, playerLevel) => {
                return (Math.min(1, Math.max(0.4, 0.4 + (playerLevel - resource.level) / 25)) * 100).toFixed(0) + '%';
            },
            tags: ['enchanting'],
            requiredResources: [{ 111: 300, 511: 40, 513: 40, 1600: 1 }],
        },
        1646: {
            name: 'Scroll of Fishing Magnetism',
            activeMessage: 'Making scrolls of fishing magnetism',
            enchant: true,
            enchantmentID: 48,
            categories: ['tacklebox', 'fishingset'],
            time: 15000,
            id: 1646,
            level: 33,
            experience: 1750,
            baseSuccessChance: 0.4,
            tradeable: true,
            value: 2000,



            itemImage: '/images/enchanting/scroll_of_fishingmagnetism.png',
            enchantName: 'fishingMagnetism',
            skillIcon: '/images/enchanting/enchanting_logo.png',
            class: 'enchanted-scroll',
            actionButton: 'Craft',
            getChance: (resource, playerLevel) => {
                return (Math.min(1, Math.max(0.4, 0.4 + (playerLevel - resource.level) / 25)) * 100).toFixed(0) + '%';
            },
            tags: ['enchanting'],
            requiredResources: [{ 111: 400, 511: 40, 513: 40, 519: 40, 1600: 1 }],
        },
        1647: {
            name: 'Scroll of Bait Preservation',
            activeMessage: 'Making scrolls of bait preservation',
            enchant: true,
            enchantmentID: 51,
            categories: ['tacklebox', 'fishingset'],
            time: 15000,
            id: 1647,
            level: 47,
            experience: 2800,
            baseSuccessChance: 0.4,
            tradeable: true,
            value: 2000,



            itemImage: '/images/enchanting/scroll_of_baitpreservation.png',
            enchantName: 'baitPreservation',
            skillIcon: '/images/enchanting/enchanting_logo.png',
            class: 'enchanted-scroll',
            actionButton: 'Craft',
            getChance: (resource, playerLevel) => {
                return (Math.min(1, Math.max(0.4, 0.4 + (playerLevel - resource.level) / 25)) * 100).toFixed(0) + '%';
            },
            tags: ['enchanting'],
            requiredResources: [{ 111: 600, 511: 60, 513: 60, 516: 60, 1600: 1 }],
        },
        1648: {
            name: 'Scroll of Oil Spill',
            activeMessage: 'Making scrolls of oil spill',
            enchant: true,
            enchantmentID: 52,
            categories: ['tacklebox', 'fishingset'],
            time: 15000,
            id: 1648,
            level: 69,
            experience: 4450,
            baseSuccessChance: 0.4,
            tradeable: true,
            value: 2000,



            itemImage: '/images/enchanting/scroll_of_oilspill.png',
            enchantName: 'oilSpill',
            skillIcon: '/images/enchanting/enchanting_logo.png',
            class: 'enchanted-scroll',
            actionButton: 'Craft',
            getChance: (resource, playerLevel) => {
                return (Math.min(1, Math.max(0.4, 0.4 + (playerLevel - resource.level) / 25)) * 100).toFixed(0) + '%';
            },
            tags: ['enchanting'],
            requiredResources: [{ 111: 800, 511: 70, 513: 70, 515: 70, 1600: 1 }],
            rarity: 'rare',
        },
        1649: {
            name: 'Scroll of Deadliest Catch',
            activeMessage: 'Making scrolls of deadliest catch',
            enchant: true,
            enchantmentID: 53,
            categories: ['tacklebox', 'fishingset'],
            time: 15000,
            id: 1649,
            level: 71,
            experience: 4550,
            baseSuccessChance: 0.4,
            tradeable: true,
            value: 2000,



            itemImage: '/images/enchanting/scroll_of_deadliestcatch.png',
            enchantName: 'deadliestCatch',
            skillIcon: '/images/enchanting/enchanting_logo.png',
            class: 'enchanted-scroll',
            actionButton: 'Craft',
            getChance: (resource, playerLevel) => {
                return (Math.min(1, Math.max(0.4, 0.4 + (playerLevel - resource.level) / 25)) * 100).toFixed(0) + '%';
            },
            tags: ['enchanting'],
            requiredResources: [{ 111: 900, 511: 70, 513: 70, 514: 70, 1600: 1 }],
            rarity: 'rare',
        },
        1650: {
            name: 'Scroll of the Master Chef',
            activeMessage: 'Making scrolls of master chef',
            enchant: true,
            enchantmentID: 54,
            categories: ['ladle'],
            time: 15000,
            id: 1650,
            level: 84,
            experience: 5650,
            baseSuccessChance: 0.4,
            tradeable: true,
            value: 2000,



            itemImage: '/images/enchanting/scroll_of_masterchef.png',
            enchantName: 'masterChef',
            skillIcon: '/images/enchanting/enchanting_logo.png',
            class: 'enchanted-scroll',
            actionButton: 'Craft',
            getChance: (resource, playerLevel) => {
                return (Math.min(1, Math.max(0.4, 0.4 + (playerLevel - resource.level) / 25)) * 100).toFixed(0) + '%';
            },
            tags: ['enchanting'],
            requiredResources: [{ 111: 1000, 511: 90, 512: 90, 513: 90, 1600: 1 }],
            rarity: 'epic',
        },
        1651: {
            name: 'Scroll of the Herbalist',
            activeMessage: 'Making scrolls of herbalist',
            enchant: true,
            enchantmentID: 55,
            categories: ['hatchet'],
            time: 15000,
            id: 1651,
            level: 42,
            experience: 2450,
            baseSuccessChance: 0.4,
            tradeable: true,
            value: 2000,



            itemImage: '/images/enchanting/scroll_of_root_digging.png',
            enchantName: 'herbalist',
            skillIcon: '/images/enchanting/enchanting_logo.png',
            class: 'enchanted-scroll',
            actionButton: 'Craft',
            getChance: (resource, playerLevel) => {
                return (Math.min(1, Math.max(0.4, 0.4 + (playerLevel - resource.level) / 25)) * 100).toFixed(0) + '%';
            },
            tags: ['enchanting'],
            requiredResources: [{ 111: 500, 512: 50, 515: 50, 517: 50, 1600: 1 }],
        },
        1652: {
            name: 'Scroll of Seed Harvesting',
            activeMessage: 'Making scrolls of seed harvesting',
            enchant: true,
            enchantmentID: 56,
            categories: ['hatchet'],
            time: 15000,
            id: 1652,
            level: 30,
            experience: 1650,
            baseSuccessChance: 0.4,
            tradeable: true,
            value: 2000,



            itemImage: '/images/enchanting/scroll_of_root_digging.png',
            enchantName: 'seedHarvesting',
            skillIcon: '/images/enchanting/enchanting_logo.png',
            class: 'enchanted-scroll',
            actionButton: 'Craft',
            getChance: (resource, playerLevel) => {
                return (Math.min(1, Math.max(0.4, 0.4 + (playerLevel - resource.level) / 25)) * 100).toFixed(0) + '%';
            },
            tags: ['enchanting'],
            requiredResources: [{ 111: 400, 511: 40, 514: 40, 517: 40, 1600: 1 }],
        },
        1653: {
            name: 'Scroll of Metallurgy',
            activeMessage: 'Making scrolls of metallurgy',
            enchant: true,
            enchantmentID: 57,
            categories: ['tongs'],
            time: 15000,
            id: 1653,
            level: 38,
            experience: 2350,
            baseSuccessChance: 0.4,
            tradeable: true,
            value: 2000,



            itemImage: '/images/enchanting/scroll_of_inferno.png',
            enchantName: 'metallurgy',
            skillIcon: '/images/enchanting/enchanting_logo.png',
            class: 'enchanted-scroll',
            actionButton: 'Craft',
            getChance: (resource, playerLevel) => {
                return (Math.min(1, Math.max(0.4, 0.4 + (playerLevel - resource.level) / 25)) * 100).toFixed(0) + '%';
            },
            tags: ['enchanting'],
            requiredResources: [{ 111: 400, 510: 40, 512: 40, 518: 40, 1600: 1 }],
        },
        1654: {
            name: 'Scroll of Pure Metals',
            activeMessage: 'Making scrolls of pure metals',
            enchant: true,
            enchantmentID: 58,
            categories: ['tongs'],
            time: 15000,
            id: 1654,
            level: 87,
            experience: 6400,
            baseSuccessChance: 0.4,
            tradeable: true,
            value: 2000,



            itemImage: '/images/enchanting/scroll_of_inferno.png',
            enchantName: 'pureMetals',
            skillIcon: '/images/enchanting/enchanting_logo.png',
            class: 'enchanted-scroll',
            actionButton: 'Craft',
            getChance: (resource, playerLevel) => {
                return (Math.min(1, Math.max(0.4, 0.4 + (playerLevel - resource.level) / 25)) * 100).toFixed(0) + '%';
            },
            tags: ['enchanting'],
            requiredResources: [{ 111: 1000, 511: 100, 512: 100, 518: 100, 1600: 1 }],
            rarity: 'epic',
        },
        1655: {
            name: 'Scroll of Essence Concentration',
            activeMessage: 'Making scrolls of essence concentration',
            enchant: true,
            enchantmentID: 59,
            categories: ['gloves', 'boots'],
            time: 15000,
            id: 1655,
            level: 59,
            experience: 4000,
            baseSuccessChance: 0.4,
            tradeable: true,
            value: 2000,



            itemImage: '/images/enchanting/scroll_of_runecrafting.png',
            enchantName: 'essenceConcentration',
            skillIcon: '/images/enchanting/enchanting_logo.png',
            class: 'enchanted-scroll',
            actionButton: 'Craft',
            getChance: (resource, playerLevel) => {
                return (Math.min(1, Math.max(0.4, 0.4 + (playerLevel - resource.level) / 25)) * 100).toFixed(0) + '%';
            },
            tags: ['enchanting'],
            requiredResources: [{ 111: 700, 516: 70, 518: 70, 519: 70, 1600: 1 }],
            rarity: 'epic',
        },
        1656: {
            name: 'Scroll of the Fiber Finder',
            activeMessage: 'Making scrolls of fiber finder',
            enchant: true,
            enchantmentID: 62,
            categories: ['tacklebox', 'fishingset'],
            time: 15000,
            id: 1656,
            level: 50,
            experience: 3300,
            baseSuccessChance: 0.4,
            tradeable: true,
            value: 2000,



            itemImage: '/images/enchanting/scroll_of_fishing.png',
            enchantName: 'fiberFinder',
            skillIcon: '/images/enchanting/enchanting_logo.png',
            class: 'enchanted-scroll',
            actionButton: 'Craft',
            getChance: (resource, playerLevel) => {
                return (Math.min(1, Math.max(0.4, 0.4 + (playerLevel - resource.level) / 25)) * 100).toFixed(0) + '%';
            },
            tags: ['enchanting'],
            requiredResources: [{ 111: 600, 511: 60, 513: 60, 518: 60, 1600: 1 }],
            rarity: 'uncommon',
        },
        1657: {
            name: 'Scroll of Archaeology',
            activeMessage: 'Making scrolls of archaeology',
            enchant: true,
            enchantmentID: 67,
            categories: ['tacklebox', 'fishingset', 'pickaxe', 'hatchet'],
            time: 15000,
            id: 1657,
            level: 41,
            experience: 2400,
            baseSuccessChance: 0.4,
            tradeable: true,
            value: 2000,



            itemImage: '/images/enchanting/scroll_of_chances_v1.png',
            enchantName: 'archaeology',
            skillIcon: '/images/enchanting/enchanting_logo.png',
            class: 'enchanted-scroll',
            actionButton: 'Craft',
            getChance: (resource, playerLevel) => {
                return (Math.min(1, Math.max(0.4, 0.4 + (playerLevel - resource.level) / 25)) * 100).toFixed(0) + '%';
            },
            tags: ['enchanting'],
            requiredResources: [{ 111: 500, 511: 50, 513: 50, 517: 50, 1600: 1 }],
        },
        2000: {
            name: 'Raw Chicken',
            id: 2000,
            value: 75,
            tradeable: true,
            ingredientTags: ['poultry', 'meat'],
            skill: 'cooking',
            size: 2,
            difficulty: 1,
            itemImage: '/images/cooking/raw_chicken.png',
            extraTooltipInfo: 'Clucked its last cluck.',
            class: 'cooking-ingredient',
            tags: ['ingredient', 'cooking'],
        },
        2001: {
            name: 'Raw Beef',
            id: 2001,
            value: 75,
            tradeable: true,
            ingredientTags: ['beast', 'meat'],
            skill: 'cooking',
            size: 2,
            difficulty: 1,
            itemImage: '/images/cooking/raw_beef.png',
            extraTooltipInfo: 'Fresh, never frozen!',
            class: 'cooking-ingredient',
            tags: ['ingredient', 'cooking'],
        },
        2009: {
            name: 'Spider Legs',
            id: 2009,
            cookingEnchantment: 2000,
            value: 100,
            tradeable: true,
            ingredientTags: ['monster', 'meat'],
            skill: 'cooking',
            size: 4,
            difficulty: 4,
            alchemySize: 2.5,
            itemImage: '/images/cooking/spider_legs.png',
            extraTooltipInfo: 'It is somehow difficult to thread on a skewer.',
            class: 'cooking-ingredient',
            tags: ['ingredient', 'cooking'],
        },
        2010: {
            name: 'Goblin Brain',
            id: 2010,
            value: 25,
            tradeable: true,
            ingredientTags: ['monster', 'meat'],
            skill: 'cooking',
            size: 2,
            difficulty: 2,
            cookingEnchantment: 27,
            alchemySize: 2,
            itemImage: '/images/cooking/goblin_brain.png',
            extraTooltipInfo: 'They are dumb. They are sad. Their brain run by Runecrafting. Beat them.',
            class: 'cooking-ingredient',
            tags: ['ingredient', 'cooking'],
        },
        2012: {
            name: 'Pepper',
            id: 2012,
            value: 10,
            tradeable: true,
            experience: 10,
            ingredientTags: ['spice'],
            skill: 'cooking',
            size: 1,
            difficulty: 1,
            cookingEnchantment: 33,
            alchemySize: 1.5,
            itemImage: '/images/cooking/pepper.png',
            extraTooltipInfo: "Don't sneeze or you'll dump too much ore into the forge! Achoo!",
            class: 'cooking-ingredient',
            tags: ['ingredient', 'cooking'],
        },
        2013: {
            name: 'Salt',
            id: 2013,
            value: 10,
            tradeable: true,
            experience: 10,
            ingredientTags: ['spice', 'preservative'],
            skill: 'cooking',
            size: 1,
            difficulty: 1,
            cookingEnchantment: 24,
            alchemySize: 1,
            itemImage: '/images/cooking/salt.png',
            extraTooltipInfo: 'For some reason it reminds you of yourself. A great chef! ... Probably.',
            class: 'cooking-ingredient',
            tags: ['ingredient', 'cooking'],
        },
        2014: {
            name: 'Ashes',
            id: 2014,
            value: 5,
            tradeable: true,
            craftingLevel: 1,
            craftingExperience: 60,
            requiredResources: [
                { 2: 100, 302: 30 },
                { 2: 100, 303: 25 },
                { 2: 100, 304: 20 },
                { 2: 100, 305: 15 },
                { 2: 100, 306: 10 },
            ],
            ingredientTags: ['spice', 'grain'],
            craftable: true,
            skill: 'cooking',
            size: 3,
            difficulty: 3,
            cookingEnchantment: 6,
            alchemySize: 1,
            itemImage: '/images/cooking/ashes.png',
            craftingDescription: 'The remnants of life.',
            extraTooltipInfo: 'The remnants of life.',
            category: 'General',
            class: 'cooking-ingredient',
            tags: ['ingredient', 'cooking', 'crafting'],
        },
        2015: {
            name: 'Sugar',
            id: 2015,
            value: 10,
            tradeable: true,
            ingredientTags: ['spice', 'sweetener'],
            skill: 'cooking',
            size: 1,
            difficulty: 1,
            cookingEnchantment: 22,
            alchemySize: 1,
            itemImage: '/images/cooking/sugar.png',
            extraTooltipInfo: 'A sugar rush would definitely make you more efficient!',
            class: 'cooking-ingredient',
            tags: ['ingredient', 'cooking'],
        },
        2016: {
            name: 'Honey',
            id: 2016,
            value: 20,
            tradeable: true,
            experience: 15,
            ingredientTags: ['spice', 'sweetener'],
            skill: 'cooking',
            size: 3,
            difficulty: 3,
            cookingEnchantment: 23,
            alchemySize: 2.5,
            itemImage: '/images/cooking/honey.png',
            extraTooltipInfo: 'Why do fish like this so much?',
            class: 'cooking-ingredient',
            tags: ['ingredient', 'consumable', 'food', 'cooking'],
            healing: {
                hp: 6,
                cooldown: 7500,
                perTick: 6,
                totalTicks: 5,
                tickDelay: 5000,
                ignoreCooldown: true,
            },
        },
        2017: {
            name: 'Milk',
            id: 2017,
            value: 15,
            tradeable: true,
            ingredientTags: ['dairy'],
            skill: 'cooking',
            size: 1,
            difficulty: 1,
            itemImage: '/images/cooking/milk.png',
            extraTooltipInfo: 'mooooooooo',
            class: 'cooking-ingredient',
            tags: ['ingredient', 'consumable', 'food', 'cooking'],
            healing: {
                hp: 9,
                cooldown: 10000,
                perTick: 9,
                totalTicks: 3,
                tickDelay: 5000,
                ignoreCooldown: false,
            },
        },
        2018: {
            name: 'Butter',
            id: 2018,
            craftingLevel: 1,
            craftingExperience: 18,
            value: 10,
            tradeable: true,
            ingredientTags: ['dairy'],
            craftable: true,
            skill: 'cooking',
            size: 3,
            difficulty: 3,
            itemImage: '/images/cooking/butter.png',
            craftingDescription: "I can't believe it",
            category: 'General',
            class: 'cooking-ingredient',
            tags: ['ingredient', 'cooking', 'crafting'],
            requiredResources: [{ 2017: 5 }],
        },
        2019: {
            name: 'Egg',
            id: 2019,
            value: 15,
            tradeable: true,
            ingredientTags: ['egg'],
            skill: 'cooking',
            size: 1,
            difficulty: 1,
            itemImage: '/images/cooking/egg.png',
            extraTooltipInfo: 'GEG, scrambled egg.',
            class: 'cooking-ingredient',
            tags: ['ingredient', 'cooking'],
        },
        2020: {
            name: 'Mushroom',
            id: 2020,
            value: 10,
            tradeable: true,
            experience: 15,
            ingredientTags: ['vegetable'],
            skill: 'cooking',
            size: 1,
            difficulty: 3,
            cookingEnchantment: 36,
            alchemySize: 2,
            itemImage: '/images/cooking/mushroom.png',
            extraTooltipInfo: 'Kinda makes you feel like checking the roots of things.',
            class: 'cooking-ingredient',
            tags: ['ingredient', 'cooking'],
        },
        2021: {
            name: 'Carrot',
            id: 2021,
            value: 15,
            tradeable: true,
            experience: 10,
            ingredientTags: ['vegetable'],
            skill: 'cooking',
            size: 1,
            difficulty: 1,
            itemImage: '/images/cooking/carrot.png',
            extraTooltipInfo: 'Build your own snowman kit. Just add water and coal!',
            class: 'cooking-ingredient',
            tags: ['ingredient', 'consumable', 'food', 'cooking'],
            healing: {
                hp: 9,
                cooldown: 10000,
                perTick: 9,
                totalTicks: 4,
                tickDelay: 5000,
                ignoreCooldown: false,
            },
        },
        2022: {
            name: 'Chili Pepper',
            id: 2022,
            value: 10,
            tradeable: true,
            experience: 10,
            ingredientTags: ['vegetable'],
            skill: 'cooking',
            size: 2,
            difficulty: 2,
            cookingEnchantment: 5,
            alchemySize: 1,
            itemImage: '/images/cooking/chili_pepper.png',
            extraTooltipInfo: 'So hot you feel like you could almost smelt ores with it!',
            class: 'cooking-ingredient',
            tags: ['ingredient', 'consumable', 'food', 'cooking'],
            healing: {
                hp: 6,
                cooldown: 7500,
                perTick: 6,
                totalTicks: 5,
                tickDelay: 5000,
                ignoreCooldown: true,
            },
        },
        2023: {
            name: 'Potato',
            id: 2023,
            value: 10,
            tradeable: true,
            experience: 10,
            ingredientTags: ['vegetable'],
            skill: 'cooking',
            size: 2,
            difficulty: 2,
            itemImage: '/images/cooking/potato.png',
            extraTooltipInfo: "What's 'taters, eh?",
            class: 'cooking-ingredient',
            tags: ['ingredient', 'cooking'],
        },
        2024: {
            name: 'Pumpkin',
            id: 2024,
            value: 10,
            tradeable: true,
            experience: 20,
            ingredientTags: ['vegetable'],
            skill: 'cooking',
            size: 3,
            difficulty: 3,
            itemImage: '/images/cooking/pumpkin.png',
            extraTooltipInfo: 'Such a weird carrot!',
            class: 'cooking-ingredient',
            tags: ['ingredient', 'cooking'],
        },
        2025: {
            name: 'Tomato',
            id: 2025,
            value: 10,
            tradeable: true,
            experience: 10,
            ingredientTags: ['fruit'],
            skill: 'cooking',
            size: 2,
            difficulty: 2,
            itemImage: '/images/cooking/tomato.png',
            extraTooltipInfo: 'Definitely a fruit.',
            class: 'cooking-ingredient',
            tags: ['ingredient', 'consumable', 'food', 'cooking'],
            healing: {
                hp: 3,
                cooldown: 5000,
                perTick: 3,
                totalTicks: 10,
                tickDelay: 5000,
                ignoreCooldown: true,
            },
        },
        2026: {
            name: 'Apple',
            id: 2026,
            value: 20,
            tradeable: true,
            experience: 10,
            ingredientTags: ['fruit', 'sweetener'],
            skill: 'cooking',
            size: 2,
            difficulty: 1,
            itemImage: '/images/cooking/apple.png',
            extraTooltipInfo: "Didn't fall far from the tree",
            class: 'cooking-ingredient',
            tags: ['ingredient', 'consumable', 'food', 'cooking'],
            healing: {
                hp: 9,
                cooldown: 10000,
                perTick: 9,
                totalTicks: 4,
                tickDelay: 5000,
                ignoreCooldown: false,
            },
        },
        2027: {
            name: 'Wildberry',
            id: 2027,
            value: 10,
            tradeable: true,
            experience: 10,
            ingredientTags: ['fruit', 'sweetener'],
            skill: 'cooking',
            size: 1,
            difficulty: 2,
            itemImage: '/images/cooking/wildberry.png',
            extraTooltipInfo: 'Like a blueberry, but wild.',
            class: 'cooking-ingredient',
            tags: ['ingredient', 'consumable', 'food', 'cooking'],
            healing: {
                hp: 3,
                cooldown: 5000,
                perTick: 3,
                totalTicks: 10,
                tickDelay: 5000,
                ignoreCooldown: true,
            },
        },
        2028: {
            name: 'Banana',
            id: 2028,
            value: 20,
            tradeable: true,
            experience: 10,
            ingredientTags: ['fruit', 'sweetener'],
            skill: 'cooking',
            size: 1,
            difficulty: 1,
            cookingEnchantment: 4,
            alchemySize: 2,
            itemImage: '/images/cooking/banana.png',
            extraTooltipInfo: "Gather 'em up in bunches!",
            class: 'cooking-ingredient',
            tags: ['ingredient', 'consumable', 'food', 'cooking'],
            healing: {
                hp: 9,
                cooldown: 10000,
                perTick: 9,
                totalTicks: 4,
                tickDelay: 5000,
                ignoreCooldown: false,
            },
        },
        2029: {
            name: 'Wheat',
            id: 2029,
            value: 10,
            tradeable: true,
            experience: 10,
            ingredientTags: ['grain'],
            skill: 'cooking',
            size: 1,
            difficulty: 2,
            itemImage: '/images/cooking/wheat.png',
            extraTooltipInfo: 'How many of these do I need to make a Straw Hat?',
            class: 'cooking-ingredient',
            tags: ['ingredient', 'consumable', 'food', 'cooking'],
        },
        2030: {
            name: 'Rice',
            id: 2030,
            value: 10,
            tradeable: true,
            experience: 10,
            ingredientTags: ['grain'],
            skill: 'cooking',
            size: 2,
            difficulty: 2,
            itemImage: '/images/cooking/rice.png',
            extraTooltipInfo: "You're telling me a Limpe fried this rice?",
            class: 'cooking-ingredient',
            tags: ['ingredient', 'consumable', 'food', 'cooking'],
        },
        2031: {
            name: 'Sageberry',
            id: 2031,
            value: 150,
            tradeable: true,
            experience: 0,
            ingredientTags: ['fruit', 'spice'],
            skill: 'cooking',
            size: 1,
            difficulty: 5,
            cookingEnchantment: 2002,
            alchemySize: 2,
            itemImage: '/images/farming/sage_berry.png',
            extraTooltipInfo: 'The ultimate big brain berry.',
            class: 'cooking-ingredient',
            tags: ['ingredient', 'consumable', 'food', 'cooking'],
        },
        2032: {
            name: 'Choccy Milk',
            id: 2032,
            value: 150,
            tradeable: true,
            ingredientTags: ['dairy'],
            skill: 'cooking',
            size: 5,
            difficulty: 5,
            itemImage: '/images/cooking/chocolate_milk.png',
            extraTooltipInfo: "Do you even know what chocolate is? ... Well, it's brown.",
            class: 'cooking-ingredient',
            tags: ['ingredient', 'consumable', 'food', 'cooking'],
            healing: {
                hp: 18,
                cooldown: 10000,
                perTick: 12,
                totalTicks: 6,
                tickDelay: 5000,
                ignoreCooldown: false,
            },
        },
        2100: {
            name: 'Questionable Food',
            id: 2100,
            value: 5,
            tradeable: true,



            itemImage: '/images/cooking/questionable_food.png',
            extraTooltipInfo: "You're not quite sure what this is supposed to be.",
            class: 'cooking-ingredient',
            tags: ['consumable', 'food', 'cooking'],
            healing: {
                hp: 3,
                cooldown: 5000,
                perTick: 1,
                totalTicks: 5,
                tickDelay: 5000,
                ignoreCooldown: true,
            },
        },
        2101: {
            name: 'Monster Surprise',
            id: 2101,
            value: 5,
            tradeable: true,



            itemImage: '/images/cooking/monster_surprise.png',
            extraTooltipInfo: '... Probably edible!',
            class: 'cooking-ingredient',
            tags: ['consumable', 'food', 'cooking'],
            healing: {
                hp: 3,
                cooldown: 5000,
                perTick: 3,
                totalTicks: 20,
                tickDelay: 5000,
                ignoreCooldown: true,
            },
        },
        2102: {
            name: 'Seared Steak',
            id: 2102,
            value: 50,
            tradeable: true,



            itemImage: '/images/cooking/seared_steak.png',
            extraTooltipInfo: 'A nice juicy steak.',
            class: 'cooking-ingredient',
            tags: ['consumable', 'food', 'cooking'],
            healing: {
                hp: 3,
                cooldown: 5000,
                perTick: 3,
                totalTicks: 20,
                tickDelay: 5000,
                ignoreCooldown: true,
            },
        },
        2103: {
            name: 'Seared Fish',
            id: 2103,
            value: 30,
            tradeable: true,



            itemImage: '/images/cooking/seared_fish.png',
            extraTooltipInfo: "You're not entirely sure which fish this is, but it's definitely seared!",
            class: 'cooking-ingredient',
            tags: ['consumable', 'food', 'cooking'],
            healing: {
                hp: 3,
                cooldown: 5000,
                perTick: 3,
                totalTicks: 20,
                tickDelay: 5000,
                ignoreCooldown: true,
            },
        },
        2104: {
            name: 'Seared Poultry',
            id: 2104,
            value: 50,
            tradeable: true,



            itemImage: '/images/cooking/seared_bird.png',
            extraTooltipInfo: "It's not fried but it'll do.",
            class: 'cooking-ingredient',
            tags: ['consumable', 'food', 'cooking'],
            healing: {
                hp: 3,
                cooldown: 5000,
                perTick: 3,
                totalTicks: 20,
                tickDelay: 5000,
                ignoreCooldown: true,
            },
        },
        2105: {
            name: 'Birdie Pasta',
            id: 2105,
            value: 75,
            tradeable: true,



            itemImage: '/images/cooking/birdie_pasta.png',
            extraTooltipInfo: 'The invention of a true madman.',
            class: 'cooking-ingredient',
            tags: ['consumable', 'food', 'cooking'],
            healing: {
                hp: 18,
                cooldown: 10000,
                perTick: 18,
                totalTicks: 7,
                tickDelay: 5000,
                ignoreCooldown: false,
            },
        },
        2106: {
            name: 'Spaghetti & Meat',
            id: 2106,
            value: 75,
            tradeable: true,



            itemImage: '/images/cooking/spaghetti_meat.png',
            extraTooltipInfo: 'Classic.',
            class: 'cooking-ingredient',
            tags: ['consumable', 'food', 'cooking'],
            healing: {
                hp: 18,
                cooldown: 10000,
                perTick: 18,
                totalTicks: 7,
                tickDelay: 5000,
                ignoreCooldown: false,
            },
        },
        2107: {
            name: 'Sushi',
            id: 2107,
            value: 100,
            tradeable: true,



            itemImage: '/images/cooking/sushi.png',
            extraTooltipInfo: 'Wait, is the fish raw or not?',
            class: 'cooking-ingredient',
            tags: ['consumable', 'food', 'cooking'],
            healing: {
                hp: 18,
                cooldown: 10000,
                perTick: 18,
                totalTicks: 7,
                tickDelay: 5000,
                ignoreCooldown: false,
            },
        },
        2108: {
            name: 'Birdie Pie',
            id: 2108,
            value: 125,
            tradeable: true,



            itemImage: '/images/cooking/birdie_pie.png',
            extraTooltipInfo: 'Could almost be called a chicken pot pie!',
            class: 'cooking-ingredient',
            tags: ['consumable', 'food', 'cooking'],
            healing: {
                hp: 24,
                cooldown: 12500,
                perTick: 24,
                totalTicks: 5,
                tickDelay: 5000,
                ignoreCooldown: false,
            },
        },
        2109: {
            name: 'Cottage Pie',
            id: 2109,
            value: 125,
            tradeable: true,



            itemImage: '/images/cooking/cottage_pie.png',
            extraTooltipInfo: 'Maybe you should have cut the meat up first.',
            class: 'cooking-ingredient',
            tags: ['consumable', 'food', 'cooking'],
            healing: {
                hp: 24,
                cooldown: 12500,
                perTick: 24,
                totalTicks: 5,
                tickDelay: 5000,
                ignoreCooldown: false,
            },
        },
        2110: {
            name: "Fisherman's Pie",
            id: 2110,
            value: 125,
            tradeable: true,



            itemImage: '/images/cooking/fisherman_pie.png',
            extraTooltipInfo: '... is that a whole fin sticking out of the crust?',
            class: 'cooking-ingredient',
            tags: ['consumable', 'food', 'cooking'],
            healing: {
                hp: 24,
                cooldown: 12500,
                perTick: 24,
                totalTicks: 5,
                tickDelay: 5000,
                ignoreCooldown: false,
            },
        },
        2111: {
            name: 'Fruit Pie',
            id: 2111,
            value: 125,
            tradeable: true,



            itemImage: '/images/cooking/fruit_pie.png',
            extraTooltipInfo: "I don't think that's what many people have in mind when describing a fruit pie.",
            class: 'cooking-ingredient',
            tags: ['consumable', 'food', 'cooking'],
            healing: {
                hp: 24,
                cooldown: 12500,
                perTick: 24,
                totalTicks: 5,
                tickDelay: 5000,
                ignoreCooldown: false,
            },
        },
        2112: {
            name: 'Demon Cake',
            id: 2112,
            value: 175,
            tradeable: true,



            itemImage: '/images/cooking/demon_cake.png',
            extraTooltipInfo: 'Probably not inherently evil! Probably.',
            class: 'cooking-ingredient',
            tags: ['consumable', 'food', 'cooking'],
            healing: {
                hp: 24,
                cooldown: 12500,
                perTick: 24,
                totalTicks: 5,
                tickDelay: 5000,
                ignoreCooldown: false,
            },
        },
        2113: {
            name: 'Cake',
            id: 2113,
            value: 100,
            tradeable: true,



            itemImage: '/images/cooking/cake.png',
            class: 'cooking-ingredient',
            tags: ['consumable', 'food', 'cooking'],
            extraTooltipInfo: 'A lie.',
            healing: {
                hp: 24,
                cooldown: 12500,
                perTick: 24,
                totalTicks: 5,
                tickDelay: 5000,
                ignoreCooldown: false,
            },
        },
        2114: {
            name: 'Fruit Cake',
            id: 2114,
            value: 125,
            tradeable: true,



            itemImage: '/images/cooking/fruit_cake.png',
            extraTooltipInfo: 'Pretty please with a cherry on top?',
            class: 'cooking-ingredient',
            tags: ['consumable', 'food', 'cooking'],
            healing: {
                hp: 24,
                cooldown: 12500,
                perTick: 24,
                totalTicks: 5,
                tickDelay: 5000,
                ignoreCooldown: false,
            },
        },
        2115: {
            name: 'Grain Cake',
            id: 2115,
            value: 125,
            tradeable: true,



            itemImage: '/images/cooking/grain_cake.png',
            extraTooltipInfo: 'A little dry.',
            class: 'cooking-ingredient',
            tags: ['consumable', 'food', 'cooking'],
            healing: {
                hp: 18,
                cooldown: 10000,
                perTick: 18,
                totalTicks: 7,
                tickDelay: 5000,
                ignoreCooldown: false,
            },
        },
        2116: {
            name: 'Omelette',
            id: 2116,
            value: 75,
            tradeable: true,



            itemImage: '/images/cooking/omelette.png',
            extraTooltipInfo: 'Sometimes you just gotta break a few eggs.',
            class: 'cooking-ingredient',
            tags: ['consumable', 'food', 'cooking'],
            healing: {
                hp: 6,
                cooldown: 7500,
                perTick: 6,
                totalTicks: 10,
                tickDelay: 5000,
                ignoreCooldown: true,
            },
        },
        2117: {
            name: 'Monster Omelette',
            id: 2117,
            value: 150,
            tradeable: true,



            itemImage: '/images/cooking/monster_omelette.png',
            extraTooltipInfo: 'Is it alive?',
            class: 'cooking-ingredient',
            tags: ['consumable', 'food', 'cooking'],
            healing: {
                hp: 18,
                cooldown: 10000,
                perTick: 18,
                totalTicks: 7,
                tickDelay: 5000,
                ignoreCooldown: false,
            },
        },
        2118: {
            name: 'Meaty Omelette',
            id: 2118,
            value: 125,
            tradeable: true,



            itemImage: '/images/cooking/meat_omelette.png',
            extraTooltipInfo: 'Rich and savoury!',
            class: 'cooking-ingredient',
            tags: ['consumable', 'food', 'cooking'],
            healing: {
                hp: 18,
                cooldown: 10000,
                perTick: 18,
                totalTicks: 7,
                tickDelay: 5000,
                ignoreCooldown: false,
            },
        },
        2119: {
            name: 'Veggie Crepe',
            id: 2119,
            value: 125,
            tradeable: true,



            itemImage: '/images/cooking/veggie_crepe.png',
            extraTooltipInfo: "Vegetables are crepe'y! Get it? No? Okay...",
            class: 'cooking-ingredient',
            tags: ['consumable', 'food', 'cooking'],
            healing: {
                hp: 18,
                cooldown: 10000,
                perTick: 18,
                totalTicks: 7,
                tickDelay: 5000,
                ignoreCooldown: false,
            },
        },
        2120: {
            name: 'Fruity Crepe',
            id: 2120,
            value: 150,
            tradeable: true,



            itemImage: '/images/cooking/fruit_crepe.png',
            extraTooltipInfo: 'Should probably only be eaten as a dessert!',
            class: 'cooking-ingredient',
            tags: ['consumable', 'food', 'cooking'],
            healing: {
                hp: 18,
                cooldown: 10000,
                perTick: 18,
                totalTicks: 7,
                tickDelay: 5000,
                ignoreCooldown: false,
            },
        },
        2121: {
            name: 'Eggnog',
            id: 2121,
            value: 50,
            tradeable: true,



            itemImage: '/images/cooking/egg_nog.png',
            extraTooltipInfo: 'Good all year round!',
            class: 'cooking-ingredient',
            tags: ['consumable', 'food', 'cooking'],
            healing: {
                hp: 18,
                cooldown: 10000,
                perTick: 18,
                totalTicks: 7,
                tickDelay: 5000,
                ignoreCooldown: false,
            },
        },
        2122: {
            name: 'Meat Roast',
            id: 2122,
            value: 150,
            tradeable: true,



            itemImage: '/images/cooking/meat_roast.png',
            extraTooltipInfo: 'PROTEIN!!!',
            class: 'cooking-ingredient',
            tags: ['consumable', 'food', 'cooking'],
            healing: {
                hp: 24,
                cooldown: 12500,
                perTick: 24,
                totalTicks: 5,
                tickDelay: 5000,
                ignoreCooldown: false,
            },
        },
        2123: {
            name: 'Fried Fruit',
            id: 2123,
            value: 100,
            tradeable: true,



            itemImage: '/images/cooking/fried_fruit.png',
            extraTooltipInfo: 'Basically candy at this point.',
            class: 'cooking-ingredient',
            tags: ['consumable', 'food', 'cooking'],
            healing: {
                hp: 3,
                cooldown: 5000,
                perTick: 3,
                totalTicks: 20,
                tickDelay: 5000,
                ignoreCooldown: true,
            },
        },
        2124: {
            name: 'Grilled Veggies',
            id: 2124,
            value: 100,
            tradeable: true,



            itemImage: '/images/cooking/grilled_veggies.png',
            extraTooltipInfo: 'Grilled to perfection!',
            class: 'cooking-ingredient',
            tags: ['consumable', 'food', 'cooking'],
            healing: {
                hp: 3,
                cooldown: 5000,
                perTick: 3,
                totalTicks: 20,
                tickDelay: 5000,
                ignoreCooldown: true,
            },
        },
        2125: {
            name: 'Kebabs',
            id: 2125,
            value: 150,
            tradeable: true,



            itemImage: '/images/cooking/kababs.png',
            extraTooltipInfo: "The action man's food!",
            class: 'cooking-ingredient',
            tags: ['consumable', 'food', 'cooking'],
            healing: {
                hp: 18,
                cooldown: 10000,
                perTick: 18,
                totalTicks: 7,
                tickDelay: 5000,
                ignoreCooldown: false,
            },
        },
        2126: {
            name: 'Candied Fruit',
            id: 2126,
            value: 125,
            tradeable: true,



            itemImage: '/images/cooking/candied_fruit.png',
            extraTooltipInfo: 'Almost too sweet to handle!',
            class: 'cooking-ingredient',
            tags: ['consumable', 'food', 'cooking'],
            healing: {
                hp: 6,
                cooldown: 7500,
                perTick: 6,
                totalTicks: 10,
                tickDelay: 5000,
                ignoreCooldown: true,
            },
        },
        2127: {
            name: 'Milkshake',
            id: 2127,
            value: 75,
            tradeable: true,



            itemImage: '/images/cooking/milkshake.png',
            extraTooltipInfo: 'Brings all the boys to the raid!',
            class: 'cooking-ingredient',
            tags: ['consumable', 'food', 'cooking'],
            healing: {
                hp: 24,
                cooldown: 12500,
                perTick: 24,
                totalTicks: 5,
                tickDelay: 5000,
                ignoreCooldown: false,
            },
        },
        2128: {
            name: 'Vegetable Stew',
            id: 2128,
            value: 150,
            tradeable: true,



            itemImage: '/images/cooking/veggie_stew.png',
            extraTooltipInfo: 'Reminds you of home.',
            class: 'cooking-ingredient',
            tags: ['consumable', 'food', 'cooking'],
            healing: {
                hp: 18,
                cooldown: 10000,
                perTick: 18,
                totalTicks: 7,
                tickDelay: 5000,
                ignoreCooldown: false,
            },
        },
        2129: {
            name: 'Meaty Stew',
            id: 2129,
            value: 125,
            tradeable: true,



            itemImage: '/images/cooking/meaty_stew.png',
            extraTooltipInfo: 'Definitely not just fried chicken in a bowl of sauce!',
            class: 'cooking-ingredient',
            tags: ['consumable', 'food', 'cooking'],
            healing: {
                hp: 18,
                cooldown: 10000,
                perTick: 18,
                totalTicks: 7,
                tickDelay: 5000,
                ignoreCooldown: false,
            },
        },
        2130: {
            name: 'Monster Stew',
            id: 2130,
            value: 200,
            tradeable: true,



            itemImage: '/images/cooking/monster_stew.png',
            extraTooltipInfo: 'Parts of it are definitely still moving.',
            class: 'cooking-ingredient',
            tags: ['consumable', 'food', 'cooking'],
            healing: {
                hp: 18,
                cooldown: 10000,
                perTick: 18,
                totalTicks: 7,
                tickDelay: 5000,
                ignoreCooldown: false,
            },
        },
        2131: {
            name: 'Jerky',
            id: 2131,
            value: 75,
            tradeable: true,



            itemImage: '/images/cooking/jerky.png',
            extraTooltipInfo: 'A chewy treat.',
            class: 'cooking-ingredient',
            tags: ['consumable', 'food', 'cooking'],
            healing: {
                hp: 18,
                cooldown: 10000,
                perTick: 18,
                totalTicks: 7,
                tickDelay: 5000,
                ignoreCooldown: false,
            },
        },
        2132: {
            name: 'Pudding',
            id: 2132,
            value: 100,
            tradeable: true,



            itemImage: '/images/cooking/pudding.png',
            extraTooltipInfo: "The old man's favorite. Don't steal it!",
            class: 'cooking-ingredient',
            tags: ['consumable', 'food', 'cooking'],
            healing: {
                hp: 24,
                cooldown: 12500,
                perTick: 24,
                totalTicks: 5,
                tickDelay: 5000,
                ignoreCooldown: false,
            },
        },
        2133: {
            name: 'Ice Cream',
            id: 2133,
            value: 100,
            tradeable: true,



            itemImage: '/images/cooking/icecream.png',
            extraTooltipInfo: 'The ultimate dairy product. Comes with a free spoon!',
            class: 'cooking-ingredient',
            tags: ['consumable', 'food', 'cooking'],
            healing: {
                hp: 18,
                cooldown: 10000,
                perTick: 18,
                totalTicks: 7,
                tickDelay: 5000,
                ignoreCooldown: false,
            },
        },
        2134: {
            name: 'Monster Curry',
            id: 2134,
            value: 150,
            tradeable: true,



            itemImage: '/images/cooking/monster_curry.png',
            extraTooltipInfo: 'Might actually be mildly edible!',
            class: 'cooking-ingredient',
            tags: ['consumable', 'food', 'cooking'],
            healing: {
                hp: 24,
                cooldown: 12500,
                perTick: 24,
                totalTicks: 5,
                tickDelay: 5000,
                ignoreCooldown: false,
            },
        },
        2135: {
            name: 'Birdie Curry',
            id: 2135,
            value: 175,
            tradeable: true,



            itemImage: '/images/cooking/birdie_curry.png',
            extraTooltipInfo: 'Did you just put an entire chicken in this dish without preparing it first?',
            class: 'cooking-ingredient',
            tags: ['consumable', 'food', 'cooking'],
            healing: {
                hp: 24,
                cooldown: 12500,
                perTick: 24,
                totalTicks: 5,
                tickDelay: 5000,
                ignoreCooldown: false,
            },
        },
        2136: {
            name: 'Beast Curry',
            id: 2136,
            value: 175,
            tradeable: true,



            itemImage: '/images/cooking/beast_curry.png',
            extraTooltipInfo: 'Meat, spice, and everything nice! Or grain, mostly grain.',
            class: 'cooking-ingredient',
            tags: ['consumable', 'food', 'cooking'],
            healing: {
                hp: 24,
                cooldown: 12500,
                perTick: 24,
                totalTicks: 5,
                tickDelay: 5000,
                ignoreCooldown: false,
            },
        },
        2137: {
            name: 'Seafood Curry',
            id: 2137,
            value: 175,
            tradeable: true,



            itemImage: '/images/cooking/seafood_curry.png',
            extraTooltipInfo: "There's just a whole fish in there. Why did you do that?",
            class: 'cooking-ingredient',
            tags: ['consumable', 'food', 'cooking'],
            healing: {
                hp: 24,
                cooldown: 12500,
                perTick: 24,
                totalTicks: 5,
                tickDelay: 5000,
                ignoreCooldown: false,
            },
        },
        2138: {
            name: 'Monster Gelato',
            id: 2138,
            value: 225,
            tradeable: true,



            itemImage: '/images/cooking/monster_gelato.png',
            extraTooltipInfo: 'Only partially inedible!',
            class: 'cooking-ingredient',
            tags: ['consumable', 'food', 'cooking'],
            healing: {
                hp: 24,
                cooldown: 12500,
                perTick: 24,
                totalTicks: 5,
                tickDelay: 5000,
                ignoreCooldown: false,
            },
        },
        2139: {
            name: 'Common Potion',
            id: 2139,
            value: 100,
            tradeable: true,
            stackStrength: 1,
            stackMultiplier: 1,



            itemImage: '/images/cooking/alchemy/common.png',
            class: 'cooking-ingredient',
            tags: ['consumable', 'food', 'alchemy', 'cooking'],
            healing: {
                hp: 2,
                cooldown: 5000,
                perTick: 2,
                totalTicks: 10,
                tickDelay: 1000,
                ignoreCooldown: true,
            },
        },
        2140: {
            name: 'Common Concentrated Potion',
            id: 2140,
            value: 125,
            tradeable: true,
            stackStrength: 2,
            stackMultiplier: 3 / 4,



            itemImage: '/images/cooking/alchemy/common-concentrated.png',
            class: 'cooking-ingredient',
            tags: ['consumable', 'food', 'alchemy', 'cooking'],
            healing: {
                hp: 2,
                cooldown: 5000,
                perTick: 2,
                totalTicks: 10,
                tickDelay: 1000,
                ignoreCooldown: true,
            },
        },
        2141: {
            name: 'Common Large Potion',
            id: 2141,
            value: 125,
            tradeable: true,
            stackStrength: 1,
            stackMultiplier: 1.25,



            itemImage: '/images/cooking/alchemy/common-large.png',
            class: 'cooking-ingredient',
            tags: ['consumable', 'food', 'alchemy', 'cooking'],
            healing: {
                hp: 2,
                cooldown: 5000,
                perTick: 2,
                totalTicks: 10,
                tickDelay: 1000,
                ignoreCooldown: true,
            },
        },
        2142: {
            name: 'Rare Potion',
            id: 2142,
            value: 200,
            tradeable: true,
            stackStrength: 2,
            stackMultiplier: 1,



            itemImage: '/images/cooking/alchemy/rare.png',
            class: 'cooking-ingredient',
            tags: ['consumable', 'food', 'alchemy', 'cooking'],
            healing: {
                hp: 4,
                cooldown: 10000,
                perTick: 4,
                totalTicks: 10,
                tickDelay: 1000,
                ignoreCooldown: true,
            },
            rarity: 'rare',
        },
        2143: {
            name: 'Rare Concentrated Potion',
            id: 2143,
            value: 250,
            tradeable: true,
            stackStrength: 3,
            stackMultiplier: 3 / 4,



            itemImage: '/images/cooking/alchemy/rare-concentrated.png',
            class: 'cooking-ingredient',
            tags: ['consumable', 'food', 'alchemy', 'cooking'],
            healing: {
                hp: 4,
                cooldown: 10000,
                perTick: 4,
                totalTicks: 10,
                tickDelay: 1000,
                ignoreCooldown: true,
            },
            rarity: 'rare',
        },
        2144: {
            name: 'Rare Large Potion',
            id: 2144,
            value: 250,
            tradeable: true,
            stackStrength: 2,
            stackMultiplier: 1.25,



            itemImage: '/images/cooking/alchemy/rare-large.png',
            class: 'cooking-ingredient',
            tags: ['consumable', 'food', 'alchemy', 'cooking'],
            healing: {
                hp: 4,
                cooldown: 10000,
                perTick: 4,
                totalTicks: 10,
                tickDelay: 1000,
                ignoreCooldown: true,
            },
            rarity: 'rare',
        },
        2145: {
            name: 'Epic Potion',
            id: 2145,
            value: 300,
            tradeable: true,
            stackStrength: 3,
            stackMultiplier: 3 / 4,



            itemImage: '/images/cooking/alchemy/epic.png',
            class: 'cooking-ingredient',
            tags: ['consumable', 'food', 'alchemy', 'cooking'],
            healing: {
                hp: 6,
                cooldown: 15000,
                perTick: 6,
                totalTicks: 10,
                tickDelay: 1000,
                ignoreCooldown: true,
            },
            rarity: 'epic',
        },
        2146: {
            name: 'Epic Large Potion',
            id: 2146,
            value: 375,
            tradeable: true,
            stackStrength: 3,
            stackMultiplier: 1,



            itemImage: '/images/cooking/alchemy/epic-large.png',
            class: 'cooking-ingredient',
            tags: ['consumable', 'food', 'alchemy', 'cooking'],
            healing: {
                hp: 6,
                cooldown: 15000,
                perTick: 6,
                totalTicks: 10,
                tickDelay: 1000,
                ignoreCooldown: true,
            },
            rarity: 'epic',
        },
        2147: {
            name: 'Legendary Potion',
            id: 2147,
            value: 400,
            tradeable: true,
            stackStrength: 4,
            stackMultiplier: 33 / 50,



            itemImage: '/images/cooking/alchemy/legendary.png',
            class: 'cooking-ingredient',
            tags: ['consumable', 'food', 'alchemy', 'cooking'],
            healing: {
                hp: 8,
                cooldown: 20000,
                perTick: 8,
                totalTicks: 10,
                tickDelay: 1000,
                ignoreCooldown: true,
            },
            rarity: 'legendary',
        },
        2148: {
            name: 'Legendary Large Potion',
            id: 2148,
            value: 500,
            tradeable: true,
            stackStrength: 4,
            stackMultiplier: 1,



            itemImage: '/images/cooking/alchemy/legendary-large.png',
            class: 'cooking-ingredient',
            tags: ['consumable', 'food', 'alchemy', 'cooking'],
            healing: {
                hp: 8,
                cooldown: 20000,
                perTick: 8,
                totalTicks: 10,
                tickDelay: 1000,
                ignoreCooldown: true,
            },
            rarity: 'legendary',
        },
        2149: {
            name: 'Epic Concentrated Potion',
            id: 2149,
            value: 375,
            tradeable: true,
            stackStrength: 4,
            stackMultiplier: 3 / 4,



            itemImage: '/images/cooking/alchemy/epic-concentrated.png',
            class: 'cooking-ingredient',
            tags: ['consumable', 'food', 'alchemy', 'cooking'],
            healing: { hp: 6, cooldown: 15000, perTick: 6, totalTicks: 10, tickDelay: 1000 },
            rarity: 'epic',
        },
        3000: {
            name: 'Water Imbued Dust',
            id: 3000,
            craftingLevel: 60,
            value: 1,
            tradeable: true,
            craftingMultiplier: [8],
            craftingExperience: 60,
            ingredientTags: ['spice', 'grain'],



            skill: 'crafting',
            size: 1,
            difficulty: 1,
            cookingEnchantment: 8007,
            alchemySize: 1,
            itemImage: '/images/cooking/water_dust.png',
            craftingDescription:
                'Each craft results in 8 dust. Crushed up water runes. Not exactly a delicacy, but it might have some sort of effect when cooked.',
            extraTooltipInfo:
                'Crushed up water runes. Not exactly a delicacy, but it might have some sort of effect when cooked.',
            category: 'Dungeon',
            class: 'cooking-ingredient',
            tags: ['ingredient', 'cooking', 'crafting'],
            requiredResources: [{ 513: 32, 2014: 12 }],
            rarity: 'uncommon',
        },
        3001: {
            name: 'Empty Vial',
            id: 3001,
            value: 10,
            tradeable: true,
            craftingLevel: 1,
            craftingExperience: 5,
            requiredResources: [{ 2: 10, 110: 3 }],
            size: 1,
            difficulty: 3,
            alchemySize: 2,



            itemImage: '/images/cooking/alchemy/empty_vial.png',
            craftingDescription: 'A basic glass vial used in alchemy.',
            extraTooltipInfo:
                'An empty vial to pour a standard potion into. Using more than one in a recipe will not positively affect the produced potion.',
            class: 'cooking-ingredient',
            tags: ['ingredient', 'alchemy', 'cooking', 'crafting'],
            category: 'General',
        },
        3002: {
            name: 'Empty Large Vial',
            id: 3002,
            value: 30,
            tradeable: true,
            craftingLevel: 1,
            craftingExperience: 5,
            requiredResources: [{ 2: 30, 110: 3 }],
            size: 2,
            difficulty: 6,
            alchemySize: 1.5,



            itemImage: '/images/cooking/alchemy/empty_large_vial.png',
            craftingDescription: 'A large glass vial used in alchemy.',
            extraTooltipInfo:
                'A large empty vial to pour a large potion into. Using more than one in a recipe will not positively affect the produced potion.',
            class: 'cooking-ingredient',
            tags: ['ingredient', 'alchemy', 'cooking', 'crafting'],
            category: 'General',
        },
        3003: {
            name: 'Empty Reinforced Vial',
            id: 3003,
            value: 50,
            tradeable: true,
            craftingLevel: 1,
            craftingExperience: 5,
            requiredResources: [{ 2: 50, 110: 3 }],
            size: 3,
            difficulty: 9,
            alchemySize: 1,



            itemImage: '/images/cooking/alchemy/empty_reinforced_vial.png',
            craftingDescription: 'A reinforced glass vial used in alchemy.',
            extraTooltipInfo:
                'A reinforced empty vial to pour a concentrated potion into. Using more than one in a recipe will not positively affect the produced potion.',
            class: 'cooking-ingredient',
            tags: ['ingredient', 'alchemy', 'cooking', 'crafting'],
            category: 'General',
        },
        3004: {
            name: 'Watermelon',
            id: 3004,
            value: 150,
            tradeable: true,
            size: 3,
            difficulty: 3,
            alchemyEnchantment: 69,
            alchemySize: 1.5,
            experience: 35,
            ingredientTags: ['fruit'],
            itemImage: '/images/cooking/alchemy/ingredients/watermelon.png',
            extraTooltipInfo: "Good for gathering! Now you only need 999,999 more! Is it spelled 'Melon' or 'Mellon?'",
            class: 'cooking-ingredient',
            tags: ['ingredient', 'alchemy', 'cooking'],
        },
        3005: {
            name: 'Durian',
            id: 3005,
            value: 200,
            tradeable: true,
            size: 1,
            difficulty: 6,
            alchemySize: 2,
            alchemyEnchantment: 9,
            experience: 55,
            ingredientTags: ['vegetable', 'fruit'],
            itemImage: '/images/cooking/alchemy/ingredients/durian.png',
            extraTooltipInfo: "INFO's Favorite!",
            class: 'cooking-ingredient',
            tags: ['ingredient', 'alchemy', 'cooking'],
        },
        3006: {
            name: 'Onion',
            id: 3006,
            value: 30,
            tradeable: true,
            size: 2,
            difficulty: 2,
            alchemySize: 1,
            experience: 10,
            ingredientTags: ['vegetable'],
            itemImage: '/images/cooking/alchemy/ingredients/onion.png',
            extraTooltipInfo: "Makes you cry when it speaks. Luckily, it's incapable of speech. Or is it?",
            class: 'cooking-ingredient',
            tags: ['ingredient', 'alchemy', 'cooking'],
        },
        3007: {
            name: 'Mana Berry',
            id: 3007,
            value: 125,
            tradeable: true,
            size: 2,
            difficulty: 2,
            alchemyEnchantment: 61,
            alchemySize: 1.5,
            experience: 25,
            ingredientTags: ['fruit', 'spice'],
            itemImage: '/images/cooking/alchemy/ingredients/mana_berry.png',
            extraTooltipInfo: 'Named for its magic enhancing properties.',
            class: 'cooking-ingredient',
            tags: ['ingredient', 'alchemy', 'cooking'],
        },
        3008: {
            name: 'Thorny Root',
            id: 3008,
            value: 50,
            tradeable: true,
            size: 2,
            difficulty: 2,
            alchemySize: 1.5,
            experience: 10,
            ingredientTags: ['vegetable'],
            itemImage: '/images/cooking/alchemy/ingredients/thorn_1.png',
            extraTooltipInfo: 'This one would hurt to fall face first into!',
            class: 'cooking-ingredient',
            tags: ['ingredient', 'alchemy', 'cooking'],
        },
        3009: {
            name: 'Thorny Vine',
            id: 3009,
            value: 50,
            tradeable: true,
            size: 1.5,
            difficulty: 2,
            alchemySize: 2,
            experience: 10,
            ingredientTags: ['vegetable'],
            itemImage: '/images/cooking/alchemy/ingredients/thorn_2.png',
            extraTooltipInfo: "Don't let this one snag you by surprise!",
            class: 'cooking-ingredient',
            tags: ['ingredient', 'alchemy', 'cooking'],
        },
        3010: {
            name: 'Tangle Root',
            id: 3010,
            value: 80,
            tradeable: true,
            size: 2,
            difficulty: 4,
            alchemySize: 2.5,
            experience: 20,
            ingredientTags: ['vegetable'],
            itemImage: '/images/cooking/alchemy/ingredients/root.png',
            extraTooltipInfo: 'Would probably try to trip someone if it was still in the ground.',
            class: 'cooking-ingredient',
            tags: ['ingredient', 'alchemy', 'cooking'],
        },
        3011: {
            name: 'Mandrake',
            id: 3011,
            value: 140,
            tradeable: true,
            size: 2,
            difficulty: 6,
            alchemySize: 3,
            experience: 30,
            ingredientTags: ['vegetable'],
            itemImage: '/images/cooking/alchemy/ingredients/mandrake.png',
            extraTooltipInfo: 'WIP',
            class: 'cooking-ingredient',
            tags: ['ingredient', 'alchemy', 'cooking'],
        },
        3012: {
            name: 'Jellyfish',
            id: 3012,
            value: 200,
            tradeable: true,
            size: 2.5,
            difficulty: 2.5,
            alchemySize: 2,
            experience: 50,
            ingredientTags: ['fish'],
            itemImage: '/images/cooking/alchemy/ingredients/jellyfish.png',
            extraTooltipInfo: 'How would it taste on a sandwich, you wonder.',
            class: 'cooking-ingredient',
            tags: ['ingredient', 'alchemy', 'cooking'],
        },
        3013: {
            name: 'Frost Flowers',
            id: 3013,
            value: 180,
            tradeable: true,
            size: 1 / 4,
            difficulty: 9,
            alchemySize: 4,
            experience: 40,
            ingredientTags: ['vegetable', 'spice'],
            itemImage: '/images/cooking/alchemy/ingredients/frost_flowers.png',
            extraTooltipInfo: 'Perpetually cold. Does it remind you of home?',
            class: 'cooking-ingredient',
            tags: ['ingredient', 'alchemy', 'cooking'],
        },
        3014: {
            name: 'Black Berry',
            id: 3014,
            value: 20,
            tradeable: true,
            size: 0.5,
            difficulty: 0.5,
            alchemySize: 2,
            ingredientTags: ['fruit', 'sweetener'],
            experience: 5,
            itemImage: '/images/cooking/alchemy/ingredients/blackberry.png',
            extraTooltipInfo: "It doesn't know how to speak.",
            class: 'cooking-ingredient',
            tags: ['ingredient', 'alchemy', 'cooking'],
        },
        3015: {
            name: 'Fairy Dust',
            id: 3015,
            value: 165,
            tradeable: true,
            size: 1 / 4,
            difficulty: 7,
            alchemySize: 3.5,
            experience: 35,
            ingredientTags: ['spice'],
            itemImage: '/images/cooking/alchemy/ingredients/fairy_dust.png',
            extraTooltipInfo: "Not actually from a Fairy. Everybody knows Fairies aren't real!",
            class: 'cooking-ingredient',
            tags: ['ingredient', 'alchemy', 'cooking'],
        },
        3016: {
            name: 'Lotus Flower',
            id: 3016,
            value: 300,
            tradeable: true,
            size: 1,
            difficulty: 11,
            alchemySize: 5.5,
            experience: 55,
            ingredientTags: ['vegetable', 'spice'],
            itemImage: '/images/cooking/alchemy/ingredients/lotus.png',
            extraTooltipInfo: 'WIP',
            class: 'cooking-ingredient',
            tags: ['ingredient', 'alchemy', 'cooking'],
        },
        3017: {
            name: 'Four-leaf Clover',
            id: 3017,
            value: 777,
            tradeable: true,
            size: 1,
            difficulty: 4,
            alchemySize: 1,
            alchemyEnchantment: 32,
            experience: 77,
            ingredientTags: ['vegetable'],
            itemImage: '/images/cooking/alchemy/ingredients/lucky_clover.png',
            extraTooltipInfo: 'Very lucky!',
            class: 'cooking-ingredient',
            tags: ['ingredient', 'alchemy', 'cooking'],
        },
        3018: {
            name: 'Glow Spore Shroom',
            id: 3018,
            value: 90,
            tradeable: true,
            size: 1 / 4,
            difficulty: 5,
            alchemySize: 3,
            experience: 25,
            ingredientTags: ['vegetable'],
            itemImage: '/images/cooking/alchemy/ingredients/glow_spores.png',
            extraTooltipInfo: 'The mushroom itself is actually useless with only the spores having value.',
            class: 'cooking-ingredient',
            tags: ['ingredient', 'alchemy', 'cooking'],
        },
        3019: {
            name: 'Pineapple',
            id: 3019,
            value: 70,
            tradeable: true,
            size: 2.5,
            difficulty: 3,
            alchemySize: 2,
            experience: 15,
            ingredientTags: ['fruit'],
            itemImage: '/images/cooking/alchemy/ingredients/pineapple.png',
            extraTooltipInfo: 'Does it go on pizza or not?',
            class: 'cooking-ingredient',
            tags: ['ingredient', 'alchemy', 'cooking'],
        },
        3020: {
            name: 'Ghost Shrooms',
            id: 3020,
            value: 160,
            tradeable: true,
            size: 1,
            difficulty: 6.5,
            alchemySize: 3.25,
            experience: 30,
            ingredientTags: ['vegetable'],
            itemImage: '/images/cooking/alchemy/ingredients/ghost_shrooms.png',
            extraTooltipInfo: 'A handful of very pale, small mushrooms that emit the barest amount of light.',
            class: 'cooking-ingredient',
            tags: ['ingredient', 'alchemy', 'cooking'],
        },
        3021: {
            name: 'Yellow Pepper',
            id: 3021,
            value: 160,
            tradeable: true,
            size: 2,
            difficulty: 3,
            alchemySize: 2,
            experience: 30,
            alchemyEnchantment: 68,
            ingredientTags: ['vegetable'],
            itemImage: '/images/cooking/alchemy/ingredients/yellow_pepper.png',
            extraTooltipInfo: 'It may be a yellow pepper, but it is Red Hot! ... Sorry.',
            class: 'cooking-ingredient',
            tags: ['ingredient', 'alchemy', 'cooking'],
        },
        4000: {
            id: 4000,
            name: 'Bone',
            value: 75,
            tradeable: true,



            itemImage: '/images/combat/materials/bone.png',
            class: 'fur',
            extraTooltipInfo: 'Used as a crafting material.',
            tags: ['foraging'],
        },
        4001: {
            id: 4001,
            name: 'Bone Plate',
            value: 150,
            tradeable: true,



            itemImage: '/images/combat/materials/bone_plate.png',
            class: 'fur',
            extraTooltipInfo: 'Used as a crafting material.',
            tags: ['foraging'],
        },
        4002: {
            id: 4002,
            name: 'Chitin',
            value: 2750,
            tradeable: true,



            itemImage: '/images/combat/materials/chitin_2.png',
            class: 'leather',
            extraTooltipInfo: 'Used as a crafting material.',
            tags: ['foraging'],
        },
        4003: {
            id: 4003,
            name: 'Heavy Chitin',
            value: 3750,
            tradeable: true,



            itemImage: '/images/combat/materials/heavy_chitin.png',
            class: 'leather',
            extraTooltipInfo: 'Used as a crafting material.',
            tags: ['foraging'],
        },
        4004: {
            id: 4004,
            name: 'Fur',
            value: 150,
            tradeable: true,



            itemImage: '/images/combat/materials/fur.png',
            class: 'fur',
            extraTooltipInfo: 'Used as a crafting material.',
            tags: ['foraging'],
        },
        4005: {
            id: 4005,
            name: 'Thick Fur',
            value: 225,
            tradeable: true,



            itemImage: '/images/combat/materials/thick_fur.png',
            class: 'fur',
            extraTooltipInfo: 'Used as a crafting material.',
            tags: ['foraging'],
        },
        4006: {
            id: 4006,
            name: 'Wool',
            value: 200,
            tradeable: true,



            itemImage: '/images/combat/materials/wool.png',
            class: 'fur',
            extraTooltipInfo: 'Used as a crafting material.',
            tags: ['foraging'],
        },
        4007: {
            id: 4007,
            name: 'Hide',
            value: 50,
            tradeable: true,



            itemImage: '/images/combat/materials/hide.png',
            class: 'fur',
            extraTooltipInfo: 'Used as a crafting material.',
            tags: ['foraging'],
        },
        4008: {
            id: 4008,
            name: 'Rough Hide',
            value: 125,
            tradeable: true,



            itemImage: '/images/combat/materials/rough_hide.png',
            class: 'fur',
            extraTooltipInfo: 'Used as a crafting material.',
            tags: ['foraging'],
        },
        4009: {
            id: 4009,
            name: 'Scale',
            value: 1250,
            tradeable: true,



            itemImage: '/images/combat/materials/scale.png',
            class: 'leather',
            extraTooltipInfo: 'Used as a crafting material.',
            tags: ['foraging'],
        },
        4010: {
            id: 4010,
            name: 'Heavy Scale',
            value: 1750,
            tradeable: true,



            itemImage: '/images/combat/materials/heavy_scale.png',
            class: 'leather',
            extraTooltipInfo: 'Used as a crafting material.',
            tags: ['foraging'],
        },
        4011: {
            id: 4011,
            name: 'Crystal Scale',
            value: 3000,
            tradeable: true,



            itemImage: '/images/combat/materials/crystal_scale.png',
            class: 'leather',
            extraTooltipInfo: 'Used as a crafting material.',
            tags: ['foraging'],
        },
        4012: {
            id: 4012,
            name: 'Leather',
            value: 300,
            tradeable: true,
            category: 'Range',
            craftingLevel: 15,
            craftingExperience: 10,
            requiredResources: [
                { 2013: 10, 4004: 10 },
                { 2013: 10, 4007: 7 },
                { 2013: 10, 4008: 5 },
            ],



            itemImage: '/images/combat/materials/leather.png',
            class: 'leather',
            extraTooltipInfo: 'Used as a crafting material.',
            tags: ['crafting', 'foraging'],
        },
        4013: {
            id: 4013,
            name: 'Rough Cloth',
            value: 30,
            tradeable: true,
            experience: 50,
            level: 1,



            time: 5000,
            requiredResources: [{ 4020: 5 }],
            itemImage: '/images/combat/materials/rough_cloth.png',
            skillIcon: '/images/runecrafting/RuneCraftingIcon.png',
            class: 'cloth',
            extraTooltipInfo: 'Used as a crafting material.',
            tags: ['runecrafting'],
        },
        4014: {
            id: 4014,
            name: 'Restored Cloth',
            value: 60,
            tradeable: true,
            experience: 75,
            level: 10,



            time: 5000,
            requiredResources: [{ 4020: 10 }],
            itemImage: '/images/combat/materials/restored_cloth.png',
            skillIcon: '/images/runecrafting/RuneCraftingIcon.png',
            class: 'cloth',
            extraTooltipInfo: 'Used as a crafting material.',
            tags: ['runecrafting'],
        },
        4015: {
            id: 4015,
            name: 'Lesser Cloth',
            value: 150,
            tradeable: true,
            experience: 125,
            level: 20,



            time: 5000,
            requiredResources: [{ 4021: 5 }],
            itemImage: '/images/combat/materials/lesser_cloth.png',
            skillIcon: '/images/runecrafting/RuneCraftingIcon.png',
            class: 'cloth',
            extraTooltipInfo: 'Used as a crafting material.',
            tags: ['runecrafting'],
        },
        4016: {
            id: 4016,
            name: 'Imbued Cloth',
            value: 500,
            tradeable: true,
            experience: 200,
            level: 30,



            time: 5000,
            requiredResources: [{ 4022: 5 }],
            itemImage: '/images/combat/materials/imbued_cloth.png',
            skillIcon: '/images/runecrafting/RuneCraftingIcon.png',
            class: 'cloth',
            extraTooltipInfo: 'Used as a crafting material.',
            tags: ['runecrafting'],
        },
        4017: {
            id: 4017,
            name: 'Greater Cloth',
            value: 1000,
            tradeable: true,
            experience: 300,
            level: 40,



            time: 5000,
            requiredResources: [{ 4023: 5 }],
            itemImage: '/images/combat/materials/greater_cloth.png',
            skillIcon: '/images/runecrafting/RuneCraftingIcon.png',
            class: 'cloth',
            extraTooltipInfo: 'Used as a crafting material.',
            tags: ['runecrafting'],
        },
        4018: {
            id: 4018,
            name: 'Major Cloth',
            value: 2000,
            tradeable: true,
            experience: 500,
            level: 50,



            time: 5000,
            requiredResources: [{ 4024: 5 }],
            itemImage: '/images/combat/materials/major_cloth.png',
            skillIcon: '/images/runecrafting/RuneCraftingIcon.png',
            class: 'cloth',
            extraTooltipInfo: 'Used as a crafting material.',
            tags: ['runecrafting'],
            rarity: 'uncommon',
        },
        4019: {
            id: 4019,
            name: 'Elder Cloth',
            value: 4000,
            tradeable: true,
            experience: 750,
            level: 60,



            time: 5000,
            requiredResources: [{ 4025: 5 }],
            itemImage: '/images/combat/materials/elder_cloth.png',
            skillIcon: '/images/runecrafting/RuneCraftingIcon.png',
            class: 'cloth',
            extraTooltipInfo: 'Used as a crafting material.',
            tags: ['runecrafting'],
            rarity: 'rare',
        },
        4020: {
            id: 4020,
            name: 'Aqueous Grass',
            value: 30,
            tradeable: true,



            itemImage: '/images/fishing/material/fiber_1.png',
            class: 'fiber',
            extraTooltipInfo:
                'Some aqueous grass that was stuck to your fishing tools. It appears to be weakly magical. Used as a crafting material.',
            tags: ['fishing'],
        },
        4021: {
            id: 4021,
            name: 'Water Weeds',
            value: 60,
            tradeable: true,



            itemImage: '/images/fishing/material/fiber_2.png',
            class: 'fiber',
            extraTooltipInfo:
                'Water weeds that appear to have been exposed to some sort of magical source. Used as a crafting material.',
            tags: ['fishing'],
        },
        4022: {
            id: 4022,
            name: 'River Vines',
            value: 90,
            tradeable: true,



            itemImage: '/images/fishing/material/fiber_3.png',
            class: 'fiber',
            extraTooltipInfo:
                'Thick underwater vines found predominantly in rivers. These give off a faint magical aura. Used as a crafting material.',
            tags: ['fishing'],
        },
        4023: {
            id: 4023,
            name: 'Violet Ribbons',
            value: 120,
            tradeable: true,



            itemImage: '/images/fishing/material/fiber_4.png',
            class: 'fiber',
            extraTooltipInfo: 'Violet aquatic plants that radiate magical potential. Used as a crafting material.',
            tags: ['fishing'],
        },
        4024: {
            id: 4024,
            name: 'White Reeds',
            value: 150,
            tradeable: true,



            itemImage: '/images/fishing/material/fiber_5.png',
            class: 'fiber',
            extraTooltipInfo:
                'Aquatic reeds that appear to have grown near a font of magical energy and maintained some of its characteristics. Used as a crafting material.',
            tags: ['fishing'],
        },
        4025: {
            id: 4025,
            name: 'Ancient Kelp',
            value: 200,
            tradeable: true,



            itemImage: '/images/fishing/material/fiber_6.png',
            class: 'fiber',
            extraTooltipInfo:
                'Kelp that has been magically sustained for ages. Potent energy can be felt coursing through its fibers. Used as a crafting material.',
            tags: ['fishing'],
        },
        4026: {
            id: 4026,
            name: 'Aqueous Chunks',
            value: 35000,
            tradeable: true,
            itemImage: '/images/combat/materials/aqueous_chunks.png',
            class: 'bar',
            extraTooltipInfo:
                'A chunk of stone supposedly from the bottom of the ocean. Still pulses with latent magical energy; perhaps it could be used to augment something?',
            tags: ['magic', 'mining', 'smithing'],
        },
        4027: {
            id: 4027,
            name: 'Ice Stone',
            value: 50000,
            tradeable: true,
            itemImage: '/images/combat/materials/ice_stone.png',
            class: 'bar',
            extraTooltipInfo:
                'A chunk of ice that never melts. The magic keeping it solid could be channeled somewhere by a skill enchanter.',
            tags: ['magic', 'mining', 'smithing'],
        },
        4028: {
            id: 4028,
            name: 'Elder Stone',
            value: 1500000,
            tradeable: true,
            itemImage: '/images/combat/materials/elder_stone.png',
            class: 'bar',
            extraTooltipInfo: 'A condensed shard of Elder Magic formerly owned by the Elves.',
            tags: ['magic', 'mining', 'smithing'],
            rarity: 'rare',
        },
        4500: {
            id: 4500,
            name: 'Box Trap',
            level: 1,
            value: 25,
            experience: 5,
            farmingExperience: 30,
            time: 30,
            tradeable: true,
            seedHeight: 1,
            seedWidth: 1,
            yield: [
                { chance: 1, id: 4000, min: 1, max: 1 },
                { chance: 1, id: 4007, min: 1, max: 8 },
                { chance: 1 / 4, id: 4007, min: 1, max: 8 },
                { chance: 0.2, id: 4004, min: 1, max: 6 },
                { chance: 0.1, id: 4008, min: 1, max: 3 },
                { chance: 0.5, id: 2000, min: 1, max: 1 },
                { chance: 0.5, id: 700, min: 4, max: 8 },
            ],
            class: 'seed',
            category: 'Farming',
            craftingLevel: 1,
            craftingExperience: 30,
            requiredResources: [{ 302: 33 }, { 303: 27 }, { 304: 21 }],



            itemImage: '/images/farming/hunting/box_trap.png',
            plantImage: '/images/farming/hunting/box_trap.png',
            craftingDescription: 'A box trap with bait only suitable to catch small game.',
            extraTooltipInfo: 'A box trap with bait only suitable to catch small game.',
            tags: ['seed', 'hunting', 'farming', 'crafting'],
        },
        4501: {
            id: 4501,
            name: 'Pitfall Trap',
            level: 10,
            value: 50,
            experience: 10,
            farmingExperience: 100,
            time: 35,
            tradeable: true,
            seedHeight: 1,
            seedWidth: 1,
            yield: [
                { chance: 1, id: 4000, min: 1, max: 2 },
                { chance: 1, id: 4007, min: 1, max: 4 },
                { chance: 1 / 4, id: 4007, min: 1, max: 8 },
                { chance: 0.5, id: 4004, min: 1, max: 4 },
                { chance: 0.2, id: 4008, min: 1, max: 2 },
            ],
            class: 'seed',
            category: 'Farming',
            craftingLevel: 20,
            craftingExperience: 200,
            requiredResources: [{ 303: 50 }, { 304: 44 }, { 305: 38 }],



            itemImage: '/images/farming/hunting/pitfall.png',
            plantImage: '/images/farming/hunting/pitfall.png',
            craftingDescription: 'A pitfall trap with bait suitable to catch small and medium sized game.',
            extraTooltipInfo: 'A pitfall trap with bait suitable to catch small and medium sized game.',
            tags: ['seed', 'hunting', 'farming', 'crafting'],
        },
        4502: {
            id: 4502,
            name: 'Bird Trap',
            level: 20,
            value: 100,
            experience: 10,
            farmingExperience: 325,
            time: 120,
            tradeable: true,
            seedHeight: 1,
            seedWidth: 1,
            yield: [
                { chance: 3 / 4, id: 2000, min: 1, max: 1 },
                { chance: 1 / 200, id: 185, min: 1, max: 1 },
                { chance: 1 / 100, id: 150, min: 1, max: 3 },
                { chance: 1, id: 4000, min: 1, max: 2 },
                { chance: 0.5, id: 1, min: 1, max: 1 },
                { chance: 1 / 4, id: 4004, min: 1, max: 1 },
                { chance: 1 / 1000, id: 400, min: 1, max: 3 },
                { chance: 1 / 1250, id: 401, min: 1, max: 2 },
                { chance: 1 / 1500, id: 402, min: 1, max: 1 },
                { chance: 1 / 1750, id: 403, min: 1, max: 1 },
                { chance: 1 / 2000, id: 404, min: 1, max: 1 },
                { id: 151, chance: 1 / 75, min: 1, max: 1 },
                { id: 152, chance: 1 / 75, min: 1, max: 1 },
                { id: 153, chance: 1 / 75, min: 1, max: 1 },
                { id: 154, chance: 1 / 100, min: 1, max: 1 },
                { id: 155, chance: 1 / 100, min: 1, max: 1 },
                { id: 156, chance: 1 / 100, min: 1, max: 1 },
                { id: 157, chance: 1 / 125, min: 1, max: 1 },
                { id: 158, chance: 1 / 125, min: 1, max: 1 },
                { id: 159, chance: 1 / 125, min: 1, max: 1 },
                { id: 160, chance: 1 / 150, min: 1, max: 1 },
                { id: 161, chance: 1 / 150, min: 1, max: 1 },
                { id: 170, chance: 1 / 250, min: 1, max: 1 },
                { id: 171, chance: 1 / 250, min: 1, max: 1 },
                { id: 172, chance: 1 / 250, min: 1, max: 1 },
                { id: 173, chance: 1 / 250, min: 1, max: 1 },
                { id: 174, chance: 1 / 250, min: 1, max: 1 },
                { id: 175, chance: 1 / 250, min: 1, max: 1 },
                { id: 176, chance: 1 / 250, min: 1, max: 1 },
                { id: 901, chance: 1 / 200, min: 1, max: 1 },
            ],
            class: 'seed',
            category: 'Farming',
            craftingLevel: 30,
            craftingExperience: 300,
            requiredResources: [{ 304: 75 }, { 305: 65 }, { 306: 55 }],



            itemImage: '/images/farming/hunting/bird_trap.png',
            plantImage: '/images/farming/hunting/bird_trap.png',
            craftingDescription: 'A bird trap with bait suitable to catch small flying creatures.',
            extraTooltipInfo: 'A bird trap with bait suitable to catch small flying creatures.',
            tags: ['seed', 'hunting', 'farming', 'crafting'],
        },
        4503: {
            id: 4503,
            name: 'Net Trap',
            level: 30,
            value: 125,
            experience: 10,
            farmingExperience: 300,
            time: 45,
            tradeable: true,
            seedHeight: 1,
            seedWidth: 1,
            yield: [
                { chance: 1, id: 4000, min: 1, max: 4 },
                { chance: 1 / 4, id: 4001, min: 1, max: 4 },
                { chance: 1 / 8, id: 4002, min: 1, max: 4 },
                { chance: 1 / 8, id: 4003, min: 1, max: 4 },
                { chance: 1 / 8, id: 4004, min: 1, max: 4 },
                { chance: 1 / 8, id: 4005, min: 1, max: 4 },
                { chance: 1 / 8, id: 4007, min: 1, max: 4 },
                { chance: 1 / 8, id: 4008, min: 1, max: 4 },
                { chance: 1 / 8, id: 4009, min: 1, max: 4 },
                { chance: 1 / 8, id: 4010, min: 1, max: 4 },
            ],
            class: 'seed',
            category: 'Farming',
            craftingLevel: 40,
            craftingExperience: 400,
            requiredResources: [{ 304: 90 }, { 305: 80 }, { 306: 70 }],



            itemImage: '/images/farming/hunting/net_trap.png',
            plantImage: '/images/farming/hunting/net_trap.png',
            craftingDescription: 'A net trap with bait suitable to catch most creatures.',
            extraTooltipInfo: 'A net trap with bait suitable to catch most creatures.',
            tags: ['seed', 'hunting', 'farming', 'crafting'],
        },
        4504: {
            id: 4504,
            name: 'Bear Trap',
            level: 40,
            value: 150,
            farmingExperience: 400,
            time: 50,
            tradeable: true,
            seedHeight: 1,
            seedWidth: 1,
            yield: [
                { chance: 1, id: 4000, min: 1, max: 8 },
                { chance: 3 / 4, id: 4001, min: 1, max: 8 },
                { chance: 1 / 4, id: 4002, min: 1, max: 8 },
                { chance: 1 / 16, id: 4003, min: 1, max: 2 },
                { chance: 1 / 4, id: 4008, min: 1, max: 6 },
                { chance: 1 / 4, id: 4009, min: 1, max: 6 },
                { chance: 1 / 16, id: 4010, min: 1, max: 2 },
            ],
            class: 'seed',
            category: 'Farming',
            craftingLevel: 50,
            craftingExperience: 500,
            requiredResources: [{ 305: 90 }, { 306: 80 }, { 307: 45 }],



            itemImage: '/images/farming/hunting/metal_trap.png',
            plantImage: '/images/farming/hunting/metal_trap.png',
            craftingDescription: 'A bear trap with bait only suitable to catch large and medium sized creatures.',
            extraTooltipInfo: 'A bear trap with bait only suitable to catch large and medium sized creatures.',
            tags: ['seed', 'hunting', 'farming', 'crafting'],
            rarity: 'uncommon',
        },
        4505: {
            id: 4505,
            name: 'Water Totem',
            level: 40,
            value: 150,
            farmingExperience: 10000,
            time: 10080,
            tradeable: true,
            seedHeight: 1,
            seedWidth: 1,
            yield: [{ chance: 0, id: 1, min: 1, max: 1 }],
            class: 'seed',
            category: 'Farming',
            craftingLevel: 66,
            craftingExperience: 2000,
            requiredResources: [{ 513: 5000, 11032: 10 }],



            itemImage: '/images/farming/totem/water_totem_mj_v2.png',
            plantImage: '/images/farming/totem/water_totem_mj_v2.png',
            craftingDescription:
                'A totem that periodically summons rainstorms. Has up to a 10% chance every farming tick to advance every plot by one growth stage. Its effect grows as it ages. Multiple totems will not increase its effect.',
            extraTooltipInfo:
                'A totem that periodically summons rainstorms. Has up to a 10% chance every farming tick to advance every plot by one growth stage. Its effect grows as it ages. Multiple totems will not increase its effect.',
            tags: ['seed', 'farming', 'crafting'],
            rarity: 'rare',
        },
        4506: {
            id: 4506,
            name: 'Nature Totem',
            level: 40,
            value: 150,
            farmingExperience: 10000,
            time: 10080,
            tradeable: true,
            seedHeight: 1,
            seedWidth: 1,
            yield: [{ chance: 0, id: 1, min: 1, max: 1 }],
            class: 'seed',
            category: 'Farming',
            craftingLevel: 66,
            craftingExperience: 2000,
            requiredResources: [{ 109: 1000, 517: 5000 }],



            itemImage: '/images/farming/totem/nature_orb.png',
            plantImage: '/images/farming/totem/nature_orb.png',
            craftingDescription:
                'A totem that imbues your farmland with nature energy. Has up to a 10% chance to make any automatic replant cost nothing. Its effect grows as it ages. Multiple totems will not increase its effect.',
            extraTooltipInfo:
                'A totem that imbues your farmland with nature energy. Has up to a 10% chance to make any automatic replant cost nothing. Its effect grows as it ages. Multiple totems will not increase its effect.',
            tags: ['seed', 'farming', 'crafting'],
            rarity: 'rare',
        },
        4507: {
            id: 4507,
            name: 'Earth Totem',
            level: 40,
            value: 150,
            farmingExperience: 10000,
            time: 10080,
            tradeable: true,
            seedHeight: 1,
            seedWidth: 1,
            yield: [{ chance: 0, id: 1, min: 1, max: 1 }],
            class: 'seed',
            category: 'Farming',
            craftingLevel: 66,
            craftingExperience: 2000,
            requiredResources: [{ 109: 1000, 511: 5000 }],



            itemImage: '/images/farming/totem/earth_orb.png',
            plantImage: '/images/farming/totem/earth_orb.png',
            craftingDescription:
                "A totem that enhances your farmland's soil. Has up to a 10% chance to increase yields by up to 50% based on totem age. Its effect grows as it ages. Multiple totems will not increase its effect.",
            extraTooltipInfo:
                "A totem that enhances your farmland's soil. Has up to a 10% chance to increase yields by up to 50% based on totem age. Its effect grows as it ages. Multiple totems will not increase its effect.",
            tags: ['seed', 'farming', 'crafting'],
            rarity: 'rare',
        },
        4508: {
            id: 4508,
            name: 'Coalescing Totem',
            level: 40,
            value: 150,
            farmingExperience: 10000,
            time: 10080,
            tradeable: true,
            seedHeight: 1,
            seedWidth: 1,
            yield: [{ chance: 0, id: 1, min: 1, max: 1 }],
            class: 'seed',
            category: 'Farming',
            craftingLevel: 66,
            craftingExperience: 2000,
            requiredResources: [{ 109: 1000, 516: 3000, 517: 3000 }],



            itemImage: '/images/farming/totem/condensed_orb.png',
            plantImage: '/images/farming/totem/condensed_orb.png',
            craftingDescription:
                'A totem that coalesces various energies into a single form. Mysteriously enhances your farm based on the variety of things on your plots, having plants with varying plot requirements and times to grow increases the power of this totem. Multiple totems will not increase its effect.',
            extraTooltipInfo:
                'A totem that coalesces various energies into a single form. Mysteriously enhances your farm based on the variety of things on your plots, having plants with varying plot requirements and times to grow increases the power of this totem. Its effect grows as it ages. Multiple totems will not increase its effect.',
            tags: ['seed', 'farming', 'crafting'],
            rarity: 'rare',
        },
        5000: {
            name: 'Shrimp Bauble',
            id: 5000,
            tradeable: false,
            enchantmentTier: 0,
            value: 10,
            augmentationCost: { 9: 1000 },
            itemImage: '/images/misc/shrimp_bauble.png',
            class: 'key',
            extraTooltipInfo: 'Untamed magic oozes out from inside.',
            tags: [],
            augmentingFailItem: 9015,
            augmentingForcedAmount: 1,
            forcedAugmentChance: 0.5,
        },
        5001: {
            id: 5001,
            name: 'Shrimp',
            tradeable: false,
            enchantmentTier: 0,
            augmentationCost: { 60: 1 },



            itemImage: '/images/misc/schfftph_fzzglgl.png',
            class: 'fish',
            extraTooltipInfo: "One of perfection's many forms.",
            tags: ['ingredient', 'crafting'],
        },
        5002: {
            id: 5002,
            name: 'Shrimp Ascendant',
            tradeable: false,
            enchantmentTier: 0,
            augmentationCost: { 60: 1 },



            itemImage: '/images/misc/schfftph_fzzglgl_kakfzz.png',
            class: 'fish',
            extraTooltipInfo: 'Perfection comes in many forms, but this is a perversion of the art.',
            tags: ['ingredient', 'crafting'],
        },
        6000: {
            id: 6000,
            name: 'Gold Medal',
            tradeable: false,
            itemImage: '/images/ui/highscore_gold.png',
            extraTooltipInfo: 'First place award!',
            class: 'gold-medal',
            tags: ['unique'],
        },
        6001: {
            id: 6001,
            name: 'Silver Medal',
            tradeable: false,
            itemImage: '/images/ui/highscore_silver.png',
            extraTooltipInfo: 'Second place award!',
            class: 'silver-medal',
            tags: ['unique'],
        },
        6002: {
            id: 6002,
            name: 'Bronze Medal',
            tradeable: false,
            itemImage: '/images/ui/highscore_bronze.png',
            extraTooltipInfo: 'Third place award!',
            class: 'bronze-medal',
            tags: ['unique'],
        },
        6950: {
            id: 6950,
            name: 'Event Token',
            tradeable: false,
            itemImage: '/images/misc/event_token.png',
            extraTooltipInfo: 'Can be spent in the Event Shop for various event related items and buffs.',
            class: 'gold-medal',
            tags: ['event'],
        },
        7000: {
            id: 7000,
            name: 'Snow',
            tradeable: false,
            itemImage: '/images/christmas/snow.png',
            extraTooltipInfo: 'Used to make Snowballs!',
            class: 'christmas-drop',
            tags: [],
        },
        7001: {
            id: 7001,
            name: 'Snowball',
            craftingLevel: 1,
            tradeable: false,
            craftingExperience: 1,



            itemImage: '/images/christmas/snowball.png',
            extraTooltipInfo: "Use '/throw NAME' to throw at people!",
            class: 'christmas-drop',
            category: 'Event',
            tags: ['crafting'],
            requiredResources: [{ 7000: 100 }],
        },
        7002: {
            id: 7002,
            name: 'Wrapping Paper',
            tradeable: false,
            itemImage: '/images/christmas/wrapping_paper.png',



            extraTooltipInfo: 'Born to be torn apart',
            class: 'christmas-drop',
            tags: ['crafting'],
        },
        7003: {
            id: 7003,
            name: 'Present',
            tradeable: false,



            itemImage: '/images/christmas/present.png',
            canBeOpened: true,
            extraTooltipInfo: 'Merry Christmas!',
            class: 'christmas-present',
            tags: [],
            rarity: 'rare',
        },
        7004: {
            id: 7004,
            name: 'Cookie Dough',
            tradeable: false,
            ingredientTags: ['christmas', 'sweetener'],
            level: 1,
            experience: 1,



            skill: 'crafting',
            size: 1,
            difficulty: 1,
            itemImage: '/images/christmas/cookie_dough.png',
            extraTooltipInfo: 'It smells like cookies',
            class: 'christmas-food',
            time: 1000,
            tags: ['ingredient', 'consumable', 'food', 'cooking', 'crafting'],
        },
        7005: {
            id: 7005,
            name: 'Cookie',
            tradeable: false,



            itemImage: '/images/christmas/cookie.png',
            extraTooltipInfo: 'It reminds you of your childhood',
            class: 'christmas-food',
            tags: ['consumable', 'food', 'cooking'],
            healing: {
                hp: 6,
                cooldown: 7500,
                perTick: 6,
                totalTicks: 10,
                tickDelay: 5000,
                ignoreCooldown: true,
            },
        },
        7006: {
            id: 7006,
            name: 'Gummy Fish',
            tradeable: false,
            level: 1,
            experience: 1,



            itemImage: '/images/christmas/gummy_fish.png',
            extraTooltipInfo: 'Delicious candy!',
            class: 'christmas-drop',
            time: 1000,
            tags: ['ingredient', 'consumable', 'food', 'fishing'],
        },
        7007: {
            id: 7007,
            name: 'Gummy Shark Fin',
            tradeable: false,
            itemImage: '/images/christmas/gummy_shark_fin.png',
            extraTooltipInfo: 'Looks like it came off a Gummy Shark!',
            class: 'christmas-drop',
            tags: [],
        },
        7008: {
            id: 7008,
            name: "Krampus' Horn",
            tradeable: false,
            itemImage: '/images/christmas/krampus_horn.png',
            extraTooltipInfo: 'A deathly energy weakly pulses from them still...',
            class: 'christmas-drop',
            tags: [],
        },
        7009: {
            id: 7009,
            name: 'Candy Buttons',
            tradeable: false,
            itemImage: '/images/christmas/candy_buttons.png',
            extraTooltipInfo: 'The buttons from Lumpy, Dumpy and Clumpy!',
            class: 'christmas-drop',
            tags: [],
        },
        7010: {
            id: 7010,
            name: 'Scarf',
            tradeable: false,
            itemImage: '/images/christmas/scarf.png',
            extraTooltipInfo: 'Keeps you warm while you play in the snow!',
            class: 'christmas-drop',
            tags: [],
        },
        7011: {
            id: 7011,
            name: 'Evergreen Log',
            tradeable: false,
            level: 1,
            experience: 1,



            itemImage: '/images/christmas/evergreen_log.png',
            extraTooltipInfo: 'Smells faintly of mint and cinnamon',
            class: 'christmas-drop',
            tags: ['foraging'],
        },
        7012: {
            id: 7012,
            name: 'Corrupted Evergreen Log',
            tradeable: false,
            itemImage: '/images/christmas/corrupted_evergreen_log.png',
            extraTooltipInfo: 'It reeks of decay',
            class: 'christmas-drop',
            tags: [],
        },
        7013: {
            id: 7013,
            name: 'Magic Ice',
            tradeable: false,
            level: 1,
            experience: 1,
            time: 1000,



            itemImage: '/images/christmas/magic_ice.png',
            extraTooltipInfo: 'Magically makes you want to lick it',
            class: 'christmas-drop',
            tags: ['mining'],
        },
        7014: {
            id: 7014,
            name: 'Inferior Bearded Wanderer',
            tradeable: false,
            enchantmentTier: 0,
            requiredLevel: { constitution: 1, attack: 1, strength: 1, defense: 1 },



            itemImage: '/images/christmas/christmas_helmet_worn.png',
            itemIcon: '/images/christmas/christmas_helmet.png',
            extraTooltipInfo: "The hat's a little loose and the beard is itchy",
            visual: 'christmas-helmet',
            class: 'christmas-tier1',
            tags: ['armor'],
            equipmentStats: { slot: 'helm', weaponBonus: { strength: 0, intellect: 0, dexterity: 0 } },
        },
        7015: {
            id: 7015,
            name: "Inferior Reindeer Hunters' Armor",
            tradeable: false,
            enchantmentTier: 0,
            requiredLevel: { constitution: 1, attack: 1, strength: 1, defense: 1 },



            itemImage: '/images/christmas/christmas_chestplate_worn.png',
            itemIcon: '/images/christmas/christmas_chestplate.png',
            extraTooltipInfo: "Not the warmest or most protective, but it'll work!",
            visual: 'christmas-breastplate',
            class: 'christmas-tier1',
            tags: ['armor'],
            equipmentStats: { slot: 'body', weaponBonus: { strength: 0, intellect: 0, dexterity: 0 } },
        },
        7016: {
            id: 7016,
            name: "Inferior Reindeer Hunters' Leggings",
            tradeable: false,
            enchantmentTier: 0,
            requiredLevel: { constitution: 1, attack: 1, strength: 1, defense: 1 },



            itemImage: '/images/christmas/christmas_leggings_worn.png',
            itemIcon: '/images/christmas/christmas_leggings.png',
            extraTooltipInfo: 'Chafes in all the wrong places',
            visual: 'christmas-leggings',
            class: 'christmas-tier1',
            tags: ['armor'],
            equipmentStats: { slot: 'legs', weaponBonus: { strength: 0, intellect: 0, dexterity: 0 } },
        },
        7017: {
            id: 7017,
            name: 'Inferior Christmas Lights',
            tradeable: false,
            enchantmentTier: 0,
            requiredLevel: { constitution: 1, attack: 1, strength: 1, defense: 1 },



            itemImage: '/images/christmas/christmas_weapon_worn.png',
            itemIcon: '/images/christmas/christmas_weapon.png',
            extraTooltipInfo: 'Still a little dusty from being in storage',
            visual: 'christmas-weapon',
            class: 'christmas-tier1',
            tags: ['weapon'],
            equipmentStats: {
                slot: 'weapon',
                weaponBonus: { strength: 0, intellect: 0, dexterity: 0 },
                oneHanded: true,
                attackSpeed: 2.4,
            },
        },
        7018: {
            id: 7018,
            name: 'SuperSled 1337',
            tradeable: false,
            enchantmentTier: 0,
            requiredLevel: { constitution: 1, attack: 1, strength: 1, defense: 1 },



            itemImage: '/images/christmas/christmas_shield_worn.png',
            itemIcon: '/images/christmas/christmas_shield.png',
            extraTooltipInfo: 'An elite sled for elite sledders',
            visual: 'christmas-shield',
            class: 'christmas-tier1',
            tags: ['weapon'],
            equipmentStats: {
                slot: 'shield',
                weaponBonus: { strength: 0, intellect: 0, dexterity: 0 },
            },
        },
        7019: {
            id: 7019,
            name: 'Bearded Wanderer',
            tradeable: false,
            enchantmentTier: 0,
            requiredLevel: { constitution: 1, attack: 1, strength: 1, defense: 1 },



            itemImage: '/images/christmas/christmas_helmet_worn.png',
            itemIcon: '/images/christmas/christmas_helmet.png',
            extraTooltipInfo: "The hat's too tight and the beard smells funny.",
            visual: 'christmas-helmet',
            class: 'christmas-tier2',
            tags: ['armor'],
            equipmentStats: { slot: 'helm', weaponBonus: { strength: 0, intellect: 0, dexterity: 0 } },
        },
        7020: {
            id: 7020,
            name: "Reindeer Hunters' Armor",
            tradeable: false,
            enchantmentTier: 0,
            requiredLevel: { constitution: 1, attack: 1, strength: 1, defense: 1 },



            itemImage: '/images/christmas/christmas_chestplate_worn.png',
            itemIcon: '/images/christmas/christmas_chestplate.png',
            extraTooltipInfo: 'Hypothermia is no longer your biggest threat!',
            visual: 'christmas-breastplate',
            class: 'christmas-tier2',
            tags: ['armor'],
            equipmentStats: { slot: 'body', weaponBonus: { strength: 0, intellect: 0, dexterity: 0 } },
        },
        7021: {
            id: 7021,
            name: "Reindeer Hunters' Leggings",
            tradeable: false,
            enchantmentTier: 0,
            requiredLevel: { constitution: 1, attack: 1, strength: 1, defense: 1 },



            itemImage: '/images/christmas/christmas_leggings_worn.png',
            itemIcon: '/images/christmas/christmas_leggings.png',
            extraTooltipInfo: "There's no holes, at least!",
            visual: 'christmas-leggings',
            class: 'christmas-tier2',
            tags: ['armor'],
            equipmentStats: { slot: 'legs', weaponBonus: { strength: 0, intellect: 0, dexterity: 0 } },
        },
        7022: {
            id: 7022,
            name: 'Christmas Lights',
            tradeable: false,
            enchantmentTier: 0,
            requiredLevel: { constitution: 1, attack: 1, strength: 1, defense: 1 },



            itemImage: '/images/christmas/christmas_weapon_worn.png',
            itemIcon: '/images/christmas/christmas_weapon.png',
            extraTooltipInfo: 'Not for the nice!',
            visual: 'christmas-weapon',
            class: 'christmas-tier2',
            tags: ['weapon'],
            equipmentStats: {
                slot: 'weapon',
                weaponBonus: { strength: 0, intellect: 0, dexterity: 0 },
                oneHanded: true,
                attackSpeed: 2.4,
            },
        },
        7023: {
            id: 7023,
            name: 'SuperSled 9000',
            tradeable: false,
            enchantmentTier: 0,
            requiredLevel: { constitution: 1, attack: 1, strength: 1, defense: 1 },



            itemImage: '/images/christmas/christmas_shield_worn.png',
            itemIcon: '/images/christmas/christmas_shield.png',
            extraTooltipInfo: 'For when sledding meets extreme sports',
            visual: 'christmas-shield',
            class: 'christmas-tier2',
            tags: ['weapon'],
            equipmentStats: {
                slot: 'shield',
                weaponBonus: { strength: 0, intellect: 0, dexterity: 0 },
            },
        },
        7024: {
            id: 7024,
            name: 'Superior Bearded Wanderer',
            tradeable: false,
            enchantmentTier: 0,
            requiredLevel: { constitution: 1, attack: 1, strength: 1, defense: 1 },



            itemImage: '/images/christmas/christmas_helmet_worn.png',
            itemIcon: '/images/christmas/christmas_helmet.png',
            extraTooltipInfo: "The hat's just right and the beard is perfectly groomed.",
            visual: 'christmas-helmet',
            class: 'christmas-tier3',
            tags: ['armor'],
            equipmentStats: {
                isTransmog: true,
                slot: 'helm',
                weaponBonus: { strength: 0, intellect: 0, dexterity: 0 },
            },
        },
        7025: {
            id: 7025,
            name: "Superior Reindeer Hunters' Armor",
            tradeable: false,
            enchantmentTier: 0,
            requiredLevel: { constitution: 1, attack: 1, strength: 1, defense: 1 },



            itemImage: '/images/christmas/christmas_chestplate_worn.png',
            itemIcon: '/images/christmas/christmas_chestplate.png',
            extraTooltipInfo: 'The skull whispers to you softly, urging you to kill',
            visual: 'christmas-breastplate',
            class: 'christmas-tier3',
            tags: ['armor'],
            equipmentStats: {
                isTransmog: true,
                slot: 'body',
                weaponBonus: { strength: 0, intellect: 0, dexterity: 0 },
            },
        },
        7026: {
            id: 7026,
            name: "Superior Reindeer Hunters' Leggings",
            tradeable: false,
            enchantmentTier: 0,
            requiredLevel: { constitution: 1, attack: 1, strength: 1, defense: 1 },



            itemImage: '/images/christmas/christmas_leggings_worn.png',
            itemIcon: '/images/christmas/christmas_leggings.png',
            extraTooltipInfo: 'The hide might not have protected the reindeer, but it will protect you.',
            visual: 'christmas-leggings',
            class: 'christmas-tier3',
            tags: ['armor'],
            equipmentStats: {
                isTransmog: true,
                slot: 'legs',
                weaponBonus: { strength: 0, intellect: 0, dexterity: 0 },
            },
        },
        7027: {
            id: 7027,
            name: 'Superior Christmas Lights',
            tradeable: false,
            enchantmentTier: 0,
            requiredLevel: { constitution: 1, attack: 1, strength: 1, defense: 1 },



            itemImage: '/images/christmas/christmas_weapon_worn.png',
            itemIcon: '/images/christmas/christmas_weapon.png',
            extraTooltipInfo: 'For the naughty!',
            visual: 'christmas-weapon',
            class: 'christmas-tier3',
            tags: ['weapon'],
            equipmentStats: {
                isTransmog: true,
                slot: 'weapon',
                weaponBonus: { strength: 0, intellect: 0, dexterity: 0 },
                oneHanded: true,
                attackSpeed: 2.4,
            },
        },
        7028: {
            id: 7028,
            name: 'SuperSled 9001',
            tradeable: false,
            enchantmentTier: 0,
            requiredLevel: { constitution: 1, attack: 1, strength: 1, defense: 1 },



            itemImage: '/images/christmas/christmas_shield_worn.png',
            itemIcon: '/images/christmas/christmas_shield.png',
            extraTooltipInfo: "It's over 9000!",
            visual: 'christmas-shield',
            class: 'christmas-tier3',
            tags: ['weapon'],
            equipmentStats: {
                isTransmog: true,
                slot: 'shield',
                weaponBonus: { strength: 0, intellect: 0, dexterity: 0 },
            },
        },
        7029: {
            name: 'Magical Snowball',
            id: 7029,
            enchantmentTier: 5,
            augmentationCost: { 519: 500 },
            value: 2840000,
            tradeable: true,
            requiredLevel: { constitution: 1, attack: 50, strength: 50, defense: 1 },



            itemImage: '/images/christmas/magical_snowball.png',
            class: 'equipment',
            visual: 'magical-snowball',
            category: ['armor', 'combat', 'christmas'],
            tags: ['armor', 'weapon', 'melee', 'crafting'],
            equipmentStats: {
                isTransmog: true,
                slot: 'shield',
                offensiveAccuracyAffinityRating: { Melee: 18, Magic: 0, Range: 0 },
                offensiveDamageAffinity: { Melee: 1, Magic: 1, Range: 1 },
                defensiveDamageAffinity: { Melee: 1, Magic: 1, Range: 1 },
                weaponBonus: { strength: 4, intellect: 3, dexterity: 2 },
                armorBonus: { protection: 0, resistance: 0, agility: 0, stamina: 0 },
            },
            rarity: 'uncommon',
        },
        7030: {
            name: 'Candy Cane Daggers',
            id: 7030,
            enchantmentTier: 5,
            augmentationCost: { 2015: 100 },
            value: 2840000,
            tradeable: true,
            requiredLevel: { constitution: 1, attack: 1, strength: 50, defense: 1 },



            itemImage: '/images/christmas/candy_cane_dagger.png',
            itemIcon: '/images/christmas/candy_cane_daggers_icon.png',
            class: 'equipment',
            visual: 'candy-cane-daggers',
            isDaggers: true,
            category: ['weapon', 'combat', 'christmas'],
            tags: ['melee', 'weapon', 'twohand', 'crafting'],
            equipmentStats: {
                isTransmog: true,
                slot: 'weapon',
                offensiveCritical: { chance: 11 / 200, damageMultiplier: 1.75 },
                offensiveAccuracyAffinityRating: {
                    Melee: 69,
                    Magic: -10,
                    Range: -10,
                    Piercing: 43,
                    Blunt: -8,
                    Slashing: 43,
                },
                offensiveDamageAffinity: {
                    Melee: 1,
                    Magic: 33 / 100,
                    Range: 0.2,
                    Piercing: 1.1,
                    Blunt: 33 / 100,
                    Slashing: 3 / 4,
                },
                weaponBonus: { strength: 29, intellect: 0, dexterity: 0 },
                armorBonus: { protection: 0, resistance: 0, agility: 10, stamina: 0 },
                attackSpeed: 2,
                augmentationBonus: [
                    { stat: 'offensiveCritical.chance', value: 1 / 100 },
                    {
                        stat: 'offensiveCritical.damageMultiplier',
                        value: 1 / 100,
                    },
                    { stat: 'armorBonus.agility', value: 0.1 },
                ],
            },
            rarity: 'uncommon',
        },
        7031: {
            name: 'Festive Shroud',
            id: 7031,
            enchantmentTier: 0,
            augmentationCost: { 2015: 100 },
            value: 5120000,
            tradeable: true,
            requiredLevel: { constitution: 1, attack: 1, strength: 1, defense: 1 },



            itemImage: '/images/christmas/festive_shroud.png',
            itemIcon: '/images/christmas/festive_shroud_hood.png',
            class: 'equipment',
            visual: 'cape',
            category: ['weapon', 'combat', 'christmas'],
            tags: ['melee', 'armor', 'crafting'],
            equipmentStats: {
                isTransmog: true,
                slot: 'cape',
                defensiveDamageAffinity: { Melee: 1.02, Magic: 1.02, Range: 1.02 },
                weaponBonus: { strength: 0, intellect: 0, dexterity: 0 },
                armorBonus: { protection: 4, resistance: 4, agility: 4, stamina: 4 },
                augmentationBonus: [
                    { stat: 'armorBonus.protection', value: 0.5 },
                    { stat: 'armorBonus.resistance', value: 0.5 },
                    { stat: 'armorBonus.agility', value: 0.5 },
                    { stat: 'armorBonus.stamina', value: 0.5 },
                ],
            },
            rarity: 'epic',
        },
        7032: {
            name: "Merry Maker's Mittens",
            id: 7032,
            requiredLevel: { constitution: 1, attack: 1, strength: 1, defense: 1 },



            itemImage: '/images/christmas/christmas_gloves.png',
            extraTooltipInfo: 'A pair of mittens to keep you warm in the bitter cold! Wait, are they fingerless?',
            class: 'equipment',
            visual: 'gloves',
            tags: ['armor', 'crafting'],
            equipmentStats: {
                isTransmog: true,
                slot: 'gloves',
                weaponBonus: { strength: 0, intellect: 0, dexterity: 0 },
            },
        },
        7033: {
            name: 'Mistletoe Treads',
            id: 7033,
            requiredLevel: { constitution: 1, attack: 1, strength: 1, defense: 1 },



            itemImage: '/images/christmas/christmas_boots.png',
            itemIcon: '/images/christmas/christmas_boots_icon.png',
            extraTooltipInfo: 'For treading on snow or enemy faces.',
            class: 'equipment',
            visual: 'boots',
            tags: ['armor', 'crafting'],
            equipmentStats: {
                isTransmog: true,
                slot: 'boots',
                weaponBonus: { strength: 0, intellect: 0, dexterity: 0 },
            },
        },
        7034: {
            id: 7034,
            name: 'Magic Ice Bar',
            skill: 'smithing',
            level: 1,
            experience: 100,
            time: 12000,
            itemImage: '/images/christmas/ice_bar.png',
            class: 'bar',
            extraTooltipInfo: 'A coalesced bar of magic ice. Cold to the touch!',
            tags: ['mining', 'smithing'],
            requiredResources: [{ 2: 100, 7013: 2 }],
        },
        7035: {
            name: 'Winter Rune',
            id: 7035,
            time: 5000,



            itemImage: '/images/christmas/Snow_Rune.png',
            extraTooltipInfo: 'A slate imbued with the essence of winter.',
            class: 'rune',
            tags: ['ammunition', 'magic', 'runecrafting'],
            requiredResources: [{ 113: 1, 7038: 400 }],
        },
        7036: {
            name: 'Scroll of Candy Canes',
            activeMessage: 'Making Scrolls of Candy Canes',
            enchant: true,
            hidden: true,
            categories: ['christmas elf gear'],
            time: 15000,
            id: 7036,
            enchantmentID: 7000,
            level: 1,
            experience: 100,
            baseSuccessChance: 1,



            itemImage: '/images/christmas/xmas_scroll.png',
            skillIcon: '/images/enchanting/enchanting_logo.png',
            class: 'enchanted-scroll',
            actionButton: 'Craft',
            extraTooltipInfo:
                'A scroll enchanted with some sort of winter magic, not compatible with any gear you know of.',
            getChance: (resource, playerLevel) => {
                return (100).toFixed(0) + '%';
            },
            tags: ['enchanting'],
            requiredResources: [{ 516: 10, 518: 10, 519: 10, 7002: 1, 7035: 20 }],
        },
        7037: {
            id: 7037,
            name: 'Gummy Lure',



            itemImage: 'images/christmas/gummy_bait.png',
            craftingDescription: 'Each craft results in 2 bait. Helps with Christmas zone fishing.',
            extraTooltipInfo: 'A gummy fish turned into a lure. Helps with Christmas zone fishin.',
            class: 'fish',
            tags: ['fishing'],
        },
        7038: {
            id: 7038,
            name: 'Winter Essence',
            essence: true,
            tradeable: false,
            itemImage: '/images/christmas/snow_essence.png',
            extraTooltipInfo: 'Winter essence can be gathered by doing non-combat Christmas event activities.',
            class: 'rune',
            tags: ['magic', 'runecrafting'],
        },
        7039: {
            id: 7039,
            name: 'Gummy Shark',
            tradeable: false,
            level: 1,
            experience: 1,



            itemImage: '/images/christmas/monsters/gummy_shark.png',
            extraTooltipInfo: 'More likely to bite you than let you bite it!',
            class: 'christmas-drop',
            time: 1000,
            tags: ['ingredient', 'consumable', 'food', 'fishing'],
        },
        7040: {
            id: 7040,
            name: 'Angry Letter',
            tradeable: false,
            itemImage: '/images/christmas/angry_letter.png',
            extraTooltipInfo: 'An angrily worded letter from someone you threw a snowball at!',
            class: 'christmas-drop',
            tags: [],
        },
        7041: {
            id: 7041,
            name: 'Baubles',
            tradeable: false,
            itemImage: '/images/christmas/baubles.png',
            extraTooltipInfo: 'Commemorates Christmas 2021! How many can you collect?',
            class: 'christmas-drop',
            tags: [],
        },
        7050: {
            id: 7050,
            name: 'Snowglobe',
            tradeable: false,
            itemImage: '/images/christmas/snowglobe.png',
            extraTooltipInfo: 'Stores your Christmas Spirit!',
            class: 'christmas-globe',
            tags: [],
        },
        7060: {
            id: 7060,
            name: 'Limpe K. Limpe',



            itemImage: '/images/combat/monsters/chicken.png',
            extraTooltipInfo: 'whatisthis?',
            class: 'equipment',
            visual: 'p-chicken',
            tags: ['melee', 'armor'],
            equipmentStats: { isTransmog: true, fullTransmog: true, slot: 'cape' },
            rarity: 'legendary',
        },
        7061: {
            id: 7061,
            name: 'The Mine Dwelling Hamster',



            itemImage: '/images/combat/monsters/elite/hamster.png',
            extraTooltipInfo: 'Back to the mines with you!!!',
            class: 'equipment',
            visual: 'p-chicken',
            tags: ['melee', 'armor'],
            equipmentStats: { isTransmog: true, fullTransmog: true, slot: 'cape' },
            rarity: 'legendary',
        },
        7062: {
            id: 7062,
            name: 'Lil Crown Hamperster',



            itemImage: '/images/combat/monsters/elite/hamster2.png',
            extraTooltipInfo: 'Little hat REQUIRED',
            class: 'equipment',
            visual: 'p-chicken',
            tags: ['melee', 'armor'],
            equipmentStats: { isTransmog: true, fullTransmog: true, slot: 'cape' },
            rarity: 'legendary',
        },
        7063: {
            name: 'Lightning Edge',
            id: 7063,



            itemImage: '/images/premium/cosmetic/equipment/lightning_edge.gif',
            class: 'equipment',
            extraTooltipInfo: 'Lightning never strikes twice, so surely this is an anomaly.',
            visual: 'zero',
            category: ['weapon', 'combat'],
            tags: ['melee', 'weapon'],
            equipmentStats: { isTransmog: true, slot: 'weapon' },
            rarity: 'legendary',
        },
        7064: {
            name: 'Frost Maul',
            id: 7064,



            itemImage: '/images/premium/cosmetic/equipment/frost_maul.gif',
            extraTooltipInfo: 'A hulking mass of snow covered ice.',
            class: 'equipment',
            visual: 'moss-maul',
            category: ['weapon', 'combat'],
            tags: ['melee', 'weapon'],
            equipmentStats: { isTransmog: true, slot: 'weapon' },
            rarity: 'legendary',
        },
        7065: {
            id: 7065,
            name: 'Abusive',



            itemImage: '/images/combat/monsters/elite/hamster3.png',
            extraTooltipInfo: 'gamster',
            class: 'equipment',
            visual: 'p-chicken',
            tags: ['melee', 'armor'],
            equipmentStats: { isTransmog: true, fullTransmog: true, slot: 'cape' },
            rarity: 'legendary',
        },
        8000: {
            name: 'RISE OF INFO',
            id: 8000,
            value: 500,
            tradeable: true,
            champEncounter: 3010,
            enchantmentTier: 0,



            itemImage: '/images/misc/Elite_Scroll.png',
            extraTooltipInfo:
                'Ancient power emanates from the seal... It sorta smells like durian. Includes built-in double drops for all players and +20 Treasure Hunter.',
            class: 'elite-scroll',
            tags: ['dungeon'],
            rarity: 'legendary',
        },
        8001: {
            name: "Black Knight's Trial",
            id: 8001,
            value: 500,
            tradeable: true,
            champEncounter: 2000,
            enchantmentTier: 0,
            maxAugLevel: 20,
            augmentationCost: { 8001: 1 },
            forcedAugmentChance: 1,



            itemImage: '/images/misc/elite/Elite_Scroll_BK.png',
            extraTooltipInfo: 'A dark scroll for a darker trial. Will you face it and reap the rewards?',
            class: 'elite-scroll',
            tags: ['elite'],
            rarity: 'uncommon',
        },
        8002: {
            name: 'Giant Scroll',
            id: 8002,
            value: 500,
            tradeable: true,
            champEncounter: 2001,
            enchantmentTier: 0,
            maxAugLevel: 20,
            augmentationCost: { 8002: 1 },
            forcedAugmentChance: 1,



            itemImage: '/images/misc/elite/Elite_Scroll_Giant.png',
            extraTooltipInfo: 'A gargantuan task for only the mightiest of heroes; are you counted amongst them?',
            class: 'elite-scroll',
            tags: ['elite'],
            rarity: 'uncommon',
        },
        8003: {
            name: 'Corroded Scroll',
            id: 8003,
            value: 500,
            tradeable: true,
            champEncounter: 2002,
            enchantmentTier: 0,
            maxAugLevel: 20,
            augmentationCost: { 8003: 1 },
            forcedAugmentChance: 1,



            itemImage: '/images/misc/elite/Elite_Scroll_Corroded.png',
            extraTooltipInfo:
                'The stench of decay hangs heavy about this squalid parchment. Are you ready to break the seal?',
            class: 'elite-scroll',
            tags: ['elite'],
            rarity: 'uncommon',
        },
        8004: {
            name: 'Stew Stained Page',
            id: 8004,
            value: 500,
            tradeable: true,
            champEncounter: 2003,
            enchantmentTier: 0,
            maxAugLevel: 20,
            augmentationCost: { 8004: 1 },
            forcedAugmentChance: 1,



            itemImage: '/images/misc/elite/Elite_Scroll_Goblin.png',
            extraTooltipInfo: 'A repulsive taunt from a repulsive creature. Will you break the seal?',
            class: 'elite-scroll',
            tags: ['elite'],
            rarity: 'uncommon',
        },
        8005: {
            name: 'Cluster-Cluck',
            id: 8005,
            value: 500,
            tradeable: true,
            champEncounter: 2004,
            enchantmentTier: 0,
            maxAugLevel: 20,
            augmentationCost: { 8005: 1 },
            forcedAugmentChance: 1,



            itemImage: '/images/misc/elite/Elite_Scroll_Chicken.png',
            extraTooltipInfo: "The secret location of Ot_to's prized hen house. Want to find out what's inside?",
            class: 'elite-scroll',
            tags: ['elite'],
            rarity: 'uncommon',
        },
        8006: {
            name: 'Demonic Trial',
            id: 8006,
            value: 500,
            tradeable: true,
            champEncounter: 2005,
            enchantmentTier: 0,
            maxAugLevel: 20,
            augmentationCost: { 8006: 1 },
            forcedAugmentChance: 1,



            itemImage: '/images/misc/elite/Elite_Scroll_Demon.png',
            extraTooltipInfo:
                'Unknown markings surround the stately seal binding this scroll closed. Are you sure you want to break the seal?',
            class: 'elite-scroll',
            tags: ['elite'],
            rarity: 'uncommon',
        },
        8007: {
            name: 'Taproot Scroll',
            id: 8007,
            value: 500,
            tradeable: true,
            champEncounter: 2006,
            enchantmentTier: 0,
            maxAugLevel: 20,
            augmentationCost: { 8007: 1 },
            forcedAugmentChance: 1,



            itemImage: '/images/misc/elite/Elite_Scroll_Spriggan.png',
            extraTooltipInfo: 'The parchment feels alive in your hands. Will you be able to conquer nature?',
            class: 'elite-scroll',
            tags: ['elite'],
            rarity: 'uncommon',
        },
        8008: {
            name: 'The Final Test',
            id: 8008,
            value: 500,
            tradeable: true,
            champEncounter: 612,
            enchantmentTier: 0,
            maxAugLevel: 20,
            augmentationCost: { 8008: 1 },
            forcedAugmentChance: 1,



            itemImage: '/images/misc/Elite_Scroll.png',
            extraTooltipInfo: 'Can you do what no one has ever done before?',
            class: 'elite-scroll',
            tags: ['dungeon'],
            rarity: 'legendary',
        },
        8009: {
            name: 'Shapeless Scroll',
            id: 8009,
            value: 500,
            tradeable: true,
            champEncounter: 2007,
            enchantmentTier: 0,
            maxAugLevel: 20,
            augmentationCost: { 8009: 1 },
            forcedAugmentChance: 1,



            itemImage: '/images/misc/elite/Elite_Scroll_Chaos.png',
            extraTooltipInfo: 'The scroll appears to be shifting in and out of reality. Do you dare unravel its secrets?',
            class: 'elite-scroll',
            tags: ['elite'],
            rarity: 'uncommon',
        },
        8010: {
            name: 'Stormy Sea Scroll',
            id: 8010,
            value: 500,
            tradeable: true,
            champEncounter: 2008,
            enchantmentTier: 0,
            maxAugLevel: 20,
            augmentationCost: { 8010: 1 },
            forcedAugmentChance: 1,



            itemImage: '/images/misc/elite/Elite_Scroll_Fish.png',
            extraTooltipInfo: "It's soaking wet but the parchment seems untearable. Will you dive in?",
            class: 'elite-scroll',
            tags: ['elite'],
            rarity: 'uncommon',
        },
        8011: {
            name: 'Enchanted Armory Scroll',
            id: 8011,
            value: 500,
            tradeable: true,
            champEncounter: 2009,
            enchantmentTier: 0,
            maxAugLevel: 20,
            augmentationCost: { 8011: 1 },
            forcedAugmentChance: 1,



            itemImage: '/images/misc/elite/Elite_Scroll_Fish.png',
            extraTooltipInfo: "It's soaking wet but the parchment seems untearable. Will you dive in?",
            class: 'elite-scroll',
            tags: ['elite'],
            rarity: 'uncommon',
        },
        8012: {
            name: 'Fallen Academy Scroll',
            id: 8012,
            value: 500,
            tradeable: true,
            champEncounter: 2010,
            enchantmentTier: 0,
            maxAugLevel: 20,
            augmentationCost: { 8012: 1 },
            forcedAugmentChance: 1,



            itemImage: '/images/misc/elite/Elite_Scroll_Fish.png',
            extraTooltipInfo: "It's soaking wet but the parchment seems untearable. Will you dive in?",
            class: 'elite-scroll',
            tags: ['elite'],
            rarity: 'uncommon',
        },
        8013: {
            name: 'Overgrown Woods Scroll',
            id: 8013,
            value: 500,
            tradeable: true,
            champEncounter: 2011,
            enchantmentTier: 0,
            maxAugLevel: 20,
            augmentationCost: { 8013: 1 },
            forcedAugmentChance: 1,



            itemImage: '/images/misc/elite/Elite_Scroll_Fish.png',
            extraTooltipInfo: "It's soaking wet but the parchment seems untearable. Will you dive in?",
            class: 'elite-scroll',
            tags: ['elite'],
            rarity: 'uncommon',
        },
        8014: {
            name: 'Elven Encampment Scroll',
            id: 8014,
            value: 500,
            tradeable: true,
            champEncounter: 2011,
            enchantmentTier: 0,
            maxAugLevel: 20,
            augmentationCost: { 8014: 1 },
            forcedAugmentChance: 1,



            itemImage: '/images/misc/elite/Elite_Scroll_Fish.png',
            extraTooltipInfo: "It's soaking wet but the parchment seems untearable. Will you dive in?",
            class: 'elite-scroll',
            tags: ['elite'],
            rarity: 'uncommon',
        },
        9000: {
            name: "Giant's Keep Key",
            id: 9000,
            value: 10000000,
            champEncounter: 3003,
            enchantmentTier: 0,
            maxAugLevel: 10,
            augmentationCost: {
                5: 50000,
                6: 50000,
                7: 50000,
                9: 50000,
                10: 50000,
                9001: 1,
                9002: 1,
                9003: 1,
            },
            tradeable: true,
            craftingLevel: 85,
            craftingExperience: 120000,
            forcedAugmentChance: 1,



            itemImage: '/images/misc/keys/Complete_Disc.png',
            category: 'Dungeon',
            craftingDescription: "Grants one-time access to the Giant's Keep dungeon. This is a 5 person encounter.",
            extraTooltipInfo:
                "The key to enter the Giant's Keep made of the various elemental fragments. Only five people could make it to the Keep without being spotted.",
            class: 'key',
            tags: ['dungeon', 'crafting'],
            requiredResources: [
                {
                    5: 150000,
                    6: 150000,
                    7: 150000,
                    9: 150000,
                    10: 150000,
                    9001: 1,
                    9002: 1,
                    9003: 1,
                    9004: 1,
                    9005: 1,
                },
            ],
            rarity: 'epic',
        },
        9001: {
            id: 9001,
            name: 'Nature Fragment',
            value: 1500000,
            tradeable: true,
            craftable: true,
            craftingLevel: 85,
            craftingExperience: 0,



            itemImage: '/images/misc/keys/Nature_Piece.png',
            extraTooltipInfo: 'A piece of living earth is imbued into this fragment.',
            class: 'key',
            tags: ['fragment', 'shard', 'crafting'],
            category: 'Dungeon',
            requiredResources: [{ 517: 500, 9003: 1 }],
            rarity: 'uncommon',
        },
        9002: {
            id: 9002,
            name: 'Ice Fragment',
            value: 1500000,
            tradeable: true,
            craftable: true,
            craftingLevel: 85,
            craftingExperience: 0,



            itemImage: '/images/misc/keys/Water_Piece.png',
            extraTooltipInfo: 'An unmelting shard of ice is imbued into this fragment.',
            class: 'key',
            tags: ['fragment', 'shard', 'crafting'],
            category: 'Dungeon',
            requiredResources: [{ 513: 500, 9001: 1 }],
            rarity: 'uncommon',
        },
        9003: {
            id: 9003,
            name: 'Fire Fragment',
            value: 1500000,
            tradeable: true,
            craftable: true,
            craftingLevel: 85,
            craftingExperience: 0,



            itemImage: '/images/misc/keys/Fire_Piece.png',
            extraTooltipInfo: 'An unfaltering gout of flames is imbued into this fragment.',
            class: 'key',
            tags: ['fragment', 'shard', 'crafting'],
            category: 'Dungeon',
            requiredResources: [{ 512: 500, 9002: 1 }],
            rarity: 'uncommon',
        },
        9004: {
            id: 9004,
            name: 'Corrupted Fragment',
            value: 1500000,
            tradeable: true,



            itemImage: '/images/misc/keys/Death_Piece.png',
            extraTooltipInfo: 'A rotten slab of decay is imbued into this fragment.',
            class: 'key',
            tags: ['fragment', 'shard'],
            rarity: 'uncommon',
        },
        9005: {
            id: 9005,
            name: 'Chaos Fragment',
            value: 1500000,
            tradeable: true,



            itemImage: '/images/misc/keys/Chaos_Piece.png',
            extraTooltipInfo: 'An undescribable phenomenon is imbued into this fragment.',
            class: 'key',
            tags: ['fragment', 'shard'],
            rarity: 'uncommon',
        },
        9006: {
            name: 'Torn Goblin Settlement Map',
            id: 9006,
            value: 100000,
            tradeable: true,
            champEncounter: 3001,
            enchantmentTier: 0,
            maxAugLevel: 10,
            augmentationCost: { 9007: 5 },
            craftingLevel: 30,
            craftingExperience: 6000,
            forcedAugmentChance: 1,



            itemImage: '/images/misc/keys/goblin_map.png',
            category: 'Dungeon',
            craftingDescription: 'Grants one-time access to the Goblin Settlement dungeon. This is a trio encounter.',
            extraTooltipInfo:
                'A map to find an elusive goblin settlement. You could probably only bring up to three people to this location safely.',
            class: 'key',
            tags: ['dungeon', 'crafting'],
            requiredResources: [{ 95: 75, 512: 10, 2010: 75, 9007: 5 }],
            rarity: 'uncommon',
        },
        9007: {
            name: 'Scrap of Stained Parchment',
            id: 9007,
            value: 7500,
            tradeable: true,
            itemImage: '/images/misc/keys/goblin_map_piece.png',
            extraTooltipInfo: 'A scrap of parchment that appears to be a part of a map.',
            class: 'key',
            tags: ['fragment', 'shard'],
            rarity: 'uncommon',
        },
        9008: {
            name: 'Dark Fortress Key',
            id: 9008,
            value: 750000,
            tradeable: true,
            champEncounter: 3002,
            enchantmentTier: 0,
            maxAugLevel: 10,
            augmentationCost: { 9009: 3 },
            craftingLevel: 50,
            craftingExperience: 12000,
            forcedAugmentChance: 1,



            itemImage: '/images/misc/keys/fortress_key.png',
            category: 'Dungeon',
            craftingDescription: 'Grants one-time access to the Dark Fortress dungeon. This is a trio encounter.',
            extraTooltipInfo:
                'A brutish key made of dark metal. The way to a fortress is treacherous, no more than three people could make the journey.',
            class: 'key',
            tags: ['dungeon', 'crafting'],
            requiredResources: [
                { 202: 50, 204: 50, 514: 500, 515: 500, 516: 500, 9009: 4 },
                { 514: 1000, 515: 1000, 516: 1000, 9009: 9 },
            ],
            rarity: 'uncommon',
        },
        9009: {
            name: 'Dark Key Piece',
            id: 9009,
            value: 100000,
            tradeable: true,
            itemImage: '/images/misc/keys/fortress_key_piece.png',
            extraTooltipInfo: 'A piece of dark metal that looks like part of a key.',
            class: 'key',
            tags: ['fragment', 'shard'],
            rarity: 'uncommon',
        },
        9010: {
            name: 'Cursed Spade',
            id: 9010,
            value: 2000000,
            tradeable: true,
            maxAugLevel: 10,
            augmentationCost: { 800: 250, 4000: 10 },
            craftingLevel: 50,
            craftingExperience: 15000,
            forcedAugmentChance: 1,
            champEncounter: 3006,



            itemImage: 'images/misc/keys/cursed_spade.png',
            category: 'Dungeon',
            craftingDescription:
                'Bringing the pieces together makes them emit a sickly pallor. Is it worth reassembling it?',
            extraTooltipInfo: 'A cursed spade that is drawn to long forgotten lands...',
            class: 'key',
            tags: ['dungeon', 'crafting'],
            requiredResources: [{ 202: 1, 302: 1, 800: 3000, 4000: 1 }],
            rarity: 'uncommon',
        },
        9011: {
            name: 'Burning Feather',
            id: 9011,
            value: 2000000,
            tradeable: true,
            enchantmentTier: 0,
            maxAugLevel: 10,
            augmentationCost: { 5: 10000, 113: 250, 512: 500, 9013: 1 },
            craftingLevel: 60,
            craftingExperience: 20000,
            forcedAugmentChance: 1,
            champEncounter: 3007,



            itemImage: 'images/misc/keys/flame_feather.png',
            category: 'Dungeon',
            craftingDescription: 'Grants one-time access to the Palace of Flames dungeon. This is a duo encounter.',
            extraTooltipInfo:
                "The feather itself appears to be made out of fire! You could probably lead yourself and one other wherever it's pointing. It just wants to go home, but you'd probably melt in there. Better bring some Flame Resistance food!",
            class: 'key',
            tags: ['dungeon', 'crafting'],
            requiredResources: [{ 512: 1000, 700: 1, 9013: 2, 9014: 2 }],
            rarity: 'rare',
        },
        9012: {
            name: "Krampus' Key",
            id: 9012,
            value: 69,
            tradeable: false,
            enchantmentTier: 0,
            craftingLevel: 1,
            craftingExperience: 1,



            itemImage: '/images/christmas/krampus_key.png',
            category: 'Event',
            extraTooltipInfo:
                'A piece of bone with some bits of metal sticking off of it. If you squint really hard it somewhat resembles a key.',
            class: 'key',
            tags: ['dungeon', 'crafting'],
            requiredResources: [{ 7038: 150000 }],
        },
        9013: {
            name: 'Molten Ashes',
            id: 9013,
            value: 150000,
            tradeable: true,
            itemImage: '/images/misc/keys/infernal_ashes.png',
            extraTooltipInfo: 'The remains of some infernal creature. Still warm to the touch.',
            class: 'key',
            tags: ['fragment', 'shard'],
            rarity: 'uncommon',
        },
        9014: {
            name: 'Infernal Flame',
            id: 9014,
            value: 250000,
            tradeable: true,
            itemImage: '/images/misc/keys/infernal_flame.png',
            craftingLevel: 60,
            craftingExperience: 100,



            category: 'Dungeon',
            extraTooltipInfo: 'The vestiges of an infernal soul, left to burn eternally.',
            class: 'key',
            tags: ['fragment', 'shard', 'crafting'],
            requiredResources: [{ 2: 25000, 9013: 2 }],
            rarity: 'uncommon',
        },
        9015: {
            name: 'Cracked Shrimp Bauble',
            id: 9015,
            value: 420,
            tradeable: false,
            champEncounter: 3000,
            itemImage: '/images/misc/shrimp_bauble_cracked.png',
            extraTooltipInfo: 'The roar of the ocean can be heard faintly while examining this bauble.',
            class: 'key',
            tags: ['dungeon'],
            rarity: 'uncommon',
        },
        9016: {
            name: 'Elder Lockstone',
            id: 9016,
            value: 2000000,
            tradeable: true,
            maxAugLevel: 10,
            augmentationCost: { 9016: 1 },
            craftingLevel: 80,
            craftingExperience: 40000,
            forcedAugmentChance: 1,
            champEncounter: 3004,



            itemImage: 'images/misc/keys/lockstone.png',
            category: 'Dungeon',
            craftingDescription: 'Repairing the lockstone appears to activate some sort of latent power within it.',
            extraTooltipInfo:
                'A lockstone that can lead its owner to a hidden Elder Ruin and reveal its untouched treasures.',
            class: 'key',
            tags: ['dungeon', 'crafting'],
            requiredResources: [{ 109: 1000, 9023: 1 }],
            rarity: 'epic',
        },
        9017: {
            name: 'Castle Map',
            id: 9017,
            value: 2000000,
            tradeable: true,
            maxAugLevel: 10,
            augmentationCost: { 9017: 1 },
            craftingLevel: 74,
            craftingExperience: 40000,
            forcedAugmentChance: 1,
            champEncounter: 3005,



            itemImage: 'images/misc/keys/castle_map.png',
            category: 'Dungeon',
            craftingDescription: 'A full map that leads to an old castle.',
            extraTooltipInfo: 'A full map that leads to an old castle.',
            class: 'key',
            tags: ['dungeon', 'crafting'],
            requiredResources: [{ 9022: 9 }],
            rarity: 'epic',
        },
        9018: {
            name: 'Eye of the Storm key',
            id: 9018,
            value: 10000000,
            tradeable: true,
            maxAugLevel: 10,
            augmentationCost: { 9018: 1 },
            craftingLevel: 80,
            craftingExperience: 30000,
            forcedAugmentChance: 1,
            champEncounter: 3008,



            itemImage: 'images/misc/keys/pyramid.png',
            category: 'Dungeon',
            craftingDescription: 'An ancient chunk of stone curiously shaped into a pyramid.',
            extraTooltipInfo: 'An ancient chunk of stone curiously shaped into a pyramid.',
            class: 'key',
            tags: ['dungeon', 'crafting'],
            requiredResources: [{ 9021: 10 }],
            rarity: 'legendary',
        },
        9019: {
            name: 'The Maelstrom key',
            id: 9019,
            value: 20000000,
            tradeable: true,
            maxAugLevel: 10,
            augmentationCost: { 9019: 1 },
            craftingLevel: 92,
            craftingExperience: 40000,
            forcedAugmentChance: 1,
            champEncounter: 3009,



            itemImage: 'images/misc/keys/prism.png',
            category: 'Dungeon',
            craftingDescription: 'A prism trapped inside of a magical prison. What could go wrong if you released it?',
            extraTooltipInfo: 'A prism trapped inside of a magical prison. What could go wrong if you released it?',
            class: 'key',
            tags: ['dungeon', 'crafting'],
            requiredResources: [{ 9020: 10 }],
            rarity: 'legendary',
        },
        9020: {
            name: 'Ancient Crystal',
            id: 9020,
            value: 1750000,
            tradeable: true,
            itemImage: '/images/misc/keys/ancient_crystal.png',
            extraTooltipInfo:
                'An ancient crystal. It is chaotic in origin but is far older than any chaotic crystal you have ever seen.',
            class: 'key',
            tags: ['fragment', 'shard'],
            rarity: 'epic',
        },
        9021: {
            name: 'Ancient Stone',
            id: 9021,
            value: 1500000,
            tradeable: true,
            itemImage: '/images/misc/keys/ancient_stone.png',
            extraTooltipInfo:
                'An ancient stone. Appears to be hewn in such a way that it would be able to fit nicely with other similar stones, despite its obvious age and damage.',
            class: 'key',
            tags: ['fragment', 'shard'],
            rarity: 'epic',
        },
        9022: {
            name: 'Partial Map',
            id: 9022,
            value: 1500000,
            tradeable: true,
            itemImage: '/images/misc/keys/partial_map.png',
            extraTooltipInfo:
                'A portion of a larger map. Useless on its own, but with the remaining pieces it may lead somewhere!',
            class: 'key',
            tags: ['fragment', 'shard'],
            rarity: 'rare',
        },
        9023: {
            name: 'Elder Gem',
            id: 9023,
            value: 5000000,
            tradeable: true,
            itemImage: '/images/misc/keys/elder_gem.png',
            extraTooltipInfo: 'An elder gem. Prized heirloom of the Elves, or the final piece to a greater puzzle?',
            class: 'key',
            tags: ['fragment', 'shard'],
            rarity: 'rare',
        },
        10000: {
            id: 10000,
            name: 'The Castled King',
            value: 1,



            itemImage: '/images/combat/monsters/elite/true_info.png',
            itemIcon: '/images/magic/prismatic_gem.png',
            extraTooltipInfo: 'Show your true might.',
            class: 'equipment',
            visual: 'castled-king',
            category: ['armor', 'combat'],
            equipmentStats: { isTransmog: true, fullTransmog: true, slot: 'cape' },
            tags: ['armor', 'unique', 'crafting'],
            rarity: 'legendary',
        },
        10001: {
            name: 'Dextrous Scraps',
            id: 10001,
            value: 1000,
            tradeable: true,
            itemImage: '/images/misc/Range_Scrap.png',



            class: 'gem',
            extraTooltipInfo: 'Perhaps you could salvage something dextrous from these scraps...',
            canBeOpened: true,
            tags: [],
        },
        10002: {
            name: 'Intellectual Scraps',
            id: 10002,
            value: 1000,
            tradeable: true,
            itemImage: '/images/misc/Magic_Scrap.png',



            class: 'gem',
            extraTooltipInfo: 'Perhaps you could salvage something intellectual from these scraps...',
            canBeOpened: true,
            tags: [],
        },
        10003: {
            name: 'Gem Package',
            id: 10003,
            value: 1000,
            tradeable: true,
            itemImage: '/images/misc/package.png',



            class: 'gem',
            extraTooltipInfo: "A bag of gems! I wonder what's inside? ...Gems, hopefully.",
            canBeOpened: true,
            tags: [],
        },
        10004: {
            name: 'Sealed Scroll',
            id: 10004,
            value: 1000,
            tradeable: true,
            itemImage: '/images/misc/sealed_scroll.png',



            class: 'gem',
            extraTooltipInfo:
                "A sealed scroll. Doesn't come with postal information, so I guess it's yours now! What could its contents be?",
            canBeOpened: true,
            tags: [],
        },
        10005: {
            name: 'Small Gathering Supply Crate',
            id: 10005,
            value: 1000,
            tradeable: true,
            itemImage: '/images/misc/supply_crate_small.png',



            class: 'gem',
            extraTooltipInfo:
                "A small crate addressed to someone named 'Diet$melter.' Sounds like a fake name, you should open it!",
            canBeOpened: true,
            tags: [],
        },
        10006: {
            name: 'Gathering Supply Crate',
            id: 10006,
            value: 1000,
            tradeable: true,
            itemImage: '/images/misc/supply_crate.png',



            class: 'gem',
            extraTooltipInfo:
                "A crate addressed to someone named 'Diet$melter.' Sounds like a fake name, you should open it!",
            canBeOpened: true,
            tags: [],
        },
        10007: {
            name: 'Large Gathering Supply Crate',
            id: 10007,
            value: 1000,
            tradeable: true,
            itemImage: '/images/misc/supply_crate_large.png',



            class: 'gem',
            extraTooltipInfo:
                "A large crate addressed to someone named 'Diet$melter.' Sounds like a fake name, you should open it!",
            canBeOpened: true,
            tags: [],
        },
        10008: {
            name: 'Bucket of Worms',
            id: 10008,
            value: 1000,
            tradeable: true,
            itemImage: '/images/fishing/bait/bucket.png',



            class: 'gem',
            extraTooltipInfo: "A bucket of soil with worms inside! At least it isn't just a can of worms!",
            canBeOpened: true,
            tags: [],
        },
        10009: {
            name: 'Box of Skill Books',
            id: 10009,
            value: 1,
            tradeable: true,
            itemImage: '/images/misc/gold_lockbox.png',



            class: 'gem',
            extraTooltipInfo: 'An ornate lockbox containing a variety of skill books. Testing Item.',
            canBeOpened: true,
            tags: [],
        },
        10010: {
            name: 'Box of Jewelry',
            id: 10010,
            value: 1,
            tradeable: true,
            itemImage: '/images/misc/gold_lockbox.png',



            class: 'gem',
            extraTooltipInfo: 'An ornate lockbox containing a variety of skill books. Testing Item.',
            canBeOpened: true,
            tags: [],
        },
        10011: {
            name: 'Magic Starter Kit',
            id: 10011,
            value: 1,
            tradeable: true,
            itemImage: '/images/misc/pouch.png',



            class: 'gem',
            extraTooltipInfo:
                'A simple pouch containing some starter supplies. Will eventually be tied to a tutorial quest.',
            canBeOpened: true,
            tags: [],
        },
        10012: {
            name: 'Range Starter Kit',
            id: 10012,
            value: 1,
            tradeable: true,
            itemImage: '/images/misc/pouch.png',



            class: 'gem',
            extraTooltipInfo:
                'A simple pouch containing some starter supplies. Will eventually be tied to a tutorial quest.',
            canBeOpened: true,
            tags: [],
        },
        11000: {
            id: 11000,
            name: 'Novice Tacklebox',
            value: 850,
            tradeable: true,
            enchantmentTier: 1,
            augmentationCost: { 201: 2, 302: 4, 11030: 1 },
            craftingExperience: 156,
            craftingLevel: 2,
            requiredLevel: { fishing: 1 },



            itemImage: '/images/fishing/Novice_Tacklebox.png',
            tool: true,
            class: 'equipment',
            craftingDescription: 'A novice fishing tacklebox. Gives 3 fishing levels, 15 bait power and 5 reel power.',
            extraTooltipInfo:
                "A beginner's novice tacklebox designed to be used by children. Not much good to catch anything large.",
            category: 'Fishing',
            enchantable: true,
            tags: ['tool', 'crafting'],
            equipmentStats: {
                slot: 'tacklebox',
                toolBoost: [
                    { skill: 'fishing', boost: 3 },
                    { skill: 'fishingBaitPower', boost: 15 },
                    { skill: 'fishingReelPower', boost: 5 },
                ],
                augmentationBonus: [
                    { stat: 'toolBoost.fishing', value: 0.5 },
                    { stat: 'toolBoost.fishingBaitPower', value: 1 },
                    { stat: 'toolBoost.fishingReelPower', value: 1 },
                    { stat: 'toolBoost.fishingRarityPower', value: 0.5 },
                ],
            },
            requiredResources: [{ 201: 20, 302: 40, 690: 3, 11030: 3 }],
        },
        11001: {
            id: 11001,
            name: 'Basic Tacklebox',
            value: 8000,
            tradeable: true,
            enchantmentTier: 2,
            augmentationCost: { 202: 4, 303: 8, 11030: 5 },
            craftingExperience: 612,
            craftingLevel: 17,
            requiredLevel: { fishing: 10 },



            itemImage: '/images/fishing/Basic_Tacklebox.png',
            tool: true,
            class: 'equipment',
            craftingDescription:
                'A basic fishing tacklebox. Gives 6 fishing levels, 20 bait power, 10 reel power, and 3 bonus rarity.',
            extraTooltipInfo:
                'A basic fishing tacklebox aimed for use by hobbyists and amateurs for basic fishing adventures to the local river or pond.',
            category: 'Fishing',
            enchantable: true,
            tags: ['tool', 'crafting'],
            equipmentStats: {
                slot: 'tacklebox',
                toolBoost: [
                    { skill: 'fishing', boost: 6 },
                    { skill: 'fishingBaitPower', boost: 20 },
                    { skill: 'fishingReelPower', boost: 10 },
                    { skill: 'fishingRarityPower', boost: 3 },
                ],
                augmentationBonus: [
                    { stat: 'toolBoost.fishing', value: 1 },
                    { stat: 'toolBoost.fishingBaitPower', value: 1.5 },
                    { stat: 'toolBoost.fishingReelPower', value: 2 },
                    { stat: 'toolBoost.fishingRarityPower', value: 1 },
                ],
            },
            requiredResources: [{ 202: 35, 303: 75, 690: 6, 691: 3, 11030: 15 }],
        },
        11002: {
            id: 11002,
            name: 'Advanced Tacklebox',
            value: 54500,
            tradeable: true,
            enchantmentTier: 3,
            augmentationCost: { 204: 7, 304: 13, 11031: 2 },
            craftingExperience: 3648,
            craftingLevel: 32,
            requiredLevel: { fishing: 30 },



            itemImage: '/images/fishing/Advanced_Tacklebox.png',
            tool: true,
            class: 'equipment',
            craftingDescription:
                'An advanced fishing tacklebox. Gives 9 fishing levels, 25 bait power, 15 reel power, and 6 bonus rarity.',
            extraTooltipInfo: "An advanced fishing tacklebox for those who've gotten more than their toes wet in fishing.",
            category: 'Fishing',
            enchantable: true,
            tags: ['tool', 'crafting'],
            equipmentStats: {
                slot: 'tacklebox',
                toolBoost: [
                    { skill: 'fishing', boost: 9 },
                    { skill: 'fishingBaitPower', boost: 25 },
                    { skill: 'fishingReelPower', boost: 15 },
                    { skill: 'fishingRarityPower', boost: 6 },
                ],
                augmentationBonus: [
                    { stat: 'toolBoost.fishing', value: 1.5 },
                    { stat: 'toolBoost.fishingBaitPower', value: 2.5 },
                    { stat: 'toolBoost.fishingReelPower', value: 3 },
                    { stat: 'toolBoost.fishingRarityPower', value: 1.5 },
                ],
            },
            requiredResources: [{ 204: 65, 304: 135, 690: 8, 691: 8, 692: 8, 11031: 15 }],
        },
        11003: {
            id: 11003,
            name: 'Pro Tacklebox',
            value: 500000,
            tradeable: true,
            enchantmentTier: 4,
            augmentationCost: { 205: 10, 305: 20, 11031: 5 },
            craftingExperience: 12280,
            craftingLevel: 52,
            requiredLevel: { fishing: 40 },



            itemImage: '/images/fishing/Pro_Tacklebox.png',
            tool: true,
            class: 'equipment',
            craftingDescription:
                'A pro fishing tacklebox! Gives 12 fishing levels, 30 bait power, 20 reel power, and 10 bonus rarity.',
            extraTooltipInfo: 'The pro fishing tacklebox has nearly everything you could possibly need to catch fish.',
            category: 'Fishing',
            enchantable: true,
            tags: ['tool', 'crafting'],
            equipmentStats: {
                slot: 'tacklebox',
                toolBoost: [
                    { skill: 'fishing', boost: 12 },
                    { skill: 'fishingBaitPower', boost: 30 },
                    { skill: 'fishingReelPower', boost: 20 },
                    { skill: 'fishingRarityPower', boost: 10 },
                ],
                augmentationBonus: [
                    { stat: 'toolBoost.fishing', value: 2 },
                    { stat: 'toolBoost.fishingBaitPower', value: 3.5 },
                    { stat: 'toolBoost.fishingReelPower', value: 4 },
                    { stat: 'toolBoost.fishingRarityPower', value: 2 },
                ],
            },
            requiredResources: [{ 205: 100, 305: 200, 690: 8, 691: 8, 692: 8, 693: 8, 11031: 50 }],
            rarity: 'uncommon',
        },
        11004: {
            id: 11004,
            name: 'Supreme Tacklebox',
            value: 2000000,
            tradeable: true,
            enchantmentTier: 5,
            augmentationCost: { 206: 14, 306: 27, 11031: 16, 11032: 1, 11036: 3 },
            craftingExperience: 28560,
            craftingLevel: 72,
            requiredLevel: { fishing: 50 },



            itemImage: '/images/fishing/Supreme_Tacklebox.png',
            tool: true,
            class: 'equipment',
            craftingDescription:
                'A supreme fishing tacklebox! Gives 15 fishing levels, 35 bait power, 25 reel power, and 15 bonus rarity.',
            extraTooltipInfo:
                'A supreme fishing tacklebox rife with all the bits and bobs a master fisherman would need to fish up just about anything.',
            category: 'Fishing',
            enchantable: true,
            tags: ['tool', 'crafting'],
            equipmentStats: {
                slot: 'tacklebox',
                toolBoost: [
                    { skill: 'fishing', boost: 15 },
                    { skill: 'fishingBaitPower', boost: 35 },
                    { skill: 'fishingReelPower', boost: 25 },
                    { skill: 'fishingRarityPower', boost: 15 },
                ],
                augmentationBonus: [
                    { stat: 'toolBoost.fishing', value: 2.5 },
                    { stat: 'toolBoost.fishingBaitPower', value: 4.5 },
                    { stat: 'toolBoost.fishingReelPower', value: 5 },
                    { stat: 'toolBoost.fishingRarityPower', value: 3.5 },
                ],
            },
            requiredResources: [
                {
                    206: 135,
                    306: 270,
                    690: 8,
                    691: 8,
                    692: 8,
                    693: 8,
                    11031: 160,
                    11032: 10,
                    11036: 30,
                },
            ],
            rarity: 'rare',
        },
        11005: {
            id: 11005,
            name: "Ocean's Embrace",
            value: 15000000,
            tradeable: false,
            enchantmentTier: 8,
            augmentationCost: { 11032: 300, 11033: 3, 11034: 3, 11035: 3, 11036: 300 },
            craftingExperience: 256000,
            craftingLevel: 90,
            requiredLevel: { fishing: 80 },
            forcedAugmentChance: 1,



            itemImage: '/images/fishing/Master_Tacklebox.png',
            tool: true,
            class: 'equipment',
            craftingDescription:
                'The ultimate fishing implement! Gives 40 fishing levels, 100 bait power, 100 reel power, and 60 bonus rarity. Enhances ancient fishing.',
            extraTooltipInfo:
                'The origin of this mythical equipment is lost to history but there is no doubt regarding its power. Enhances ancient fishing.',
            category: 'Fishing',
            enchantable: true,
            tags: ['tool', 'crafting'],
            equipmentStats: {
                slot: 'tacklebox',
                toolBoost: [
                    { skill: 'fishing', boost: 40 },
                    { skill: 'fishingBaitPower', boost: 100 },
                    { skill: 'fishingReelPower', boost: 100 },
                    { skill: 'fishingRarityPower', boost: 60 },
                ],
                itemSet: [10001, 10002],
                augmentationBonus: [
                    { stat: 'toolBoost.fishing', value: 5 },
                    { stat: 'toolBoost.fishingBaitPower', value: 7 },
                    { stat: 'toolBoost.fishingReelPower', value: 7.5 },
                    { stat: 'toolBoost.fishingRarityPower', value: 6 },
                ],
            },
            requiredResources: [{ 11032: 50, 11033: 1, 11034: 1, 11035: 1, 11036: 150 }],
            rarity: 'legendary',
        },
        11010: {
            id: 11010,
            name: 'Earthworm Bait',
            tradeable: true,
            value: 1,



            fishingBait: { bait: 5, reel: 5 },
            itemImage: 'images/fishing/bait/earthworm_hook.png',
            extraTooltipInfo: "A tiny lil' earthworm.",
            class: 'fish',
            tags: ['fishing'],
        },
        11011: {
            id: 11011,
            name: 'Fat Nightcrawler Bait',
            tradeable: true,
            value: 5,



            fishingBait: { level: 1, bait: 15, reel: 10, bonus: 5 },
            itemImage: 'images/fishing/bait/nightcrawler_hook.png',
            extraTooltipInfo: "A big ol' nightcrawler.",
            class: 'fish',
            tags: ['fishing'],
        },
        11012: {
            id: 11012,
            name: 'Glowbug Bait',
            tradeable: true,
            value: 5,



            fishingBait: { level: 1, bait: 10, reel: 15, bonus: 5 },
            itemImage: 'images/fishing/bait/glowbug_hook.png',
            extraTooltipInfo: 'A small glowbug.',
            class: 'fish',
            tags: ['fishing'],
        },
        11013: {
            id: 11013,
            name: 'Shrimp Tail Bait',
            tradeable: true,
            value: 35,
            craftingLevel: 5,
            craftingExperience: 15,
            craftingMultiplier: [5],



            fishingBait: { level: 1, bait: 20, reel: 10, bonus: 5 },
            itemImage: 'images/fishing/bait/shrimptail_hook.png',
            craftingDescription: 'Each craft results in 5 bait.',
            extraTooltipInfo: 'The tail of a shrimp.',
            class: 'fish',
            tags: ['crafting', 'fishing'],
            category: 'Fishing',
            requiredResources: [{ 60: 3 }],
        },
        11014: {
            id: 11014,
            name: 'Fish Guts Bait',
            tradeable: true,
            value: 50,
            craftingLevel: 20,
            craftingExperience: 35,
            requiredResources: [{ 61: 9 }, { 62: 6 }, { 63: 3 }],
            craftingMultiplier: [3, 3, 3],



            fishingBait: { level: 2, bait: 25, reel: 5, bonus: 10 },
            itemImage: 'images/fishing/bait/fish_guts_hook.png',
            craftingDescription: 'Each craft results in 3 bait.',
            extraTooltipInfo: 'Some fish guts. Ew.',
            class: 'fish',
            tags: ['crafting', 'fishing'],
            category: 'Fishing',
        },
        11015: {
            id: 11015,
            name: 'Smelly Meat Bait',
            tradeable: true,
            value: 75,



            fishingBait: { level: 2, bait: 15, reel: 15, bonus: 5 },
            itemImage: 'images/fishing/bait/smelly_meat_hook.png',
            extraTooltipInfo: 'Some smelly, probably not rotten, meat.',
            class: 'fish',
            tags: ['fishing'],
        },
        11016: {
            id: 11016,
            name: 'Hardened Hook Bait',
            craftingLevel: 35,
            craftingExperience: 75,
            tradeable: true,
            value: 100,
            craftingMultiplier: [12],



            fishingBait: { level: 3, reel: 35, bonus: 20 },
            itemImage: 'images/fishing/bait/hardened_hook.png',
            craftingDescription: 'Each craft results in 12 bait.',
            extraTooltipInfo: 'A hook designed to make reeling in big catches easier.',
            class: 'fish',
            tags: ['crafting', 'fishing'],
            category: 'Fishing',
            requiredResources: [{ 205: 3 }],
        },
        11017: {
            id: 11017,
            name: 'Alluring Lure Bait',
            craftingLevel: 35,
            craftingExperience: 75,
            tradeable: true,
            value: 100,
            craftingMultiplier: [14],



            fishingBait: { level: 3, bait: 30, bonus: 20 },
            itemImage: 'images/fishing/bait/alluring_lure.png',
            craftingDescription: 'Each craft results in 14 bait.',
            extraTooltipInfo: 'A shiny lure designed to entice even the most wary catches.',
            class: 'fish',
            tags: ['crafting', 'fishing'],
            category: 'Fishing',
            requiredResources: [{ 203: 2, 205: 1 }],
        },
        11018: {
            id: 11018,
            name: 'Writhing Tentacle Bait',
            tradeable: true,
            craftingLevel: 50,
            craftingExperience: 150,
            value: 666,
            craftingMultiplier: [6],



            fishingBait: { level: 5, bait: -30, reel: -30, bonus: 60 },
            itemImage: 'images/fishing/bait/writhing_tentacle_hook.png',
            craftingDescription:
                'Each craft results in 6 bait. A writhing tentacle that reacts when you poke it. Enhances ancient fishing.',
            extraTooltipInfo: 'An ancient writhing tentacle that reacts when you poke it. Enhances ancient fishing.',
            class: 'fish',
            tags: ['crafting', 'fishing'],
            category: 'Fishing',
            requiredResources: [{ 69: 1 }],
            rarity: 'uncommon',
        },
        11019: {
            id: 11019,
            name: 'Mysterious Bait',
            tradeable: true,
            value: 500,



            itemImage: 'images/fishing/bait/mysterious_bait_hook.png',
            extraTooltipInfo: 'Who knows what effects using this bait would have? Each and every one of them is unique!',
            class: 'fish',
            tags: ['fishing'],
        },
        11030: {
            id: 11030,
            name: 'Rotten Driftwood',
            tradeable: true,
            value: 15,
            experience: 15,
            heat: 25,
            itemImage: 'images/fishing/material/rotten_driftwood.png',
            extraTooltipInfo: 'A rotten piece of driftwood. Could it still be used for something?',
            class: 'fish',
            tags: [],
        },
        11031: {
            id: 11031,
            name: 'Sturdy Driftwood',
            tradeable: true,
            value: 50,
            experience: 50,
            heat: 75,
            itemImage: 'images/fishing/material/sturdy_driftwood.png',
            extraTooltipInfo: 'A sturdy piece of driftwood. Could it still be used for something?',
            class: 'fish',
            tags: [],
        },
        11032: {
            id: 11032,
            name: 'Aquamarine',
            tradeable: true,
            value: 15000,
            experience: 250,
            itemImage: 'images/fishing/material/aquamarine.png',
            extraTooltipInfo: 'An aquamarine crystal. If you hold it up to your ear you can look like an idiot!',
            class: 'fish',
            tags: [],
        },
        11033: {
            id: 11033,
            name: 'Ancient Fishing Rod',
            tradeable: false,
            value: 2500000,
            experience: 2500,
            craftable: true,
            craftingLevel: 90,
            craftingExperience: 15000,
            requiredResources: [{ 11032: 50, 11034: 1, 11036: 50 }, { 11032: 50, 11035: 1, 11036: 50 }, { 12009: 300 }],
            itemImage: 'images/fishing/rod_master.png',
            extraTooltipInfo:
                "An ancient fishing rod, straight out of a madman's fantasy. Not much good on its own in this condition; it would take a master crafter to repair it...",
            class: 'fish',
            tags: ['crafting'],
            category: 'Fishing',
            rarity: 'rare',
        },
        11034: {
            id: 11034,
            name: 'Ancient Harpoon',
            tradeable: false,
            value: 2500000,
            experience: 2500,
            craftable: true,
            craftingLevel: 90,
            craftingExperience: 15000,
            requiredResources: [{ 11032: 50, 11033: 1, 11036: 50 }, { 11032: 50, 11035: 1, 11036: 50 }, { 12009: 300 }],
            itemImage: 'images/fishing/harpoon_master.png',
            extraTooltipInfo:
                'An ancient harpoon, probably dragged up from some ancient aquatic ruin. Not much good on its own in this condition; it would take a master crafter to repair it...',
            class: 'fish',
            tags: ['crafting'],
            category: 'Fishing',
            rarity: 'rare',
        },
        11035: {
            id: 11035,
            name: 'Ancient Fishing Net',
            tradeable: false,
            value: 2500000,
            experience: 2500,
            craftable: true,
            craftingLevel: 90,
            craftingExperience: 15000,
            requiredResources: [{ 11032: 50, 11033: 1, 11036: 50 }, { 11032: 50, 11034: 1, 11036: 50 }, { 12009: 300 }],
            itemImage: 'images/fishing/net_master.png',
            extraTooltipInfo:
                "An ancient fishing net, the material it's made out of appears to be alive. Not much good on its own in this condition; it would take a master crafter to repair it...",
            class: 'fish',
            tags: ['crafting'],
            category: 'Fishing',
            rarity: 'rare',
        },
        11036: {
            id: 11036,
            name: 'Mystical Driftwood',
            tradeable: true,
            value: 150,
            experience: 150,
            heat: 125,
            itemImage: 'images/fishing/material/mystical_driftwood.png',
            extraTooltipInfo: 'An oddly glowing piece of driftwood. Could it still be used for something?',
            class: 'fish',
            tags: [],
            rarity: 'uncommon',
        },
        11037: {
            id: 11037,
            name: 'Dwarven Alloy',
            tradeable: false,
            value: 2500000,
            experience: 2500,
            craftable: true,
            craftingLevel: 90,
            craftingExperience: 15000,
            requiredResources: [{ 12010: 300 }],
            itemImage: 'images/mining/dwarven_ingot.png',
            extraTooltipInfo: 'An alloy made from metals you do not recognize.',
            class: 'bar',
            tags: ['crafting'],
            category: 'Mining',
            rarity: 'rare',
        },
        11038: {
            id: 11038,
            name: 'Dwarven Ingot',
            tradeable: false,
            value: 2500000,
            experience: 2500,
            craftable: true,
            craftingLevel: 90,
            craftingExperience: 15000,
            requiredResources: [{ 12010: 300 }],
            itemImage: 'images/mining/dwarven_ingot_2.png',
            extraTooltipInfo: 'An incredibly hard dwarven ingot. It is basically impossible to work with.',
            class: 'bar',
            tags: ['crafting'],
            category: 'Mining',
            rarity: 'rare',
        },
        11039: {
            id: 11039,
            name: 'Dwarven Mold',
            tradeable: false,
            value: 2500000,
            experience: 2500,
            craftable: true,
            craftingLevel: 90,
            craftingExperience: 15000,
            requiredResources: [{ 12010: 300 }],
            itemImage: 'images/mining/dwarven_ingot_3.png',
            extraTooltipInfo: 'A sort of mold to form a tool with.',
            class: 'bar',
            tags: ['crafting'],
            category: 'Mining',
            rarity: 'rare',
        },
        11040: {
            id: 11040,
            name: 'Very Mysterious Seedling',
            tradeable: false,
            value: 2500000,
            experience: 2500,
            craftable: true,
            craftingLevel: 90,
            craftingExperience: 15000,
            requiredResources: [{ 12011: 300 }],
            itemImage: 'images/farming/mysterious_plant_44.png',
            extraTooltipInfo: 'It is looking at you.',
            class: 'bar',
            tags: ['crafting'],
            category: 'Foraging',
            rarity: 'rare',
        },
        11041: {
            id: 11041,
            name: 'Elder Sap',
            tradeable: false,
            value: 2500000,
            experience: 2500,
            craftable: true,
            craftingLevel: 90,
            craftingExperience: 15000,
            requiredResources: [{ 12011: 300 }],
            itemImage: 'images/foraging/elder_sap.png',
            extraTooltipInfo: 'Sap taken from a tree that is much older than you are.',
            class: 'bar',
            tags: ['crafting'],
            category: 'Foraging',
            rarity: 'rare',
        },
        11042: {
            id: 11042,
            name: 'World Tree Branch',
            tradeable: false,
            value: 2500000,
            experience: 2500,
            craftable: true,
            craftingLevel: 90,
            craftingExperience: 15000,
            requiredResources: [{ 12011: 300 }],
            itemImage: 'images/foraging/world_branch.png',
            extraTooltipInfo: 'Basically just a shiny branch!',
            class: 'bar',
            tags: ['crafting'],
            category: 'Foraging',
            rarity: 'rare',
        },
        12000: {
            name: "Fisherman's Smock",
            id: 12000,
            enchantmentTier: 3,
            augmentationCost: { 12009: 10 },
            requiredResources: [{ 12009: 150 }],
            equipmentStats: {
                slot: 'body',
                toolBoost: [{ skill: 'fishing', boost: 0 }],
                augmentationBonus: [
                    { stat: 'toolBoost.fishing', value: 1 },
                    { stat: 'toolBoost.fishingBaitPower', value: 1 },
                    { stat: 'toolBoost.fishingReelPower', value: 1 },
                    { stat: 'toolBoost.fishingRarityPower', value: 1 },
                ],
                itemSet: [10001, 10002],
            },
            value: 250000,
            tradeable: true,
            requiredLevel: { constitution: 1, attack: 1, strength: 1, defense: 1 },
            relatedSkill: 'fishing',
            craftingLevel: 60,
            craftingExperience: 9001,
            enchantmentOverrideSlot: 'fishingset',



            category: 'Fishing',
            itemImage: '/images/fishing/equipment/smock.png',
            extraTooltipInfo: 'A smock for fishing! You can already feel it making your tools stronger.',
            class: 'equipment',
            visual: 'smock',
            tags: ['armor', 'crafting'],
            rarity: 'uncommon',
        },
        12001: {
            name: "Fisherman's Bucket Hat",
            id: 12001,
            enchantmentTier: 3,
            augmentationCost: { 12009: 10 },
            requiredResources: [{ 12009: 150 }],
            equipmentStats: {
                slot: 'helm',
                toolBoost: [{ skill: 'fishing', boost: 0 }],
                augmentationBonus: [
                    { stat: 'toolBoost.fishing', value: 1 },
                    { stat: 'toolBoost.fishingBaitPower', value: 1 },
                    { stat: 'toolBoost.fishingReelPower', value: 1 },
                    { stat: 'toolBoost.fishingRarityPower', value: 1 },
                ],
                itemSet: [10001, 10002],
            },
            value: 250000,
            tradeable: true,
            requiredLevel: { constitution: 1, attack: 1, strength: 1, defense: 1 },
            relatedSkill: 'fishing',
            craftingLevel: 60,
            craftingExperience: 9001,
            enchantmentOverrideSlot: 'fishingset',



            category: 'Fishing',
            itemImage: '/images/fishing/equipment/bucket_hat.png',
            extraTooltipInfo: 'A hat for fishing! You can already feel it making your reflexes sharper.',
            class: 'equipment',
            visual: 'bucket-hat',
            tags: ['armor', 'crafting'],
            rarity: 'uncommon',
        },
        12002: {
            name: "Fisherman's Waders",
            id: 12002,
            enchantmentTier: 3,
            augmentationCost: { 12009: 10 },
            requiredResources: [{ 12009: 150 }],
            equipmentStats: {
                slot: 'legs',
                toolBoost: [{ skill: 'fishing', boost: 0 }],
                augmentationBonus: [
                    { stat: 'toolBoost.fishing', value: 1 },
                    { stat: 'toolBoost.fishingBaitPower', value: 1 },
                    { stat: 'toolBoost.fishingReelPower', value: 1 },
                    { stat: 'toolBoost.fishingRarityPower', value: 1 },
                ],
                itemSet: [10001, 10002],
            },
            value: 250000,
            tradeable: true,
            requiredLevel: { constitution: 1, attack: 1, strength: 1, defense: 1 },
            relatedSkill: 'fishing',
            craftingLevel: 60,
            craftingExperience: 9001,
            enchantmentOverrideSlot: 'fishingset',



            category: 'Fishing',
            itemImage: '/images/fishing/equipment/waders.png',
            extraTooltipInfo: 'Waders for fishing! You can already feel it making your ability to bait fish stronger.',
            class: 'equipment',
            visual: 'waders',
            tags: ['armor', 'crafting'],
            rarity: 'uncommon',
        },
        12003: {
            name: "Miner's Smock",
            id: 12003,
            enchantmentTier: 3,
            forcedEnchant: 68,
            forcedEnchantAmount: 3,
            augmentationCost: { 12010: 10 },
            requiredResources: [{ 12010: 150 }],
            equipmentStats: {
                slot: 'body',
                toolBoost: [{ skill: 'mining', boost: 0 }],
                augmentationBonus: [{ stat: 'toolBoost.mining', value: 1 }],
                itemSet: [10007, 10008],
            },
            value: 250000,
            tradeable: true,
            requiredLevel: { constitution: 1, attack: 1, strength: 1, defense: 1 },
            relatedSkill: 'mining',
            craftingLevel: 60,
            craftingExperience: 9001,



            category: 'Mining',
            itemImage: '/images/fishing/equipment/smock.png',
            extraTooltipInfo: 'A smock to rub the coal dust on after a long day in the mines.',
            class: 'equipment',
            visual: 'smock',
            tags: ['armor', 'crafting'],
            rarity: 'uncommon',
        },
        12004: {
            name: "Miner's Lantern Helmet",
            id: 12004,
            enchantmentTier: 3,
            forcedEnchant: 2,
            forcedEnchantAmount: 3,
            augmentationCost: { 12010: 10 },
            requiredResources: [{ 12010: 150 }],
            equipmentStats: {
                slot: 'helm',
                toolBoost: [{ skill: 'mining', boost: 0 }],
                augmentationBonus: [{ stat: 'toolBoost.mining', value: 1 }],
                itemSet: [10007, 10008],
            },
            value: 250000,
            tradeable: true,
            requiredLevel: { constitution: 1, attack: 1, strength: 1, defense: 1 },
            relatedSkill: 'mining',
            craftingLevel: 60,
            craftingExperience: 9001,



            category: 'Mining',
            itemImage: '/images/fishing/equipment/bucket_hat.png',
            extraTooltipInfo: "OSHA improved! Let's you see better! Wow!",
            class: 'equipment',
            visual: 'bucket-hat',
            tags: ['armor', 'crafting'],
            rarity: 'uncommon',
        },
        12005: {
            name: "Miner's Trousers",
            id: 12005,
            enchantmentTier: 3,
            forcedEnchant: 67,
            forcedEnchantAmount: 3,
            augmentationCost: { 12010: 10 },
            requiredResources: [{ 12010: 150 }],
            equipmentStats: {
                slot: 'legs',
                toolBoost: [{ skill: 'mining', boost: 0 }],
                augmentationBonus: [{ stat: 'toolBoost.mining', value: 1 }],
                itemSet: [10007, 10008],
            },
            value: 250000,
            tradeable: true,
            requiredLevel: { constitution: 1, attack: 1, strength: 1, defense: 1 },
            relatedSkill: 'mining',
            craftingLevel: 60,
            craftingExperience: 9001,



            category: 'Mining',
            itemImage: '/images/fishing/equipment/waders.png',
            extraTooltipInfo:
                'A pair of trousers that you swear definitely makes you better at mining despite being a simple pair of pants. Are they magical?',
            class: 'equipment',
            visual: 'waders',
            tags: ['armor', 'crafting'],
            rarity: 'uncommon',
        },
        12006: {
            name: "Lumberjack's Vest",
            id: 12006,
            enchantmentTier: 3,
            forcedEnchant: 35,
            forcedEnchantAmount: 3,
            augmentationCost: { 12011: 10 },
            requiredResources: [{ 12011: 150 }],
            equipmentStats: {
                slot: 'body',
                toolBoost: [{ skill: 'foraging', boost: 0 }],
                augmentationBonus: [{ stat: 'toolBoost.foraging', value: 1 }],
                itemSet: [10005, 10006],
            },
            value: 250000,
            tradeable: true,
            requiredLevel: { constitution: 1, attack: 1, strength: 1, defense: 1 },
            relatedSkill: 'foraging',
            craftingLevel: 60,
            craftingExperience: 9001,



            category: 'Foraging',
            itemImage: '/images/fishing/equipment/smock.png',
            extraTooltipInfo: 'Makes you want to shout timber.',
            class: 'equipment',
            visual: 'smock',
            tags: ['armor', 'crafting'],
            rarity: 'uncommon',
        },
        12007: {
            name: "Lumberjack's Hat",
            id: 12007,
            enchantmentTier: 3,
            forcedEnchant: 55,
            forcedEnchantAmount: 3,
            augmentationCost: { 12011: 10 },
            requiredResources: [{ 12011: 150 }],
            equipmentStats: {
                slot: 'helm',
                toolBoost: [{ skill: 'foraging', boost: 0 }],
                augmentationBonus: [{ stat: 'toolBoost.foraging', value: 1 }],
                itemSet: [10005, 10006],
            },
            value: 250000,
            tradeable: true,
            requiredLevel: { constitution: 1, attack: 1, strength: 1, defense: 1 },
            relatedSkill: 'foraging',
            craftingLevel: 60,
            craftingExperience: 9001,



            category: 'Foraging',
            itemImage: '/images/fishing/equipment/bucket_hat.png',
            extraTooltipInfo: 'If a tree falls on your head this will not help, but it can keep you warm!',
            class: 'equipment',
            visual: 'bucket-hat',
            tags: ['armor', 'crafting'],
            rarity: 'uncommon',
        },
        12008: {
            name: "Lumberjack's Trousers",
            id: 12008,
            enchantmentTier: 3,
            forcedEnchant: 56,
            forcedEnchantAmount: 3,
            augmentationCost: { 12011: 10 },
            requiredResources: [{ 12011: 150 }],
            equipmentStats: {
                slot: 'legs',
                toolBoost: [{ skill: 'foraging', boost: 0 }],
                augmentationBonus: [{ stat: 'toolBoost.foraging', value: 1 }],
                itemSet: [10005, 10006],
            },
            value: 250000,
            tradeable: true,
            requiredLevel: { constitution: 1, attack: 1, strength: 1, defense: 1 },
            relatedSkill: 'foraging',
            craftingLevel: 60,
            craftingExperience: 9001,



            category: 'Foraging',
            itemImage: '/images/fishing/equipment/waders.png',
            extraTooltipInfo: "You're a lumberjack and you're okay!",
            class: 'equipment',
            visual: 'waders',
            tags: ['armor', 'crafting'],
            rarity: 'uncommon',
        },
        12009: {
            id: 12009,
            name: 'Fishing Shard',
            tradeable: false,
            itemImage: '/images/fishing/fishing_shard.png',
            extraTooltipInfo: 'A shard for creating skilling gear.',
            class: 'gem',
            tags: ['shard', 'fragment'],
            rarity: 'uncommon',
        },
        12010: {
            id: 12010,
            name: 'Mining Shard',
            tradeable: false,
            itemImage: '/images/mining/mining_shard.png',
            extraTooltipInfo: 'A shard for creating skilling gear.',
            class: 'gem',
            tags: ['shard', 'fragment'],
            rarity: 'uncommon',
        },
        12011: {
            id: 12011,
            name: 'Foraging Shard',
            tradeable: false,
            itemImage: '/images/foraging/foraging_shard.png',
            extraTooltipInfo: 'A shard for creating skilling gear.',
            class: 'gem',
            tags: ['shard', 'fragment'],
            rarity: 'uncommon',
        },
        12012: {
            id: 12012,
            name: 'Prismatic Dust',
            tradeable: false,
            itemImage: '/images/magic/pris_dust.png',
            extraTooltipInfo:
                'A fine dust that radiates a prismatic luster; formed when too much power is imbued into a Black Opal',
            class: 'gem',
            tags: [],
            rarity: 'legendary',
        },
        13000: {
            id: 13000,
            name: 'Combat Manual - Volume 1',
            itemImage: '/images/combat/ability_book/melee.png',
            value: 42000,
            extraTooltipInfo:
                "A manual on how to take advantage of your weapon's edge. Apparently using the sharp part means it will hurt something more, who could have known?",
            relatedAbility: 4,
            class: 'gem',
            tags: ['book'],
        },
        13001: {
            id: 13001,
            name: 'Combat Manual - Volume 2',
            itemImage: '/images/combat/ability_book/melee.png',
            value: 42000,
            extraTooltipInfo:
                'A manual on how to take poke things really good. If the weapon has a decent tip, you can stab things! Wow!',
            relatedAbility: 5,
            class: 'gem',
            tags: ['book'],
        },
        13002: {
            id: 13002,
            name: 'Combat Manual - Volume 3',
            itemImage: '/images/combat/ability_book/melee.png',
            value: 42000,
            extraTooltipInfo:
                'A manual on how to just hit things hard. Crushing things is deceptively simple and to truly pummel your enemy you must understand that being blunt is sometimes the only way to go.',
            relatedAbility: 6,
            class: 'gem',
            tags: ['book'],
        },
        13003: {
            id: 13003,
            name: 'Spell Tome - Fire Ball',
            itemImage: '/images/combat/ability_book/red.png',
            value: 42000,
            extraTooltipInfo:
                'A basic tome from the Academy formerly used for teaching aspiring mages how to control and utilize fire. Be careful where you practice it!',
            relatedAbility: 7,
            class: 'gem',
            tags: ['book'],
        },
        13004: {
            id: 13004,
            name: 'Spell Tome - Flamethrower',
            itemImage: '/images/combat/ability_book/red.png',
            value: 42000,
            extraTooltipInfo:
                'An intermediate tome from the Academy formerly used for teaching mages how to utilize flames in a more lively manner.',
            relatedAbility: 18,
            class: 'gem',
            tags: ['book'],
        },
        13005: {
            id: 13005,
            name: 'Ballistics 101',
            itemImage: '/images/combat/ability_book/range.png',
            value: 42000,
            extraTooltipInfo:
                'A textbook that explains the basic principles regarding how something that goes up usually comes back down.',
            relatedAbility: 12,
            class: 'gem',
            tags: ['book'],
        },
        13006: {
            id: 13006,
            name: 'Projectile Based Diplomacy - I',
            itemImage: '/images/combat/ability_book/range.png',
            value: 42000,
            extraTooltipInfo:
                'A book that outline the merits of using projectiles, preferably several at once, to really get your point across.',
            relatedAbility: 21,
            class: 'gem',
            tags: ['book'],
        },
        13007: {
            id: 13007,
            name: 'Projectile Based Diplomacy - II',
            itemImage: '/images/combat/ability_book/range.png',
            value: 42000,
            extraTooltipInfo:
                'A book that outline the merits of using projectiles, even just a single well placed one, to really get your point across.',
            relatedAbility: 23,
            class: 'gem',
            tags: ['book'],
        },
        13008: {
            id: 13008,
            name: 'Projectile Based Diplomacy - III',
            itemImage: '/images/combat/ability_book/range.png',
            value: 42000,
            extraTooltipInfo:
                'A book that outline the merits of using projectiles, especially when trying to distract and divert, to really get your point across.',
            relatedAbility: 24,
            class: 'gem',
            tags: ['book'],
        },
        13009: {
            id: 13009,
            name: 'Apocalyptic Tome',
            itemImage: '/images/combat/ability_book/highmagic.png',
            value: 42000,
            extraTooltipInfo:
                'A spell tome that contains the necessary rituals and rites for summoning your own miniature apocalypse.',
            relatedAbility: 25,
            class: 'gem',
            tags: ['book'],
        },
        13010: {
            id: 13010,
            name: 'Intermediate Combat Manual - Volume 1',
            itemImage: '/images/combat/ability_book/melee.png',
            value: 42000,
            extraTooltipInfo: 'A manual on how to hit two enemies at once in one swing.',
            relatedAbility: 22,
            class: 'gem',
            tags: ['book'],
        },
        13011: {
            id: 13011,
            name: 'City Decree',
            itemImage: '/images/combat/ability_book/city_decree.png',
            value: 42000,
            extraTooltipInfo:
                'Grants the owner the ability to summon City Guards as reinforcements in combat. You should probably feel a little guilty if you bring them into a fight they cannot survive.',
            relatedAbility: 48,
            class: 'gem',
            tags: ['book'],
        },
        13012: {
            id: 13012,
            name: 'How To - First Aid',
            itemImage: '/images/combat/ability_book/green.png',
            value: 42000,
            extraTooltipInfo: 'Teaches the fundamentals of mid-combat first aid rending.',
            relatedAbility: 47,
            class: 'gem',
            tags: ['book'],
        },
        13013: {
            id: 13013,
            name: 'Defending the Weak - An Excerpt',
            itemImage: '/images/combat/ability_book/shield.png',
            value: 42000,
            extraTooltipInfo:
                'A few pages that explain that you can actually use your shield to defend others instead of just yourself.',
            relatedAbility: 49,
            class: 'gem',
            tags: ['book'],
        },
        13014: {
            // TODO replace cleave with something else
            id: 13014,
            name: 'Combat Manual - Volume 4',
            itemImage: '/images/combat/ability_book/melee.png',
            value: 42000,
            extraTooltipInfo:
                'A manual on swinging through one enemy and into the next one. A battle cry is optional but recommended!',
            relatedAbility: 22,
            class: 'gem',
            tags: ['book'],
        },
        13015: {
            id: 13015,
            name: 'Attention Getting Tactics',
            itemImage: '/images/combat/ability_book/long_scroll.png',
            value: 42000,
            extraTooltipInfo:
                "It's a long scroll that explains in detail how awful you are. It gives you ideas on what to say to other people! Very healthy.",
            relatedAbility: 54,
            class: 'gem',
            tags: ['book'],
        },
        13016: {
            id: 13016,
            name: 'Smoke and Mirrors',
            itemImage: '/images/combat/ability_book/magic.png',
            value: 42000,
            extraTooltipInfo: 'How to use the deceit and chaos to your aid on the battlefield.',
            relatedAbility: 57,
            class: 'gem',
            tags: ['book'],
        },
        13017: {
            id: 13017,
            name: 'All Ghillied Up',
            itemImage: '/images/combat/ability_book/green_2.png',
            value: 42000,
            extraTooltipInfo: 'Sticks, grass, leaves, and other foliage can make a proper bush out of you!',
            relatedAbility: 58,
            class: 'gem',
            tags: ['book'],
        },
        13018: {
            id: 13018,
            name: 'Ice, Ice, Ice',
            itemImage: '/images/combat/ability_book/magic.png',
            value: 42000,
            extraTooltipInfo: 'ICE!',
            relatedAbility: 59,
            class: 'gem',
            tags: ['book'],
        },
        13019: {
            id: 13019,
            name: "Trapper's Guide",
            itemImage: '/images/combat/ability_book/range.png',
            value: 42000,
            extraTooltipInfo: 'Setting traps is just one of the many ways you may shape the battlefield.',
            relatedAbility: 60,
            class: 'gem',
            tags: ['book'],
        },
        15000: {
            id: 15000,
            name: "Slayer's Mark",
            tradeable: false,
            itemImage: '/images/misc/slayertoken.png',
            heat: 1,
            extraTooltipInfo: 'A type of trophy taken from a slain foe.',
            class: 'gem',
            tags: [],
        },
        15001: {
            id: 15001,
            name: 'Token of Ownership',
            tradeable: false,
            itemImage: '/images/misc/itemtoken.png',
            heat: 1,
            extraTooltipInfo: 'A token representing that some item was obtained.',
            class: 'gem',
            tags: [],
        },
        15002: {
            id: 15002,
            name: 'Token of Action',
            tradeable: false,
            itemImage: '/images/misc/locationtoken.png',
            heat: 1,
            extraTooltipInfo: 'A token representing that some action was completed.',
            class: 'gem',
            tags: [],
        },
        25000: {
            id: 25000,
            name: 'Monster Tooth',
            itemImage: '/images/combat/materials/junk/tooth.png',
            value: 150,
            extraTooltipInfo: 'A tooth taken from a slain monster; might be worth something to someone.',
            class: 'junk',
            rarity: 'junk',
            tags: [],
        },
        25001: {
            id: 25001,
            name: 'Monster Horn',
            itemImage: '/images/combat/materials/junk/horn.png',
            value: 250,
            extraTooltipInfo: 'A horn taken from a slain monster; might be worth something to someone.',
            class: 'junk',
            rarity: 'junk',
            tags: [],
        },
        25002: {
            id: 25002,
            name: 'Sturdy Horn',
            itemImage: '/images/combat/materials/junk/horn_2.png',
            value: 500,
            extraTooltipInfo: 'A sturdy horn taken from a slain monster; might be worth something to someone.',
            class: 'junk',
            rarity: 'junk',
            tags: [],
        },
        25003: {
            id: 25003,
            name: 'Old Coins',
            itemImage: '/images/combat/materials/junk/old_coins.png',
            value: 1000,
            extraTooltipInfo: 'Some old coins. Might be worth something to a collector',
            class: 'junk',
            rarity: 'junk',
            tags: [],
        },
        25004: {
            id: 25004,
            name: 'Primitive Coin',
            itemImage: '/images/combat/materials/junk/primitive_coin.png',
            value: 2500,
            extraTooltipInfo: 'A rather heavy, yet primitive, gold coin. This could easily be sold for a tidy sum.',
            class: 'junk',
            rarity: 'junk',
            tags: [],
        },
        25005: {
            id: 25005,
            name: 'Undead Token',
            itemImage: '/images/combat/materials/junk/undead_token.png',
            value: 5000,
            extraTooltipInfo: 'Some sort of token taken from the undead. Someone might be interested in it.',
            class: 'junk',
            rarity: 'junk',
            tags: [],
        },
        25006: {
            id: 25006,
            name: 'Woodland Trinket',
            itemImage: '/images/combat/materials/junk/woodland_trinket.png',
            value: 5000,
            extraTooltipInfo: 'A trinket taken from the Elves; might be worth something to someone.',
            class: 'junk',
            rarity: 'junk',
            tags: [],
        },
        25007: {
            id: 25007,
            name: 'Intact Wing',
            itemImage: '/images/combat/materials/junk/wing.png',
            value: 5000,
            extraTooltipInfo: 'A mostly intact wing. Someone might be interested in it.',
            class: 'junk',
            rarity: 'junk',
            tags: [],
        },
        25008: {
            id: 25008,
            name: 'Ornate Trinket',
            itemImage: '/images/combat/materials/junk/ornate_trinket.png',
            value: 15000,
            extraTooltipInfo: 'A rather ornate trinket; it should be worth a bit.',
            class: 'junk',
            rarity: 'junk',
            tags: [],
        },
        25009: {
            id: 25009,
            name: 'Useless Metal Scraps',
            itemImage: '/images/combat/materials/junk/metal_scraps.png',
            value: 100,
            extraTooltipInfo:
                'Useless metal scraps made from some poor quality material. Could probably be sold to someone for cheap.',
            class: 'junk',
            rarity: 'junk',
            tags: [],
        },
        25010: {
            id: 25010,
            name: 'Exotic Trinket',
            itemImage: '/images/combat/materials/junk/exotic_trinket.png',
            value: 25000,
            extraTooltipInfo:
                'An exotic trinket from some unknown origin. Should be worth quite a bit to the right person.',
            class: 'junk',
            rarity: 'junk',
            tags: [],
        },
        25011: {
            id: 25011,
            name: 'Demonic Statue',
            itemImage: '/images/combat/materials/junk/demonic_statue.png',
            value: 35000,
            extraTooltipInfo:
                'A statue made from some sort of gem-like material depicting a small demon. May be worth quite a bit if you can find a buyer.',
            class: 'junk',
            rarity: 'junk',
            tags: [],
        },
        25012: {
            id: 25012,
            name: 'Monster Claws',
            itemImage: '/images/combat/materials/junk/claws.png',
            value: 100,
            extraTooltipInfo: 'Claws taken from a slain monster; might be worth something to someone.',
            class: 'junk',
            rarity: 'junk',
            tags: [],
        },
        25013: {
            id: 25013,
            name: 'Bottled Blood',
            itemImage: '/images/combat/materials/junk/blood.png',
            value: 10000,
            extraTooltipInfo: 'Slightly magical blood taken from something. May be valuable to someone.',
            class: 'junk',
            rarity: 'junk',
            tags: [],
        },
        25014: {
            id: 25014,
            name: 'Broken Armaments',
            itemImage: '/images/combat/materials/junk/broken_sword.png',
            value: 1000,
            extraTooltipInfo:
                'Shattered pieces of equipment that probably is not worth salvaging by you; perhaps someone else may want to buy it.',
            class: 'junk',
            rarity: 'junk',
            tags: [],
        },
        25015: {
            id: 25015,
            name: 'Creature Eggs',
            itemImage: '/images/combat/materials/junk/eggs.png',
            value: 3000,
            extraTooltipInfo: 'Eggs from some creature. Probably best to get rid of this quickly.',
            class: 'junk',
            rarity: 'junk',
            tags: [],
        },
        25016: {
            id: 25016,
            name: 'Dwarven Coins',
            itemImage: '/images/combat/materials/junk/dwarven_coins.png',
            value: 7500,
            extraTooltipInfo: 'Shiny dwarven coins that are of no use to you. A vendor could exchange the currency.',
            class: 'junk',
            rarity: 'junk',
            tags: [],
        },
        25017: {
            id: 25017,
            name: 'Bone Shards',
            itemImage: '/images/combat/materials/junk/bone_shards.png',
            value: 350,
            extraTooltipInfo: 'Splinters of bone taken from a slain creature. Might be worth something to someone.',
            class: 'junk',
            rarity: 'junk',
            tags: [],
        },
        25018: {
            id: 25018,
            name: 'Giant Heart',
            itemImage: '/images/combat/materials/junk/giant_heart.png',
            value: 17500,
            extraTooltipInfo:
                'A giant heart, probably taken from a giant or similarly large creature. Superstition suggests making a meal with it will increase your attractiveness, but sadly that may be a wasted effort on you.',
            class: 'junk',
            rarity: 'junk',
            tags: [],
        },
        25019: {
            id: 25019,
            name: 'Ancient Armor Scraps',
            itemImage: '/images/combat/materials/junk/ancient_armor_scraps.png',
            value: 4000,
            extraTooltipInfo:
                'Scraps of some ancient piece of equipment. Its origin is unknown, but it may be worth something to the right person.',
            class: 'junk',
            rarity: 'junk',
            tags: [],
        },
        25020: {
            id: 25020,
            name: 'Unknown Rune',
            itemImage: '/images/combat/materials/junk/unknown_rune.png',
            value: 12500,
            extraTooltipInfo:
                'It appears to be a rune not created through conventional means. It is no use to you but someone may want it.',
            class: 'junk',
            rarity: 'junk',
            tags: [],
        },
        25021: {
            id: 25021,
            name: 'Light Armor Scraps',
            itemImage: '/images/combat/materials/junk/armor_scraps_2.png',
            value: 1250,
            extraTooltipInfo: 'Pieces of light armor that is too damaged to salvage. Might be worth something to someone.',
            class: 'junk',
            rarity: 'junk',
            tags: [],
        },
        25022: {
            id: 25022,
            name: 'Armor Scraps',
            itemImage: '/images/combat/materials/junk/armor_scraps_3.png',
            value: 1500,
            extraTooltipInfo: 'Pieces of armor that is too damaged to salvage. Might be worth something to someone.',
            class: 'junk',
            rarity: 'junk',
            tags: [],
        },
        25023: {
            id: 25023,
            name: 'Heavy Armor Scraps',
            itemImage: '/images/combat/materials/junk/armor_scraps.png',
            value: 1750,
            extraTooltipInfo: 'Pieces of heavy armor that is too damaged to salvage. Might be worth something to someone.',
            class: 'junk',
            rarity: 'junk',
            tags: [],
        },
        25024: {
            id: 25024,
            name: 'Tusk',
            itemImage: '/images/combat/materials/junk/tusk.png',
            value: 750,
            extraTooltipInfo: 'A tusk taken from a slain monster; might be worth something to someone.',
            class: 'junk',
            rarity: 'junk',
            tags: [],
        },
        25025: {
            id: 25025,
            name: 'Gem Shards',
            itemImage: '/images/combat/materials/junk/gem_shards.png',
            value: 2250,
            extraTooltipInfo:
                'Useless pieces of shattered gems. Not quite fine enough to be considered dust, but too small for you to properly refine or cut. Might be worth something to a vendor.',
            class: 'junk',
            rarity: 'junk',
            tags: [],
        },
        25026: {
            id: 25026,
            name: 'Goblin Fork',
            itemImage: '/images/combat/materials/junk/fork.png',
            value: 225,
            extraTooltipInfo:
                'A useless eating utensil used by goblins. Everyone knows you should just eat your meals whole! A vendor may want this.',
            class: 'junk',
            rarity: 'junk',
            tags: [],
        },
        25027: {
            id: 25027,
            name: 'Nature Stone',
            itemImage: '/images/combat/materials/junk/nature_stone.png',
            value: 10000,
            extraTooltipInfo:
                'A chunk of stone that appears to be imbued with life. Useless to you, but must be valuable to someone.',
            class: 'junk',
            rarity: 'junk',
            tags: [],
        },
        25028: {
            id: 25028,
            name: 'Fire Stone',
            itemImage: '/images/combat/materials/junk/fire_stone.png',
            value: 10000,
            extraTooltipInfo:
                'A chunk of stone that appears to be imbued with flame. Useless to you, but must be valuable to someone.',
            class: 'junk',
            rarity: 'junk',
            tags: [],
        },
        25029: {
            id: 25029,
            name: 'Ice Stone',
            itemImage: '/images/combat/materials/junk/nature_rune.png',
            value: 10000,
            extraTooltipInfo:
                'A chunk of stone that appears to be imbued with ice. Useless to you, but must be valuable to someone.',
            class: 'junk',
            rarity: 'junk',
            tags: [],
        },
        25030: {
            id: 25030,
            name: 'A Diamond Plated Bug',
            itemImage: '/images/chaticons/chat-icon-bugtester-diamond.png',
            value: 1000000,
            extraTooltipInfo: 'I wonder who added this in?',
            class: 'junk',
            rarity: 'junk',
            tags: [],
        },
        100000: {
            name: 'ban_hamer',
            id: 100000,
            tradeable: false,
            requiredLevel: { constitution: 1, attack: 1, strength: 1, defense: 1 },



            itemImage: '/images/combat/equipment/ban_hamer.png',
            itemIcon: '/images/combat/equipment/ban_hamer_icon.png',
            extraTooltipInfo: 'with this hammer you can play whac-a-mole more efficiently',
            class: 'equipment',
            visual: 'ban-hamer',
            category: ['weapon', 'combat'],
            tags: ['melee', 'weapon', 'twohand', 'crafting'],
            equipmentStats: { slot: 'weapon', attackSpeed: 42 },
        },


    };
    locations = {
        5: {
            // this location is the catch for actions that don't have locations.
            name: 'The Void',
            locID: 5,
            actionType: 'Action-Broken',
            baseDuration: 5000,
            activeMessage: 'In the Void',
            locationImage: '',
        },
        6: {
            // smithing location
            name: 'The Forges',
            locID: 6,
            actionType: 'Action-Smithing',
            baseDuration: 5000,
            activeMessage: 'Smithing at the Forges',
            locationImage: '',
            accessRequirements: {
                requiredSkills: [{ skill: 'smithing', level: 1 }],
                requiredItems: [],
                consumeRequiredItems: false,
                requiredEquipment: [],
                maxGroupSize: 1,
            },

        },
        7: {
            // cooking location
            name: 'The Cooking Guild',
            locID: 7,
            actionType: 'Action-Cooking',
            baseDuration: 5000,
            activeMessage: 'Cooking in the Cooking Guild',
            locationImage: '',
            accessRequirements: {
                requiredSkills: [{ skill: 'cooking', level: 1 }],
                requiredItems: [],
                consumeRequiredItems: false,
                requiredEquipment: [],
                maxGroupSize: 1,
            },

        },
        8: {
            // enchanting location
            name: 'The Academy',
            locID: 8,
            actionType: 'Action-Enchanting',
            baseDuration: 5000,
            activeMessage: 'Enchanting in the Academy',
            locationImage: '',
            accessRequirements: {
                requiredSkills: [{ skill: 'enchanting', level: 1 }],
                requiredItems: [],
                consumeRequiredItems: false,
                requiredEquipment: [],
                maxGroupSize: 1,
            },

        },
        9: {
            // runecrafting location
            name: 'The Runecrafting Shrines',
            locID: 9,
            actionType: 'Action-Runecrafting',
            baseDuration: 5000,
            activeMessage: 'Runecrafting at the Shrines',
            locationImage: '',
            accessRequirements: {
                requiredSkills: [{ skill: 'runecrafting', level: 1 }],
                requiredItems: [],
                consumeRequiredItems: false,
                requiredEquipment: [],
                maxGroupSize: 1,
            },

        },

        //Mining locations 50-100
        50: {
            name: 'Clay Pit',
            locID: 50,
            actionType: 'Action-Mining',
            actionVerb: 'Mine',
            baseDuration: 5000,
            activeMessage: 'Mining in the Clay Pit',
            locationImage: '/images/mining/clay_pit.jpg',
            accessRequirements: {
                requiredSkills: [{ skill: 'mining', level: 1 }],
                requiredItems: [],
                consumeRequiredItems: false,
                requiredEquipment: [],
                maxGroupSize: 1,
            },
            extraTooltipInfo: 'WIP',
            loot: [
                { id: 108, frequency: 40, minAmount: 1 }, //clay
                { id: 101, frequency: 20, minAmount: 1 }, //copper
                { id: 102, frequency: 20, minAmount: 1 }, //tin
                { id: 109, frequency: 10, minAmount: 1 }, //stone
                { id: 110, frequency: 10, minAmount: 1, maxAmount: 2 }, //sand
                { id: 11011, frequency: 1, minAmount: 1 }, //fat nightcrawler
            ],

        },
        51: {
            name: 'City Outskirts Mine',
            locID: 51,
            actionType: 'Action-Mining',
            actionVerb: 'Mine',
            baseDuration: 8000,
            activeMessage: 'Mining in the City Outskirts Mine',
            locationImage: '/images/mining/city_outskirts_quarry.jpg',
            accessRequirements: {
                requiredSkills: [{ skill: 'mining', level: 10 }],
                requiredItems: [],
                consumeRequiredItems: false,
                requiredEquipment: [],
                maxGroupSize: 1,
            },
            extraTooltipInfo: 'WIP',
            loot: [
                { id: 101, frequency: 30, minAmount: 1 }, //copper
                { id: 102, frequency: 30, minAmount: 1 }, //tin
                { id: 108, frequency: 10, minAmount: 1, maxAmount: 3 }, //clay
                { id: 109, frequency: 10, minAmount: 1, maxAmount: 3 }, //stone
                { id: 110, frequency: 10, minAmount: 1, maxAmount: 3 }, //sand
                { id: 103, frequency: 5, minAmount: 1 }, //iron
                { id: 112, frequency: 5, minAmount: 1 }, //coal
                { id: 11011, frequency: 1, minAmount: 1 }, //fat nightcrawler
            ],

        },
        52: {
            name: 'Village Quarry',
            locID: 52,
            actionType: 'Action-Mining',
            actionVerb: 'Mine',
            baseDuration: 8000,
            activeMessage: 'Mining in the Village Quarry',
            locationImage: '/images/mining/village_quarry.jpg',
            accessRequirements: {
                requiredSkills: [{ skill: 'mining', level: 20 }],
                requiredItems: [],
                consumeRequiredItems: false,
                requiredEquipment: [],
                maxGroupSize: 1,
            },
            extraTooltipInfo: 'WIP',
            loot: [
                { id: 109, frequency: 25, minAmount: 1, maxAmount: 4 }, //stone
                { id: 103, frequency: 50, minAmount: 1 }, //iron
                { id: 112, frequency: 25, minAmount: 1, maxAmount: 2 }, //coal
                { id: 11011, frequency: 1, minAmount: 1 }, //fat nightcrawler
            ],

        },
        53: {
            name: 'Desert Mine',
            locID: 53,
            actionType: 'Action-Mining',
            actionVerb: 'Mine',
            baseDuration: 12000,
            activeMessage: 'Mining in the Desert Mine',
            locationImage: '/images/mining/desert_mine.jpg',
            accessRequirements: {
                requiredSkills: [{ skill: 'mining', level: 30 }],
                requiredItems: [],
                consumeRequiredItems: false,
                requiredEquipment: [],
                maxGroupSize: 1,
            },
            extraTooltipInfo: 'WIP',
            loot: [
                { id: 110, frequency: 20, minAmount: 1, maxAmount: 4 }, //sand
                { id: 105, frequency: 20, minAmount: 1 }, //mithril
                { id: 111, frequency: 20, minAmount: 1 }, //silver
                { id: 112, frequency: 10, minAmount: 1 }, //coal
                { id: 2013, frequency: 10, minAmount: 1 }, //salt
                { id: 113, frequency: 9, minAmount: 1 }, // rune slate
                { id: 103, frequency: 9, minAmount: 1 }, //iron
                { id: 104, frequency: 5, minAmount: 1 }, //gold
                { id: 108, frequency: 3, minAmount: 1, maxAmount: 2 }, //clay
            ],

        },
        54: {
            name: 'Underground Mine',
            locID: 54,
            actionType: 'Action-Mining',
            actionVerb: 'Mine',
            baseDuration: 12000,
            activeMessage: 'Mining in the Underground Mine',
            locationImage: '/images/mining/underground_mine.jpg',
            accessRequirements: {
                requiredSkills: [{ skill: 'mining', level: 40 }],
                requiredItems: [],
                consumeRequiredItems: false,
                requiredEquipment: [],
                maxGroupSize: 1,
            },
            extraTooltipInfo: 'Keep an eye out for hamsters!',
            loot: [
                { id: 105, frequency: 30, minAmount: 1 }, //mithril
                { id: 104, frequency: 17.5, minAmount: 1 }, //gold
                { id: 111, frequency: 12.5, minAmount: 1 }, //silver
                { id: 113, frequency: 15, minAmount: 1 }, // rune slate
                { id: 2013, frequency: 10, minAmount: 1, maxAmount: 3 }, //salt
                { id: 109, frequency: 5, minAmount: 1, maxAmount: 3 }, //stone
                { id: 103, frequency: 5, minAmount: 1 }, //iron
                { id: 112, frequency: 5, minAmount: 1 }, //coal
            ],

        },
        55: {
            name: 'Hidden Mine',
            locID: 55,
            actionType: 'Action-Mining',
            actionVerb: 'Mine',
            baseDuration: 15000,
            activeMessage: 'Mining in the Hidden Mine',
            locationImage: '/images/mining/hidden_mine.jpg',
            accessRequirements: {
                requiredSkills: [{ skill: 'mining', level: 50 }],
                requiredItems: [],
                consumeRequiredItems: false,
                requiredEquipment: [],
                maxGroupSize: 1,
            },
            extraTooltipInfo: 'WIP',
            loot: [
                { id: 106, frequency: 35, minAmount: 1 }, //adamantium
                { id: 111, frequency: 20, minAmount: 1 }, //silver
                { id: 109, frequency: 10, minAmount: 1, maxAmount: 2 }, //stone
                { id: 104, frequency: 10, minAmount: 1 }, //gold
                { id: 105, frequency: 10, minAmount: 1 }, //mithril
                { id: 107, frequency: 5, minAmount: 1 }, //runite
                { id: 113, frequency: 10, minAmount: 1 }, // rune slate
            ],

        },
        56: {
            name: 'Volcano Mine',
            locID: 56,
            actionType: 'Action-Mining',
            actionVerb: 'Mine',
            baseDuration: 15000,
            activeMessage: 'Mining in the Volcano Mine',
            locationImage: '/images/mining/volcano_mine.jpg',
            accessRequirements: {
                requiredSkills: [{ skill: 'mining', level: 60 }],
                requiredItems: [],
                consumeRequiredItems: false,
                requiredEquipment: [],
                maxGroupSize: 1,
            },
            extraTooltipInfo: 'WIP',
            loot: [
                { id: 111, frequency: 20, minAmount: 1 }, //silver
                { id: 105, frequency: 20, minAmount: 1 }, //mithril
                { id: 106, frequency: 20, minAmount: 1 }, //adamantium
                { id: 107, frequency: 20, minAmount: 1 }, //runite
                { id: 113, frequency: 10, minAmount: 1 }, // rune slate
                { id: 104, frequency: 10, minAmount: 1 }, //gold
            ],

        },
        57: {
            name: 'Slate Spires',
            locID: 57,
            actionType: 'Action-Mining',
            actionVerb: 'Mine',
            baseDuration: 7000,
            activeMessage: 'Mining at the Slate Spires',
            locationImage: '/images/mining/slate_spires.jpg',
            accessRequirements: {
                requiredSkills: [{ skill: 'mining', level: 1 }],
                requiredItems: [],
                consumeRequiredItems: false,
                requiredEquipment: [],
                maxGroupSize: 1,
            },
            extraTooltipInfo: 'WIP',
            loot: [
                { id: 113, frequency: 50, minAmount: 1, maxAmount: 4 }, // rune slate
                { id: 109, frequency: 10, minAmount: 1, maxAmount: 2 }, //stone
                { id: 110, frequency: 10, minAmount: 1, maxAmount: 2 }, //sand
            ],

        },
        80: {
            name: 'Deep Pit',
            locID: 80,
            actionType: 'Action-Mining',
            actionVerb: 'Mine',
            baseDuration: 20000,
            activeMessage: 'Mining in the Deep Pit',
            locationImage: '/images/mining/deep_pit.jpg',
            accessRequirements: {
                requiredSkills: [{ skill: 'mining', level: 70 }],
                requiredItems: [],
                consumeRequiredItems: false,
                requiredEquipment: [],
                maxGroupSize: 1,
            },
            extraTooltipInfo: 'This is a dangerous location!',

            loot: [
                { id: 107, frequency: 50, minAmount: 1 }, //runite
                { id: 113, frequency: 15, minAmount: 1 }, // rune slate
                { id: 104, frequency: 15, minAmount: 1, maxAmount: 2 }, //gold
                { id: 114, frequency: 15, minAmount: 1 }, // stygian
                { id: 115, frequency: 5, minAmount: 1 }, // void stone
            ],
        },

        //Foraging locations 101-150
        101: {
            name: 'Grasslands',
            locID: 101,
            actionType: 'Action-Foraging',
            actionVerb: 'Forage',
            baseDuration: 6000,
            activeMessage: 'Foraging in the Grasslands',
            locationImage: '/images/foraging/grasslands.jpg',
            accessRequirements: {
                requiredSkills: [{ skill: 'foraging', level: 1 }],
                requiredItems: [],
                consumeRequiredItems: false,
                requiredEquipment: [],
                maxGroupSize: 1,
            },
            extraTooltipInfo: 'WIP',
            nodes: [
                {
                    nodeID: 'The Grasslands',
                    frequency: 3,
                    maxFrequency: 3,
                    minimumBaseAmount: 1,
                    maximumBaseAmount: 16,
                    loot: [
                        { id: 151, frequency: 3 / 2, minAmount: 1 }, //carrot seed
                        { id: 2016, frequency: 1 / 2, minAmount: 1 }, //honey
                        { id: 2021, frequency: 1, minAmount: 1 }, //carrot
                        { id: 2023, frequency: 1, minAmount: 1 }, //potato
                        { id: 155, frequency: 1 / 4, minAmount: 1 }, //potato seed
                        { id: 2027, frequency: 10, minAmount: 1 }, //wildberry
                        { id: 158, frequency: 1 / 4, minAmount: 1 }, //wildberry bush seed
                        { id: 301, frequency: 10, minAmount: 1, maxAmount: 3 }, //branch
                        { id: 302, frequency: 10, minAmount: 1 }, //log
                        { id: 11012, frequency: 1 / 4, minAmount: 2, maxAmount: 4 }, //glowbug
                    ],
                },
                {
                    nodeID: 'A Tree',
                    frequency: 15,
                    maxFrequency: 33,
                    minimumBaseAmount: 16,
                    maximumBaseAmount: 32,
                    loot: [
                        { id: 2016, frequency: 1 / 2, minAmount: 1 }, //honey
                        { id: 301, frequency: 10, minAmount: 1, maxAmount: 3 }, //branch
                        { id: 302, frequency: 10, minAmount: 1 }, //log
                        { id: 11012, frequency: 1 / 4, minAmount: 2, maxAmount: 4 }, //glowbug
                    ],
                    tags: ['tree'],
                },
                {
                    nodeID: 'A Large Tree',
                    frequency: 0,
                    maxFrequency: 10,
                    minimumBaseAmount: 16,
                    maximumBaseAmount: 32,
                    loot: [
                        { id: 2016, frequency: 1 / 2, minAmount: 1 }, //honey
                        { id: 301, frequency: 10, minAmount: 2, maxAmount: 3 }, //branch
                        { id: 302, frequency: 10, minAmount: 1 }, //log
                        { id: 11012, frequency: 1 / 4, minAmount: 2, maxAmount: 4 }, //glowbug
                    ],
                    tags: ['tree'],
                },
                {
                    nodeID: 'Grassy Vegetables',
                    frequency: 1,
                    maxFrequency: 20,
                    minimumBaseAmount: 4,
                    maximumBaseAmount: 8,
                    loot: [
                        { id: 151, frequency: 1, minAmount: 1, maxAmount: 3 }, //carrot seed
                        { id: 2021, frequency: 10, minAmount: 1 }, //carrot
                        { id: 2023, frequency: 10, minAmount: 1 }, //potato
                        { id: 155, frequency: 1 / 4, minAmount: 1 }, //potato seed
                    ],
                    tags: ['plants'],
                },
                {
                    nodeID: 'Wildberry Bushes',
                    frequency: 1,
                    maxFrequency: 20,
                    minimumBaseAmount: 4,
                    maximumBaseAmount: 8,
                    loot: [
                        { id: 2027, frequency: 10, minAmount: 1 }, //wildberry
                        { id: 158, frequency: 1 / 4, minAmount: 1 }, //wildberry bush seed
                        { id: 11012, frequency: 1 / 2, minAmount: 2, maxAmount: 4 }, //glowbug
                    ],
                    tags: ['plants'],
                },
                {
                    nodeID: 'Grassy Seeds',
                    frequency: 2,
                    maxFrequency: 20,
                    minimumBaseAmount: 4,
                    maximumBaseAmount: 8,
                    loot: [
                        { id: 151, frequency: 1 / 4, minAmount: 1, maxAmount: 2 }, //carrot seed
                        { id: 155, frequency: 1 / 4, minAmount: 1, maxAmount: 2 }, //potato seed
                        { id: 158, frequency: 1 / 4, minAmount: 1, maxAmount: 2 }, //wildberry bush seed
                    ],
                    tags: ['seeds'],
                },
            ],

        },
        102: {
            name: 'Verdant Valley',
            locID: 102,
            actionType: 'Action-Foraging',
            actionVerb: 'Forage',
            baseDuration: 8000,
            activeMessage: 'Foraging in the Verdant Valley',
            locationImage: '/images/foraging/verdant_valley.jpg',
            accessRequirements: {
                requiredSkills: [{ skill: 'foraging', level: 10 }],
                requiredItems: [],
                consumeRequiredItems: false,
                requiredEquipment: [],
                maxGroupSize: 1,
            },
            extraTooltipInfo: 'WIP',
            nodes: [
                {
                    nodeID: 'The Verdant Valley',
                    frequency: 3,
                    maxFrequency: 3,
                    minimumBaseAmount: 1,
                    maximumBaseAmount: 16,
                    loot: [
                        { id: 2016, frequency: 2, minAmount: 1 }, //honey
                        { id: 2021, frequency: 2, minAmount: 1 }, //carrot
                        { id: 151, frequency: 1 / 4, minAmount: 1 }, //carrot seed
                        { id: 2025, frequency: 2, minAmount: 1 }, //tomato
                        { id: 157, frequency: 1 / 4, minAmount: 1 }, //tomato seed
                        { id: 2029, frequency: 2, minAmount: 1 }, //wheat
                        { id: 154, frequency: 1 / 4, minAmount: 1 }, //wheat seed
                        { id: 170, frequency: 1 / 8, minAmount: 1 }, //tree seed
                        { id: 301, frequency: 10, minAmount: 1, maxAmount: 3 }, //branch
                        { id: 302, frequency: 10, minAmount: 1 }, //log
                        { id: 303, frequency: 10, minAmount: 1 }, //oak log
                        { id: 11012, frequency: 1 / 4, minAmount: 2, maxAmount: 4 }, //glowbug
                        { id: 3004, frequency: 3, minAmount: 1, maxAmount: 5 }, //watermelon
                        { id: 3019, frequency: 3, minAmount: 1, maxAmount: 5 }, //pineapple
                        { id: 3017, frequency: 1 / 4, minAmount: 1, maxAmount: 1 }, //fourleaf clover
                        { id: 3006, frequency: 4, minAmount: 1, maxAmount: 5 }, //onion
                        { id: 3007, frequency: 1, minAmount: 1, maxAmount: 1 }, //mana berry
                    ],
                },
                {
                    nodeID: 'A Tree',
                    frequency: 10,
                    maxFrequency: 15,
                    minimumBaseAmount: 16,
                    maximumBaseAmount: 32,
                    loot: [
                        { id: 2016, frequency: 2, minAmount: 1 }, //honey
                        { id: 301, frequency: 10, minAmount: 1, maxAmount: 3 }, //branch
                        { id: 302, frequency: 10, minAmount: 1 }, //log
                        { id: 170, frequency: 1 / 16, minAmount: 1 }, //tree seed
                        { id: 11012, frequency: 1 / 4, minAmount: 2, maxAmount: 4 }, //glowbug
                    ],
                    tags: ['tree'],
                },
                {
                    nodeID: 'Oak Tree',
                    frequency: 10,
                    maxFrequency: 25,
                    minimumBaseAmount: 16,
                    maximumBaseAmount: 32,
                    loot: [
                        { id: 2016, frequency: 2, minAmount: 1 }, //honey
                        { id: 301, frequency: 8, minAmount: 1, maxAmount: 3 }, //branch
                        { id: 303, frequency: 10, minAmount: 1 }, //oak log
                        { id: 170, frequency: 1 / 16, minAmount: 1 }, //tree seed
                        { id: 11012, frequency: 1 / 4, minAmount: 2, maxAmount: 4 }, //glowbug
                    ],
                    tags: ['tree'],
                },
                {
                    nodeID: 'Copse of Verdant Trees',
                    frequency: 0,
                    maxFrequency: 10,
                    minimumBaseAmount: 16,
                    maximumBaseAmount: 32,
                    loot: [
                        { id: 2016, frequency: 2, minAmount: 2 }, //honey
                        { id: 301, frequency: 8, minAmount: 2, maxAmount: 3 }, //branch
                        { id: 302, frequency: 10, minAmount: 2 }, //log
                        { id: 303, frequency: 10, minAmount: 1 }, //oak log
                    ],
                    tags: ['tree'],
                },
                {
                    nodeID: 'Verdant Vegetables',
                    frequency: 1,
                    maxFrequency: 20,
                    minimumBaseAmount: 4,
                    maximumBaseAmount: 8,
                    loot: [
                        { id: 2021, frequency: 8, minAmount: 1 }, //carrot
                        { id: 151, frequency: 1 / 4, minAmount: 1 }, //carrot seed
                        { id: 2025, frequency: 8, minAmount: 1 }, //tomato
                        { id: 157, frequency: 1 / 4, minAmount: 1 }, //tomato seed
                        { id: 11012, frequency: 1 / 2, minAmount: 2, maxAmount: 4 }, //glowbug
                    ],
                    tags: ['plants'],
                },
                {
                    nodeID: 'Wild Wheat',
                    frequency: 1,
                    maxFrequency: 20,
                    minimumBaseAmount: 4,
                    maximumBaseAmount: 8,
                    loot: [
                        { id: 2029, frequency: 8, minAmount: 1 }, //wheat
                        { id: 154, frequency: 1 / 4, minAmount: 1 }, //wheat seed
                        { id: 11012, frequency: 1 / 2, minAmount: 2, maxAmount: 4 }, //glowbug
                    ],
                    tags: ['plants'],
                },
                {
                    nodeID: 'Verdant Seeds',
                    frequency: 5,
                    maxFrequency: 20,
                    minimumBaseAmount: 4,
                    maximumBaseAmount: 8,
                    loot: [
                        { id: 170, frequency: 1 / 16, minAmount: 1 }, //tree seed
                        { id: 151, frequency: 1 / 4, minAmount: 1 }, //carrot seed
                        { id: 157, frequency: 1 / 4, minAmount: 1 }, //tomato seed
                        { id: 154, frequency: 1 / 4, minAmount: 1 }, //wheat seed
                    ],
                    tags: ['seeds'],
                },
                {
                    nodeID: 'Verdant Reagents',
                    frequency: 1,
                    maxFrequency: 5,
                    minimumBaseAmount: 4,
                    maximumBaseAmount: 8,
                    loot: [
                        { id: 3004, frequency: 3, minAmount: 1, maxAmount: 5 }, //watermelon
                        { id: 3019, frequency: 3, minAmount: 1, maxAmount: 5 }, //pineapple
                        { id: 3017, frequency: 1 / 4, minAmount: 1, maxAmount: 1 }, //fourleaf clover
                        { id: 3006, frequency: 4, minAmount: 1, maxAmount: 5 }, //onion
                        { id: 3007, frequency: 1, minAmount: 1, maxAmount: 1 }, //mana berry
                    ],
                    tags: ['plants'],
                },
            ],

        },
        103: {
            name: 'Fungal Grotto',
            locID: 103,
            actionType: 'Action-Foraging',
            actionVerb: 'Forage',
            baseDuration: 8000,
            activeMessage: 'Foraging in the Fungal Grotto',
            locationImage: '/images/foraging/fungal_grotto.jpg',
            accessRequirements: {
                requiredSkills: [{ skill: 'foraging', level: 20 }],
                requiredItems: [],
                consumeRequiredItems: false,
                requiredEquipment: [],
                maxGroupSize: 1,
            },
            extraTooltipInfo: 'WIP',
            nodes: [
                {
                    nodeID: 'The Fungal Grotto',
                    frequency: 3,
                    maxFrequency: 3,
                    minimumBaseAmount: 1,
                    maximumBaseAmount: 16,
                    loot: [
                        { id: 2020, frequency: 2, minAmount: 1 }, //mushroom
                        { id: 161, frequency: 1 / 4, minAmount: 1 }, //mushroom spore
                        { id: 2023, frequency: 1, minAmount: 1 }, //potato
                        { id: 155, frequency: 1 / 4, minAmount: 1 }, //potato seed
                        { id: 2021, frequency: 1, minAmount: 1 }, //carrot
                        { id: 151, frequency: 1 / 4, minAmount: 1 }, //carrot seed
                        { id: 301, frequency: 5, minAmount: 1, maxAmount: 3 }, //branch
                        { id: 170, frequency: 1 / 8, minAmount: 1 }, //tree seed
                        { id: 171, frequency: 1 / 8, minAmount: 1 }, //oak tree seed
                        { id: 172, frequency: 1 / 8, minAmount: 1 }, //willow tree seed
                        { id: 175, frequency: 1 / 8, minAmount: 1 }, //banana tree seed
                        { id: 176, frequency: 1 / 8, minAmount: 1 }, //apple tree seed
                        { id: 11012, frequency: 1 / 4, minAmount: 2, maxAmount: 4 }, //glowbug
                        { id: 3018, frequency: 3, minAmount: 1, maxAmount: 5 }, //glow spore shroom
                        { id: 3018, frequency: 3, minAmount: 1, maxAmount: 5 }, //ghost shrooms
                    ],
                },
                {
                    nodeID: 'Lots of Fungi',
                    frequency: 1,
                    maxFrequency: 20,
                    minimumBaseAmount: 4,
                    maximumBaseAmount: 16,
                    loot: [
                        { id: 2020, frequency: 8, minAmount: 1 }, //mushroom
                        { id: 161, frequency: 1 / 4, minAmount: 1 }, //mushroom spore
                        { id: 11012, frequency: 1 / 8, minAmount: 2, maxAmount: 4 }, //glowbug
                        { id: 3018, frequency: 3, minAmount: 1, maxAmount: 5 }, //glow spore shroom
                        { id: 3018, frequency: 3, minAmount: 1, maxAmount: 5 }, //ghost shrooms
                    ],
                    tags: ['plants'],
                },
                {
                    nodeID: "Carrots and 'Taters",
                    frequency: 1,
                    maxFrequency: 20,
                    minimumBaseAmount: 4,
                    maximumBaseAmount: 16,
                    loot: [
                        { id: 2023, frequency: 8, minAmount: 1 }, //potato
                        { id: 155, frequency: 1 / 4, minAmount: 1 }, //potato seed
                        { id: 2021, frequency: 8, minAmount: 1 }, //carrot
                        { id: 151, frequency: 1 / 4, minAmount: 1 }, //carrot seed
                        { id: 11012, frequency: 1 / 8, minAmount: 2, maxAmount: 4 }, //glowbug
                    ],
                    tags: ['plants'],
                },
                {
                    nodeID: 'A Seedy Place',
                    frequency: 5,
                    maxFrequency: 20,
                    minimumBaseAmount: 1,
                    maximumBaseAmount: 8,
                    loot: [
                        { id: 161, frequency: 1 / 4, minAmount: 1 }, //mushroom spore
                        { id: 155, frequency: 1 / 4, minAmount: 1 }, //potato seed
                        { id: 151, frequency: 1 / 4, minAmount: 1 }, //carrot seed
                        { id: 170, frequency: 1 / 8, minAmount: 1 }, //tree seed
                        { id: 171, frequency: 1 / 8, minAmount: 1 }, //oak tree seed
                        { id: 172, frequency: 1 / 8, minAmount: 1 }, //willow tree seed
                        { id: 175, frequency: 1 / 8, minAmount: 1 }, //banana tree seed
                        { id: 176, frequency: 1 / 8, minAmount: 1 }, //apple tree seed
                    ],
                    tags: ['seeds'],
                },
                {
                    nodeID: 'Lone Swamp Tree',
                    frequency: 0,
                    maxFrequency: 5,
                    minimumBaseAmount: 4,
                    maximumBaseAmount: 32,
                    loot: [
                        { id: 301, frequency: 5, minAmount: 2, maxAmount: 3 }, //branch
                        { id: 302, frequency: 10, minAmount: 1 }, //log
                        { id: 303, frequency: 10, minAmount: 1 }, //oak log
                        { id: 304, frequency: 10, minAmount: 1 }, //willow log
                    ],
                    tags: ['tree'],
                },
            ],

        },
        104: {
            name: 'The Tangle',
            locID: 104,
            actionType: 'Action-Foraging',
            actionVerb: 'Forage',
            baseDuration: 12000,
            activeMessage: 'Foraging in The Tangle',
            locationImage: '/images/foraging/the_tangle.jpg',
            accessRequirements: {
                requiredSkills: [{ skill: 'foraging', level: 30 }],
                requiredItems: [],
                consumeRequiredItems: false,
                requiredEquipment: [],
                maxGroupSize: 1,
            },
            extraTooltipInfo: 'WIP',
            nodes: [
                {
                    nodeID: 'The Tangle',
                    frequency: 3,
                    maxFrequency: 3,
                    minimumBaseAmount: 1,
                    maximumBaseAmount: 16,
                    loot: [
                        { id: 2022, frequency: 1, minAmount: 1 }, //chili pepper
                        { id: 159, frequency: 1 / 4, minAmount: 1 }, //chili pepper seed
                        { id: 2026, frequency: 1, minAmount: 1 }, //apple
                        { id: 176, frequency: 1 / 8, minAmount: 1 }, //apple tree seed
                        { id: 2028, frequency: 1, minAmount: 1 }, //banana
                        { id: 175, frequency: 1 / 8, minAmount: 1 }, //banana tree seed
                        { id: 153, frequency: 1 / 4, minAmount: 1 }, //sugarcane seed
                        { id: 301, frequency: 5, minAmount: 1, maxAmount: 3 }, //branch
                        { id: 302, frequency: 10, minAmount: 1 }, //log
                        { id: 303, frequency: 10, minAmount: 1 }, //oak log
                        { id: 304, frequency: 10, minAmount: 1 }, //willow log
                        { id: 305, frequency: 10, minAmount: 1 }, //maple log
                        { id: 11012, frequency: 1 / 4, minAmount: 2, maxAmount: 4 }, //glowbug
                        { id: 3010, frequency: 4, minAmount: 1, maxAmount: 5 }, //tangle root
                        { id: 3008, frequency: 4, minAmount: 1, maxAmount: 5 }, //thorny root
                        { id: 3009, frequency: 4, minAmount: 1, maxAmount: 5 }, //thorny vine
                        { id: 3021, frequency: 4, minAmount: 1 }, //yellow pepper
                    ],
                },
                {
                    nodeID: 'Sweet Tooth',
                    frequency: 5,
                    maxFrequency: 15,
                    minimumBaseAmount: 4,
                    maximumBaseAmount: 8,
                    loot: [
                        { id: 2026, frequency: 1, minAmount: 1 }, //apple
                        { id: 176, frequency: 1 / 8, minAmount: 1 }, //apple tree seed
                        { id: 2028, frequency: 1, minAmount: 1 }, //banana
                        { id: 175, frequency: 1 / 8, minAmount: 1 }, //banana tree seed
                        { id: 153, frequency: 1 / 4, minAmount: 1 }, //sugarcane seed
                        { id: 11012, frequency: 1 / 8, minAmount: 2, maxAmount: 4 }, //glowbug
                    ],
                    tags: ['plants'],
                },
                {
                    nodeID: 'All Tangled Up',
                    frequency: 15,
                    maxFrequency: 20,
                    minimumBaseAmount: 16,
                    maximumBaseAmount: 64,
                    loot: [
                        { id: 301, frequency: 5, minAmount: 1, maxAmount: 3 }, //branch
                        { id: 302, frequency: 10, minAmount: 1 }, //log
                        { id: 303, frequency: 10, minAmount: 1 }, //oak log
                        { id: 304, frequency: 10, minAmount: 1 }, //willow log
                        { id: 305, frequency: 10, minAmount: 1 }, //maple log
                    ],
                    tags: ['tree'],
                },
                {
                    nodeID: 'A Little Chili',
                    frequency: 2,
                    maxFrequency: 10,
                    minimumBaseAmount: 2,
                    maximumBaseAmount: 10,
                    loot: [
                        { id: 3021, frequency: 1, minAmount: 1 }, //yellow pepper
                        { id: 2022, frequency: 4, minAmount: 1 }, //chili pepper
                        { id: 159, frequency: 1 / 4, minAmount: 1 }, //chili pepper seed
                    ],
                    tags: ['plants'],
                },
                {
                    nodeID: 'Tangle of Seeds',
                    frequency: 5,
                    maxFrequency: 20,
                    minimumBaseAmount: 4,
                    maximumBaseAmount: 12,
                    loot: [
                        { id: 159, frequency: 1 / 4, minAmount: 1 }, //chili pepper seed
                        { id: 176, frequency: 1 / 8, minAmount: 1 }, //apple tree seed
                        { id: 175, frequency: 1 / 8, minAmount: 1 }, //banana tree seed
                        { id: 153, frequency: 1 / 4, minAmount: 1 }, //sugarcane seed
                    ],
                    tags: ['seeds'],
                },
                {
                    nodeID: 'Tangled Reagents',
                    frequency: 2,
                    maxFrequency: 5,
                    minimumBaseAmount: 2,
                    maximumBaseAmount: 10,
                    loot: [
                        { id: 3010, frequency: 4, minAmount: 1, maxAmount: 5 }, //tangle root
                        { id: 3008, frequency: 4, minAmount: 1, maxAmount: 5 }, //thorny root
                        { id: 3009, frequency: 4, minAmount: 1, maxAmount: 5 }, //thorny vine
                        { id: 3021, frequency: 4, minAmount: 1, maxAmount: 5 }, //yellow pepper
                    ],
                    tags: ['plants'],
                },
            ],

        },
        105: {
            name: 'Misty Marsh',
            locID: 105,
            actionType: 'Action-Foraging',
            actionVerb: 'Forage',
            baseDuration: 12000,
            activeMessage: 'Foraging in the Misty Marsh',
            locationImage: '/images/foraging/misty_marsh.jpg',
            accessRequirements: {
                requiredSkills: [{ skill: 'foraging', level: 40 }],
                requiredItems: [],
                consumeRequiredItems: false,
                requiredEquipment: [],
                maxGroupSize: 1,
            },
            extraTooltipInfo: 'WIP',
            nodes: [
                {
                    nodeID: 'The Misty Marsh',
                    frequency: 3,
                    maxFrequency: 3,
                    minimumBaseAmount: 1,
                    maximumBaseAmount: 16,
                    loot: [
                        { id: 2023, frequency: 1, minAmount: 1 }, //potato
                        { id: 155, frequency: 1 / 4, minAmount: 1 }, //potato seed
                        { id: 2024, frequency: 1, minAmount: 1 }, //pumpkin
                        { id: 160, frequency: 1 / 4, minAmount: 1 }, //pumpkin seed
                        { id: 2030, frequency: 1, minAmount: 1 }, //rice
                        { id: 156, frequency: 1 / 4, minAmount: 1 }, //rice seed
                        { id: 153, frequency: 1 / 4, minAmount: 1 }, //sugarcane seed
                        { id: 171, frequency: 1 / 8, minAmount: 1 }, //oak tree seed
                        { id: 172, frequency: 1 / 8, minAmount: 1 }, //willow tree seed
                        { id: 303, frequency: 10, minAmount: 1 }, //oak log
                        { id: 304, frequency: 10, minAmount: 1 }, //willow log
                        { id: 11012, frequency: 1 / 4, minAmount: 2, maxAmount: 4 }, //glowbug
                        { id: 3006, frequency: 4, minAmount: 1, maxAmount: 5 }, //onion
                    ],
                },
                {
                    nodeID: 'Misty Trees',
                    frequency: 5,
                    maxFrequency: 20,
                    minimumBaseAmount: 12,
                    maximumBaseAmount: 36,
                    loot: [
                        { id: 303, frequency: 10, minAmount: 1 }, //oak log
                        { id: 304, frequency: 10, minAmount: 1 }, //willow log
                    ],
                    tags: ['tree'],
                },
                {
                    nodeID: 'Misty Plants',
                    frequency: 1,
                    maxFrequency: 20,
                    minimumBaseAmount: 4,
                    maximumBaseAmount: 12,
                    loot: [
                        { id: 2023, frequency: 1, minAmount: 1 }, //potato
                        { id: 2024, frequency: 1, minAmount: 1 }, //pumpkin
                        { id: 2030, frequency: 1, minAmount: 1 }, //rice
                    ],
                    tags: ['plants'],
                },
                {
                    nodeID: 'Misty Seeds',
                    frequency: 5,
                    maxFrequency: 20,
                    minimumBaseAmount: 4,
                    maximumBaseAmount: 12,
                    loot: [
                        { id: 155, frequency: 1 / 4, minAmount: 1 }, //potato seed
                        { id: 160, frequency: 1 / 4, minAmount: 1 }, //pumpkin seed
                        { id: 156, frequency: 1 / 4, minAmount: 1 }, //rice seed
                        { id: 153, frequency: 1 / 4, minAmount: 1 }, //sugarcane seed
                        { id: 171, frequency: 1 / 8, minAmount: 1 }, //oak tree seed
                        { id: 172, frequency: 1 / 8, minAmount: 1 }, //willow tree seed
                    ],
                    tags: ['seeds'],
                },
            ],

        },
        106: {
            name: 'Frozen Tundra',
            locID: 106,
            actionType: 'Action-Foraging',
            actionVerb: 'Forage',
            baseDuration: 15000,
            activeMessage: 'Foraging in the Frozen Tundra',
            locationImage: '/images/foraging/frozen_tundra.jpg',
            accessRequirements: {
                requiredSkills: [{ skill: 'foraging', level: 50 }],
                requiredItems: [],
                consumeRequiredItems: false,
                requiredEquipment: [],
                maxGroupSize: 1,
            },
            extraTooltipInfo: 'WIP',
            nodes: [
                {
                    nodeID: 'The Frozen Tundra',
                    frequency: 3,
                    maxFrequency: 3,
                    minimumBaseAmount: 1,
                    maximumBaseAmount: 16,
                    loot: [
                        { id: 2022, frequency: 1, minAmount: 1 }, //chili pepper
                        { id: 3021, frequency: 1, minAmount: 1 }, //yellow pepper
                        { id: 159, frequency: 1 / 4, minAmount: 1 }, //chili pepper seed
                        { id: 2027, frequency: 1, minAmount: 1 }, //wildberry
                        { id: 158, frequency: 1 / 4, minAmount: 1 }, //wildberry bush seed
                        { id: 2029, frequency: 1, minAmount: 1 }, //wheat
                        { id: 154, frequency: 1 / 4, minAmount: 1 }, //wheat seed
                        { id: 152, frequency: 1 / 4, minAmount: 1 }, //peppercorn seed
                        { id: 173, frequency: 1 / 8, minAmount: 1 }, //maple tree seed
                        { id: 305, frequency: 3, minAmount: 1 }, //maple log
                        { id: 3013, frequency: 1, minAmount: 1, maxAmount: 5 }, //frost flower
                        { id: 3013, frequency: 1, minAmount: 1, maxAmount: 5 }, //mana berry
                        { id: 7000, frequency: 1 / 1000, minAmount: 100, maxAmount: 200 }, //snow!
                    ],
                },
                {
                    nodeID: 'Thawed Oasis',
                    frequency: 0,
                    maxFrequency: 20,
                    minimumBaseAmount: 8,
                    maximumBaseAmount: 64,
                    loot: [
                        { id: 2022, frequency: 1, minAmount: 1 }, //chili pepper
                        { id: 3021, frequency: 1, minAmount: 1 }, //yellow pepper
                        { id: 159, frequency: 1 / 4, minAmount: 1 }, //chili pepper seed
                        { id: 2027, frequency: 1, minAmount: 1 }, //wildberry
                        { id: 158, frequency: 1 / 4, minAmount: 1 }, //wildberry bush seed
                        { id: 2029, frequency: 1, minAmount: 1 }, //wheat
                        { id: 154, frequency: 1 / 4, minAmount: 1 }, //wheat seed
                        { id: 152, frequency: 1 / 4, minAmount: 1 }, //peppercorn seed
                        { id: 173, frequency: 1 / 8, minAmount: 1 }, //maple tree seed
                        { id: 305, frequency: 3, minAmount: 1 }, //maple log
                    ],
                    tags: ['seeds', 'plants', 'tree'],
                },
                {
                    nodeID: 'Frozen Reagents',
                    frequency: 1 / 2,
                    maxFrequency: 4,
                    minimumBaseAmount: 2,
                    maximumBaseAmount: 10,
                    loot: [
                        { id: 3013, frequency: 1, minAmount: 1, maxAmount: 5 }, //frost flower
                        { id: 3013, frequency: 1, minAmount: 1, maxAmount: 5 }, //mana berry
                        { id: 3021, frequency: 1, minAmount: 1, maxAmount: 5 }, //yellow pepper
                    ],
                    tags: ['plants'],
                },
            ],

        },
        107: {
            name: 'Haunted Woods',
            locID: 107,
            actionType: 'Action-Foraging',
            actionVerb: 'Forage',
            baseDuration: 15000,
            activeMessage: 'Foraging in the Haunted Woods',
            locationImage: '/images/foraging/haunted_woods.jpg',
            accessRequirements: {
                requiredSkills: [{ skill: 'foraging', level: 60 }],
                requiredItems: [],
                consumeRequiredItems: false,
                requiredEquipment: [],
                maxGroupSize: 1,
            },
            extraTooltipInfo: 'Stories of these woods appear to greatly exaggerate its haunted nature.',
            nodes: [
                {
                    nodeID: 'The Haunted Woods',
                    frequency: 3,
                    maxFrequency: 3,
                    minimumBaseAmount: 1,
                    maximumBaseAmount: 16,
                    loot: [
                        { id: 2020, frequency: 1, minAmount: 1 }, //mushroom
                        { id: 161, frequency: 1 / 4, minAmount: 1 }, //mushroom spore
                        { id: 2024, frequency: 1, minAmount: 1 }, //pumpkin
                        { id: 160, frequency: 1 / 4, minAmount: 1 }, //pumpkin seed
                        { id: 152, frequency: 1 / 4, minAmount: 1 }, //peppercorn seed
                        { id: 172, frequency: 1 / 8, minAmount: 1 }, //willow tree seed
                        { id: 173, frequency: 1 / 8, minAmount: 1 }, //maple tree seed
                        { id: 174, frequency: 1 / 8, minAmount: 1 }, //yew tree seed
                        { id: 304, frequency: 10, minAmount: 1 }, //willow log
                        { id: 305, frequency: 10, minAmount: 1 }, //maple log
                        { id: 306, frequency: 5, minAmount: 1 }, //yew log
                        { id: 3007, frequency: 1, minAmount: 1, maxAmount: 4 }, //mana berry
                        { id: 3008, frequency: 1, minAmount: 1, maxAmount: 5 }, //thorny root
                        { id: 3009, frequency: 1, minAmount: 1, maxAmount: 5 }, //thorny vine
                        { id: 3011, frequency: 1, minAmount: 1, maxAmount: 5 }, //mandrake
                        { id: 3014, frequency: 1, minAmount: 1, maxAmount: 5 }, //blackberry
                        { id: 3015, frequency: 1, minAmount: 1, maxAmount: 5 }, //fairy dust
                    ],
                },
                {
                    nodeID: "Woods' Bounty",
                    frequency: 3,
                    maxFrequency: 20,
                    minimumBaseAmount: 1,
                    maximumBaseAmount: 16,
                    loot: [
                        { id: 2020, frequency: 1, minAmount: 1 }, //mushroom
                        { id: 161, frequency: 1 / 4, minAmount: 1 }, //mushroom spore
                        { id: 2024, frequency: 1, minAmount: 1 }, //pumpkin
                        { id: 160, frequency: 1 / 4, minAmount: 1 }, //pumpkin seed
                        { id: 152, frequency: 1 / 4, minAmount: 1 }, //peppercorn seed
                    ],
                    tags: ['plants'],
                },
                {
                    nodeID: 'Gnarled Trees',
                    frequency: 3,
                    maxFrequency: 20,
                    minimumBaseAmount: 4,
                    maximumBaseAmount: 16,
                    loot: [
                        { id: 172, frequency: 1 / 8, minAmount: 1 }, //willow tree seed
                        { id: 173, frequency: 1 / 8, minAmount: 1 }, //maple tree seed
                        { id: 174, frequency: 1 / 8, minAmount: 1 }, //yew tree seed
                        { id: 304, frequency: 10, minAmount: 1 }, //willow log
                        { id: 305, frequency: 10, minAmount: 1 }, //maple log
                        { id: 306, frequency: 5, minAmount: 1 }, //yew log
                    ],
                    tags: ['seeds', 'tree'],
                },
                {
                    nodeID: 'Haunted Seeds',
                    frequency: 5,
                    maxFrequency: 20,
                    minimumBaseAmount: 4,
                    maximumBaseAmount: 16,
                    loot: [
                        { id: 172, frequency: 1 / 8, minAmount: 1 }, //willow tree seed
                        { id: 173, frequency: 1 / 8, minAmount: 1 }, //maple tree seed
                        { id: 174, frequency: 1 / 8, minAmount: 1 }, //yew tree seed
                        { id: 160, frequency: 1 / 4, minAmount: 1 }, //pumpkin seed
                        { id: 152, frequency: 1 / 4, minAmount: 1 }, //peppercorn seed
                        { id: 161, frequency: 1 / 4, minAmount: 1 }, //mushroom spore
                    ],
                    tags: ['seeds'],
                },
                {
                    nodeID: 'Haunted Reagents',
                    frequency: 1 / 2,
                    maxFrequency: 4,
                    minimumBaseAmount: 2,
                    maximumBaseAmount: 10,
                    loot: [
                        { id: 3007, frequency: 1, minAmount: 1, maxAmount: 4 }, //mana berry
                        { id: 3008, frequency: 1, minAmount: 1, maxAmount: 5 }, //thorny root
                        { id: 3009, frequency: 1, minAmount: 1, maxAmount: 5 }, //thorny vine
                        { id: 3011, frequency: 1, minAmount: 1, maxAmount: 5 }, //mandrake
                        { id: 3014, frequency: 1, minAmount: 1, maxAmount: 5 }, //blackberry
                        { id: 3015, frequency: 1, minAmount: 1, maxAmount: 5 }, //fairy dust
                    ],
                    tags: ['plants'],
                },
            ],

        },
        108: {
            name: 'Living Forest',
            locID: 108,
            actionType: 'Action-Foraging',
            actionVerb: 'Forage',
            baseDuration: 20000,
            activeMessage: 'Foraging in the Living Forest',
            locationImage: '/images/foraging/living_forest.jpg',
            accessRequirements: {
                requiredSkills: [{ skill: 'foraging', level: 70 }],
                requiredItems: [],
                consumeRequiredItems: false,
                requiredEquipment: [],
                maxGroupSize: 1,
            },
            extraTooltipInfo: 'This is a dangerous location!',
            nodes: [
                {
                    nodeID: 'The Living Forest',
                    frequency: 3,
                    maxFrequency: 3,
                    minimumBaseAmount: 1,
                    maximumBaseAmount: 16,
                    loot: [
                        { id: 2016, frequency: 1, minAmount: 1 }, //honey
                        { id: 2025, frequency: 1, minAmount: 1 }, //tomato
                        { id: 157, frequency: 1 / 4, minAmount: 1 }, //tomato seed
                        { id: 176, frequency: 1 / 8, minAmount: 1 }, //apple tree seed
                        { id: 2026, frequency: 10, minAmount: 1 }, //apple
                        { id: 175, frequency: 1 / 8, minAmount: 1 }, //banana tree seed
                        { id: 2028, frequency: 1, minAmount: 1 }, //banana
                        { id: 174, frequency: 1 / 8, minAmount: 1 }, //yew tree seed
                        { id: 304, frequency: 10, minAmount: 1 }, //willow log
                        { id: 305, frequency: 10, minAmount: 1 }, //maple log
                        { id: 306, frequency: 10, minAmount: 1 }, //yew log
                        { id: 3007, frequency: 1, minAmount: 1, maxAmount: 4 }, //mana berry
                        { id: 3015, frequency: 1, minAmount: 1, maxAmount: 5 }, //fairy dust
                        { id: 3016, frequency: 1, minAmount: 1, maxAmount: 5 }, //lotus flower
                        { id: 3005, frequency: 1, minAmount: 1, maxAmount: 5 }, //durian
                    ],
                },
                {
                    nodeID: 'Healthy Living',
                    frequency: 5,
                    maxFrequency: 20,
                    minimumBaseAmount: 4,
                    maximumBaseAmount: 8,
                    loot: [
                        { id: 2016, frequency: 1, minAmount: 1 }, //honey
                        { id: 2025, frequency: 1, minAmount: 1 }, //tomato
                        { id: 157, frequency: 1 / 4, minAmount: 1 }, //tomato seed
                        { id: 176, frequency: 1 / 8, minAmount: 1 }, //apple tree seed
                        { id: 2026, frequency: 10, minAmount: 1 }, //apple
                        { id: 175, frequency: 1 / 8, minAmount: 1 }, //banana tree seed
                        { id: 2028, frequency: 1, minAmount: 1 }, //banana
                    ],
                    tags: ['plants', 'seeds'],
                },
                {
                    nodeID: 'The Young Trees',
                    frequency: 10,
                    maxFrequency: 20,
                    minimumBaseAmount: 8,
                    maximumBaseAmount: 24,
                    loot: [
                        { id: 2016, frequency: 1, minAmount: 1 }, //honey
                        { id: 174, frequency: 1 / 8, minAmount: 1 }, //yew tree seed
                        { id: 304, frequency: 12, minAmount: 1 }, //willow log
                        { id: 305, frequency: 8, minAmount: 1 }, //maple log
                        { id: 306, frequency: 4, minAmount: 1 }, //yew log
                    ],
                    tags: ['tree'],
                },
                {
                    nodeID: 'The Elder Tree',
                    frequency: 0,
                    maxFrequency: 1,
                    minimumBaseAmount: 16,
                    maximumBaseAmount: 32,
                    loot: [
                        { id: 307, frequency: 10, minAmount: 1 }, //elder log
                        { id: 177, frequency: 1 / 8, minAmount: 1 }, //elder tree seed
                    ],
                    tags: ['tree'],
                },
                {
                    nodeID: 'Living Reagents',
                    frequency: 1,
                    maxFrequency: 5,
                    minimumBaseAmount: 4,
                    maximumBaseAmount: 12,
                    loot: [
                        { id: 3007, frequency: 1, minAmount: 1, maxAmount: 4 }, //mana berry
                        { id: 3015, frequency: 1, minAmount: 1, maxAmount: 5 }, //fairy dust
                        { id: 3016, frequency: 1, minAmount: 1, maxAmount: 5 }, //lotus flower
                        { id: 3005, frequency: 1, minAmount: 1, maxAmount: 5 }, //durian
                    ],
                    tags: ['plants'],
                },
                {
                    nodeID: 'Living Seeds',
                    frequency: 0,
                    maxFrequency: 1,
                    minimumBaseAmount: 4,
                    maximumBaseAmount: 12,
                    loot: [
                        { id: 177, frequency: 1 / 4, minAmount: 1 }, //elder tree seed
                        { id: 174, frequency: 1, minAmount: 1 }, //yew tree seed
                        { id: 175, frequency: 2, minAmount: 1 }, //banana tree seed
                        { id: 176, frequency: 2, minAmount: 1 }, //apple tree seed
                        { id: 157, frequency: 3, minAmount: 1 }, //tomato seed
                    ],
                    tags: ['seeds'],
                },
            ],

        },

        //Fishing locations 151-200
        151: {
            name: 'Shallow Pond',
            locID: 151,
            actionType: 'Action-Fishing',
            actionVerb: 'Fish',
            baseDuration: 8500,
            activeMessage: 'Fishing in the Shallow Pond',
            locationImage: '/images/fishing/shallow_pond.jpg',
            accessRequirements: {
                requiredSkills: [{ skill: 'fishing', level: 1 }],
                requiredItems: [],
                consumeRequiredItems: false,
                requiredEquipment: [],
                maxGroupSize: 1,
            },
            extraTooltipInfo: 'WIP',
            nodes: [
                {
                    nodeID: 'The Shallow Pond',
                    frequency: 100,
                    maxFrequency: 150,
                    minimumBaseAmount: 2,
                    maximumBaseAmount: 4,
                    loot: [
                        { id: 60, frequency: 100, maxFrequency: 150 },
                        { id: 61, frequency: 50, maxFrequency: 100 },
                        { id: 72, frequency: -10, maxFrequency: 15 }, //minnow
                        { id: 71, frequency: 1, maxFrequency: 30 }, //seaweed
                        { id: 4020, frequency: 1, maxFrequency: 15, minAmount: 1, maxAmount: 5 }, //aquatic fiber 1
                        { id: 11030, frequency: 1, maxFrequency: 9 }, //rotten driftwood
                    ],
                },
                {
                    nodeID: 'Oops, All Shrimp!',
                    frequency: 50,
                    maxFrequency: 100,
                    minimumBaseAmount: 5,
                    maximumBaseAmount: 12,
                    loot: [{ id: 60, frequency: 100 }],
                },
                {
                    nodeID: 'Small Schools of Fish',
                    frequency: 15,
                    maxFrequency: 65,
                    minimumBaseAmount: 2,
                    maximumBaseAmount: 8,
                    loot: [
                        { id: 61, frequency: 25, maxFrequency: 75 },
                        { id: 72, frequency: -1, maxFrequency: 25 }, //minnow
                        { id: 71, frequency: 1, maxFrequency: 6 }, //seaweed
                        { id: 4020, frequency: 1, maxFrequency: 3, minAmount: 1, maxAmount: 5 }, //aquatic fiber 1
                        { id: 11030, frequency: 1, maxFrequency: 9 }, //rotten driftwood
                    ],
                },
                {
                    nodeID: 'Drifting Around',
                    frequency: 15,
                    minimumBaseAmount: 2,
                    maximumBaseAmount: 8,
                    maxFrequency: 65,
                    loot: [
                        { id: 61, frequency: 15, maxFrequency: 50 },
                        { id: 71, frequency: 1, maxFrequency: 10 }, //seaweed
                        { id: 4020, frequency: 1, maxFrequency: 5, minAmount: 1, maxAmount: 5 }, //aquatic fiber 1
                        { id: 11030, frequency: 1, maxFrequency: 25 }, //rotten driftwood
                    ],
                },
                {
                    nodeID: 'Shallow Flora',
                    frequency: 5,
                    minimumBaseAmount: 2,
                    maximumBaseAmount: 8,
                    maxFrequency: 75,
                    loot: [
                        { id: 71, frequency: 1, maxFrequency: 5 }, //seaweed
                        { id: 4020, frequency: 1, maxFrequency: 10, minAmount: 1, maxAmount: 5 }, //aquatic fiber 1
                        { id: 4021, frequency: -5, maxFrequency: 5, minAmount: 1, maxAmount: 3 }, //aquatic fiber 2
                    ],
                },
            ],

        },
        152: {
            name: 'Lazy River',
            locID: 152,
            actionType: 'Action-Fishing',
            actionVerb: 'Fish',
            baseDuration: 9500,
            activeMessage: 'Fishing in the Lazy River',
            locationImage: '/images/fishing/lazy_river.jpg',
            accessRequirements: {
                requiredSkills: [{ skill: 'fishing', level: 20 }],
                requiredItems: [],
                consumeRequiredItems: false,
                requiredEquipment: [],
                maxGroupSize: 1,
            },
            extraTooltipInfo: 'WIP',
            nodes: [
                {
                    nodeID: 'The Lazy River',
                    frequency: 100,
                    minimumBaseAmount: 2,
                    maximumBaseAmount: 4,
                    maxFrequency: 150,
                    loot: [
                        { id: 62, frequency: 100, maxFrequency: 175 },
                        { id: 63, frequency: 50, maxFrequency: 100 },
                        { id: 73, frequency: -50, maxFrequency: 15 }, //tigerfish
                        { id: 71, frequency: 1, maxFrequency: 5 }, //seaweed
                        { id: 4020, frequency: 1, maxFrequency: 5, minAmount: 1, maxAmount: 5 }, //aquatic fiber 1
                        { id: 4021, frequency: -5, maxFrequency: 5, minAmount: 1, maxAmount: 5 }, //aquatic fiber 2
                        { id: 72, frequency: 1, maxFrequency: 10 }, //minnow
                        { id: 11030, frequency: 1, maxFrequency: 15 }, //rotten driftwood
                        { id: 11031, frequency: -5, maxFrequency: 5 }, //sturdy driftwood
                    ],
                },
                {
                    nodeID: 'Migrating Schools',
                    frequency: 25,
                    minimumBaseAmount: 2,
                    maximumBaseAmount: 8,
                    maxFrequency: 75,
                    loot: [
                        { id: 62, frequency: 15, maxFrequency: 25 },
                        { id: 63, frequency: 50, maxFrequency: 75 },
                        { id: 73, frequency: -15, maxFrequency: 25 }, //tigerfish
                        { id: 71, frequency: 1, maxFrequency: 3 }, //seaweed
                        { id: 4020, frequency: 1, maxFrequency: 3, minAmount: 1, maxAmount: 5 }, //aquatic fiber 1
                        { id: 4021, frequency: -5, maxFrequency: 3, minAmount: 1, maxAmount: 5 }, //aquatic fiber 2
                        { id: 72, frequency: 5, maxFrequency: 25 }, //minnow
                        { id: 11030, frequency: 1, maxFrequency: 15 }, //rotten driftwood
                        { id: 11031, frequency: -5, maxFrequency: 5 }, //sturdy driftwood
                    ],
                },
                {
                    nodeID: 'ANGY bois',
                    frequency: -25,
                    minimumBaseAmount: 1,
                    maximumBaseAmount: 4,
                    maxFrequency: 25,
                    loot: [
                        { id: 62, frequency: 3, maxFrequency: 9 },
                        { id: 63, frequency: 6, maxFrequency: 16 },
                        { id: 73, frequency: 9, maxFrequency: 42 }, //tigerfish
                        { id: 11030, frequency: -1, maxFrequency: 15 }, //rotten driftwood
                        { id: 11031, frequency: -1, maxFrequency: 15 }, //sturdy driftwood
                        { id: 11032, frequency: -50, maxFrequency: 0.75 }, //aquamarine
                    ],
                },
                {
                    nodeID: 'Riverbed Flora',
                    frequency: 5,
                    minimumBaseAmount: 2,
                    maximumBaseAmount: 8,
                    maxFrequency: 75,
                    loot: [
                        { id: 71, frequency: 1, maxFrequency: 5 }, //seaweed
                        { id: 4020, frequency: 1, maxFrequency: 10 }, //aquatic fiber 1
                        { id: 4021, frequency: -5, maxFrequency: 15, minAmount: 1, maxAmount: 5 }, //aquatic fiber 2
                        { id: 4022, frequency: -10, maxFrequency: 5, minAmount: 1, maxAmount: 3 }, //aquatic fiber 3
                    ],
                },
            ],

        },
        153: {
            name: 'Still Lake',
            locID: 153,
            actionType: 'Action-Fishing',
            actionVerb: 'Fish',
            baseDuration: 10500,
            activeMessage: 'Fishing in the Still Lake',
            locationImage: '/images/fishing/still_lake.jpg',
            accessRequirements: {
                requiredSkills: [{ skill: 'fishing', level: 50 }],
                requiredItems: [],
                consumeRequiredItems: false,
                requiredEquipment: [],
                maxGroupSize: 1,
            },
            extraTooltipInfo: 'WIP',
            nodes: [
                {
                    nodeID: 'The Still Lake',
                    frequency: 100,
                    minimumBaseAmount: 2,
                    maximumBaseAmount: 4,
                    maxFrequency: 150,
                    loot: [
                        { id: 64, frequency: 100, maxFrequency: 150 },
                        { id: 77, frequency: 10, maxFrequency: 50 }, //crab
                        { id: 74, frequency: -25, maxFrequency: 25 }, //eel
                        { id: 73, frequency: -25, maxFrequency: 25 }, //tigerfish
                        { id: 72, frequency: 1, maxFrequency: 20 }, //minnow
                        { id: 71, frequency: 1, maxFrequency: 5 }, //seaweed
                        { id: 4020, frequency: 1, maxFrequency: 7.5, minAmount: 1, maxAmount: 5 }, //aquatic fiber 1
                        { id: 4021, frequency: -5, maxFrequency: 5, minAmount: 1, maxAmount: 5 }, //aquatic fiber 2
                        { id: 4022, frequency: -10, maxFrequency: 2.5, minAmount: 1, maxAmount: 5 }, //aquatic fiber 3
                        { id: 11030, frequency: -10, maxFrequency: 10 }, //rotten driftwood
                        { id: 11031, frequency: -10, maxFrequency: 10 }, //sturdy driftwood
                    ],
                },
                {
                    nodeID: 'Big Catch!',
                    frequency: -30,
                    minimumBaseAmount: 2,
                    maximumBaseAmount: 6,
                    maxFrequency: 75,
                    loot: [
                        { id: 64, frequency: 45, maxFrequency: 90 },
                        { id: 68, frequency: -35, maxFrequency: 15 }, //ancient lobster
                        { id: 74, frequency: 5, maxFrequency: 25 }, //eel
                        { id: 73, frequency: -10, maxFrequency: 15 }, //tigerfish
                        { id: 77, frequency: 15, maxFrequency: 75 }, //crab
                        { id: 11032, frequency: -50, maxFrequency: 0.25 }, //aquamarine
                    ],
                },
                {
                    nodeID: "Yedyod's Cove",
                    frequency: -75,
                    minimumBaseAmount: 1,
                    maximumBaseAmount: 4,
                    maxFrequency: 50,
                    loot: [
                        { id: 68, frequency: 25, maxFrequency: 75 }, //ancient lobster
                        { id: 74, frequency: 5, maxFrequency: 25 }, //eel
                        { id: 77, frequency: 3, maxFrequency: 15 }, //crab
                        { id: 73, frequency: 10, maxFrequency: 50 }, //tigerfish
                        { id: 71, frequency: 1, maxFrequency: 10 }, //seaweed
                        { id: 4020, frequency: 1, maxFrequency: 7.5, minAmount: 1, maxAmount: 5 }, //aquatic fiber 1
                        { id: 4021, frequency: -5, maxFrequency: 5, minAmount: 1, maxAmount: 5 }, //aquatic fiber 2
                        { id: 4022, frequency: -10, maxFrequency: 2.5, minAmount: 1, maxAmount: 5 }, //aquatic fiber 3
                        { id: 11030, frequency: 1, maxFrequency: 30 }, //rotten driftwood
                        { id: 11031, frequency: 1, maxFrequency: 30 }, //sturdy driftwood
                        { id: 11032, frequency: -100, maxFrequency: 2.5 }, //aquamarine
                    ],
                },
                {
                    nodeID: 'Cage Match!',
                    frequency: 3,
                    minimumBaseAmount: 2,
                    maximumBaseAmount: 6,
                    maxFrequency: 100,
                    loot: [
                        { id: 64, frequency: 50, maxFrequency: 100 },
                        { id: 77, frequency: 25, maxFrequency: 100 }, //crab
                        { id: 68, frequency: -25, maxFrequency: 25 }, //ancient lobster
                    ],
                },
                {
                    nodeID: 'Lake Flora',
                    frequency: 5,
                    minimumBaseAmount: 2,
                    maximumBaseAmount: 8,
                    maxFrequency: 75,
                    loot: [
                        { id: 71, frequency: 1, maxFrequency: 5 }, //seaweed
                        { id: 4020, frequency: 1, maxFrequency: 10, minAmount: 1, maxAmount: 5 }, //aquatic fiber 1
                        { id: 4021, frequency: 1, maxFrequency: 10, minAmount: 1, maxAmount: 5 }, //aquatic fiber 2
                        { id: 4022, frequency: -5, maxFrequency: 15, minAmount: 1, maxAmount: 5 }, //aquatic fiber 3
                        { id: 4023, frequency: -10, maxFrequency: 5, minAmount: 1, maxAmount: 3 }, //aquatic fiber 4
                    ],
                },
            ],

        },
        154: {
            name: 'Open Ocean',
            locID: 154,
            actionType: 'Action-Fishing',
            actionVerb: 'Fish',
            baseDuration: 11500,
            activeMessage: 'Fishing in the Open Ocean',
            locationImage: '/images/fishing/open_ocean.jpg',
            accessRequirements: {
                requiredSkills: [{ skill: 'fishing', level: 65 }],
                requiredItems: [],
                consumeRequiredItems: false,
                requiredEquipment: [],
                maxGroupSize: 1,
            },
            extraTooltipInfo: 'WIP',
            nodes: [
                {
                    nodeID: 'The Open Ocean',
                    frequency: 100,
                    minimumBaseAmount: 2,
                    maximumBaseAmount: 4,
                    maxFrequency: 150,
                    loot: [
                        { id: 65, frequency: 100, maxFrequency: 150 },
                        { id: 66, frequency: 50, maxFrequency: 100 },
                        { id: 76, frequency: 10, maxFrequency: 50 }, //hammerhead
                        { id: 75, frequency: -33, maxFrequency: 10 }, //great white
                        { id: 70, frequency: -50, maxFrequency: 25 }, //huge tuna
                        { id: 67, frequency: -75, maxFrequency: 5 }, //megalodon
                        { id: 71, frequency: 1, maxFrequency: 7.5 }, //seaweed
                        { id: 4020, frequency: 1, maxFrequency: 5, minAmount: 1, maxAmount: 5 }, //aquatic fiber 1
                        { id: 4021, frequency: -5, maxFrequency: 5, minAmount: 1, maxAmount: 5 }, //aquatic fiber 2
                        { id: 4022, frequency: -10, maxFrequency: 5, minAmount: 1, maxAmount: 5 }, //aquatic fiber 3
                        { id: 4023, frequency: -15, maxFrequency: 5, minAmount: 1, maxAmount: 5 }, //aquatic fiber 4
                        { id: 11030, frequency: 1, maxFrequency: 20 }, //rotten driftwood
                        { id: 11031, frequency: 1, maxFrequency: 20 }, //sturdy driftwood
                        { id: 11032, frequency: -50, maxFrequency: 0.5 }, //aquamarine
                    ],
                },
                {
                    nodeID: 'Sharks Ate All The Tuna',
                    frequency: 15,
                    minimumBaseAmount: 1,
                    maximumBaseAmount: 2,
                    maxFrequency: 75,
                    loot: [
                        { id: 65, frequency: -35, maxFrequency: 5 }, //get lucky, catch a tuna! lol
                        { id: 66, frequency: 75, maxFrequency: 100 },
                        { id: 76, frequency: 15, maxFrequency: 33 }, //hammerhead
                        { id: 67, frequency: -50, maxFrequency: 15 }, //megalodon
                        { id: 75, frequency: 10, maxFrequency: 25 }, //great white
                        { id: 71, frequency: 1, maxFrequency: 15 }, //seaweed
                        { id: 4020, frequency: 1, maxFrequency: 5, minAmount: 1, maxAmount: 5 }, //aquatic fiber 1
                        { id: 4021, frequency: -5, maxFrequency: 5, minAmount: 1, maxAmount: 5 }, //aquatic fiber 2
                        { id: 4022, frequency: -10, maxFrequency: 5, minAmount: 1, maxAmount: 5 }, //aquatic fiber 3
                        { id: 4023, frequency: -15, maxFrequency: 5, minAmount: 1, maxAmount: 5 }, //aquatic fiber 4
                        { id: 11030, frequency: 1, maxFrequency: 15 }, //rotten driftwood
                        { id: 11031, frequency: 1, maxFrequency: 15 }, //sturdy driftwood
                    ],
                },
                {
                    nodeID: 'Almost Jurassic',
                    frequency: -50,
                    minimumBaseAmount: 2,
                    maximumBaseAmount: 3,
                    maxFrequency: 50,
                    loot: [
                        { id: 75, frequency: 1, maxFrequency: 15 }, //great white
                        { id: 76, frequency: 1, maxFrequency: 15 }, //hammerhead
                        { id: 70, frequency: 50, maxFrequency: 60 }, //huge tuna
                        { id: 67, frequency: 5, maxFrequency: 25 }, //megalodon
                        { id: 69, frequency: -100, maxFrequency: 5 }, //tentacle meat
                        { id: 11032, frequency: -75, maxFrequency: 0.75 }, //aquamarine
                    ],
                },
                {
                    nodeID: 'Is that a tentacle?',
                    frequency: -100,
                    minimumBaseAmount: 2,
                    maximumBaseAmount: 3,
                    maxFrequency: 25,
                    loot: [
                        { id: 75, frequency: 25, maxFrequency: 75 }, //great white
                        { id: 76, frequency: 5, maxFrequency: 45 }, //hammerhead
                        { id: 67, frequency: 15, maxFrequency: 25 }, //megalodon
                        { id: 69, frequency: -50, maxFrequency: 150 }, //tentacle meat
                        { id: 11032, frequency: -100, maxFrequency: 1.5 }, //aquamarine
                        { id: 11036, frequency: -15, maxFrequency: 5 }, //mystical drift wood
                    ],
                },
                {
                    nodeID: 'Carefree Day',
                    frequency: 10,
                    minimumBaseAmount: 4,
                    maximumBaseAmount: 8,
                    maxFrequency: 60,
                    loot: [
                        { id: 65, frequency: 100, maxFrequency: 200 },
                        { id: 70, frequency: -25, maxFrequency: 150 }, //huge tuna
                        { id: 71, frequency: 3, maxFrequency: 15 }, //seaweed
                        { id: 4020, frequency: 1, maxFrequency: 5, minAmount: 1, maxAmount: 5 }, //aquatic fiber 1
                        { id: 4021, frequency: -5, maxFrequency: 5, minAmount: 1, maxAmount: 5 }, //aquatic fiber 2
                        { id: 4022, frequency: -10, maxFrequency: 5, minAmount: 1, maxAmount: 5 }, //aquatic fiber 3
                        { id: 4023, frequency: -15, maxFrequency: 5, minAmount: 1, maxAmount: 5 }, //aquatic fiber 4
                        { id: 11030, frequency: 3, maxFrequency: 25 }, //rotten driftwood
                        { id: 11031, frequency: 3, maxFrequency: 30 }, //sturdy driftwood
                        { id: 11032, frequency: -30, maxFrequency: 0.75 }, //aquamarine
                        { id: 11036, frequency: -15, maxFrequency: 5 }, //mystical drift wood
                    ],
                },
                {
                    nodeID: 'Shipwreck Bay',
                    frequency: -25,
                    minimumBaseAmount: 4,
                    maximumBaseAmount: 8,
                    maxFrequency: 100,
                    loot: [
                        { id: 71, frequency: 3, maxFrequency: 15 }, //seaweed
                        { id: 4020, frequency: 1, maxFrequency: 5, minAmount: 1, maxAmount: 5 }, //aquatic fiber 1
                        { id: 4021, frequency: -5, maxFrequency: 5, minAmount: 1, maxAmount: 5 }, //aquatic fiber 2
                        { id: 4022, frequency: -10, maxFrequency: 5, minAmount: 1, maxAmount: 5 }, //aquatic fiber 3
                        { id: 4023, frequency: -15, maxFrequency: 5, minAmount: 1, maxAmount: 5 }, //aquatic fiber 4
                        { id: 11030, frequency: 15, maxFrequency: 25 }, //rotten driftwood
                        { id: 11031, frequency: 5, maxFrequency: 40 }, //sturdy driftwood
                        { id: 11032, frequency: -30, maxFrequency: 1.25 }, //aquamarine
                        { id: 11036, frequency: -1, maxFrequency: 15 }, //mystical drift wood
                        { id: 67, frequency: -25, maxFrequency: 50 }, //megalodon
                        { id: 75, frequency: 3, maxFrequency: 75 }, //great white
                        { id: 76, frequency: 5, maxFrequency: 100 }, //hammerhead
                        { id: 66, frequency: 25, maxFrequency: 125 },
                    ],
                },
                {
                    nodeID: "Playtester's Paradise",
                    frequency: -50,
                    minimumBaseAmount: 1,
                    maximumBaseAmount: 1,
                    maxFrequency: 1,
                    loot: [
                        { id: 11032, frequency: -30, maxFrequency: 1.5 }, //aquamarine
                        { id: 67, frequency: 5, maxFrequency: 50 }, //megalodon
                        { id: 75, frequency: 5, maxFrequency: 25 }, //great white
                        { id: 76, frequency: 5, maxFrequency: 10 }, //hammerhead
                        { id: 11036, frequency: -1, maxFrequency: 20 }, //mystical drift wood
                        { id: 4023, frequency: -5, maxFrequency: 7.5, minAmount: 1, maxAmount: 5 }, //aquatic fiber 4
                        { id: 4024, frequency: -10, maxFrequency: 4.5, minAmount: 1, maxAmount: 3 }, //aquatic fiber 5
                    ],
                },
                {
                    nodeID: 'Ghost Ship',
                    frequency: -75,
                    minimumBaseAmount: 1,
                    maximumBaseAmount: 8,
                    maxFrequency: 2.5,
                    loot: [
                        { id: 11031, frequency: 5, maxFrequency: 25 }, //sturdy driftwood
                        { id: 11036, frequency: -1, maxFrequency: 50 }, //mystical drift wood
                        { id: 11032, frequency: -30, maxFrequency: 2.5 }, //aquamarine
                        { id: 67, frequency: -25, maxFrequency: 50 }, //megalodon
                        { id: 75, frequency: 3, maxFrequency: 75 }, //great white
                        { id: 76, frequency: 5, maxFrequency: 75 }, //hammerhead
                        { id: 66, frequency: 25, maxFrequency: 50 },
                    ],
                },
                {
                    nodeID: 'Ocean Flora',
                    frequency: 5,
                    minimumBaseAmount: 2,
                    maximumBaseAmount: 8,
                    maxFrequency: 75,
                    loot: [
                        { id: 71, frequency: 1, maxFrequency: 5 }, //seaweed
                        { id: 4020, frequency: 1, maxFrequency: 10, minAmount: 1, maxAmount: 5 }, //aquatic fiber 1
                        { id: 4021, frequency: 1, maxFrequency: 10, minAmount: 1, maxAmount: 5 }, //aquatic fiber 2
                        { id: 4022, frequency: 1, maxFrequency: 10, minAmount: 1, maxAmount: 5 }, //aquatic fiber 3
                        { id: 4023, frequency: -5, maxFrequency: 15, minAmount: 1, maxAmount: 5 }, //aquatic fiber 4
                        { id: 4024, frequency: -10, maxFrequency: 5, minAmount: 1, maxAmount: 3 }, //aquatic fiber 5
                    ],
                },
            ],

        },
        155: {
            name: 'Stormy Seas',
            locID: 155,
            actionType: 'Action-Fishing',
            actionVerb: 'Fish',
            baseDuration: 11500,
            activeMessage: 'Fishing in the Stormy Seas',
            locationImage: '/images/fishing/stormy_fishing.jpg',
            accessRequirements: {
                requiredSkills: [{ skill: 'fishing', level: 85 }],
                requiredItems: [],
                consumeRequiredItems: false,
                requiredEquipment: [],
                maxGroupSize: 1,
            },
            extraTooltipInfo: 'This is a dangerous location!',
            nodes: [
                {
                    nodeID: 'The Stormy Seas',
                    frequency: 100,
                    minimumBaseAmount: 2,
                    maximumBaseAmount: 4,
                    maxFrequency: 150,
                    loot: [
                        { id: 65, frequency: 25, maxFrequency: 50 },
                        { id: 66, frequency: 50, maxFrequency: 75 },
                        { id: 76, frequency: 15, maxFrequency: 50 }, //hammerhead
                        { id: 75, frequency: -10, maxFrequency: 10 }, //great white
                        { id: 70, frequency: -25, maxFrequency: 25 }, //huge tuna
                        { id: 67, frequency: -50, maxFrequency: 5 }, //megalodon
                        { id: 71, frequency: 1, maxFrequency: 10 }, //seaweed
                        { id: 4020, frequency: 1, maxFrequency: 5, minAmount: 1, maxAmount: 5 }, //aquatic fiber 1
                        { id: 4021, frequency: 1, maxFrequency: 5, minAmount: 1, maxAmount: 5 }, //aquatic fiber 2
                        { id: 4022, frequency: 1, maxFrequency: 5, minAmount: 1, maxAmount: 5 }, //aquatic fiber 3
                        { id: 4023, frequency: 1, maxFrequency: 5, minAmount: 1, maxAmount: 5 }, //aquatic fiber 4
                        { id: 4024, frequency: -5, maxFrequency: 5, minAmount: 1, maxAmount: 5 }, //aquatic fiber 5
                        { id: 11030, frequency: 1, maxFrequency: 20 }, //rotten driftwood
                        { id: 11031, frequency: 1, maxFrequency: 20 }, //sturdy driftwood
                        { id: 11032, frequency: -45, maxFrequency: 1.5 }, //aquamarine
                        { id: 11036, frequency: -35, maxFrequency: 8 }, //mystical drift wood
                    ],
                },
                {
                    nodeID: 'Eye of the Storm',
                    frequency: 25,
                    minimumBaseAmount: 4,
                    maximumBaseAmount: 8,
                    maxFrequency: 100,
                    loot: [
                        { id: 71, frequency: 3, maxFrequency: 30 }, //seaweed
                        { id: 4020, frequency: 1, maxFrequency: 5, minAmount: 1, maxAmount: 5 }, //aquatic fiber 1
                        { id: 4021, frequency: 1, maxFrequency: 5, minAmount: 1, maxAmount: 5 }, //aquatic fiber 2
                        { id: 4022, frequency: 1, maxFrequency: 5, minAmount: 1, maxAmount: 5 }, //aquatic fiber 3
                        { id: 4023, frequency: 1, maxFrequency: 5, minAmount: 1, maxAmount: 5 }, //aquatic fiber 4
                        { id: 4024, frequency: -5, maxFrequency: 5, minAmount: 1, maxAmount: 5 }, //aquatic fiber 5
                        { id: 11030, frequency: 15, maxFrequency: 25 }, //rotten driftwood
                        { id: 11031, frequency: 5, maxFrequency: 40 }, //sturdy driftwood
                        { id: 11032, frequency: -30, maxFrequency: 1.5 }, //aquamarine
                        { id: 67, frequency: -25, maxFrequency: 10 }, //megalodon
                        { id: 75, frequency: -20, maxFrequency: 10 }, //great white
                        { id: 76, frequency: -15, maxFrequency: 10 }, //hammerhead
                        { id: 66, frequency: 10, maxFrequency: 25 },
                        { id: 65, frequency: 25, maxFrequency: 50 },
                        { id: 70, frequency: 5, maxFrequency: 15 }, //huge tuna
                    ],
                },
                {
                    nodeID: 'Endless Vortex',
                    frequency: -75,
                    minimumBaseAmount: 2,
                    maximumBaseAmount: 8,
                    maxFrequency: 15,
                    loot: [
                        { id: 67, frequency: 15, maxFrequency: 100 }, //megalodon
                        { id: 69, frequency: 50, maxFrequency: 250 }, //tentacle meat
                        { id: 11032, frequency: -100, maxFrequency: 2 }, //aquamarine
                        { id: 11036, frequency: -1, maxFrequency: 25 }, //mystical drift wood
                    ],
                },
                {
                    nodeID: "INFO's Stand",
                    frequency: -100,
                    minimumBaseAmount: 3,
                    maximumBaseAmount: 9,
                    maxFrequency: 5,
                    loot: [
                        { id: 69, frequency: 25, maxFrequency: 150 }, //tentacle meat
                        { id: 11032, frequency: -105, maxFrequency: 5 }, //aquamarine
                        { id: 11036, frequency: -1, maxFrequency: 25 }, //mystical drift wood
                    ],
                },
                {
                    nodeID: "World's End",
                    frequency: -50,
                    minimumBaseAmount: 3,
                    maximumBaseAmount: 7,
                    maxFrequency: 5,
                    loot: [
                        { id: 65, frequency: 1, maxFrequency: 33 },
                        { id: 66, frequency: 1, maxFrequency: 50 },
                        { id: 76, frequency: 15, maxFrequency: 75 }, //hammerhead
                        { id: 75, frequency: -25, maxFrequency: 25 }, //great white
                        { id: 70, frequency: -33, maxFrequency: 35 }, //huge tuna
                        { id: 67, frequency: -50, maxFrequency: 15 }, //megalodon
                        { id: 71, frequency: 1, maxFrequency: 3 }, //seaweed
                        { id: 4020, frequency: 1, maxFrequency: 1, minAmount: 1, maxAmount: 5 }, //aquatic fiber 1
                        { id: 4021, frequency: 1, maxFrequency: 1, minAmount: 1, maxAmount: 5 }, //aquatic fiber 2
                        { id: 4022, frequency: 1, maxFrequency: 1, minAmount: 1, maxAmount: 5 }, //aquatic fiber 3
                        { id: 4023, frequency: 1, maxFrequency: 1, minAmount: 1, maxAmount: 5 }, //aquatic fiber 4
                        { id: 4024, frequency: 1, maxFrequency: 1, minAmount: 1, maxAmount: 5 }, //aquatic fiber 5
                        { id: 4025, frequency: 1, maxFrequency: 15 }, //aquatic fiber 6
                        { id: 11030, frequency: 1, maxFrequency: 3 }, //rotten driftwood
                        { id: 11031, frequency: 1, maxFrequency: 3 }, //sturdy driftwood
                        { id: 11032, frequency: -45, maxFrequency: 1.25 }, //aquamarine
                        { id: 11036, frequency: -40, maxFrequency: 20 }, //mystical drift wood
                    ],
                },
                {
                    nodeID: 'Deep Sea Flora',
                    frequency: 5,
                    minimumBaseAmount: 2,
                    maximumBaseAmount: 8,
                    maxFrequency: 45,
                    loot: [
                        { id: 71, frequency: 1, maxFrequency: 5 }, //seaweed
                        { id: 4020, frequency: 1, maxFrequency: 10, minAmount: 1, maxAmount: 5 }, //aquatic fiber 1
                        { id: 4021, frequency: 1, maxFrequency: 10, minAmount: 1, maxAmount: 5 }, //aquatic fiber 2
                        { id: 4022, frequency: 1, maxFrequency: 10, minAmount: 1, maxAmount: 5 }, //aquatic fiber 3
                        { id: 4023, frequency: 1, maxFrequency: 10, minAmount: 1, maxAmount: 5 }, //aquatic fiber 4
                        { id: 4024, frequency: -5, maxFrequency: 10, minAmount: 1, maxAmount: 5 }, //aquatic fiber 5
                        { id: 4025, frequency: -10, maxFrequency: 15, minAmount: 1, maxAmount: 3 }, //aquatic fiber 6
                    ],
                },
            ],

        },

        200: {
            name: 'Deep Pit Encounter',
            locID: 200,
            actionType: 'Action-Combat',
            baseDuration: 1000,
            activeMessage: 'Fighting Monsters in the Deep Pit',
            locationImage: '/images/mining/deep_pit.jpg',
            accessRequirements: {
                requiredSkills: [{ skill: 'mining', level: 70 }],
                requiredItems: [],
                consumeRequiredItems: false,
                requiredEquipment: [],
                maxGroupSize: 1,
            },

        },
        201: {
            name: 'Stormy Seas Encounter',
            locID: 201,
            actionType: 'Action-Combat',
            baseDuration: 1000,
            activeMessage: 'Fighting Monsters in the Stormy Seas',
            locationImage: '/images/fishing/stormy_fishing.jpg',
            accessRequirements: {
                requiredSkills: [{ skill: 'fishing', level: 85 }],
                requiredItems: [],
                consumeRequiredItems: false,
                requiredEquipment: [],
                maxGroupSize: 1,
            },

        },
        202: {
            name: 'Living Forest Encounter',
            locID: 202,
            actionType: 'Action-Combat',
            baseDuration: 1000,
            activeMessage: 'Fighting Monsters in the Living Forest',
            locationImage: '/images/foraging/living_forest.jpg',
            accessRequirements: {
                requiredSkills: [{ skill: 'foraging', level: 70 }],
                requiredItems: [],
                consumeRequiredItems: false,
                requiredEquipment: [],
                maxGroupSize: 1,
            },

        },

        //Combat locations 1000+
        1000: {
            name: 'Farm',
            locID: 1000,
            actionType: 'Action-Combat',
            baseDuration: 1000,
            activeMessage: 'Fighting in the Farm',
            locationImage: '/images/combat/locations/farm.png',
            accessRequirements: {
                maxGroupSize: 1,
            },

        },
        1001: {
            name: 'Caves',
            locID: 1001,
            actionType: 'Action-Combat',
            baseDuration: 1000,
            activeMessage: 'Fighting in the Caves',
            locationImage: '/images/combat/locations/cave.png',
            accessRequirements: {
                maxGroupSize: 1,
            },

        },
        1002: {
            name: 'City',
            locID: 1002,
            actionType: 'Action-Combat',
            baseDuration: 1000,
            activeMessage: 'Fighting in the City',
            locationImage: '/images/combat/locations/city.png',
            accessRequirements: {
                maxGroupSize: 1,
            },

        },
        1003: {
            name: 'Lava Maze',
            locID: 1003,
            actionType: 'Action-Combat',
            baseDuration: 1000,
            activeMessage: 'Fighting in the Lava Maze',
            locationImage: '/images/combat/locations/lava_maze.png',
            accessRequirements: {
                maxGroupSize: 1,
            },

        },
        1004: {
            name: 'Corrupted Lands',
            locID: 1004,
            actionType: 'Action-Combat',
            baseDuration: 1000,
            activeMessage: 'Fighting in the Corrupted Lands',
            locationImage: '/images/combat/locations/corrupted_lands.png',
            accessRequirements: {
                maxGroupSize: 1,
            },

        },
        1005: {
            name: 'Valley of Giants',
            locID: 1005,
            actionType: 'Action-Combat',
            baseDuration: 1000,
            activeMessage: 'Fighting in the Valley of Giants',
            locationImage: '/images/combat/locations/valley_of_giants_3.png',
            accessRequirements: {
                maxGroupSize: 1,
            },

        },
        1006: {
            name: 'Chaos Wastes',
            locID: 1006,
            actionType: 'Action-Combat',
            baseDuration: 1000,
            activeMessage: 'Fighting in the Chaos Wastes',
            locationImage: '/images/combat/locations/chaos_wastes_3.png',
            accessRequirements: {
                maxGroupSize: 2,
            },

        },
        1007: {
            name: 'Enchanted Armory',
            locID: 1007,
            actionType: 'Action-Combat',
            baseDuration: 1000,
            activeMessage: 'Fighting in the Enchanted Armory',
            locationImage: '/images/combat/locations/enchanted_armory.png',
            accessRequirements: {
                maxGroupSize: 2,
            },

        },
        1008: {
            name: 'Fallen Academy',
            locID: 1008,
            actionType: 'Action-Combat',
            baseDuration: 1000,
            activeMessage: 'Fighting in the Fallen Academy',
            locationImage: '/images/combat/locations/fallen_academy.png',
            accessRequirements: {
                maxGroupSize: 1,
            },

        },
        1009: {
            name: 'Overgrown Woods',
            locID: 1009,
            actionType: 'Action-Combat',
            baseDuration: 1000,
            activeMessage: 'Fighting in the Overgrown Woods',
            locationImage: '/images/combat/locations/overgrown_forest.png',
            accessRequirements: {
                maxGroupSize: 2,
            },

        },
        1010: {
            name: 'Elven Encampment',
            locID: 1010,
            actionType: 'Action-Combat',
            baseDuration: 1000,
            activeMessage: 'Fighting in the Elven Encampment',
            locationImage: '/images/combat/locations/elven_encampment.png',
            accessRequirements: {
                maxGroupSize: 1,
            },

        },

        //Elite locations 2000+
        2000: {
            name: 'Living Armory', // BK Elite
            locID: 2000,
            actionType: 'Action-Combat',
            baseDuration: 1000,
            activeMessage: 'Fighting in the Living Armory',
            locationImage: '/images/combat/locations/living_armory.png',
            accessRequirements: {
                maxGroupSize: 1,
            },

        },
        2001: {
            name: "Giant's Hills", // VOG Elite
            locID: 2001,
            actionType: 'Action-Combat',
            baseDuration: 1000,
            activeMessage: "Fighting in the Giant's Hills",
            accessRequirements: {
                maxGroupSize: 1,
            },

        },
        2002: {
            name: 'Corroded Battlefield', // CL Elite
            locID: 2002,
            actionType: 'Action-Combat',
            baseDuration: 1000,
            activeMessage: 'Fighting on the Corroded Battlefield',
            accessRequirements: {
                maxGroupSize: 1,
            },

        },
        2003: {
            name: 'Goblin Kitchen', // gobbo Elite
            locID: 2003,
            actionType: 'Action-Combat',
            baseDuration: 1000,
            activeMessage: 'Fighting in the Goblin Kitchen',
            accessRequirements: {
                maxGroupSize: 1,
            },

        },
        2004: {
            name: "Ot_to's Farm", // farm Elite
            locID: 2004,
            actionType: 'Action-Combat',
            baseDuration: 1000,
            activeMessage: "Fighting in Ot_to's Farm",
            accessRequirements: {
                maxGroupSize: 1,
            },

        },
        2005: {
            name: 'The Pit', // lava Elite
            locID: 2005,
            actionType: 'Action-Combat',
            baseDuration: 1000,
            activeMessage: 'Fighting in The Pit',
            accessRequirements: {
                maxGroupSize: 1,
            },

        },
        2006: {
            name: 'Sacred Grove', // living forest Elite
            locID: 2006,
            actionType: 'Action-Combat',
            baseDuration: 1000,
            activeMessage: 'Fighting in the Sacred Grove',
            accessRequirements: {
                maxGroupSize: 1,
            },

        },
        2007: {
            name: 'Chaotic Rift', // chaos wastes Elite
            locID: 2007,
            actionType: 'Action-Combat',
            baseDuration: 1000,
            activeMessage: 'Fighting in the Chaotic Rift',
            accessRequirements: {
                maxGroupSize: 1,
            },

        },
        2008: {
            name: 'Stormier Seas', // stormy seas Elite
            locID: 2008,
            actionType: 'Action-Combat',
            baseDuration: 1000,
            activeMessage: 'Fighting in the Stormier Seas',
            accessRequirements: {
                maxGroupSize: 1,
            },

        },
        2009: {
            name: 'Obsidian Research Facility',
            locID: 2009,
            actionType: 'Action-Combat',
            baseDuration: 1000,
            activeMessage: 'Fighting in the Obsidian Research Facility',
            accessRequirements: {
                maxGroupSize: 1,
            },

        },
        2010: {
            name: 'Fallen Wizard Tower',
            locID: 2010,
            actionType: 'Action-Combat',
            baseDuration: 1000,
            activeMessage: 'Fighting in the Fallen Wizard Tower',
            accessRequirements: {
                maxGroupSize: 1,
            },

        },
        2011: {
            name: 'Nox Woods',
            locID: 2011,
            actionType: 'Action-Combat',
            baseDuration: 1000,
            activeMessage: 'Fighting in the Nox Woods',
            accessRequirements: {
                maxGroupSize: 1,
            },

        },
        2012: {
            name: 'Royal Encampment',
            locID: 2012,
            actionType: 'Action-Combat',
            baseDuration: 1000,
            activeMessage: 'Royal Encampment',
            accessRequirements: {
                maxGroupSize: 1,
            },

        },

        //Dungeon locations 3000+
        3000: {
            name: 'Gazing into the Abyss',
            locID: 3000,
            actionType: 'Action-Combat',
            baseDuration: 1000,
            activeMessage: 'Gazing too deeply into the abyss',
            accessRequirements: {
                maxGroupSize: 1,
            },

        },
        3001: {
            name: 'Goblin Settlement',
            locID: 3001,
            actionType: 'Action-Combat',
            baseDuration: 1000,
            activeMessage: 'Raiding a Goblin Settlement',
            accessRequirements: {
                maxGroupSize: 3,
            },

        },
        3002: {
            name: 'Dark Fortress',
            locID: 3002,
            actionType: 'Action-Combat',
            baseDuration: 1000,
            activeMessage: 'Fighting through the Dark Fortress',
            accessRequirements: {
                maxGroupSize: 3,
            },

        },
        3003: {
            name: "Giant's Keep",
            locID: 3003,
            actionType: 'Action-Combat',
            baseDuration: 1000,
            activeMessage: "Challenging the Giant's Keep",
            accessRequirements: {
                maxGroupSize: 5,
            },

        },
        // TODO Dungeon locations
        3004: {
            name: 'Elder Ruins',
            locID: 3004,
            actionType: 'Action-Combat',
            baseDuration: 1000,
            activeMessage: 'Exploring the Elder Ruins',
            accessRequirements: {
                maxGroupSize: 4,
            },

        },
        3005: {
            name: 'Overgrown Castle',
            locID: 3005,
            actionType: 'Action-Combat',
            baseDuration: 1000,
            activeMessage: 'Unturning stones at the Overgrown Castle',
            accessRequirements: {
                maxGroupSize: 3,
            },

        },
        3006: {
            name: 'Ancient Barrows',
            locID: 3006,
            actionType: 'Action-Combat',
            baseDuration: 1000,
            activeMessage: 'Grave Robbing in the Ancient Barrows',
            accessRequirements: {
                maxGroupSize: 2,
            },

        },
        3007: {
            name: 'Palace of Flame',
            locID: 3007,
            actionType: 'Action-Combat',
            baseDuration: 1000,
            activeMessage: 'Extinguishing the Palace of Flame',
            accessRequirements: {
                maxGroupSize: 2,
            },

        },
        3008: {
            name: 'Eye of the Storm',
            locID: 3008,
            actionType: 'Action-Combat',
            baseDuration: 1000,
            activeMessage: 'Treading water at the Eye of the Storm',
            accessRequirements: {
                maxGroupSize: 5,
            },

        },
        3009: {
            name: 'The Maelstrom',
            locID: 3009,
            actionType: 'Action-Combat',
            baseDuration: 1000,
            activeMessage: 'Facing the Maelstrom',
            accessRequirements: {
                maxGroupSize: 5,
            },

        },

        // World bosses
        3010: {
            name: 'RISE OF INFO',
            locID: 3010,
            actionType: 'Action-Combat',
            baseDuration: 1000,
            activeMessage: 'Facing the Truth',
            accessRequirements: {
                maxGroupSize: 50,
            },

        },
        3011: {
            name: 'Beyond the Edge',
            locID: 3011,
            actionType: 'Action-Combat',
            baseDuration: 1000,
            activeMessage: 'Going Beyond the Edge',
            accessRequirements: {
                maxGroupSize: 50,
            },

        },


    };
    abilities = {
        1: {
            id: 1,
            abilityName: 'Melee Auto Attack',
            abilityImage: '/images/combat/ability_icons/basic_melee.png',
            description:
                'A completely standard melee attack that benefits from no particular style or skill. It is the most basic of attacks.',
            damageType: 'Melee',
            autoAttackStyle: 'Melee',

            damageScaling: [{ affinity: 'Melee', scaling: 1 }],
            accuracyScaling: [{ affinity: 'Melee', scaling: 1 }],

            baseSpeedCoeff: 1,
            baseMinimumDamageCoeff: 1,
            baseMaximumDamageCoeff: 1,
            baseAccuracyCoeff: 1,

            maxTargets: 1,
        },
        2: {
            id: 2,
            abilityName: 'Magic Auto Attack',
            abilityImage: '/images/combat/ability_icons/basic_magic.png',
            description:
                'An unattuned magical attack that draws from the magical abilities of its caster or their equipment without favoring any elemental affinity.',
            damageType: 'Magic',
            autoAttackStyle: 'Magic',

            damageScaling: [{ affinity: 'Magic', scaling: 1 }],
            accuracyScaling: [{ affinity: 'Magic', scaling: 1 }],

            baseSpeedCoeff: 1,
            baseMinimumDamageCoeff: 1,
            baseMaximumDamageCoeff: 1,
            baseAccuracyCoeff: 1,

            maxTargets: 1,
        },
        3: {
            id: 3,
            abilityName: 'Range Auto Attack',
            abilityImage: '/images/combat/ability_icons/basic_range.png',
            description:
                'Fire a basic, unspecialized projectile. This projectile is fully mundane and can be fired infinitely without needing to restock.',
            damageType: 'Range',
            autoAttackStyle: 'Range',

            damageScaling: [{ affinity: 'Range', scaling: 1 }],
            accuracyScaling: [{ affinity: 'Range', scaling: 1 }],

            baseSpeedCoeff: 1,
            baseMinimumDamageCoeff: 1,
            baseMaximumDamageCoeff: 1,
            baseAccuracyCoeff: 1,

            maxTargets: 1,
        },
        4: {
            id: 4,
            abilityName: 'Slash',
            abilityImage: '/images/combat/ability_icons/cleave.png',
            description: 'Use the blade of your weapon to slash at your target.',
            damageType: 'Melee',

            damageScaling: [
                { affinity: 'Melee', scaling: 1 },
                { affinity: 'Slashing', scaling: 1.333 },
            ],
            accuracyScaling: [
                { affinity: 'Melee', scaling: 1 },
                { affinity: 'Slashing', scaling: 1.333 },
            ],

            baseSpeedCoeff: 1,
            baseMinimumDamageCoeff: 1,
            baseMaximumDamageCoeff: 1,
            baseAccuracyCoeff: 1,

            maxTargets: 1,
        },
        5: {
            id: 5,
            abilityName: 'Stab',
            abilityImage: '/images/combat/ability_icons/stab.png',
            description: 'Use the tip of your weapon to stab your target.',
            damageType: 'Melee',

            damageScaling: [
                { affinity: 'Melee', scaling: 1 },
                { affinity: 'Piercing', scaling: 1.333 },
            ],
            accuracyScaling: [
                { affinity: 'Melee', scaling: 1 },
                { affinity: 'Piercing', scaling: 1.333 },
            ],

            baseSpeedCoeff: 1,
            baseMinimumDamageCoeff: 1,
            baseMaximumDamageCoeff: 1,
            baseAccuracyCoeff: 1,

            maxTargets: 1,
        },
        6: {
            id: 6,
            abilityName: 'Crush',
            abilityImage: '/images/combat/ability_icons/crush.png',
            description: 'Use the weight of your weapon to crush your target.',
            damageType: 'Melee',

            damageScaling: [
                { affinity: 'Melee', scaling: 1 },
                { affinity: 'Blunt', scaling: 1.333 },
            ],
            accuracyScaling: [
                { affinity: 'Melee', scaling: 1 },
                { affinity: 'Blunt', scaling: 1.333 },
            ],

            baseSpeedCoeff: 1,
            baseMinimumDamageCoeff: 1,
            baseMaximumDamageCoeff: 1,
            baseAccuracyCoeff: 1,

            maxTargets: 1,
        },
        7: {
            id: 7,
            abilityName: 'Fire Ball',
            abilityImage: '/images/combat/ability_icons/fireball.png',
            description: 'Harness a ball of fire to throw at your enemies. Not a good idea to play catch with.',
            damageType: 'Magic',
            cooldown: 30000,
            runeCost: [{ itemID: 512, amount: 2 }],

            damageScaling: [
                { affinity: 'Magic', scaling: 1 },
                { affinity: 'Fire', scaling: 1.333 },
            ],
            accuracyScaling: [
                { affinity: 'Magic', scaling: 1 },
                { affinity: 'Fire', scaling: 1.333 },
            ],

            baseSpeedCoeff: 1.2,
            baseMinimumDamageCoeff: 1,
            baseMaximumDamageCoeff: 1,
            baseAccuracyCoeff: 1,

            maxTargets: 1,
        },
        8: {
            id: 8,
            abilityName: 'Ice Shard',
            abilityImage: '/images/combat/ability_icons/ice_shard.png',
            description:
                'Launch a magically hardened ice into your opponent to deal an impressive amount of piercing and ice damage.',
            damageType: 'Magic',
            cooldown: 30000,

            damageScaling: [
                { affinity: 'Magic', scaling: 1 },
                { affinity: 'Piercing', scaling: 1.1 },
                { affinity: 'Ice', scaling: 1.333 },
            ],
            accuracyScaling: [
                { affinity: 'Magic', scaling: 1 },
                { affinity: 'Piercing', scaling: 1.1 },
                { affinity: 'Ice', scaling: 1.333 },
            ],

            baseSpeedCoeff: 1.2,
            baseMinimumDamageCoeff: 1,
            baseMaximumDamageCoeff: 1,
            baseAccuracyCoeff: 1,

            maxTargets: 1,
        },
        9: {
            id: 9,
            abilityName: "Nature's Sanctuary",
            abilityImage: '/images/combat/ability_icons/reinforce.png',
            description:
                "Manifest some of nature's power to defend yourself and deal minor nature damage to your opponent.",
            damageType: 'Magic',
            cooldown: 30000,

            damageScaling: [
                { affinity: 'Magic', scaling: 1 },
                { affinity: 'Nature', scaling: 1.333 },
            ],
            accuracyScaling: [
                { affinity: 'Magic', scaling: 1 },
                { affinity: 'Nature', scaling: 1.333 },
            ],

            baseSpeedCoeff: 1.2,
            baseMinimumDamageCoeff: 0.25,
            baseMaximumDamageCoeff: 0.5,
            baseAccuracyCoeff: 1.5,

            selfBuff: {
                onlyOnHit: false,
                enchantmentApply: 8009,
                enchantmentStrength: 1,
                enchantmentChanceToApply: 1,
                enchantmentAmount: 4,
            },

            maxTargets: 1,
        },
        10: {
            // Boss version of Chaos Rend
            id: 10,
            abilityName: 'Greater Chaos Rend',
            abilityImage: '/images/combat/ability_icons/chaos_melee.png',
            description: 'A greater chaos melee attack',
            damageType: 'Melee',

            damageScaling: [
                { affinity: 'Melee', scaling: 1 },
                { affinity: 'Chaos', scaling: 1.333 },
            ],
            accuracyScaling: [
                { affinity: 'Melee', scaling: 1 },
                { affinity: 'Chaos', scaling: 1.333 },
            ],

            baseSpeedCoeff: 1.25,
            baseMinimumDamageCoeff: 0.75,
            baseMaximumDamageCoeff: 1.25,
            baseAccuracyCoeff: 0.9,

            maxTargets: 3,
        },
        11: {
            // Player version of Chaos Rend
            id: 11,
            abilityName: 'Lesser Chaos Rend',
            abilityImage: '/images/combat/ability_icons/chaos_melee.png',
            description:
                'Though an imperfect copy of an attack known only to the Giant King, it is far from weak. Tear forth a new rend in reality and hope nothing is on the other side.',
            damageType: 'Melee',
            cooldown: 30000,

            damageScaling: [
                { affinity: 'Melee', scaling: 1 },
                { affinity: 'Chaos', scaling: 1.333 },
            ],
            accuracyScaling: [
                { affinity: 'Melee', scaling: 1 },
                { affinity: 'Chaos', scaling: 1.333 },
            ],

            baseSpeedCoeff: 1.05,
            baseMinimumDamageCoeff: 1,
            baseMaximumDamageCoeff: 1.15,
            baseAccuracyCoeff: 0.8,

            maxTargets: 1,
        },
        12: {
            id: 12,
            abilityName: 'Artillery',
            abilityImage: '/images/combat/ability_icons/artillery.png',
            description:
                'Fire a barrage of explosive projectiles into the midst of your enemies, allowing you to deal an extreme amount of damage to multiple targets.',
            damageType: 'Range',
            cooldown: 30000,
            useRangedAmmo: true,

            damageScaling: [
                { affinity: 'Range', scaling: 1 },
                { affinity: 'Blunt', scaling: 1.333 },
            ],
            accuracyScaling: [
                { affinity: 'Range', scaling: 1 },
                { affinity: 'Blunt', scaling: 1.333 },
            ],

            baseSpeedCoeff: 1.75,
            baseMinimumDamageCoeff: 1.5,
            baseMaximumDamageCoeff: 4,
            baseAccuracyCoeff: 0.75,

            maxTargets: 5,
        },
        13: {
            id: 13,
            abilityName: 'Shatter Strike',
            abilityImage: '/images/combat/ability_icons/shatterstrike.png',
            description: 'Put your might into a single heavy hitting crushing attack at the expense of speed and accuracy.',
            damageType: 'Melee',
            cooldown: 30000,

            damageScaling: [
                { affinity: 'Melee', scaling: 1 },
                { affinity: 'Blunt', scaling: 1.333 },
            ],
            accuracyScaling: [
                { affinity: 'Melee', scaling: 1 },
                { affinity: 'Blunt', scaling: 1.333 },
            ],

            baseSpeedCoeff: 1.75,
            baseMinimumDamageCoeff: 1.5,
            baseMaximumDamageCoeff: 3,
            baseAccuracyCoeff: 0.75,

            maxTargets: 1,
        },
        14: {
            id: 14,
            abilityName: 'Crystal Fracture',
            abilityImage: '/images/combat/ability_icons/shatterstrike.png',
            description:
                'Harness the strength of chaotic crystals to fracture your foes with an impressive crushing strike.',
            damageType: 'Melee',
            cooldown: 30000,

            damageScaling: [
                { affinity: 'Melee', scaling: 1 },
                { affinity: 'Blunt', scaling: 1.333 },
                { affinity: 'Chaos', scaling: 1.333 },
            ],
            accuracyScaling: [
                { affinity: 'Melee', scaling: 1 },
                { affinity: 'Blunt', scaling: 1.333 },
                { affinity: 'Chaos', scaling: 1.333 },
            ],

            baseSpeedCoeff: 1.25,
            baseMinimumDamageCoeff: 0.9,
            baseMaximumDamageCoeff: 1.33,
            baseAccuracyCoeff: 1.05,

            maxTargets: 1,
        },
        15: {
            id: 15,
            abilityName: 'Titanic Strike',
            abilityImage: '/images/combat/ability_icons/titanicstrike.png',
            description: 'A slow but incredibly heavy hitting blunt attack.',
            damageType: 'Melee',
            cooldown: 30000,

            damageScaling: [
                { affinity: 'Melee', scaling: 1.1 },
                { affinity: 'Blunt', scaling: 1.66 },
            ],
            accuracyScaling: [
                { affinity: 'Melee', scaling: 1.1 },
                { affinity: 'Blunt', scaling: 1.66 },
            ],

            baseSpeedCoeff: 1.66,
            baseMinimumDamageCoeff: 1.1,
            baseMaximumDamageCoeff: 2.25,
            baseAccuracyCoeff: 1,

            maxTargets: 1,
        },
        16: {
            id: 16,
            abilityName: 'Lightning Strike',
            abilityImage: '/images/combat/ability_icons/lightning_strike.png',
            description: 'Strike as quick as lightning!',
            damageType: 'Melee',
            cooldown: 10000,

            damageScaling: [
                { affinity: 'Melee', scaling: 1 },
                { affinity: 'Slashing', scaling: 1.333 },
                { affinity: 'Lightning', scaling: 1.333 },
            ],
            accuracyScaling: [
                { affinity: 'Melee', scaling: 1 },
                { affinity: 'Slashing', scaling: 1.333 },
                { affinity: 'Lightning', scaling: 1.333 },
            ],

            baseSpeedCoeff: 0.6,
            baseMinimumDamageCoeff: 0.6,
            baseMaximumDamageCoeff: 0.6,
            baseAccuracyCoeff: 1,

            maxTargets: 1,
        },
        17: {
            id: 17,
            abilityName: 'Entropic Burst',
            abilityImage: '/images/combat/ability_icons/chaos_missile_2.png',
            description: 'All things eventually come to an end.',
            damageType: 'Magic',
            cooldown: 10000,

            damageScaling: [
                { affinity: 'Magic', scaling: 1.1 },
                { affinity: 'Chaos', scaling: 1.5 },
            ],
            accuracyScaling: [
                { affinity: 'Magic', scaling: 1.1 },
                { affinity: 'Chaos', scaling: 1.5 },
            ],

            baseSpeedCoeff: 0.5,
            baseMinimumDamageCoeff: 0.75,
            baseMaximumDamageCoeff: 0.5,
            baseAccuracyCoeff: 1.75,

            maxTargets: 1,
        },
        18: {
            id: 18,
            abilityName: 'Flamethrower',
            abilityImage: '/images/combat/ability_icons/flamethrower.png',
            description: 'Fire an intense gout of flame!',
            damageType: 'Magic',
            cooldown: 10000,
            runeCost: [{ itemID: 512, amount: 5 }],

            damageScaling: [
                { affinity: 'Magic', scaling: 1 },
                { affinity: 'Fire', scaling: 1.333 },
            ],
            accuracyScaling: [
                { affinity: 'Magic', scaling: 1 },
                { affinity: 'Fire', scaling: 1.333 },
            ],

            baseSpeedCoeff: 1.25,
            baseMinimumDamageCoeff: 1.5,
            baseMaximumDamageCoeff: 2.5,
            baseAccuracyCoeff: 0.66,

            maxTargets: 3,
        },
        19: {
            id: 19,
            abilityName: 'Regal Might',
            abilityImage: '/images/combat/ability_icons/regal_might.png',
            description:
                'Harness your regal power to summon a small magical ice storm to deal minor ice damage and increase your defenses somewhat.',
            damageType: 'Magic',
            cooldown: 60000,

            damageScaling: [
                { affinity: 'Magic', scaling: 1 },
                { affinity: 'Ice', scaling: 1.333 },
            ],
            accuracyScaling: [
                { affinity: 'Magic', scaling: 1 },
                { affinity: 'Ice', scaling: 1.333 },
            ],

            baseSpeedCoeff: 0.5,
            baseMinimumDamageCoeff: 0.25,
            baseMaximumDamageCoeff: 0.5,
            baseAccuracyCoeff: 3,

            selfBuff: {
                onlyOnHit: false,
                enchantmentApply: 8010,
                enchantmentStrength: 2,
                enchantmentChanceToApply: 1,
                enchantmentAmount: 4,
            },

            maxTargets: 1,
        },
        20: {
            id: 20,
            abilityName: 'Krakatoa',
            abilityImage: '/images/combat/ability_icons/krakatoa.png',
            description: 'Kra-ka-to-ahhhh! Let loose a magical blast of fire from your head. This is definitely safe!',
            damageType: 'Magic',
            cooldown: 30000,

            damageScaling: [
                { affinity: 'Magic', scaling: 1 },
                { affinity: 'Fire', scaling: 1.333 },
            ],
            accuracyScaling: [
                { affinity: 'Magic', scaling: 1 },
                { affinity: 'Fire', scaling: 1.333 },
            ],

            baseSpeedCoeff: 1.33,
            baseMinimumDamageCoeff: 2,
            baseMaximumDamageCoeff: 3,
            baseAccuracyCoeff: 1.25,

            maxTargets: 5,
        },
        21: {
            id: 21,
            abilityName: 'Triple Shot',
            abilityImage: '/images/combat/ability_icons/tripleshot.png',
            description: 'Quickly fire up to three arrows at the enemy party! Only one arrow can strike each target.',
            damageType: 'Range',
            cooldown: 30000,
            useRangedAmmo: true,

            damageScaling: [{ affinity: 'Range', scaling: 1 }],
            accuracyScaling: [{ affinity: 'Range', scaling: 1 }],

            baseSpeedCoeff: 1,
            baseMinimumDamageCoeff: 1,
            baseMaximumDamageCoeff: 1,
            baseAccuracyCoeff: 0.75,

            maxTargets: 3,
        },
        22: {
            id: 22,
            abilityName: 'Cleave',
            abilityImage: '/images/combat/ability_icons/cleave.png',
            description:
                'Let loose a mighty swing to strike up to two enemies at once! Due to having to cleave through two enemies, this attack deals slightly less damage than a single target attack.',
            damageType: 'Melee',
            cooldown: 30000,

            damageScaling: [
                { affinity: 'Melee', scaling: 1 },
                { affinity: 'Slashing', scaling: 1.333 },
            ],
            accuracyScaling: [
                { affinity: 'Melee', scaling: 1 },
                { affinity: 'Slashing', scaling: 1.333 },
            ],

            baseSpeedCoeff: 1.15,
            baseMinimumDamageCoeff: 0.66,
            baseMaximumDamageCoeff: 1,
            baseAccuracyCoeff: 1,

            maxTargets: 2,
        },
        23: {
            id: 23,
            abilityName: 'Deadshot',
            abilityImage: '/images/combat/ability_icons/deadshot_alt.png',
            description: "One shot, one kill. Fire a well placed arrow at an enemy's weakspot.",
            damageType: 'Range',
            cooldown: 30000,
            useRangedAmmo: true,

            damageScaling: [{ affinity: 'Range', scaling: 1 }],
            accuracyScaling: [{ affinity: 'Range', scaling: 1.33 }],

            baseSpeedCoeff: 1.33,
            baseMinimumDamageCoeff: 1.5,
            baseMaximumDamageCoeff: 2,
            baseAccuracyCoeff: 2.25,

            maxTargets: 1,
        },
        24: {
            id: 24,
            abilityName: 'Retreating Shot',
            abilityImage: '/images/combat/ability_icons/camo.png',
            description:
                'Fire a distraction shot and retreat from the frontline temporarily, significantly reducing your threat.',
            damageType: 'Range',
            cooldown: 30000,
            useRangedAmmo: true,

            damageScaling: [{ affinity: 'Range', scaling: 1 }],
            accuracyScaling: [{ affinity: 'Range', scaling: 1 }],

            baseSpeedCoeff: 0.5,
            baseMinimumDamageCoeff: 0.25,
            baseMaximumDamageCoeff: 0.75,
            baseAccuracyCoeff: 0.75,

            selfBuff: {
                onlyOnHit: false,
                enchantmentApply: 8014,
                enchantmentStrength: 10,
                enchantmentChanceToApply: 1,
                enchantmentAmount: 6,
            },

            maxTargets: 1,
        },
        25: {
            id: 25,
            abilityName: 'Apocalyptic Ritual',
            abilityImage: '/images/combat/ability_icons/apocalypse.png',
            description:
                'Release a hellish wave of sulphuric flames to destroy nearly everything in its wake. Magic of this scale may destroy the entire enemy party, but the incredibly long incantation time leaves the caster wide open to counter attacks.',
            damageType: 'Magic',
            cooldown: 120000,
            runeCost: [{ itemID: 512, amount: 50 }],

            damageScaling: [
                { affinity: 'Magic', scaling: 1 },
                { affinity: 'Fire', scaling: 1.5 },
            ],
            accuracyScaling: [
                { affinity: 'Magic', scaling: 1 },
                { affinity: 'Fire', scaling: 1.5 },
            ],

            baseSpeedCoeff: 5,
            baseMinimumDamageCoeff: 3.5,
            baseMaximumDamageCoeff: 12.5,
            baseAccuracyCoeff: 5,

            maxTargets: 10,
        },
        26: {
            id: 26,
            abilityName: 'Bulwark',
            abilityImage: '/images/combat/ability_icons/bulwark.png',
            description: 'Ready yourself to defend against the next attack!',
            damageType: 'Melee',
            cooldown: 30000,

            damageScaling: [{ affinity: 'Melee', scaling: 1 }],
            accuracyScaling: [{ affinity: 'Melee', scaling: 1 }],

            baseSpeedCoeff: 0.5,
            baseMinimumDamageCoeff: 0.1,
            baseMaximumDamageCoeff: 0.1,
            baseAccuracyCoeff: 5,

            selfBuff: {
                onlyOnHit: false,
                enchantmentApply: 14,
                enchantmentStrength: 6,
                enchantmentChanceToApply: 1,
                enchantmentAmount: 1,
            },

            maxTargets: 1,
        },
        27: {
            id: 27,
            abilityName: 'Piercing Ammo',
            abilityImage: '/images/combat/ability_icons/piercing_shot.png',
            description: 'Use piercing ammo to deal additional piercing damage at the expense of lower base damage.',
            damageType: 'Range',
            useRangedAmmo: true,

            damageScaling: [
                { affinity: 'Range', scaling: 1 },
                { affinity: 'Piercing', scaling: 1.33 },
            ],
            accuracyScaling: [{ affinity: 'Range', scaling: 1 }],

            baseSpeedCoeff: 1,
            baseMinimumDamageCoeff: 0.9,
            baseMaximumDamageCoeff: 0.9,
            baseAccuracyCoeff: 1,

            maxTargets: 1,
        },
        28: {
            id: 28,
            abilityName: 'Heavy Ammo',
            abilityImage: '/images/combat/ability_icons/piercing_shot.png',
            description: 'Use heavy ammo to deal additional blunt damage at the expense of lower base damage.',
            damageType: 'Range',
            useRangedAmmo: true,

            damageScaling: [
                { affinity: 'Range', scaling: 1 },
                { affinity: 'Blunt', scaling: 1.33 },
            ],
            accuracyScaling: [{ affinity: 'Range', scaling: 1 }],

            baseSpeedCoeff: 1,
            baseMinimumDamageCoeff: 0.9,
            baseMaximumDamageCoeff: 0.9,
            baseAccuracyCoeff: 1,

            maxTargets: 1,
        },
        29: {
            id: 29,
            abilityName: 'Serrated Ammo',
            abilityImage: '/images/combat/ability_icons/piercing_shot.png',
            description: 'Use serrated ammo to deal additional slashing damage at the expense of lower base damage.',
            damageType: 'Range',
            useRangedAmmo: true,

            damageScaling: [
                { affinity: 'Range', scaling: 1 },
                { affinity: 'Slashing', scaling: 1.33 },
            ],
            accuracyScaling: [{ affinity: 'Range', scaling: 1 }],

            baseSpeedCoeff: 1,
            baseMinimumDamageCoeff: 0.9,
            baseMaximumDamageCoeff: 0.9,
            baseAccuracyCoeff: 1,

            maxTargets: 1,
        },
        30: {
            id: 30,
            abilityName: 'Lesser Fire Bolt',
            abilityImage: '/images/combat/ability_icons/fire_bolt.png',
            description: 'Attune your magic to fire to deal additional fire damage at the expense of lower base damage.',
            damageType: 'Magic',
            runeCost: [{ itemID: 512, amount: 1 }],

            damageScaling: [
                { affinity: 'Magic', scaling: 1 },
                { affinity: 'Fire', scaling: 1.33 },
            ],
            accuracyScaling: [{ affinity: 'Magic', scaling: 1 }],

            baseSpeedCoeff: 1,
            baseMinimumDamageCoeff: 0.9,
            baseMaximumDamageCoeff: 0.9,
            baseAccuracyCoeff: 1,

            maxTargets: 1,
        },
        31: {
            id: 31,
            abilityName: 'Lesser Ice Bolt',
            abilityImage: '/images/combat/ability_icons/ice_bolt.png',
            description: 'Attune your magic to ice to deal additional ice damage at the expense of lower base damage.',
            damageType: 'Magic',
            runeCost: [{ itemID: 513, amount: 1 }],

            damageScaling: [
                { affinity: 'Magic', scaling: 1 },
                { affinity: 'Ice', scaling: 1.33 },
            ],
            accuracyScaling: [{ affinity: 'Magic', scaling: 1 }],

            baseSpeedCoeff: 1,
            baseMinimumDamageCoeff: 0.9,
            baseMaximumDamageCoeff: 0.9,
            baseAccuracyCoeff: 1,

            maxTargets: 1,
        },
        32: {
            id: 32,
            abilityName: 'Lesser Nature Bolt',
            abilityImage: '/images/combat/ability_icons/nature_bolt.png',
            description: 'Attune your magic to ice to deal additional nature damage at the expense of lower base damage.',
            damageType: 'Magic',
            runeCost: [{ itemID: 517, amount: 1 }],

            damageScaling: [
                { affinity: 'Magic', scaling: 1 },
                { affinity: 'Nature', scaling: 1.33 },
            ],
            accuracyScaling: [{ affinity: 'Magic', scaling: 1 }],

            baseSpeedCoeff: 1,
            baseMinimumDamageCoeff: 0.9,
            baseMaximumDamageCoeff: 0.9,
            baseAccuracyCoeff: 1,

            maxTargets: 1,
        },
        33: {
            id: 33,
            abilityName: 'Lesser Earth Bolt',
            abilityImage: '/images/combat/ability_icons/earth_bolt.png',
            description: 'Attune your magic to earth to deal additional blunt damage at the expense of lower base damage.',
            damageType: 'Magic',
            runeCost: [{ itemID: 511, amount: 1 }],

            damageScaling: [
                { affinity: 'Magic', scaling: 1 },
                { affinity: 'Blunt', scaling: 1.4 },
            ],
            accuracyScaling: [{ affinity: 'Magic', scaling: 1 }],

            baseSpeedCoeff: 1,
            baseMinimumDamageCoeff: 0.8,
            baseMaximumDamageCoeff: 0.8,
            baseAccuracyCoeff: 1,

            maxTargets: 1,
        },
        34: {
            id: 34,
            abilityName: 'Lesser Air Bolt',
            abilityImage: '/images/combat/ability_icons/air_bolt.png',
            description: 'Attune your magic to air to deal additional slashing damage at the expense of lower base damage.',
            damageType: 'Magic',
            runeCost: [{ itemID: 510, amount: 1 }],

            damageScaling: [
                { affinity: 'Magic', scaling: 1 },
                { affinity: 'Slashing', scaling: 1.4 },
            ],
            accuracyScaling: [{ affinity: 'Magic', scaling: 1 }],

            baseSpeedCoeff: 1,
            baseMinimumDamageCoeff: 0.8,
            baseMaximumDamageCoeff: 0.8,
            baseAccuracyCoeff: 1,

            maxTargets: 1,
        },
        35: {
            id: 35,
            abilityName: 'Greater Soul Steal',
            abilityImage: '/images/combat/ability_icons/lifesteal.png',
            description: 'Leach the very essence of your enemies to rejuvenate yourself.',
            damageType: 'Magic',
            cooldown: 30000,

            damageScaling: [
                { affinity: 'Magic', scaling: 1.5 },
                { affinity: 'Melee', scaling: 1.5 },
            ],
            accuracyScaling: [
                { affinity: 'Magic', scaling: 1.5 },
                { affinity: 'Melee', scaling: 1.5 },
            ],

            baseSpeedCoeff: 1,
            baseMinimumDamageCoeff: 0.25,
            baseMaximumDamageCoeff: 0.75,
            baseAccuracyCoeff: 3,

            selfBuff: {
                onlyOnHit: false,
                enchantmentApply: 8008,
                enchantmentStrength: 2,
                enchantmentChanceToApply: 1,
                enchantmentAmount: 3,
            },

            maxTargets: 1,
        },
        36: {
            id: 36,
            abilityName: 'Infernal Cleave',
            abilityImage: '/images/combat/ability_icons/cleave.png',
            description: 'An enhanced cleave attack that can hit up to 3 enemies at once.',
            damageType: 'Melee',
            cooldown: 30000,

            damageScaling: [
                { affinity: 'Melee', scaling: 1 },
                { affinity: 'Slashing', scaling: 1.5 },
            ],
            accuracyScaling: [
                { affinity: 'Melee', scaling: 1 },
                { affinity: 'Slashing', scaling: 1.5 },
            ],

            baseSpeedCoeff: 1.15,
            baseMinimumDamageCoeff: 0.85,
            baseMaximumDamageCoeff: 1,
            baseAccuracyCoeff: 1,

            maxTargets: 3,
        },
        37: {
            id: 37,
            abilityName: 'Lesser Soul Steal',
            abilityImage: '/images/combat/ability_icons/lifesteal.png',
            description: 'Leach the very essence of your enemies to rejuvenate yourself.',
            damageType: 'Magic',
            cooldown: 30000,

            damageScaling: [
                { affinity: 'Magic', scaling: 1.5 },
                { affinity: 'Melee', scaling: 1.5 },
            ],
            accuracyScaling: [
                { affinity: 'Magic', scaling: 1.5 },
                { affinity: 'Melee', scaling: 1.5 },
            ],

            baseSpeedCoeff: 1,
            baseMinimumDamageCoeff: 0.1,
            baseMaximumDamageCoeff: 0.5,
            baseAccuracyCoeff: 3,

            selfBuff: {
                onlyOnHit: false,
                enchantmentApply: 8008,
                enchantmentStrength: 1,
                enchantmentChanceToApply: 1,
                enchantmentAmount: 3,
            },

            maxTargets: 1,
        },
        38: {
            id: 38,
            abilityName: 'Shapeless Cleave',
            abilityImage: '/images/combat/ability_icons/cleave.png',
            description: 'An enhanced cleave attack that can hit up to 3 enemies at once.',
            damageType: 'Melee',
            cooldown: 30000,

            damageScaling: [
                { affinity: 'Melee', scaling: 1 },
                { affinity: 'Slashing', scaling: 1.333 },
            ],
            accuracyScaling: [
                { affinity: 'Melee', scaling: 1 },
                { affinity: 'Slashing', scaling: 1.333 },
            ],

            baseSpeedCoeff: 1.15,
            baseMinimumDamageCoeff: 0.75,
            baseMaximumDamageCoeff: 1,
            baseAccuracyCoeff: 1,

            maxTargets: 3,
        },
        39: {
            id: 39,
            abilityName: "Chef's Fury",
            abilityImage: '/images/combat/ability_icons/berserk.png',
            description: 'Channel your inner chef to become the most feared thing on the battlefield!',
            damageType: 'Melee',
            cooldown: 30000,

            damageScaling: [
                { affinity: 'Melee', scaling: 1 },
                { affinity: 'Slashing', scaling: 1.333 },
                { affinity: 'Blunt', scaling: 1.333 },
            ],
            accuracyScaling: [
                { affinity: 'Melee', scaling: 1 },
                { affinity: 'Slashing', scaling: 1.333 },
                { affinity: 'Blunt', scaling: 1.333 },
            ],

            baseSpeedCoeff: 1,
            baseMinimumDamageCoeff: 1,
            baseMaximumDamageCoeff: 1.25,
            baseAccuracyCoeff: 1.05,

            maxTargets: 1,
        },
        40: {
            id: 40,
            abilityName: 'Wild Slash',
            abilityImage: '/images/combat/ability_icons/bleed.png',
            description: 'Learn from the woodland beasts to slash your enemies with a wild and uncontrolled slash!',
            damageType: 'Melee',
            cooldown: 10000,

            damageScaling: [
                { affinity: 'Melee', scaling: 1 },
                { affinity: 'Slashing', scaling: 1.333 },
            ],
            accuracyScaling: [
                { affinity: 'Melee', scaling: 1 },
                { affinity: 'Slashing', scaling: 1.333 },
            ],

            baseSpeedCoeff: 0.33,
            baseMinimumDamageCoeff: 0.1,
            baseMaximumDamageCoeff: 1.5,
            baseAccuracyCoeff: 0.9,

            maxTargets: 1,
        },
        41: {
            id: 41,
            abilityName: 'Greater Wild Slash',
            abilityImage: '/images/combat/ability_icons/bleed.png',
            description: 'Learn from the woodland beasts to slash your enemies with a wild and uncontrolled slash!',
            damageType: 'Melee',
            cooldown: 10000,

            damageScaling: [
                { affinity: 'Melee', scaling: 1 },
                { affinity: 'Slashing', scaling: 1.333 },
            ],
            accuracyScaling: [
                { affinity: 'Melee', scaling: 1 },
                { affinity: 'Slashing', scaling: 1.333 },
            ],

            baseSpeedCoeff: 0.33,
            baseMinimumDamageCoeff: 0.33,
            baseMaximumDamageCoeff: 1.5,
            baseAccuracyCoeff: 0.9,

            maxTargets: 1,
        },
        42: {
            id: 42,
            abilityName: 'Elven Deadshot',
            abilityImage: '/images/combat/ability_icons/deadshot_alt.png',
            description: 'What do your elven eyes see?',
            damageType: 'Range',
            cooldown: 30000,
            useRangedAmmo: true,

            damageScaling: [{ affinity: 'Range', scaling: 1.1 }],
            accuracyScaling: [{ affinity: 'Range', scaling: 1.5 }],

            baseSpeedCoeff: 1.33,
            baseMinimumDamageCoeff: 1.66,
            baseMaximumDamageCoeff: 2.15,
            baseAccuracyCoeff: 2.25,

            maxTargets: 1,
        },
        43: {
            id: 43,
            abilityName: "Ocean's Wrath",
            abilityImage: '/images/combat/ability_icons/oceans_wrath.png',
            description: 'Unleash the wrath of the ocean upon your enemies!',
            damageType: 'Magic',
            cooldown: 120000,
            runeCost: [{ itemID: 513, amount: 50 }],

            damageScaling: [
                { affinity: 'Magic', scaling: 1 },
                { affinity: 'Ice', scaling: 1.5 },
            ],
            accuracyScaling: [
                { affinity: 'Magic', scaling: 1 },
                { affinity: 'Ice', scaling: 1.5 },
            ],

            baseSpeedCoeff: 5,
            baseMinimumDamageCoeff: 3.5,
            baseMaximumDamageCoeff: 12.5,
            baseAccuracyCoeff: 5,

            maxTargets: 10,
        },
        44: {
            id: 44,
            abilityName: "The Ol' One-Two : 1st",
            abilityImage: '/images/combat/ability_icons/onetwo.png',
            description: "Hit 'em with the ol' one-two!",
            damageType: 'Melee',
            cooldown: 10000,

            damageScaling: [
                { affinity: 'Melee', scaling: 1 },
                { affinity: 'Piercing', scaling: 1.333 },
            ],
            accuracyScaling: [
                { affinity: 'Melee', scaling: 1 },
                { affinity: 'Piercing', scaling: 1.333 },
            ],

            baseSpeedCoeff: 0.33,
            baseMinimumDamageCoeff: 0.33,
            baseMaximumDamageCoeff: 0.75,
            baseAccuracyCoeff: 0.9,

            maxTargets: 1,
        },
        45: {
            id: 45,
            abilityName: 'Lesser Earth Strike',
            abilityImage: '/images/combat/ability_icons/titanicstrike.png',
            description: 'Use the power of the earth to enhance your crushing attacks. BONK!',
            damageType: 'Melee',
            cooldown: 10000,

            damageScaling: [
                { affinity: 'Melee', scaling: 1 },
                { affinity: 'Blunt', scaling: 1.333 },
            ],
            accuracyScaling: [
                { affinity: 'Melee', scaling: 1 },
                { affinity: 'Blunt', scaling: 1.333 },
            ],

            baseSpeedCoeff: 1,
            baseMinimumDamageCoeff: 1.1,
            baseMaximumDamageCoeff: 1.1,
            baseAccuracyCoeff: 1,

            maxTargets: 1,
        },
        46: {
            id: 46,
            abilityName: 'Parry This',
            abilityImage: '/images/combat/ability_icons/deflect.png',
            description: 'Ready yourself to attempt to parry the next attack!',
            damageType: 'Melee',
            cooldown: 30000,

            damageScaling: [{ affinity: 'Melee', scaling: 1 }],
            accuracyScaling: [{ affinity: 'Melee', scaling: 1 }],

            baseSpeedCoeff: 0.9,
            baseMinimumDamageCoeff: 0.1,
            baseMaximumDamageCoeff: 0.25,
            baseAccuracyCoeff: 5,

            selfBuff: {
                onlyOnHit: false,
                enchantmentApply: 20,
                enchantmentStrength: 20,
                enchantmentChanceToApply: 1,
                enchantmentAmount: 1,
            },

            maxTargets: 1,
        },
        47: {
            id: 47,
            abilityName: 'Bandage Friendly',
            abilityImage: '/images/combat/ability_icons/heal.png',
            description: 'Bandage the lowest HP member of your party to heal them for 300 health over 15 seconds.',
            damageType: 'Melee',
            cooldown: 30000,

            damageScaling: [{ affinity: 'Melee', scaling: 1 }],
            accuracyScaling: [{ affinity: 'Melee', scaling: 1 }],

            baseSpeedCoeff: 1.25,
            baseMinimumDamageCoeff: 0,
            baseMaximumDamageCoeff: 0,
            baseAccuracyCoeff: 999,

            targetFriendly: {
                target: 'lowestHP',
            },
            canTargetSelf: false,

            healthChangeEvent: {
                dotCount: 15,
                healthChange: 20,
                healthChangeDelay: 1000,
            },

            skipReactives: true,
            dealsNoDamage: true,

            maxTargets: 1,
        },
        48: {
            id: 48,
            abilityName: 'Call For Aid',
            abilityImage: '/images/combat/ability_icons/call_for_aid.png',
            description: 'Summons two friendly guards to aid you in battle.',
            damageType: 'Melee',
            cooldown: 86400000,

            damageScaling: [{ affinity: 'Melee', scaling: 1 }],
            accuracyScaling: [{ affinity: 'Melee', scaling: 1 }],

            baseSpeedCoeff: 3,
            baseMinimumDamageCoeff: 0,
            baseMaximumDamageCoeff: 0,
            baseAccuracyCoeff: 0,

            summonFriendly: {
                monsterID: 5,
                count: 2,
            },
            dealsNoDamage: true,

            maxTargets: 1,
        },
        49: {
            id: 49,
            abilityName: 'Defend Ally',
            abilityImage: '/images/combat/ability_icons/bulwark.png',
            description: 'Increase the defenses of an ally at the expense of your own.',
            damageType: 'Melee',
            cooldown: 30000,

            damageScaling: [{ affinity: 'Melee', scaling: 1 }],
            accuracyScaling: [{ affinity: 'Melee', scaling: 1 }],

            baseSpeedCoeff: 1.25,
            baseMinimumDamageCoeff: 0,
            baseMaximumDamageCoeff: 0,
            baseAccuracyCoeff: 999,

            targetFriendly: {
                target: 'lowestDef',
            },
            canTargetSelf: false,

            selfBuff: {
                onlyOnHit: false,
                enchantmentApply: 8010,
                enchantmentStrength: 2,
                enchantmentChanceToApply: 1,
                enchantmentAmount: 4,
            },
            targetBuff: {
                onlyOnHit: false,
                enchantmentApply: 8011,
                enchantmentStrength: 1,
                enchantmentChanceToApply: 1,
                enchantmentAmount: 4,
            },
            dealsNoDamage: true,

            skipReactives: true,

            maxTargets: 1,
        },
        50: {
            id: 50,
            abilityName: 'Lightning Strikes Twice',
            abilityImage: '/images/combat/ability_icons/lightning_strike.png',
            description: 'Surely this is an anomaly?',
            damageType: 'Melee',
            cooldown: 10000,

            damageScaling: [
                { affinity: 'Melee', scaling: 1 },
                { affinity: 'Slashing', scaling: 1.333 },
                { affinity: 'Lightning', scaling: 1.333 },
            ],
            accuracyScaling: [
                { affinity: 'Melee', scaling: 1 },
                { affinity: 'Slashing', scaling: 1.333 },
                { affinity: 'Lightning', scaling: 1.333 },
            ],

            baseSpeedCoeff: 0.4,
            baseMinimumDamageCoeff: 0.4,
            baseMaximumDamageCoeff: 0.4,
            baseAccuracyCoeff: 1,

            maxTargets: 1,
        },
        51: {
            id: 51,
            abilityName: "The Ol' One-Two : 2nd",
            abilityImage: '/images/combat/ability_icons/onetwo.png',
            description: "Hit 'em with the ol' one-two!",
            damageType: 'Melee',
            cooldown: 10000,

            damageScaling: [
                { affinity: 'Melee', scaling: 1 },
                { affinity: 'Piercing', scaling: 1.333 },
            ],
            accuracyScaling: [
                { affinity: 'Melee', scaling: 1 },
                { affinity: 'Piercing', scaling: 1.333 },
            ],

            baseSpeedCoeff: 0.33,
            baseMinimumDamageCoeff: 0.33,
            baseMaximumDamageCoeff: 0.75,
            baseAccuracyCoeff: 0.9,

            maxTargets: 1,
        },
        52: {
            id: 52,
            abilityName: 'Execute',
            abilityImage: '/images/combat/ability_icons/execute.png',
            description:
                "Executes the enemy! Deals up to 15% more damage based on the enemy's missing health, beginning at 33% target health.",
            damageType: 'Melee',
            cooldown: 30000,

            damageScaling: [{ affinity: 'Melee', scaling: 1 }],
            accuracyScaling: [{ affinity: 'Melee', scaling: 1 }],

            baseSpeedCoeff: 1.2,
            baseMinimumDamageCoeff: 1,
            baseMaximumDamageCoeff: 1.5,
            baseAccuracyCoeff: 1.1,

            maxTargets: 1,
        },
        53: {
            id: 53,
            abilityName: 'The Limpe Sauce',
            abilityImage: '/images/combat/ability_icons/skull_flame.png',
            description: "WHERE'S THE LIMPE SAUCE?!",
            damageType: 'Magic',
            cooldown: 30000,

            damageScaling: [
                { affinity: 'Magic', scaling: 1 },
                { affinity: 'Fire', scaling: 1.5 },
            ],
            accuracyScaling: [
                { affinity: 'Magic', scaling: 1 },
                { affinity: 'Fire', scaling: 1.5 },
            ],

            baseSpeedCoeff: 1,
            baseMinimumDamageCoeff: 1,
            baseMaximumDamageCoeff: 1.25,
            baseAccuracyCoeff: 1.05,

            maxTargets: 1,
        },
        54: {
            id: 54,
            abilityName: 'Taunt',
            abilityImage: '/images/combat/ability_icons/taunt.png',
            description: 'Taunts the enemy, significantly increasing your threat level.',
            damageType: 'Melee',
            cooldown: 5000,

            damageScaling: [{ affinity: 'Melee', scaling: 1 }],
            accuracyScaling: [{ affinity: 'Melee', scaling: 1 }],

            baseSpeedCoeff: 0.1,
            baseMinimumDamageCoeff: 0.01,
            baseMaximumDamageCoeff: 0.01,
            baseAccuracyCoeff: 1,

            dealsNoDamage: true,

            selfBuff: {
                onlyOnHit: false,
                enchantmentApply: 8013,
                enchantmentStrength: 8,
                enchantmentChanceToApply: 1,
                enchantmentAmount: 8,
            },

            maxTargets: 1,
        },
        55: {
            id: 55,
            abilityName: 'Poisonous Strike',
            abilityImage: '/images/combat/ability_icons/necrotic_touch.png',
            description: 'Poison!',
            damageType: 'Melee',
            cooldown: 10000,

            damageScaling: [
                { affinity: 'Melee', scaling: 1 },
                { affinity: 'Poison', scaling: 1.333 },
            ],
            accuracyScaling: [
                { affinity: 'Melee', scaling: 1 },
                { affinity: 'Poison', scaling: 1.333 },
            ],

            baseSpeedCoeff: 1,
            baseMinimumDamageCoeff: 1,
            baseMaximumDamageCoeff: 1,
            baseAccuracyCoeff: 1,

            maxTargets: 1,
        },
        56: {
            id: 56,
            abilityName: "INFO's Lesson",
            abilityImage: '/images/combat/ability_icons/apocalypse.png',
            description: "Did you know you won't survive this?",
            damageType: 'Magic',

            damageScaling: [
                { affinity: 'Magic', scaling: 1 },
                { affinity: 'Chaos', scaling: 5 },
            ],
            accuracyScaling: [
                { affinity: 'Magic', scaling: 1 },
                { affinity: 'Chaos', scaling: 5 },
            ],

            baseSpeedCoeff: 30,
            baseMinimumDamageCoeff: 25,
            baseMaximumDamageCoeff: 50,
            baseAccuracyCoeff: 99999,

            maxTargets: 10,
        },
        57: {
            id: 57,
            abilityName: 'Invisibility',
            abilityImage: '/images/combat/ability_icons/invisible.png',
            description:
                "Actually you're probably closer to just a little translucent, but if you claim to be invisible to sound cooler that's okay too.",
            damageType: 'Magic',
            cooldown: 30000,
            runeCost: [{ itemID: 516, amount: 10 }],

            damageScaling: [{ affinity: 'Magic', scaling: 1 }],
            accuracyScaling: [{ affinity: 'Magic', scaling: 1 }],

            baseSpeedCoeff: 0.25,
            baseMinimumDamageCoeff: 0.01,
            baseMaximumDamageCoeff: 0.01,
            baseAccuracyCoeff: 1,

            dealsNoDamage: true,

            selfBuff: {
                onlyOnHit: false,
                enchantmentApply: 8015,
                enchantmentStrength: 5,
                enchantmentChanceToApply: 1,
                enchantmentAmount: 3,
            },

            maxTargets: 1,
        },
        58: {
            id: 58,
            abilityName: 'Camouflage',
            abilityImage: '/images/combat/ability_icons/camo.png',
            description:
                'Wait, where did you go? Makes you harder to hit but does not inherently decrease your threat generation.',
            damageType: 'Range',
            cooldown: 30000,

            damageScaling: [{ affinity: 'Range', scaling: 1 }],
            accuracyScaling: [{ affinity: 'Range', scaling: 1 }],

            baseSpeedCoeff: 0.25,
            baseMinimumDamageCoeff: 0.01,
            baseMaximumDamageCoeff: 0.01,
            baseAccuracyCoeff: 1,

            dealsNoDamage: true,

            selfBuff: {
                onlyOnHit: false,
                enchantmentApply: 8015,
                enchantmentStrength: 3,
                enchantmentChanceToApply: 1,
                enchantmentAmount: 8,
            },

            maxTargets: 1,
        },
        59: {
            id: 59,
            abilityName: 'Icy Shell',
            abilityImage: '/images/combat/ability_icons/ice_armor.png',
            description:
                'Temporarily encase yourself in a shell of magical ice, increasing protection, resistance, and defensive ice affinity at the cost of agility. Melts very quickly!',
            damageType: 'Magic',
            cooldown: 30000,
            runeCost: [{ itemID: 513, amount: 3 }],

            damageScaling: [{ affinity: 'Magic', scaling: 1 }],
            accuracyScaling: [{ affinity: 'Magic', scaling: 1 }],

            baseSpeedCoeff: 0.333,
            baseMinimumDamageCoeff: 0.01,
            baseMaximumDamageCoeff: 0.01,
            baseAccuracyCoeff: 1,

            dealsNoDamage: true,

            selfBuff: {
                onlyOnHit: false,
                enchantmentApply: 8016,
                enchantmentStrength: 4,
                enchantmentChanceToApply: 1,
                enchantmentAmount: 16,
            },

            maxTargets: 1,
        },
        60: {
            id: 60,
            abilityName: 'Set Traps',
            abilityImage: '/images/combat/ability_icons/trap.png',
            description: 'Sets a trap that significantly reduces agility of an enemy if they are hit by it.',
            damageType: 'Magic',
            cooldown: 30000,

            damageScaling: [{ affinity: 'Range', scaling: 1 }],
            accuracyScaling: [{ affinity: 'Range', scaling: 1.25 }],

            baseSpeedCoeff: 2,
            baseMinimumDamageCoeff: 0.25,
            baseMaximumDamageCoeff: 1,
            baseAccuracyCoeff: 1.5,

            targetBuff: {
                onlyOnHit: true,
                enchantmentApply: 8017,
                enchantmentStrength: 5,
                enchantmentChanceToApply: 1,
                enchantmentAmount: 16,
            },

            maxTargets: 1,
        },
    };
    gameShopItems = {
        1: {
            id: 1,
            itemID: 11010,
            price: 10,
            allowBulkPurchase: true,
            description: 'Used as bait when fishing.',
            image: 'images/fishing/bait/earthworm_hook.png',
        },
        2: {
            id: 2,
            itemID: 1600,
            price: 50000,
            allowBulkPurchase: true,
            description: 'Used in magic to store magical properties; enchants.',
            image: '/images/enchanting/scroll.png',
        },
        3: {
            id: 3,
            itemID: 150,
            price: 1000,
            allowBulkPurchase: true,
            description: 'Fertilizer speeds up the growth of your plants.',
            image: '/images/farming/fertilizer.png',
        },
        4: {
            id: 4,
            itemID: 3001,
            price: 1000,
            allowBulkPurchase: true,
            description: 'An empty vial to pour a potion into.',
            image: '/images/cooking/alchemy/empty_vial.png',
        },
        5: {
            id: 5,
            itemID: 3002,
            price: 1500,
            allowBulkPurchase: true,
            description: 'A large empty vial to pour a potion into.',
            image: '/images/cooking/alchemy/empty_large_vial.png',
        },
        6: {
            id: 6,
            itemID: 3003,
            price: 2000,
            allowBulkPurchase: true,
            description: 'A reinforced empty vial to pour a potion into.',
            image: '/images/cooking/alchemy/empty_reinforced_vial.png',
        },
        7: {
            id: 7,
            itemID: 700,
            price: 50,
            allowBulkPurchase: true,
            description: 'A feather.',
            image: 'images/fishing/feather.png',
        },
        8: {
            id: 8,
            itemID: 520,
            price: 100000,
            allowBulkPurchase: true,
            description: 'An unstable talisman ready to be imbued with essence to become a normal talisman.',
            image: '/images/runecrafting/unstable_talisman.png',
        },

        100: {
            id: 100,
            itemID: 1150,
            price: 100,
            allowBulkPurchase: true,
            description: 'These require a certain amount of skill to use. A total level of 100 should be sufficient.',
            image: '/images/combat/equipment/bronze_gloves.png',
            purchaseRequirements: {
                levelRequirements: [
                    {
                        skill: 'total',
                        level: 100,
                    },
                ],
            },
        },
        101: {
            id: 101,
            itemID: 1151,
            price: 3000,
            allowBulkPurchase: true,
            description: 'These require a certain amount of skill to use. A total level of 200 should be sufficient.',
            image: '/images/combat/equipment/iron_gloves.png',
            purchaseRequirements: {
                levelRequirements: [
                    {
                        skill: 'total',
                        level: 200,
                    },
                ],
            },
        },
        103: {
            id: 103,
            itemID: 1153,
            price: 75000,
            allowBulkPurchase: true,
            description: 'These require a certain amount of skill to use. A total level of 300 should be sufficient.',
            image: '/images/combat/equipment/mithril_gloves.png',
            purchaseRequirements: {
                levelRequirements: [
                    {
                        skill: 'total',
                        level: 300,
                    },
                ],
            },
        },
        104: {
            id: 104,
            itemID: 1154,
            price: 400000,
            allowBulkPurchase: true,
            description: 'These require a certain amount of skill to use. A total level of 400 should be sufficient.',
            image: '/images/combat/equipment/adamantite_gloves.png',
            purchaseRequirements: {
                levelRequirements: [
                    {
                        skill: 'total',
                        level: 400,
                    },
                ],
            },
        },
        105: {
            id: 105,
            itemID: 1155,
            price: 2000000,
            allowBulkPurchase: true,
            description: 'These require a certain amount of skill to use. A total level of 500 should be sufficient.',
            image: '/images/combat/equipment/rune_gloves.png',
            purchaseRequirements: {
                levelRequirements: [
                    {
                        skill: 'total',
                        level: 500,
                    },
                ],
            },
        },
        106: {
            id: 106,
            itemID: 1156,
            price: 6000000,
            allowBulkPurchase: true,
            description: 'These require a certain amount of skill to use. A total level of 600 should be sufficient.',
            image: '/images/combat/equipment/stygian_gloves.png',
            purchaseRequirements: {
                levelRequirements: [
                    {
                        skill: 'total',
                        level: 600,
                    },
                ],
            },
        },
        107: {
            id: 107,
            itemID: 1130,
            price: 1500,
            allowBulkPurchase: true,
            description: 'These require a certain amount of skill to use. A total level of 100 should be sufficient.',
            image: '/images/combat/equipment/bronze_boots_icon.png',
            purchaseRequirements: {
                levelRequirements: [
                    {
                        skill: 'total',
                        level: 100,
                    },
                ],
            },
        },
        108: {
            id: 108,
            itemID: 1131,
            price: 10000,
            allowBulkPurchase: true,
            description: 'These require a certain amount of skill to use. A total level of 200 should be sufficient.',
            image: '/images/combat/equipment/iron_boots_icon.png',
            purchaseRequirements: {
                levelRequirements: [
                    {
                        skill: 'total',
                        level: 200,
                    },
                ],
            },
        },
        109: {
            id: 109,
            itemID: 1133,
            price: 80000,
            allowBulkPurchase: true,
            description: 'These require a certain amount of skill to use. A total level of 300 should be sufficient.',
            image: '/images/combat/equipment/mithril_boots_icon.png',
            purchaseRequirements: {
                levelRequirements: [
                    {
                        skill: 'total',
                        level: 300,
                    },
                ],
            },
        },
        110: {
            id: 110,
            itemID: 1134,
            price: 550000,
            allowBulkPurchase: true,
            description: 'These require a certain amount of skill to use. A total level of 400 should be sufficient.',
            image: '/images/combat/equipment/adamantite_boots_icon.png',
            purchaseRequirements: {
                levelRequirements: [
                    {
                        skill: 'total',
                        level: 400,
                    },
                ],
            },
        },
        111: {
            id: 111,
            itemID: 1135,
            price: 2400000,
            allowBulkPurchase: true,
            description: 'These require a certain amount of skill to use. A total level of 500 should be sufficient.',
            image: '/images/combat/equipment/rune_boots_icon.png',
            purchaseRequirements: {
                levelRequirements: [
                    {
                        skill: 'total',
                        level: 500,
                    },
                ],
            },
        },
        112: {
            id: 112,
            itemID: 1136,
            price: 4000000,
            allowBulkPurchase: true,
            description: 'These require a certain amount of skill to use. A total level of 600 should be sufficient.',
            image: '/images/combat/equipment/stygian_boots_icon.png',
            purchaseRequirements: {
                levelRequirements: [
                    {
                        skill: 'total',
                        level: 600,
                    },
                ],
            },
        },

        300: {
            id: 300,
            itemID: 10003,
            price: 500000,
            allowBulkPurchase: true,
            description: 'A package of gems! Only available for purchase to those in the Ironman league.',
            image: '/images/misc/package.png',
            purchaseRequirements: {
                league: [2],
            },
        },
        301: {
            id: 301,
            itemID: 10004,
            price: 1000000,
            allowBulkPurchase: true,
            description: 'A sealed scroll! Only available for purchase to those in the Ironman league.',
            image: '/images/misc/sealed_scroll.png',
            purchaseRequirements: {
                league: [2],
            },
        },
        // 302: {
        // 	id: 302,
        // 	itemID: 10005,
        // 	price: 100000,
        // 	allowBulkPurchase: true,
        // 	description: 'A small crate of gathering supplies. WIP',
        // 	image: '/images/misc/supply_crate_small.png',
        // },
        // 303: {
        // 	id: 303,
        // 	itemID: 10006,
        // 	price: 500000,
        // 	allowBulkPurchase: true,
        // 	description: 'A crate of gathering supplies. WIP',
        // 	image: '/images/misc/supply_crate.png',
        // },
        // 304: {
        // 	id: 304,
        // 	itemID: 10007,
        // 	price: 1000000,
        // 	allowBulkPurchase: true,
        // 	description: 'A large crate of gathering supplies. WIP',
        // 	image: '/images/misc/supply_crate_large.png',
        // },
        305: {
            id: 305,
            itemID: 10008,
            price: 50000,
            allowBulkPurchase: true,
            description: 'A bucket of worms.',
            image: '/images/fishing/bait/bucket.png',
        },
        306: {
            id: 306,
            itemID: 10009,
            price: 5000000,
            allowBulkPurchase: false,
            description: 'All the skill books.',
            image: '/images/misc/gold_lockbox.png',
        },
        307: {
            id: 307,
            itemID: 7063,
            price: 1000000,
            allowBulkPurchase: false,
            description: 'Cosmetic.',
            image: '/images/premium/cosmetic/equipment/lightning_edge.gif',
        },
        308: {
            id: 308,
            itemID: 7064,
            price: 1000000,
            allowBulkPurchase: false,
            description: 'Cosmetic.',
            image: '/images/premium/cosmetic/equipment/frost_maul.gif',
        },
        309: {
            id: 309,
            itemID: 10010,
            price: 15000000,
            allowBulkPurchase: true,
            description: 'All the jewelry.',
            image: '/images/misc/gold_lockbox.png',
        },
        310: {
            id: 310,
            itemID: 10011,
            price: 15000,
            allowBulkPurchase: true,
            description: 'Will eventually be tied to a tutorial quest.',
            image: '/images/misc/pouch.png',
        },
        311: {
            id: 311,
            itemID: 10012,
            price: 15000,
            allowBulkPurchase: true,
            description: 'Will eventually be tied to a tutorial quest.',
            image: '/images/misc/pouch.png',
        },
    };
}