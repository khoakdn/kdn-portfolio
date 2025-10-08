import Section from '@/components/Section'
import BeforeAfter from '@/components/BeforeAfter'
import AnnotatedImage from '@/components/AnnotatedImage'
import { getProjectBySlug } from '@/lib/projects'
import { useParams, Link } from 'react-router-dom'

export default function CaseStudy() {
  const { slug } = useParams()
  const project = getProjectBySlug(slug || '')

  if (!project) {
    return (
      <Section className="py-24">
        <p className="text-neutral-600">Project not found. <Link to="/work" className="underline">Back to work</Link></p>
      </Section>
    )
  }

  if (project.slug === 'jsl-website-redesign') {
    return (
      <>
        <Section className="py-16">
          <div className="max-w-2xl">
            <Link to="/work" className="text-sm text-neutral-500 hover:underline">&larr; Back to work</Link>
            <h1 className="mt-2 text-4xl font-semibold tracking-tight">{project.title}</h1>
            <p className="mt-3 text-neutral-600">{project.summary}</p>
            <div className="mt-4 flex flex-wrap gap-3 text-sm text-neutral-600">
              <span className="rounded-full border px-3 py-1">{project.year}</span>
              {project.role.map(r => <span key={r} className="rounded-full border px-3 py-1">{r}</span>)}
              {project.stack.map(s => <span key={s} className="rounded-full border px-3 py-1">{s}</span>)}
            </div>
            <div className="mt-4 flex flex-wrap items-center gap-4 text-sm">
              <a href="https://jsl3.codemax.net/" target="_blank" rel="noreferrer" className="underline">Old JSL site</a>
              <span aria-hidden>·</span>
              <a href="https://jsl3-2025.netlify.app/index.html" target="_blank" rel="noreferrer" className="underline">Redesigned site</a>
              <span aria-hidden>·</span>
              <a href="/downloads/KhoaNguyen_Internship_Report.pdf" target="_blank" rel="noreferrer" className="underline">Internship Report (PDF)</a>
            </div>
          </div>
        </Section>

        <Section className="pb-24">
          <article className="prose max-w-none">
            <h2>Snapshot</h2>
            <p><strong>Problem:</strong> The JSL3 docs site overwhelmed beginners and slowed experienced users — unclear IA, scattered tutorials, and code examples without context.</p>
            <p><strong>Outcome:</strong> Clearer information architecture, beginner-first “Getting started”, searchable docs, and a live Playground. Task success rose to <strong>100%</strong> and average time-on-task dropped ~<strong>20%</strong>.</p>

            <h2>Process</h2>
            <ol>
              <li><strong>Discover</strong> — usability tests, surveys, and competitive analysis (React, Vue, Angular)</li>
              <li><strong>Define</strong> — objectives: easier onboarding, clearer navigation, improved code examples</li>
              <li><strong>Develop</strong> — paper → Figma prototypes; research on search & Playground</li>
              <li><strong>Deliver</strong> — implemented redesign in JSL3; two rounds of usability tests</li>
            </ol>

            <h2>Before / After</h2>
            <p>Compare old vs redesigned screens. Replace the <code>old-*.svg</code> placeholders with real screenshots when ready.</p>
            <div className="grid grid-cols-1 gap-6 not-prose">
              <div>
                <p className="mb-2 text-sm text-neutral-600">Home</p>
                <BeforeAfter beforeSrc="/images/old-home.svg" afterSrc="/images/homejsl.png" beforeLabel="Old" afterLabel="New" altBefore="Old home" altAfter="New home" />
              </div>
              <div>
                <p className="mb-2 text-sm text-neutral-600">Docs</p>
                <BeforeAfter beforeSrc="/images/old-docs.svg" afterSrc="/images/docjsl.png" beforeLabel="Old" afterLabel="New" altBefore="Old docs" altAfter="New docs" />
              </div>
            </div>

            <h2>Annotated highlights</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 not-prose">
              <AnnotatedImage
                src="/images/homejsl.png"
                alt="Redesign — Home"
                markers={[
                  { x: 50, y: 60, title: "Primary CTA", body: "Clear 'Learn JSL' call to action at the fold." },
                  { x: 92, y: 8, title: "Simple top bar", body: "Docs & Playground are always visible." }
                ]}
              />
              <AnnotatedImage
                src="/images/docjsl.png"
                alt="Redesign — Docs"
                markers={[
                  { x: 50, y: 9, title: "Search", body: "Fast access to topics with autocomplete." },
                  { x: 12, y: 50, title: "Structured sidebar", body: "Grouped sections to reduce overwhelm." },
                  { x: 55, y: 35, title: "Readable content", body: "Wide-but-controlled measure with clear hierarchy." }
                ]}
              />
              <AnnotatedImage
                src="/images/searchjsl.png"
                alt="Redesign — Search"
                markers={[
                  { x: 48, y: 8, title: "Input field", body: "Keyboard-first focus and accessible labeling." },
                  { x: 26, y: 18, title: "Autocomplete", body: "Instant results with categories." }
                ]}
              />
              <AnnotatedImage
                src="/images/playgroundjsl.png"
                alt="Redesign — Playground"
                markers={[
                  { x: 14, y: 38, title: "Examples list", body: "A menu of hands-on snippets." },
                  { x: 52, y: 47, title: "Live editor", body: "Try JSL instantly with visible output." }
                ]}
              />
            </div>

            <h2>Redesign Screens</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 not-prose">
              <figure className="rounded-2xl border overflow-hidden">
                <img src="/images/homejsl.png" alt="Redesign — Home" />
                <figcaption className="p-3 text-sm text-neutral-600">Home — simple entry point with clear CTA to learn.</figcaption>
              </figure>
              <figure className="rounded-2xl border overflow-hidden">
                <img src="/images/docjsl.png" alt="Redesign — Docs" />
                <figcaption className="p-3 text-sm text-neutral-600">Docs — structured sidebar + readable content area.</figcaption>
              </figure>
              <figure className="rounded-2xl border overflow-hidden">
                <img src="/images/searchjsl.png" alt="Redesign — Search" />
                <figcaption className="p-3 text-sm text-neutral-600">Search — autocomplete for quick navigation to topics.</figcaption>
              </figure>
              <figure className="rounded-2xl border overflow-hidden">
                <img src="/images/playgroundjsl.png" alt="Redesign — Playground" />
                <figcaption className="p-3 text-sm text-neutral-600">Playground — live code + output for instant learning.</figcaption>
              </figure>
            </div>

            <h2>Impact</h2>
            <ul>
              <li><strong>Task success:</strong> 81.25% → <strong>100%</strong></li>
              <li><strong>Time-on-task:</strong> 26.88 min → 21.50 min (≈ <strong>-20%</strong>)</li>
            </ul>

            <h2>What I’d improve next</h2>
            <p>Add community Q&A, deepen Playground features (debugging & shareable links), and integrate an AI assistant for just-in-time help.</p>
          </article>
        </Section>
      </>
    )
  }

  if (project.slug === 'eindhoven-housing-viz') {
    return (
      <>
        <Section className="py-16">
          <div className="max-w-2xl">
            <Link to="/work" className="text-sm text-neutral-500 hover:underline">&larr; Back to work</Link>
            <h1 className="mt-2 text-4xl font-semibold tracking-tight">{project.title}</h1>
            <p className="mt-3 text-neutral-600">{project.summary}</p>
            <div className="mt-4 flex flex-wrap gap-3 text-sm text-neutral-600">
              <span className="rounded-full border px-3 py-1">{project.year}</span>
              {project.role.map(r => <span key={r} className="rounded-full border px-3 py-1">{r}</span>)}
              {project.stack.map(s => <span key={s} className="rounded-full border px-3 py-1">{s}</span>)}
            </div>
            <div className="mt-4 flex flex-wrap items-center gap-4 text-sm">
              <a href="/downloads/TulipKey_Technical_Report.pdf" target="_blank" rel="noreferrer" className="underline">Technical Report (PDF)</a>
            </div>
          </div>
        </Section>

        <Section className="pb-24">
          <article className="prose max-w-none">
            <h2>Snapshot</h2>
            <p><strong>Problem:</strong> Expats and students new to Eindhoven struggle to understand housing options because data is scattered and hard to compare.</p>
            <p><strong>Outcome:</strong> A map-led interface that overlays price categories, schools/universities, and parks. Polygons, custom icons, and annotated popups make the data scannable.</p>

            <h2>Process</h2>
            <ol>
              <li><strong>Discover</strong> — context mapping; interviews & surveys; gather Eindhoven Open Data.</li>
              <li><strong>Define</strong> — personas & value prop; prioritize top comparison tasks.</li>
              <li><strong>Develop</strong> — Leaflet layers; GLB-based 3D mini-map with OrbitControls; iterative testing.</li>
              <li><strong>Deliver</strong> — commit-driven implementation with clear milestones.</li>
            </ol>

            <h2>Commit trail (highlights)</h2>
            <ul>
              <li>Initial Leaflet map with price-coded polygons.</li>
              <li>3D map layout using Three.js.</li>
              <li>Added schools/universities layer with custom marker & images.</li>
              <li>Added parks layer with icons and image popups.</li>
              <li>Enriched housing popups with units, year, status, type, and neighborhood images.</li>
            </ul>

            <h2>What I’d improve next</h2>
            <p>Performance tuning; richer comparison (bookmark areas, export lists); dataset provenance notes and in-app legend.</p>
          </article>
        </Section>
      </>
    )
  }

  return (
    <>
      <Section className="py-16">
        <div className="max-w-2xl">
          <Link to="/work" className="text-sm text-neutral-500 hover:underline">&larr; Back to work</Link>
          <h1 className="mt-2 text-4xl font-semibold tracking-tight">{project.title}</h1>
          <p className="mt-3 text-neutral-600">{project.summary}</p>
          <div className="mt-4 flex flex-wrap gap-3 text-sm text-neutral-600">
            <span className="rounded-full border px-3 py-1">{project.year}</span>
            {project.role.map(r => <span key={r} className="rounded-full border px-3 py-1">{r}</span>)}
            {project.stack.map(s => <span key={s} className="rounded-full border px-3 py-1">{s}</span>)}
          </div>
        </div>
      </Section>

      <Section className="pb-24">
        <article className="prose max-w-none">
          <h2>Snapshot</h2>
          <p><strong>Problem:</strong> Users struggled to compare neighborhoods quickly. <strong>Outcome:</strong> A map-led UI that reduced time-to-insight.</p>

          <h2>Process</h2>
          <ol>
            <li>Research — desk research + interviews</li>
            <li>Insights — top tasks & information needs</li>
            <li>Ideation — sketches to prototype</li>
            <li>Design — components, states</li>
            <li>Validation — usability tests</li>
          </ol>
        </article>
      </Section>
    </>
  )
}
