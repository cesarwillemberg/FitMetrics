import { CREATINE_LIMITS, INITIAL_CREATINE_FORM } from '../constants';
import type { CreatineFormState, CreatineResult } from '../types';

const MAINTENANCE_RANGE = '3 a 5 g/dia';
const SATURATION_TEXT = '20-25 g/dia por 5-7 dias (fracionar doses)';

export function gramsPerDay(weight: number): number {
  return Math.round(weight * 0.03 * 100) / 100; // 0.03 g/kg
}

export function validateCreatine(state: CreatineFormState): string | null {
  if (!state.weight) return 'Informe seu peso.';
  if (state.weight < CREATINE_LIMITS.weight.min || state.weight > CREATINE_LIMITS.weight.max) {
    return 'Peso fora do intervalo permitido.';
  }
  return null;
}

export function computeCreatine(state: CreatineFormState): CreatineResult {
  const validation = validateCreatine(state);
  if (validation) throw new Error(validation);

  const weight = Number(state.weight);
  const gPerDay = gramsPerDay(weight);

  const recommendation =
    state.phase === 'saturacao'
      ? `${SATURATION_TEXT}. Após, voltar para manutenção (0,03 g/kg).`
      : `Dose sugerida: ${gPerDay} g/dia (0,03 g/kg).`;

  return {
    gramsPerDay: gPerDay,
    gramsPerKg: 0.03,
    recommendation,
    maintenanceRange: MAINTENANCE_RANGE,
    saturation: SATURATION_TEXT,
  };
}

export const defaultCreatineState = INITIAL_CREATINE_FORM;
