import type { HTMLAttributes, ReactNode } from 'react';
import { cn } from '@/lib/cn';

type Option<T extends string> = { value: T; label: ReactNode; description?: ReactNode };

type RadioGroupProps<T extends string> = {
  name: string;
  value: T;
  onChange: (value: T) => void;
  options: Option<T>[];
  direction?: 'row' | 'col';
  className?: string;
} & Omit<HTMLAttributes<HTMLDivElement>, 'onChange'>;

export function RadioGroup<T extends string>({
  name,
  value,
  onChange,
  options,
  direction = 'col',
  className,
  ...rest
}: RadioGroupProps<T>) {
  return (
    <div
      className={cn(
        'flex gap-3',
        direction === 'col' ? 'flex-col' : 'flex-row flex-wrap',
        direction === 'row' && 'sm:flex-row sm:flex-nowrap',
        className,
      )}
      {...rest}
    >
      {options.map((option) => {
        const checked = option.value === value;
        return (
          <button
            key={option.value}
            type="button"
            onClick={() => onChange(option.value)}
            className={cn(
              'w-full sm:w-auto rounded-2xl border-2 px-4 py-3 sm:px-5 sm:py-3.5 text-left text-sm font-semibold leading-snug transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-primary/50',
              checked
                ? 'border-primary bg-primary/10 text-primary shadow-soft'
                : 'border-gray-200 bg-white text-gray-800 hover:border-primary/30 hover:shadow-soft',
            )}
            aria-pressed={checked}
            role="radio"
            aria-checked={checked}
            name={name}
          >
            <div className="text-sm font-semibold">{option.label}</div>
            {option.description && <div className="text-xs text-gray-500">{option.description}</div>}
          </button>
        );
      })}
    </div>
  );
}

export default RadioGroup;
