import { useMemo, useState } from 'react';
import { ACTIVITY_LEVELS, DEFAULT_MACROS } from '../constants';
import type { CalculatorFormState, CalculatorResult } from '../types';
import { compute } from '../utils/formulas';

const INITIAL_STATE: CalculatorFormState = {
  gender: 'male',
  weight: '',
  height: '',
  age: '',
  activityId: ACTIVITY_LEVELS[1].id,
  objective: 'manter',
  experience: 'iniciante',
  macros: DEFAULT_MACROS,
};

export const useTbmCalculator = () => {
  const [form, setForm] = useState<CalculatorFormState>(INITIAL_STATE);
  const [result, setResult] = useState<CalculatorResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  const updateField = <K extends keyof CalculatorFormState>(key: K, value: CalculatorFormState[K]) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const updateMacro = (key: keyof CalculatorFormState['macros'], value: number) => {
    setForm((prev) => ({ ...prev, macros: { ...prev.macros, [key]: value } }));
  };

  const handleCalculate = () => {
    try {
      setError(null);
      const computed = compute(form);
      setResult(computed);
      return true;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erro ao calcular. Tente novamente.');
      setResult(null);
      return false;
    }
  };

  const handleReset = () => {
    setForm(INITIAL_STATE);
    setResult(null);
    setError(null);
  };

  const hasResult = useMemo(() => !!result, [result]);

  return {
    form,
    result,
    error,
    hasResult,
    updateField,
    updateMacro,
    handleCalculate,
    handleReset,
  };
};
