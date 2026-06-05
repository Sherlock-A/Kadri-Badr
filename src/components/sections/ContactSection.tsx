'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import { Phone, MapPin, Clock, CheckCircle2, Send, MessageSquare } from 'lucide-react'

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
)

type FormData = {
  name: string
  country: string
  phone: string
  treatment: string
  message: string
}

export default function ContactSection() {
  const t = useTranslations('contact')
  const [form, setForm] = useState<FormData>({
    name: '', country: '', phone: '', treatment: '', message: ''
  })
  const [status, setStatus] = useState<'idle' | 'sending' | 'success'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    // Simulate submission — replace with actual API call
    await new Promise(r => setTimeout(r, 1200))
    setStatus('success')

    // Auto-redirect to WhatsApp with pre-filled message
    const msg = encodeURIComponent(
      `Bonjour Dr. Kadri Badr,\n\nNom: ${form.name}\nPays: ${form.country}\nTél: ${form.phone}\nTraitement: ${form.treatment}\n\n${form.message}`
    )
    setTimeout(() => {
      window.open(`https://wa.me/212666686646?text=${msg}`, '_blank')
    }, 800)
  }

  const inputCls = `w-full px-4 py-3.5 rounded-xl border border-gray-200
                   bg-white text-navy-900 placeholder-navy-400
                   focus:outline-none focus:border-gold-400 focus:ring-2 focus:ring-gold-400/20
                   transition-all duration-200 text-sm`

  return (
    <section id="contact" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="section-badge mb-4">
              <MessageSquare className="w-3 h-3" />
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

        <div className="grid lg:grid-cols-5 gap-10 items-start">
          {/* Left — contact info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2 space-y-6"
          >
            {/* Info cards */}
            {[
              { icon: Phone, label: t('phone_direct'), value: '+212 6 66 68 66 46', href: 'tel:+212666686646' },
              { icon: MapPin, label: t('label_address'), value: t('address'), href: '#' },
              { icon: Clock, label: t('label_hours'), value: t('hours'), href: '#' },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="flex items-start gap-4 p-4 bg-cream-100 rounded-2xl
                           hover:bg-cream-200 transition-colors group"
              >
                <div className="w-10 h-10 bg-navy-900 rounded-xl flex items-center justify-center
                                flex-shrink-0 group-hover:bg-gold-500 transition-colors">
                  <item.icon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-navy-500 text-xs font-medium uppercase tracking-wide">
                    {item.label}
                  </p>
                  <p className="text-navy-900 font-semibold text-sm mt-0.5">
                    {item.value}
                  </p>
                </div>
              </a>
            ))}

            {/* WhatsApp CTA */}
            <a
              href={`https://wa.me/212666686646?text=${encodeURIComponent('Bonjour Dr. Kadri Badr, je souhaite une consultation.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp w-full justify-center"
            >
              <WhatsAppIcon />
              {t('whatsapp_cta')}
            </a>

            {/* Real clinic photo */}
            <div className="rounded-2xl overflow-hidden h-44 relative shadow-glass">
              <Image
                src="/images/photo1.jpeg"
                alt="Cabinet Dentaire Dr. Kadri Badr — Réception, Fès"
                fill
                sizes="(max-width: 1024px) 100vw, 500px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/40 to-transparent" />
              <div className="absolute bottom-3 left-4 text-white text-sm font-semibold">
                Cabinet Dr. Kadri Badr — Fès
              </div>
            </div>

            {/* Map */}
            <div className="rounded-2xl overflow-hidden h-48 bg-navy-100 relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d53789.77376!2d-5.0078!3d34.0181!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd9f8b4a1b1b1b1b%3A0x1!2sFes%2C+Morocco!5e0!3m2!1sfr!2sfr!4v1700000000000"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale"
              />
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-3"
          >
            {status === 'success' ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center
                           bg-trust-light rounded-3xl p-12 text-center border border-trust/20"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', stiffness: 200, delay: 0.2 }}
                >
                  <CheckCircle2 className="w-16 h-16 text-trust mx-auto mb-4" />
                </motion.div>
                <h3 className="heading-sm text-navy-900 mb-2">{t('success')}</h3>
                <p className="text-navy-600 text-sm">
                  Ouverture de WhatsApp pour finaliser votre demande...
                </p>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-cream-50 rounded-3xl p-8 border border-gray-100 space-y-4"
              >
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-navy-700 text-xs font-semibold mb-1.5 uppercase tracking-wide">
                      {t('name')} *
                    </label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={e => setForm({...form, name: e.target.value})}
                      placeholder={t('ph_name')}
                      className={inputCls}
                    />
                  </div>
                  <div>
                    <label className="block text-navy-700 text-xs font-semibold mb-1.5 uppercase tracking-wide">
                      {t('country')} *
                    </label>
                    <input
                      type="text"
                      required
                      value={form.country}
                      onChange={e => setForm({...form, country: e.target.value})}
                      placeholder={t('ph_country')}
                      className={inputCls}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-navy-700 text-xs font-semibold mb-1.5 uppercase tracking-wide">
                    {t('phone')} *
                  </label>
                  <input
                    type="tel"
                    required
                    value={form.phone}
                    onChange={e => setForm({...form, phone: e.target.value})}
                    placeholder={t('ph_phone')}
                    className={inputCls}
                  />
                </div>

                <div>
                  <label className="block text-navy-700 text-xs font-semibold mb-1.5 uppercase tracking-wide">
                    {t('treatment')} *
                  </label>
                  <select
                    required
                    value={form.treatment}
                    onChange={e => setForm({...form, treatment: e.target.value})}
                    className={inputCls}
                  >
                    <option value="">{t('select_treatment')}</option>
                    {(['implants', 'veneers', 'whitening', 'design', 'reconstruction', 'emergency', 'other'] as const).map(key => (
                      <option key={key} value={key}>
                        {t(`treatments.${key}` as any)}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-navy-700 text-xs font-semibold mb-1.5 uppercase tracking-wide">
                    {t('message')}
                  </label>
                  <textarea
                    rows={4}
                    value={form.message}
                    onChange={e => setForm({...form, message: e.target.value})}
                    placeholder={t('ph_message')}
                    className={`${inputCls} resize-none`}
                  />
                </div>

                {/* Trust note */}
                <p className="text-navy-500 text-xs flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-trust flex-shrink-0" />
                  {t('privacy_note')}
                </p>

                <motion.button
                  type="submit"
                  disabled={status === 'sending'}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  className="btn-gold w-full justify-center py-4 text-base disabled:opacity-60"
                >
                  {status === 'sending' ? (
                    <>
                      <div className="w-4 h-4 border-2 border-navy-900/30
                                      border-t-navy-900 rounded-full animate-spin" />
                      {t('submitting')}
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      {t('submit')}
                    </>
                  )}
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
