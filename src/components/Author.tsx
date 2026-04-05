import Link from 'next/link'

interface AuthorProps {
  name?: string
  href?: string
}

export function Author({ name = 'EcoDrone Redaktion', href = '/om-oss' }: AuthorProps) {
  return (
    <span className="inline-flex items-center gap-1.5 text-sm text-slate-400">
      <svg className="h-4 w-4 text-slate-500" width={16} height={16} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>
      <Link href={href} className="hover:text-white transition-colors">{name}</Link>
    </span>
  )
}
