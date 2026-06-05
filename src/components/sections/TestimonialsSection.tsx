'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTranslations } from 'next-intl'
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import CountUp from '@/components/ui/CountUp'

const testimonialKeys = ['t1', 't2', 't3', 't4'] as const

export default function TestimonialsSection() {
  const t = useTranslations('testimonials')
  const [active, setActive] = useState(0)

  const prev = () => setActive((a) => (a === 0 ? testimonialKeys.length - 1 : a - 1))
  const next = () => setActive((a) => (a === testimonialKeys.length - 1 ? 0 : a + 1))

  return (
    <section id="testimonials" className="py-24 lg:py-32 bg-navy-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-15" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="section-badge-white mb-4">
              <Star className="w-3 h-3 text-gold-400 fill-gold-400" />
              {t('badge')}
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="heading-lg text-white mb-3"
          >
            {t('title')}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="body-md text-white/60 max-w-xl mx-auto"
          >
            {t('subtitle')}
          </motion.p>
        </div>

        {/* Desktop — all cards */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {testimonialKeys.map((key, i) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="glass-card p-6 flex flex-col gap-4"
            >
              {/* Stars */}
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-gold-400 text-gold-400" />
                ))}
              </div>

              {/* Quote */}
              <Quote className="w-6 h-6 text-gold-400/40" />
              <p className="text-white/80 text-sm leading-relaxed flex-1">
                {t(`${key}_text` as any)}
              </p>

              {/* Treatment tag */}
              <div className="bg-gold-500/10 border border-gold-500/20 rounded-xl px-3 py-2">
                <p className="text-gold-400 text-xs font-medium">
                  {t(`${key}_treatment` as any)}
                </p>
              </div>

              {/* Author */}
              <div className="flex items-center gap-3 pt-1 border-t border-white/10">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br
                                from-gold-400 to-gold-600 flex items-center justify-center
                                text-navy-900 font-bold text-sm">
                  {(t(`${key}_name` as any) as string).charAt(0)}
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">
                    {t(`${key}_name` as any)}
                  </p>
                  <p className="text-white/50 text-xs">
                    {t(`${key}_country` as any)}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile — carousel */}
        <div className="md:hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.4 }}
              className="glass-card p-6 mx-auto max-w-sm"
            >
              <div className="flex gap-0.5 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-gold-400 text-gold-400" />
                ))}
              </div>
              <p className="text-white/80 text-sm leading-relaxed mb-4">
                {t(`${testimonialKeys[active]}_text` as any)}
              </p>
              <div className="bg-gold-500/10 border border-gold-500/20 rounded-xl px-3 py-2 mb-4">
                <p className="text-gold-400 text-xs font-medium">
                  {t(`${testimonialKeys[active]}_treatment` as any)}
                </p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br
                                from-gold-400 to-gold-600 flex items-center justify-center
                                text-navy-900 font-bold text-sm">
                  {(t(`${testimonialKeys[active]}_name` as any) as string).charAt(0)}
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">
                    {t(`${testimonialKeys[active]}_name` as any)}
                  </p>
                  <p className="text-white/50 text-xs">
                    {t(`${testimonialKeys[active]}_country` as any)}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-white/20 text-white
                         flex items-center justify-center hover:bg-white/10 transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex gap-2">
              {testimonialKeys.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`transition-all duration-300 rounded-full
                             ${i === active ? 'w-6 h-2 bg-gold-400' : 'w-2 h-2 bg-white/30'}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-white/20 text-white
                         flex items-center justify-center hover:bg-white/10 transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Bottom trust bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-8"
        >
          {[
            { end: 4.9, suffix: '/5', decimals: 1, key: 'bar_rating' },
            { end: 500, suffix: '+', decimals: 0, key: 'bar_reviews' },
            { end: 30, suffix: '+', decimals: 0, key: 'bar_nationalities' },
            { end: 100, suffix: '%', decimals: 0, key: 'bar_recommended' },
          ].map((item) => (
            <div key={item.key} className="text-center">
              <div className="font-playfair text-2xl font-bold text-gold-400">
                <CountUp end={item.end} suffix={item.suffix} decimals={item.decimals} />
              </div>
              <div className="text-white/50 text-xs mt-1">{t(item.key as any)}</div>
            </div>
          ))}
        </motion.div>

        {/* Google review CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.55 }}
          className="mt-10 text-center"
        >
          <p className="text-white/50 text-sm mb-3">
            Vous êtes patient chez nous ? Votre avis aide des milliers de futurs patients.
          </p>
          <a
            href="https://www.google.com/search?q=Dr+Kadri+Badr+Cabinet+Dentaire+Fès&hl=fr#lrd=0x0:0x0,1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl
                       border border-white/20 text-white/70 hover:text-white
                       hover:border-gold-500/50 transition-all text-sm font-medium"
          >
            <Star className="w-4 h-4 text-gold-400 fill-gold-400" />
            Laisser un avis Google
          </a>
        </motion.div>
      </div>
    </section>
  )
}
