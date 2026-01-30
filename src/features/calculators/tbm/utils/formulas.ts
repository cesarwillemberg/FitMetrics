import type {
  ActivityLevel,
  CalculatorFormState,
  CalculatorResult,
  DetailedStats,
  MacroBreakdown,
  Objective,
} from '../types';
import { ACTIVITY_LEVELS, DEFAULT_MACROS, LIMITS } from '../constants';

const objectiveLabels: Record<Objective, string> = {
  manter: 'Manter peso',
  perder: 'Perder gordura (-20%)',
  ganhar: 'Ganhar massa',
};

const experienceBoost = {
  iniciante: 400,
  intermediario: 200,
};

export const findActivity = (id: string): ActivityLevel =>
  ACTIVITY_LEVELS.find((a) => a.id === id) ?? ACTIVITY_LEVELS[1]; // default to leve

export function calculateTbm(gender: 'male' | 'female', weight: number, height: number, age: number): number {
  return gender === 'male'
    ? 10 * weight + 6.25 * height - 5 * age + 5
    : 10 * weight + 6.25 * height - 5 * age - 161;
}

export function calculateCalories(
  tdee: number,
  objective: Objective,
  experience: CalculatorFormState['experience'],
): { calories: number; adjustment: string; adjustmentDesc: string; objectiveLabel: string } {
  if (objective === 'manter') {
    return { calories: tdee, adjustment: '+0', adjustmentDesc: 'sem ajuste', objectiveLabel: objectiveLabels[objective] };
  }

  if (objective === 'perder') {
    const deficit = tdee * 0.2;
    return {
      calories: tdee - deficit,
      adjustment: '-20%',
      adjustmentDesc: `${Math.round(deficit)} kcal de déficit`,
      objectiveLabel: objectiveLabels[objective],
    };
  }

  const boost = experienceBoost[experience] ?? experienceBoost.iniciante;
  return {
    calories: tdee + boost,
    adjustment: `+${boost}`,
    adjustmentDesc: `${boost} kcal de superávit`,
    objectiveLabel: `${objectiveLabels[objective]} (${boost} kcal)`,
  };
}

export function calculateMacros(
  weight: number,
  calories: number,
  macros = DEFAULT_MACROS,
): MacroBreakdown {
  const proteinG = Math.round(weight * macros.proteinPerKg);
  const proteinKcal = proteinG * 4;

  const fatG = Math.round(weight * macros.fatPerKg);
  const fatKcal = fatG * 9;

  const carbsKcal = Math.max(0, Math.round(calories - proteinKcal - fatKcal));
  const carbsG = Math.round(carbsKcal / 4);

  const fiberG = Math.round(((calories / 1000) * macros.fiberPerKcal) * 10) / 10;

  const proteinPct = Math.round((proteinKcal / calories) * 100);

  return { calories, proteinG, proteinKcal, fatG, fatKcal, carbsG, carbsKcal, fiberG, proteinPct };
}

export function validateInputs(state: CalculatorFormState): string | null {
  const { weight, height, age } = state;
  if (!weight || !height || !age) return 'Preencha todos os campos obrigatórios.';
  if (weight < LIMITS.weight.min || weight > LIMITS.weight.max) return 'Peso fora do intervalo permitido.';
  if (height < LIMITS.height.min || height > LIMITS.height.max) return 'Altura fora do intervalo permitido.';
  if (age < LIMITS.age.min || age > LIMITS.age.max) return 'Idade fora do intervalo permitido.';
  return null;
}

export function compute(state: CalculatorFormState): CalculatorResult {
  const validation = validateInputs(state);
  if (validation) {
    throw new Error(validation);
  }

  const activity = findActivity(state.activityId);
  const tbm = calculateTbm(state.gender, Number(state.weight), Number(state.height), Number(state.age));
  const tdee = tbm * activity.multiplier;
  const { calories, adjustment, adjustmentDesc, objectiveLabel } = calculateCalories(tdee, state.objective, state.experience);
  const macros = calculateMacros(Number(state.weight), Math.round(calories), state.macros);

  const details: DetailedStats = {
    tbm,
    tdee,
    multiplier: activity.multiplier,
    objectiveLabel,
    adjustment,
    adjustmentDesc,
  };

  return { ...macros, ...details };
}
