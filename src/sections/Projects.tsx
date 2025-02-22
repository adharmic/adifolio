import Header from '../components/Header'
import Project from '../components/Project'
import Separator from '../components/Separator'

export default function Projects () {
  return (
    <div id='projects' className='flex flex-col md:flex-row gap-4 md:gap-16'>
      <Header>Projects</Header>
      <div className='flex flex-col gap-8 w-full'>
        <Project
          name='adiOS'
          description='A mock operating system inspired by Windows XP and written using React and Typescript.'
          live='https://adi-os.vercel.app'
          source='https://github.com/adharmic/adiOS'
        >
          <img className='h-64 rounded-lg' src='/adios.png' />
        </Project>
        <div className='self-start w-1/2 md:w-full'>
          <Separator />
        </div>
        <Project
          name="Hell's Fury"
          live='https://hells-fury.firebaseapp.com/'
          source='https://github.com/Ed-joe/Hells-Fury/tree/master/Source%20Game'
          description='A feature-complete, dungeon-crawling web game written entirely in Typescript with custom art and musical assets. Second place winner of the 2021 Stony Brook University Game Programming Competition.'
        >
          <iframe
            className='rounded-lg h-64'
            src='https://www.youtube-nocookie.com/embed/C4GsruPaAgs?si=AX7yPOctR7697_vS'
            title='YouTube video player'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
          ></iframe>
          <img className='h-64 rounded-lg' src='/hells_fury.png' />
        </Project>
      </div>
    </div>
  )
}
