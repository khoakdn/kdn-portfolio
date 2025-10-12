import { useEffect } from "react"
import { useLocation } from "react-router-dom"

export default function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    // Smooth, but respects prefers-reduced-motion
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)")
    window.scrollTo({ top: 0, behavior: mq.matches ? "auto" : "smooth" })
  }, [pathname])

  return null
}
