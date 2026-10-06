import Project from '../components/Project'
import Section from '../components/Section'
import { projects } from '../data'

export default function Projects() {
  return (
    <Section id='projects' index='03' title='Projects' command='ls ~/projects'>
      {projects.map((project) => (
        <Project key={project.id} project={project} />
      ))}
    </Section>
  )
}
