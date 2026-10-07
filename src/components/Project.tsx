import { useState } from 'react'
import { AiOutlineCode, AiOutlineLink } from 'react-icons/ai'
import { ProjectEntry } from '../data'
import Button from './Button'
import Lightbox from './Lightbox'
import Panel from './Panel'
import YouTubeEmbed from './YouTubeEmbed'

export default function Project({ project }: { project: ProjectEntry }) {
  const { id, name, description, source, live, liveLabel, tags, media } = project
  const images = media.filter((item) => item.kind === 'image')
  const [viewing, setViewing] = useState<number | null>(null)
  return (
    <Panel as='article' title={`~/projects/${id}`} meta={`${media.length} file${media.length === 1 ? '' : 's'}`}>
      <h3 className='gradient-header-alt font-display text-2xl font-bold'>{name}</h3>
      <ul aria-label='Tags' className='mt-2 flex flex-wrap gap-2 text-xs'>
        {tags.map((tag) => (
          <li key={tag} className='border border-cream/30 px-2 py-0.5 text-cream/80'>
            {tag}
          </li>
        ))}
      </ul>
      {media.length > 0 && (
        <div
          role='group'
          aria-label={`${name} media`}
          tabIndex={0}
          className='mt-4 flex snap-x snap-mandatory gap-3 overflow-x-auto pb-2'
        >
          {media.map((item) =>
            item.kind === 'image' ? (
              // Raised above the CRT scanlines so screenshots show clean
              <button
                key={item.src}
                type='button'
                onClick={() => setViewing(images.indexOf(item))}
                aria-label={`View full size: ${item.alt}`}
                className='relative z-[51] shrink-0 snap-start cursor-zoom-in border border-cream/15 transition hover:border-amber/60'
              >
                <img src={item.src} alt={item.alt} loading='lazy' className='block h-48 w-auto md:h-64' />
              </button>
            ) : (
              <YouTubeEmbed key={item.id} id={item.id} title={item.title} />
            ),
          )}
        </div>
      )}
      <Lightbox images={images} index={viewing} onChange={setViewing} />
      <p className='mt-4 leading-relaxed'>{description}</p>
      <div className='mt-4 flex flex-wrap gap-3'>
        <Button href={live} icon={<AiOutlineLink />}>
          {liveLabel ?? 'Live site'}
        </Button>
        {source && (
          <Button href={source} variant='outline' icon={<AiOutlineCode />}>
            Source
          </Button>
        )}
      </div>
    </Panel>
  )
}
