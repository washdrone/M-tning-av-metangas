import Link from 'next/link'

export default function NotFound() {
  return (
    <section className="section-padding bg-papper">
      <div className="container-narrow text-center">
        <h1 className="font-display text-4xl font-bold text-skiffer">404</h1>
        <p className="mt-4 text-lg text-aska">Sidan kunde inte hittas.</p>
        <Link href="/" className="btn-primary mt-8">
          Till startsidan
        </Link>
      </div>
    </section>
  )
}
