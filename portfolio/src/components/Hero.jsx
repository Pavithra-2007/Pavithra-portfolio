import { useRef } from 'react'
import { ArrowDown, Github, Download } from 'lucide-react'
import { profile } from '../data/content'

export default function Hero() {
  const frameRef = useRef(null)

  // Subtle mouse-driven parallax tilt on the photo frame — desktop only.
  const handleMouseMove = (e) => {
    const node = frameRef.current
    if (!node || window.innerWidth < 768) return
    const rect = node.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    node.style.transform = `rotateY(${x * 8}deg) rotateX(${-y * 8}deg)`
  }

  const handleMouseLeave = () => {
    if (frameRef.current) frameRef.current.style.transform = 'rotateY(0deg) rotateX(0deg)'
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-28 pb-16 md:pt-0"
    >
      <div className="mx-auto w-full max-w-6xl px-6 md:px-10 grid grid-cols-1 md:grid-cols-[1.1fr_0.9fr] gap-14 md:gap-8 items-center">
        {/* Left: copy */}
        <div className="order-2 md:order-1">
          <p className="opacity-0 animate-fadeUp text-[13px] font-medium uppercase tracking-[0.18em] text-accent mb-5">
            Hello, I'm
          </p>
          <h1 className="opacity-0 animate-fadeUp [animation-delay:90ms] font-display text-[clamp(40px,7vw,76px)] font-extrabold leading-[1.02] tracking-tight text-ink">
            {profile.name}
          </h1>
          <p className="opacity-0 animate-fadeUp [animation-delay:180ms] mt-5 text-[clamp(17px,2vw,21px)] font-medium text-ink/80 max-w-md">
            {profile.headline}
          </p>
          <p className="opacity-0 animate-fadeUp [animation-delay:260ms] mt-4 text-[15px] leading-relaxed text-slate max-w-md">
            {profile.bio[0]}
          </p>

          <div className="opacity-0 animate-fadeUp [animation-delay:340ms] mt-9 flex flex-wrap items-center gap-3">
            <a
              href={profile.resumeUrl}
              download
              className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-[14px] font-semibold text-white transition-transform hover:-translate-y-0.5 hover:bg-accent"
            >
              <Download size={15} strokeWidth={2} />
              Download Resume
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full border border-line px-6 py-3 text-[14px] font-semibold text-ink transition-colors hover:border-ink"
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
              className="ml-1 inline-flex h-11 w-11 items-center justify-center rounded-full border border-line text-ink transition-colors hover:border-ink hover:bg-mist"
            >
              <Github size={18} strokeWidth={1.8} />
            </a>
          </div>
        </div>

        {/* Right: signature photo frame */}
        <div className="order-1 md:order-2 flex justify-center md:justify-end">
          <div
            className="relative animate-float"
            style={{ perspective: '900px' }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <div
              ref={frameRef}
              className="relative h-[280px] w-[280px] md:h-[360px] md:w-[360px] transition-transform duration-300 ease-out will-change-transform"
              style={{
                borderRadius: '38% 62% 63% 37% / 41% 44% 56% 59%',
                background: 'linear-gradient(155deg, #F4F6FB 0%, #FAFAFA 60%)',
                boxShadow: '0 30px 60px -15px rgba(17,17,17,0.18), 0 0 0 1px rgba(17,17,17,0.04)',
              }}
            >
              {/* Replace this placeholder with your real cut-out photo at public/profile.png */}
              <div
                className="absolute inset-[6%] overflow-hidden flex items-center justify-center bg-mist"
                style={{ borderRadius: '38% 62% 63% 37% / 41% 44% 56% 59%' }}
              >
                <img
                  src="/profile.png"
                  alt={profile.name}
                  onError={(e) => {
                    e.currentTarget.style.display = 'none'
                  }}
                  className="h-full w-full object-cover"
                />
                <span className="absolute font-display text-6xl font-bold text-ink/10 select-none">
                  PM
                </span>
              </div>

              {/* Play-button-inspired accent badge */}
              <div
                className="absolute -bottom-3 -right-3 flex h-16 w-16 items-center justify-center rounded-2xl bg-accent shadow-[0_12px_30px_-8px_rgba(37,99,235,0.55)]"
                style={{ transform: 'rotate(-8deg)' }}
              >
                <div
                  className="h-0 w-0 border-y-[10px] border-l-[14px] border-y-transparent border-l-white"
                  style={{ marginLeft: 2 }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <a
        href="#about"
        aria-label="Scroll to About section"
        className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 h-10 w-10 items-center justify-center rounded-full border border-line text-slate transition-colors hover:border-ink hover:text-ink"
      >
        <ArrowDown size={16} strokeWidth={1.8} />
      </a>
    </section>
  )
}
