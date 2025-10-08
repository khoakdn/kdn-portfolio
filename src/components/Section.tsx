import type { PropsWithChildren } from 'react'
export default function Section({children, className=''}: PropsWithChildren<{className?: string}>){
  return <section className={`mx-auto w-full max-w-screen-xl px-4 ${className}`}>{children}</section>
}
