'use client'

import { useState } from 'react'
import { Menu, X, FileText } from 'lucide-react'
import { ThemeToggle } from '@/components/ThemeToggle'

const links = [
  { label: 'About', href: 'about' },
  { label: 'Experience', href: 'experience' },
  { label: 'Education', href: 'education' },
  { label: 'Projects', href: 'projects' },
  { label: 'Skills', href: 'skills' },
  { label: 'Contact', href: 'contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-neutral-900/80 backdrop-blur-md border-b border-neutral-100 dark:border-neutral-800">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="text-lg font-bold tracking-tight cursor-pointer dark:text-white">
          CS<span className="text-neutral-400">.</span>
        </button>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              className="text-sm text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white transition-colors cursor-pointer"
            >
              {link.label}
            </button>
          ))}
          <a
            href="/resume.pdf"
            download
            className="flex items-center gap-2 text-sm text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white transition-colors"
          >
            <FileText size={16} />
            Resume
          </a>
          <ThemeToggle />
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 cursor-pointer"
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white dark:bg-neutral-900 border-b border-neutral-100 dark:border-neutral-800 px-6 pb-4">
          {links.map((link) => (
            <button
              key={link.href}
              onClick={() => { scrollTo(link.href); setOpen(false) }}
              className="block py-3 text-sm text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white transition-colors w-full text-left cursor-pointer"
            >
              {link.label}
            </button>
          ))}
          <a
            href="/resume.pdf"
            download
            onClick={() => setOpen(false)}
            className="flex items-center gap-2 py-3 text-sm text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white transition-colors"
          >
            <FileText size={16} />
            Resume
          </a>
        </div>
      )}
    </nav>
  )
}
