import Section from '@/components/Section'
import { useParams, Link } from 'react-router-dom'

export default function CaseStudy() {
  const { slug } = useParams()

  if (slug === 'jsl-website-redesign') {
    return (
      <>
        <Section className="py-16">
          <div className="max-w-2xl">
            <Link to="/work" className="text-sm text-neutral-500 hover:underline">&larr; Back to work</Link>
            <h1 className="mt-2 text-4xl font-semibold tracking-tight">JSL3 Website Redesign (Ambianti Internship)</h1>
            <p className="mt-3 text-neutral-600">Redesigned docs site to improve onboarding, navigation, and learning with search, guides, and a Playground.</p>
            <div className="mt-4 flex flex-wrap items-center gap-4 text-sm">
              <a href="https://jsl3.codemax.net/" className="underline" target="_blank">Old JSL site</a>
              <span aria-hidden>·</span>
              <a href="https://jsl3-2025.netlify.app/index.html" className="underline" target="_blank">Redesigned site</a>
            </div>
          </div>
        </Section>
        <Section className="pb-24">
          <article className="prose max-w-none">
            <h2>Snapshot</h2>
            <p>Beginner-first docs, search, and live Playground increased task success to 100%.</p>
          </article>
        </Section>
      </>
    )
  }

  if (slug === 'eindhoven-housing-viz') {
    return (
      <>
        <Section className="py-16">
          <div className="max-w-2xl">
            <Link to="/work" className="text-sm text-neutral-500 hover:underline">&larr; Back to work</Link>
            <h1 className="mt-2 text-4xl font-semibold tracking-tight">Eindhoven Housing Visualization</h1>
            <p className="mt-3 text-neutral-600">Interactive 2D/3D maps to help expats compare neighborhoods by price, schools, and parks.</p>
            <div className="mt-4 flex flex-wrap items-center gap-4 text-sm">
              <a href="/downloads/TulipKey_Technical_Report.pdf" target="_blank" rel="noreferrer" className="underline">Technical Report (PDF)</a>
            </div>
          </div>
        </Section>
        <Section className="pb-24">
          <article className="prose max-w-none">
            <h2>Process</h2>
            <ol>
              <li>Discover — data collection (Eindhoven Open Data), context mapping with expats.</li>
              <li>Define — personas & value proposition around affordability and accessibility.</li>
              <li>Develop — Leaflet maps + Three.js 3D mini‑map; usability testing, iteration.</li>
              <li>Deliver — deployed website; refined popups and layers.</li>
            </ol>

            <h2>Solution highlights</h2>
            <ul>
              <li>Price layer via <code>geo_shape</code> polygons, color‑coded by price.</li>
              <li>Schools/Universities with custom markers and photo popups.</li>
              <li>Parks with hover previews and images.</li>
              <li>3D mini‑map to explore Eindhoven using orbit controls.</li>
            </ul>
          </article>
        </Section>
      </>
    )
  }

  return (
    <Section className="py-24">
      <p className="text-neutral-600">Project not found. <Link to="/work" className="underline">Back to work</Link></p>
    </Section>
  )
}
