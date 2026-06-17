'use client'

import { useState } from 'react'
import { X } from 'lucide-react'

interface ContactModalProps {
  isOpen: boolean
  onClose: () => void
}

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({ name: '', company: '', message: '' })
        setTimeout(() => {
          onClose()
          setSubmitStatus('idle')
        }, 2000)
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div
        className="relative rounded-2xl shadow-2xl w-full max-w-md p-8"
        style={{ background: 'var(--panel)', border: '1px solid var(--line)', color: 'var(--text)' }}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 transition-colors cursor-pointer"
          style={{ color: 'var(--muted)' }}
          onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--text)' }}
          onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--muted)' }}
        >
          <X size={20} />
        </button>

        {/* Header */}
        <div className="mb-6">
          <h3 className="text-2xl font-bold tracking-tight mb-2" style={{ color: 'var(--text)' }}>Let&apos;s Chat</h3>
          <p className="text-sm" style={{ color: 'var(--muted)' }}>
            Fill out the form below and I&apos;ll get back to you as soon as possible.
          </p>
        </div>

        {/* Success/Error Messages */}
        {submitStatus === 'success' && (
          <div className="mb-4 p-3 rounded-lg text-sm" style={{ background: 'var(--accent-soft)', color: 'var(--accent)' }}>
            Message sent successfully!
          </div>
        )}
        {submitStatus === 'error' && (
          <div className="mb-4 p-3 rounded-lg text-sm bg-red-500/10 text-red-400">
            Failed to send message. Please try again.
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-1" style={{ color: 'var(--text)' }}>
              Name
            </label>
            <input
              type="text"
              id="name"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-2.5 rounded-lg outline-none transition-all text-[15px]"
              style={{
                background: 'var(--bg)',
                border: '1px solid var(--line-strong)',
                color: 'var(--text)',
              }}
              placeholder="Your name"
            />
          </div>

          <div>
            <label htmlFor="company" className="block text-sm font-medium mb-1" style={{ color: 'var(--text)' }}>
              Company
            </label>
            <input
              type="text"
              id="company"
              value={formData.company}
              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
              className="w-full px-4 py-2.5 rounded-lg outline-none transition-all text-[15px]"
              style={{
                background: 'var(--bg)',
                border: '1px solid var(--line-strong)',
                color: 'var(--text)',
              }}
              placeholder="Your company (optional)"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-1" style={{ color: 'var(--text)' }}>
              Message
            </label>
            <textarea
              id="message"
              required
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-4 py-2.5 rounded-lg outline-none transition-all resize-none text-[15px]"
              style={{
                background: 'var(--bg)',
                border: '1px solid var(--line-strong)',
                color: 'var(--text)',
              }}
              placeholder="Tell me about your project or opportunity..."
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3 text-sm font-medium tracking-wide uppercase rounded-lg transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
            style={{ background: 'var(--text)', color: 'var(--bg)' }}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
    </div>
  )
}
