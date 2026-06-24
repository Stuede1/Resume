'use client'

import Navbar from '@/components/Navbar'
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/ScrollAnimations'
import { HeroAnimation } from '@/components/HeroAnimation'
import { Background3D } from '@/components/Background3D'
import { ScrollProgress } from '@/components/ScrollProgress'
import { Marquee } from '@/components/Marquee'
import { ContactSection } from '@/components/ContactSection'
import { ContactModal } from '@/components/ContactModal'
import { useState, useCallback } from 'react'

const GithubIcon = () => (
  <svg width={17} height={17} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 .5C5.7.5.5 5.7.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.2.8-.6v-2c-3.2.7-3.9-1.5-3.9-1.5-.5-1.3-1.3-1.7-1.3-1.7-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.7 1.3 3.4 1 .1-.8.4-1.3.7-1.6-2.6-.3-5.3-1.3-5.3-5.8 0-1.3.5-2.3 1.2-3.2-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.8.1 3.1.8.9 1.2 1.9 1.2 3.2 0 4.5-2.7 5.5-5.3 5.8.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6 4.6-1.5 7.9-5.8 7.9-10.9C23.5 5.7 18.3.5 12 .5z" />
  </svg>
)

const ArrowIcon = () => (
  <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
    <path d="M7 17 17 7M9 7h8v8" />
  </svg>
)

const experience = [
  {
    role: 'Front-End Developer Program',
    company: 'Front-End Simplified',
    period: '2025 — Present',
    description:
      'Building real-world, production-style web apps from the ground up in Next.js and React — translating Figma designs into responsive, accessible interfaces and deploying to Vercel. Currently shipping Summarist, a book-summary platform.',
    tags: ['Next.js', 'React', 'TypeScript', 'Tailwind'],
  },
  {
    role: 'Service Technician',
    company: 'Revolve Labs',
    period: 'Jul 2025 — Present',
    description:
      'Diagnose and repair Bitcoin-mining hardware to restore non-hashing units — replacing PSUs, control boards and cooling systems. Document repairs, performance data and inventory for accurate tracking, and optimize fleets to cut downtime.',
    tags: ['Hardware', 'Diagnostics', 'Problem Solving'],
  },
  {
    role: 'Roofing Apprentice',
    company: 'Stuedeman Construction Services',
    period: '2018 — 2023',
    description:
      'Five seasons of hands-on construction work — framing, exterior replacement and project delivery on tight timelines. Built the discipline, reliability and craftsmanship I now bring to engineering.',
    tags: ['Reliability', 'Teamwork'],
  },
]

const projects = [
  {
    num: '01',
    title: 'Summarist',
    description:
      'A polished book-summary platform — auth, dynamic routing, audio playback and a Stripe-style subscription flow built with production Next.js architecture.',
    tech: ['Next.js', 'TypeScript', 'Firebase', 'Tailwind'],
    github: 'https://github.com/Stuede1/cole-internship-2.0',
    link: 'https://cole-internship-2-0.vercel.app/',
  },
  {
    num: '02',
    title: 'Movieflix',
    description:
      'A responsive movie-browsing app with live search, detail views and a clean, Netflix-inspired interface powered by a public film API.',
    tech: ['React', 'JavaScript', 'CSS', 'API'],
    github: 'https://github.com/Stuede1/movieflix',
    link: 'https://stuede1.github.io/movieflix',
  },
  {
    num: '03',
    title: 'Skinstric A.I.',
    description:
      'An AI-powered skincare analysis concept that uses facial recognition to estimate demographics and return personalized product recommendations.',
    tech: ['Next.js', 'TypeScript', 'Tailwind', 'GSAP'],
    github: 'https://github.com/Stuede1/skinstric-ai',
    link: 'https://skinstric-cole.vercel.app/',
  },
  {
    num: '04',
    title: 'Drone Fleet Coverage',
    description:
      'A capstone optimization study — algorithms that distribute a fleet of drones for maximum area coverage while respecting restricted no-fly zones, with a visual simulation layer.',
    tech: ['Python', 'Algorithms', 'Optimization', 'Visualization'],
    github: 'https://github.com/Kenneth-Schueman/Distributing-a-Fleet-of-Drones-over-an-Area-with-No-Fly-Zones',
    link: 'https://sdmay25-21.sd.ece.iastate.edu/',
  },
]

