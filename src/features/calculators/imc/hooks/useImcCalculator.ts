import { useState } from 'react';
import { historyService } from '@/services/history';

type ImcResult = {
    imc: number;
    classification: string;
    color: 'blue' | 'green' | 'yellow' | 'orange' | 'red' | 'purple';
};

const CLASSIFICATIONS = [
    { max: 18.5, label: 'Abaixo do peso', color: 'blue' as const },
    { max: 24.9, label: 'Peso normal', color: 'green' as const },
    { max: 29.9, label: 'Sobrepeso', color: 'yellow' as const },
    { max: 34.9, label: 'Obesidade Grau I', color: 'orange' as const },
    { max: 39.9, label: 'Obesidade Grau II', color: 'red' as const },
    { max: Infinity, label: 'Obesidade Grau III', color: 'purple' as const },
];

export function useImcCalculator() {
    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');
    const [result, setResult] = useState<ImcResult | null>(null);
    const [error, setError] = useState<string | null>(null);

    const calculate = () => {
        setError(null);
        const w = parseFloat(weight);
        const h = parseFloat(height);

        if (!w || !h || w <= 0 || h <= 0) {
            setError('Por favor, preencha peso e altura com valores válidos.');
            return;
        }

        const heightInMeters = h / 100;
        const imc = w / (heightInMeters * heightInMeters);

        const classification = CLASSIFICATIONS.find((c) => imc < c.max) || CLASSIFICATIONS[CLASSIFICATIONS.length - 1];




        const resultData = {
            imc,
            classification: classification.label,
            color: classification.color,
        };

        setResult(resultData);
        historyService.add({ type: 'imc', details: { weight, height }, result: resultData });
    };

    const reset = () => {
        setWeight('');
        setHeight('');
        setResult(null);
        setError(null);
    };

    return {
        weight,
        setWeight,
        height,
        setHeight,
        result,
        error,
        calculate,
        reset,
    };
}
