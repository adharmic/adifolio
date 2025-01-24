export default function Home () {
  return (
    <div className='flex flex-col md:flex-row gap-4 md:gap-16'>
      <div className='w-full md:w-[200px]'>
        <img
          className='md:w-full w-32 aspect-square rounded-full border-4 border-[#ffffe3]'
          src='/headshot.jpg'
        />
      </div>
      <div className='flex flex-col gap-2 w-full'>
        <h1 className='text-3xl'>Adithya Ajith</h1>
        <p>Full Stack Software Developer</p>
        <p className='underline'>adharmic.com</p>
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
