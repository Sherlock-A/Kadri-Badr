# Installation — Dr. Kadri Badr Dental Platform

## Prérequis
- Node.js 18+
- npm ou yarn

## 1. Installation

```bash
cd cabinet
npm install
```

## 2. Variables d'environnement

Le fichier `.env.local` est déjà configuré.
Modifier si besoin :

```
NEXT_PUBLIC_SITE_URL=https://drbadrkadri.com
NEXT_PUBLIC_WHATSAPP=212666686646
NEXT_PUBLIC_PHONE=+212666686646
```

## 3. Lancer en développement

```bash
npm run dev
```

Ouvrir : http://localhost:3000 → redirige automatiquement vers /fr

## 4. Langues disponibles

- http://localhost:3000/fr — Français (défaut)
- http://localhost:3000/en — English
- http://localhost:3000/ar — العربية (RTL)

## 5. Build production

```bash
npm run build
npm start
```

## Structure du projet

```
src/
├── app/
│   ├── [locale]/
│   │   ├── layout.tsx     ← SEO, fonts, Schema.org
│   │   └── page.tsx       ← Page principale (toutes sections)
│   ├── globals.css        ← Design system complet
│   └── layout.tsx
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx     ← Navigation + language switcher
│   │   └── Footer.tsx     ← Footer complet
│   ├── sections/
│   │   ├── HeroSection.tsx        ← Hero cinématique
│   │   ├── ServicesSection.tsx    ← 6 services premium
│   │   ├── InternationalSection.tsx ← Tourisme dentaire + prix
│   │   ├── DoctorSection.tsx      ← Portrait Dr. Kadri Badr
│   │   ├── BeforeAfterSection.tsx ← Slider avant/après
│   │   ├── TestimonialsSection.tsx ← Témoignages internationaux
│   │   ├── FAQSection.tsx         ← FAQ accordéon
│   │   └── ContactSection.tsx     ← Formulaire + infos
│   └── ui/
│       ├── FloatingActions.tsx    ← WhatsApp flottant + actions
│       └── StickyBookBar.tsx      ← Barre booking mobile
├── i18n/
│   └── request.ts         ← Config next-intl
├── messages/
│   ├── fr.json            ← Traductions françaises
│   ├── en.json            ← English translations
│   └── ar.json            ← الترجمة العربية
├── lib/
│   └── utils.ts           ← cn(), WhatsApp helpers
└── middleware.ts           ← i18n routing
```

## Photos / Images

Toutes les images utilisent Unsplash (CDN, gratuites).
Pour remplacer par vos propres photos :
- Placez-les dans `/public/images/`
- Remplacez les URLs `images.unsplash.com` par `/images/votre-photo.jpg`

## Déploiement Vercel (recommandé)

```bash
npx vercel
```

Ou connectez le repo GitHub à vercel.com — déploiement automatique.
