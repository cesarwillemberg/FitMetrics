import { cn } from '@/lib/cn';

type Props = {
  label: string;
  value: string | number;
  sub?: string;
  accent?: 'primary' | 'secondary' | 'protein' | 'fat' | 'carb' | 'fiber';
};

const accentMap: Record<NonNullable<Props['accent']>, string> = {
  primary: 'border-primary',
  secondary: 'border-secondary',
  protein: 'border-amber-500',
  fat: 'border-pink-400',
  carb: 'border-cyan-500',
  fiber: 'border-violet-500',
};

export function StatCard({ label, value, sub, accent = 'primary' }: Props) {
  return (
    <div className={cn('card border-t-4 p-5 bg-white dark:bg-gray-900', accentMap[accent])}>
      <p className="stat-label mb-1 dark:text-gray-400">{label}</p>
      <div className="text-3xl font-bold text-gray-900 dark:text-white">{value}</div>
      {sub && <p className="text-sm text-gray-500 dark:text-gray-400">{sub}</p>}
    </div>
  );
}

export default StatCard;
