'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { useTranslations } from 'next-intl'
import {
  Shield, Sparkles, Sun, ScanLine, Layers, Clock, ArrowRight
} from 'lucide-react'

const services = [
  {
    key: 'implants',
    icon: Shield,
    price: 'dès 800 €',
    iconBg: 'bg-navy-900',
    iconColor: 'text-gold-400',
    accent: 'bg-gradient-to-r from-navy-700 to-navy-900',
    featured: true,
  },
  {
    key: 'veneers',
    icon: Sparkles,
    price: 'dès 250 € / unité',
    iconBg: 'bg-gold-500',
    iconColor: 'text-white',
    accent: 'bg-gradient-to-r from-gold-400 to-gold-600',
    featured: true,
  },
  {
    key: 'whitening',
    icon: Sun,
    price: 'dès 150 €',
    iconBg: 'bg-trust-light',
    iconColor: 'text-trust-dark',
    accent: 'bg-gradient-to-r from-trust to-trust-dark',
    featured: false,
  },
  {
    key: 'design',
    icon: ScanLine,
    price: 'Devis gratuit',
    iconBg: 'bg-navy-50',
    iconColor: 'text-navy-700',
    accent: 'bg-gradient-to-r from-navy-300 to-navy-500',
    featured: false,
  },
  {
    key: 'reconstruction',
    icon: Layers,
    price: 'Sur devis',
    iconBg: 'bg-gold-50',
    iconColor: 'text-gold-700',
    accent: 'bg-gradient-to-r from-gold-300 to-gold-500',
    featured: false,
  },
  {
    key: 'emergency',
    icon: Clock,
    price: 'Disponible 24h/24',
    iconBg: 'bg-red-50',
    iconColor: 'text-red-500',
    accent: 'bg-gradient-to-r from-red-400 to-red-600',
    featured: false,
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 32, filter: 'blur(4px)' },
  visible: {
    opacity: 1, y: 0, filter: 'blur(0px)',
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
}

interface ServiceCardProps {
  service: typeof services[0]
  t: ReturnType<typeof useTranslations>
  tc: ReturnType<typeof useTranslations>
}

function ServiceCard({ service, t, tc }: ServiceCardProps) {
  const Icon = service.icon
  return (
    <motion.a
      href="#contact"
      variants={cardVariants}
      whileHover={{ y: -6, transition: { duration: 0.25 } }}
      className="group relative flex flex-col bg-white rounded-3xl
                 border border-gray-100 shadow-sm overflow-hidden
                 hover:shadow-xl hover:border-gray-200
                 transition-all duration-400 cursor-pointer"
    >
      {/* Top section */}
      <div className="p-7 pb-5 flex-1">
        {/* Icon + Tag row */}
        <div className="flex items-start justify-between mb-6">
          <div className={`w-13 h-13 ${service.iconBg} rounded-2xl
                          flex items-center justify-center flex-shrink-0
                          group-hover:scale-110 transition-transform duration-300`}
               style={{ width: '3.25rem', height: '3.25rem' }}
          >
            <Icon className={`w-6 h-6 ${service.iconColor}`} />
          </div>
          <span className="text-[10px] font-bold uppercase tracking-widest
                           text-gold-700 bg-gold-50 border border-gold-200
                           px-3 py-1.5 rounded-full ml-3 text-right leading-none pt-2">
            {t(`${service.key}.tag` as any)}
          </span>
        </div>

        {/* Name */}
        <h3 className="font-playfair text-xl font-bold text-navy-900 mb-2.5
                       group-hover:text-navy-800 transition-colors leading-snug">
          {t(`${service.key}.name` as any)}
        </h3>

        {/* Description */}
        <p className="text-navy-500 text-sm leading-relaxed">
          {t(`${service.key}.desc` as any)}
        </p>
      </div>

      {/* Bottom — price + CTA */}
      <div className="px-7 py-4 border-t border-gray-50
                      flex items-center justify-between">
        <div>
          <p className="text-[10px] text-navy-400 uppercase tracking-wider mb-0.5">
            Tarif
          </p>
          <p className="text-navy-800 font-semibold text-sm">{service.price}</p>
        </div>
        <span className="flex items-center gap-1 text-gold-600 text-sm font-semibold
                         group-hover:gap-2.5 transition-all duration-200">
          {tc('learn_more')}
          <ArrowRight className="w-3.5 h-3.5" />
        </span>
      </div>

      {/* Accent line — slides in on hover */}
      <div className={`absolute bottom-0 inset-x-0 h-0.5 ${service.accent}
                       scale-x-0 group-hover:scale-x-100
                       transition-transform duration-500 origin-left`} />
    </motion.a>
  )
}

export default function ServicesSection() {
  const t = useTranslations('services')
  const tc = useTranslations('common')
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const featured = services.filter(s => s.featured)
  const standard = services.filter(s => !s.featured)

  return (
    <section id="services" className="py-24 lg:py-32 bg-cream-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="max-w-2xl mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="section-badge mb-5">
              <Sparkles className="w-3 h-3" />
              {t('title')}
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="heading-lg text-navy-900 mt-4 mb-4"
          >
            Tout ce dont votre{' '}
            <span className="text-gold-gradient">sourire a besoin</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="body-md text-navy-500"
          >
            {t('subtitle')}
          </motion.p>
        </div>

        {/* Featured 2 services — larger */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 gap-5 mb-5"
        >
          {featured.map((service) => (
            <motion.a
              key={service.key}
              href="#contact"
              variants={cardVariants}
              whileHover={{ y: -5, transition: { duration: 0.25 } }}
              className={`group relative overflow-hidden rounded-3xl cursor-pointer
                         ${service.key === 'implants'
                           ? 'bg-navy-900 text-white'
                           : 'bg-gold-500 text-navy-900'
                         }`}
            >
              {/* Shine */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent
                              via-white/8 to-transparent -translate-x-full
                              group-hover:translate-x-full transition-transform duration-700" />

              <div className="p-8 lg:p-10">
                <div className="flex items-start justify-between mb-8">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center
                                  ${service.key === 'implants'
                                    ? 'bg-white/10'
                                    : 'bg-navy-900/15'
                                  }`}>
                    {service.key === 'implants'
                      ? <Shield className="w-7 h-7 text-gold-400" />
                      : <Sparkles className="w-7 h-7 text-navy-900" />
                    }
                  </div>
                  <span className={`text-[10px] font-bold uppercase tracking-widest
                                   px-3 py-1.5 rounded-full border
                                   ${service.key === 'implants'
                                     ? 'bg-white/10 border-white/20 text-white/80'
                                     : 'bg-navy-900/10 border-navy-900/20 text-navy-800'
                                   }`}>
                    {t(`${service.key}.tag` as any)}
                  </span>
                </div>

                <h3 className={`font-playfair text-2xl lg:text-3xl font-bold mb-3
                                ${service.key === 'implants' ? 'text-white' : 'text-navy-900'}`}>
                  {t(`${service.key}.name` as any)}
                </h3>
                <p className={`text-sm leading-relaxed mb-8 max-w-sm
                               ${service.key === 'implants' ? 'text-white/65' : 'text-navy-700'}`}>
                  {t(`${service.key}.desc` as any)}
                </p>

                <div className="flex items-center justify-between">
                  <div>
                    <p className={`text-[10px] uppercase tracking-wider mb-0.5
                                  ${service.key === 'implants' ? 'text-white/40' : 'text-navy-500'}`}>
                      Tarif
                    </p>
                    <p className={`font-bold text-base
                                  ${service.key === 'implants' ? 'text-gold-400' : 'text-navy-900'}`}>
                      {service.price}
                    </p>
                  </div>
                  <span className={`flex items-center gap-1.5 text-sm font-semibold
                                   group-hover:gap-3 transition-all duration-200
                                   ${service.key === 'implants' ? 'text-white' : 'text-navy-900'}`}>
                    Devis gratuit <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* Standard 4 services — smaller grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {standard.map((service) => (
            <ServiceCard
              key={service.key}
              service={service}
              t={t}
              tc={tc}
            />
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center mt-14"
        >
          <p className="text-navy-400 text-sm mb-5">
            Consultation gratuite · Réponse sous 24h · Sans engagement
          </p>
          <a href="#contact" className="btn-navy">
            Obtenir mon devis personnalisé
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
