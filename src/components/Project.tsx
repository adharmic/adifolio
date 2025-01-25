import { PropsWithChildren } from 'react'
import Button from './Button'

interface ProjectProps {
  name: string
  source: string
  live: string
  description: string
}

export default function Project ({
  name,
  description,
  source,
  live,
  children
}: PropsWithChildren<ProjectProps>) {
  return (
    <div className='w-full flex flex-col gap-2'>
      <div className='w-full text-2xl'>{name}</div>
      <div className='w-full overflow-x-auto flex gap-4 rounded-lg pb-4'>
        {children}
      </div>
      <div className='w-full'>{description}</div>
      <Button>
        <a href={live}>Live Site</a>
      </Button>
      <Button>
        <a href={source}>Source Code</a>
      </Button>
    </div>
  )
}
