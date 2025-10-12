import { motion, Variants } from "framer-motion"
import type { PropsWithChildren } from "react"

const ease = [0.22, 1, 0.36, 1]

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 12 },
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

export function MSection({ children, className='' }: PropsWithChildren<{className?: string}>) {
  return (
    <motion.section
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "0px 0px -80px 0px" }}
      variants={stagger()}
    >
      {children}
    </motion.section>
  )
}

export const M = motion
