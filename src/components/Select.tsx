import type { SelectHTMLAttributes } from 'react';
import { cn } from '@/lib/cn';

export function Select({ className, children, ...props }: SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <select
      className={cn(
        'w-full rounded-lg border-2 border-gray-200 bg-white px-3 py-2.5 text-sm font-medium text-gray-800 shadow-soft transition focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/15 dark:border-gray-700 dark:bg-gray-900 dark:text-white dark:focus:border-primary',
        className,
      )}
      {...props}
    >
      {children}
    </select>
  );
}

export default Select;
