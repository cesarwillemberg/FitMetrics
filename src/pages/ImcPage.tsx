import Hero from '@/components/Hero';
import SectionTitle from '@/components/SectionTitle';
import { HistoryList } from '@/components/HistoryList';
import { ImcCalculatorForm } from '@/features/calculators/imc/components/ImcCalculatorForm';
import { ImcResults } from '@/features/calculators/imc/components/ImcResults';
import { ImcReferenceTable } from '@/features/calculators/imc/components/ImcReferenceTable';
import { useImcCalculator } from '@/features/calculators/imc/hooks/useImcCalculator';

export function ImcPage() {
    const hook = useImcCalculator();

    const scrollToCalc = () => {
        document.getElementById('calculator')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <>
            <Hero
                title="Descubra seu Índice de Massa Corporal (IMC)"
                subtitle="Ferramenta simples e rápida para avaliar se seu peso está adequado para sua altura."
                onCTAClick={scrollToCalc}
                secondaryLabel="O que é IMC?"
                onSecondaryClick={() => { }}
            />

            <main className="space-y-10 pb-16">
                <section className="section-shell pt-6" id="calculator">
                    <SectionTitle
                        title="Calculadora Oficial"
                        subtitle="Utilize a fórmula padrão da OMS para verificar sua classificação."
                    />

                    <div className="grid gap-8 md:grid-cols-2">
                        <div className="h-fit">
                            <ImcCalculatorForm hook={hook} />
                        </div>
                        <div>
                            {hook.result ? (
                                <ImcResults result={hook.result} />
                            ) : (
                                <div className="flex h-full min-h-[300px] items-center justify-center rounded-xl border-2 border-dashed border-gray-200 p-8 text-center text-gray-400 dark:border-gray-800 dark:text-gray-600">
                                    <p>Preencha os dados ao lado para ver seu resultado aqui.</p>
                                </div>
                            )}
                        </div>
                    </div>




                    <ImcReferenceTable />

                    <HistoryList type="imc" refreshTrigger={hook.result ? Date.now() : 0} />
                </section>
            </main >
        </>
    );
}

export default ImcPage;
