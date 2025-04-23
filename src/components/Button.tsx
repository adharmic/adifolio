import { PropsWithChildren, ReactNode } from 'react'

interface ButtonProps {
  icon?: ReactNode
}

export default function Button(props: PropsWithChildren<ButtonProps>) {
  return (
    <div className='bg-[#feaf3c] w-fit py-1 px-2 border-2 border-[#000c1a] hover:border-[#feaf3c] text-lg font-[400] text-[#000c1a] rounded-lg hover:cursor-pointer hover:bg-[#000c1a] transition-all active:scale-75 hover:text-[#feaf3c] flex flex-row items-center justify-between gap-1'>
      <div className='bg-[#feaf3c] text-[#000c1a] rounded-full p-1'>
        {props.icon}
      </div>
      {props.children}
    </div>
  )
}
