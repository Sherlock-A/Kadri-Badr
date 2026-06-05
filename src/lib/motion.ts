import type { Variants } from 'framer-motion'

export const EASE = [0.22, 1, 0.36, 1] as const

// ─── Core variants ────────────────────────────────────────────────────────────

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24, filter: 'blur(4px)' },
  visible: {
    opacity: 1, y: 0, filter: 'blur(0px)',
    transition: { duration: 0.7, ease: EASE },
  },
}

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6, ease: EASE } },
}

export const fadeDown: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
}

export const slideLeft: Variants = {
  hidden: { opacity: 0, x: -40, filter: 'blur(4px)' },
  visible: {
    opacity: 1, x: 0, filter: 'blur(0px)',
    transition: { duration: 0.8, ease: EASE },
  },
}

export const slideRight: Variants = {
  hidden: { opacity: 0, x: 40, filter: 'blur(4px)' },
  visible: {
    opacity: 1, x: 0, filter: 'blur(0px)',
    transition: { duration: 0.8, ease: EASE },
  },
}

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: {
    opacity: 1, scale: 1,
    transition: { duration: 0.6, ease: EASE },
  },
}

// ─── Stagger containers ────────────────────────────────────────────────────────

export const stagger = (delay = 0.1): Variants => ({
  hidden: {},
  visible: { transition: { staggerChildren: delay } },
})

export const staggerFast: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
}

export const staggerSlow: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
}

// ─── Viewport config ──────────────────────────────────────────────────────────

export const viewport = { once: true, margin: '-80px' } as const
export const viewportNear = { once: true, margin: '-40px' } as const

// ─── Hero-specific ─────────────────────────────────────────────────────────────

export const heroContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15, delayChildren: 0.3 } },
}

export const heroItem: Variants = {
  hidden: { opacity: 0, y: 40, filter: 'blur(8px)' },
  visible: {
    opacity: 1, y: 0, filter: 'blur(0px)',
    transition: { duration: 0.9, ease: EASE },
  },
}

// ─── Card hover presets (use with whileHover) ─────────────────────────────────

export const cardLift = { y: -6, transition: { duration: 0.25 } }
export const cardLiftSm = { y: -3, transition: { duration: 0.2 } }
