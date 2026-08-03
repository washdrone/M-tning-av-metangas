import type { Metadata } from 'next'
import Link from 'next/link'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { blogPosts } from './posts'
import { OG_IMAGE } from '@/site-config'

export const metadata: Metadata = {
  title: 'Blogg – insikter om utsläppsmätning och compliance',
  description:
    'Artiklar om drönarbaserad utsläppsmätning, CSRD, LDAR, metanförordningen och miljörapportering. Insikter från EcoDrone.',
  alternates: { canonical: '/blogg' },
  openGraph: {
    images: [OG_IMAGE],
    title: 'Blogg | EcoDrone',
    description: 'Insikter om utsläppsmätning, CSRD-compliance och regulatoriska krav.',
    url: '/blogg',
  },
}

export default function BloggPage() {
  return (
    <>
      <Breadcrumbs items={[
        { name: 'Hem', href: '/' },
        { name: 'Blogg', href: '/blogg' },
      ]} />

      <section className="section-padding">
        <div className="container-narrow">
          <h1 className="text-3xl font-bold sm:text-4xl">Blogg</h1>
          <p className="mt-4 max-w-2xl text-lg text-slate-300">
            <strong className="text-white">Insikter om drönarbaserad utsläppsmätning, regulatoriska krav och compliance-strategier.</strong>{' '}
            Vi delar kunskap om metanmätning, CSRD, LDAR och miljörapportering.
          </p>
        </div>
      </section>

      <section className="section-padding section-darker">
        <div className="container-wide">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blogg/${post.slug}`}
                className="group card-dark p-6 flex flex-col"
              >
                <time dateTime={post.datePublished} className="text-xs text-slate-500 font-mono">
                  {new Date(post.datePublished).toLocaleDateString('sv-SE', { year: 'numeric', month: 'long', day: 'numeric' })}
                </time>
                <h2 className="mt-2 text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors">
                  {post.title}
                </h2>
                <p className="mt-2 text-sm text-slate-400 leading-relaxed flex-1">
                  {post.excerpt}
                </p>
                <span className="mt-4 inline-flex items-center text-sm text-cyan-400 group-hover:text-cyan-300">
                  Läs artikel
                  <svg className="ml-1 h-4 w-4 flex-shrink-0 transition-transform group-hover:translate-x-1" width={16} height={16} fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
