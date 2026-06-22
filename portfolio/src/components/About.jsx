import { MapPin, Languages } from 'lucide-react'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import { profile } from '../data/content'

export default function About() {
  return (
    <section id="about" className="py-28 md:py-36 bg-mist">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <Reveal>
          <SectionHeading eyebrow="About" title="A little about my journey." />
        </Reveal>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-[1.4fr_1fr] gap-12">
          <Reveal delay={100}>
            <div className="space-y-5 text-[17px] leading-relaxed text-ink/80 max-w-2xl">
              <p>
                I enjoy building software that is clean, scalable, and solves real-world problems.
                My focus is on creating reliable applications with intuitive user experiences 
                while continuously improving my skills through learning and hands-on development.

              </p>
              <p>{profile.bio[0]}</p>
              <p>{profile.bio[1]}</p>
            </div>
          </Reveal>

          <Reveal delay={200}>
            <div className="space-y-4">
              <div className="rounded-2xl bg-white border border-line p-6">
                <div className="flex items-center gap-2 text-ink/60 text-[13px] font-medium uppercase tracking-wide">
                  <MapPin size={14} strokeWidth={1.8} />
                  Based in
                </div>
                <p className="mt-2 text-[16px] font-semibold text-ink">{profile.location}</p>
              </div>

              <div className="rounded-2xl bg-white border border-line p-6">
                <div className="flex items-center gap-2 text-ink/60 text-[13px] font-medium uppercase tracking-wide">
                  <Languages size={14} strokeWidth={1.8} />
                  Currently learning
                </div>
                <p className="mt-2 text-[16px] font-semibold text-ink">Japanese</p>
              </div>

              <div className="rounded-2xl bg-white border border-line p-6">
                <p className="text-[13px] font-medium uppercase tracking-wide text-ink/60">
                  Open to
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {profile.lookingFor.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-accent-tint px-3.5 py-1.5 text-[13px] font-medium text-accent"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
