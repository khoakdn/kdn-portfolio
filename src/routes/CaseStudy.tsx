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

      {project.hero ? (
        <Section>
          <img src={project.hero} alt="" className="mb-12 w-full rounded-2xl border" />
        </Section>
      ) : null}

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
