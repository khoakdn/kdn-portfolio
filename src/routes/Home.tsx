import Section from '@/components/Section'
import { allProjects } from '@/lib/projects'
import { Link } from 'react-router-dom'
import Overline from '@/components/Overline'
import Availability from '@/components/Availability'

export default function Home() {
  const projects = allProjects()

  return (
    <>
      {/* Hero */}
      <Section className="py-20 sm:py-28">
        <div className="max-w-3xl">
          <Availability />
          <h1 className="display mt-6 text-6xl sm:text-7xl md:text-8xl font-semibold leading-[0.9]">
            K H O A<br className="hidden sm:block" /> N G U Y E N
          </h1>
          <p className="mt-5 max-w-2xl text-neutral-700">
            Frontend developer & UI/UX designer. I craft clean, minimal, and structured interfaces — with a focus on clarity, performance, and accessibility.
          </p>
          <div className="mt-6 flex items-center gap-6">
            <a className="link" href="mailto:you@example.com">Contact ↗</a>
            <Link className="link" to="/work">Selected Works</Link>
          </div>
        </div>
      </Section>

      {/* Services */}
      <Section>
        <div className="rule" />
        <div className="py-12">
          <Overline>What I Do / (Services)</Overline>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="nb"><span>(01)</span><span className="dot" /></div>
              <h3 className="mt-2 text-lg font-medium">Frontend & UI</h3>
              <p className="mt-2 text-neutral-600">Design → code with React/TypeScript & Tailwind. Smooth interactions, component systems, a11y.</p>
            </div>
            <div>
              <div className="nb"><span>(02)</span><span className="dot" /></div>
              <h3 className="mt-2 text-lg font-medium">UX & Research</h3>
              <p className="mt-2 text-neutral-600">User interviews, wireframes, prototypes, usability tests. Outcome-focused case studies.</p>
            </div>
            <div>
              <div className="nb"><span>(03)</span><span className="dot" /></div>
              <h3 className="mt-2 text-lg font-medium">Data Viz</h3>
              <p className="mt-2 text-neutral-600">Leaflet/Three.js visualizations that turn open data into clear, scannable stories.</p>
            </div>
          </div>
        </div>
        <div className="rule" />
      </Section>

      {/* Selected Works */}
      <Section className="py-12">
        <Overline>Selected Works / (Projects)</Overline>
        <div className="mt-6">
          {projects.map((p, i) => (
            <div key={p.slug} className="list-row">
              <div className="text-neutral-400">{String(i+1).padStart(2,'0')}</div>
              <div>
                <Link to={`/work/${p.slug}`} className="title hover:underline">{p.title}</Link>
                <div className="meta mt-1">{p.year} · {p.role.join(', ')} · {p.stack.join(', ')}</div>
              </div>
              <div className="hidden sm:block text-sm"><Link to={`/work/${p.slug}`} className="link">View ↗</Link></div>
            </div>
          ))}
        </div>
      </Section>
    </>
  )
}
