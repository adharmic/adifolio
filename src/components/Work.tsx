import { ReactNode } from "react"

interface WorkProps {
  company: string
  position: string
  years: string
  description: string
  logo: string
  skills?: Array<ReactNode>
}

export default function Work({
  logo,
  company,
  position,
  years,
  description,
  skills
}: WorkProps) {
  return (
    <div className='w-full flex flex-col gap-2 drop-shadow-lg p-4 bg-[#000c1a] rounded-lg border-1 border-[#feaf3c]'>
      <div className='w-full text-2xl font-[400] gradient-header-alt'>{company}</div>
      <div className="w-full flex row items-center gap-4 overflow-x-scroll">
        <div className="p-2 rounded-full bg-[#ffffe3] w-20 aspect-square">
          <img src={logo} className="w-20 aspect-square object-contain bg-[#ffffe3]" />
        </div>
        {
          skills?.map((skill, index) =>
            <div key={index} className="p-2 rounded-full border-1 border-[#feaf3c] w-12 aspect-square flex text-[#feaf3c] items-center justify-center text-3xl">
              {skill}
            </div>
          )
        }
      </div>
      <div className='w-full text-xl font-[300]'>{position}</div>
      <div className='w-full text-sm'>{years}</div>
      <div className='w-full'>{description}</div>
    </div>
  )
}
