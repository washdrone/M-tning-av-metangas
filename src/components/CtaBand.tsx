import Link from 'next/link'

interface CtaBandProps {
  heading: string
  description?: string
  ctaText?: string
  ctaHref?: string
}

export function CtaBand({
  heading,
  description,
  ctaText = 'Boka genomgång',
  ctaHref = '/matning/kontakt',
}: CtaBandProps) {
  return (
    <section className="bg-brand-800 section-padding">
      <div className="container-narrow text-center">
        <h2 className="text-2xl font-bold text-white sm:text-3xl">{heading}</h2>
        {description && (
          <p className="mx-auto mt-3 max-w-xl text-brand-100">{description}</p>
        )}
        <Link
          href={ctaHref}
          className="mt-8 inline-flex items-center justify-center rounded-lg bg-white px-8 py-3 text-base font-medium text-brand-800 shadow-sm hover:bg-brand-50 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-brand-800 transition-colors duration-150"
        >
          {ctaText}
        </Link>
      </div>
    </section>
  )
}
