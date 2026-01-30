export type CreatinePhase = 'manutencao' | 'saturacao';

export type CreatineFormState = {
  weight: number | '';
  phase: CreatinePhase;
};

export type CreatineResult = {
  gramsPerDay: number;
  gramsPerKg: number;
  recommendation: string;
  maintenanceRange: string;
  saturation: string;
};
