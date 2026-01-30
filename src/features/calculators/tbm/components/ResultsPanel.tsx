import { useMemo } from 'react';
import { Card } from '@/components/Card';
import StatCard from '@/components/StatCard';
import Button from '@/components/Button';
import type { CalculatorResult } from '../types';

type Props = {
  result: CalculatorResult | null;
};

export function ResultsPanel({ result }: Props) {
  const shareText = useMemo(() => {
    if (!result) return '';
    return [
      'Meus macros do dia:',
      `Calorias: ${result.calories} kcal`,
      `Proteína: ${result.proteinG} g (${result.proteinKcal} kcal)`,
      `Gordura: ${result.fatG} g (${result.fatKcal} kcal)`,
      `Carboidrato: ${result.carbsG} g (${result.carbsKcal} kcal)`,
      `Fibra: ${result.fiberG} g`,
      'Calculado com FitMetrics',
    ].join('\n');
  }, [result]);

  const handleCopy = () => {
    if (!result) return;
    navigator.clipboard?.writeText(shareText);
  };

  const handleWhatsApp = () => {
    if (!result) return;
    const text = encodeURIComponent(shareText);
    window.open(`https://wa.me/?text=${text}`, '_blank');
  };

  if (!result) return null;

  return (
    <section className="section-shell space-y-4" id="results">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
        <StatCard label="Calorias alvo" value={`${result.calories.toLocaleString('pt-BR')} kcal`} accent="secondary" />
        <StatCard
          label="Proteína"
          value={`${result.proteinG} g`}
          sub={`${result.proteinKcal} kcal • ${result.proteinPct}%`}
          accent="protein"
        />
        <StatCard label="Gordura" value={`${result.fatG} g`} sub={`${result.fatKcal} kcal`} accent="fat" />
        <StatCard label="Carboidrato" value={`${result.carbsG} g`} sub={`${result.carbsKcal} kcal`} accent="carb" />
        <StatCard label="Fibra" value={`${result.fiberG} g`} accent="fiber" />
      </div>

      <Card title="Detalhes do cálculo">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          <Detail label="TBM" value={`${Math.round(result.tbm).toLocaleString('pt-BR')} kcal`} />
          <Detail label="Multiplicador" value={result.multiplier.toFixed(3)} />
          <Detail label="TDEE" value={`${Math.round(result.tdee).toLocaleString('pt-BR')} kcal`} />
          <Detail label="Objetivo" value={result.objectiveLabel} />
          <Detail label="Ajuste" value={result.adjustment} />
          <Detail label="Descrição" value={result.adjustmentDesc} />
        </div>
        <div className="mt-4 flex flex-wrap gap-3">
          <Button variant="secondary" onClick={handleCopy}>
            <span className="fa fa-copy" aria-hidden />
            Copiar resultados
          </Button>
          <Button variant="secondary" onClick={handleWhatsApp}>
            <span className="fa-brands fa-whatsapp" aria-hidden />
            Enviar no WhatsApp
          </Button>
        </div>
      </Card>
    </section>
  );
}

const Detail = ({ label, value }: { label: string; value: string | number }) => (
  <div className="rounded-lg border border-gray-100 bg-gray-50 px-3 py-3">
    <p className="stat-label mb-1">{label}</p>
    <p className="text-base font-semibold text-gray-900">{value}</p>
  </div>
);

export default ResultsPanel;
