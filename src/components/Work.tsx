interface WorkProps {
  company: string
  position: string
  years: string
  description: string
}

export default function Work ({
  company,
  position,
  years,
  description
}: WorkProps) {
  return (
    <div className='w-full flex flex-col gap-2'>
      <div className='w-full text-2xl'>{company}</div>
      <div className='w-full text-xl'>{position}</div>
      <div className='w-full text-lg'>{years}</div>
      <div className='w-full'>{description}</div>
    </div>
  )
}
