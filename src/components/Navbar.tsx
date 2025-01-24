export default function Navbar () {
  return (
    <div className='bg-[#000c1a] fixed h-16 w-full p-4 text-2xl flex items-center justify-between'>
      <h1>adithyajith.com</h1>
      <div className='md:flex flex-row gap-4 hidden'>
        <h1>home</h1>
        <h1>experience</h1>
        <h1>projects</h1>
        <h1>contact</h1>
      </div>
    </div>
  )
}
