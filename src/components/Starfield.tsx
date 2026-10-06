import { useEffect, useRef } from 'react'

interface Star {
  x: number
  y: number
  z: number
  phase: number
  color: string
}

// Mostly cream stars with the occasional cyan or amber one.
const COLORS = ['255,255,227', '255,255,227', '255,255,227', '255,255,227', '119,219,244', '254,175,60']

function makeStars(w: number, h: number): Array<Star> {
  const count = Math.round((w * h) / 3200)
  return Array.from({ length: count }, () => ({
    x: Math.random() * w,
    y: Math.random() * h,
    z: Math.random() * 0.8 + 0.2,
    phase: Math.random() * Math.PI * 2,
    color: COLORS[Math.floor(Math.random() * COLORS.length)],
  }))
}

export default function Starfield() {
  const ref = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = ref.current
    const ctx = canvas?.getContext('2d')
    if (!canvas || !ctx) return

    const still = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let w = 0
    let h = 0
    let stars: Array<Star> = []
    let frame = 0

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      const widthChanged = window.innerWidth !== w
      w = window.innerWidth
      h = window.innerHeight
      canvas.width = w * dpr
      canvas.height = h * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      // Mobile browsers resize the height when the address bar hides; keep the same stars then.
      if (widthChanged) stars = makeStars(w, h)
    }

    const draw = (t: number) => {
      ctx.clearRect(0, 0, w, h)
      const scroll = still ? 0 : window.scrollY
      for (const s of stars) {
        if (!still) {
          s.x -= s.z * 0.05
          if (s.x < 0) s.x += w
        }
        const y = (((s.y - scroll * s.z * 0.12) % h) + h) % h
        const twinkle = still ? 1 : 0.6 + 0.4 * Math.sin(t * 0.0015 * s.z + s.phase)
        const size = s.z * 1.4
        ctx.fillStyle = `rgba(${s.color},${(0.2 + 0.65 * s.z) * twinkle})`
        ctx.fillRect(s.x, y, size, size)
      }
      if (!still) frame = requestAnimationFrame(draw)
    }

    const onResize = () => {
      resize()
      if (still) draw(0)
    }

    resize()
    frame = requestAnimationFrame(draw)
    window.addEventListener('resize', onResize)
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('resize', onResize)
    }
  }, [])

  return <canvas ref={ref} aria-hidden className='pointer-events-none fixed inset-0 z-0' />
}
