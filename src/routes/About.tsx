import Section from '@/components/Section'

export default function About() {
  return (
    <Section className="py-20 sm:py-28">
      <div className="prose max-w-none">
        <h1>About</h1>
        <p>I’m Khoa Nguyen — a frontend developer with a strong UI/UX mindset. I turn research into clear, fast interfaces, and I care about accessibility, performance, and elegant structure.</p>
        <p>Recent work: JSL3 docs redesign (search, onboarding, live Playground) and an interactive housing data explorer for Eindhoven.</p>

        <h2>Skills</h2>
        <ul>
          <li><strong>Frontend:</strong> React, TypeScript, Vite, Tailwind</li>
          <li><strong>Data Viz:</strong> Leaflet, basic Three.js</li>
          <li><strong>UX:</strong> interviews, prototyping, usability testing</li>
          <li><strong>Tooling:</strong> Git, GitHub Actions, Lighthouse</li>
        </ul>

        <h2>Resume</h2>
        <p><a href="/downloads/KhoaNguyen_CV.pdf" target="_blank" rel="noreferrer">Download my CV (PDF)</a></p>

        <h2>Values</h2>
        <ul>
          <li>Clarity over flash</li>
          <li>Fast by default</li>
          <li>Accessible for everyone</li>
        </ul>
      </div>
    </Section>
  )
}
