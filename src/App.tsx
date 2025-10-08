    import { Routes, Route, NavLink } from 'react-router-dom'
    import Home from './routes/Home'
    import Work from './routes/Work'
    import CaseStudy from './routes/CaseStudy'
    import About from './routes/About'
    import Contact from './routes/Contact'
    export default function App() {
      return (
        <div>
          <nav><NavLink to="/">Home</NavLink> | <NavLink to="/work">Work</NavLink></nav>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/work" element={<Work/>} />
            <Route path="/work/:slug" element={<CaseStudy/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/contact" element={<Contact/>} />
          </Routes>
        </div>
      )
    }
    