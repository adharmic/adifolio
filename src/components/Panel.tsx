import { PropsWithChildren, ReactNode } from 'react'

interface PanelProps {
  title: string
  meta?: ReactNode
  as?: 'div' | 'article'
  className?: string
}

// A terminal window: a title bar with a file name, then the content.
export default function Panel({ title, meta, as: Tag = 'div', className = '', children }: PropsWithChildren<PanelProps>) {
  return (
    <Tag className={`panel ${className}`}>
      <div className='flex items-center justify-between gap-4 border-b border-amber/20 px-4 py-2 text-[11px] uppercase tracking-[0.2em] text-cream/55'>
        <span className='truncate'>
          <span aria-hidden className='mr-2 text-amber'>■</span>
          {title}
        </span>
        {meta && <span className='shrink-0 text-cyan/80'>{meta}</span>}
      </div>
      <div className='p-4 md:p-5'>{children}</div>
    </Tag>
  )
}
