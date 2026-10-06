import Section from '../components/Section'
import Work from '../components/Work'
import { jobs } from '../data'

export default function Experience() {
  return (
    <Section id='experience' index='02' title='Experience' command='tail ./logs/career.log'>
      {jobs.map((job) => (
        <Work key={job.id} job={job} />
      ))}
    </Section>
  )
}
