import { useEffect } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function CursorGlow() {
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  // spring for smooth follow
  const sx = useSpring(x, { stiffness: 120, damping: 20, mass: 0.3 })
  const sy = useSpring(y, { stiffness: 120, damping: 20, mass: 0.3 })

  useEffect(() => {
    const move = (e: MouseEvent) => {
      x.set(e.clientX)
      y.set(e.clientY)
    }
    window.addEventListener('mousemove', move, { passive: true })
    return () => window.removeEventListener('mousemove', move)
  }, [x, y])

  // Respect reduced motion: center the glow and keep it subtle
  useEffect(() => {
    const m = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (m.matches) {
      x.set(window.innerWidth / 2)
      y.set(120) // park near header
    }
  }, [x, y])

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[40] hidden md:block"
      style={{
        background: 'radial-gradient(200px 200px at 0 0, rgba(0,0,0,0.08), transparent 60%)',
        transform: 'translate3d(0,0,0)',
        mixBlendMode: 'multiply'
      }}
    >
      {/* position anchor */}
      <motion.div
        style={{
          position: 'absolute',
          left: sx,
          top: sy,
          width: 1,
          height: 1
        }}
      />
    </motion.div>
  )
}
