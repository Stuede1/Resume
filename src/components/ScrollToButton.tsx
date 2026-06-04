'use client'

import { ArrowDown } from 'lucide-react'

export function ScrollToButton({ targetId, className }: { targetId: string; className?: string }) {
  return (
    <button
      onClick={() => document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' })}
      className={className}
    >
      <ArrowDown size={20} />
    </button>
  )
}
