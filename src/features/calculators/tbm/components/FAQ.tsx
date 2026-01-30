import Accordion from '@/components/Accordion';

const faqItems = [
  {
    q: 'O que é TBM?',
    a: 'TBM é a quantidade de calorias que seu corpo queima em repouso para manter funções vitais como respiração, circulação e digestão.',
  },
  {
    q: 'Qual é a diferença entre TBM e TDEE?',
    a: 'TBM é o gasto em repouso. TDEE é o gasto total incluindo atividade física. TDEE = TBM × multiplicador de atividade.',
  },
  {
    q: 'Quanto de proteína realmente preciso?',
    a: 'Para quem treina: 1.6-2.2 g/kg. A calculadora sugere 2.5 g/kg como padrão. O mais importante é atingir sua meta calórica total.',
  },
  {
    q: 'Posso confiar 100% nos resultados?',
    a: 'São estimativas baseadas em fórmulas científicas. Seu metabolismo real pode variar ±10-20%. Use como ponto de partida e ajuste conforme evolui.',
  },
  {
    q: 'O que fazer se não vejo resultados?',
    a: 'Acompanhe por 2-4 semanas. Se não há progresso, ajuste as calorias em ±100-200 kcal. Também verifique consistência na alimentação e treino.',
  },
  {
    q: 'Posso fazer dieta muito restritiva?',
    a: 'Não recomendado. Um déficit muito grande causa fadiga, perda de musculo e desânimo. Um déficit de 20% é seguro e sustentável.',
  },
  {
    q: 'Como distribuir macros ao longo do dia?',
    a: 'O total do dia é mais importante. Distribua proteína ao longo das refeições (20-40g cada), carbs ao redor dos treinos, gordura em todas as refeições.',
  },
  {
    q: 'Essa calculadora é adequada para atletas?',
    a: 'É uma excelente ferramenta educativa. Atletas profissionais devem trabalhar com nutricionista esportivo especializado.',
  },
];

export function FAQ() {
  return (
    <section className="section-shell space-y-3" id="faq">
      <h3 className="text-xl font-bold text-gray-900">FAQ</h3>
      {faqItems.map((item) => (
        <Accordion key={item.q} title={item.q}>
          <p className="text-sm leading-6 text-gray-700">{item.a}</p>
        </Accordion>
      ))}
    </section>
  );
}

export default FAQ;
