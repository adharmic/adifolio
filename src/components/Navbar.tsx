import { useEffect, useState } from 'react'

const links = ['home', 'experience', 'projects', 'contact']

export default function Navbar() {
  const [active, setActive] = useState('home')
  const [open, setOpen] = useState(false)

  // Highlight whichever section is crossing the middle of the viewport.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) if (entry.isIntersecting) setActive(entry.target.id)
      },
      { rootMargin: '-45% 0px -50% 0px' },
    )
    for (const id of links) {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    }
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  const linkList = (className: string) => (
    <ul className={className}>
      {links.map((id, i) => (
        <li key={id}>
          <a
            href={`#${id}`}
            onClick={() => setOpen(false)}
            aria-current={active === id ? 'location' : undefined}
            className={`link-underline pb-0.5 ${active === id ? 'text-amber' : 'text-cream/75 hover:text-cream'}`}
          >
            <span className='mr-1 text-cyan/60'>0{i + 1}</span>./{id}
          </a>
        </li>
      ))}
    </ul>
  )

  return (
    <header className='fixed inset-x-0 top-0 z-[55] border-b border-amber/20 bg-void/85 backdrop-blur-md'>
      {/* Sits above the global scanlines (so project images can scroll under it), so it draws its own */}
      <div aria-hidden className='scanlines pointer-events-none absolute inset-0' />
      <nav aria-label='Primary' className='mx-auto flex h-16 max-w-[1400px] items-center justify-between px-4 md:px-8'>
        <a href='#home' className='font-display text-base md:text-xl' aria-label='Adithya Ajith, back to top'>
          <span className='gradient-header'>adithyajith</span>
          <span className='text-cyan/70'>@orbit</span>
          <span className='text-cream/50'>:~$</span>
          <span aria-hidden className='ml-1 inline-block h-4 w-2 translate-y-0.5 animate-blink bg-amber md:h-5 md:w-2.5' />
        </a>
        {linkList('hidden gap-6 text-sm md:flex')}
        <button
          type='button'
          className='border border-amber/60 px-2 py-1 text-xs uppercase tracking-widest text-amber md:hidden'
          aria-expanded={open}
          aria-controls='mobile-nav'
          onClick={() => setOpen(!open)}
        >
          {open ? '[ close ]' : '[ menu ]'}
        </button>
      </nav>
      {open && (
        <div id='mobile-nav' className='border-t border-amber/20 px-4 py-4 md:hidden'>
          {linkList('flex flex-col gap-4 text-base')}
        </div>
      )}
    </header>
  )
}
