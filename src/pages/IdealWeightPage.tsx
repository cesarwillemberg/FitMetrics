import { Card } from '@/components/Card';
import { IdealWeightForm } from '@/features/calculators/ideal-weight/components/IdealWeightForm';
import { IdealWeightResults } from '@/features/calculators/ideal-weight/components/IdealWeightResults';
import { useIdealWeight } from '@/features/calculators/ideal-weight/hooks/useIdealWeight';
import { HistoryList } from '@/components/HistoryList';
import Hero from '@/components/Hero';
import SectionTitle from '@/components/SectionTitle';

export function IdealWeightPage() {
    const { form, result, error, hasResult, updateField, handleCalculate, handleReset } = useIdealWeight();

    const scrollToCalc = () => {
        document.getElementById('calculator')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <>
            <Hero
                title="Descubra seu Peso Ideal"
                subtitle="Estimativa baseada na fórmula de Devine, um padrão médico amplamente utilizado."
                onCTAClick={scrollToCalc}
                secondaryLabel="Como funciona?"
                onSecondaryClick={() => { }}
            />

            <main className="space-y-10 pb-16">
                <section className="section-shell pt-6" id="calculator">
                    <SectionTitle
                        title="Calculadora de Peso Ideal"
                        subtitle="Informe seu gênero e altura para obter a estimativa."
                    />

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
                </section>
            </main>
        </>
    );
}

export default IdealWeightPage;
