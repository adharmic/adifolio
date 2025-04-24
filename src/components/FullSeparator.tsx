export default function FullSeparator() {
  return <div className="max-h-20" >
    <div className="block md:hidden min-w-full rounded-full border-t-1 border-[#ffffe3]" />
    <img className="hidden md:block relative -left-6 w-full h-12" src="/wave.svg" />
    <img className="relative left-0 -top-8 w-full h-12 hidden md:block" src="/wave.svg" />
    <img className="relative left-6 -top-16 w-full h-12 hidden md:block" src="/wave.svg" />
  </div>
}
