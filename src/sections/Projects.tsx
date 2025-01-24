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
          description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, minima. Aperiam, illo aut! Reiciendis cupiditate pariatur est nesciunt. Est, facilis!'
          live='https://adi-os.vercel.app'
          source='https://github.com/adharmic/adiOS'
          img='/adios.png'
        />
        <div className='self-start w-1/2 md:w-full'>
          <Separator />
        </div>
        <Project
          name="Hell's Fury"
          img='/hells_fury.png'
          live='https://hells-fury.firebaseapp.com/'
          source='https://github.com/Ed-joe/Hells-Fury/tree/master/Source%20Game'
          description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, minima. Aperiam, illo aut! Reiciendis cupiditate pariatur est nesciunt. Est, facilis!'
        />
      </div>
    </div>
  )
}
