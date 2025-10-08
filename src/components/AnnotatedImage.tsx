import { useState } from 'react'

type Marker = {
  x: number // 0..100
  y: number // 0..100
  title: string
  body?: string
}

export default function AnnotatedImage({
  src, alt, markers
}: { src: string, alt?: string, markers: Marker[] }) {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <div className="relative rounded-2xl border overflow-hidden not-prose">
      <img src={src} alt={alt} className="block w-full" />
      {markers.map((m, i) => (
        <div key={i} style={{ left: `${m.x}%`, top: `${m.y}%` }}
          className="absolute -translate-x-1/2 -translate-y-1/2">
          <button
            className="h-6 w-6 rounded-full bg-black/80 text-white text-xs leading-6 text-center shadow hover:bg-black"
            onMouseEnter={() => setOpen(i)} onMouseLeave={() => setOpen(null)}
            onFocus={() => setOpen(i)} onBlur={() => setOpen(null)}
            aria-label={m.title}
          >{i+1}</button>
          {open === i && (
            <div className="absolute left-3 top-3 z-10 w-56 rounded-xl border bg-white p-3 text-xs text-neutral-700 shadow-lg">
              <div className="font-medium mb-1">{m.title}</div>
              {m.body ? <p>{m.body}</p> : null}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
