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
  ctaText = 'Kontakta oss',
  ctaHref = '/kontakt',
  secondaryCtaText,
  secondaryCtaHref,
  trustItems,
  large = false,
}: HeroProps) {
  return (
    <section className={`relative overflow-hidden bg-skiffer ${large ? 'pt-32 pb-24 sm:pt-40 sm:pb-32 lg:pt-48 lg:pb-40' : 'pt-28 pb-20 sm:pt-36 sm:pb-24'}`}>
      <div className="container-narrow text-center">
        <h1 className={`font-display font-bold text-white ${large ? 'text-4xl sm:text-5xl lg:text-7xl' : 'text-3xl sm:text-4xl lg:text-5xl'}`} style={{ lineHeight: '1.15' }}>
          {title}
        </h1>
        <p className={`mx-auto mt-5 max-w-2xl text-dimma/80 font-light ${large ? 'text-lg sm:text-xl' : 'text-base sm:text-lg'}`} style={{ lineHeight: '1.75' }}>
          {subtitle}
        </p>
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Link href={ctaHref} className="btn-primary">
            {ctaText}
          </Link>
          {secondaryCtaText && secondaryCtaHref && (
            <Link href={secondaryCtaHref} className="inline-flex items-center justify-center border border-white/20 px-7 py-3.5 text-[15px] font-semibold text-white/80 hover:text-white hover:border-white/40 transition-all duration-200" style={{ borderRadius: '6px', fontFamily: "'Source Serif 4', Georgia, serif" }}>
              {secondaryCtaText}
            </Link>
          )}
        </div>
        {trustItems && trustItems.length > 0 && (
          <div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-[13px] text-feltsten">
            {trustItems.map((item, i) => (
              <span key={i} className="flex items-center gap-2" style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '0.72rem', letterSpacing: '0.03em' }}>
                <span className="h-1.5 w-1.5 rounded-full bg-feltsten" aria-hidden="true" />
                {item}
              </span>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
