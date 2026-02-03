import { useMemo } from 'react';
import { Card } from '@/components/Card';
import StatCard from '@/components/StatCard';
import Button from '@/components/Button';
import type { CalculatorResult } from '../types';
import { useReactToPrint } from 'react-to-print';
import { PrintableReport } from '@/components/PrintableReport';
import { useRef } from 'react';

type Props = {
  result: CalculatorResult | null;
};

export function ResultsPanel({ result }: Props) {
  const printRef = useRef<HTMLDivElement>(null);
  const handlePrint = useReactToPrint({
    contentRef: printRef,
    documentTitle: 'FitMetrics-Relatorio-TBM',
  });

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
          <Button variant="secondary" onClick={() => handlePrint()}>
            <svg className="mr-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
            Exportar PDF
          </Button>
          <Button variant="secondary" onClick={handleCopy}>
            <svg className="mr-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
            </svg>
            Copiar resultados
          </Button>
          <Button variant="secondary" onClick={handleWhatsApp}>
            <svg className="mr-2 h-4 w-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
            Enviar no WhatsApp
          </Button>
        </div>
      </Card>

      <PrintableReport ref={printRef} type="tbm" data={result} />
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
