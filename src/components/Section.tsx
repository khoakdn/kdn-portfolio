import type { PropsWithChildren } from 'react'

type Props = PropsWithChildren<{ className?: string }>

export default function Section({ children, className='' }: Props) {
  return (
    <section className={`mx-auto w-full max-w-screen-xl px-4 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </section>
  )
}
