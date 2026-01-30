export type WaterMethod = 'auto-idade' | 'oms' | 'custom';

export type WaterFormState = {
  weight: number | '';
  age: number | '';
  method: WaterMethod;
  customMlPerKg: number;
};

export type WaterResult = {
  mlPerKg: number;
  totalMl: number;
  totalLiters: number;
  range: { min: number; max: number };
  basis: string;
};
