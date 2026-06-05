'use client'

import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import { Star } from 'lucide-react'
import { fadeUp, scaleIn, staggerFast, viewport } from '@/lib/motion'

const certifications = [
  'Nobel Biocare',
  'Straumann',
  'Ivoclar EMAX',
  'CEREC 3D',
  'CE Certifié',
  'ISO 9001',
  'Nobel Biocare',
  'Straumann',
  'Ivoclar EMAX',
  'CEREC 3D',
]

const countries = [
  { flag: '🇫🇷', name: 'France' },
  { flag: '🇧🇪', name: 'Belgique' },
  { flag: '🇨🇭', name: 'Suisse' },
  { flag: '🇩🇪', name: 'Allemagne' },
  { flag: '🇬🇧', name: 'Royaume-Uni' },
  { flag: '🇪🇸', name: 'Espagne' },
  { flag: '🇮🇹', name: 'Italie' },
  { flag: '🇸🇦', name: 'Arabie Saoudite' },
  { flag: '🇦🇪', name: 'Émirats' },
  { flag: '🇨🇦', name: 'Canada' },
]

const GoogleG = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 flex-shrink-0">
    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"/>
    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
  </svg>
)

export default function TrustStrip() {
  const t = useTranslations('trust')

  return (
    <section className="relative bg-white border-y border-gray-100 overflow-hidden">

      {/* Row 1 — countries */}
      <div className="border-b border-gray-50 py-4 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 flex-wrap">
            <span className="text-[10px] font-bold uppercase tracking-widest text-navy-400 flex-shrink-0 mr-2">
              Patients de 30 pays
            </span>
            {countries.map((c) => (
              <div key={c.name} className="flex items-center gap-1.5 group cursor-default">
                <span className="text-lg leading-none">{c.flag}</span>
                <span className="text-[11px] text-navy-400 group-hover:text-navy-700 transition-colors
                                 hidden sm:block">{c.name}</span>
              </div>
            ))}
            <span className="text-navy-300 text-xs ml-1">+20 autres</span>
          </div>
        </div>
      </div>

      {/* Row 2 — certifications + Google rating */}
      <div className="py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-6">

          {/* Certification marquee */}
          <div className="flex-1 overflow-hidden relative">
            <p className="text-[10px] font-bold uppercase tracking-widest text-navy-400 mb-3">
              {t('title')}
            </p>
            {/* Scroll mask */}
            <div className="absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

            <motion.div
              variants={staggerFast}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              className="flex items-center gap-8 flex-wrap"
            >
              {['Nobel Biocare', 'Straumann', 'Ivoclar EMAX', 'CEREC 3D', 'CE Certifié', 'ISO 9001'].map((brand, i) => (
                <motion.span
                  key={brand}
                  variants={fadeUp}
                  className="font-playfair text-lg font-bold text-navy-200
                             hover:text-navy-600 transition-colors duration-300
                             cursor-default select-none whitespace-nowrap"
                >
                  {brand}
                </motion.span>
              ))}
            </motion.div>
          </div>

          {/* Divider — desktop only */}
          <div className="hidden lg:block w-px h-12 bg-gray-100 flex-shrink-0" />

          {/* Google rating badge */}
          <motion.a
            href="https://www.google.com/search?q=Dr+Kadri+Badr+Cabinet+Dentaire+Fès"
            target="_blank"
            rel="noopener noreferrer"
            variants={scaleIn}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            whileHover={{ y: -2 }}
            className="flex items-center gap-3 bg-gray-50 border border-gray-200
                       rounded-2xl px-5 py-3 shadow-sm hover:shadow-md
                       transition-all duration-300 flex-shrink-0 group"
          >
            <GoogleG />
            <div className="text-left">
              <div className="flex items-center gap-1.5">
                <span className="font-bold text-navy-900 text-xl leading-none">4.9</span>
                <div className="flex gap-0.5">
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

