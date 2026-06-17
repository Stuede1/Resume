'use client'

const items = [
  'React', 'Next.js', 'TypeScript', 'Tailwind CSS',
  'Node.js', 'GSAP', 'Three.js', 'Python', 'Figma',
]

export function Marquee() {
  return (
    <div className="marquee">
      <div className="marquee-track">
        {items.map((item) => (
          <span key={item}>{item}</span>
        ))}
        {items.map((item) => (
          <span key={item + '-dup'}>{item}</span>
        ))}
      </div>
    </div>
  )
}
