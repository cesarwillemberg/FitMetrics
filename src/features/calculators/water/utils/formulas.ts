import { INITIAL_WATER_FORM, WATER_LIMITS } from '../constants';
import type { WaterFormState, WaterResult } from '../types';

export function mlPerKgByAge(age: number): number {
  if (age <= 17) return 40;
  if (age <= 55) return 35;
  if (age <= 65) return 30;
  return 25;
}

function resolveMlPerKg(state: WaterFormState): { mlPerKg: number; basis: string } {
  const { method, age, customMlPerKg } = state;

  if (method === 'oms') {
    return { mlPerKg: 35, basis: 'OMS (35 ml/kg)' };
  }

  if (method === 'custom') {
    const clamped = Math.min(Math.max(customMlPerKg, WATER_LIMITS.customMl.min), WATER_LIMITS.customMl.max);
    return { mlPerKg: clamped, basis: `Personalizado (${clamped} ml/kg)` };
  }

  const byAge = mlPerKgByAge(Number(age));
  return { mlPerKg: byAge, basis: `Automático por idade (${byAge} ml/kg)` };
}

export function validateWater(state: WaterFormState): string | null {
  const { weight, age } = state;
  if (!weight || !age) return 'Informe peso e idade.';
  if (weight < WATER_LIMITS.weight.min || weight > WATER_LIMITS.weight.max) return 'Peso fora do intervalo permitido.';
  if (age < WATER_LIMITS.age.min || age > WATER_LIMITS.age.max) return 'Idade fora do intervalo permitido.';
  return null;
}

export function computeWater(state: WaterFormState): WaterResult {
  const validation = validateWater(state);
  if (validation) throw new Error(validation);

  const { mlPerKg, basis } = resolveMlPerKg(state);
  const weight = Number(state.weight);
  const totalMl = Math.round(weight * mlPerKg);
  const totalLiters = Math.round((totalMl / 1000) * 100) / 100;

  return {
    mlPerKg,
    totalMl,
    totalLiters,
    basis,
    range: { min: 30, max: 40 },
  };
}

export const defaultWaterState = INITIAL_WATER_FORM;
