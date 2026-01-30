import type { ActivityLevel, MacroConfig } from './types';

export const ACTIVITY_LEVELS: ActivityLevel[] = [
  { id: 'sedentario', label: 'Sedentário', description: 'Trabalho sentado, quase nenhum exercício', multiplier: 1.2 },
  { id: 'leve', label: 'Leve', description: 'Treinos 1-3x/semana', multiplier: 1.375 },
  { id: 'moderado', label: 'Moderado', description: 'Treinos 3-5x/semana', multiplier: 1.55 },
  { id: 'intenso', label: 'Intenso', description: 'Treinos 6-7x/semana', multiplier: 1.725 },
  { id: 'atleta', label: 'Atleta', description: 'Trabalho físico ou 2 treinos/dia', multiplier: 1.9 },
];

export const DEFAULT_MACROS: MacroConfig = {
  proteinPerKg: 2.5,
  fatPerKg: 1,
  fiberPerKcal: 12, // grams per 1000 kcal
};

export const LIMITS = {
  weight: { min: 30, max: 300 },
  height: { min: 100, max: 250 },
  age: { min: 10, max: 120 },
};
