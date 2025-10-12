// src/components/RevealWords.tsx
import { M, fadeUp, stagger } from "@/components/motion"

export default function RevealWords({
  text, className=''
}: { text: string; className?: string }) {
  const words = text.split(" ")

  return (
    <M.h1
      className={className}
      variants={stagger(0.06)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "0px 0px -20% 0px" }}
      aria-label={text}
    >
      {words.map((w, i) => (
        <M.span
          key={i}
          variants={fadeUp}
          className="inline-block mr-[0.32em]" // preserve tracking look
        >
          {w}
        </M.span>
      ))}
    </M.h1>
  )
}
