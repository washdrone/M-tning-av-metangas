import { Breadcrumbs } from '@/components/Breadcrumbs'
import { Author } from '@/components/Author'
import { LastUpdated } from '@/components/LastUpdated'

interface BreadcrumbItem {
  name: string
  href: string
}

interface ArticleLayoutProps {
  breadcrumbs: BreadcrumbItem[]
  datePublished?: string
  dateModified?: string
  authorName?: string
  children: React.ReactNode
}

/**
 * Standardlayout för artiklar, compliance-sidor och blogginlägg.
 *
 * Ger konsekvent:
 * - Breadcrumbs
 * - Author-byline
 * - Datum (publicerad + uppdaterad)
 *
 * Används genom att wrappa sidans innehåll.
 */
export function ArticleLayout({
  breadcrumbs,
  datePublished,
  dateModified,
  authorName,
  children,
}: ArticleLayoutProps) {
  const showByline = datePublished && dateModified

  return (
    <>
      <Breadcrumbs items={breadcrumbs} />

      {showByline && (
        <div className="container-narrow mt-4 flex flex-wrap items-center gap-x-4 gap-y-1">
          <Author name={authorName} />
          <LastUpdated datePublished={datePublished} dateModified={dateModified} />
        </div>
      )}

      {children}
    </>
  )
}
