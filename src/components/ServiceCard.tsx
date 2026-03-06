import Link from 'next/link'

interface ServiceCardProps {
  title: string
  description: string
  href: string
  icon: React.ReactNode
}

export function ServiceCard({ title, description, href, icon }: ServiceCardProps) {
  return (
    <Link
      href={href}
      className="group border border-mossa bg-white p-6 sm:p-8 transition-all duration-200 hover:border-feltsten hover:shadow-md focus:outline-none focus:ring-2 focus:ring-jarnmalm focus:ring-offset-2 focus:ring-offset-papper"
      style={{ borderRadius: '8px' }}
    >
      <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-lg bg-dimma text-feltsten group-hover:bg-feltsten/20 transition-colors">
        {icon}
      </div>
      <h3 className="font-display text-lg font-bold text-skiffer">{title}</h3>
      <p className="mt-2.5 text-sm leading-relaxed text-aska">{description}</p>
      <span className="mt-5 inline-flex items-center text-sm font-medium text-jarnmalm group-hover:text-skiffer transition-colors">
        Läs mer
        <svg className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
        </svg>
      </span>
    </Link>
  )
}
