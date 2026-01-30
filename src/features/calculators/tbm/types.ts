export type Gender = 'male' | 'female';

export type ActivityLevel = {
  id: string;
  label: string;
  description: string;
  multiplier: number;
};

export type Objective = 'manter' | 'perder' | 'ganhar';

export type Experience = 'iniciante' | 'intermediario';

export type MacroConfig = {
  proteinPerKg: number;
  fatPerKg: number;
  fiberPerKcal: number; // grams per 1000 kcal
};

export type CalculatorFormState = {
  gender: Gender;
  weight: number | '';
  height: number | '';
  age: number | '';
  activityId: string;
  objective: Objective;
  experience: Experience;
  macros: MacroConfig;
};

export type MacroBreakdown = {
  calories: number;
  proteinG: number;
  proteinKcal: number;
  fatG: number;
  fatKcal: number;
  carbsG: number;
  carbsKcal: number;
  fiberG: number;
  proteinPct: number;
};

export type DetailedStats = {
  tbm: number;
  tdee: number;
  multiplier: number;
  objectiveLabel: string;
  adjustment: string;
  adjustmentDesc: string;
};

export type CalculatorResult = MacroBreakdown & DetailedStats;
