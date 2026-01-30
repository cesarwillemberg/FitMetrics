import { Button } from '@/components/Button';
import Card from '@/components/Card';
import Field from '@/components/Field';
import Input from '@/components/Input';
import RadioGroup from '@/components/RadioGroup';
import SectionTitle from '@/components/SectionTitle';
import { WATER_LIMITS } from '../constants';
import type { WaterFormState } from '../types';

type Props = {
  form: WaterFormState;
  error: string | null;
  onChange: <K extends keyof WaterFormState>(key: K, value: WaterFormState[K]) => void;
  onSubmit: () => void;
  onReset: () => void;
};

const methodOptions = [
  { value: 'auto-idade', label: 'Automático (idade)', description: 'Usa 40/35/30/25 ml conforme faixa etária' },
  { value: 'oms', label: 'OMS 35 ml/kg', description: 'Recomendação geral' },
  { value: 'custom', label: 'Personalizado', description: 'Defina entre 30 e 40 ml/kg' },
];

export function WaterForm({ form, error, onChange, onSubmit, onReset }: Props) {
  const handleNumber = (key: keyof WaterFormState) => (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value;
    onChange(key as any, raw === '' ? '' : Number(raw));
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <section className="section-shell space-y-6 mt-10" id="water">
      <SectionTitle
        title="Calculadora de água diária"
        subtitle="Baseada nas recomendações da OMS e ajustes por faixa etária."
      />
      <Card title="Seus dados">
        {error && (
          <div className="mb-4 rounded-lg border-l-4 border-danger bg-red-50 px-4 py-3 text-sm font-semibold text-danger">
            {error}
          </div>
        )}
        <form className="space-y-6" onSubmit={submit}>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <Field label="Peso" hint={`${WATER_LIMITS.weight.min}-${WATER_LIMITS.weight.max} kg`} htmlFor="waterWeight">
              <Input
                id="waterWeight"
                inputMode="decimal"
                placeholder="Ex: 70"
                value={form.weight}
                onChange={handleNumber('weight')}
                rightSlot="kg"
              />
            </Field>
            <Field label="Idade" hint={`${WATER_LIMITS.age.min}-${WATER_LIMITS.age.max} anos`} htmlFor="waterAge">
              <Input
                id="waterAge"
                inputMode="numeric"
                placeholder="Ex: 30"
                value={form.age}
                onChange={handleNumber('age')}
                rightSlot="anos"
              />
            </Field>
          </div>

          <Field label="Estratégia">
            <RadioGroup
              name="waterMethod"
              value={form.method}
              onChange={(v) => onChange('method', v as WaterFormState['method'])}
              options={methodOptions}
              direction="row"
            />
          </Field>

          {form.method === 'custom' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Field label="ml por kg (30-40)">
                <Input
                  type="number"
                  min={WATER_LIMITS.customMl.min}
                  max={WATER_LIMITS.customMl.max}
                  step={0.5}
                  value={form.customMlPerKg}
                  onChange={(e) => onChange('customMlPerKg', Number(e.target.value))}
                />
              </Field>
              <div className="rounded-lg bg-primary/5 border border-primary/20 p-3 text-sm text-primary">
                Dica: em climas quentes ou treinos intensos, prefira o topo do intervalo.
              </div>
            </div>
          )}

          <div className="flex flex-wrap gap-3">
            <Button type="submit">Calcular</Button>
            <Button type="button" variant="secondary" onClick={onReset}>
              Limpar
            </Button>
          </div>
        </form>
      </Card>
    </section>
  );
}

export default WaterForm;
