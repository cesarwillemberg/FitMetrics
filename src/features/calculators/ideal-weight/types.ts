export type Gender = 'male' | 'female';

export type IdealWeightFormState = {
    gender: Gender;
    height: number | '';
};

export type IdealWeightResult = {
    idealWeight: number;
    range: {
        min: number;
        max: number;
    };
    formula: string;
};
