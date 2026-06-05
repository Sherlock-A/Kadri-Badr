'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useTranslations, useLocale } from 'next-intl'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Phone, Menu, X, Globe } from 'lucide-react'
import Logo from '@/components/ui/Logo'

const localeLabels = { fr: 'FR', en: 'EN', ar: 'ع' }
const localeNames = { fr: 'Français', en: 'English', ar: 'العربية' }

export default function Navbar() {
  const t = useTranslations('nav')
  const locale = useLocale()
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [langOpen, setLangOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const switchLocale = (newLocale: string) => {
    const segments = pathname.split('/')
    segments[1] = newLocale
    window.location.href = segments.join('/')
    setLangOpen(false)
  }

  const navLinks = [
    { href: '#services',       label: t('services') },
    { href: '#doctor',         label: t('doctor') },
    { href: '#international',  label: t('international') },
    { href: '#results',        label: t('results') },
    { href: '#contact',        label: t('contact') },
  ]

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-navy-900/95 backdrop-blur-xl border-b border-white/10 shadow-luxury'
            : 'bg-transparent'
        }`}
        style={{ height: 'var(--navbar-height)' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between gap-4">
          {/* Logo */}
          <Link href={`/${locale}`} className="flex-shrink-0 group">
            <motion.div whileHover={{ scale: 1.03 }} className="flex items-center">
              <Logo variant="light" priority className="h-11 w-auto" />
            </motion.div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-white/75 hover:text-white text-sm font-medium tracking-wide
                           transition-colors duration-200 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold-500
                                 group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-3">
            {/* Language picker */}
            <div className="relative">
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="flex items-center gap-1.5 text-white/70 hover:text-white
                           text-sm font-medium transition-colors duration-200 p-2"
                aria-label="Change language"
              >
                <Globe className="w-4 h-4" />
                <span className="hidden sm:block">{localeLabels[locale as keyof typeof localeLabels]}</span>
              </button>
              <AnimatePresence>
                {langOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -8, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -8, scale: 0.96 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full mt-2 right-0 w-36 glass-dark rounded-xl
                               border border-white/10 shadow-luxury overflow-hidden"
                  >
                    {(['fr', 'en', 'ar'] as const).map((l) => (
                      <button
                        key={l}
                        onClick={() => switchLocale(l)}
                        className={`w-full text-left px-4 py-2.5 text-sm transition-colors
                                   ${l === locale
                                     ? 'text-gold-500 bg-white/10'
                                     : 'text-white/70 hover:text-white hover:bg-white/5'
                                   } ${l === 'ar' ? 'text-right' : ''}`}
                      >
                        {localeNames[l]}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Phone */}
            <a
              href="tel:+212666686646"
              className="hidden md:flex items-center gap-2 text-white/75
                         hover:text-white text-sm transition-colors duration-200"
            >
              <Phone className="w-4 h-4 text-gold-500" />
              <span>+212 6 66 68 66 46</span>
            </a>

            {/* Book CTA */}
            <a
              href="#contact"
              className="btn-gold text-sm px-5 py-2.5 hidden sm:inline-flex"
            >
              {t('book')}
            </a>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden text-white p-2"
              aria-label="Menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 bg-navy-950 lg:hidden pt-20"
          >
            <div className="flex flex-col gap-2 p-6">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07 }}
                  onClick={() => setMobileOpen(false)}
                  className="text-white text-2xl font-playfair font-medium py-3
                             border-b border-white/10 hover:text-gold-400 transition-colors"
                >
                  {link.label}
                </motion.a>
              ))}
              <div className="mt-6 flex flex-col gap-3">
                <a href="tel:+212666686646" className="btn-navy w-full justify-center">
                  <Phone className="w-4 h-4" /> +212 6 66 68 66 46
                </a>
                <a
                  href={`https://wa.me/212666686646`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp w-full justify-center"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Backdrop */}
      {(langOpen || mobileOpen) && (
        <div
          className="fixed inset-0 z-30"
          onClick={() => { setLangOpen(false); setMobileOpen(false) }}
        />
      )}
    </>
  )
}
