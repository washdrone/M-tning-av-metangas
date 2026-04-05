import Link from 'next/link'

interface RelatedItem {
  title: string
  href: string
  description: string
}

interface RelatedContentProps {
  heading?: string
  items: RelatedItem[]
}

export function RelatedContent({ heading = 'Relaterat innehåll', items }: RelatedContentProps) {
  return (
    <section className="section-padding">
      <div className="container-narrow">
        <h2 className="text-xl font-bold text-white">{heading}</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group card-dark p-5 flex flex-col"
            >
              <h3 className="font-semibold text-white group-hover:text-cyan-400 transition-colors">
                {item.title}
              </h3>
              <p className="mt-2 text-sm text-slate-400 leading-relaxed flex-1">
                {item.description}
              </p>
              <span className="mt-3 inline-flex items-center text-sm text-cyan-400 group-hover:text-cyan-300">
                Läs mer
                <svg className="ml-1 h-4 w-4 flex-shrink-0 transition-transform group-hover:translate-x-1" width={16} height={16} fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
