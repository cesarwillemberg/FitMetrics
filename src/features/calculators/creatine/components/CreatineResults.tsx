import Button from '@/components/Button';
import Card from '@/components/Card';
import StatCard from '@/components/StatCard';
import type { CreatineResult } from '../types';
import { useMemo } from 'react';

type Props = {
  result: CreatineResult | null;
};

export function CreatineResults({ result }: Props) {
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
          <Button variant="secondary" onClick={copy}>
            <span className="fa fa-copy" aria-hidden />
            Copiar
          </Button>
        </div>
      </Card>
    </section>
  );
}

export default CreatineResults;
