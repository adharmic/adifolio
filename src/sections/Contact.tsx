import Header from '../components/Header'

export default function Contact () {
  return (
    <div className='flex flex-col md:flex-row gap-4 md:gap-16'>
      <Header>Contact</Header>
      <div className='w-full flex flex-col gap-4'>
        <div className='w-full flex flex-col gap-1'>
          <div className='text-2xl'>Name</div>
          <input className='w-full rounded-lg border-1 p-2 border-[#ffffe3]'></input>
        </div>
        <div className='w-full flex flex-col gap-1 '>
          <div className='text-2xl'>Email</div>
          <input className='w-full rounded-lg border-1 p-2 border-[#ffffe3]'></input>
        </div>
        <div className='w-full flex flex-col gap-1'>
          <div className='text-2xl'>Message</div>
          <textarea className='w-full rounded-lg border-1 p-2 border-[#ffffe3]'></textarea>
        </div>
        <div className='button text-xl self-end'>Submit</div>
      </div>
    </div>
  )
}
