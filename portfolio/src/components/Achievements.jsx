import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import { achievements } from '../data/content'

export default function Achievements() {
  return (
    <section id="achievements" className="py-28 md:py-36">
      <div className="mx-auto max-w-3xl px-6 md:px-10">
        <Reveal>
          <SectionHeading eyebrow="Milestones" title="Achievements & timeline." />
        </Reveal>

        <div className="mt-16 relative">
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-line" />
          <div className="flex flex-col gap-10">
            {achievements.map((item, i) => (
              <Reveal key={item.title} delay={i * 70}>
                <div className="relative pl-10">
                  <span className="absolute left-0 top-1.5 h-3.5 w-3.5 rounded-full bg-accent ring-4 ring-white" />
                  <p className="text-[13px] font-semibold uppercase tracking-wide text-accent">
                    {item.year}
                  </p>
                  <p className="mt-1.5 text-[17px] font-semibold text-ink">{item.title}</p>
                  <p className="mt-1.5 text-[14.5px] leading-relaxed text-slate max-w-lg">
                    {item.detail}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
