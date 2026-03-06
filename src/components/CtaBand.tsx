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
  ctaText = 'Kontakta oss',
  ctaHref = '/kontakt',
}: CtaBandProps) {
  return (
    <section className="py-20 sm:py-28 bg-skiffer">
      <div className="container-narrow text-center">
        <h2 className="font-display text-2xl font-bold text-white sm:text-3xl lg:text-4xl" style={{ lineHeight: '1.2' }}>{heading}</h2>
        {description && (
          <p className="mx-auto mt-4 max-w-xl text-dimma/80 font-light" style={{ lineHeight: '1.75' }}>{description}</p>
        )}
        <Link href={ctaHref} className="btn-primary mt-8">
          {ctaText}
        </Link>
      </div>
    </section>
  )
}
