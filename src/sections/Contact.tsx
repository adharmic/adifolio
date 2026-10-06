import { FormEvent, PropsWithChildren, useState } from 'react'
import { AiOutlineSend } from 'react-icons/ai'
import Button from '../components/Button'
import Panel from '../components/Panel'
import Section from '../components/Section'
import { profile } from '../data'

function Field({ id, label, children }: PropsWithChildren<{ id: string; label: string }>) {
  return (
    <div className='flex flex-col gap-1'>
      <label htmlFor={id} className='text-[11px] uppercase tracking-[0.25em] text-cyan'>
        {label}
      </label>
      <div className='flex items-start gap-2 border border-cream/25 bg-void/60 px-3 py-2 transition-colors focus-within:border-amber'>
        <span aria-hidden className='text-amber'>&gt;</span>
        {children}
      </div>
    </div>
  )
}

const inputClass = 'w-full bg-transparent text-ink placeholder:text-cream/30 focus:outline-none focus-visible:outline-none'

export default function Contact() {
  const [status, setStatus] = useState('')

  // There's no backend, so compose the message in the visitor's mail client.
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const name = String(data.get('name')).trim()
    const email = String(data.get('email')).trim()
    const message = String(data.get('message')).trim()
    const subject = encodeURIComponent(`Portfolio message from ${name}`)
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`)
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
    setStatus(`Opening your mail client. If nothing happens, email ${profile.email} directly.`)
  }

  return (
    <Section id='contact' index='04' title='Contact' command='./transmit.sh'>
      <Panel title='uplink // open channel' meta='ch-04'>
        <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
          <Field id='contact-name' label='Name'>
            <input id='contact-name' name='name' autoComplete='name' required className={inputClass} />
          </Field>
          <Field id='contact-email' label='Email'>
            <input id='contact-email' name='email' type='email' autoComplete='email' required className={inputClass} />
          </Field>
          <Field id='contact-message' label='Message'>
            <textarea id='contact-message' name='message' rows={5} required className={`${inputClass} resize-y`} />
          </Field>
          <div className='flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between'>
            <Button type='submit' icon={<AiOutlineSend />}>
              Transmit
            </Button>
            <p className='text-xs text-cream/55'>
              or email{' '}
              <a href={`mailto:${profile.email}`} className='link-underline text-amber'>
                {profile.email}
              </a>
            </p>
          </div>
          <p role='status' className='min-h-4 text-xs text-cyan'>
            {status && <>[ OK ] {status}</>}
          </p>
        </form>
      </Panel>
    </Section>
  )
}
