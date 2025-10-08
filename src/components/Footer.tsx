import Section from './Section'

export default function Footer() {
  return (
    <footer className="border-t border-neutral-200">
      <Section className="py-10 text-sm text-neutral-500 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <p>&copy; {new Date().getFullYear()} Khoa Nguyen. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <a href="mailto:you@example.com" className="hover:underline">Email</a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="hover:underline">LinkedIn</a>
          <a href="https://github.com/" target="_blank" rel="noreferrer" className="hover:underline">GitHub</a>
        </div>
      </Section>
    </footer>
  )
}
