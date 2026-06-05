import type { Metadata } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages, getTranslations } from 'next-intl/server'
import { notFound } from 'next/navigation'
import { locales } from '@/i18n/request'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import FloatingActions from '@/components/ui/FloatingActions'
import StickyBookBar from '@/components/ui/StickyBookBar'
import '../globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string }
}): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'hero' })

  const descriptions: Record<string, string> = {
    fr: 'Cabinet dentaire d\'excellence au Maroc. Implants, facettes, Hollywood Smile. Dr. Kadri Badr — spécialiste esthétique dentaire à Fès. Économisez 70% vs Europe.',
    en: 'Premium dental clinic in Morocco. Implants, veneers, Hollywood Smile. Dr. Kadri Badr — dental aesthetics specialist in Fès. Save 70% vs Europe.',
    ar: 'عيادة أسنان متميزة في المغرب. زراعة أسنان، قشرات، هوليوود سمايل. د. كدري بدر — أخصائي تجميل الأسنان في فاس. وفّر 70٪ مقارنة بأوروبا.',
  }

  return {
    title: {
      default: 'Dr. Kadri Badr — Cabinet Dentaire d\'Excellence | Fès, Maroc',
      template: '%s | Dr. Kadri Badr Dental',
    },
    description: descriptions[locale] ?? descriptions['fr'],
    keywords: [
      'dentiste Maroc premium', 'cabinet dentaire Fès', 'tourisme dentaire Maroc',
      'implants dentaires Maroc', 'Hollywood smile Maroc', 'facettes EMAX',
      'dental tourism Morocco', 'dentist Morocco Europe', 'smile makeover Morocco',
      'Dr Kadri Badr', 'drbadrkadri.com',
    ],
    authors: [{ name: 'Dr. Kadri Badr' }],
    creator: 'Dr. Kadri Badr Dental Clinic',
    metadataBase: new URL('https://drbadrkadri.com'),
    alternates: {
      canonical: `/${locale}`,
      languages: {
        'fr': '/fr',
        'en': '/en',
        'ar': '/ar',
      },
    },
    openGraph: {
      type: 'website',
      locale: locale === 'ar' ? 'ar_MA' : locale === 'en' ? 'en_US' : 'fr_MA',
      url: `https://drbadrkadri.com/${locale}`,
      siteName: 'Dr. Kadri Badr Dental',
      title: 'Dr. Kadri Badr — Excellence Dentaire | Fès, Maroc',
      description: descriptions[locale] ?? descriptions['fr'],
      images: [
        {
          url: '/og-image.jpg',
          width: 1200,
          height: 630,
          alt: 'Dr. Kadri Badr — Cabinet Dentaire d\'Excellence',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Dr. Kadri Badr — Excellence Dentaire Maroc',
      description: descriptions[locale] ?? descriptions['fr'],
      images: ['/og-image.jpg'],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
    },
  }
}

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode
  params: { locale: string }
}) {
  if (!locales.includes(locale as typeof locales[number])) notFound()

  const messages = await getMessages()
  const isRTL = locale === 'ar'

  return (
    <html
      lang={locale}
      dir={isRTL ? 'rtl' : 'ltr'}
      className={`${playfair.variable} ${inter.variable}`}
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Dentist',
              name: 'Dr. Kadri Badr — Cabinet Dentaire',
              image: 'https://drbadrkadri.com/og-image.jpg',
              url: 'https://drbadrkadri.com',
              telephone: '+212666686646',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'Fès',
                addressLocality: 'Fès',
                addressCountry: 'MA',
              },
              geo: {
                '@type': 'GeoCoordinates',
                latitude: 34.0181,
                longitude: -5.0078,
              },
              openingHoursSpecification: [
                {
                  '@type': 'OpeningHoursSpecification',
                  dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'],
                  opens: '09:00',
                  closes: '20:00',
                },
              ],
              priceRange: '$$',
              medicalSpecialty: 'Dentistry',
              availableService: [
                'Dental Implants', 'Veneers', 'Hollywood Smile',
                'Teeth Whitening', 'Smile Design', 'Emergency Dental Care',
              ],
              aggregateRating: {
                '@type': 'AggregateRating',
                ratingValue: '4.9',
                reviewCount: '500',
              },
              sameAs: ['https://drbadrkadri.com'],
            }),
          }}
        />
      </head>
      <body className="bg-cream-50 text-navy-900 antialiased overflow-x-hidden">
        <NextIntlClientProvider messages={messages}>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <FloatingActions />
          <StickyBookBar />
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
