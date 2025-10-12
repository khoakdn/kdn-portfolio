export default function Availability({label='Available for internship'}:{label?:string}) {
  return (
    <span className="inline-flex items-center rounded-full border border-neutral-200 px-3 py-1 text-xs text-neutral-600">
      <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-green-500" />
      {label}
    </span>
  )
}
