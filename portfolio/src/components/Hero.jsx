import { useRef, useEffect } from 'react'
import { ArrowDown, Github, Download } from 'lucide-react'
import {
  FaReact,
  FaJava,
  FaGithub,
  FaJsSquare,
} from 'react-icons/fa'
import { profile } from '../data/content'

function SkeletonRunner() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')

    const resize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const C = {
      bone: '#3a3a5c',
      screen: '#a8f0c8',
      purple: '#534AB7',
      purpleDark: '#3C3489',
      web: 'rgba(83,74,183,0.15)',
    }

    const runner = { x: -80, speed: 2.2 }

    const SNIPPETS = [
      'npm run dev', 'git push', 'useEffect()', '404?',
      'const go=true', 'deploy!', 'undefined :(', 'for(;;){}',
      'import React', 'setState({})', 'async/await', 'CSS > me',
      'merge conflict', 'it works!',
    ]
    const floaties = []
    let lastSnippet = 0

    const makeSpiders = () => {
      const W = canvas.width
      return Array.from({ length: 6 }, (_, i) => ({
        x: 60 + i * (W / 6) * 0.92 + Math.random() * 30,
        ropeLen: 35 + Math.random() * 65,
        swing: Math.random() * Math.PI * 2,
        swingSpeed: 0.011 + Math.random() * 0.013,
        swingAmp: 14 + Math.random() * 20,
        dropped: 0, maxDrop: 0, dropping: false, dropSpeed: 0,
        scale: 0.6 + Math.random() * 0.45,
        legPhase: Math.random() * Math.PI * 2,
      }))
    }
    let spiders = makeSpiders()

    const makeStars = () =>
      Array.from({ length: 20 }, () => ({
        x: Math.random() * canvas.width,
        y: 20 + Math.random() * (canvas.height - 80),
        r: 1 + Math.random() * 2,
        op: 0.1 + Math.random() * 0.2,
      }))
    let stars = makeStars()

    window.addEventListener('resize', () => {
      spiders = makeSpiders()
      stars = makeStars()
    })

    const bone = (x1, y1, x2, y2) => {
      ctx.beginPath(); ctx.moveTo(x1, y1); ctx.lineTo(x2, y2); ctx.stroke()
    }
    const joint = (x, y, r) => {
      ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2)
      ctx.fillStyle = C.bone; ctx.fill()
    }

    const drawSkeleton = (rx, t) => {
      const bob = Math.sin(t * 0.18) * 3
      const ground = canvas.height - 45
      ctx.save()
      ctx.translate(rx, ground + bob)
      ctx.rotate(0.15)
      const stride = t * 0.22
      const lA = Math.sin(stride) * 0.58, lB = Math.sin(stride + Math.PI) * 0.58
      const aA = Math.sin(stride + Math.PI * 0.5) * 0.48, aB = Math.sin(stride + Math.PI * 1.5) * 0.48
      ctx.strokeStyle = C.bone; ctx.lineWidth = 2.5
      ctx.lineCap = 'round'; ctx.lineJoin = 'round'
      const hy = -90
      // skull
      ctx.beginPath(); ctx.arc(0, hy, 8, 0, Math.PI * 2)
      ctx.fillStyle = '#fff'; ctx.fill()
      ctx.strokeStyle = C.bone; ctx.lineWidth = 2; ctx.stroke()
      ;[[-3, hy - 1], [3, hy - 1]].forEach(([ex, ey]) => {
        ctx.beginPath(); ctx.arc(ex, ey, 2, 0, Math.PI * 2)
        ctx.fillStyle = C.bone; ctx.fill()
      })
      ctx.beginPath(); ctx.moveTo(-4, hy + 4); ctx.quadraticCurveTo(0, hy + 8, 4, hy + 4)
      ctx.strokeStyle = C.bone; ctx.lineWidth = 1.5; ctx.stroke()
      for (let i = -2; i <= 2; i++) {
        ctx.beginPath(); ctx.moveTo(i * 1.5, hy + 5.5); ctx.lineTo(i * 1.5, hy + 7)
        ctx.lineWidth = 1; ctx.stroke()
      }
      // torso
      ctx.strokeStyle = C.bone; ctx.lineWidth = 2.5
      const ct = hy + 12, cb = hy + 38
      bone(0, ct, 0, cb)
      for (let i = 0; i < 4; i++) { const ry = ct + i * 6 + 4; bone(0, ry, -10, ry + 3); bone(0, ry, 10, ry + 3) }
      bone(-8, ct + 6, -10, ct + 20); bone(8, ct + 6, 10, ct + 20)
      joint(0, ct, 3); joint(0, cb, 3)
      const hipY = cb + 8
      bone(0, cb, 0, hipY); bone(-8, hipY, 8, hipY); joint(0, hipY, 3)
      // arms
      const sy = ct + 4
      const lEx = -11 + Math.sin(aA) * 18, lEy = sy + Math.cos(aA) * 18
      const lHx = lEx + Math.sin(aA + 0.4) * 14, lHy = lEy + Math.cos(aA + 0.4) * 14
      bone(-11, sy, lEx, lEy); bone(lEx, lEy, lHx, lHy); joint(-11, sy, 3); joint(lEx, lEy, 3)
      const rEx = 11 + Math.sin(aB) * 18, rEy = sy + Math.cos(aB) * 18
      const rHx = rEx + Math.sin(aB - 0.4) * 14, rHy = rEy + Math.cos(aB - 0.4) * 14
      bone(11, sy, rEx, rEy); bone(rEx, rEy, rHx, rHy); joint(11, sy, 3); joint(rEx, rEy, 3)
      // laptop
      ctx.save(); ctx.translate(rHx - 8, rHy - 6); ctx.rotate(-0.2)
      ctx.fillStyle = C.purple; ctx.beginPath()
      ctx.roundRect(-16, -10, 32, 20, 3); ctx.fill()
      ctx.fillStyle = C.screen; ctx.fillRect(-13, -8, 26, 14)
      ctx.fillStyle = C.purpleDark
      ;[0, 4, 8].forEach(dy => ctx.fillRect(-10, -6 + dy, 8 + Math.random() * 10, 1.5))
      ctx.fillStyle = C.purple; ctx.beginPath()
      ctx.roundRect(-18, 10, 36, 4, 2); ctx.fill()
      ctx.restore()
      // legs
      const drawLeg = (hx, angle) => {
        const kx = hx + Math.sin(angle) * 22, ky = hipY + Math.cos(Math.abs(angle)) * 22
        const fx = kx + Math.sin(angle * 0.5) * 18, fy = ky + 18
        bone(hx, hipY, kx, ky); bone(kx, ky, fx, fy)
        joint(hx, hipY, 3); joint(kx, ky, 3)
        ctx.beginPath(); ctx.moveTo(fx, fy); ctx.lineTo(fx + 9, fy - 3); ctx.lineTo(fx + 10, fy)
        ctx.strokeStyle = C.bone; ctx.lineWidth = 3; ctx.stroke()
      }
      drawLeg(-8, lA); drawLeg(8, lB)
      ctx.restore()
    }

    const drawSpider = (sp, t) => {
      sp.swing += sp.swingSpeed
      if (!sp.dropping && Math.random() < 0.003) {
        sp.dropping = true; sp.dropSpeed = 1 + Math.random() * 1.5
        sp.maxDrop = sp.ropeLen + 30 + Math.random() * 60
      }
      if (sp.dropping) {
        sp.dropped += sp.dropSpeed
        if (sp.dropped >= sp.maxDrop) {
          sp.dropSpeed *= 0.9
          if (sp.dropSpeed < 0.3) { sp.dropped = 0; sp.dropping = false; sp.dropSpeed = 0 }
        }
      }
      const cx = sp.x + Math.sin(sp.swing) * sp.swingAmp
      const rope = sp.ropeLen + sp.dropped
      const sc = sp.scale
      const lp = t * 0.08 + sp.legPhase
      // thread
      ctx.beginPath(); ctx.moveTo(cx, 0); ctx.lineTo(cx, rope - 10 * sc)
      ctx.strokeStyle = C.web; ctx.lineWidth = 0.8; ctx.stroke()
      ctx.beginPath(); ctx.moveTo(cx - 25, 0); ctx.lineTo(cx + 25, 0)
      ctx.strokeStyle = C.web; ctx.lineWidth = 0.5; ctx.stroke()
      ctx.save(); ctx.translate(cx, rope); ctx.scale(sc, sc)
      // legs
      ;[-0.4, -0.7, -1.0, -1.3].forEach((base, i) => {
        const w = Math.sin(lp + i * 0.5) * 0.15
        ;[-1, 1].forEach(side => {
          const ang = side > 0 ? base + w : -Math.PI + base - w
          const ex = side * 8 + Math.cos(ang) * 14, ey = 2 + Math.sin(ang) * 14
          const sign = side > 0 ? 0.6 : -0.6
          const fx = ex + Math.cos(ang + sign) * 10, fy = ey + Math.sin(ang + sign) * 10
          ctx.beginPath(); ctx.moveTo(side * 8, 2); ctx.lineTo(ex, ey); ctx.lineTo(fx, fy)
          ctx.strokeStyle = C.bone; ctx.lineWidth = 1.5; ctx.stroke()
        })
      })
      // skull body
      ctx.beginPath(); ctx.ellipse(0, 5, 10, 8, 0, 0, Math.PI * 2)
      ctx.fillStyle = '#fff'; ctx.fill(); ctx.strokeStyle = C.bone; ctx.lineWidth = 1.5; ctx.stroke()
      // skull head
      ctx.beginPath(); ctx.arc(0, -3, 9, 0, Math.PI * 2)
      ctx.fillStyle = '#fff'; ctx.fill(); ctx.strokeStyle = C.bone; ctx.lineWidth = 1.5; ctx.stroke()
      // eyes
      ;[[-3.5, -4], [3.5, -4]].forEach(([ex, ey]) => {
        ctx.beginPath(); ctx.arc(ex, ey, 2.5, 0, Math.PI * 2); ctx.fillStyle = C.bone; ctx.fill()
      })
      // nose
      ctx.beginPath(); ctx.arc(0, -1, 1.2, 0, Math.PI * 2); ctx.fillStyle = C.bone; ctx.fill()
      // teeth
      ctx.beginPath(); ctx.moveTo(-4, 2); ctx.quadraticCurveTo(0, 5, 4, 2)
      ctx.strokeStyle = C.bone; ctx.lineWidth = 1; ctx.stroke()
      for (let i = -2; i <= 2; i++) {
        ctx.beginPath(); ctx.moveTo(i * 1.6, 2.5); ctx.lineTo(i * 1.6, 4.5)
        ctx.lineWidth = 1; ctx.stroke()
      }
      ctx.restore()
    }

    let t = 0
    let rafId

    const loop = () => {
      t++
      const W = canvas.width, H = canvas.height
      const ground = H - 45
      runner.x += runner.speed
      if (runner.x > W + 100) runner.x = -80

      if (t - lastSnippet > 85) {
        floaties.push({
          x: runner.x - 20 + Math.random() * 30,
          y: -100 - Math.random() * 30,
          text: SNIPPETS[Math.floor(Math.random() * SNIPPETS.length)],
          life: 1, vy: -0.45,
        })
        lastSnippet = t
      }

      ctx.clearRect(0, 0, W, H)

      // stars
      stars.forEach(s => {
        const tw = Math.sin(t * 0.04 + s.x) * 0.1
        ctx.beginPath(); ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(83,74,183,${s.op + tw})`; ctx.fill()
      })

      // ground dashes
      ctx.strokeStyle = 'rgba(83,74,183,0.1)'; ctx.lineWidth = 1.5
      ctx.setLineDash([6, 4])
      ctx.beginPath(); ctx.moveTo(0, ground + 2); ctx.lineTo(W, ground + 2); ctx.stroke()
      ctx.setLineDash([])
      for (let gx = ((t * runner.speed * 2) % 80); gx < W; gx += 80) {
        ctx.beginPath(); ctx.moveTo(gx, ground + 2); ctx.lineTo(gx - 10, ground + 12)
        ctx.strokeStyle = 'rgba(83,74,183,0.07)'; ctx.lineWidth = 1; ctx.stroke()
      }

      // speed lines
      for (let i = 0; i < 5; i++) {
        const ly = ground - 28 - i * 16 - Math.sin(t * 0.1 + i) * 4
        ctx.beginPath()
        ctx.moveTo(runner.x - 45 - i * 4, ly); ctx.lineTo(runner.x - 65 - i * 10, ly)
        ctx.strokeStyle = `rgba(83,74,183,${0.12 - i * 0.02})`; ctx.lineWidth = 1; ctx.stroke()
      }

      // floaties
      for (let i = floaties.length - 1; i >= 0; i--) {
        const f = floaties[i]; f.y += f.vy; f.life -= 0.007
        if (f.life <= 0) { floaties.splice(i, 1); continue }
        ctx.font = 'bold 11px monospace'
        ctx.fillStyle = `rgba(83,74,183,${f.life * 0.8})`
        ctx.fillText(f.text, runner.x + f.x - 40, ground + f.y)
      }

      spiders.forEach(sp => drawSpider(sp, t))
      drawSkeleton(runner.x, t)

      rafId = requestAnimationFrame(loop)
    }

    loop()

    return () => {
      cancelAnimationFrame(rafId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 0,
      }}
    />
  )
}

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
      {/* ── Skeleton Runner background canvas ── */}
      <SkeletonRunner />

      {/* Background Glow (kept on top of canvas) */}
      <div className="absolute inset-0 pointer-events-none z-[1]">
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
              <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
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
            {[['4+', 'Projects'], ['300+', 'Problems Solved'], ['3+', 'Tech Stacks']].map(([n, l]) => (
              <div key={l}>
                <p className="text-2xl font-bold text-ink">{n}</p>
                <p className="text-sm text-slate">{l}</p>
              </div>
            ))}
          </div>

          {/* Learning Chips */}
          <div className="mt-6 flex flex-wrap gap-2">
            {['React', 'Java', 'Oracle SQL'].map(tag => (
              <span key={tag} className="rounded-full bg-mist px-3 py-1 text-sm text-ink">
                {tag}
              </span>
            ))}
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
                boxShadow: '0 30px 60px -15px rgba(17,17,17,0.18), 0 0 0 1px rgba(17,17,17,0.04)',
              }}
            >
              <div
                className="absolute inset-[6%] overflow-hidden flex items-center justify-center bg-mist"
                style={{ borderRadius: '38% 62% 63% 37% / 41% 44% 56% 59%' }}
              >
                <img
                  src="/profile.png"
                  alt={profile.name}
                  onError={(e) => { e.currentTarget.style.display = 'none' }}
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