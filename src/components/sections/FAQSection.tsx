'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTranslations } from 'next-intl'
import { Plus, Minus, HelpCircle } from 'lucide-react'

const faqKeys = ['1', '2', '3', '4', '5'] as const

export default function FAQSection() {
  const t = useTranslations('faq')
  const [open, setOpen] = useState<string | null>('1')

  return (
    <section id="faq" className="py-24 lg:py-32 bg-cream-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="section-badge mb-4">
              <HelpCircle className="w-3 h-3" />
              FAQ
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="heading-md text-navy-900 mb-3"
          >
            {t('title')}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="body-md text-navy-600"
          >
            {t('subtitle')}
          </motion.p>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {faqKeys.map((key, i) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className={`rounded-2xl border transition-all duration-300
                         ${open === key
                           ? 'bg-navy-900 border-navy-700 shadow-luxury'
                           : 'bg-white border-gray-200 hover:border-navy-300'
                         }`}
            >
              <button
                onClick={() => setOpen(open === key ? null : key)}
                className="w-full text-left px-6 py-5 flex items-center justify-between gap-4"
              >
                <span className={`font-semibold text-base transition-colors
                                  ${open === key ? 'text-white' : 'text-navy-900'}`}>
                  {t(`q${key}` as any)}
                </span>
                <span className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center
                                  transition-colors
                                  ${open === key
                                    ? 'bg-gold-500/20 text-gold-400'
                                    : 'bg-gray-100 text-navy-600'
                                  }`}>
                  {open === key
                    ? <Minus className="w-4 h-4" />
                    : <Plus className="w-4 h-4" />
                  }
                </span>
              </button>

              <AnimatePresence initial={false}>
                {open === key && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5 text-white/70 text-sm leading-relaxed">
                      {t(`a${key}` as any)}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-10"
        >
          <p className="text-navy-600 text-sm mb-4">
            {t('more_questions')}
          </p>
          <a
            href={`https://wa.me/212666686646?text=${encodeURIComponent('Bonjour, j\'ai une question sur vos soins.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp inline-flex"
          >
            Posez votre question sur WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  )
}
