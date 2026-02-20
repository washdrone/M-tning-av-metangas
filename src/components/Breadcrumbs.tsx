import Link from 'next/link'
import { JsonLd } from './JsonLd'

interface Crumb {
  name: string
  href: string
}

interface BreadcrumbsProps {
  items: Crumb[]
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: `https://washdrone.se${item.href}`,
    })),
  }

  return (
    <>
      <JsonLd data={jsonLd} />
      <nav aria-label="Brödsmulor" className="container-wide pt-24 pb-2">
        <ol className="flex flex-wrap items-center gap-1.5 text-[13px] text-dark-500">
          {items.map((item, i) => (
            <li key={item.href} className="flex items-center gap-1.5">
              {i > 0 && <span aria-hidden="true" className="text-dark-600">/</span>}
              {i === items.length - 1 ? (
                <span aria-current="page" className="text-dark-300">{item.name}</span>
              ) : (
                <Link href={item.href} className="hover:text-white transition-colors">{item.name}</Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  )
}
