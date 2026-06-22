import { useState } from 'react'
import { MapPin, Mail, Github, Linkedin, Code2, Send } from 'lucide-react'
import Reveal from './Reveal'
import { profile } from '../data/content'

export default function Contact() {
  const [status, setStatus] = useState('idle') // idle | sent

  const handleSubmit = (e) => {
    e.preventDefault()
    // Hook this up to your email service of choice (Formspree, EmailJS, etc.)
    setStatus('sent')
  }

  return (
    <section id="contact" className="py-28 md:py-36 bg-mist">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <Reveal>
          <p className="text-[13px] font-medium uppercase tracking-[0.18em] text-accent mb-3">
            Get in touch
          </p>
          <h2 className="font-display text-[clamp(30px,5vw,52px)] font-semibold tracking-tight text-ink max-w-xl leading-[1.08]">
            Have an idea? Let's make it happen.
          </h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-[0.8fr_1.2fr] gap-12">
          <Reveal delay={100}>
            <div className="space-y-5">
              <ContactRow icon={MapPin} label="Location" value={profile.location} />
              <ContactRow icon={Mail} label="Email" value={profile.email} href={`mailto:${profile.email}`} />
              <ContactRow icon={Github} label="GitHub" value="Pavithra-2007" href={profile.github} />
              <ContactRow icon={Linkedin} label="LinkedIn" value="View profile" href={profile.linkedin} />
              <ContactRow icon={Code2} label="LeetCode" value="View profile" href={profile.leetcode} />
            </div>
          </Reveal>

          <Reveal delay={180}>
            <form onSubmit={handleSubmit} className="rounded-2xl bg-white border border-line p-6 md:p-8 space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <Field label="Name" id="name" placeholder="Your name" />
                <Field label="Email" id="email" type="email" placeholder="you@example.com" />
              </div>
              <Field label="Subject" id="subject" placeholder="What's this about?" />
              <div>
                <label htmlFor="message" className="block text-[13px] font-medium text-ink/70 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  required
                  placeholder="Tell me a little about your project or idea…"
                  className="w-full rounded-xl border border-line bg-mist/40 px-4 py-3 text-[15px] text-ink
                             placeholder:text-slate/70 outline-none transition-colors focus:border-accent focus:bg-white"
                />
              </div>
              <button
                type="submit"
                className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-ink px-7 py-3.5
                           text-[14.5px] font-semibold text-white transition-colors hover:bg-accent"
              >
                {status === 'sent' ? 'Message sent ✓' : 'Send Message'}
                {status !== 'sent' && <Send size={15} strokeWidth={2} />}
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

function ContactRow({ icon: Icon, label, value, href }) {
  const content = (
    <div className="flex items-center gap-4 rounded-2xl bg-white border border-line p-5 transition-colors hover:border-accent">
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-mist text-ink">
        <Icon size={17} strokeWidth={1.8} />
      </span>
      <div>
        <p className="text-[12.5px] font-medium uppercase tracking-wide text-slate">{label}</p>
        <p className="text-[15px] font-semibold text-ink">{value}</p>
      </div>
    </div>
  )
  return href ? (
    <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">
      {content}
    </a>
  ) : (
    content
  )
}

function Field({ label, id, type = 'text', placeholder }) {
  return (
    <div>
      <label htmlFor={id} className="block text-[13px] font-medium text-ink/70 mb-2">
        {label}
      </label>
      <input
        id={id}
        type={type}
        required
        placeholder={placeholder}
        className="w-full rounded-xl border border-line bg-mist/40 px-4 py-3 text-[15px] text-ink
                   placeholder:text-slate/70 outline-none transition-colors focus:border-accent focus:bg-white"
      />
    </div>
  )
}
