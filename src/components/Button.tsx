import { AnchorHTMLAttributes, ButtonHTMLAttributes, PropsWithChildren, ReactNode } from 'react'

type ButtonProps = PropsWithChildren<
  { icon?: ReactNode; variant?: 'solid' | 'outline' } & (
    | ({ href: string } & AnchorHTMLAttributes<HTMLAnchorElement>)
    | ({ href?: undefined } & ButtonHTMLAttributes<HTMLButtonElement>)
  )
>

const base =
  'inline-flex w-fit items-center gap-2 border px-3 py-1.5 text-sm font-medium uppercase tracking-widest transition-all active:scale-95'

const variants = {
  solid: 'border-amber bg-amber text-void hover:bg-transparent hover:text-amber',
  outline: 'border-amber/60 text-amber hover:border-amber hover:bg-amber/10',
}

// Renders a link when given an href, otherwise a real <button>.
export default function Button({ icon, variant = 'solid', children, className = '', ...rest }: ButtonProps) {
  const classes = `${base} ${variants[variant]} ${className}`
  const content = (
    <>
      {icon && <span aria-hidden className='text-base'>{icon}</span>}
      {children}
    </>
  )

  if (rest.href !== undefined) {
    return (
      <a className={classes} {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {content}
      </a>
    )
  }
  return (
    <button type='button' className={classes} {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {content}
    </button>
  )
}
