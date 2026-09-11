import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { JsonLd } from '@/components/JsonLd'
import { Author } from '@/components/Author'
import { LastUpdated } from '@/components/LastUpdated'
import { CtaBand } from '@/components/CtaBand'
import { RelatedContent } from '@/components/RelatedContent'
import { blogPosts, getPostBySlug } from '../posts'
import Link from 'next/link'
import { SITE_URL, SITE_LOGO_URL, ORG_ID, OG_IMAGE } from '@/site-config'

interface Props {
  params: { slug: string }
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }))
}

export function generateMetadata({ params }: Props): Metadata {
  const post = getPostBySlug(params.slug)
  if (!post) return {}

  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blogg/${post.slug}` },
    openGraph: {
      images: [OG_IMAGE],
      title: `${post.title} | EcoDrone`,
      description: post.excerpt,
      url: `/blogg/${post.slug}`,
      type: 'article',
      publishedTime: post.datePublished,
      modifiedTime: post.dateModified,
      authors: [post.author],
    },
  }
}

function countWords(text: string): number {
  return text.split(/\s+/).filter(Boolean).length
}

/** Renderar **fet text** i ett textavsnitt som <strong>-element. */
function renderBold(text: string, strongClass: string) {
  return text.split(/(\*\*[^*]+\*\*)/g).map((part, j) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={j} className={strongClass}>{part.slice(2, -2)}</strong>
    }
    return part
  })
}

export default function BlogPostPage({ params }: Props) {
  const post = getPostBySlug(params.slug)
  if (!post) notFound()

  const wordCount = countWords(post.content)

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    datePublished: post.datePublished,
    dateModified: post.dateModified,
    wordCount,
    author: {
      '@type': 'Organization',
      '@id': ORG_ID,
      name: 'EcoDrone',
      url: SITE_URL,
    },
    publisher: {
      '@type': 'Organization',
      '@id': ORG_ID,
      name: 'EcoDrone',
      url: SITE_URL,
      logo: {
        '@type': 'ImageObject',
        url: SITE_LOGO_URL,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${SITE_URL}/blogg/${post.slug}`,
    },
    inLanguage: 'sv-SE',
    keywords: post.tags.join(', '),
  }

  // Simple markdown-ish rendering for content
  const sections = post.content.split('\n\n').filter(Boolean)

  return (
    <>
      <JsonLd data={articleSchema} />
      <Breadcrumbs items={[
        { name: 'Hem', href: '/' },
        { name: 'Blogg', href: '/blogg' },
        { name: post.title, href: `/blogg/${post.slug}` },
      ]} />

      <article className="section-padding">
        <div className="container-narrow">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mb-6">
            <Author name={post.author} />
            <LastUpdated datePublished={post.datePublished} dateModified={post.dateModified} />
            <span className="text-sm text-slate-600">{wordCount} ord</span>
          </div>

          <h1 className="text-3xl font-bold sm:text-4xl">{post.title}</h1>

          <div className="mt-3 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span key={tag} className="rounded border border-teal-200 bg-teal-50 px-2 py-0.5 text-xs font-mono text-teal-800">
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-10 prose-custom space-y-6">
            {sections.map((section, i) => {
              if (section.startsWith('## ')) {
                return (
                  <h2 key={i} className="text-xl font-bold sm:text-2xl text-slate-900 mt-10 first:mt-0">
                    {section.replace('## ', '')}
                  </h2>
                )
              }
              // Punktlistor: block där varje rad börjar med "- "
              const lines = section.split('\n')
              if (lines.every((l) => l.startsWith('- '))) {
                return (
                  <ul key={i} className="list-disc space-y-2 pl-5 text-slate-700 leading-relaxed">
                    {lines.map((line, k) => (
                      <li key={k}>{renderBold(line.slice(2), 'text-slate-900')}</li>
                    ))}
                  </ul>
                )
              }
              return (
                <p key={i} className="text-slate-700 leading-relaxed">
                  {renderBold(section, 'text-slate-900')}
                </p>
              )
            })}
          </div>

          {post.slug === 'schabloner-vs-matdata' && <section className="mt-10 border-t border-slate-200 pt-6">
            <h2 className="text-xl">Källor</h2>
            <ul className="mt-4 space-y-3 text-teal-800 underline">
              <li><a href="https://www.efrag.org/sites/default/files/sites/webpublishing/SiteAssets/ESRS%20E1%20Delegated-act-2023-5303-annex-1_en.pdf">ESRS E1, bland annat AR 39 och AR 43 (PDF)</a></li>
              <li><a href="https://www.consilium.europa.eu/en/press/press-releases/2026/02/24/council-signs-off-simplification-of-sustainability-reporting-and-due-diligence-requirements-to-boost-eu-competitiveness/">EU-rådets beslut om CSRD-ändringar den 24 februari 2026</a></li>
            </ul>
          </section>}
          <div className="mt-12 pt-8 border-t border-slate-200">
            <Link href="/blogg" className="text-teal-800 hover:text-teal-800 transition-colors">
              ← Alla artiklar
            </Link>
          </div>
        </div>
      </article>

      {post.relatedLinks.length > 0 && (
        <RelatedContent items={post.relatedLinks} />
      )}

      <CtaBand
        heading="Vill ni veta mer?"
        description="Kontakta oss för en genomgång av era mätbehov och compliance-krav."
        ctaText="Kontakta oss"
        ctaHref="/kontakt"
      />
    </>
  )
}
