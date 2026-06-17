'use client'

import { motion } from 'framer-motion'
import { Mail, FileText } from 'lucide-react'

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

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
}

const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
  },
}

const socialItem = {
  hidden: { opacity: 0, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] as const },
  },
}

export function HeroAnimation({ onContactClick }: { onContactClick?: () => void }) {
  return (
    <motion.div
      className="flex flex-col items-center text-center"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {/* Status pill */}
      <motion.div
        variants={fadeUp}
        className="inline-flex items-center gap-[9px] font-mono text-[12.5px] tracking-wide mb-8 px-3.5 py-[7px] rounded-full border"
        style={{
          color: 'var(--muted)',
          borderColor: 'var(--line)',
          background: 'color-mix(in srgb, var(--panel) 50%, transparent)',
        }}
      >
        <span className="relative w-2 h-2 rounded-full bg-[#3ddc84]">
          <span
            className="absolute inset-[-4px] rounded-full border border-[#3ddc84]"
            style={{ animation: 'ping 2s cubic-bezier(0.22,1,0.36,1) infinite' }}
          />
        </span>
        Open to frontend roles · Minnesota
      </motion.div>

      {/* Eyebrow */}
      <motion.div
        variants={fadeUp}
        className="font-mono text-[13px] tracking-[5px] uppercase mb-[18px]"
        style={{ color: 'var(--faint)' }}
      >
        Frontend Developer
      </motion.div>

      {/* Name */}
      <motion.h1
        variants={fadeUp}
        className="text-[clamp(54px,11vw,132px)] font-bold leading-[0.92] tracking-[-4px] mb-[26px]"
      >
        <span className="block overflow-hidden">
          <span
            className="inline-block bg-clip-text"
            style={{
              background: 'linear-gradient(180deg, var(--text) 0%, color-mix(in srgb, var(--text) 55%, var(--bg)) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Cole
          </span>
        </span>
        <span className="block overflow-hidden">
          <span
            className="inline-block bg-clip-text"
            style={{
              background: 'linear-gradient(180deg, var(--text) 0%, color-mix(in srgb, var(--text) 55%, var(--bg)) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Stuedeman
          </span>
        </span>
      </motion.h1>

      {/* Lede */}
      <motion.p
        variants={fadeUp}
        className="text-[clamp(16px,1.9vw,20px)] max-w-[540px] mx-auto mb-9"
        style={{ color: 'var(--muted)', textWrap: 'balance' }}
      >
        I build modern, responsive web experiences with clean code and a sharp eye for detail — currently crafting interfaces in{' '}
        <strong style={{ color: 'var(--text)' }}>Next.js</strong> &{' '}
        <strong style={{ color: 'var(--text)' }}>React</strong>.
      </motion.p>

      {/* CTA buttons */}
      <motion.div variants={fadeUp} className="flex gap-3.5 flex-wrap justify-center mb-[34px]">
        <button
          onClick={onContactClick}
          className="relative inline-flex items-center gap-[9px] text-[14.5px] font-medium px-[26px] py-3.5 rounded-[11px] cursor-pointer transition-all duration-300"
          style={{ background: 'var(--text)', color: 'var(--bg)', border: '1px solid transparent' }}
        >
          Get in touch <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
        </button>
        <a
          href="#projects"
          className="relative inline-flex items-center gap-[9px] text-[14.5px] font-medium px-[26px] py-3.5 rounded-[11px] border transition-all duration-300"
          style={{ borderColor: 'var(--line-strong)', color: 'var(--text)' }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = 'var(--accent)'
            e.currentTarget.style.background = 'var(--accent-soft)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = 'var(--line-strong)'
            e.currentTarget.style.background = 'transparent'
          }}
        >
          View work
        </a>
      </motion.div>

      {/* Social icons */}
      <motion.div
        className="flex gap-2 justify-center"
        variants={container}
        initial="hidden"
        animate="visible"
        transition={{ staggerChildren: 0.08, delayChildren: 1 }}
      >
        {[
          { href: 'https://github.com/Stuede1', label: 'GitHub', icon: <GithubIcon /> },
          { href: 'https://www.linkedin.com/in/cole-stuedeman', label: 'LinkedIn', icon: <LinkedinIcon /> },
        ].map((s) => (
          <motion.a
            key={s.label}
            variants={socialItem}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={s.label}
            className="w-[42px] h-[42px] grid place-items-center border rounded-[11px] transition-all duration-200"
            style={{ color: 'var(--muted)', borderColor: 'var(--line)' }}
            whileHover={{ y: -3 }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = 'var(--text)'
              e.currentTarget.style.borderColor = 'var(--accent)'
              e.currentTarget.style.background = 'var(--accent-soft)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = 'var(--muted)'
              e.currentTarget.style.borderColor = 'var(--line)'
              e.currentTarget.style.background = 'transparent'
            }}
          >
            {s.icon}
          </motion.a>
        ))}
        <motion.button
          variants={socialItem}
          onClick={onContactClick}
          aria-label="Email"
          className="w-[42px] h-[42px] grid place-items-center border rounded-[11px] transition-all duration-200 cursor-pointer"
          style={{ color: 'var(--muted)', borderColor: 'var(--line)', background: 'transparent' }}
          whileHover={{ y: -3 }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = 'var(--text)'
            e.currentTarget.style.borderColor = 'var(--accent)'
            e.currentTarget.style.background = 'var(--accent-soft)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = 'var(--muted)'
            e.currentTarget.style.borderColor = 'var(--line)'
            e.currentTarget.style.background = 'transparent'
          }}
        >
          <Mail size={18} />
        </motion.button>
        <motion.a
          variants={socialItem}
          href="/resume.pdf"
          download
          aria-label="Resume"
          className="w-[42px] h-[42px] grid place-items-center border rounded-[11px] transition-all duration-200"
          style={{ color: 'var(--muted)', borderColor: 'var(--line)' }}
          whileHover={{ y: -3 }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = 'var(--text)'
            e.currentTarget.style.borderColor = 'var(--accent)'
            e.currentTarget.style.background = 'var(--accent-soft)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = 'var(--muted)'
            e.currentTarget.style.borderColor = 'var(--line)'
            e.currentTarget.style.background = 'transparent'
          }}
        >
          <FileText size={16} />
        </motion.a>
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        variants={fadeUp}
        className="scroll-cue absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2.5"
      >
        <span>SCROLL</span>
        <span className="line" />
      </motion.div>
    </motion.div>
  )
}
