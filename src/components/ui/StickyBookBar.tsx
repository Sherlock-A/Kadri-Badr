'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTranslations } from 'next-intl'
import { Calendar, Phone } from 'lucide-react'

export default function StickyBookBar() {
  const t = useTranslations('common')
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          className="fixed bottom-0 inset-x-0 z-40 bg-navy-900/95
                     backdrop-blur-xl border-t border-white/10
                     px-4 py-3 md:hidden"
        >
          <div className="flex gap-3 max-w-sm mx-auto">
            <a
              href="tel:+212666686646"
              className="flex-1 flex items-center justify-center gap-2
                         bg-white/10 text-white rounded-xl py-3 text-sm font-medium
                         hover:bg-white/20 transition-colors"
            >
              <Phone className="w-4 h-4" />
              {t('call')}
            </a>
            <a
              href="#contact"
              className="flex-[2] btn-gold justify-center py-3 text-sm"
            >
              <Calendar className="w-4 h-4" />
              {t('book_now')}
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
