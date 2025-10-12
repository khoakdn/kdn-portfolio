// src/routes/Home.tsx
import Section from '@/components/Section'
import { allProjects } from '@/lib/projects'
import { Link } from 'react-router-dom'
import Overline from '@/components/Overline'
import Availability from '@/components/Availability'
import RevealWords from '@/components/RevealWords'
import Parallax from '@/components/Parallax'
import { M, MSection, fadeUp, drawX } from '@/components/motion'

export default function Home() {
  const projects = allProjects()

  return (
    <>
      {/* Hero */}
      <Section className="py-20 sm:py-28">
        <div className="max-w-3xl">
          <M.div variants={fadeUp} initial="hidden" animate="show">
            <Availability />
          </M.div>

          <Parallax>
            <RevealWords
              text={"K HOA\nN GUYEN".replace("\n"," ")}  // keep your spaced-uppercase look
              className="display mt-6 whitespace-pre text-6xl sm:text-7xl md:text-8xl font-semibold leading-[0.9]"
            />
          </Parallax>

          <M.p className="mt-5 max-w-2xl text-neutral-700" variants={fadeUp} initial="hidden" animate="show" transition={{ delay: .1 }}>
            Frontend developer & UI/UX designer. I craft clean, minimal, and structured interfaces — with a focus on clarity, performance, and accessibility.
          </M.p>

          <M.div className="mt-6 flex items-center gap-6" variants={fadeUp} initial="hidden" animate="show" transition={{ delay: .2 }}>
            <a className="link" href="mailto:you@example.com">Contact ↗</a>
            <Link className="link" to="/work">Selected Works</Link>
          </M.div>
        </div>
      </Section>

      {/* Services */}
      <MSection>
        <div className="rule" />
        <div className="py-12">
          <M.div variants={fadeUp}><Overline>What I Do / (Services)</Overline></M.div>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { n:'(01)', h:'Frontend & UI', p:'Design → code with React/TypeScript & Tailwind. Smooth interactions, component systems, a11y.'},
              { n:'(02)', h:'UX & Research', p:'User interviews, wireframes, prototypes, usability tests. Outcome-focused case studies.'},
              { n:'(03)', h:'Data Viz', p:'Leaflet/Three.js visualizations that turn open data into clear, scannable stories.'},
            ].map((s,i)=>(
              <M.div variants={fadeUp} key={i}>
                <div className="nb"><span>{s.n}</span><span className="dot" /></div>
                <h3 className="mt-2 text-lg font-medium">{s.h}</h3>
                <p className="mt-2 text-neutral-600">{s.p}</p>
              </M.div>
            ))}
          </div>
        </div>
        <div className="rule" />
      </MSection>

      {/* Selected Works */}
      <MSection className="py-12">
        <M.div variants={fadeUp}><Overline>Selected Works / (Projects)</Overline></M.div>
        <div className="mt-6">
          {projects.map((p, i) => (
            <M.div key={p.slug} className="list-row" variants={fadeUp}>
              <div className="text-neutral-400">{String(i+1).padStart(2,'0')}</div>
              <div>
                <Link to={`/work/${p.slug}`} className="title hover:underline">{p.title}</Link>
                <div className="meta mt-1">{p.year} · {p.role.join(', ')} · {p.stack.join(', ')}</div>
              </div>
              <div className="hidden sm:block text-sm"><Link to={`/work/${p.slug}`} className="link">View ↗</Link></div>
            </M.div>
          ))}
        </div>
      </MSection>
    </>
  )
}
