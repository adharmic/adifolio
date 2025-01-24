import Separator from '../components/Separator'
import Work from '../components/Work'

export default function Experience () {
  return (
    <div className='flex flex-row gap-16'>
      <div className='w-[200px]'>
        <div className='w-full text-2xl'>Work Experience</div>
      </div>
      <div className='flex flex-col gap-8 w-full'>
        <Work
          position='Software Engineer'
          company='KanTime'
          years='2023 - Present'
          description='Development of a healthcare PWA with EMR system serving providers, using React, .NET and Kafka for real-time medical reporting.'
        />
        <Separator />
        <Work
          position='Software/Security Engineer'
          company='Comcast'
          years='2022 - 2023'
          description='Developed and maintained full-stack inventory management system with automated CI/CD pipelines and SSL certification processes, significantly improving deployment security.'
        />
        <Separator />
        <Work
          position='Backend Engineer'
          company='PROHASHING'
          years='2022 - 2022'
          description='Built distributed transaction processing systems and APIs, implementing monitoring solutions that substantially reduced system outages.'
        />
      </div>
    </div>
  )
}
