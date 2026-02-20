import Link from 'next/link'

interface HeroProps {
  title: string
  subtitle: string
  ctaText?: string
  ctaHref?: string
  secondaryCtaText?: string
  secondaryCtaHref?: string
  trustItems?: string[]
}

export function Hero({
  title,
  subtitle,
  ctaText = 'Boka genomgång',
  ctaHref = '/matning/kontakt',
  secondaryCtaText,
  secondaryCtaHref,
  trustItems,
}: HeroProps) {
  return (
    <section className="bg-gradient-to-b from-gray-50 to-white section-padding">
      <div className="container-narrow text-center">
        <h1 className="text-3xl font-bold sm:text-4xl lg:text-5xl">{title}</h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600 sm:text-xl">
          {subtitle}
        </p>
        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <Link href={ctaHref} className="btn-primary">
            {ctaText}
          </Link>
          {secondaryCtaText && secondaryCtaHref && (
            <Link href={secondaryCtaHref} className="btn-secondary">
              {secondaryCtaText}
            </Link>
          )}
        </div>
        {trustItems && trustItems.length > 0 && (
          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-gray-500">
            {trustItems.map((item, i) => (
              <span key={i} className="flex items-center gap-1.5">
                <svg className="h-4 w-4 text-brand-600" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                {item}
              </span>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
