export default function Navbar() {
  return (
    <div className='z-10 bg-[#000c1a] fixed h-16 w-full p-4 text-2xl flex items-center justify-between'>
      <a className='link-underline' href='/'>
        adithyajith
      </a>
      <div className='md:flex flex-row gap-4 hidden'>
        <a className='link-underline' href='#'>
          home
        </a>
        <a className='link-underline' href='#experience'>
          experience
        </a>
        <a className='link-underline' href='#projects'>
          projects
        </a>
        <a className='link-underline' href='#contact'>
          contact
        </a>
      </div>
    </div>
  )
}
