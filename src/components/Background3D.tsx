'use client'

import { useRef, useEffect, useCallback } from 'react'

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  r: number
  blue: boolean
}

export function Background3D() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const particlesRef = useRef<Particle[]>([])
  const mouseRef = useRef({ x: -9999, y: -9999 })
  const animRef = useRef<number>(0)
  const dimsRef = useRef({ w: 0, h: 0, dpr: 1 })

  const resize = useCallback(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    const w = innerWidth * dpr
    const h = innerHeight * dpr
    canvas.width = w
    canvas.height = h
    canvas.style.width = innerWidth + 'px'
    canvas.style.height = innerHeight + 'px'
    dimsRef.current = { w, h, dpr }

    const count = Math.min(140, Math.floor((innerWidth * innerHeight) / 13000))
    const particles: Particle[] = []
    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.18 * dpr,
        vy: (Math.random() - 0.5) * 0.18 * dpr,
        r: (Math.random() * 1.4 + 0.4) * dpr,
        blue: Math.random() > 0.55,
      })
    }
    particlesRef.current = particles
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    resize()

    const onMouseMove = (e: MouseEvent) => {
      mouseRef.current = {
        x: e.clientX * dimsRef.current.dpr,
        y: e.clientY * dimsRef.current.dpr,
      }
    }
    const onMouseOut = () => {
      mouseRef.current = { x: -9999, y: -9999 }
    }

    window.addEventListener('resize', resize)
    window.addEventListener('mousemove', onMouseMove)
    window.addEventListener('mouseout', onMouseOut)

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    function accentRGB() {
      return document.documentElement.classList.contains('light')
        ? '47,107,221'
        : '106,160,255'
    }
    function baseRGB() {
      return document.documentElement.classList.contains('light')
        ? '90,90,100'
        : '200,210,230'
    }

    function draw() {
      const { w, h, dpr } = dimsRef.current
      const particles = particlesRef.current
      const mouse = mouseRef.current
      ctx!.clearRect(0, 0, w, h)

      const acc = accentRGB()
      const base = baseRGB()
      const linkDist = 130 * dpr

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0 || p.x > w) p.vx *= -1
        if (p.y < 0 || p.y > h) p.vy *= -1

        const mdx = p.x - mouse.x
        const mdy = p.y - mouse.y
        const md = Math.hypot(mdx, mdy)
        if (md < 120 * dpr && md > 0) {
          const f = (120 * dpr - md) / (120 * dpr)
          p.x += (mdx / md) * f * 1.6
          p.y += (mdy / md) * f * 1.6
        }

        ctx!.beginPath()
        ctx!.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx!.fillStyle = `rgba(${p.blue ? acc : base},${p.blue ? 0.85 : 0.45})`
        ctx!.fill()

        for (let j = i + 1; j < particles.length; j++) {
          const q = particles[j]
          const dx = p.x - q.x
          const dy = p.y - q.y
          const d = Math.hypot(dx, dy)
          if (d < linkDist) {
            ctx!.beginPath()
            ctx!.moveTo(p.x, p.y)
            ctx!.lineTo(q.x, q.y)
            ctx!.strokeStyle = `rgba(${acc},${(1 - d / linkDist) * 0.18})`
            ctx!.lineWidth = dpr * 0.6
            ctx!.stroke()
          }
        }

        if (md < linkDist * 1.4) {
          ctx!.beginPath()
          ctx!.moveTo(p.x, p.y)
          ctx!.lineTo(mouse.x, mouse.y)
          ctx!.strokeStyle = `rgba(${acc},${(1 - md / (linkDist * 1.4)) * 0.25})`
          ctx!.lineWidth = dpr * 0.6
          ctx!.stroke()
        }
      }
      animRef.current = requestAnimationFrame(draw)
    }

    if (!prefersReduced) {
      draw()
    } else {
      const acc = accentRGB()
      const base = baseRGB()
      particlesRef.current.forEach((p) => {
        ctx!.beginPath()
        ctx!.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx!.fillStyle = `rgba(${p.blue ? acc : base},0.6)`
        ctx!.fill()
      })
    }

    return () => {
      cancelAnimationFrame(animRef.current)
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('mouseout', onMouseOut)
    }
  }, [resize])

  return (
    <>
      <canvas
        ref={canvasRef}
        className="fixed inset-0 z-0 pointer-events-none"
        style={{ width: '100%', height: '100%' }}
      />
      <div className="bg-veil" />
    </>
  )
}
