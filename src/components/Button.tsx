import type { ButtonHTMLAttributes, PropsWithChildren } from 'react';
import { cn } from '@/lib/cn';

type ButtonProps = PropsWithChildren<
  ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: 'primary' | 'secondary' | 'ghost' | 'highlight';
    fullWidth?: boolean;
  }
>;

export function Button({ variant = 'primary', fullWidth, className, children, ...props }: ButtonProps) {
  const base =
    'inline-flex items-center justify-center gap-2 rounded-lg px-4 py-3 text-sm font-semibold transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2';

  const variants: Record<typeof variant, string> = {
    primary:
      'bg-primary text-white shadow-soft hover:bg-teal-800 focus-visible:outline-primary',
    secondary:
      'bg-gray-100 text-gray-900 hover:bg-primary/10 hover:border-primary/40 border border-gray-200 focus-visible:outline-primary',
    ghost:
      'bg-transparent text-gray-700 hover:text-primary hover:bg-primary/5 focus-visible:outline-primary',
    highlight:
      'bg-secondary text-white shadow-soft hover:bg-amber-500 focus-visible:outline-secondary',
  };

  return (
    <button
      className={cn(base, variants[variant], fullWidth && 'w-full', className)}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
