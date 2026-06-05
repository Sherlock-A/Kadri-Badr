'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useTranslations, useLocale } from 'next-intl'
import Image from 'next/image'
import { Calendar, ChevronDown, Shield, Star } from 'lucide-react'
import CountUp from '@/components/ui/CountUp'

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
)

const stats = [
  { key: 'stats_patients', end: 2000, suffix: '+', decimals: 0 },
  { key: 'stats_experience', end: 15, suffix: '+', decimals: 0 },
  { key: 'stats_countries', end: 30, suffix: '+', decimals: 0 },
  { key: 'stats_rating', end: 4.9, suffix: '★', decimals: 1 },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15, delayChildren: 0.3 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 40, filter: 'blur(8px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
  },
}

export default function HeroSection() {
  const t = useTranslations('hero')
  const locale = useLocale()
  const heroRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  })

  const bgY      = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const opacity  = useTransform(scrollYProgress, [0, 0.6], [1, 0])
  const scale    = useTransform(scrollYProgress, [0, 1], [1, 1.08])
  const textY    = useTransform(scrollYProgress, [0, 1], ['0%', '-15%'])

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-navy-900"
    >
      {/* Parallax background */}
      <motion.div
        style={{ y: bgY, scale }}
        className="absolute inset-0 z-0"
      >
        {/* Gradient base */}
        <div className="absolute inset-0 bg-gradient-to-br from-navy-950 via-navy-900 to-[#1a3a7d]" />

        {/* Ken Burns animated background — premium cinema effect */}
        <motion.div
          className="absolute inset-0 opacity-40"
          animate={{
            scale: [1, 1.1, 1.05, 1],
            x: ['0%', '-1.5%', '1%', '0%'],
            y: ['0%', '0.5%', '-0.5%', '0%'],
          }}
          transition={{
            duration: 22,
            ease: 'easeInOut',
            repeat: Infinity,
            repeatType: 'mirror',
          }}
        >
          <Image
            src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1920&q=90"
            alt="Cabinet dentaire Dr. Kadri Badr"
            fill
            priority
            className="object-cover"
          />
        </motion.div>

        {/* Cinematic overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950/85 via-navy-900/50 to-navy-950/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-transparent to-navy-950/20" />

        {/* Grid pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-20" />
      </motion.div>

      {/* Content */}
      <motion.div
        style={{ y: textY, opacity }}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16"
      >
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[85vh]">
          {/* Left — text */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col gap-6"
          >
            {/* Trust micro-bar — above fold, first thing seen */}
            <motion.div variants={itemVariants}>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-6">
                {[
                  { v: '4.9★', l: 'Google' },
                  { v: '2 000+', l: 'Patients' },
                  { v: '30', l: 'Nationalités' },
                  { v: 'Nobel Biocare', l: 'Certifié' },
                ].map((item) => (
                  <div key={item.l} className="flex items-center gap-1.5">
                    <span className="text-gold-400 font-semibold text-sm">{item.v}</span>
                    <span className="text-white/40 text-xs">{item.l}</span>
                    <span className="text-white/20 text-xs hidden sm:block">·</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Badge */}
            <motion.div variants={itemVariants}>
              <span className="section-badge-white">
                <Shield className="w-3 h-3 text-gold-400" />
                {t('badge')}
              </span>
            </motion.div>

            {/* Headline — emotional + specific */}
            <motion.div variants={itemVariants}>
              <h1 className="heading-xl text-white mt-4">
                {t('headline_1')}{' '}
                <br />
                <span className="text-gold-gradient text-glow-gold">
                  {t('headline_2')}
                </span>
              </h1>
            </motion.div>

            {/* Value proposition — savings callout */}
            <motion.div variants={itemVariants}>
              <div className="inline-flex items-center gap-3 bg-trust/15 border border-trust/30
                              rounded-2xl px-4 py-2.5">
                <span className="text-trust font-bold text-base">Économisez jusqu'à 70%</span>
                <span className="text-white/50 text-xs">vs tarifs européens</span>
              </div>
            </motion.div>

            {/* Subtext */}
            <motion.p
              variants={itemVariants}
              className="body-lg text-white/60 max-w-lg -mt-1"
            >
              {t('subtext')}
            </motion.p>

            {/* CTAs — WhatsApp primary */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-3 pt-2"
            >
              <a
                href={`https://wa.me/212666686646?text=${encodeURIComponent('Bonjour Dr. Kadri Badr, je souhaite une consultation gratuite.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp text-base px-7 py-4 shadow-lg"
              >
                <WhatsAppIcon />
                {t('cta_whatsapp')}
              </a>
              <a href="#contact" className="btn-outline">
                <Calendar className="w-4 h-4" />
                {t('cta_book')}
              </a>
            </motion.div>

            {/* Trust strip + response time */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center gap-5 pt-2"
            >
              {/* Avatars + rating */}
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full bg-gradient-to-br
                                 from-gold-300 to-gold-600 border-2 border-navy-900"
                    />
                  ))}
                </div>
                <div className="flex flex-col">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-gold-400 text-gold-400" />
                    ))}
                  </div>
                  <span className="text-white/60 text-xs">{t('trust_count')}</span>
                </div>
              </div>

              {/* Response time badge */}
              <div className="flex items-center gap-2 bg-white/8 border border-white/15
                              rounded-xl px-3 py-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full
                                   rounded-full bg-trust opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-trust" />
                </span>
                <span className="text-white/70 text-xs font-medium">
                  Répond en moins d&apos;1h
                </span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right — stats + card */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:flex flex-col gap-5"
          >
            {/* Appointment card */}
            <div className="glass rounded-3xl p-6 border border-white/15 shadow-luxury">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gold-500/20 rounded-2xl flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-gold-400" />
                </div>
                <div>
                  <p className="text-white text-sm font-semibold">{t('card.title')}</p>
                  <p className="text-white/50 text-xs">{t('card.subtitle')}</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3 mb-4">
                {[
                  { label: t('card.implants'), price: t('card.implants_price') },
                  { label: t('card.veneers'), price: t('card.veneers_price') },
                  { label: t('card.whitening'), price: t('card.whitening_price') },
                  { label: t('card.smile'), price: t('card.smile_price') },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="bg-white/8 rounded-xl p-3"
                  >
                    <p className="text-gold-400 text-xs font-semibold">{item.label}</p>
                    <p className="text-white/80 text-xs mt-0.5">{item.price}</p>
                  </div>
                ))}
              </div>
              <a href="#contact" className="btn-gold w-full justify-center text-sm">
                {t('cta_free')}
              </a>
              <div className="flex items-center justify-center gap-2 mt-3">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-trust opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-trust" />
                </span>
                <span className="text-white/60 text-xs">{t('card.urgency')}</span>
              </div>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-3">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.key}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + i * 0.1 }}
                  className="glass rounded-2xl p-4 border border-white/10 text-center"
                >
                  <div className="font-playfair text-3xl font-bold text-gold-400">
                    <CountUp end={stat.end} suffix={stat.suffix} decimals={stat.decimals} />
                  </div>
                  <div className="text-white/60 text-xs mt-1">
                    {t(stat.key as keyof ReturnType<typeof t>)}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Mobile stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="lg:hidden grid grid-cols-4 gap-3 mt-8"
        >
          {stats.map((stat) => (
            <div key={stat.key} className="text-center">
              <div className="font-playfair text-2xl font-bold text-gold-400">
                <CountUp end={stat.end} suffix={stat.suffix} decimals={stat.decimals} />
              </div>
              <div className="text-white/60 text-[10px] mt-0.5 leading-tight">
                {t(stat.key as keyof ReturnType<typeof t>)}
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-2 text-white/40"
        >
          <span className="text-xs tracking-widest uppercase">{t('scroll')}</span>
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </motion.div>
    </section>
  )
}
