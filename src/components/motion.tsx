// src/components/motion.tsx
import { motion, Variants, cubicBezier } from "framer-motion"
import type { PropsWithChildren } from "react"

export const ease = cubicBezier(0.22, 1, 0.36, 1)

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 14 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.6, ease } }
}

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show:   { opacity: 1, transition: { duration: 0.6, ease } }
}

export const stagger = (delay = 0.08) => ({
  hidden: {},
  show: { transition: { staggerChildren: delay } }
})

export const drawX: Variants = {
  hidden: { scaleX: 0, transformOrigin: "left" as const },
  show:   { scaleX: 1, transformOrigin: "left" as const, transition: { duration: 0.8, ease } }
}

export const imgScaleIn: Variants = {
  hidden: { opacity: 0, scale: 1.03 },
  show:   { opacity: 1, scale: 1, transition: { duration: 0.7, ease } }
}

export function MSection({ children, className='' }: PropsWithChildren<{className?: string}>) {
  return (
    <motion.section
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "0px 0px -80px 0px" }}
      variants={stagger(0.06)}
    >
      {children}
    </motion.section>
  )
}

export const M = motion
