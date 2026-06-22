import { useEffect, useState } from 'react'
import {
  Home,
  User,
  Layers,
  GraduationCap,
  FolderGit2,
  Award,
  Trophy,
  Mail,
} from 'lucide-react'
import { navItems } from '../data/content'

const ICONS = { Home, User, Layers, GraduationCap, FolderGit2, Award, Trophy, Mail }

export default function Nav() {
  const [active, setActive] = useState('home')

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter(Boolean)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id)
          }
        })
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: 0 }
    )

    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  const handleClick = (id) => (e) => {
    e.preventDefault()
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      {/* Desktop: floating vertical nav, right edge */}
      <nav
        aria-label="Section navigation"
        className="hidden md:flex fixed right-5 top-1/2 -translate-y-1/2 z-50 flex-col gap-1.5
                   rounded-full bg-white/90 backdrop-blur-md border border-line shadow-[0_8px_30px_rgba(0,0,0,0.08)]
                   py-3 px-2"
      >
        {navItems.map((item) => {
          const Icon = ICONS[item.icon]
          const isActive = active === item.id
          return (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={handleClick(item.id)}
              className="group relative flex items-center justify-end"
            >
              <span
                className="mr-2 max-w-0 overflow-hidden whitespace-nowrap text-[13px] font-medium text-ink
                           opacity-0 transition-all duration-300 ease-out
                           group-hover:max-w-[140px] group-hover:opacity-100 group-hover:mr-3"
              >
                {item.label}
              </span>
              <span
                className={`flex h-10 w-10 items-center justify-center rounded-full transition-colors duration-300
                  ${isActive ? 'bg-accent text-white' : 'text-slate group-hover:bg-mist group-hover:text-ink'}`}
              >
                <Icon size={17} strokeWidth={1.8} />
              </span>
              {isActive && (
                <span className="absolute -right-1 top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-accent" />
              )}
            </a>
          )
        })}
      </nav>

      {/* Mobile: floating bottom icon bar */}
      <nav
        aria-label="Section navigation"
        className="md:hidden fixed bottom-4 left-1/2 -translate-x-1/2 z-50 flex items-center gap-0.5
                   rounded-full bg-white/95 backdrop-blur-md border border-line shadow-[0_8px_30px_rgba(0,0,0,0.1)]
                   px-1.5 py-1.5 max-w-[94vw] overflow-x-auto scroll-thin"
      >
        {navItems.map((item) => {
          const Icon = ICONS[item.icon]
          const isActive = active === item.id
          return (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={handleClick(item.id)}
              aria-label={item.label}
              className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-colors
                ${isActive ? 'bg-accent text-white' : 'text-slate'}`}
            >
              <Icon size={16} strokeWidth={1.8} />
            </a>
          )
        })}
      </nav>
    </>
  )
}
