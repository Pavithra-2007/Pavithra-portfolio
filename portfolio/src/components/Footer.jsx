import { Github, Linkedin, Code2, Mail, ArrowUp } from 'lucide-react'
import { profile } from '../data/content'

const year = new Date().getFullYear()

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer className="relative border-t border-line">
      <div className="mx-auto max-w-6xl px-6 md:px-10 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-12">
          <div>
            <p className="font-display text-xl font-bold tracking-tight text-ink">Pavithra</p>
            <p className="mt-3 text-[14.5px] leading-relaxed text-slate max-w-xs">
              Building meaningful digital experiences through code.
            </p>
          </div>

          <div>
            <p className="text-[13px] font-semibold uppercase tracking-wide text-ink/60">
              Quick Links
            </p>
            <ul className="mt-4 space-y-2.5">
              {['About', 'Skills', 'Projects', 'Contact'].map((label) => (
                <li key={label}>
                  <a
                    href={`#${label.toLowerCase()}`}
                    className="text-[14.5px] text-slate transition-colors hover:text-ink"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[13px] font-semibold uppercase tracking-wide text-ink/60">Connect</p>
            <ul className="mt-4 space-y-2.5">
              <FooterLink icon={Github} label="GitHub" href={profile.github} />
              <FooterLink icon={Linkedin} label="LinkedIn" href={profile.linkedin} />
              <FooterLink icon={Code2} label="LeetCode" href={profile.leetcode} />
              <FooterLink icon={Mail} label="Email" href={`mailto:${profile.email}`} />
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-line pt-7">
          <p className="text-[13px] text-slate">
            © {year} {profile.name}. Made with React.
          </p>
          <button
            onClick={scrollTop}
            className="flex items-center gap-2 rounded-full border border-line px-4 py-2 text-[13px] font-medium text-ink/70 transition-colors hover:border-ink hover:text-ink"
          >
            Back to top
            <ArrowUp size={14} strokeWidth={1.8} />
          </button>
        </div>
      </div>
    </footer>
  )
}

function FooterLink({ icon: Icon, label, href }) {
  return (
    <li>
      <a
        href={href}
        target={href.startsWith('http') ? '_blank' : undefined}
        rel="noreferrer"
        className="flex items-center gap-2 text-[14.5px] text-slate transition-colors hover:text-ink"
      >
        <Icon size={14} strokeWidth={1.8} />
        {label}
      </a>
    </li>
  )
}
