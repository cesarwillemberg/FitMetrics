import type { InputHTMLAttributes, ReactNode } from 'react';
import { cn } from '@/lib/cn';

type Props = InputHTMLAttributes<HTMLInputElement> & {
  rightSlot?: string | ReactNode;
};

export function Input({ className, rightSlot, ...props }: Props) {
  return (
    <div className="relative">
      <input
        className={cn(
          'w-full rounded-lg border-2 border-gray-200 bg-white px-3 py-2.5 text-sm font-medium text-gray-800 shadow-soft transition focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/15',
          rightSlot ? 'pr-12' : '',
          className,
        )}
        {...props}
      />
      {rightSlot && (
        <span className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-xs font-semibold text-gray-500">
          {rightSlot}
        </span>
      )}
    </div>
  );
}

export default Input;
