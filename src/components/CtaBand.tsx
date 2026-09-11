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
  ctaText = 'Begär mätupplägg',
  ctaHref = '/kontakt',
}: CtaBandProps) {
  return (
    <section className="cta-surface relative overflow-hidden py-14 sm:py-24">
      <div className="container-narrow text-center">
        <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl lg:text-4xl">{heading}</h2>
        {description && (
          <p className="mx-auto mt-4 max-w-xl text-[15px] sm:text-base text-slate-600">{description}</p>
        )}
        <Link href={ctaHref} className="btn-primary mt-8 w-full sm:w-auto">
          {ctaText}
        </Link>
      </div>
    </section>
  )
}
