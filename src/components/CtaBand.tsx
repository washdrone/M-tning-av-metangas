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
  ctaHref = '/kontakt',
}: CtaBandProps) {
  return (
    <section className="relative overflow-hidden py-14 sm:py-28">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-brand-950 via-dark-900 to-dark-950" />
      <div className="absolute left-1/2 top-1/2 -z-10 h-[300px] w-[400px] sm:h-[400px] sm:w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-600/10 blur-[100px]" />
      <div className="container-narrow text-center">
        <h2 className="text-2xl font-bold text-white sm:text-3xl lg:text-4xl">{heading}</h2>
        {description && (
          <p className="mx-auto mt-4 max-w-xl text-[15px] sm:text-base text-dark-300">{description}</p>
        )}
        <Link href={ctaHref} className="btn-primary mt-8 w-full sm:w-auto">
          {ctaText}
        </Link>
      </div>
    </section>
  )
}
