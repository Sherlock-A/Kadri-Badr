'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { ArrowRight, Clock } from 'lucide-react'

// Vraies transformations dentaires — sources libres vérifiées visuellement
// Wikimedia Commons (CC BY-SA) + YouTube thumbnails (fair use)
// À remplacer par les vrais patients du Dr. Kadri Badr
const cases = [
  {
    key: 'case_1',
    durKey: 'dur_1',
    label: 'Facettes EMAX',
    // Wikimedia Commons CC BY-SA — vraie transformation facettes (jaune→blanc)
    // Haut = avant | Bas = après
    combined: 'https://upload.wikimedia.org/wikipedia/commons/9/92/Faccette_estetiche_confronto_prima_e_dopo.jpg',
    layout: 'vertical', // haut=avant, bas=après
    source: 'Wikimedia Commons · CC BY-SA',
  },
  {
    key: 'case_2',
    durKey: 'dur_2',
    label: 'Reconstruction complète',
    // Wikimedia Commons — smile makeover patient phobia (4 phases cliniques)
    combined: 'https://upload.wikimedia.org/wikipedia/commons/7/7e/Smile_Makeover_of_a_Dental_Phobia_patient.jpg',
    layout: 'grid', // grille 2x2 de phases
    source: 'Wikimedia Commons · CC BY-SA',
  },
  {
    key: 'case_3',
    durKey: 'dur_3',
    label: 'Implants Maroc',
    // YouTube thumbnail — vraie procédure implant Maroc (Prof. BenKhadra Imad)
    combined: 'https://i.ytimg.com/vi/QbuAhvz33NY/hqdefault.jpg',
    layout: 'single', // photo résultat seule
    source: 'Real Case Morocco · YouTube',
  },
]

interface CaseCardProps {
  c: typeof cases[0]
  active: boolean
  onClick: () => void
  t: ReturnType<typeof useTranslations>
  index: number
}

function CaseCard({ c, active, onClick, t, index }: CaseCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15 }}
      onClick={onClick}
      className={`cursor-pointer rounded-3xl overflow-hidden shadow-glass
                  transition-all duration-400 group
                  ${active ? 'ring-2 ring-gold-500 shadow-luxury-gold' : 'hover:-translate-y-1'}`}
    >
      {/* Image container */}
      <div className="relative aspect-[4/5] bg-navy-100">
        <Image
          src={c.combined}
          alt={`${c.label} — transformation dentaire`}
          fill
          className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
          sizes="(max-width: 768px) 100vw, 33vw"
        />

        {/* Divider with labels — only for vertical layout */}
        {c.layout === 'vertical' && (
          <>
            <div className="absolute top-4 left-4 bg-navy-900/85 backdrop-blur-sm
                            text-white text-xs font-bold px-3 py-1.5 rounded-lg tracking-wider uppercase">
              Avant
            </div>
            <div className="absolute top-1/2 inset-x-0 h-0.5 bg-white/70 pointer-events-none" />
            <div className="absolute top-1/2 left-4 translate-y-2
                            bg-trust/90 backdrop-blur-sm
                            text-white text-xs font-bold px-3 py-1.5 rounded-lg tracking-wider uppercase">
              Après
            </div>
          </>
        )}

        {/* Grid layout overlay */}
        {c.layout === 'grid' && (
          <>
            <div className="absolute top-4 left-4 bg-navy-900/85 backdrop-blur-sm
                            text-white text-xs font-bold px-3 py-1.5 rounded-lg">
              Avant traitement
            </div>
            <div className="absolute bottom-4 right-4 bg-trust/90 backdrop-blur-sm
                            text-white text-xs font-bold px-3 py-1.5 rounded-lg">
              Résultat final
            </div>
          </>
        )}

        {/* Single result overlay */}
        {c.layout === 'single' && (
          <div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 to-transparent">
            <div className="absolute bottom-4 left-4 right-4">
              <span className="bg-trust/90 text-white text-xs font-bold px-3 py-1.5 rounded-lg">
                Cas réel Maroc · Résultat implants
              </span>
            </div>
          </div>
        )}

        {/* Source badge */}
        <div className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm
                        text-navy-600 text-[10px] px-2 py-1 rounded-lg font-medium">
          {c.source}
        </div>
      </div>

      {/* Card footer */}
      <div className="p-4 bg-white">
        <div className="flex items-center justify-between">
          <div>
            <p className="font-semibold text-navy-900 text-sm">{c.label}</p>
            <p className="text-navy-400 text-xs flex items-center gap-1 mt-0.5">
              <Clock className="w-3 h-3" />
              {t(c.durKey as any)}
            </p>
          </div>
          <span className={`text-xs font-semibold px-3 py-1.5 rounded-full transition-colors
                            ${active
                              ? 'bg-gold-500 text-white'
                              : 'bg-navy-50 text-navy-600 group-hover:bg-navy-900 group-hover:text-white'}`}>
            Voir →
          </span>
        </div>
      </div>
    </motion.div>
  )
}

export default function BeforeAfterSection() {
  const t = useTranslations('results')
  const [activeCase, setActiveCase] = useState(0)

  return (
    <section id="results" className="py-24 lg:py-32 bg-cream-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-14">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-badge mb-4 inline-flex"
          >
            {t('badge')}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="heading-lg text-navy-900 mb-3"
          >
            {t('title')}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="body-md text-navy-600 max-w-xl mx-auto mb-3"
          >
            {t('subtitle')}
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-xs text-navy-400 italic"
          >
            Transformations d&apos;autres praticiens · Les vraies photos du Dr. Kadri Badr arrivent prochainement
          </motion.p>
        </div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {cases.map((c, i) => (
            <CaseCard
              key={c.key}
              c={c}
              active={activeCase === i}
              onClick={() => setActiveCase(i)}
              t={t}
              index={i}
            />
          ))}
        </div>

        {/* Expanded view of selected case */}
        <motion.div
          key={activeCase}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-3xl p-6 shadow-glass"
        >
          <div className="grid lg:grid-cols-2 gap-6 items-center">
            <div className="relative aspect-video rounded-2xl overflow-hidden">
              <Image
                src={cases[activeCase].combined}
                alt={cases[activeCase].label}
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div>
              <span className="section-badge mb-4 inline-flex">
                Cas n°{activeCase + 1} — {cases[activeCase].label}
              </span>
              <h3 className="heading-sm text-navy-900 mb-2">{t(cases[activeCase].key as any)}</h3>
              <p className="text-navy-500 text-sm mb-1 flex items-center gap-2">
                <Clock className="w-4 h-4 text-gold-500" />
                {t('duration_label')} : {t(cases[activeCase].durKey as any)}
              </p>
              <p className="text-navy-400 text-xs mb-6 italic">
                Source : {cases[activeCase].source}
              </p>
              <a
                href="#contact"
                className="btn-gold"
              >
                {t('cta_similar')}
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
