import { useRef } from 'react'
import { ArrowDown, Github, Download } from 'lucide-react'
import {
  FaReact,
  FaJava,
  FaGithub,
  FaJsSquare,
} from 'react-icons/fa'
import { profile } from '../data/content'

export default function Hero() {
  const frameRef = useRef(null)

  const handleMouseMove = (e) => {
    const node = frameRef.current
    if (!node || window.innerWidth < 768) return

    const rect = node.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5

    node.style.transform = `rotateY(${x * 8}deg) rotateX(${-y * 8}deg)`
  }

  const handleMouseLeave = () => {
    if (frameRef.current) {
      frameRef.current.style.transform = 'rotateY(0deg) rotateX(0deg)'
    }
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-28 pb-16 md:pt-0 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 h-72 w-72 rounded-full bg-accent/5 blur-3xl" />
        <div className="absolute bottom-20 right-10 h-72 w-72 rounded-full bg-accent/10 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 md:px-10 grid grid-cols-1 md:grid-cols-[1.1fr_0.9fr] gap-14 md:gap-8 items-center">
        {/* Left Side */}
        <div className="order-2 md:order-1">
          <p className="opacity-0 animate-fadeUp text-[13px] font-medium uppercase tracking-[0.18em] text-accent mb-3">
            Hello, I'm
          </p>



          <h1 className="opacity-0 animate-fadeUp [animation-delay:90ms] font-display text-[clamp(40px,7vw,76px)] font-extrabold leading-[1.02] tracking-tight text-ink">
            {profile.name}
          </h1>
                          {/* Internship Badge */}
          <div className="opacity-0 animate-fadeUp mb-5">
            <span className="inline-flex items-center gap-2 rounded-full border border-green-200 bg-green-50 px-3 py-1 text-xs font-medium text-green-700">
              <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
              Open to Internships
            </span>
          </div>

          <p className="opacity-0 animate-fadeUp [animation-delay:180ms] mt-5 text-[clamp(17px,2vw,21px)] font-medium text-ink/80 max-w-md">
            {profile.headline}
          </p>

          <p className="opacity-0 animate-fadeUp [animation-delay:260ms] mt-4 text-[15px] leading-relaxed text-slate max-w-md">
            {profile.bio[0]}
          </p>

          {/* Buttons */}
          <div className="opacity-0 animate-fadeUp [animation-delay:340ms] mt-9 flex flex-wrap items-center gap-3">
            <a
              href={profile.resumeUrl}
              download
              className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-[14px] font-semibold text-white transition-all hover:-translate-y-1 hover:bg-accent"
            >
              <Download size={15} strokeWidth={2} />
              Download Resume
            </a>

            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full border border-line px-6 py-3 text-[14px] font-semibold text-ink transition-all hover:-translate-y-1 hover:border-ink"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-2 py-3 text-[14px] font-semibold text-ink underline-offset-4 hover:underline"
            >
              Contact
            </a>

            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub profile"
              className="ml-1 inline-flex h-11 w-11 items-center justify-center rounded-full border border-line text-ink transition-all hover:-translate-y-1 hover:border-ink hover:bg-mist"
            >
              <Github size={18} strokeWidth={1.8} />
            </a>
          </div>

          {/* Stats */}
          <div className="mt-10 flex flex-wrap gap-8">
            <div>
              <p className="text-2xl font-bold text-ink">4+</p>
              <p className="text-sm text-slate">Projects</p>
            </div>

            <div>
              <p className="text-2xl font-bold text-ink">300+</p>
              <p className="text-sm text-slate">Problems Solved</p>
            </div>

            <div>
              <p className="text-2xl font-bold text-ink">3+</p>
              <p className="text-sm text-slate">Tech Stacks</p>
            </div>
          </div>

          {/* Learning Chips */}
          <div className="mt-6 flex flex-wrap gap-2">
            <span className="rounded-full bg-mist px-3 py-1 text-sm text-ink">
              React
            </span>

            <span className="rounded-full bg-mist px-3 py-1 text-sm text-ink">
              Java
            </span>

            <span className="rounded-full bg-mist px-3 py-1 text-sm text-ink">
              Oracle SQL
            </span>
          </div>
        </div>

        {/* Right Side */}
        <div className="order-1 md:order-2 flex justify-center md:justify-end">
          <div
            className="relative animate-float"
            style={{ perspective: '900px' }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            {/* Floating Tech Icons */}
            <div className="absolute -top-4 left-10 z-20 rounded-full bg-white p-3 shadow-lg">
              <FaReact size={22} />
            </div>

            <div className="absolute top-24 -left-6 z-20 rounded-full bg-white p-3 shadow-lg">
              <FaJava size={22} />
            </div>

            <div className="absolute bottom-16 -left-8 z-20 rounded-full bg-white p-3 shadow-lg">
              <FaJsSquare size={22} />
            </div>

            <div className="absolute top-20 -right-6 z-20 rounded-full bg-white p-3 shadow-lg">
              <FaGithub size={22} />
            </div>

            {/* Image Glow */}
            <div className="absolute inset-0 scale-110 rounded-full bg-accent/10 blur-3xl" />

            <div
              ref={frameRef}
              className="relative h-[280px] w-[280px] md:h-[360px] md:w-[360px] transition-transform duration-300 ease-out will-change-transform"
              style={{
                borderRadius: '38% 62% 63% 37% / 41% 44% 56% 59%',
                background: 'linear-gradient(155deg, #F4F6FB 0%, #FAFAFA 60%)',
                boxShadow:
                  '0 30px 60px -15px rgba(17,17,17,0.18), 0 0 0 1px rgba(17,17,17,0.04)',
              }}
            >
              <div
                className="absolute inset-[6%] overflow-hidden flex items-center justify-center bg-mist"
                style={{
                  borderRadius:
                    '38% 62% 63% 37% / 41% 44% 56% 59%',
                }}
              >
                <img
                  src="/profile.png"
                  alt={profile.name}
                  onError={(e) => {
                    e.currentTarget.style.display = 'none'
                  }}
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Accent Button */}
              <a
                href="#about"
                className="absolute -bottom-3 -right-3 flex h-16 w-16 items-center justify-center rounded-2xl bg-accent shadow-[0_12px_30px_-8px_rgba(37,99,235,0.55)] transition-transform hover:scale-110"
                style={{ transform: 'rotate(-8deg)' }}
              >
                <div
                  className="h-0 w-0 border-y-[10px] border-l-[14px] border-y-transparent border-l-white"
                  style={{ marginLeft: 2 }}
                />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <a
        href="#about"
        aria-label="Scroll to About section"
        className="hidden md:flex animate-bounce absolute bottom-8 left-1/2 -translate-x-1/2 h-10 w-10 items-center justify-center rounded-full border border-line text-slate transition-colors hover:border-ink hover:text-ink"
      >
        <ArrowDown size={16} strokeWidth={1.8} />
      </a>
    </section>
  )
}