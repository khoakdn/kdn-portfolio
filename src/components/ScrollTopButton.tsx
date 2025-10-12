import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export default function ScrollTopButton() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const onClick = () => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" })
  }

  return (
    <motion.button
      aria-label="Back to top"
      onClick={onClick}
      initial={{ opacity: 0, y: 10, pointerEvents: "none" as any }}
      animate={show ? { opacity: 1, y: 0, pointerEvents: "auto" } : { opacity: 0, y: 10, pointerEvents: "none" }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="fixed bottom-6 right-6 z-[55] rounded-full border border-neutral-300 bg-white/90 px-4 py-2 text-sm shadow-sm backdrop-blur hover:bg-white"
    >
      ↑ Top
    </motion.button>
  )
}
