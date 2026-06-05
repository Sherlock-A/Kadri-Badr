'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { useTranslations } from 'next-intl'
import {
  Sparkles, Zap, Star, Layers, LifeBuoy, Settings
} from 'lucide-react'

const services = [
  {
    key: 'implants',
    icon: Settings,
    gradient: 'from-navy-800 to-navy-900',
    iconBg: 'bg-gold-500/15',
    iconColor: 'text-gold-400',
    image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=600&q=80',
  },
  {
    key: 'veneers',
    icon: Sparkles,
    gradient: 'from-[#1a3a7d] to-navy-900',
    iconBg: 'bg-gold-500/15',
    iconColor: 'text-gold-400',
    image: 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=600&q=80',
  },
  {
    key: 'whitening',
    icon: Zap,
    gradient: 'from-navy-800 to-navy-900',
    iconBg: 'bg-trust-light',
    iconColor: 'text-trust',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80',
  },
  {
    key: 'design',
    icon: Layers,
    gradient: 'from-[#1a3a7d] to-navy-900',
    iconBg: 'bg-gold-500/15',
    iconColor: 'text-gold-400',
    image: 'https://images.unsplash.com/photo-1609840112990-4265448268b4?w=600&q=80',
  },
  {
    key: 'reconstruction',
    icon: Star,
    gradient: 'from-navy-800 to-navy-900',
    iconBg: 'bg-gold-500/15',
    iconColor: 'text-gold-400',
    image: 'https://images.unsplash.com/photo-1571772996211-2f02c9727629?w=600&q=80',
  },
  {
    key: 'emergency',
    icon: LifeBuoy,
    gradient: 'from-[#1a3a7d] to-navy-900',
    iconBg: 'bg-red-500/10',
    iconColor: 'text-red-400',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&q=80',
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 50, filter: 'blur(4px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
}

export default function ServicesSection() {
  const t = useTranslations('services')
  const tc = useTranslations('common')
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="services" className="py-24 lg:py-32 bg-cream-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-badge mb-4">
              <Sparkles className="w-3 h-3" />
              Excellence
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="heading-lg text-navy-900 mb-4"
          >
            {t('title')}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="body-lg text-navy-600 max-w-2xl mx-auto"
          >
            {t('subtitle')}
          </motion.p>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="divider-gold mx-auto mt-6"
          />
        </div>

        {/* Grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.key}
                variants={cardVariants}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="service-card group"
              >
                {/* Card top — dark gradient */}
                <div className={`relative h-44 bg-gradient-to-br ${service.gradient} overflow-hidden`}>
                  {/* Background image */}
                  <div
                    className="absolute inset-0 bg-cover bg-center opacity-20
                                group-hover:opacity-30 group-hover:scale-105
                                transition-all duration-700"
                    style={{
                      backgroundImage: `url(${service.image})`,
                    }}
                  />
                  {/* Tag */}
                  <div className="absolute top-4 right-4">
                    <span className="bg-gold-500/20 text-gold-400 text-[10px] font-semibold
                                     tracking-widest uppercase px-3 py-1 rounded-full
                                     border border-gold-500/30">
                      {t(`${service.key}.tag` as any)}
                    </span>
                  </div>
                  {/* Icon */}
                  <div className="absolute bottom-4 left-5">
                    <div className={`w-12 h-12 ${service.iconBg} rounded-2xl
                                    flex items-center justify-center
                                    group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className={`w-6 h-6 ${service.iconColor}`} />
                    </div>
                  </div>
                  {/* Shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent
                                  via-white/5 to-transparent -translate-x-full
                                  group-hover:translate-x-full transition-transform duration-700" />
                </div>

                {/* Card body */}
                <div className="p-6">
                  <h3 className="font-playfair text-xl font-bold text-navy-900 mb-2">
                    {t(`${service.key}.name` as any)}
                  </h3>
                  <p className="text-navy-600 text-sm leading-relaxed mb-4">
                    {t(`${service.key}.desc` as any)}
                  </p>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1.5 text-gold-600
                               text-sm font-semibold hover:gap-3 transition-all duration-200"
                  >
                    {tc('learn_more')}
                    <span className="text-base">→</span>
                  </a>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <a href="#contact" className="btn-navy">
            <Calendar className="w-4 h-4" />
            {tc('free_consultation')}
          </a>
        </motion.div>
      </div>
    </section>
  )
}

function Calendar({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
         strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
         className={className}>
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  )
}
