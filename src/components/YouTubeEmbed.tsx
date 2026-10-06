import { useState } from 'react'
import { BsPlayFill } from 'react-icons/bs'

const frame = 'aspect-video h-48 shrink-0 snap-start border border-cream/15 md:h-64'

// Shows a thumbnail until clicked, so YouTube's player only loads on demand.
export default function YouTubeEmbed({ id, title }: { id: string; title: string }) {
  const [playing, setPlaying] = useState(false)

  if (playing) {
    return (
      <iframe
        className={frame}
        src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1`}
        title={title}
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
        allowFullScreen
      />
    )
  }

  return (
    <button type='button' onClick={() => setPlaying(true)} className={`group relative overflow-hidden ${frame}`}>
      <img
        src={`https://i.ytimg.com/vi/${id}/hqdefault.jpg`}
        alt=''
        loading='lazy'
        className='size-full object-cover opacity-75 transition group-hover:opacity-100'
      />
      <span className='absolute inset-0 flex items-center justify-center'>
        <span className='flex items-center gap-2 border border-amber bg-void/85 px-3 py-2 text-xs uppercase tracking-widest text-amber'>
          <BsPlayFill aria-hidden className='text-base' />
          Play video<span className='sr-only'>: {title}</span>
        </span>
      </span>
    </button>
  )
}
