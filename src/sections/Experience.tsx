import Header from '../components/Header'
import Separator from '../components/Separator'
import Work from '../components/Work'
import { TbBrandCSharp } from 'react-icons/tb'
import { TbBrandReact } from 'react-icons/tb'
import { TbBrandMongodb } from 'react-icons/tb'

export default function Experience() {
  return (
    <div id='experience' className='flex flex-col md:flex-row gap-4 md:gap-16'>
      <Header>Experience</Header>
      <div className='flex flex-col gap-8 w-full'>
        <Work
          logo='/kantime.svg'
          position='Software Engineer'
          company='KanTime'
          years='2023 - Present'
          description='Development of a healthcare PWA with EMR system serving providers, using React, .NET and Kafka for real-time medical reporting.'
          skills={[<TbBrandReact />, <TbBrandCSharp />, <TbBrandMongodb />]}
        />
        <Work
          logo='/comcast.svg'
          position='Software/Security Engineer'
          company='Comcast'
          years='2022 - 2023'
          description='Developed and maintained full-stack inventory management system with automated CI/CD pipelines and SSL certification processes, significantly improving deployment security.'
        />
        <Work
          logo='/prohashing.png'
          position='Backend Engineer'
          company='PROHASHING'
          years='2021 - 2022'
          description='Built distributed transaction processing systems and APIs, implementing monitoring solutions that substantially reduced system outages.'
        />
      </div>
    </div>
  )
}
