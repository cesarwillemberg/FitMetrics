import { Card } from '@/components/Card';
import { IdealWeightForm } from '@/features/calculators/ideal-weight/components/IdealWeightForm';
import { IdealWeightResults } from '@/features/calculators/ideal-weight/components/IdealWeightResults';
import { useIdealWeight } from '@/features/calculators/ideal-weight/hooks/useIdealWeight';
import { HistoryList } from '@/components/HistoryList';

export function IdealWeightPage() {
    const { form, result, error, hasResult, updateField, handleCalculate, handleReset } = useIdealWeight();

    return (
        <div className="max-w-4xl mx-auto space-y-6">
            <header className="mb-8">
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Calculadora de Peso Ideal</h1>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                    Estime seu peso ideal baseado na sua altura e gênero usando a fórmula de Devine.
                </p>
            </header>

            {error && (
                <div className="rounded-lg bg-red-50 p-4 text-sm text-red-600 dark:bg-red-900/20 dark:text-red-400">
                    {error}
                </div>
            )}

            <Card>
                <IdealWeightForm
                    form={form}
                    onChange={updateField}
                    onSubmit={handleCalculate}
                    onReset={handleReset}
                    hasResult={hasResult}
                />
            </Card>

            <IdealWeightResults result={result} />

            <section className="mt-12 border-t pt-8 dark:border-gray-800">
                <h2 className="mb-6 text-xl font-bold text-gray-900 dark:text-white">Últimos cálculos</h2>
                <HistoryList type="ideal-weight" refreshTrigger={result} />
            </section>
        </div>
    );
}

export default IdealWeightPage;
