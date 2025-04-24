import { PropsWithChildren } from 'react'

export default function Header(props: PropsWithChildren) {
  return (
    <div className='w-full md:w-[200px] p-4 border-1 border-[#feaf3c] rounded-lg h-fit bg-[#000c1a] md:sticky top-24'>
      <div className='w-full text-3xl md:text-2xl md:text-start font-[400] gradient-header flex items-center justify-center'>
        {props.children}
      </div>
    </div>
  )
}
