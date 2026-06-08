'use client'

import Navbar from '@/components/Navbar'
import { Mail, ExternalLink } from 'lucide-react'
import { FadeIn, StaggerContainer, StaggerItem, ScaleIn } from '@/components/ScrollAnimations'
import { HeroAnimation } from '@/components/HeroAnimation'
import { Background3D } from '@/components/Background3D'
import { ScrollToButton } from '@/components/ScrollToButton'
import { ContactSection } from '@/components/ContactSection'
import { ContactModal } from '@/components/ContactModal'
import { useState } from 'react'

const GithubIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
  </svg>
)

const LinkedinIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
)

const experience = [
  {
    role: 'Service Technician',
    company: 'Revolve Labs',
    period: 'July 2025 — Present',
    description:
      'Diagnose and perform maintenance on Bitcoin mining rigs to restore non-hashing units to optimal performance. Replace and configure critical components, including PSUs, control boards, and cooling systems. Document repairs, performance data, and inventory updates in Google Sheets for accurate tracking and reporting. Consolidate and optimize miners to improve efficiency and reduce downtime.',
  },
]

const education = [
  {
    degree: 'Bachelor of Science in Software Engineering',
    school: 'Iowa State University',
    period: '2021 — 2025',
    description:
      'Focus on software development, embedded systems, and computer architecture. Relevant coursework includes Data Structures, Algorithms, Operating Systems, and Web Development.',
  },
]

const projects = [
  {
    title: 'Distributing a Fleet of Drones over an Area with No-Fly Zones',
    description:
      'Optimized drone deployment algorithms to maximize coverage while avoiding restricted airspace zones.',
    tech: ['Python', 'Algorithm Design', 'Optimization', 'Visualization'],
    link: 'https://sdmay25-21.sd.ece.iastate.edu/',
    github: 'https://github.com/Kenneth-Schueman/Distributing-a-Fleet-of-Drones-over-an-Area-with-No-Fly-Zones',
  },
  {
    title: 'Movieflix',
    description:
      'A movie browsing application with search functionality, movie details, and a modern, responsive interface.',
    tech: ['React', 'JavaScript', 'CSS', 'GitHub Pages'],
    link: 'https://stuede1.github.io/movieflix',
    github: 'https://github.com/Stuede1/movieflix',
  },
  {
    title: 'Skinstric A.I.',
    description:
      'AI-powered skincare analysis app that uses facial recognition to estimate demographics and provide personalized recommendations.',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'GSAP'],
    link: 'https://skinstric-cole.vercel.app/',
    github: 'https://github.com/Stuede1/skinstric-ai',
  },
]

