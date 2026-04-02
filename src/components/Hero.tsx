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
  ctaText = 'Boka genomgång',
  ctaHref = '/kontakt',
  secondaryCtaText,
  secondaryCtaHref,
  trustItems,
  large = false,
}: HeroProps) {
  return (
    <section className={`relative overflow-hidden ${large ? 'pt-8 pb-12 sm:pt-20 sm:pb-32 lg:pt-28 lg:pb-40' : 'pt-6 pb-10 sm:pt-16 sm:pb-24'}`}>
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-dark-900 via-dark-950 to-dark-950" />
        <div className="absolute left-1/2 top-0 -z-10 h-[400px] w-[600px] sm:h-[600px] sm:w-[900px] -translate-x-1/2 rounded-full bg-brand-600/8 blur-[120px]" />
        <div className="absolute right-0 top-1/3 -z-10 h-[250px] w-[250px] sm:h-[400px] sm:w-[400px] rounded-full bg-accent-500/5 blur-[100px]" />
      </div>

      <div className="container-narrow text-center">
        <h1 className={`font-bold ${large ? 'text-3xl sm:text-5xl lg:text-7xl' : 'text-2xl sm:text-4xl lg:text-5xl'}`}>
          {title}
        </h1>
        <p className={`mx-auto mt-4 sm:mt-5 max-w-2xl text-dark-300 ${large ? 'text-base sm:text-lg lg:text-xl' : 'text-[15px] sm:text-base lg:text-lg'}`}>
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
          <div className="mt-8 sm:mt-12 flex flex-wrap items-center justify-center gap-x-6 sm:gap-x-8 gap-y-2 sm:gap-y-3 text-[12px] sm:text-[13px] text-dark-400">
            {trustItems.map((item, i) => (
              <span key={i} className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-accent-400" aria-hidden="true" />
                {item}
              </span>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
