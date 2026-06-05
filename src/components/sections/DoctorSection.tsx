'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { CheckCircle2, Award, Play } from 'lucide-react'
import CountUp from '@/components/ui/CountUp'

const doctorStats = [
  { end: 2000, suffix: '+', decimals: 0, key: 'stat_1' },
  { end: 500, suffix: '+', decimals: 0, key: 'stat_2' },
  { end: 99, suffix: '%', decimals: 0, key: 'stat_3' },
]

const VIDEO_ID = 'VOTRE_VIDEO_YOUTUBE_ID'

export default function DoctorSection() {
  const t = useTranslations('doctor')
  const th = useTranslations('hero')
  const [videoPlaying, setVideoPlaying] = useState(false)

  return (
    <section id="doctor" className="py-24 lg:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — image */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            {/* Main portrait */}
            <div className="relative rounded-3xl overflow-hidden aspect-[3/4] max-w-md mx-auto
                            shadow-luxury">
              <Image
                src="/images/photo2.jpeg"
                alt="Dr. Kadri Badr — Chirurgien Dentiste, Fès"
                fill
                sizes="(max-width: 768px) 100vw, 450px"
                className="object-cover object-center"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t
                              from-navy-900/80 via-transparent to-transparent" />

              {/* Name overlay */}
              <div className="absolute bottom-0 inset-x-0 p-6">
                <h3 className="font-playfair text-2xl font-bold text-white">
                  {t('name')}
                </h3>
                <p className="text-gold-400 text-sm font-medium mt-1">
                  {t('title')}
                </p>
              </div>
            </div>

            {/* Floating badge */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -right-4 top-12 glass-white rounded-2xl
                         px-4 py-3 shadow-luxury border border-gold-200/30"
            >
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-gold-500" />
                <div>
                  <p className="text-navy-900 font-bold text-sm">Certifié</p>
                  <p className="text-navy-600 text-xs">International</p>
                </div>
              </div>
            </motion.div>

            {/* Stats floating card */}
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="absolute -left-4 bottom-24 glass-white rounded-2xl
                         px-4 py-3 shadow-luxury border border-gold-200/30"
            >
              <div className="text-center">
                <p className="font-playfair text-2xl font-bold text-gold-500">15+</p>
                <p className="text-navy-600 text-xs">Années d'excellence</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right — content */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-6"
          >
            <div>
              <span className="section-badge mb-4">
                <Award className="w-3 h-3" />
                {t('badge')}
              </span>
              <h2 className="heading-lg text-navy-900 mt-4 mb-2">
                {t('name')}
              </h2>
              <p className="text-gold-600 font-semibold text-lg">
                {t('title')}
              </p>
            </div>

            <div className="divider-gold" />

            <p className="body-md text-navy-600 leading-relaxed">
              {t('bio')}
            </p>

            {/* Credentials */}
            <div className="space-y-3">
              {[1, 2, 3, 4].map((n) => (
                <motion.div
                  key={n}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: n * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-trust flex-shrink-0" />
                  <span className="text-navy-700 text-sm font-medium">
                    {t(`credentials_${n}` as any)}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              {doctorStats.map((stat, i) => (
                <motion.div
                  key={stat.key}
                  initial={{ opacity: 0, y: 20, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="text-center p-4 bg-cream-100 rounded-2xl border border-gray-100"
                >
                  <div className="font-playfair text-3xl font-bold text-navy-900">
                    <CountUp end={stat.end} suffix={stat.suffix} decimals={stat.decimals} />
                  </div>
                  <div className="text-navy-500 text-xs mt-1 leading-tight">
                    {t(stat.key as any)}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <a href="#contact" className="btn-gold">
                {th('cta_book')}
              </a>
              <a
                href={`https://wa.me/212666686646`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline bg-navy-900 border-navy-800 hover:bg-navy-800 text-white"
              >
                WhatsApp
              </a>
            </div>
          </motion.div>
        </div>

        {/* Video section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-20"
        >
          <div className="text-center mb-8">
            <h3 className="heading-sm text-navy-900 mb-2">
              Le Dr. Kadri Badr vous parle
            </h3>
            <p className="text-navy-500 text-sm">
              2 minutes pour comprendre notre approche et votre future transformation
            </p>
          </div>

          <div className="relative rounded-3xl overflow-hidden shadow-luxury
                          bg-navy-900 aspect-video max-w-4xl mx-auto">
            {!videoPlaying ? (
              /* Thumbnail + play button */
              <div className="relative w-full h-full">
                <Image
                  src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1280&q=90"
                  alt="Vidéo Dr. Kadri Badr"
                  fill
                  className="object-cover opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 to-navy-900/30" />

                {/* Play button */}
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
                  <motion.button
                    onClick={() => setVideoPlaying(true)}
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-20 h-20 bg-gold-500 hover:bg-gold-400 rounded-full
                               flex items-center justify-center shadow-luxury-gold
                               transition-colors"
                    aria-label="Lancer la vidéo"
                  >
                    <Play className="w-8 h-8 text-white fill-white ml-1" />
                  </motion.button>
                  <div className="text-center">
                    <p className="text-white font-semibold">
                      Dr. Kadri Badr — Message personnel
                    </p>
                    <p className="text-white/60 text-sm">Durée : 1 min 30</p>
                  </div>
                </div>
              </div>
            ) : (
              <iframe
                src={`https://www.youtube.com/embed/${VIDEO_ID}?autoplay=1&rel=0&modestbranding=1`}
                title="Dr. Kadri Badr — Cabinet Dentaire Fès"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            )}
          </div>

          <p className="text-center text-navy-400 text-xs mt-4">
            Remplacez <code className="bg-navy-100 px-1 rounded">VOTRE_VIDEO_YOUTUBE_ID</code> dans{' '}
            <code className="bg-navy-100 px-1 rounded">DoctorSection.tsx</code> par l&apos;ID de votre vidéo YouTube
          </p>
        </motion.div>
      </div>
    </section>
  )
}
