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
                {/* IMAGE */}
                <div className="absolute inset-0">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-ink/30" />
                </div>

                {/* HOVER OVERLAY */}
                <div
                  className="absolute inset-0 flex flex-col items-center justify-center gap-3 
                             opacity-0 transition-all duration-300 group-hover:opacity-100
                             group-hover:bg-ink/55"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-ink">
                    <Eye size={18} strokeWidth={1.8} />
                  </span>
                  <span className="text-white text-[13px] font-semibold">
                    View certificate
                  </span>
                </div>

                {/* BOTTOM INFO */}
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
                  <p className="text-[14px] font-semibold text-white">
                    {cert.issuer}
                  </p>
                  <p className="text-[12.5px] text-white/80">
                    {cert.year}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}