import { useState } from 'react'
import { GraduationCap, Briefcase } from 'lucide-react'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import { education, experience } from '../data/content'

export default function Qualifications() {
  const [tab, setTab] = useState('education')

  return (
    <section id="qualifications" className="py-28 md:py-36 bg-mist">
      <div className="mx-auto max-w-4xl px-6 md:px-10">
        <Reveal>
          <SectionHeading eyebrow="Background" title="Qualifications" align="center" />
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-10 flex justify-center">
            <div className="inline-flex rounded-full border border-line bg-white p-1">
              <button
                onClick={() => setTab('education')}
                className={`flex items-center gap-2 rounded-full px-5 py-2.5 text-[14px] font-semibold transition-colors duration-300
                  ${tab === 'education' ? 'bg-ink text-white' : 'text-ink/60'}`}
              >
                <GraduationCap size={15} strokeWidth={1.8} />
                Education
              </button>
              <button
                onClick={() => setTab('experience')}
                className={`flex items-center gap-2 rounded-full px-5 py-2.5 text-[14px] font-semibold transition-colors duration-300
                  ${tab === 'experience' ? 'bg-ink text-white' : 'text-ink/60'}`}
              >
                <Briefcase size={15} strokeWidth={1.8} />
                Experience
              </button>
            </div>
          </div>
        </Reveal>

        <div className="mt-12 relative min-h-[260px]">
          <div
            key={tab}
            className="grid gap-4 animate-fadeIn"
          >
            {tab === 'education'
              ? education.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-2xl bg-white border border-line p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2"
                  >
                    <div>
                      <p className="font-semibold text-ink text-[16px]">{item.title}</p>
                      {item.place && <p className="text-[14px] text-slate mt-1">{item.place}</p>}
                    </div>
                    <div className="flex items-center gap-3 shrink-0">
                      {item.period && (
                        <span className="text-[13px] text-slate">{item.period}</span>
                      )}
                      <span className="rounded-full bg-accent-tint px-3 py-1 text-[13px] font-semibold text-accent">
                        {item.detail}
                      </span>
                    </div>
                  </div>
                ))
              : experience.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-2xl bg-white border border-line p-6"
                  >
                    <p className="font-semibold text-ink text-[16px]">{item.title}</p>
                    <p className="text-[14px] text-slate mt-1.5 leading-relaxed">{item.detail}</p>
                  </div>
                ))}
          </div>
        </div>
      </div>
    </section>
  )
}
