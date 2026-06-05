'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Phone, X, MessageCircle, Calendar } from 'lucide-react'
import { useTranslations } from 'next-intl'

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
)

export default function FloatingActions() {
  const t = useTranslations('common')
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)

  useEffect(() => {
    const onScroll = () => setShowScrollTop(window.scrollY > 400)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <div className="fixed bottom-24 right-5 md:bottom-6 md:right-6 z-50 flex flex-col items-end gap-3">
      {/* Expandable actions */}
      <AnimatePresence>
        {isExpanded && (
          <>
            {/* Book appointment */}
            <motion.a
              href="#contact"
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.8 }}
              transition={{ delay: 0.05 }}
              onClick={() => setIsExpanded(false)}
              className="flex items-center gap-3 bg-navy-900 text-white
                         px-4 py-3 rounded-2xl shadow-luxury
                         hover:bg-navy-800 transition-colors text-sm font-medium
                         whitespace-nowrap"
            >
              <Calendar className="w-4 h-4 text-gold-500" />
              {t('book_now')}
            </motion.a>

            {/* Phone */}
            <motion.a
              href="tel:+212666686646"
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.8 }}
              transition={{ delay: 0.1 }}
              className="flex items-center gap-3 bg-white text-navy-900
                         px-4 py-3 rounded-2xl shadow-luxury
                         hover:bg-cream-100 transition-colors text-sm font-medium
                         whitespace-nowrap"
            >
              <Phone className="w-4 h-4 text-gold-500" />
              +212 6 66 68 66 46
            </motion.a>
          </>
        )}
      </AnimatePresence>

      {/* Main WhatsApp / toggle button */}
      <div className="flex items-center gap-3">
        {/* Toggle expand */}
        <motion.button
          onClick={() => setIsExpanded(!isExpanded)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`w-12 h-12 rounded-2xl flex items-center justify-center
                      shadow-luxury transition-all duration-300
                      ${isExpanded ? 'bg-gray-600 text-white' : 'bg-white text-navy-900'}`}
          aria-label={isExpanded ? 'Close' : 'More options'}
        >
          {isExpanded ? <X className="w-5 h-5" /> : <MessageCircle className="w-5 h-5 text-gold-500" />}
        </motion.button>

        {/* WhatsApp CTA */}
        <motion.a
          href={`https://wa.me/212666686646?text=${encodeURIComponent(t('wa_message'))}`}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          animate={{ boxShadow: ['0 0 0 0 rgba(37,211,102,0.4)', '0 0 0 16px rgba(37,211,102,0)', '0 0 0 0 rgba(37,211,102,0)'] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeOut' }}
          className="w-14 h-14 bg-[#25D366] text-white rounded-2xl
                     flex items-center justify-center shadow-lg"
          aria-label="WhatsApp"
        >
          <WhatsAppIcon />
        </motion.a>
      </div>
    </div>
  )
}
