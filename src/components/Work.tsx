interface WorkProps {
  company: string
  position: string
  years: string
  description: string
  logo: string
}

export default function Work({
  logo,
  company,
  position,
  years,
  description
}: WorkProps) {
  return (
    <div className='w-full flex flex-col gap-2'>
      <div className='w-full text-2xl font-[300] gradient-header-alt'>{company}</div>
      <div className="p-2 rounded-full bg-[#ffffe3] w-20 aspect-square">
        <img src={logo} className="w-20 aspect-square object-contain bg-[#ffffe3]" />
      </div>
      <div className='w-full text-xl font-[200]'>{position}</div>
      <div className='w-full text-lg'>{years}</div>
      <div className='w-full'>{description}</div>
    </div>
  )
}
