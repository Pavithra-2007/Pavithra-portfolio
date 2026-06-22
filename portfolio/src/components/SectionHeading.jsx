export default function SectionHeading({ eyebrow, title, align = 'left' }) {
  return (
    <div className={align === 'center' ? 'text-center' : 'text-left'}>
      {eyebrow && (
        <p className="text-[13px] font-medium uppercase tracking-[0.18em] text-accent mb-3">
          {eyebrow}
        </p>
      )}
      <h2 className="font-display text-[clamp(28px,4vw,44px)] font-semibold tracking-tight text-ink">
        {title}
      </h2>
    </div>
  )
}
