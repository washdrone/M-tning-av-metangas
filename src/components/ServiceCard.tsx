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
      className="group card-surface p-5 sm:p-8 focus:outline-none focus:ring-2 focus:ring-teal-700 focus:ring-offset-2 focus:ring-offset-white"
    >
      <div className="mb-4 sm:mb-5 flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-xl bg-teal-50 text-teal-800 group-hover:bg-cyan-500/20 transition-colors">
        {icon}
      </div>
      <h3 className="text-base sm:text-lg font-semibold text-slate-900">{title}</h3>
      <p className="mt-2 sm:mt-2.5 text-sm leading-relaxed text-slate-600">{description}</p>
      <span className="mt-4 sm:mt-5 inline-flex items-center text-sm font-medium text-teal-800 group-hover:text-teal-800 transition-colors">
        Läs mer
        <svg className="ml-1.5 h-4 w-4 flex-shrink-0 transition-transform group-hover:translate-x-1" width={16} height={16} fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
        </svg>
      </span>
    </Link>
  )
}
