export default function Ruler({ label }: { label: string }) {
  return (
    <div aria-hidden className='flex items-end gap-3 text-[10px] uppercase tracking-[0.3em] text-cream/40'>
      <span className='shrink-0'>{label}</span>
      <div className='ruler flex-1' />
    </div>
  )
}
