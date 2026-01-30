import Button from './Button';

type Props = {
  pill?: string;
  title: string;
  subtitle: string;
  onCTAClick?: () => void;
  ctaLabel?: string;
  secondaryLabel?: string;
  onSecondaryClick?: () => void;
};

export function Hero({
  pill = 'TBM + Macros em segundos',
  title,
  subtitle,
  onCTAClick,
  ctaLabel = 'Calcular agora ↓',
  secondaryLabel = 'Ver FAQ',
  onSecondaryClick,
}: Props) {
  return (
    <section className="hero-gradient text-white" id="top">
      <div className="section-shell flex flex-col items-center text-center gap-6 py-14">
        {pill && <div className="pill bg-white/15 text-white">{pill}</div>}
        <div className="space-y-4 max-w-3xl">
          <h1 className="text-3xl sm:text-4xl font-bold leading-tight text-white">{title}</h1>
          <p className="text-base sm:text-lg text-white/90">{subtitle}</p>
        </div>
        <div className="flex flex-wrap gap-3 justify-center">
          {onCTAClick && (
            <Button variant="highlight" onClick={onCTAClick}>
              {ctaLabel}
            </Button>
          )}
          {onSecondaryClick && (
            <Button
              variant="secondary"
              className="hover:bg-gray-800 hover:text-white hover:border-gray-800"
              onClick={onSecondaryClick}
            >
              {secondaryLabel}
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}

export default Hero;
