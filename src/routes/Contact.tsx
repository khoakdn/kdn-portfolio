import Section from '@/components/Section'

export default function Contact() {
  return (
    <Section className="py-24">
      <div className="max-w-xl">
        <h1 className="text-3xl font-semibold tracking-tight">Contact</h1>
        <p className="mt-3 text-neutral-600">Want to collaborate or discuss an internship opportunity in the Netherlands? Reach out.</p>
        <form className="mt-6 space-y-4">
          <div>
            <label className="block text-sm font-medium">Your email</label>
            <input type="email" className="mt-1 block w-full rounded-lg border px-3 py-2" placeholder="you@domain.com" />
          </div>
          <div>
            <label className="block text-sm font-medium">Message</label>
            <textarea className="mt-1 block w-full rounded-lg border px-3 py-2" rows={5} placeholder="Hello Khoa, ..."></textarea>
          </div>
          <button type="button" onClick={() => alert('Hook this to your email or a service later')}
            className="rounded-xl bg-black px-4 py-2 text-white">Send</button>
        </form>
        <p className="mt-6 text-sm text-neutral-500">Or email me directly: <a href="mailto:you@example.com" className="underline">you@example.com</a></p>
      </div>
    </Section>
  )
}
