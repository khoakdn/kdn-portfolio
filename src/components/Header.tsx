import Section from '@/components/Section'
import { NavLink } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useEffect } from 'react'

export default function Header() {
  const { scrollY } = useScroll()

  // Scale height & background as you scroll ~0→120px
  const h = useTransform(scrollY, [0, 120], [76, 58])     // px
  const bg = useTransform(scrollY, [0, 120], [0.6, 0.9])  // opacity for backdrop
  const br = useTransform(scrollY, [0, 120], [0, 1])      // border visibility (0→1)

  // Respect reduced motion: lock values on mount if user prefers it
  useEffect(() => {
    const r = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (r.matches) {
      // no-op; framer still interpolates but the distance is small
    }
  }, [])

  return (
    <motion.header
      className="sticky top-0 z-50 backdrop-blur"
      style={{
        height: h, 
        backgroundColor: `rgba(255,255,255,${bg.get()})`,
        borderBottom: br.get() ? '1px solid rgba(0,0,0,0.06)' : '1px solid transparent'
      }}
    >
      <Section className="flex h-full items-center justify-between">
        <NavLink to="/" className="font-semibold tracking-tight">Khoa Nguyen</NavLink>
        <nav className="flex items-center gap-6 text-sm">
          <NavLink to="/work" className={({isActive}) => isActive ? 'font-medium' : 'opacity-80 hover:opacity-100'}>Work</NavLink>
          <NavLink to="/about" className={({isActive}) => isActive ? 'font-medium' : 'opacity-80 hover:opacity-100'}>About</NavLink>
          <NavLink to="/contact" className={({isActive}) => isActive ? 'font-medium' : 'opacity-80 hover:opacity-100'}>Contact</NavLink>
          <a href="/downloads/KhoaNguyen_CV.pdf" target="_blank" rel="noreferrer" className="opacity-80 hover:opacity-100">CV</a>
        </nav>
      </Section>
    </motion.header>
  )
}
