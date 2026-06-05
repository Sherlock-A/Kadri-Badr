import { MetadataRoute } from 'next'
import { blogPosts } from '@/content/blog'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://drbadrkadri.com'
  const locales = ['fr', 'en', 'ar'] as const

  const homePages: MetadataRoute.Sitemap = locales.map((locale) => ({
    url: `${baseUrl}/${locale}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: locale === 'fr' ? 1.0 : 0.8,
  }))

  const blogIndexPages: MetadataRoute.Sitemap = locales.map((locale) => ({
    url: `${baseUrl}/${locale}/blog`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }))

  const articlePages: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${baseUrl}/${post.locale}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  return [...homePages, ...blogIndexPages, ...articlePages]
}
