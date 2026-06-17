'use client'

import { useState, useEffect, useCallback } from 'react'
import { FileText, Menu, X } from 'lucide-react'
import { ThemeToggle } from '@/components/ThemeToggle'

const links = [
  { label: 'About', href: 'about' },
  { label: 'Experience', href: 'experience' },
  { label: 'Projects', href: 'projects' },
  { label: 'Skills', href: 'skills' },
  { label: 'Contact', href: 'contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('')
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = links
      .map((l) => document.getElementById(l.href))
      .filter(Boolean) as HTMLElement[]

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) setActive(en.target.id)
        })
      },
      { rootMargin: '-45% 0px -50% 0px' }
    )
    sections.forEach((s) => obs.observe(s))
    return () => obs.disconnect()
  }, [])

  const scrollTo = useCallback((id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMobileOpen(false)
  }, [])

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between backdrop-blur-[14px] transition-all duration-300"
        style={{
          padding: scrolled ? '12px max(24px, 5vw)' : '18px max(24px, 5vw)',
          background: 'color-mix(in srgb, var(--bg) 60%, transparent)',
          borderBottom: scrolled ? '1px solid var(--line)' : '1px solid transparent',
        }}
      >
        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="font-mono font-semibold text-lg tracking-tight cursor-pointer"
          style={{ color: 'var(--text)' }}
        >
          CS<span style={{ color: 'var(--accent)' }}>.</span>
        </button>

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-1">
          {links.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              className="relative text-[13.5px] px-3 py-1.5 rounded-lg transition-colors duration-200 cursor-pointer"
              style={{ color: active === link.href ? 'var(--text)' : 'var(--muted)' }}
            >
              {link.label}
              {active === link.href && (
                <span
                  className="absolute left-3 right-3 bottom-0.5 h-[1.5px] rounded-sm"
                  style={{ background: 'var(--accent)' }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Desktop actions */}
        <div className="hidden md:flex items-center gap-2.5">
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center gap-[7px] text-[13px] px-3.5 py-2 rounded-[9px] border transition-all duration-200"
            style={{
              borderColor: 'var(--line-strong)',
              color: 'var(--text)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'var(--accent)'
              e.currentTarget.style.background = 'var(--accent-soft)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'var(--line-strong)'
              e.currentTarget.style.background = 'transparent'
            }}
          >
            <FileText size={14} />
            <span className="max-[860px]:hidden">Resume</span>
          </a>
          <ThemeToggle />
        </div>

        {/* Mobile menu button */}
        <div className="flex md:hidden items-center gap-2.5">
          <ThemeToggle />
          <button
            onClick={() => setMobileOpen(true)}
            className="w-[38px] h-[38px] grid place-items-center border rounded-[10px] cursor-pointer"
            style={{ borderColor: 'var(--line)', color: 'var(--text)', background: 'transparent' }}
            aria-label="Menu"
          >
            <Menu size={20} />
          </button>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      <div
        className="fixed inset-0 z-[55] flex flex-col items-center justify-center gap-6 transition-opacity duration-300"
        style={{
          background: 'var(--bg)',
          opacity: mobileOpen ? 1 : 0,
          pointerEvents: mobileOpen ? 'auto' : 'none',
        }}
      >
        <button
          onClick={() => setMobileOpen(false)}
          className="absolute top-5 right-[5vw] cursor-pointer"
          style={{ color: 'var(--text)', background: 'none', border: 'none' }}
        >
          <X size={28} />
        </button>
        {links.map((link) => (
          <button
            key={link.href}
            onClick={() => scrollTo(link.href)}
            className="text-[26px] font-semibold cursor-pointer"
            style={{ color: 'var(--text)' }}
          >
            {link.label}
          </button>
        ))}
        <a
          href="/resume.pdf"
          download
          onClick={() => setMobileOpen(false)}
          className="text-[26px] font-semibold"
          style={{ color: 'var(--text)' }}
        >
          Resume
        </a>
      </div>
    </>
  )
}
