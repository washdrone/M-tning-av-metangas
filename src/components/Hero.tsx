import Link from 'next/link'

interface HeroProps {
  title: string
  subtitle: string
  ctaText?: string
  ctaHref?: string
  secondaryCtaText?: string
  secondaryCtaHref?: string
  trustItems?: string[]
  large?: boolean
}

export function Hero({
  title,
  subtitle,
  ctaText = 'Begär mätupplägg',
  ctaHref = '/kontakt',
  secondaryCtaText,
  secondaryCtaHref,
  trustItems,
  large = false,
}: HeroProps) {
  return (
    <section className={`hero-surface relative overflow-hidden ${large ? 'pt-8 pb-12 sm:pt-20 sm:pb-24 lg:pt-24 lg:pb-28' : 'pt-6 pb-10 sm:pt-16 sm:pb-24'}`}>
      <div className="container-narrow text-center">
        <h1 className={`font-bold ${large ? 'text-3xl sm:text-5xl lg:text-6xl' : 'text-2xl sm:text-4xl lg:text-5xl'}`}>
          {title}
        </h1>
        <p className={`mx-auto leading-relaxed mt-4 sm:mt-5 max-w-2xl text-slate-600 ${large ? 'text-base sm:text-lg lg:text-xl' : 'text-[15px] sm:text-base lg:text-lg'}`}>
          {subtitle}
        </p>
        <div className="mt-8 sm:mt-10 flex flex-col items-center gap-3 sm:gap-4 sm:flex-row sm:justify-center">
          <Link href={ctaHref} className="btn-primary w-full sm:w-auto">
            {ctaText}
          </Link>
          {secondaryCtaText && secondaryCtaHref && (
            <Link href={secondaryCtaHref} className="btn-secondary w-full sm:w-auto">
              {secondaryCtaText}
            </Link>
          )}
        </div>
        {trustItems && trustItems.length > 0 && (
          <div className="mt-8 sm:mt-12 flex flex-wrap items-center justify-center gap-x-6 sm:gap-x-8 gap-y-2 sm:gap-y-3 text-sm text-slate-600">
            {trustItems.map((item, i) => (
              <span key={i} className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-teal-700" aria-hidden="true" />
                {item}
              </span>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
