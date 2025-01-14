'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    email: '',
    subject: '',
    message: ''
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error('Failed to send email')
      }

      setStatus('success')
      setFormData({ email: '', subject: '', message: '' })

      // Reset success message after 5 seconds
      setTimeout(() => {
        setStatus('idle')
      }, 5000)
    } catch (error) {
      setStatus('error')
      // Reset error message after 5 seconds
      setTimeout(() => {
        setStatus('idle')
      }, 5000)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  return (
    <div className="min-h-screen bg-black text-white pt-16 md:pt-20">
      <main className="py-4 md:py-8">
        <div className="px-4 md:px-6">
          <div className="max-w-[1200px] mx-auto">
            <h1 className="text-3xl font-bold mb-8">Contact</h1>
            <p className="text-lg mb-4">
              Email: <a href="mailto:m.imraan95@gmail.com" className="text-pink-500 hover:text-pink-400">m.imraan95@gmail.com</a>
            </p>
            <div className="space-y-6">
              <p className="text-xl text-white/80">
                Feel free to reach out to me at:
              </p>
              <div className="space-y-4">
                <a href="mailto:imraan.iqbal95@gmail.com" className="block text-white hover:text-pink-500 transition-colors">
                  imraan.iqbal95@gmail.com
                </a>
                <a href="tel:+61420368580" className="block text-white hover:text-pink-500 transition-colors">
                  +61 420 368 580
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
} 