// src/components/Parallax.tsx
import { ReactNode } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

export default function Parallax({ children, from = 0, to = -20 }: { children: ReactNode; from?: number; to?: number }) {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 300], [from, to]) // subtle
  return <motion.div style={{ y }}>{children}</motion.div>
}
