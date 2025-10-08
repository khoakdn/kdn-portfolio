import Section from '@/components/Section'
import { allProjects } from '@/lib/projects'
import ProjectCard from '@/components/ProjectCard'
import { Link } from 'react-router-dom'

export default function Home() {
  const projects = allProjects().slice(0, 6)

  return (
    <>
      <Section className="py-20 sm:py-28">
        <div className="max-w-2xl">
          <p className="text-sm uppercase tracking-widest text-neutral-500">Frontend · UI/UX</p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">Minimal, clear, outcomes‑driven portfolio</h1>
          <p className="mt-4 text-neutral-600">
            I design and build interfaces that feel effortless. Here are selected projects—from data visualization
            to design systems and performance-focused web apps.
          </p>
          <div className="mt-6 flex items-center gap-4">
            <Link to="/work" className="rounded-xl bg-black px-4 py-2 text-white">See all work</Link>
            <Link to="/about" className="rounded-xl border px-4 py-2">About me</Link>
          </div>
        </div>
      </Section>

      <Section className="pb-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map(p => <ProjectCard key={p.slug} project={p} />)}
        </div>
      </Section>
    </>
  )
}
