import Section from '@/components/Section'

export default function About() {
  return (
    <Section className="py-20 sm:py-28">
      <div className="prose max-w-none">
        <h1>About</h1>
        <p>I’m Khoa Nguyen — a frontend developer with a UI/UX mindset. I enjoy turning research
        insights into clear, fast interfaces. My interests include design systems, accessibility,
        and data visualization.</p>
        <h2>Skills</h2>
        <ul>
          <li>Frontend: React, TypeScript, Tailwind, Vite</li>
          <li>UX: user interviews, wireframing, prototyping, usability testing</li>
          <li>Tooling: Git, GitHub Actions, Plausible/Umami, Lighthouse</li>
        </ul>
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
