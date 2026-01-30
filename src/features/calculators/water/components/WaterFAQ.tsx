import Accordion from '@/components/Accordion';

const factors = [
  'Temperaturas altas e baixa umidade',
  'Altitudes elevadas',
  'Infecções, febre, vômitos ou diarreia',
  'Exercícios físicos',
  'Gravidez ou amamentação',
];

export function WaterFAQ() {
  return (
    <section className="section-shell space-y-3" id="water-faq">
      <h3 className="text-xl font-bold text-gray-900">FAQ - Água diária</h3>

      <Accordion title="Qual é a fórmula básica?">
        <p className="text-sm text-gray-700">
          Fórmula padrão da OMS: <strong>Peso (kg) × 35 ml = total diário em ml</strong>. Ex.: 70 kg × 35 = 2.450 ml
          (2,45 L). Faixa usual: 30–40 ml/kg conforme idade e clima.
        </p>
      </Accordion>

      <Accordion title="Quando devo beber mais água?">
        <p className="text-sm text-gray-700">Em dias quentes, baixa umidade ou durante/apos exercícios físicos.</p>
      </Accordion>

      <Accordion title="Quais fatores aumentam minha necessidade?">
        <ul className="text-sm text-gray-700 list-disc pl-5 space-y-1">
          {factors.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </Accordion>

      <Accordion title="Beber muita água faz mal?">
        <p className="text-sm text-gray-700">
          Sim. Excesso pode causar intoxicação por água (dilui eletrólitos, afeta funções muscular, cardíaca e cerebral).
          Observe sinais como náusea, dor de cabeça intensa, confusão ou inchaço.
        </p>
      </Accordion>

      <Accordion title="Qual a importância de beber água?">
        <p className="text-sm text-gray-700 space-y-2">
          <span>
            Hidratação adequada ajuda a prevenir prisão de ventre, regular temperatura, apoiar metabolismo, evitar
            infecções urinárias, ajudar a eliminar pedras nos rins e reduzir retenção de líquidos.
          </span>
          <span>
            Também contribui para pressão arterial equilibrada, melhor desempenho em exercícios e prevenção da
            desidratação.
          </span>
        </p>
      </Accordion>

      <Accordion title="Outras bebidas contam para a hidratação?">
        <p className="text-sm text-gray-700 space-y-2">
          <span>
            Sim. Chás, café, sucos, bebidas esportivas e energéticos contêm água e contribuem para o balanço hídrico.
          </span>
          <span>
            Frutas ricas em água (melancia, melão, abacaxi) também ajudam na hidratação, mas priorize água como base.
          </span>
        </p>
      </Accordion>

      <Accordion title="Preciso de orientação profissional?">
        <p className="text-sm text-gray-700">
          Ideal consultar um nutricionista para ajustar a meta considerando saúde geral, clima, nível de atividade e
          condições especiais (gravidez, amamentação, febre, vômitos ou diarreia).
        </p>
      </Accordion>
    </section>
  );
}

export default WaterFAQ;
