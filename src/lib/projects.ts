import projects from '@/data/projects.json'

export type Project = {
  slug: string
  title: string
  role: string[]
  year: number
  stack: string[]
  summary: string
  hero?: string
  tags?: string[]
}

export function allProjects(): Project[] {
  return projects as Project[]
}

export function getProjectBySlug(slug: string): Project | undefined {
  return (projects as Project[]).find(p => p.slug === slug)
}
