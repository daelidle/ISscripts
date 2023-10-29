class DamageUtils {

    static mainDamageTypes = ['Melee', 'Magic', 'Range'];
    static physicalDamageTypes = ['Piercing', 'Blunt', 'Slashing'];
    static magicalDamageTypes = ['Chaos', 'Nature', 'Fire', 'Ice', 'Lightning'];
    static allStandardDamageTypes = DamageUtils.mainDamageTypes.concat(DamageUtils.physicalDamageTypes, DamageUtils.magicalDamageTypes);
    static otherTypes = ['Typeless', 'Heal', 'Poison', 'Deflect', 'Miss', 'Thorns'];
    static allCombatSplotchDamageTypes = DamageUtils.mainDamageTypes.concat(DamageUtils.otherTypes);

    static generateAffinityDictionary(prefix, description) {
        const affinities = {};
        for (const damageType of this.allStandardDamageTypes) {
            affinities[`${prefix}.${damageType}`] = `${damageType} ${description}`;
        }
        return affinities;
    }
}