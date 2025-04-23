import { PropsWithChildren, ReactNode } from 'react'

interface ButtonProps {
  icon?: ReactNode
}

export default function Button(props: PropsWithChildren<ButtonProps>) {
  return (
    <div className='bg-none w-fit py-1 px-2 border-2 border-[#feaf3c] text-lg font-[400] rounded-lg hover:cursor-pointer transition-all active:scale-75 text-[#feaf3c] flex flex-row items-center justify-between gap-1 hover:bg-[#feaf3c] hover:text-[#000c1a]'>
      <div className='bg-[#feaf3c] text-[#000c1a] rounded-full p-1'>
        {props.icon}
      </div>
      {props.children}
    </div>
  )
}
