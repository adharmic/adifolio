import { PropsWithChildren } from 'react'

export default function Button (props: PropsWithChildren) {
  return (
    <div className='w-fit border-1 border-[#ffffe3] py-2 px-4 text-lg text-[#ffffe3] rounded-lg hover:cursor-pointer hover:bg-[#ffffe3] transition-all hover:text-[#000c1a] hover:-translate-y-1 active:translate-y-1'>
      {props.children}
    </div>
  )
}
