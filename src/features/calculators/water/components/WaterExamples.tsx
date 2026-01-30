import Card from '@/components/Card';

const examples = [
  { weight: 60, mlPerKg: 35, totalMl: 2100, totalL: 2.1 },
  { weight: 80, mlPerKg: 35, totalMl: 2800, totalL: 2.8 },
  { weight: 100, mlPerKg: 35, totalMl: 3500, totalL: 3.5 },
];

type Props = {
  onSelectExample?: (weight: number) => void;
};

export function WaterExamples({ onSelectExample }: Props) {
  return (
    <section className="section-shell space-y-4" id="water-examples">
      <h3 className="text-xl font-bold text-gray-900">Exemplos rápidos</h3>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {examples.map((ex, idx) => (
          <Card
            key={ex.weight}
            className={`cursor-pointer transition hover:-translate-y-1 hover:shadow-card border-l-4 ${
              idx === 0 ? 'border-sky-500' : idx === 1 ? 'border-amber-400' : 'border-primary'
            }`}
            onClick={() => onSelectExample?.(ex.weight)}
          >
            <div className="text-lg font-bold text-gray-900 mb-2">{ex.weight} kg</div>
            <div className="text-sm text-gray-700">
              Fórmula: {ex.weight} × {ex.mlPerKg} ml = {ex.totalMl.toLocaleString('pt-BR')} ml
            </div>
            <div className="mt-2 text-sm font-semibold text-primary">{ex.totalL.toFixed(1)} litros</div>
            {onSelectExample && <p className="mt-3 text-sm font-semibold text-primary">Carregar exemplo →</p>}
          </Card>
        ))}
      </div>
    </section>
  );
}

export default WaterExamples;
