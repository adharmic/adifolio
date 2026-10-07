import { useEffect, useRef } from 'react'
import { AiOutlineClose, AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'

interface LightboxProps {
  images: Array<{ src: string; alt: string }>
  index: number | null
  onChange: (index: number | null) => void
}

const control =
  'flex size-10 items-center justify-center border border-amber/60 bg-void/85 text-lg text-amber transition hover:border-amber hover:bg-amber/10'

// Full-size image viewer. A native <dialog> renders in the top layer, so it
// sits above the navbar and CRT overlay and handles Escape and focus for us.
export default function Lightbox({ images, index, onChange }: LightboxProps) {
  const ref = useRef<HTMLDialogElement>(null)
  const open = index !== null

  useEffect(() => {
    const dialog = ref.current
    if (!dialog) return
    if (open && !dialog.open) dialog.showModal()
    if (!open && dialog.open) dialog.close()
  }, [open])

  const image = index === null ? null : images[index]
  const many = images.length > 1
  const step = (delta: number) => index !== null && onChange((index + delta + images.length) % images.length)

  return (
    <dialog
      ref={ref}
      aria-label={image?.alt}
      onClose={() => onChange(null)}
      // Clicks on the backdrop land on the dialog itself
      onClick={(e) => e.target === e.currentTarget && onChange(null)}
      onKeyDown={(e) => {
        if (!many) return
        if (e.key === 'ArrowLeft') step(-1)
        if (e.key === 'ArrowRight') step(1)
      }}
      className='m-0 size-full max-h-none max-w-none bg-transparent p-4 text-ink backdrop:bg-void/90 backdrop:backdrop-blur-sm md:p-10'
    >
      {image && (
        <>
          <div className='pointer-events-none flex size-full flex-col items-center justify-center gap-3'>
            <img
              src={image.src}
              alt={image.alt}
              className='pointer-events-auto max-h-[calc(100%-3rem)] max-w-full border border-amber/30 object-contain shadow-[0_0_60px_rgb(0_0_0/0.8)]'
            />
            <p className='pointer-events-auto max-w-3xl text-center text-xs text-cream/70'>
              {many && (
                <span className='mr-2 text-cyan/80'>
                  [{index! + 1}/{images.length}]
                </span>
              )}
              {image.alt}
            </p>
          </div>
          <button
            type='button'
            aria-label='Close'
            onClick={() => onChange(null)}
            className={`${control} absolute top-4 right-4`}
          >
            <AiOutlineClose aria-hidden />
          </button>
          {many && (
            <>
              <button
                type='button'
                aria-label='Previous image'
                onClick={() => step(-1)}
                className={`${control} absolute top-1/2 left-4 -translate-y-1/2`}
              >
                <AiOutlineLeft aria-hidden />
              </button>
              <button
                type='button'
                aria-label='Next image'
                onClick={() => step(1)}
                className={`${control} absolute top-1/2 right-4 -translate-y-1/2`}
              >
                <AiOutlineRight aria-hidden />
              </button>
            </>
          )}
        </>
      )}
    </dialog>
  )
}
