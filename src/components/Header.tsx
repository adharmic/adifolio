import { PropsWithChildren } from 'react'

export default function Header(props: PropsWithChildren) {
  return (
    <div className='w-full md:w-[200px]'>
      <div className='w-full text-2xl md:text-start font-[400] gradient-header'>
        {props.children}
      </div>
    </div>
  )
}
