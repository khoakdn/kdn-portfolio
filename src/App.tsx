import { Routes, Route, NavLink } from 'react-router-dom'
import Home from './routes/Home'
import Work from './routes/Work'
import CaseStudy from './routes/CaseStudy'
import About from './routes/About'
import Contact from './routes/Contact'
import Section from './components/Section'
import Footer from './components/Footer'
import { AnimatePresence } from 'framer-motion'
import PageTransition from './components/PageTransition'
import { useLocation } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'
import Header from './components/Header'
import CursorGlow from './components/CursorGlow'
import ScrollTopButton from './components/ScrollTopButton'

export default function App() {
  const location = useLocation()
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <CursorGlow />
      <ScrollTopButton />

      {/* <header className="sticky top-0 z-50 bg-white/80 backdrop-blur">
        <Section className="flex items-center justify-between py-4">
          <NavLink to="/" className="font-semibold tracking-tight">Khoa Nguyen</NavLink>
          <nav className="flex items-center gap-6 text-sm">
            <NavLink to="/work" className={({isActive}) => isActive ? 'font-medium' : 'opacity-80 hover:opacity-100'}>Work</NavLink>
            <NavLink to="/about" className={({isActive}) => isActive ? 'font-medium' : 'opacity-80 hover:opacity-100'}>About</NavLink>
            <NavLink to="/contact" className={({isActive}) => isActive ? 'font-medium' : 'opacity-80 hover:opacity-100'}>Contact</NavLink>
            <a href="/downloads/KhoaNguyen_CV.pdf" target="_blank" rel="noreferrer" className="opacity-80 hover:opacity-100">CV</a>
          </nav>
        </Section>
      </header> */}

      <main className="flex-1">
        <ScrollToTop />
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/work" element={<Work />} />
            <Route path="/work/:slug" element={<CaseStudy />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </AnimatePresence>
      </main>

      <PageTransition />

      <Footer />
    </div>
  )
}


