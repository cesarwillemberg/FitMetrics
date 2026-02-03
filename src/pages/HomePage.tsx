import Card from '@/components/Card';
import Hero from '@/components/Hero';
import { Link } from 'react-router-dom';
import Button from '@/components/Button';

export function HomePage() {
  return (
    <>
      <Hero
        pill="Escolha sua calculadora"
        title="Planeje suas metas de nutrição e hidratação."
        subtitle="Selecione qual ferramenta quer usar agora."
        onCTAClick={undefined}
        secondaryLabel={undefined}
        onSecondaryClick={undefined}
      />

      <main className="section-shell py-12 space-y-6">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <Card className="shadow-card" title="Calculadora de TBM + Macros">
            <p className="text-sm text-gray-700 mb-4">
              TBM, TDEE, proteína, gordura, carboidratos e fibras. Ajustes por objetivo e macros customizados.
            </p>
            <Link to="/tbm">
              <Button variant="highlight" fullWidth>
                Ir para TBM →
              </Button>
            </Link>
          </Card>

          <Card className="shadow-card" title="Calculadora de IMC">
            <p className="mb-4 text-sm text-gray-700">
              Índice de Massa Corporal. Avaliação rápida de peso para altura com classificação da OMS.
            </p>
            <Link to="/imc">
              <Button fullWidth className="!bg-[#3B0F76] text-white hover:!bg-[#2a0b55]">
                Ir para IMC →
              </Button>
            </Link>
          </Card>

          <Card className="shadow-card" title="Calculadora de Peso Ideal">
            <p className="mb-4 text-sm text-gray-700">
              Estimativa baseada na fórmula de Devine (padrão médico) considerando altura e gênero.
            </p>
            <Link to="/peso-ideal">
              <Button fullWidth className="!bg-[#760F17] text-white hover:!bg-[#5a0b12]">
                Ir para Peso Ideal →
              </Button>
            </Link>
          </Card>

          <Card className="shadow-card" title="Calculadora de Água Diária">
            <p className="text-sm text-gray-700 mb-4">
              Meta de hidratação com base na OMS, faixa etária e opção personalizada (30–40 ml/kg).
            </p>
            <Link to="/agua">
              <Button variant="primary" fullWidth>
                Ir para Água →
              </Button>
            </Link>
          </Card>

          <Card className="shadow-card" title="Calculadora de Creatina">
            <p className="text-sm text-gray-700 mb-4">
              Dose diária por peso (0,03 g/kg), faixa de 3–5 g e opção de saturação guiada.
            </p>
            <Link to="/creatina">
              <Button variant="secondary" fullWidth>
                Ir para Creatina →
              </Button>
            </Link>
          </Card>
        </div>
      </main>
    </>
  );
}

export default HomePage;
