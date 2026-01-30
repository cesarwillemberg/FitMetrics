type Props = {
  title: string;
  subtitle?: string;
};

export function SectionTitle({ title, subtitle }: Props) {
  return (
    <div className="text-center space-y-2 mb-6">
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">{title}</h2>
      {subtitle && <p className="text-sm sm:text-base text-gray-600">{subtitle}</p>}
      <div className="mx-auto h-1 w-14 rounded-full bg-primary"></div>
    </div>
  );
}

export default SectionTitle;
