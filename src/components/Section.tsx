import { PropsWithChildren } from 'react'

interface SectionProps {
  id: string
  index: string
  title: string
  command: string
}

export default function Section({ id, index, title, command, children }: PropsWithChildren<SectionProps>) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className='flex flex-col gap-4 md:flex-row md:gap-12'>
      <div className='panel z-10 h-fit w-full px-4 py-3 md:sticky md:top-24 md:w-[220px] md:shrink-0'>
        <div className='text-[11px] tracking-[0.3em] text-cyan/70'>[{index}]</div>
        <h2 id={`${id}-title`} className='gradient-header glow font-display text-2xl font-bold uppercase tracking-wider'>
          {title}
        </h2>
        <div aria-hidden className='mt-1 truncate text-xs text-cream/50'>
          &gt; {command}
          <span className='animate-blink text-amber'>_</span>
        </div>
      </div>
      <div className='flex w-full min-w-0 flex-col gap-6'>{children}</div>
    </section>
  )
}
