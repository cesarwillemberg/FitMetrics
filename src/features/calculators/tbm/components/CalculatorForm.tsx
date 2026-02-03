import { useEffect, useState } from 'react';
import { Button } from '@/components/Button';
import { Card } from '@/components/Card';
import { Field } from '@/components/Field';
import { Input } from '@/components/Input';
import { RadioGroup } from '@/components/RadioGroup';
import { Select } from '@/components/Select';
import Accordion from '@/components/Accordion';
import { ACTIVITY_LEVELS, DEFAULT_MACROS, LIMITS } from '../constants';
import type { CalculatorFormState } from '../types';

type NumberInputProps = Omit<React.ComponentProps<typeof Input>, 'value' | 'onChange'> & {
  value: number | '';
  onChange: (value: number | '') => void;
};

function NumberInput({ value, onChange, ...props }: NumberInputProps) {
  const [localValue, setLocalValue] = useState(value === '' ? '' : String(value));

  useEffect(() => {
    // Sync from parent only if there's a meaningful difference
    // logic: if parent value matches what we have parsed locally, don't touch local string
    // This preserves "0." or "0,0" being displayed while parent sees 0
    const parsedLocal = localValue.replace(',', '.');
    const numericLocal = parsedLocal === '' || parsedLocal === '.' ? '' : Number(parsedLocal);

    if (value !== numericLocal) {
      setLocalValue(value === '' ? '' : String(value));
    }
  }, [value]); // Removing localValue from deps to avoid loop and only sync on parent change

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value;

    // Allow digits, one comma OR one dot. Regex: ^[0-9]*[.,]?[0-9]*$
    if (!/^[0-9]*[.,]?[0-9]*$/.test(raw)) {
      return; // Reject invalid chars
    }

    setLocalValue(raw);

    const normalized = raw.replace(',', '.');
    if (normalized === '' || normalized === '.') {
      onChange('');
    } else {
      const parsed = Number(normalized);
      if (!isNaN(parsed)) {
        onChange(parsed);
      }
    }
  };

  return <Input {...props} value={localValue} onChange={handleChange} />;
}

type Props = {
  form: CalculatorFormState;
  error: string | null;
  onSubmit: () => void;
  onReset: () => void;
  onChange: <K extends keyof CalculatorFormState>(key: K, value: CalculatorFormState[K]) => void;
  onMacroChange: (key: keyof CalculatorFormState['macros'], value: number) => void;
  onExample: (type: 'male' | 'female') => void;
};

const genderOptions = [
  { value: 'male', label: 'Masculino' },
  { value: 'female', label: 'Feminino' },
];

const objectiveOptions = [
  { value: 'manter', label: 'Manter' },
  { value: 'perder', label: 'Perder gordura' },
  { value: 'ganhar', label: 'Ganhar massa' },
];

export function CalculatorForm({ form, error, onSubmit, onReset, onChange, onMacroChange, onExample }: Props) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <section className="section-shell space-y-6" id="calculator">
      <Card title="Seus dados">
        {error && (
          <div className="mb-4 rounded-lg border-l-4 border-danger bg-red-50 px-4 py-3 text-sm font-semibold text-danger">
            {error}
          </div>
        )}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            <Field label="Sexo">
              <RadioGroup
                name="gender"
                value={form.gender}
                onChange={(v) => onChange('gender', v as CalculatorFormState['gender'])}
                options={genderOptions}
                direction="row"
              />
            </Field>

            <Field label="Peso" hint={`${LIMITS.weight.min}-${LIMITS.weight.max} kg`} htmlFor="weight">
              <NumberInput
                id="weight"
                inputMode="decimal"
                placeholder="Ex: 75"
                value={form.weight}
                onChange={(v) => onChange('weight', v)}
                rightSlot="kg"
              />
            </Field>

            <Field label="Altura" hint={`${LIMITS.height.min}-${LIMITS.height.max} cm`} htmlFor="height">
              <NumberInput
                id="height"
                inputMode="decimal"
                placeholder="Ex: 175"
                value={form.height}
                onChange={(v) => onChange('height', v)}
                rightSlot="cm"
              />
            </Field>

            <Field label="Idade" hint={`${LIMITS.age.min}-${LIMITS.age.max} anos`} htmlFor="age">
              <NumberInput
                id="age"
                inputMode="numeric"
                placeholder="Ex: 28"
                value={form.age}
                onChange={(v) => onChange('age', v)}
                rightSlot="anos"
              />
            </Field>

            <Field label="Atividade" htmlFor="activity" className="md:col-span-2">
              <Select
                id="activity"
                value={form.activityId}
                onChange={(e) => onChange('activityId', e.target.value)}
              >
                {ACTIVITY_LEVELS.map((activity) => (
                  <option key={activity.id} value={activity.id}>
                    {activity.label} ({activity.multiplier}) • {activity.description}
                  </option>
                ))}
              </Select>
            </Field>

            <Field label="Objetivo">
              <RadioGroup
                name="objective"
                value={form.objective}
                onChange={(v) => onChange('objective', v as CalculatorFormState['objective'])}
                options={objectiveOptions}
                direction="row"
              />
            </Field>

            {form.objective === 'ganhar' && (
              <Field label="Nível de experiência">
                <RadioGroup
                  name="experience"
                  value={form.experience}
                  onChange={(v) => onChange('experience', v as CalculatorFormState['experience'])}
                  options={[
                    { value: 'iniciante', label: 'Iniciante (+400 kcal)', description: 'Até ~1 ano de treino' },
                    { value: 'intermediario', label: 'Intermediário (+200 kcal)', description: 'Mais de 1 ano' },
                  ]}
                />
              </Field>
            )}
          </div>

          <Accordion title="Ajustar macros" badge="Opcional" defaultOpen={false}>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              <Field label="Proteína (g/kg)">
                <NumberInput
                  inputMode="decimal"
                  value={form.macros.proteinPerKg}
                  onChange={(v) => onMacroChange('proteinPerKg', v === '' ? 0 : v)}
                />
              </Field>
              <Field label="Gordura (g/kg)">
                <NumberInput
                  inputMode="decimal"
                  value={form.macros.fatPerKg}
                  onChange={(v) => onMacroChange('fatPerKg', v === '' ? 0 : v)}
                />
              </Field>
              <Field label="Fibra (g/1000 kcal)">
                <NumberInput
                  inputMode="decimal"
                  value={form.macros.fiberPerKcal}
                  onChange={(v) => onMacroChange('fiberPerKcal', v === '' ? 0 : v)}
                />
              </Field>
            </div>
            <p className="mt-3 text-xs text-gray-500">
              Padrão: {DEFAULT_MACROS.proteinPerKg}g proteína/kg • {DEFAULT_MACROS.fatPerKg}g gordura/kg •{' '}
              {DEFAULT_MACROS.fiberPerKcal}g fibra/1000 kcal
            </p>
          </Accordion>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex gap-2">
              <Button type="submit">Calcular</Button>
              <Button type="button" variant="secondary" onClick={onReset}>
                Limpar
              </Button>
            </div>
            <div className="flex gap-2 text-sm text-gray-600">
              <Button type="button" variant="ghost" onClick={() => onExample('male')}>
                Exemplo homem
              </Button>
              <Button type="button" variant="ghost" onClick={() => onExample('female')}>
                Exemplo mulher
              </Button>
            </div>
          </div>
        </form>
      </Card>
    </section>
  );
}

export default CalculatorForm;
