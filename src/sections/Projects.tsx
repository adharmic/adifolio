import Header from '../components/Header'
import Project from '../components/Project'
import Separator from '../components/Separator'

export default function Projects() {
  return (
    <div id='projects' className='flex flex-col md:flex-row gap-4 md:gap-16'>
      <Header>Projects</Header>
      <div className='flex flex-col gap-8 w-full'>
        <Project
          name='ferox'
          description='An offline path-tracing image renderer coded entirely in Rust. Capable of reflections, refractions, shading, and other physically-based image rendering processes. Runs from the command line and can take custom scene configurations and environment maps.'
          source='https://github.com/adharmic/ferox'
          live='https://crates.io/crates/ferox'
          tags={['rust', 'graphics', 'cli', 'linalg']}>
          <img className='h-64 rounded-lg' src='/ferox_3.png' />
          <img className='h-64 rounded-lg' src='/ferox_1.png' />
          <img className='h-64 rounded-lg' src='/ferox_2.png' />
        </Project>
        <div className='self-start w-1/2 md:w-full'>
          <Separator />
        </div>
        <Project
          name='Treeline'
          description='A narrative horror game created in Blender and Godot. Made as part of a month-long solo-development game jam, with mostly hand-made assets.'
          source='https://github.com/adharmic/treeline'
          live='https://adharmic.itch.io/treeline'
          tags={['godot', 'blender', 'game programming']}>
          <img className='h-64 rounded-lg' src='/treeline_1.jpeg' />
          <img className='h-64 rounded-lg' src='/treeline_2.jpeg' />
          <img className='h-64 rounded-lg' src='/treeline_3.jpeg' />
        </Project>
        <div className='self-start w-1/2 md:w-full'>
          <Separator />
        </div>
        <Project
          name='adiOS'
          description='A mock operating system inspired by Windows XP and written using React and Typescript. Handcrafted vector and 3D assets made in Blender and Affinity Designer.'
          live='https://adi-os.vercel.app'
          source='https://github.com/adharmic/adiOS'
          tags={["typescript", "nextjs", "blender", "affinity designer"]}
        >
          <img className='h-64 rounded-lg' src='/adios.png' />
        </Project>
        <div className='self-start w-1/2 md:w-full'>
          <Separator />
        </div>
        <Project
          tags={["typescript", "gamedev", "aseprite"]}
          name="Hell's Fury"
          live='https://hells-fury.firebaseapp.com/'
          source='https://github.com/Ed-joe/Hells-Fury/tree/master/Source%20Game'
          description='A feature-complete, dungeon-crawling web game written entirely in Typescript with home-made art and musical assets. Second place winner of the 2021 Stony Brook University Game Programming Competition.'
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
