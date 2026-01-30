import Hero from '@/components/Hero';
import WaterForm from '@/features/calculators/water/components/WaterForm';
import WaterResults from '@/features/calculators/water/components/WaterResults';
import { useWaterCalculator } from '@/features/calculators/water/hooks/useWaterCalculator';
import WaterExamples from '@/features/calculators/water/components/WaterExamples';
import WaterFAQ from '@/features/calculators/water/components/WaterFAQ';

export function WaterPage() {
  const { form, result, error, updateField, handleCalculate, handleReset } = useWaterCalculator();

  const scrollToForm = () => {
    document.getElementById('water')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Hero
        pill="Hidratação inteligente"
        title="Descubra sua meta diária de água."
        subtitle="Baseado nas recomendações da OMS e ajustes por faixa etária."
        onCTAClick={scrollToForm}
        secondaryLabel="Ver FAQ"
        onSecondaryClick={() => document.getElementById('water-faq')?.scrollIntoView({ behavior: 'smooth' })}
        ctaLabel="Calcular água ↓"
      />

      <main className="space-y-10 pb-16">
        <WaterForm
          form={form}
          error={error}
          onChange={updateField}
          onSubmit={handleCalculate}
          onReset={handleReset}
        />
        <WaterResults result={result} />
        <WaterExamples onSelectExample={(weight) => updateField('weight', weight)} />
        <WaterFAQ />
      </main>
    </>
  );
}

export default WaterPage;
