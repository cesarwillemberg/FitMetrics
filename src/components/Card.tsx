import type { HTMLAttributes, PropsWithChildren, ReactNode } from 'react';
import { cn } from '@/lib/cn';

type CardProps = PropsWithChildren<{
  title?: ReactNode;
  actions?: ReactNode;
  className?: string;
}> &
  HTMLAttributes<HTMLDivElement>;

export function Card({ title, actions, className, children, ...rest }: CardProps) {
  return (
    <div className={cn('card border border-gray-100 shadow-soft bg-white dark:bg-gray-900 dark:border-gray-800', className)} {...rest}>
      {(title || actions) && (
        <div className="flex items-center justify-between gap-4 border-b border-gray-100 px-5 py-4 dark:border-gray-800">
          {typeof title === 'string' ? <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{title}</h3> : title}
          {actions}
        </div>
      )}
      <div className="p-5">{children}</div>
    </div>
  );
}

export default Card;
