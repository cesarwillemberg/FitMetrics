import Card from '@/components/Card';
import SectionTitle from '@/components/SectionTitle';

export function Methodology() {
  return (
    <section className="section-shell space-y-4" id="method">
      <SectionTitle title="Como calculamos" subtitle="Aqui você encontra as fórmulas usadas para calcular suas necessidades calóricas e distribuição de macronutrientes." />

      <Card className="space-y-3" title="1. Taxa Metabólica Basal (TBM)">
        <pre className="font-mono text-sm bg-gray-50 text-gray-800 p-3 rounded-lg overflow-x-auto">
{`Masculino: TBM = 10×peso + 6.25×altura - 5×idade + 5
Feminino:  TBM = 10×peso + 6.25×altura - 5×idade - 161`}
        </pre>
        <p className="text-sm text-gray-700">
          TBM é a energia que seu corpo gasta em repouso para manter as funções vitais.
        </p>
      </Card>

      <Card className="space-y-2" title="2. Gasto Calórico Total Diário (TDEE)">
        <pre className="font-mono text-sm bg-gray-50 text-gray-800 p-3 rounded-lg overflow-x-auto">
{`TDEE = TBM × Multiplicador de Atividade`}
        </pre>
        <p className="text-sm text-gray-700">
          O multiplicador varia conforme seu nível de atividade (sedentário até atleta).
        </p>
      </Card>

      <Card className="space-y-3" title="3. Ajustes por objetivo">
        <pre className="font-mono text-sm bg-gray-50 text-gray-800 p-3 rounded-lg overflow-x-auto">
{`• Manter:   Calorias = TDEE
• Perder:    Calorias = TDEE - 20%
• Ganhar (iniciante):    Calorias = TDEE + 400
• Ganhar (intermediário): Calorias = TDEE + 200`}
        </pre>
        <p className="text-sm text-gray-700">
          Déficit moderado para perda sustentável; superávit controlado para ganhos limpos.
        </p>
      </Card>

      <Card className="space-y-3" title="4. Distribuição de macros">
        <pre className="font-mono text-sm bg-gray-50 text-gray-800 p-3 rounded-lg overflow-x-auto">
{`• Proteína (g)      = Peso × g/kg
• Gordura (g)        = Peso × g/kg
• Carboidrato (kcal) = Total - Proteína(kcal) - Gordura(kcal)
• Fibra (g)          = (Total ÷ 1000) × 12
Conversões: Proteína = 4 kcal/g | Carboidrato = 4 kcal/g | Gordura = 9 kcal/g`}
        </pre>
        <p className="text-sm text-gray-700">
          Os valores g/kg são configuráveis na seção “Ajustar macros”.
        </p>
      </Card>
    </section>
  );
}

export default Methodology;
