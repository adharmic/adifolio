import { PropsWithChildren } from 'react'
import Button from './Button'
import { AiOutlineLink } from 'react-icons/ai'
import { AiOutlineCode } from 'react-icons/ai'

interface ProjectProps {
  name: string
  source: string
  live: string
  description: string
  tags: Array<string>
}

export default function Project({
  name,
  description,
  source,
  live,
  tags,
  children
}: PropsWithChildren<ProjectProps>) {
  return (
    <div className='w-full flex flex-col gap-2'>
      <div className='w-full text-2xl font-[400]'>{name}</div>
      <div className='flex flex-row gap-2'>
        {tags.map((tag, index) => {
          return (
            <div key={index} className='border-1 border-[#ffffe3] text-[#ffffe3] w-fit px-2 py-1 rounded-sm text-xs font-[500]'>
              {tag}
            </div>
          )
        })}
      </div>
      <div className='w-full overflow-x-auto flex gap-4 rounded-lg '>
        {children}
      </div>
      <div className='w-full'>{description}</div>
      <div className='flex flex-row gap-2'>
        <Button icon={<AiOutlineLink />}>
          <a href={live}>Live Site</a>
        </Button>
        <Button icon={<AiOutlineCode />}>
          <a href={source}>Source Code</a>
        </Button>
      </div>
    </div>
  )
}
