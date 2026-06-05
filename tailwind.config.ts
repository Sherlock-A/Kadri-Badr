import type { Config } from 'tailwindcss'
import typography from '@tailwindcss/typography'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50:  '#e8edf5',
          100: '#c5d0e6',
          200: '#9fb0d5',
          300: '#7990c4',
          400: '#5c78b8',
          500: '#3e60ac',
          600: '#2d4f97',
          700: '#1a3a7d',
          800: '#102a63',
          900: '#0B1F3B',
          950: '#071629',
        },
        gold: {
          50:  '#fdf8ef',
          100: '#f8edd5',
          200: '#f1d9a8',
          300: '#e9c274',
          400: '#dfa848',
          500: '#C8A96A',
          600: '#b8922a',
          700: '#9a7520',
          800: '#7d5e1d',
          900: '#664d1a',
        },
        cream: {
          50:  '#FAFAFA',
          100: '#F5F5F0',
          200: '#EEEDE6',
        },
        trust: {
          DEFAULT: '#1FAF7A',
          light: '#E8F8F2',
          dark:  '#178a61',
        },
      },
      fontFamily: {
        playfair: ['var(--font-playfair)', 'Georgia', 'serif'],
        inter:    ['var(--font-inter)', 'system-ui', 'sans-serif'],
        satoshi:  ['var(--font-satoshi)', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial':      'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':       'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'hero-gradient':        'linear-gradient(135deg, #0B1F3B 0%, #1a3a7d 50%, #0B1F3B 100%)',
        'gold-gradient':        'linear-gradient(135deg, #C8A96A 0%, #dfa848 50%, #C8A96A 100%)',
        'glass-gradient':       'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
        'dark-glass':           'linear-gradient(135deg, rgba(11,31,59,0.9) 0%, rgba(11,31,59,0.7) 100%)',
      },
      boxShadow: {
        'luxury':       '0 25px 80px -12px rgba(11,31,59,0.35)',
        'luxury-gold':  '0 20px 60px -8px rgba(200,169,106,0.4)',
        'glass':        '0 8px 32px 0 rgba(11,31,59,0.12)',
        'card-hover':   '0 30px 80px -15px rgba(11,31,59,0.25)',
        'cta':          '0 20px 50px -10px rgba(200,169,106,0.5)',
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
      animation: {
        'float':           'float 6s ease-in-out infinite',
        'glow-pulse':      'glowPulse 3s ease-in-out infinite',
        'shimmer':         'shimmer 2s linear infinite',
        'slide-up':        'slideUp 0.6s ease-out forwards',
        'fade-in-blur':    'fadeInBlur 0.8s ease-out forwards',
        'counter':         'counter 2s ease-out forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':       { transform: 'translateY(-12px)' },
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(200,169,106,0.3)' },
          '50%':       { boxShadow: '0 0 50px rgba(200,169,106,0.7)' },
        },
        shimmer: {
          '0%':   { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        slideUp: {
          from: { opacity: '0', transform: 'translateY(30px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInBlur: {
          from: { opacity: '0', filter: 'blur(8px)' },
          to:   { opacity: '1', filter: 'blur(0)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      opacity: {
        '8':  '0.08',
        '12': '0.12',
        '15': '0.15',
      },
      spacing: {
        '18':  '4.5rem',
        '88':  '22rem',
        '112': '28rem',
        '128': '32rem',
      },
    },
  },
  plugins: [typography],
}

export default config
