export default function Footer() {
  return (
    <footer className='relative z-10 border-t border-amber/20 bg-void/85 text-[11px] uppercase tracking-widest text-cream/55'>
      <div className='mx-auto flex max-w-[1400px] flex-col gap-2 px-4 py-4 md:flex-row md:items-center md:justify-between md:px-8'>
        <span>
          <span aria-hidden className='mr-2 text-cyan'>●</span>all systems nominal
        </span>
        <span>© {new Date().getFullYear()} Adithya Ajith · built with react + vite</span>
        <a href='#home' className='link-underline w-fit text-amber/80 hover:text-amber'>
          ▲ return to orbit
        </a>
      </div>
    </footer>
  )
}
