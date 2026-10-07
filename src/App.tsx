import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Ruler from './components/Ruler'
import Starfield from './components/Starfield'
import Contact from './sections/Contact'
import Experience from './sections/Experience'
import Home from './sections/Home'
import Projects from './sections/Projects'

export default function App() {
  return (
    <>
      <a
        href='#main'
        className='sr-only bg-amber px-3 py-2 text-void focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[65]'
      >
        Skip to content
      </a>
      <Starfield />
      <div aria-hidden className='crt-scanlines scanlines' />
      <div aria-hidden className='crt-vignette' />
      <Navbar />
      <main id='main' className='relative mx-auto flex w-11/12 max-w-[1400px] flex-col gap-10 pt-28 pb-16 md:w-3/4'>
        <Home />
        <Ruler label='// 01 → 02' />
        <Experience />
        <Ruler label='// 02 → 03' />
        <Projects />
        <Ruler label='// 03 → 04' />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
