import Accordion from '@/components/Accordion';

const mitoVerdade = [
  { q: 'Existe hora certa para tomar?', a: 'Mito. Funcionalidade varia pré/pós-treino; evite jejum.' },
  { q: 'Somente creatina já gera resultado?', a: 'Mito. É preciso treino, alimentação e hidratação.' },
  { q: 'Todo mundo pode tomar?', a: 'Mito. Não indicado para <19 anos, gestantes, lactantes ou quem tem problemas renais.' },
  { q: 'Creatina engorda?', a: 'Mito. Aumenta água intramuscular, não gordura.' },
  { q: 'Reduz sarcopenia?', a: 'Verdade. Pode ajudar a desacelerar a perda de massa com idade + treino.' },
  { q: 'Creatina é anabolizante?', a: 'Mito. É substância produzida pelo corpo; suplementação repõe estoques energéticos.' },
];

export function CreatineFAQ() {
  return (
    <section className="section-shell space-y-3" id="creatine-faq">
      <h3 className="text-xl font-bold text-gray-900">FAQ - Creatina diária</h3>

      <Accordion title="Qual a fórmula básica?">
        <p className="text-sm text-gray-700">
          Peso × 0,03 g = dose diária estimada (ex.: 70 kg → 2,1 g/dia). Estudos sugerem 3-5 g/dia como faixa geral
          contínua.
        </p>
      </Accordion>

      <Accordion title="Para que serve a creatina?">
        <p className="text-sm text-gray-700">
          Eleva energia (ATP), melhora rendimento, força e hipertrofia; pode reduzir câimbras, acelerar recuperação e
          apoiar cognição.
        </p>
      </Accordion>

      <Accordion title="Saturação: quando considerar?">
        <p className="text-sm text-gray-700">
          Protocolos de 20-25 g/dia por 5-7 dias (fracionar) aumentam estoques mais rápido. Faça apenas com orientação
          profissional e retorne a 3-5 g/dia depois.
        </p>
      </Accordion>

      <Accordion title="Benefícios principais">
        <ul className="text-sm text-gray-700 list-disc pl-5 space-y-1">
          <li>Mais energia rápida e melhor desempenho em treinos.</li>
          <li>Acelera recuperação e reduz fadiga muscular.</li>
          <li>Favorece ganho de massa, força e densidade óssea.</li>
          <li>Suporte cognitivo e possível redução de risco cardiovascular.</li>
        </ul>
      </Accordion>

      <Accordion title="Como tomar?">
        <p className="text-sm text-gray-700">
          Pó ou cápsulas; dissolver em ~200 ml de água/suco. Pode associar a carboidrato (pós) ou whey (pré). Consumo
          diário consistente é chave.
        </p>
      </Accordion>

      <Accordion title="Mitos e verdades">
        <ul className="text-sm text-gray-700 list-disc pl-5 space-y-1">
          {mitoVerdade.map((item) => (
            <li key={item.q}>
              <strong>{item.q} </strong> {item.a}
            </li>
          ))}
        </ul>
      </Accordion>

      <Accordion title="Contraindicações e cautelas">
        <p className="text-sm text-gray-700">
          Consulte nutricionista/médico. Cautela em insuficiência renal/hepática. Hidratação adequada é essencial.
        </p>
      </Accordion>
    </section>
  );
}

export default CreatineFAQ;
