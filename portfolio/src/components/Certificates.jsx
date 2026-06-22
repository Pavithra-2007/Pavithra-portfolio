import { Eye } from 'lucide-react'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import { certificates } from '../data/content'

export default function Certificates() {
  return (
    <section id="certificates" className="py-28 md:py-36 bg-mist">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SectionHeading eyebrow="Recognition" title="Certificates." />
            <p className="text-[14px] text-slate">Scroll to browse →</p>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-12 flex gap-6 overflow-x-auto scroll-thin pb-4 -mx-6 px-6 md:-mx-10 md:px-10 snap-x snap-mandatory">
            {certificates.map((cert, i) => (
              <div
                key={i}
                className="group relative shrink-0 snap-start w-[280px] md:w-[340px] aspect-[4/3] rounded-2xl
                           overflow-hidden bg-white border border-line"
              >
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-white to-mist">
                  <span className="font-display text-2xl font-bold text-ink/10 select-none">
                    {cert.title}
                  </span>
                </div>
                <div
                  className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-ink/0
                             opacity-0 transition-all duration-300 group-hover:bg-ink/55 group-hover:opacity-100"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-ink">
                    <Eye size={18} strokeWidth={1.8} />
                  </span>
                  <span className="text-white text-[13px] font-semibold">View certificate</span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-white/0">
                  <p className="text-[14px] font-semibold text-ink">{cert.issuer}</p>
                  <p className="text-[12.5px] text-slate">{cert.year}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
