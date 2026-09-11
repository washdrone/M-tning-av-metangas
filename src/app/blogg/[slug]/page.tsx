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

  const wordCount = countWords([post.summary, post.content, ...(post.faqs ?? []).map((faq) => `${faq.question} ${faq.answer}`)].filter(Boolean).join(' '))

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    image: `${SITE_URL}${OG_IMAGE.url}`,
    citation: post.sources?.map((source) => source.url),
    articleSection: post.category,
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
        { name: 'Kunskapsbank', href: '/blogg' },
        { name: post.title, href: `/blogg/${post.slug}` },
      ]} />

      <article className="section-padding">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
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

          {post.summary && (
            <section aria-labelledby="kort-svar" className="mt-8 rounded-xl border border-teal-200 bg-teal-50 p-5 sm:p-6">
              <h2 id="kort-svar" className="text-lg font-semibold text-teal-900">Kort svar</h2>
              <p className="mt-2 text-slate-700 leading-relaxed">{post.summary}</p>
            </section>
          )}

          <nav aria-label="Innehåll i artikeln" className="mt-8 rounded-xl border border-slate-200 p-5">
            <p className="font-semibold text-slate-900">I den här artikeln</p>
            <ul className="mt-3 space-y-2">
              {sections.map((section, i) => section.startsWith('## ') && (
                <li key={i}><a href={`#avsnitt-${i}`} className="text-teal-800 underline underline-offset-4 hover:text-teal-950">{section.slice(3)}</a></li>
              ))}
              {!!post.faqs?.length && <li><a href="#vanliga-fragor" className="text-teal-800 underline underline-offset-4">Vanliga frågor</a></li>}
            </ul>
          </nav>

          <div className="mt-10 prose-custom space-y-6">
            {sections.map((section, i) => {
              if (section.startsWith('## ')) {
                return (
                  <h2 key={i} id={`avsnitt-${i}`} className="scroll-mt-28 text-xl font-bold sm:text-2xl text-slate-900 mt-10 first:mt-0">
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

          {!!post.faqs?.length && (
            <section className="mt-12" aria-labelledby="vanliga-fragor">
              <h2 id="vanliga-fragor" className="scroll-mt-28 text-2xl font-bold">Vanliga frågor</h2>
              <div className="mt-5 divide-y divide-slate-200 rounded-xl border border-slate-200 px-5">
                {post.faqs.map((faq) => (
                  <details key={faq.question} className="py-4">
                    <summary className="cursor-pointer font-semibold text-slate-900 leading-relaxed">{faq.question}</summary>
                    <p className="mt-3 text-slate-700 leading-relaxed">{faq.answer}</p>
                  </details>
                ))}
              </div>
            </section>
          )}
          {!!post.sources?.length && (
            <section className="mt-10 border-t border-slate-200 pt-6" aria-labelledby="kallor">
              <h2 id="kallor" className="text-xl font-semibold">Källor och vidare läsning</h2>
              <ul className="mt-4 list-disc space-y-3 pl-5 text-sm leading-relaxed">
                {post.sources.map((source) => (
                  <li key={source.url}><a href={source.url} className="text-teal-800 underline underline-offset-4 break-words">{source.title}</a></li>
                ))}
              </ul>
            </section>
          )}
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
        heading={post.cta?.heading ?? "Vilken fråga behöver er mätning besvara?"}
        description={post.cta?.description ?? "Beskriv anläggningen och hur ni vill använda resultatet, så hjälper vi er att avgränsa ett mätupplägg."}
        ctaText="Begär mätupplägg"
        ctaHref={post.cta?.href ?? "/kontakt"}
      />
    </>
  )
}
