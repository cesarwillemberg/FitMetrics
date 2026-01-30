import Card from '@/components/Card';

const examples = {
  male: {
    title: 'Homem | Perder gordura',
    weight: 103,
    height: 180,
    age: 22,
    activity: 'leve',
    objective: 'perder',
  },
  female: {
    title: 'Mulher | Ganhar massa',
    weight: 57,
    height: 163,
    age: 21,
    activity: 'sedentario',
    objective: 'ganhar',
  },
};

type Props = {
  onSelect: (type: keyof typeof examples) => void;
};

export function Examples({ onSelect }: Props) {
  return (
    <section className="section-shell space-y-4" id="examples">
      <h3 className="text-xl font-bold text-gray-900">Exemplos rápidos</h3>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {(Object.keys(examples) as Array<keyof typeof examples>).map((key) => {
          const example = examples[key];
          const accent = key === 'male' ? 'border-l-4 border-sky-500' : 'border-l-4 border-pink-400';
          return (
            <Card
              key={key}
              className={`cursor-pointer transition hover:-translate-y-1 hover:shadow-card ${accent}`}
              onClick={() => onSelect(key)}
              title={example.title}
            >
              <div className="grid grid-cols-2 gap-3 text-sm text-gray-600 sm:grid-cols-4">
                <Detail label="Peso" value={`${example.weight} kg`} />
                <Detail label="Altura" value={`${example.height} cm`} />
                <Detail label="Idade" value={`${example.age} anos`} />
                <Detail label="Atividade" value={example.activity} />
              </div>
              <p className="mt-3 text-sm font-semibold text-primary">Carregar exemplo →</p>
            </Card>
          );
        })}
      </div>
    </section>
  );
}

const Detail = ({ label, value }: { label: string; value: string }) => (
  <div className="rounded-lg bg-gray-50 px-3 py-2">
    <p className="text-xs text-gray-500">{label}</p>
    <p className="font-semibold text-gray-800">{value}</p>
  </div>
);

export default Examples;
