import Hero from '@/components/Hero';
import CreatineForm from '@/features/calculators/creatine/components/CreatineForm';
import CreatineResults from '@/features/calculators/creatine/components/CreatineResults';
import CreatineFAQ from '@/features/calculators/creatine/components/CreatineFAQ';
import { useCreatineCalculator } from '@/features/calculators/creatine/hooks/useCreatineCalculator';

export function CreatinePage() {
  const { form, result, error, updateField, handleCalculate, handleReset } = useCreatineCalculator();

  const scrollToForm = () => document.getElementById('creatine')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <>
      <Hero
        pill="Creatina diária"
        title="Calcule sua dose diária de creatina."
        subtitle="Baseada em 0,03 g/kg, com faixa recomendada de 3-5 g/dia e opção de saturação."
        ctaLabel="Calcular creatina ↓"
        onCTAClick={scrollToForm}
        secondaryLabel="Ver FAQ"
        onSecondaryClick={() => document.getElementById('creatine-faq')?.scrollIntoView({ behavior: 'smooth' })}
      />

      <main className="space-y-10 pb-16">
        <CreatineForm
          form={form}
          error={error}
          onChange={updateField}
          onSubmit={handleCalculate}
          onReset={handleReset}
        />
        <CreatineResults result={result} />
        <CreatineFAQ />
      </main>
    </>
  );
}

export default CreatinePage;
