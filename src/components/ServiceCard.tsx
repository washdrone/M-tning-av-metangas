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
      className="group rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:border-brand-300 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-brand-600 focus:ring-offset-2"
    >
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-brand-50 text-brand-700 group-hover:bg-brand-100">
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
      <p className="mt-2 text-sm text-gray-600">{description}</p>
      <span className="mt-4 inline-flex items-center text-sm font-medium text-brand-700 group-hover:text-brand-800">
        Läs mer
        <svg className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
        </svg>
      </span>
    </Link>
  )
}
