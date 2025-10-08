import { Routes, Route, NavLink } from 'react-router-dom'
import Home from './routes/Home'
import Work from './routes/Work'
import CaseStudy from './routes/CaseStudy'
import About from './routes/About'
import Contact from './routes/Contact'
import Section from './components/Section'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur">
        <Section className="flex items-center justify-between py-4">
          <NavLink to="/" className="font-semibold tracking-tight">Khoa Nguyen</NavLink>
          <nav className="flex items-center gap-6 text-sm">
            <NavLink to="/work" className={({isActive}) => isActive ? 'font-medium' : 'opacity-80 hover:opacity-100'}>Work</NavLink>
            <NavLink to="/about" className={({isActive}) => isActive ? 'font-medium' : 'opacity-80 hover:opacity-100'}>About</NavLink>
            <NavLink to="/contact" className={({isActive}) => isActive ? 'font-medium' : 'opacity-80 hover:opacity-100'}>Contact</NavLink>
          </nav>
        </Section>
      </header>

      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="/work/:slug" element={<CaseStudy />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <Footer />
    </div>
  )
}
