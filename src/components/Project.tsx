interface ProjectProps {
  name: string
  source: string
  live: string
  img: string
  description: string
}

export default function Project ({
  name,
  description,
  source,
  live,
  img
}: ProjectProps) {
  return (
    <div className='w-full flex flex-col gap-2'>
      <div className='w-full text-2xl'>{name}</div>
      <img src={img} className='w-fit h-64 rounded-lg  ' />
      <div className='w-full'>{description}</div>
      <a href={live} className='button'>
        Live Site
      </a>
      <a href={source} className='button'>
        Source Code
      </a>
    </div>
  )
}
