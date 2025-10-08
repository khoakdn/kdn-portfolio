import Section from '@/components/Section'
import Profile3D from '@/components/Profile3D'

export default function About(){
  return (
    <Section className="py-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
        <div className="md:col-span-2 prose max-w-none">
          <h1>About</h1>
          <p>I’m Khoa Nguyen — a frontend developer with a UI/UX mindset. I turn research insights into clear, fast interfaces.
          Interests: design systems, accessibility, and data visualization.</p>
          <h2>Skills</h2>
          <ul>
            <li>Frontend: React, TypeScript, Tailwind, Vite</li>
            <li>Data viz & maps: Leaflet, Three.js</li>
            <li>UX: interviews, prototypes, usability testing</li>
          </ul>
          <h2>Resume</h2>
          <p><a className="inline-flex items-center gap-2 rounded-xl border px-4 py-2 hover:bg-neutral-50" href="/downloads/KhoaDangNguyen_CV.pdf" target="_blank" rel="noreferrer">Download CV (PDF)</a></p>
        </div>
        <div className="space-y-4">
          <Profile3D />
          <p className="text-sm text-neutral-600">Interactive 3D avatar placeholder. Swap with a custom model later.</p>
        </div>
      </div>
    </Section>
  )
}
