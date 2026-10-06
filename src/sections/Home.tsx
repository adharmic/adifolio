import { AiOutlineDownload, AiOutlineSend } from 'react-icons/ai'
import Button from '../components/Button'
import { jobs, profile, socials } from '../data'

const bootLines = ['establishing uplink', 'decrypting personnel file', 'rendering profile']

const readouts = [
  {
    label: 'status',
    value: (
      <>
        <span aria-hidden className='mr-2 inline-block size-2 animate-pulse rounded-full bg-cyan' />
        online
      </>
    ),
  },
  { label: 'current post', value: jobs[0].company },
  { label: 'experience', value: '4+ years' },
]

export default function Home() {
  return (
    <section id='home' aria-labelledby='home-title' className='flex flex-col gap-8 md:flex-row md:items-center md:gap-12'>
      <div className='flex flex-col items-center gap-5 md:w-[220px] md:shrink-0'>
        <div className='relative size-44 md:size-52'>
          <div aria-hidden className='absolute inset-0 animate-spin-slow rounded-full border border-dashed border-cyan/50' />
          <div aria-hidden className='absolute inset-2.5 rounded-full border border-amber/40' />
          {/* Targeting reticle ticks */}
          <div aria-hidden className='absolute top-0 left-1/2 h-3 w-px -translate-x-1/2 bg-amber' />
          <div aria-hidden className='absolute bottom-0 left-1/2 h-3 w-px -translate-x-1/2 bg-amber' />
          <div aria-hidden className='absolute top-1/2 left-0 h-px w-3 -translate-y-1/2 bg-amber' />
          <div aria-hidden className='absolute top-1/2 right-0 h-px w-3 -translate-y-1/2 bg-amber' />
          <img
            src={profile.headshot}
            alt={`Portrait of ${profile.name}`}
            className='absolute inset-5 size-[calc(100%-2.5rem)] rounded-full border-2 border-cream object-cover'
          />
        </div>
        <ul className='flex gap-3'>
          {socials.map((social) => (
            <li key={social.name}>
              <a
                href={social.href}
                aria-label={social.name}
                className='flex size-10 items-center justify-center rounded-full bg-amber transition-all hover:scale-110 hover:rotate-[360deg] active:scale-90'
              >
                <img src={social.icon} alt='' className='size-5' />
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className='flex w-full min-w-0 flex-col gap-4'>
        <div aria-hidden className='space-y-1 text-xs text-cream/50 md:text-sm'>
          {bootLines.map((line, i) => (
            <p key={line} className='animate-boot' style={{ animationDelay: `${i * 0.2}s` }}>
              <span className='text-cyan'>[ OK ]</span> {line}
              <span className='text-cream/25'> ........</span>
            </p>
          ))}
          <p className='animate-boot text-amber/80' style={{ animationDelay: '0.6s' }}>
            $ whoami
          </p>
        </div>

        <div className='animate-boot' style={{ animationDelay: '0.8s' }}>
          <h1 id='home-title' className='gradient-header glow w-fit font-display text-4xl font-bold md:text-6xl'>
            {profile.name}
          </h1>
          <p className='gradient-header-alt mt-1 w-fit text-lg md:text-xl'>{profile.role}</p>
        </div>

        <dl className='grid grid-cols-1 gap-px border border-amber/20 bg-amber/20 text-xs uppercase tracking-widest sm:grid-cols-3'>
          {readouts.map(({ label, value }) => (
            <div key={label} className='bg-void/90 px-3 py-2'>
              <dt className='text-cream/45'>{label}</dt>
              <dd className='mt-1 flex items-center text-cream'>{value}</dd>
            </div>
          ))}
        </dl>

        <p className='max-w-prose leading-relaxed'>{profile.bio}</p>

        <div className='flex flex-wrap gap-3'>
          <Button href={profile.resume} download icon={<AiOutlineDownload />}>
            Résumé
          </Button>
          <Button href='#contact' variant='outline' icon={<AiOutlineSend />}>
            Get in touch
          </Button>
        </div>
      </div>
    </section>
  )
}
