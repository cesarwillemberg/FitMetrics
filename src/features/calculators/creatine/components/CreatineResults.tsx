import Button from '@/components/Button';
import Card from '@/components/Card';
import StatCard from '@/components/StatCard';
import type { CreatineResult } from '../types';
import { useMemo, useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import { PrintableReport } from '@/components/PrintableReport';

type Props = {
  result: CreatineResult | null;
};

export function CreatineResults({ result }: Props) {
  const printRef = useRef<HTMLDivElement>(null);
  const handlePrint = useReactToPrint({
    contentRef: printRef,
    documentTitle: 'FitMetrics-Meta-Creatina',
  });

  const shareText = useMemo(() => {
    if (!result) return '';
    return [
      'Minha dose diária de creatina:',
      `0,03 g/kg => ${result.gramsPerDay} g/dia`,
      `Faixa de manutenção: ${result.maintenanceRange}`,
      `Saturação (opcional): ${result.saturation}`,
    ].join('\n');
  }, [result]);

  const copy = () => {
    if (!result) return;
    navigator.clipboard?.writeText(shareText);
  };

  if (!result) return null;

  return (
    <section className="section-shell space-y-4" id="creatine-results">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard label="Dose diária" value={`${result.gramsPerDay} g`} sub="0,03 g/kg (OMS x peso)" accent="secondary" />
        <StatCard label="Manutenção" value={result.maintenanceRange} sub="Para uso contínuo" accent="primary" />
        <StatCard label="Saturação" value={result.saturation} sub="Use apenas se orientado" accent="protein" />
        <StatCard label="Recomendação" value={result.recommendation} accent="carb" />
      </div>
      <Card title="Compartilhar">
        <div className="flex flex-wrap gap-3">
          <Button variant="secondary" onClick={() => handlePrint()}>
            <svg className="mr-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
            Exportar PDF
          </Button>
          <Button variant="secondary" onClick={copy}>
            <span className="fa fa-copy" aria-hidden />
            Copiar
          </Button>
        </div>
      </Card>

      <PrintableReport ref={printRef} type="creatine" data={result} />
    </section>
  );
}

export default CreatineResults;
