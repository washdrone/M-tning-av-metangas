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
      <nav aria-label="Brödsmulor" className="container-wide py-3">
        <ol className="flex flex-wrap items-center gap-1 text-sm text-gray-500">
          {items.map((item, i) => (
            <li key={item.href} className="flex items-center gap-1">
              {i > 0 && <span aria-hidden="true">/</span>}
              {i === items.length - 1 ? (
                <span aria-current="page" className="text-gray-900">{item.name}</span>
              ) : (
                <Link href={item.href} className="hover:text-brand-700">{item.name}</Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  )
}
