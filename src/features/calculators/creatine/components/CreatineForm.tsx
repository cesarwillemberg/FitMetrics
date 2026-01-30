import { Button } from '@/components/Button';
import Card from '@/components/Card';
import Field from '@/components/Field';
import Input from '@/components/Input';
import RadioGroup from '@/components/RadioGroup';
import { CREATINE_LIMITS } from '../constants';
import type { CreatineFormState } from '../types';

type Props = {
  form: CreatineFormState;
  error: string | null;
  onChange: <K extends keyof CreatineFormState>(key: K, value: CreatineFormState[K]) => void;
  onSubmit: () => void;
  onReset: () => void;
};

const phaseOptions = [
  { value: 'manutencao', label: 'Manutenção (0,03 g/kg)', description: 'Usar no dia a dia' },
  { value: 'saturacao', label: 'Saturação (20-25 g/dia)', description: '5-7 dias, fracionar doses' },
];

export function CreatineForm({ form, error, onChange, onSubmit, onReset }: Props) {
  const handleNumber = (key: keyof CreatineFormState) => (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value;
    onChange(key as any, raw === '' ? '' : Number(raw));
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <section className="section-shell space-y-6 mt-10" id="creatine">
      <Card title="Seus dados">
        {error && (
          <div className="mb-4 rounded-lg border-l-4 border-danger bg-red-50 px-4 py-3 text-sm font-semibold text-danger">
            {error}
          </div>
        )}
        <form className="space-y-5" onSubmit={submit}>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <Field label="Peso" hint={`${CREATINE_LIMITS.weight.min}-${CREATINE_LIMITS.weight.max} kg`} htmlFor="creWeight">
              <Input
                id="creWeight"
                inputMode="decimal"
                placeholder="Ex: 70"
                value={form.weight}
                onChange={handleNumber('weight')}
                rightSlot="kg"
              />
            </Field>
            <Field label="Fase">
              <RadioGroup
                name="crePhase"
                value={form.phase}
                onChange={(v) => onChange('phase', v as CreatineFormState['phase'])}
                options={phaseOptions}
                direction="row"
              />
            </Field>
          </div>

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

export default CreatineForm;
