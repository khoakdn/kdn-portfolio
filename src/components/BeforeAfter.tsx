import { useState } from 'react'

type Props = {
  beforeSrc: string
  afterSrc: string
  beforeLabel?: string
  afterLabel?: string
  altBefore?: string
  altAfter?: string
}

export default function BeforeAfter({
  beforeSrc, afterSrc, beforeLabel='Before', afterLabel='After', altBefore='', altAfter=''
}: Props) {
  const [pos, setPos] = useState(50)

  return (
    <div className="relative w-full overflow-hidden rounded-2xl border select-none">
      <img src={beforeSrc} alt={altBefore} className="block w-full" />
      <div className="absolute inset-0 pointer-events-none" style={{ clipPath: `inset(0 ${100-pos}% 0 0)` }}>
        <img src={afterSrc} alt={altAfter} className="block w-full" />
      </div>
      <div className="absolute inset-y-0" style={{ left: `${pos}%` }} aria-hidden>
        <div className="h-full w-0.5 bg-white/80 mix-blend-difference"></div>
      </div>
      <div className="absolute left-3 top-3 rounded-full bg-black/70 px-2 py-1 text-xs text-white">{beforeLabel}</div>
      <div className="absolute right-3 top-3 rounded-full bg-black/70 px-2 py-1 text-xs text-white">{afterLabel}</div>
      <input aria-label="Comparison position" className="absolute inset-x-0 bottom-0 w-full cursor-ew-resize appearance-none bg-transparent py-4"
        type="range" min={0} max={100} value={pos} onChange={(e) => setPos(parseInt(e.target.value))} />
    </div>
  )
}
