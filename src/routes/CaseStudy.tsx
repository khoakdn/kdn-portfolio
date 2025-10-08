import Section from '@/components/Section'
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

  // Custom narrative for the JSL3 Internship case study
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

            <h2>Context</h2>
            <ul>
              <li><strong>Role:</strong> Frontend &amp; UX Intern (Ambianti B.V.)</li>
              <li><strong>Duration:</strong> Sep 2024 – Jan 2025</li>
              <li><strong>Team:</strong> Collaboration with JSL author and company tutor</li>
              <li><strong>Constraints:</strong> Maintain compatibility with JSL3 framework; deliver within internship timeframe</li>
            </ul>

            <h2>Process</h2>
            <ol>
              <li><strong>Discover</strong> — usability tests, surveys, and competitive analysis (React, Vue, Angular)</li>
              <li><strong>Define</strong> — objectives: easier onboarding, clearer navigation, improved code examples</li>
              <li><strong>Develop</strong> — paper → Figma prototypes; research on search &amp; Playground</li>
              <li><strong>Deliver</strong> — implemented redesign in JSL3; two rounds of usability tests</li>
            </ol>

            <h2>Solution highlights</h2>
            <ul>
              <li><strong>Navigation & IA:</strong> streamlined top nav + logical grouping; visible CTAs.</li>
              <li><strong>Search:</strong> autocomplete + categorised results for faster discovery.</li>
              <li><strong>Getting Started:</strong> step-by-step setup and first project for beginners.</li>
              <li><strong>Playground:</strong> live, split-view editor to try JSL instantly.</li>
              <li><strong>Code examples:</strong> smaller chunks with annotations and consistent styling.</li>
            </ul>

            <h2>Redesign Screens</h2>
            <p>The redesigned experience focuses on clarity, learnability, and quick discovery.</p>
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
              <li><strong>Qualitative:</strong> clearer paths, better code readability, faster findability via search.</li>
            </ul>

            <h2>What I’d improve next</h2>
            <p>Add community Q&amp;A, deepen Playground features (debugging &amp; shareable links), and integrate an AI assistant for just-in-time help.</p>
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

          <h2>Context</h2>
          <ul>
            <li><strong>Role:</strong> {project.role.join(", ")}</li>
            <li><strong>Duration:</strong> 6 weeks</li>
            <li><strong>Team:</strong> Solo project with mentor feedback</li>
            <li><strong>Constraints:</strong> Public datasets, mobile-first</li>
          </ul>

          <h2>Process</h2>
          <ol>
            <li>Research — desk research + 4 user interviews</li>
            <li>Insights — top tasks & information needs</li>
            <li>Ideation — low-fi sketches to interactive prototype</li>
            <li>Design — components, states, empty & loading</li>
            <li>Validation — 5 usability tests, iterate</li>
          </ol>

          <h2>Solution highlights</h2>
          <ul>
            <li>Map with filters and instant feedback</li>
            <li>Clear comparison view for 2–3 areas</li>
            <li>Performance budget to keep interactions snappy</li>
          </ul>

          <h2>Impact</h2>
          <p>Early tests: task completion time improved by ~35%; SUS score +18.</p>

          <h2>What I’d improve next</h2>
          <p>More robust data provenance & explainability; add export/share flows.</p>
        </article>
      </Section>
    </>
  )
}
