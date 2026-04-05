import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { JsonLd } from '@/components/JsonLd'
import { Author } from '@/components/Author'
import { LastUpdated } from '@/components/LastUpdated'
import { CtaBand } from '@/components/CtaBand'
import { blogPosts, getPostBySlug } from '../posts'
import Link from 'next/link'

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
      '@type': 'Person',
      name: post.author,
      url: 'https://ecodrone.se/om-oss',
    },
    publisher: {
      '@type': 'Organization',
      name: 'EcoDrone Sverige AB',
      url: 'https://ecodrone.se',
      logo: {
        '@type': 'ImageObject',
        url: 'https://ecodrone.se/Facicon ecodrone.png',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://ecodrone.se/blogg/${post.slug}`,
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
            <span className="text-sm text-slate-500">{wordCount} ord</span>
          </div>

          <h1 className="text-3xl font-bold sm:text-4xl">{post.title}</h1>

          <div className="mt-3 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span key={tag} className="rounded border border-cyan-500/30 bg-cyan-500/10 px-2 py-0.5 text-xs font-mono text-cyan-400">
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-10 prose-custom space-y-6">
            {sections.map((section, i) => {
              if (section.startsWith('## ')) {
                return (
                  <h2 key={i} className="text-xl font-bold sm:text-2xl text-white mt-10 first:mt-0">
                    {section.replace('## ', '')}
                  </h2>
                )
              }
              // Handle bold markers
              const parts = section.split(/(\*\*[^*]+\*\*)/g)
              return (
                <p key={i} className="text-slate-300 leading-relaxed">
                  {parts.map((part, j) => {
                    if (part.startsWith('**') && part.endsWith('**')) {
                      return <strong key={j} className="text-white">{part.slice(2, -2)}</strong>
                    }
                    return part
                  })}
                </p>
              )
            })}
          </div>

          <div className="mt-12 pt-8 border-t border-slate-800">
            <Link href="/blogg" className="text-cyan-400 hover:text-cyan-300 transition-colors">
              ← Alla artiklar
            </Link>
          </div>
        </div>
      </article>

      <CtaBand
        heading="Vill ni veta mer?"
        description="Kontakta oss för en genomgång av era mätbehov och compliance-krav."
        ctaText="Kontakta oss"
        ctaHref="/kontakt"
      />
    </>
  )
}
