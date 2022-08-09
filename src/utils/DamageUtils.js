class DamageUtils {

    static mainDamageTypes = ['Melee', 'Magic', 'Range'];
    static physicalDamageTypes = ['Piercing', 'Blunt', 'Slashing'];
    static magicalDamageTypes = ['Chaos', 'Nature', 'Fire', 'Ice', 'Lightning'];
    static allDamageTypes = DamageUtils.mainDamageTypes.concat(DamageUtils.physicalDamageTypes, DamageUtils.magicalDamageTypes);
    static otherTypes = ['Typeless', 'Heal', 'Poison'];

    static generateAffinityDictionary(prefix, description) {
        const affinities = {};
        for (const damageType of this.allDamageTypes) {
            affinities[`${prefix}.${damageType}`] = `${damageType} ${description}`;
        }
        return affinities;
    }
}