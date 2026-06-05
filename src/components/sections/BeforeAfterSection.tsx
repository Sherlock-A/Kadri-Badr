'use client'

import { useState, useRef, useCallback } from 'react'
import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { GripVertical } from 'lucide-react'

const cases = [
  {
    key: 'case_1',
    // Hollywood Smile — facettes EMAX
    before: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=900&q=90',
    after:  'https://images.unsplash.com/photo-1601758124510-52d02ddb7cbd?w=900&q=90',
    durKey: 'dur_1',
  },
  {
    key: 'case_2',
    // Implants — reconstruction complète
    before: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=900&q=90',
    after:  'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=900&q=90',
    durKey: 'dur_2',
  },
  {
    key: 'case_3',
    // Blanchiment laser
    before: 'https://images.unsplash.com/photo-1516901408151-28c77cc44aa3?w=900&q=90',
    after:  'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=900&q=90',
    durKey: 'dur_3',
  },
]

function CompareSlider({ before, after, hint }: { before: string; after: string; hint: string }) {
  const [sliderX, setSliderX] = useState(50)
  const containerRef = useRef<HTMLDivElement>(null)
  const dragging = useRef(false)

  const updateSlider = useCallback((clientX: number) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const pct = Math.max(5, Math.min(95, ((clientX - rect.left) / rect.width) * 100))
    setSliderX(pct)
  }, [])

  const onMouseDown = (e: React.MouseEvent) => {
    dragging.current = true
    const onMove = (ev: MouseEvent) => { if (dragging.current) updateSlider(ev.clientX) }
    const onUp = () => { dragging.current = false }
    document.addEventListener('mousemove', onMove)
    document.addEventListener('mouseup', onUp, { once: true })
  }

  const onTouchMove = (e: React.TouchEvent) => {
    updateSlider(e.touches[0].clientX)
  }

  return (
    <div
      ref={containerRef}
      className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden
                 cursor-ew-resize select-none touch-none"
      onMouseDown={(e) => updateSlider(e.clientX)}
    >
      {/* After image (full) */}
      <div className="absolute inset-0">
        <Image src={after} alt="After" fill className="object-cover" />
        <div className="absolute bottom-3 right-3 bg-trust/90 text-white
                        text-xs font-bold px-2 py-1 rounded-lg">
          APRÈS
        </div>
      </div>

      {/* Before image (clipped) */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ width: `${sliderX}%` }}
      >
        <div style={{ width: `${100 / (sliderX / 100)}%` }} className="h-full relative">
          <Image src={before} alt="Before" fill className="object-cover" />
        </div>
        <div className="absolute bottom-3 left-3 bg-navy-900/80 text-white
                        text-xs font-bold px-2 py-1 rounded-lg">
          AVANT
        </div>
      </div>

      {/* Divider line */}
      <div
        className="absolute top-0 bottom-0 w-0.5 bg-white shadow-lg"
        style={{ left: `${sliderX}%` }}
      >
        {/* Handle */}
        <div
          className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2
                     w-10 h-10 bg-white rounded-full shadow-luxury
                     flex items-center justify-center cursor-ew-resize
                     border-2 border-gray-100"
          onMouseDown={onMouseDown}
          onTouchMove={onTouchMove}
        >
          <GripVertical className="w-4 h-4 text-navy-600" />
        </div>
      </div>

      {/* Hint */}
      <div className="absolute top-3 left-1/2 -translate-x-1/2
                      bg-navy-900/70 backdrop-blur-sm text-white text-xs
                      px-3 py-1.5 rounded-full pointer-events-none">
        {hint}
      </div>
    </div>
  )
}

export default function BeforeAfterSection() {
  const t = useTranslations('results')
  const [activeCase, setActiveCase] = useState(0)

  return (
    <section id="results" className="py-24 lg:py-32 bg-cream-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="section-badge mb-4">
              {t('badge')}
            </span>
          </motion.div>
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
            className="body-md text-navy-600 max-w-xl mx-auto"
          >
            {t('subtitle')}
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 items-start">
          {/* Case selector */}
          <div className="lg:col-span-1 flex lg:flex-col gap-3">
            {cases.map((c, i) => (
              <motion.button
                key={c.key}
                onClick={() => setActiveCase(i)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`flex-1 lg:flex-none p-3 rounded-2xl text-left
                            transition-all duration-300 border text-sm font-medium
                            ${activeCase === i
                              ? 'bg-navy-900 text-white border-navy-900 shadow-luxury'
                              : 'bg-white text-navy-700 border-gray-200 hover:border-navy-300'
                            }`}
              >
                <span className="block font-semibold text-xs mb-0.5">
                  {t(c.key as any)}
                </span>
                <span className={`text-xs ${activeCase === i ? 'text-gold-300' : 'text-navy-500'}`}>
                  {t(c.durKey as any)}
                </span>
              </motion.button>
            ))}
          </div>

          {/* Slider */}
          <motion.div
            key={activeCase}
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-4"
          >
            <CompareSlider
              before={cases[activeCase].before}
              after={cases[activeCase].after}
              hint={t('drag_hint')}
            />

            {/* Treatment info */}
            <div className="mt-4 flex items-center justify-between">
              <div>
                <p className="font-semibold text-navy-900">{t(cases[activeCase].key as any)}</p>
                <p className="text-navy-500 text-sm">{t('duration_label')} : {t(cases[activeCase].durKey as any)}</p>
              </div>
              <a href="#contact" className="btn-gold text-sm px-5 py-2.5">
                {t('cta_similar')}
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
