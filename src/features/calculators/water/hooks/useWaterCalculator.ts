import { useState } from 'react';
import { INITIAL_WATER_FORM } from '../constants';
import type { WaterFormState, WaterResult } from '../types';
import { computeWater } from '../utils/formulas';

export function useWaterCalculator() {
  const [form, setForm] = useState<WaterFormState>(INITIAL_WATER_FORM);
  const [result, setResult] = useState<WaterResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  const updateField = <K extends keyof WaterFormState>(key: K, value: WaterFormState[K]) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const handleCalculate = () => {
    try {
      setError(null);
      const next = computeWater(form);
      setResult(next);
      return true;
    } catch (err) {
      setResult(null);
      setError(err instanceof Error ? err.message : 'Erro ao calcular água diária.');
      return false;
    }
  };

  const handleReset = () => {
    setForm(INITIAL_WATER_FORM);
    setResult(null);
    setError(null);
  };

  return { form, result, error, updateField, handleCalculate, handleReset };
}

export default useWaterCalculator;
