import { useState } from 'react';
import { INITIAL_CREATINE_FORM } from '../constants';
import type { CreatineFormState, CreatineResult } from '../types';
import { computeCreatine } from '../utils/formulas';

export function useCreatineCalculator() {
  const [form, setForm] = useState<CreatineFormState>(INITIAL_CREATINE_FORM);
  const [result, setResult] = useState<CreatineResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  const updateField = <K extends keyof CreatineFormState>(key: K, value: CreatineFormState[K]) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const handleCalculate = () => {
    try {
      setError(null);
      const computed = computeCreatine(form);
      setResult(computed);
      return true;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erro ao calcular creatina diária.');
      setResult(null);
      return false;
    }
  };

  const handleReset = () => {
    setForm(INITIAL_CREATINE_FORM);
    setResult(null);
    setError(null);
  };

  return { form, result, error, updateField, handleCalculate, handleReset };
}

export default useCreatineCalculator;
