import Section from '@/components/Section'
import { allProjects } from '@/lib/projects'
import ProjectCard from '@/components/ProjectCard'
import { useMemo, useState } from 'react'

const TAGS = ['uiux','web','data-viz','research'] as const

export default function Work() {
  const [active, setActive] = useState<string>('all')
  const projects = allProjects()

  const filtered = useMemo(() => {
    if (active === 'all') return projects
    return projects.filter(p => p.tags?.includes(active))
  }, [active, projects])

  return (
    <>
      <Section className="py-16">
        <div className="flex flex-wrap items-center gap-2">
          <button onClick={() => setActive('all')} className={`rounded-full border px-3 py-1 text-sm ${active==='all'?'bg-black text-white':'hover:bg-neutral-50'}`}>All</button>
          {TAGS.map(t => (
            <button key={t} onClick={() => setActive(t)} className={`rounded-full border px-3 py-1 text-sm ${active===t?'bg-black text-white':'hover:bg-neutral-50'}`}>{t}</button>
          ))}
        </div>
      </Section>

      <Section className="pb-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map(p => <ProjectCard key={p.slug} project={p} />)}
        </div>
      </Section>
    </>
  )
}
