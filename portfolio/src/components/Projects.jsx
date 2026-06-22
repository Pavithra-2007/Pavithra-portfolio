import { Github, ArrowUpRight } from 'lucide-react'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import { projects } from '../data/content'

export default function Projects() {
  return (
    <section id="projects" className="py-28 md:py-36">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <Reveal>
          <SectionHeading eyebrow="Selected Work" title="Featured projects." />
        </Reveal>

        <div className="mt-16 flex flex-col gap-20 md:gap-28">
          {projects.map((project, i) => {
            const reversed = i % 2 === 1
            return (
              <Reveal key={project.title} delay={80}>
                <div
                  className={`grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-14 items-center ${
                    reversed ? 'md:[direction:rtl]' : ''
                  }`}
                >
                  <div style={{ direction: 'ltr' }} className="group relative">
                    <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-mist to-white border border-line overflow-hidden flex items-center justify-center transition-transform duration-500 group-hover:-translate-y-1.5">
                      <span className="font-display text-4xl md:text-5xl font-bold text-ink/10 select-none px-8 text-center">
                        {project.title}
                      </span>
                    </div>
                  </div>

                  <div style={{ direction: 'ltr' }}>
                    <p className="text-[13px] font-semibold uppercase tracking-[0.16em] text-accent mb-3">
                      Project {String(i + 1).padStart(2, '0')}
                    </p>
                    <h3 className="font-display text-2xl md:text-3xl font-bold text-ink tracking-tight">
                      {project.title}
                    </h3>
                    <p className="mt-4 text-[15.5px] leading-relaxed text-slate max-w-md">
                      {project.description}
                    </p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.stack.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full border border-line px-3 py-1 text-[12.5px] font-medium text-ink/70"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="mt-7 flex items-center gap-3">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-line px-5 py-2.5 text-[13.5px] font-semibold text-ink transition-colors hover:border-ink hover:bg-mist"
                      >
                        <Github size={15} strokeWidth={1.8} />
                        GitHub
                      </a>
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-[13.5px] font-semibold text-white transition-colors hover:bg-accent"
                        >
                          Live Demo
                          <ArrowUpRight size={15} strokeWidth={2} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
