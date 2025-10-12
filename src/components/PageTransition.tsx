import { motion, useIsPresent } from "framer-motion"

export default function PageTransition() {
  const isPresent = useIsPresent()
  return (
    <motion.div
      aria-hidden
      initial={{ scaleX: 1 }}
      animate={{ scaleX: 0, transition: { duration: .6, ease: [0.22,1,0.36,1] } }}
      exit={{ scaleX: 1, transition: { duration: .6, ease: [0.22,1,0.36,1] } }}
      style={{ originX: isPresent ? 0 : 1 }}
      className="fixed inset-0 z-[60] bg-white"
    />
  )
}
