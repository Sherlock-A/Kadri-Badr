import Link from 'next/link'
import { getTranslations } from 'next-intl/server'
import type { Metadata } from 'next'
import { getBlogPostsByLocale, type BlogPost } from '@/content/blog'
import { Clock, ArrowRight, Tag } from 'lucide-react'

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string }
}): Promise<Metadata> {
  const descriptions: Record<string, string> = {
    fr: 'Blog santé dentaire Dr. Kadri Badr — Guides sur les implants, facettes, tourisme dentaire au Maroc. Conseils d\'experts pour patients internationaux.',
    en: 'Dr. Kadri Badr dental health blog — Guides on implants, veneers, dental tourism in Morocco.',
    ar: 'مدونة صحة الأسنان — دليل شامل للمرضى الدوليين.',
  }
  return {
    title: 'Blog Santé Dentaire | Dr. Kadri Badr — Fès, Maroc',
    description: descriptions[locale] ?? descriptions['fr'],
    alternates: { canonical: `/${locale}/blog` },
  }
}

function PostCard({ post, locale }: { post: BlogPost; locale: string }) {
  return (
    <Link
      href={`/${locale}/blog/${post.slug}`}
      className="group block bg-white rounded-3xl overflow-hidden shadow-glass
                 hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300"
    >
      <div className="p-7">
        <div className="flex items-center gap-3 mb-4">
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold
                           text-gold-700 bg-gold-50 border border-gold-200
                           px-3 py-1 rounded-full uppercase tracking-wider">
            <Tag className="w-3 h-3" />
            {post.category}
          </span>
          <span className="flex items-center gap-1 text-xs text-navy-400">
            <Clock className="w-3 h-3" />
            {post.readTime}
          </span>
        </div>
        <h2 className="heading-sm text-navy-900 mb-3 group-hover:text-navy-700 transition-colors line-clamp-2">
          {post.title}
        </h2>
        <p className="text-navy-600 text-sm leading-relaxed mb-5 line-clamp-3">
          {post.description}
        </p>
        <div className="flex items-center justify-between">
          <time className="text-xs text-navy-400">
            {new Date(post.date).toLocaleDateString('fr-FR', {
              year: 'numeric', month: 'long', day: 'numeric',
            })}
          </time>
          <span className="flex items-center gap-1 text-sm font-semibold text-gold-600
                           group-hover:gap-2 transition-all">
            Lire l'article <ArrowRight className="w-4 h-4" />
          </span>
        </div>
      </div>
    </Link>
  )
}

export default async function BlogPage({
  params: { locale },
}: {
  params: { locale: string }
}) {
  const posts = getBlogPostsByLocale(locale).length > 0
    ? getBlogPostsByLocale(locale)
    : getBlogPostsByLocale('fr')

  return (
    <main className="min-h-screen bg-cream-50">
      {/* Hero */}
      <section className="bg-navy-900 pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="section-badge-white mb-4">
            Blog Santé Dentaire
          </span>
          <h1 className="heading-lg text-white mb-4">
            Guides & Conseils d&apos;Experts
          </h1>
          <p className="body-lg text-white/60 max-w-2xl mx-auto">
            Tout ce que vous devez savoir pour prendre la meilleure décision pour votre sourire.
          </p>
        </div>
      </section>

      {/* Articles grid */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {posts.length === 0 ? (
          <p className="text-center text-navy-500 py-20">
            Articles à venir très prochainement.
          </p>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <PostCard key={post.slug} post={post} locale={locale} />
            ))}
          </div>
        )}

        {/* CTA */}
        <div className="mt-16 text-center p-10 bg-navy-900 rounded-3xl">
          <h2 className="heading-sm text-white mb-3">
            Une question sur votre traitement ?
          </h2>
          <p className="text-white/60 mb-6">
            Notre équipe répond en moins d'une heure.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href={`/${locale}#contact`} className="btn-gold">
              Demander un devis gratuit
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="https://wa.me/212666686646?text=Bonjour%20Dr.%20Kadri%20Badr%2C%20j%27ai%20lu%20votre%20blog%20et%20j%27ai%20une%20question."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
