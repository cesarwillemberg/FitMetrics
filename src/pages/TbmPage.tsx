import Hero from '@/components/Hero';
import SectionTitle from '@/components/SectionTitle';
import CalculatorForm from '@/features/calculators/tbm/components/CalculatorForm';
import Examples from '@/features/calculators/tbm/components/Examples';
import FAQ from '@/features/calculators/tbm/components/FAQ';
import Methodology from '@/features/calculators/tbm/components/Methodology';
import ResultsPanel from '@/features/calculators/tbm/components/ResultsPanel';
import { ACTIVITY_LEVELS } from '@/features/calculators/tbm/constants';
import { useTbmCalculator } from '@/features/calculators/tbm/hooks/useTbmCalculator';

export function TbmPage() {
  const { form, result, error, hasResult, updateField, updateMacro, handleCalculate, handleReset } = useTbmCalculator();

  const scrollToCalc = () => {
    document.getElementById('calculator')?.scrollIntoView({ behavior: 'smooth' });
  };

  const loadExample = (type: 'male' | 'female') => {
    const preset =
      type === 'male'
        ? { weight: 103, height: 180, age: 22, activityId: 'leve', objective: 'perder' as const }
        : { weight: 57, height: 163, age: 21, activityId: 'sedentario', objective: 'ganhar' as const };

    updateField('gender', type);
    updateField('weight', preset.weight);
    updateField('height', preset.height);
    updateField('age', preset.age);
    updateField('activityId', preset.activityId);
    updateField('objective', preset.objective);
    if (preset.objective === 'ganhar') {
      updateField('experience', 'iniciante');
    }
    scrollToCalc();
  };

  return (
    <>
      <Hero
        title="Calculadora completa para suas calorias diárias e divisão de macros."
        subtitle="TBM, TDEE, proteína, gordura, carboidratos e fibras em segundos."
        onCTAClick={scrollToCalc}
        secondaryLabel="Ver FAQ"
        onSecondaryClick={() => document.getElementById('faq')?.scrollIntoView({ behavior: 'smooth' })}
      />

      <main className="space-y-10 pb-16">
        <section className="section-shell pt-6">
          <SectionTitle
            title="Calculadora de TBM + Macros"
            subtitle="Mobile first, com componentes reutilizáveis e pronta para ganhar novos cálculos no futuro."
          />
          <div className="mb-4 text-xs text-gray-600">
            Multiplicadores disponíveis: {ACTIVITY_LEVELS.map((a) => `${a.label} (${a.multiplier})`).join(' · ')}
          </div>
        </section>

        <CalculatorForm
          form={form}
          error={error}
          onSubmit={handleCalculate}
          onReset={handleReset}
          onChange={updateField}
          onMacroChange={updateMacro}
          onExample={loadExample}
        />

        {hasResult && <ResultsPanel result={result} />}

        <Examples onSelect={loadExample} />

        <Methodology />

        <FAQ />
      </main>
    </>
  );
}

export default TbmPage;
