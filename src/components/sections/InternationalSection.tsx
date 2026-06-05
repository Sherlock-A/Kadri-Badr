'use client'

import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import { Plane, Clock, Hotel, Award, ArrowRight } from 'lucide-react'

const savings = [
  { key: 't1', europe: '3 500–5 000 €', save: '75%' },
  { key: 't2', europe: '8 000–15 000 €', save: '70%' },
  { key: 't3', europe: '800–1 500 €', save: '65%' },
  { key: 't4', europe: '400–800 €', save: '65%' },
]

const whyItems = [
  { key: 'why_1', icon: Award },
  { key: 'why_2', icon: Clock },
  { key: 'why_3', icon: Hotel },
  { key: 'why_4', icon: Award },
]

export default function InternationalSection() {
  const t = useTranslations('international')

  return (
    <section id="international" className="py-24 lg:py-32 bg-navy-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20" />
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gold-500/30 to-transparent" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gold-500/30 to-transparent" />

      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                      w-[800px] h-[800px] rounded-full
                      bg-gradient-radial from-gold-500/5 via-transparent to-transparent
                      blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="section-badge-white mb-4">
              <Plane className="w-3 h-3 text-gold-400" />
              {t('badge')}
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="heading-lg text-white mb-4"
          >
            {t('title')}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="body-lg text-white/60 max-w-2xl mx-auto"
          >
            {t('subtitle')}
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left — savings table */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="heading-sm text-white mb-6">{t('savings_title')}</h3>
            <div className="rounded-3xl overflow-hidden border border-white/10">
              {/* Table header */}
              <div className="grid grid-cols-3 bg-white/8 px-4 py-3 text-xs font-semibold
                              text-white/50 tracking-widest uppercase">
                <span>{t('col_treatment')}</span>
                <span className="text-center">{t('savings_france')}</span>
                <span className="text-center text-gold-400">{t('savings_morocco')}</span>
              </div>
              {/* Rows */}
              {savings.map((row, i) => (
                <motion.div
                  key={row.key}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className={`grid grid-cols-3 px-4 py-4 items-center
                              ${i < savings.length - 1 ? 'border-b border-white/8' : ''}
                              hover:bg-white/5 transition-colors`}
                >
                  <span className="text-white text-sm font-medium">{t(`save_${row.key}_name` as any)}</span>
                  <span className="text-white/50 text-sm text-center line-through">
                    {row.europe}
                  </span>
                  <div className="flex flex-col items-center gap-1">
                    <span className="text-gold-400 font-bold text-sm">{t(`save_${row.key}_ma` as any)}</span>
                    <span className="bg-trust/20 text-trust text-[10px] font-bold
                                     px-2 py-0.5 rounded-full">
                      -{row.save}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-3 mt-6"
            >
              <a href="#contact" className="btn-gold flex-1 justify-center">
                {t('cta_plan')}
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href={`https://wa.me/212666686646?text=${encodeURIComponent('Bonjour, je souhaite un devis gratuit.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 flex-1 py-4 px-5
                           border border-white/20 text-white rounded-2xl
                           hover:bg-white/8 transition-all text-sm font-medium"
              >
                {t('cta_estimate')}
              </a>
            </motion.div>
          </motion.div>

          {/* Right — why Morocco */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="heading-sm text-white mb-8">{t('why_title')}</h3>
            <div className="space-y-4">
              {[1, 2, 3, 4].map((n, i) => (
                <motion.div
                  key={n}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="glass-card p-5 flex gap-4"
                >
                  <div className="w-10 h-10 bg-gold-500/15 rounded-2xl flex-shrink-0
                                  flex items-center justify-center">
                    <span className="text-gold-400 font-playfair font-bold text-lg">
                      {n}
                    </span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">
                      {t(`why_${n}_title` as any)}
                    </h4>
                    <p className="text-white/60 text-sm leading-relaxed">
                      {t(`why_${n}_desc` as any)}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Journey steps */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="mt-8 glass-card p-5"
            >
              <h4 className="text-white font-semibold mb-4 text-sm tracking-wide uppercase">
                {t('journey_title')}
              </h4>
              <div className="space-y-3">
                {[
                  { step: '01', label: t('step_1') },
                  { step: '02', label: t('step_2') },
                  { step: '03', label: t('step_3') },
                  { step: '04', label: t('step_4') },
                ].map((item) => (
                  <div key={item.step} className="flex items-center gap-4">
                    <span className="text-gold-400 font-playfair font-bold text-sm w-8">
                      {item.step}
                    </span>
                    <span className="text-white/70 text-sm">{item.label}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Financing callout */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.65 }}
              className="mt-4 p-5 rounded-2xl bg-gold-500/10 border border-gold-500/25
                         flex items-start gap-4"
            >
              <div className="w-9 h-9 rounded-xl bg-gold-500/20 flex-shrink-0
                              flex items-center justify-center text-gold-400 text-lg font-bold">
                €
              </div>
              <div>
                <p className="text-gold-300 font-semibold text-sm uppercase tracking-wider mb-1">
                  Paiement flexible
                </p>
                <p className="text-white/70 text-sm leading-relaxed">
                  30% à la réservation, solde à l'arrivée.
                  Virements SEPA et cartes bancaires européennes acceptés.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
