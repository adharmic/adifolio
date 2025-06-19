import Header from '../components/Header'
import Work from '../components/Work'
import { TbBrandCSharp } from 'react-icons/tb'
import { TbBrandReact } from 'react-icons/tb'
import { TbBrandMongodb } from 'react-icons/tb'
import { TbBrandMysql } from 'react-icons/tb'
import { TbBrandDocker } from 'react-icons/tb'
import { AiOutlineJava } from 'react-icons/ai'
import { SiJenkins } from 'react-icons/si'
import { SiDotnet } from 'react-icons/si'
import { TbBrandPython } from 'react-icons/tb'
import { BiLogoSpringBoot } from 'react-icons/bi'

export default function Experience() {
  return (
    <div id='experience' className='flex flex-col md:flex-row gap-4 md:gap-16'>
      <Header>Experience</Header>
      <div className='flex flex-col gap-8 w-full'>
        <Work
          logo='/jpmc.png'
          position='Software Engineer'
          company='J.P. Morgan & Chase'
          years='2025 - Present'
          description='Full-stack development of financial reporting and regulatory systems.'
          skills={[<TbBrandReact />, <TbBrandCSharp />, <SiDotnet />, ]}
        />
        <Work
          logo='/kantime.svg'
          position='Software Engineer'
          company='KanTime'
          years='2023 - 2025'
          description='Development of a healthcare PWA with EMR system serving providers, using React, .NET and Kafka for real-time medical reporting.'
          skills={[<TbBrandReact />, <TbBrandCSharp />, <SiDotnet />, <TbBrandMongodb />, <TbBrandMysql />, <TbBrandDocker />]}
        />
        <Work
          logo='/comcast.svg'
          position='Software/Security Engineer'
          company='Comcast'
          years='2022 - 2023'
          description='Developed and maintained full-stack inventory management system with automated CI/CD pipelines and SSL certification processes, significantly improving deployment security.'
          skills={[<TbBrandReact />, <AiOutlineJava />, <SiJenkins />, <BiLogoSpringBoot />]}
        />
        <Work
          logo='/prohashing.png'
          position='Backend Engineer'
          company='PROHASHING'
          years='2021 - 2022'
          description='Built distributed transaction processing systems and APIs, implementing monitoring solutions that substantially reduced system outages.'
          skills={[<TbBrandPython />]}
        />
      </div>
    </div>
  )
}
