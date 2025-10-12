// src/components/PageTransition.tsx
import { motion, useIsPresent, cubicBezier } from "framer-motion"
const ease = cubicBezier(0.22, 1, 0.36, 1)

export default function PageTransition() {
  const isPresent = useIsPresent()
  return (
    <motion.div
      aria-hidden
      initial={{ scaleX: 1 }}
      animate={{ scaleX: 0, transition: { duration: 0.6, ease } }}
      exit={{ scaleX: 1, transition: { duration: 0.6, ease } }}
      style={{ originX: isPresent ? 0 : 1 }}
      className="fixed inset-0 z-[60] bg-white"
    />
  )
}
