import type { PropsWithChildren, ReactNode } from 'react';
import { cn } from '@/lib/cn';

type FieldProps = PropsWithChildren<{
  label: string;
  htmlFor?: string;
  hint?: ReactNode;
  error?: string | null;
  className?: string;
}>;

export function Field({ label, htmlFor, hint, error, className, children }: FieldProps) {
  return (
    <label className={cn('flex flex-col gap-2 text-sm font-semibold text-gray-800 dark:text-gray-200', className)} htmlFor={htmlFor}>
      <div className="flex items-center justify-between gap-2">
        <span>{label}</span>
        {hint && <span className="text-xs font-medium text-gray-500 dark:text-gray-400">{hint}</span>}
      </div>
      {children}
      {error && <p className="text-xs font-semibold text-danger">{error}</p>}
    </label>
  );
}

export default Field;
