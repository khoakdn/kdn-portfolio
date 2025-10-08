import Section from '@/components/Section'
import { Link } from 'react-router-dom'
import projects from '@/data/projects.json'

export default function Work(){
  return (
    <Section className="py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((p:any)=>(
          <Link key={p.slug} to={`/work/${p.slug}`} className="block rounded-xl border p-4 hover:bg-neutral-50">
            <div className="text-sm text-neutral-500">{p.year}</div>
            <div className="text-lg font-medium">{p.title}</div>
            <div className="text-neutral-600">{p.summary}</div>
          </Link>
        ))}
      </div>
    </Section>
  )
}