const skills = [
  { category: 'Languages', items: ['JavaScript', 'TypeScript', 'Python', 'Java', 'C / C++', 'HTML & CSS'] },
  { category: 'Frameworks', items: ['React', 'Next.js', 'Node.js', 'Express', 'Three.js', 'GSAP'] },
  { category: 'Styling', items: ['Tailwind CSS', 'CSS Modules', 'SASS', 'Styled Components', 'Framer Motion'] },
  { category: 'Tools & Platforms', items: ['Git & GitHub', 'VS Code', 'Figma', 'Vercel', 'Firebase', 'Linux'] },
]

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleProjectMouseMove = useCallback((e: React.MouseEvent<HTMLElement>) => {
    const card = e.currentTarget
    const r = card.getBoundingClientRect()
    card.style.setProperty('--mx', (e.clientX - r.left) + 'px')
    card.style.setProperty('--my', (e.clientY - r.top) + 'px')
  }, [])

  return (
    <>
      <ScrollProgress />
      <Background3D />
      <Navbar />

      {/* Hero */}
      <header className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-[120px] pb-20 z-[2]" id="top">
        <HeroAnimation onContactClick={() => setIsModalOpen(true)} />
      </header>

      {/* Marquee */}
      <Marquee />

      {/* About */}
      <section id="about" className="relative z-[2] py-[110px]">
        <div className="max-w-[1180px] mx-auto px-[max(24px,5vw)] grid grid-cols-1 md:grid-cols-[0.85fr_1.4fr] gap-[60px]">
          <FadeIn direction="up" className="md:sticky md:top-[110px] md:self-start">
            <div className="seg-label">About</div>
            <h2
              className="text-[clamp(28px,4vw,46px)] font-bold tracking-[-1.5px] leading-[1.05]"
              style={{ color: 'var(--text)' }}
            >
              A bit<br />about me
            </h2>
          </FadeIn>
          <div>
            <FadeIn direction="up" delay={0.1}>
              <p className="text-[17px] mb-[18px] max-w-[580px] leading-relaxed" style={{ color: 'var(--muted)' }}>
                I&apos;m a frontend developer and recent <strong style={{ color: 'var(--text)' }}>Software Engineering</strong> graduate from Iowa State University, now sharpening my craft through an intensive front-end program focused on production-grade <strong style={{ color: 'var(--text)' }}>Next.js</strong> and <strong style={{ color: 'var(--text)' }}>React</strong>.
              </p>
            </FadeIn>
            <FadeIn direction="up" delay={0.2}>
              <p className="text-[17px] mb-[18px] max-w-[580px] leading-relaxed" style={{ color: 'var(--muted)' }}>
                I care about the details that make an interface feel right — clean, maintainable code, considered motion, and layouts that stay intuitive and responsive on every screen. When I&apos;m not shipping, you&apos;ll find me contributing to side projects, learning new tools, or serving my community as a <strong style={{ color: 'var(--text)' }}>volunteer firefighter</strong>.
              </p>
            </FadeIn>
            <StaggerContainer staggerDelay={0.1} className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mt-[34px] max-w-[580px]">
              {[
                { k: 'Based in', v: 'Minnesota, USA' },
                { k: 'Education', v: 'Iowa State University', sub: 'B.S. Software Engineering' },
                { k: 'Focus', v: 'Frontend & Full-Stack' },
                { k: 'Status', v: 'Available for hire' },
              ].map((fact) => (
                <StaggerItem key={fact.k} direction="up">
                  <div
                    className="border rounded-[14px] p-[18px_20px] transition-all duration-300 hover:-translate-y-[3px]"
                    style={{ borderColor: 'var(--line)', background: 'var(--panel)' }}
                    onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--line-strong)' }}
                    onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--line)' }}
                  >
                    <div className="font-mono text-[11px] tracking-[1.5px] uppercase mb-1.5" style={{ color: 'var(--faint)' }}>
                      {fact.k}
                    </div>
                    <div className="text-[16px] font-medium" style={{ color: 'var(--text)' }}>
                      {fact.v}
                      {fact.sub && (
                        <>
                          <br />
                          <small style={{ color: 'var(--muted)', fontWeight: 400 }}>{fact.sub}</small>
                        </>
                      )}
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section
        id="experience"
        className="relative z-[2] py-[110px]"
        style={{ background: 'var(--bg-alt)', borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)' }}
      >
        <div className="max-w-[1180px] mx-auto px-[max(24px,5vw)] grid grid-cols-1 md:grid-cols-[0.85fr_1.4fr] gap-[60px]">
          <FadeIn direction="up" className="md:sticky md:top-[110px] md:self-start">
            <div className="seg-label">Experience</div>
            <h2
              className="text-[clamp(28px,4vw,46px)] font-bold tracking-[-1.5px] leading-[1.05]"
              style={{ color: 'var(--text)' }}
            >
              Where I&apos;ve<br />worked
            </h2>
          </FadeIn>
          <div>
            <StaggerContainer staggerDelay={0.15}>
              {experience.map((job, i) => (
                <StaggerItem key={i} direction="up">
                  <div className="tl-item">
                    <span className="tl-dot" />
                    <div className="font-mono text-xs tracking-wide mb-1" style={{ color: 'var(--faint)' }}>
                      {job.period}
                    </div>
                    <div className="text-[19px] font-semibold" style={{ color: 'var(--text)' }}>
                      {job.role}
                    </div>
                    <div className="text-sm mb-2.5" style={{ color: 'var(--accent)' }}>
                      {job.company}
                    </div>
                    <p className="text-[15px] max-w-[620px] leading-relaxed" style={{ color: 'var(--muted)' }}>
                      {job.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-3">
                      {job.tags.map((t) => (
                        <span key={t} className="tag">{t}</span>
                      ))}
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="relative z-[2] py-[110px]">
        <div className="max-w-[1180px] mx-auto px-[max(24px,5vw)]">
          <FadeIn direction="up">
            <div className="seg-label">Projects</div>
            <h2
              className="text-[clamp(28px,4vw,46px)] font-bold tracking-[-1.5px] leading-[1.05]"
              style={{ color: 'var(--text)' }}
            >
              Selected work
            </h2>
          </FadeIn>
          <StaggerContainer staggerDelay={0.12} className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-12">
            {projects.map((project, i) => (
              <StaggerItem key={i} direction="up">
                <article
                  className="proj-card"
                  onMouseMove={handleProjectMouseMove}
                >
                  <div className="relative z-[1] flex flex-col h-full">
                    <div className="flex justify-between items-start">
                      <span className="font-mono text-xs" style={{ color: 'var(--faint)' }}>{project.num}</span>
                      <div className="flex gap-2.5" style={{ color: 'var(--muted)' }}>
                        {project.github && (
                          <a href={project.github} target="_blank" rel="noopener noreferrer" className="transition-colors duration-200 hover:text-[var(--accent)]">
                            <GithubIcon />
                          </a>
                        )}
                        {project.link && (
                          <a href={project.link} target="_blank" rel="noopener noreferrer" className="transition-colors duration-200 hover:text-[var(--accent)]">
                            <ArrowIcon />
                          </a>
                        )}
                      </div>
                    </div>
                    <h3 className="text-[22px] font-semibold tracking-[-0.5px] mt-4 mb-2.5" style={{ color: 'var(--text)' }}>
                      {project.title}
                    </h3>
                    <p className="text-[15px] leading-relaxed flex-grow" style={{ color: 'var(--muted)' }}>
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-[18px]">
                      {project.tech.map((t) => (
                        <span key={t} className="tag">{t}</span>
                      ))}
                    </div>
                  </div>
                </article>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Skills */}
      <section
        id="skills"
        className="relative z-[2] py-[110px]"
        style={{ background: 'var(--bg-alt)', borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)' }}
      >
        <div className="max-w-[1180px] mx-auto px-[max(24px,5vw)]">
          <FadeIn direction="up">
            <div className="seg-label">Skills</div>
            <h2
              className="text-[clamp(28px,4vw,46px)] font-bold tracking-[-1.5px] leading-[1.05]"
              style={{ color: 'var(--text)' }}
            >
              Technologies I use
            </h2>
          </FadeIn>
          <StaggerContainer staggerDelay={0.1} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[30px] mt-12">
            {skills.map((group) => (
              <StaggerItem key={group.category} direction="up">
                <h4
                  className="font-mono text-xs tracking-[1.5px] uppercase mb-[18px] pb-3"
                  style={{ color: 'var(--text)', borderBottom: '1px solid var(--line)' }}
                >
                  {group.category}
                </h4>
                <ul className="list-none">
                  {group.items.map((item) => (
                    <li key={item} className="skill-item">{item}</li>
                  ))}
                </ul>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Contact */}
      <ContactSection onContactClick={() => setIsModalOpen(true)} />
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      {/* Footer */}
      <footer
        className="relative z-[2] flex justify-between items-center flex-wrap gap-[18px] mt-10"
        style={{ borderTop: '1px solid var(--line)', padding: '40px max(24px, 5vw)' }}
      >
        <span className="font-mono text-[12.5px]" style={{ color: 'var(--faint)' }}>
          &copy; {new Date().getFullYear()} Cole Stuedeman. All rights reserved.
        </span>
        <span className="font-mono text-[12.5px]" style={{ color: 'var(--faint)' }}>
          Designed &amp; built with <b className="font-medium" style={{ color: 'var(--muted)' }}>care</b> · Minnesota
        </span>
      </footer>
    </>
  )
}
