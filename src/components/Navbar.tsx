export default function Navbar () {
  return (
    <div className='z-10 bg-[#000c1a] fixed h-16 w-full p-4 text-2xl flex items-center justify-between'>
      <h1>adithyajith</h1>
      <div className='md:flex flex-row gap-4 hidden'>
        <a href='#'>home</a>
        <a href='#experience'>experience</a>
        <a href='#projects'>projects</a>
        <a href='#contact'>contact</a>
      </div>
    </div>
  )
}
