import Button from '../components/Button'
import Header from '../components/Header'
import { AiOutlineSend } from 'react-icons/ai'

export default function Contact() {
  return (
    <div id='contact' className='flex flex-col md:flex-row gap-4 md:gap-16'>
      <Header>Contact</Header>
      <div className='w-full flex flex-col gap-2'>
        <div className='w-full flex flex-col gap-1'>
          <div className='text-2xl font-[300] gradient-header-alt'>Name</div>
          <input className='w-full rounded-lg border-1 p-2 border-[#ffffe3]'></input>
        </div>
        <div className='w-full flex flex-col gap-1 '>
          <div className='text-2xl font-[300] gradient-header-alt'>Email</div>
          <input className='w-full rounded-lg border-1 p-2 border-[#ffffe3]'></input>
        </div>
        <div className='w-full flex flex-col gap-1'>
          <div className='text-2xl font-[300] gradient-header-alt'>Message</div>
          <textarea className='w-full rounded-lg border-1 p-2 border-[#ffffe3]'></textarea>
        </div>
        <Button icon={<AiOutlineSend />}>Submit</Button>
      </div>
    </div >
  )
}
