import Navbar from './components/Navbar'
import Separator from './components/Separator'
import Home from './sections/Home'
import Experience from './sections/Experience'
import Projects from './sections/Projects'
import Contact from './sections/Contact'

export default function App () {
  return (
    <>
      <Navbar />
      <div className='gradient w-screen h-min-screen flex items-center font-[200] flex-col'>
        <div className='max-w-[1400px] w-11/12 md:w-3/4 flex flex-col gap-8 py-16'>
          <Home />
          <Separator />
          <Experience />
          <Separator />
          <Projects />
          <Separator />
          <Contact />
        </div>
      </div>
    </>
  )
}
