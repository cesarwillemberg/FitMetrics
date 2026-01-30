import type { WaterFormState } from './types';

export const WATER_LIMITS = {
  weight: { min: 25, max: 300 },
  age: { min: 5, max: 120 },
  customMl: { min: 30, max: 40 },
};

export const INITIAL_WATER_FORM: WaterFormState = {
  weight: '',
  age: '',
  method: 'auto-idade',
  customMlPerKg: 35,
};
