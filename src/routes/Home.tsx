import Section from '@/components/Section'
import { Link } from 'react-router-dom'

export default function Home(){
  return (
    <Section className="py-16">
      <h1 className="text-3xl font-semibold">Minimal, clear, outcomes-driven portfolio</h1>
      <p className="mt-3 text-neutral-600">Selected projects below.</p>
      <Link to="/work" className="mt-6 inline-flex rounded-xl bg-black px-4 py-2 text-white">See all work</Link>
    </Section>
  )
}
