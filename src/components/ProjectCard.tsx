import { Link } from 'react-router-dom'
import type { Project } from '@/lib/projects'
import { M, imgScaleIn } from '@/components/motion'

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link to={`/work/${project.slug}`} className="group block rounded-2xl border border-neutral-200 overflow-hidden">
      <M.div className="aspect-video bg-neutral-100 overflow-hidden" variants={imgScaleIn} initial="hidden" whileInView="show" viewport={{ once: true }}>
        {project.hero ? (
          <img src={project.hero} alt={project.title} className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]" />
        ) : null}
      </M.div>
      <div className="p-5">
        <div className="flex items-center justify-between gap-3">
          <h3 className="text-lg font-medium">{project.title}</h3>
          <span className="text-xs text-neutral-500">{project.year}</span>
        </div>
        <p className="mt-1 text-sm text-neutral-600 line-clamp-2">{project.summary}</p>
        <div className="mt-3 flex flex-wrap gap-1.5">
          {project.tags?.map(tag => (
            <span key={tag} className="rounded-full border border-neutral-200 px-2 py-0.5 text-xs text-neutral-600">{tag}</span>
          ))}
        </div>
      </div>
    </Link>
  )
}
