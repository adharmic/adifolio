import { Job } from '../data'
import Panel from './Panel'

export default function Work({ job }: { job: Job }) {
  return (
    <Panel as='article' title={`${job.id}.log`} meta={job.years}>
      <div className='flex items-center gap-4'>
        <div className='flex size-16 shrink-0 items-center justify-center rounded-full bg-cream p-2 ring-1 ring-amber/60 ring-offset-2 ring-offset-void'>
          <img src={job.logo} alt='' loading='lazy' className='size-full object-contain' />
        </div>
        <div className='min-w-0'>
          <h3 className='gradient-header-alt font-display text-xl font-bold md:text-2xl'>{job.company}</h3>
          <p className='text-cream/80'>{job.position}</p>
        </div>
      </div>
      <p className='mt-4 leading-relaxed'>
        <span aria-hidden className='text-amber'>&gt; </span>
        {job.description}
      </p>
      <ul aria-label='Technologies' className='mt-4 flex flex-wrap gap-2'>
        {job.skills.map(({ name, icon: Icon }) => (
          <li key={name} className='flex items-center gap-1.5 border border-amber/40 px-2 py-1 text-xs text-amber'>
            <Icon aria-hidden className='text-base' />
            {name}
          </li>
        ))}
      </ul>
    </Panel>
  )
}
