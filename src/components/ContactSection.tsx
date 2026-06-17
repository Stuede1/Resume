'use client'

import { Mail } from 'lucide-react'
import { FadeIn } from '@/components/ScrollAnimations'

const GithubIcon = () => (
  <svg width={18} height={18} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 .5C5.7.5.5 5.7.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.2.8-.6v-2c-3.2.7-3.9-1.5-3.9-1.5-.5-1.3-1.3-1.7-1.3-1.7-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.7 1.3 3.4 1 .1-.8.4-1.3.7-1.6-2.6-.3-5.3-1.3-5.3-5.8 0-1.3.5-2.3 1.2-3.2-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.8.1 3.1.8.9 1.2 1.9 1.2 3.2 0 4.5-2.7 5.5-5.3 5.8.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6 4.6-1.5 7.9-5.8 7.9-10.9C23.5 5.7 18.3.5 12 .5z" />
  </svg>
)

const LinkedinIcon = () => (
  <svg width={17} height={17} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 0H5a5 5 0 0 0-5 5v14a5 5 0 0 0 5 5h14a5 5 0 0 0 5-5V5a5 5 0 0 0-5-5zM8 19H5V8h3zM6.5 6.7a1.8 1.8 0 1 1 0-3.6 1.8 1.8 0 0 1 0 3.6zM20 19h-3v-5.6c0-3.4-4-3.1-4 0V19h-3V8h3v1.8c1.4-2.6 7-2.8 7 2.5z" />
  </svg>
)

interface ContactSectionProps {
  onContactClick: () => void
}

export function ContactSection({ onContactClick }: ContactSectionProps) {
  return (
    <section id="contact" className="relative z-[2] text-center py-[130px]">
      <div className="max-w-[1180px] mx-auto px-[max(24px,5vw)]">
        <FadeIn direction="up">
          <div className="seg-label" style={{ justifyContent: 'center' }}>Contact</div>
        </FadeIn>
        <FadeIn direction="up" delay={0.1}>
          <h2 className="text-[clamp(40px,7vw,88px)] font-bold tracking-[-3px] leading-none mt-[18px] mb-6">
            Let&apos;s build<br />
            <span
              className="bg-clip-text"
              style={{
                background: 'linear-gradient(180deg, var(--text), color-mix(in srgb, var(--text) 50%, var(--bg)))',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              something good.
            </span>
          </h2>
        </FadeIn>
        <FadeIn direction="up" delay={0.2}>
          <p className="max-w-[480px] mx-auto mb-9 text-[17px]" style={{ color: 'var(--muted)' }}>
            I&apos;m always open to new opportunities and interesting projects. Whether you have a role in mind or just want to say hello — my inbox is open.
          </p>
        </FadeIn>
        <FadeIn direction="up" delay={0.2}>
          <button
            onClick={onContactClick}
            className="inline-flex items-center gap-3 font-mono text-[clamp(16px,2.4vw,24px)] pb-2 cursor-pointer transition-all duration-300 group"
            style={{
              color: 'var(--text)',
              borderBottom: '1px solid var(--line-strong)',
              background: 'none',
              border: 'none',
              borderBottomWidth: '1px',
              borderBottomStyle: 'solid',
              borderBottomColor: 'var(--line-strong)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = 'var(--accent)'
              e.currentTarget.style.borderBottomColor = 'var(--accent)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = 'var(--text)'
              e.currentTarget.style.borderBottomColor = 'var(--line-strong)'
            }}
          >
            cstuedeman@gmail.com <span className="transition-all duration-300 group-hover:ml-1.5">→</span>
          </button>
        </FadeIn>
        <FadeIn direction="up" delay={0.3}>
          <div className="flex gap-2 justify-center mt-[42px]">
            {[
              { href: 'https://github.com/Stuede1', label: 'GitHub', icon: <GithubIcon /> },
              { href: 'https://www.linkedin.com/in/cole-stuedeman', label: 'LinkedIn', icon: <LinkedinIcon /> },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="w-[42px] h-[42px] grid place-items-center border rounded-[11px] transition-all duration-200"
                style={{ color: 'var(--muted)', borderColor: 'var(--line)' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = 'var(--text)'
                  e.currentTarget.style.borderColor = 'var(--accent)'
                  e.currentTarget.style.background = 'var(--accent-soft)'
                  e.currentTarget.style.transform = 'translateY(-3px)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'var(--muted)'
                  e.currentTarget.style.borderColor = 'var(--line)'
                  e.currentTarget.style.background = 'transparent'
                  e.currentTarget.style.transform = 'translateY(0)'
                }}
              >
                {s.icon}
              </a>
            ))}
            <button
              onClick={onContactClick}
              aria-label="Email"
              className="w-[42px] h-[42px] grid place-items-center border rounded-[11px] transition-all duration-200 cursor-pointer"
              style={{ color: 'var(--muted)', borderColor: 'var(--line)', background: 'transparent' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = 'var(--text)'
                e.currentTarget.style.borderColor = 'var(--accent)'
                e.currentTarget.style.background = 'var(--accent-soft)'
                e.currentTarget.style.transform = 'translateY(-3px)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'var(--muted)'
                e.currentTarget.style.borderColor = 'var(--line)'
                e.currentTarget.style.background = 'transparent'
                e.currentTarget.style.transform = 'translateY(0)'
              }}
            >
              <Mail size={18} />
            </button>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
