import Navbar from './components/Navbar'
import Separator from './components/Separator'
import Home from './sections/Home'
import Experience from './sections/Experience'

export default function App () {
  return (
    <>
      <Navbar />
      <div className='gradient w-screen h-min-screen flex items-center font-[200] flex-col'>
        <div className='w-11/12 md:w-3/4 flex flex-col gap-8 pt-16'>
          <Home />
          <Separator />
          <Experience />
          {/* <div className='flex flex-row gap-16'>
          <div className='w-[200px]'>
            <div className='w-full text-2xl'>Projects</div>
          </div>
          <div className='w-full'></div>
        </div> */}
        </div>
      </div>
    </>
  )
}
