'use client'

import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import { Star, ShieldCheck } from 'lucide-react'

const brands = [
  'Nobel Biocare',
  'Straumann',
  'Ivoclar EMAX',
  'CEREC',
  'CE',
  'ISO 9001',
]

const GoogleG = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5">
    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"/>
    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
  </svg>
)

export default function TrustStrip() {
  const t = useTranslations('trust')

  return (
    <section className="relative bg-white border-y border-gray-100 py-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Heading + brands */}
          <div className="flex-1 text-center lg:text-left">
            <p className="text-navy-400 text-xs font-semibold tracking-widest uppercase mb-5">
              {t('title')}
            </p>
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-8 gap-y-4">
              {brands.map((brand, i) => (
                <motion.span
                  key={brand}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  className="font-playfair text-lg md:text-xl font-semibold
                             text-navy-300 hover:text-navy-700 transition-colors duration-300
                             grayscale hover:grayscale-0 cursor-default select-none"
                >
                  {brand}
                </motion.span>
              ))}
            </div>
          </div>

          {/* Google rating badge */}
          <motion.a
            href="https://www.google.com/search?q=Dr+Kadri+Badr+Cabinet+Dentaire+Fès"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ y: -3 }}
            className="flex items-center gap-3 bg-cream-50 border border-gray-200
                       rounded-2xl px-5 py-3 shadow-glass hover:shadow-card-hover
                       transition-all duration-300 flex-shrink-0"
          >
            <GoogleG />
            <div className="text-left">
              <div className="flex items-center gap-1">
                <span className="font-bold text-navy-900 text-lg leading-none">4.9</span>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-gold-400 text-gold-400" />
                  ))}
                </div>
              </div>
              <p className="text-navy-500 text-xs mt-0.5">{t('reviews')}</p>
            </div>
          </motion.a>
        </div>
      </div>
    </section>
  )
}
