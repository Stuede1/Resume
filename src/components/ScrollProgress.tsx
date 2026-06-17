'use client'

import { useEffect } from 'react'

export function ScrollProgress() {
  useEffect(() => {
    const bar = document.getElementById('scroll-progress')
    if (!bar) return

    function onScroll() {
      const h = document.documentElement.scrollHeight - window.innerHeight
      bar!.style.width = h > 0 ? (window.scrollY / h) * 100 + '%' : '0%'
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return <div id="scroll-progress" />
}
