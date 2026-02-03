import { useState, useMemo } from 'react';
import type { IdealWeightFormState, IdealWeightResult } from '../types';
import { historyService } from '@/services/history';

const INITIAL_STATE: IdealWeightFormState = {
    gender: 'male',
    height: '',
};

export function useIdealWeight() {
    const [form, setForm] = useState<IdealWeightFormState>(INITIAL_STATE);
    const [result, setResult] = useState<IdealWeightResult | null>(null);
    const [error, setError] = useState<string | null>(null);

    const updateField = <K extends keyof IdealWeightFormState>(key: K, value: IdealWeightFormState[K]) => {
        setForm((prev) => ({ ...prev, [key]: value }));
        setError(null);
    };

    const handleCalculate = () => {
        if (!form.height || Number(form.height) < 100 || Number(form.height) > 250) {
            setError('Por favor, insira uma altura válida (100-250 cm).');
            return;
        }

        const heightInInches = Number(form.height) / 2.54;
        const feetOver5 = heightInInches - 60;

        // Devine Formula
        // Men: 50kg + 2.3kg * inches over 5ft
        // Women: 45.5kg + 2.3kg * inches over 5ft

        let baseWeight = form.gender === 'male' ? 50 : 45.5;

        // Formula applies to height > 5ft (60 inches / 152.4 cm)
        // For heights under 5ft, the formula technically subtracts weight, which is widely accepted as an approximation.
        const weight = baseWeight + (2.3 * feetOver5);

        const computed: IdealWeightResult = {
            idealWeight: weight,
            range: {
                min: weight * 0.9,
                max: weight * 1.1,
            },
            formula: 'Fórmula de Devine',
        };

        setResult(computed);
        historyService.add({ type: 'ideal-weight', details: form, result: computed });
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
        handleCalculate,
        handleReset,
    };
}
