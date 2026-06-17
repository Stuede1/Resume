'use client'

import { useState, useEffect } from 'react'
import { Moon, Sun } from 'lucide-react'

export function ThemeToggle() {
  const [isLight, setIsLight] = useState(false)

  useEffect(() => {
    setIsLight(document.documentElement.classList.contains('light'))
  }, [])

  const toggle = () => {
    const goLight = !isLight
    setIsLight(goLight)
    if (goLight) {
      document.documentElement.classList.add('light')
      localStorage.setItem('cs-theme', 'light')
    } else {
      document.documentElement.classList.remove('light')
      localStorage.setItem('cs-theme', 'dark')
    }
  }

  return (
    <button
      onClick={toggle}
      className="w-[38px] h-[38px] grid place-items-center cursor-pointer border rounded-[10px] transition-all duration-200 hover:rotate-[15deg]"
      style={{
        borderColor: 'var(--line)',
        color: 'var(--text)',
        background: 'transparent',
      }}
      aria-label="Toggle theme"
    >
      {isLight ? <Moon size={18} /> : <Sun size={18} />}
    </button>
  )
}
