import Button from '@/components/Button';
import Input from '@/components/Input';
import Select from '@/components/Select';
import Field from '@/components/Field';
import type { IdealWeightFormState } from '../types';

type Props = {
    form: IdealWeightFormState;
    onChange: <K extends keyof IdealWeightFormState>(key: K, value: IdealWeightFormState[K]) => void;
    onSubmit: () => void;
    onReset: () => void;
    hasResult: boolean;
};

export function IdealWeightForm({ form, onChange, onSubmit, onReset, hasResult }: Props) {
    return (
        <div className="space-y-6">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <Field label="Gênero">
                    <Select
                        value={form.gender}
                        onChange={(e) => onChange('gender', e.target.value as any)}
                    >
                        <option value="male">Masculino</option>
                        <option value="female">Feminino</option>
                    </Select>
                </Field>

                <Field label="Altura (cm)">
                    <Input
                        type="number"
                        placeholder="Ex: 175"
                        value={form.height}
                        onChange={(e) => onChange('height', Number(e.target.value))}
                    />
                </Field>
            </div>

            <div className="flex gap-3 pt-2">
                <Button onClick={onSubmit} fullWidth>
                    Calcular Peso Ideal
                </Button>
                {hasResult && (
                    <Button variant="secondary" onClick={onReset}>
                        Nova consulta
                    </Button>
                )}
            </div>
        </div>
    );
}
