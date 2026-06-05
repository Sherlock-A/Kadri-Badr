import { notFound } from 'next/navigation'
import Link from 'next/link'
import type { Metadata } from 'next'
import { getBlogPost, blogPosts } from '@/content/blog'
import { ArrowLeft, Clock, Tag, Phone } from 'lucide-react'

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    locale: post.locale,
    slug: post.slug,
  }))
}

export async function generateMetadata({
  params,
}: {
  params: { locale: string; slug: string }
}): Promise<Metadata> {
  const post = getBlogPost(params.slug, params.locale)
  if (!post) return {}
  return {
    title: `${post.title} | Dr. Kadri Badr`,
    description: post.description,
    alternates: { canonical: `/${params.locale}/blog/${params.slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.date,
      authors: ['Dr. Kadri Badr'],
    },
  }
}

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
)

export default function BlogPostPage({
  params,
}: {
  params: { locale: string; slug: string }
}) {
  const post = getBlogPost(params.slug, params.locale)
  if (!post) notFound()

  const schemaArticle = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    author: {
      '@type': 'Person',
      name: 'Dr. Kadri Badr',
      jobTitle: 'Chirurgien Dentiste',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Cabinet Dr. Kadri Badr',
      url: 'https://drbadrkadri.com',
    },
    mainEntityOfPage: `https://drbadrkadri.com/${params.locale}/blog/${params.slug}`,
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaArticle) }}
      />
      <main className="min-h-screen bg-cream-50">
        {/* Header */}
        <section className="bg-navy-900 pt-32 pb-12 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-20" />
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link
              href={`/${params.locale}/blog`}
              className="inline-flex items-center gap-2 text-white/60 hover:text-white
                         text-sm transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" /> Retour au blog
            </Link>
            <div className="flex items-center gap-3 mb-5">
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold
                               text-gold-300 bg-gold-500/15 border border-gold-500/30
                               px-3 py-1 rounded-full uppercase tracking-wider">
                <Tag className="w-3 h-3" />
                {post.category}
              </span>
              <span className="flex items-center gap-1 text-xs text-white/50">
                <Clock className="w-3 h-3" />
                {post.readTime} de lecture
              </span>
            </div>
            <h1 className="heading-lg text-white mb-4">{post.title}</h1>
            <p className="body-lg text-white/60 mb-6">{post.description}</p>
            <time className="text-xs text-white/40">
              Publié le {new Date(post.date).toLocaleDateString('fr-FR', {
                year: 'numeric', month: 'long', day: 'numeric',
              })}
            </time>
          </div>
        </section>

        {/* Article + sidebar */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid lg:grid-cols-3 gap-10">
            {/* Article content */}
            <article
              className="lg:col-span-2 bg-white rounded-3xl p-8 shadow-glass
                         prose prose-navy max-w-none
                         prose-h2:font-playfair prose-h2:text-navy-900 prose-h2:text-2xl prose-h2:mt-8 prose-h2:mb-4
                         prose-h3:text-navy-800 prose-h3:text-lg prose-h3:mt-6 prose-h3:mb-3
                         prose-p:text-navy-700 prose-p:leading-relaxed
                         prose-ul:text-navy-700 prose-li:my-1
                         prose-strong:text-navy-900
                         prose-table:text-sm prose-th:bg-navy-900 prose-th:text-white prose-th:p-3
                         prose-td:p-3 prose-td:border prose-td:border-navy-100
                         prose-a:text-gold-600 prose-a:no-underline hover:prose-a:underline"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Sidebar */}
            <aside className="space-y-6">
              {/* CTA card */}
              <div className="bg-navy-900 rounded-3xl p-6 sticky top-24">
                <h3 className="text-white font-playfair text-xl mb-2">
                  Obtenez votre devis gratuit
                </h3>
                <p className="text-white/60 text-sm mb-5">
                  Réponse personnalisée sous 24h. Sans engagement.
                </p>
                <a
                  href={`/${params.locale}#contact`}
                  className="btn-gold w-full justify-center mb-3"
                >
                  Demander un devis
                </a>
                <a
                  href="https://wa.me/212666686646?text=Bonjour%20Dr.%20Kadri%20Badr%2C%20j%27ai%20lu%20votre%20article%20et%20j%27ai%20une%20question."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3 px-4
                             border border-[#25D366]/40 text-[#25D366] rounded-2xl
                             hover:bg-[#25D366]/10 transition-all text-sm font-medium"
                >
                  <WhatsAppIcon /> WhatsApp
                </a>
                <div className="mt-4 pt-4 border-t border-white/10 flex items-center gap-2">
                  <Phone className="w-4 h-4 text-gold-500 flex-shrink-0" />
                  <a href="tel:+212666686646" className="text-white/70 hover:text-white text-sm">
                    +212 6 66 68 66 46
                  </a>
                </div>
              </div>

              {/* Consultation vidéo */}
              <div className="bg-gold-50 border border-gold-200 rounded-3xl p-6">
                <h3 className="text-navy-900 font-semibold mb-2">
                  Consultation vidéo gratuite
                </h3>
                <p className="text-navy-600 text-sm mb-4">
                  Parlez directement au Dr. Kadri Badr depuis chez vous. 20 minutes, sans engagement.
                </p>
                <a
                  href="https://calendly.com/drkadribadr/consultation-gratuite"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-navy w-full justify-center text-sm"
                >
                  Réserver un créneau →
                </a>
              </div>
            </aside>
          </div>
        </div>
      </main>
    </>
  )
}