const skills = [
  { category: 'Languages', items: ['Python', 'C++', 'C', 'Java', 'JavaScript', 'TypeScript', 'HTML', 'CSS'] },
  { category: 'Frameworks & Libraries', items: ['React', 'Next.js', 'Node.js', 'Express', 'Three.js', 'GSAP'] },
  { category: 'Styling', items: ['Tailwind CSS', 'CSS Modules', 'SASS', 'Styled Components'] },
  { category: 'Tools & Platforms', items: ['Git', 'GitHub', 'VS Code', 'Figma', 'Vercel', 'Linux'] },
]

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <Background3D />
      <Navbar />

      {/* Hero */}
      <section className="min-h-screen flex flex-col items-center justify-center px-6 pt-16">
        <HeroAnimation onContactClick={() => setIsModalOpen(true)} />
        <ScrollToButton targetId="about" className="absolute bottom-10 text-neutral-300 animate-bounce cursor-pointer" />
      </section>

      {/* About */}
      <section id="about" className="py-24 px-6 bg-white/30 dark:bg-neutral-900/30">
        <div className="max-w-4xl mx-auto">
          <FadeIn direction="up">
            <h2 className="text-xs uppercase tracking-widest text-neutral-400 mb-2">About</h2>
          </FadeIn>
          <div className="grid md:grid-cols-[1fr_2fr] gap-10">
            <FadeIn direction="left" delay={0.1}>
              <h3 className="text-3xl font-bold tracking-tight">A bit about me</h3>
            </FadeIn>
            <FadeIn direction="right" delay={0.2}>
              <div className="space-y-4 text-neutral-600 dark:text-neutral-300 leading-relaxed">
                <p>
                  I&apos;m a frontend developer with a passion for creating polished, user-friendly web applications.
                  I focus on writing clean, maintainable code and crafting interfaces that feel intuitive and responsive.
                </p>
                <p>
                  When I&apos;m not coding, you can find me exploring new technologies, contributing to open-source projects,
                  or working on personal side projects to sharpen my skills.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="py-24 px-6 bg-white/60 dark:bg-neutral-900/60 border-y border-white/50 dark:border-neutral-800/50">
        <div className="max-w-4xl mx-auto">
          <FadeIn direction="up">
            <h2 className="text-xs uppercase tracking-widest text-neutral-400 mb-2">Experience</h2>
            <h3 className="text-3xl font-bold tracking-tight mb-12">Where I&apos;ve worked</h3>
          </FadeIn>
          <StaggerContainer staggerDelay={0.15} className="space-y-10">
            {experience.map((job, i) => (
              <StaggerItem key={i} direction="up">
                <div className="grid md:grid-cols-[200px_1fr] gap-4 md:gap-8">
                  <p className="text-sm text-neutral-400 pt-1">{job.period}</p>
                  <div>
                    <h4 className="text-lg font-semibold">{job.role}</h4>
                    <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-2">{job.company}</p>
                    <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed">{job.description}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Education */}
      <section id="education" className="py-24 px-6 bg-white/30 dark:bg-neutral-900/30">
        <div className="max-w-4xl mx-auto">
          <FadeIn direction="up">
            <h2 className="text-xs uppercase tracking-widest text-neutral-400 mb-2">Education</h2>
            <h3 className="text-3xl font-bold tracking-tight mb-12">Where I studied</h3>
          </FadeIn>
          <StaggerContainer staggerDelay={0.15} className="space-y-10">
            {education.map((edu, i) => (
              <StaggerItem key={i} direction="up">
                <div className="grid md:grid-cols-[200px_1fr] gap-4 md:gap-8">
                  <p className="text-sm text-neutral-400 pt-1">{edu.period}</p>
                  <div>
                    <h4 className="text-lg font-semibold">{edu.degree}</h4>
                    <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-2">{edu.school}</p>
                    <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed">{edu.description}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-24 px-6 bg-white/30 dark:bg-neutral-900/30">
        <div className="max-w-4xl mx-auto">
          <FadeIn direction="up">
            <h2 className="text-xs uppercase tracking-widest text-neutral-400 mb-2">Projects</h2>
            <h3 className="text-3xl font-bold tracking-tight mb-12">Selected work</h3>
          </FadeIn>
          <StaggerContainer staggerDelay={0.12} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, i) => (
              <StaggerItem key={i} direction="up">
                <div className="group border border-neutral-200 dark:border-neutral-700 p-6 hover:border-neutral-400 dark:hover:border-neutral-500 transition-colors h-full">
                  <div className="flex items-start justify-between mb-4">
                    <h4 className="text-lg font-semibold">{project.title}</h4>
                    <div className="flex items-center gap-2">
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-neutral-300 hover:text-neutral-900 dark:text-neutral-500 dark:hover:text-white transition-colors">
                        <GithubIcon size={16} />
                      </a>
                      <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-neutral-300 hover:text-neutral-900 dark:text-neutral-500 dark:hover:text-white transition-colors">
                        <ExternalLink size={16} />
                      </a>
                    </div>
                  </div>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="text-[10px] uppercase tracking-widest bg-neutral-100 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-400 px-2 py-1"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-24 px-6 bg-white/60 dark:bg-neutral-900/60 border-y border-white/50 dark:border-neutral-800/50">
        <div className="max-w-4xl mx-auto">
          <FadeIn direction="up">
            <h2 className="text-xs uppercase tracking-widest text-neutral-400 mb-2">Skills</h2>
            <h3 className="text-3xl font-bold tracking-tight mb-12">Technologies I use</h3>
          </FadeIn>
          <StaggerContainer staggerDelay={0.1} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((group) => (
              <StaggerItem key={group.category} direction="up">
                <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">
                  {group.category}
                </h4>
                <ul className="space-y-2">
                  {group.items.map((item) => (
                    <li key={item} className="text-neutral-500 dark:text-neutral-400 text-sm">
                      {item}
                    </li>
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
      <footer className="py-8 px-6 border-t border-neutral-100 dark:border-neutral-800">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-neutral-400">
            &copy; {new Date().getFullYear()} Cole Stuedeman. All rights reserved.
          </p>
          <p className="text-xs text-neutral-400">
            Built with Next.js & Tailwind CSS
          </p>
        </div>
      </footer>
    </>
  )
}
