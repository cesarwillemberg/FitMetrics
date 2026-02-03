import Button from '@/components/Button';
import { Card } from '@/components/Card';
import Field from '@/components/Field';
import Input from '@/components/Input';
import type { useImcCalculator } from '../hooks/useImcCalculator';

type Props = {
    hook: ReturnType<typeof useImcCalculator>;
};

export function ImcCalculatorForm({ hook }: Props) {
    const { weight, setWeight, height, setHeight, calculate, reset, error } = hook;

    return (
        <Card title="Calculadora de IMC">
            <div className="space-y-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <Field label="Peso (kg)" htmlFor="weight">
                        <Input
                            id="weight"
                            type="number"
                            placeholder="Ex: 70"
                            value={weight}
                            onChange={(e) => setWeight(e.target.value)}
                        />
                    </Field>
                    <Field label="Altura (cm)" htmlFor="height">
                        <Input
                            id="height"
                            type="number"
                            placeholder="Ex: 175"
                            value={height}
                            onChange={(e) => setHeight(e.target.value)}
                        />
                    </Field>
                </div>

                {error && <div className="rounded-lg bg-red-50 p-3 text-sm text-red-600 dark:bg-red-900/20 dark:text-red-400">{error}</div>}

                <div className="flex gap-3 pt-2">
                    <Button onClick={calculate} className="flex-1">
                        Calcular IMC
                    </Button>
                    <Button variant="secondary" onClick={reset}>
                        Limpar
                    </Button>
                </div>
            </div>
        </Card>
    );
}
