'use client'

import Link from 'next/link'
import { useTranslations, useLocale } from 'next-intl'
import { motion } from 'framer-motion'
import { Phone, MapPin, Clock, Mail } from 'lucide-react'
import Logo from '@/components/ui/Logo'

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
)

export default function Footer() {
  const t = useTranslations('footer')
  const locale = useLocale()

  return (
    <footer className="bg-navy-950 text-white">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <Logo variant="light" className="h-14 w-auto mb-3" />
              <div className="text-gold-500 text-xs tracking-widest uppercase font-semibold">
                {t('tagline')}
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-6 max-w-xs">
              {t('made')}
            </p>
            {/* Contact quick access */}
            <div className="space-y-3">
              <a
                href="tel:+212666686646"
                className="flex items-center gap-3 text-white/70 hover:text-white
                           text-sm transition-colors group"
              >
                <Phone className="w-4 h-4 text-gold-500 group-hover:scale-110 transition-transform" />
                +212 6 66 68 66 46
              </a>
              <a
                href="https://wa.me/212666686646"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-white/70 hover:text-[#25D366]
                           text-sm transition-colors group"
              >
                <span className="text-[#25D366]"><WhatsAppIcon /></span>
                WhatsApp
              </a>
              <div className="flex items-start gap-3 text-white/60 text-sm">
                <MapPin className="w-4 h-4 text-gold-500 flex-shrink-0 mt-0.5" />
                Fès, Maroc — drbadrkadri.com
              </div>
              <div className="flex items-start gap-3 text-white/60 text-sm">
                <Clock className="w-4 h-4 text-gold-500 flex-shrink-0 mt-0.5" />
                {t('hours')}
              </div>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-semibold mb-5 text-sm tracking-widest uppercase">
              {t('nav_title')}
            </h4>
            <ul className="space-y-3">
              {[
                ['#services',      t('links_services')],
                [`/${locale}`,     t('links_doctor')],
                ['#international', t('links_international')],
                ['#results',       t('links_results')],
                ['#contact',       t('links_contact')],
                ['#faq',           t('links_faq')],
              ].map(([href, label]) => (
                <li key={href}>
                  <a
                    href={href}
                    className="text-white/60 hover:text-gold-400 text-sm
                               transition-colors duration-200"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA block */}
          <div>
            <h4 className="text-white font-semibold mb-5 text-sm tracking-widest uppercase">
              {t('consult_title')}
            </h4>
            <p className="text-white/60 text-sm mb-5">
              {t('consult_desc')}
            </p>
            <a
              href="#contact"
              className="btn-gold text-sm px-5 py-3 w-full justify-center mb-3"
            >
              {t('book')}
            </a>
            <a
              href="https://wa.me/212666686646?text=Bonjour%20Dr.%20Kadri%20Badr%2C%20je%20souhaite%20une%20consultation%20gratuite."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3 px-5
                         border border-[#25D366]/40 text-[#25D366] rounded-2xl
                         hover:bg-[#25D366]/10 transition-all text-sm font-medium"
            >
              <WhatsAppIcon />
              WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5
                        flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/40 text-xs">{t('copy')}</p>
          <div className="flex items-center gap-4">
            <a href="#" className="text-white/40 hover:text-white/70 text-xs transition-colors">
              {t('legal_privacy')}
            </a>
            <a href="#" className="text-white/40 hover:text-white/70 text-xs transition-colors">
              {t('legal_terms')}
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
