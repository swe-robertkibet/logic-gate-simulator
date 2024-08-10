export const AND = (a, b) => a && b;
export const OR = (a, b) => a || b;
export const NOT = (a) => !a;
export const NAND = (a, b) => !(a && b);
export const NOR = (a, b) => !(a || b);

export const getOperation = (gateType) => {
    switch (gateType) {
        case 'AND': return AND;
        case 'OR': return OR;
        case 'NOT': return NOT;
        case 'NAND': return NAND;
        case 'NOR': return NOR;
        default: throw new Error('Invalid gate type');
    }
};