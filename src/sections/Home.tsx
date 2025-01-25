import Button from '../components/Button'

export default function Home () {
  return (
    <div className='flex flex-col md:flex-row gap-4 md:gap-16'>
      <div className='w-full md:w-[200px] flex flex-col gap-2 justify-between'>
        <img
          className='md:w-full w-32 aspect-square rounded-full border-4 border-[#ffffe3]'
          src='/headshot.jpg'
        />
        <div className='w-fit md:w-full flex flex-row gap-2 justify-between'>
          <a
            href={'https://www.linkedin.com/in/adithya-ajith/'}
            className='w-10 bg-[#ffffe3] flex items-center justify-center aspect-square rounded-full hover:-translate-y-1 transition-all active:scale-75'
          >
            <img
              src='/linkedin.svg'
              className='w-6 aspect-square flex items-center justify-center object-fit'
            />
          </a>
          <a
            href='https://www.instagram.com/a.dhar.mic/'
            className='w-10 bg-[#ffffe3] flex items-center justify-center aspect-square rounded-full hover:-translate-y-1 transition-all active:scale-75'
          >
            <img
              src='/instagram.svg'
              className='w-6 aspect-square flex items-center justify-center object-fit'
            />
          </a>
          <a
            href='https://github.com/adharmic'
            className='w-10 bg-[#ffffe3] flex items-center justify-center aspect-square rounded-full hover:-translate-y-1 transition-all active:scale-75'
          >
            <img
              src='/github.svg'
              className='w-6 aspect-square flex items-center justify-center object-fit'
            />
          </a>
        </div>
      </div>
      <div className='flex flex-col gap-4 w-full'>
        <h1 className='text-3xl'>Adithya Ajith</h1>
        <p>Full Stack Software Developer</p>
        <Button>
          <a href='/adithya_ajith_resume.pdf'>Résumé</a>
        </Button>
        <p className=''>
          Full-stack developer with 2+ years of experience building enterprise
          applications. Specialized in React/TypeScript development with
          expertise in creating scalable software solutions. Proven track record
          in implementing secure systems and working with distributed teams.
        </p>
      </div>
    </div>
  )
}
