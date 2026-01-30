import type { CreatineFormState } from './types';

export const CREATINE_LIMITS = {
  weight: { min: 30, max: 200 },
};

export const INITIAL_CREATINE_FORM: CreatineFormState = {
  weight: '',
  phase: 'manutencao',
};
