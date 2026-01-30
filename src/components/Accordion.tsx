import { useState } from 'react';
import { cn } from '@/lib/cn';

type Props = {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
  badge?: string;
  className?: string;
};

export function Accordion({ title, children, defaultOpen = false, badge, className }: Props) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className={cn('rounded-xl border border-gray-200 bg-white shadow-soft', className)}>
      <button
        type="button"
        className="flex w-full items-center justify-between gap-3 px-4 py-3 text-left font-semibold text-gray-900"
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
      >
        <span className="flex items-center gap-2">
          {title}
          {badge && <span className="pill bg-primary/10 text-primary">{badge}</span>}
        </span>
        <span className={cn('text-lg transition', open ? 'rotate-180' : '')}>▾</span>
      </button>
      <div
        className={cn(
          'grid overflow-hidden transition-[grid-template-rows,opacity] duration-200',
          open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0',
        )}
      >
        <div className="min-h-0 px-4 pb-4 text-sm text-gray-700">{children}</div>
      </div>
    </div>
  );
}

export default Accordion;
