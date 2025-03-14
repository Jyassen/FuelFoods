'use client'

import { useState } from 'react'

interface ContactFormModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function ContactFormModal({ isOpen, onClose }: ContactFormModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{
    success?: boolean;
    message?: string;
  }>({})

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus({})
    
    try {
      console.log('Submitting form data:', formData);
      
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          formType: 'Contact Form Modal'
        }),
      })
      
      const data = await response.json()
      console.log('Response received:', data);
      
      if (response.ok) {
        setSubmitStatus({
          success: true,
          message: data.message || 'Thank you for your message! We will get back to you soon.'
        })
        // Reset form after successful submission
        setFormData({ name: '', phone: '', email: '', message: '' })
        // Close modal after 3 seconds
        setTimeout(() => {
          onClose()
          setSubmitStatus({})
        }, 3000)
      } else {
        setSubmitStatus({
          success: false,
          message: data.error || 'Something went wrong. Please try again.'
        })
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      setSubmitStatus({
        success: false,
        message: 'Network error. Please check your connection and try again.'
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 px-4">
      <div className="bg-black border border-gray-800 rounded-3xl p-8 max-w-md w-full relative">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <h2 className="text-2xl font-bold mb-6">Set Up Your Order</h2>
        
        {submitStatus.message && (
          <div className={`p-4 mb-6 rounded-lg ${submitStatus.success ? 'bg-green-900/50 text-green-200 border border-green-800' : 'bg-red-900/50 text-red-200 border border-red-800'}`}>
            {submitStatus.message}
          </div>
        )}
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full px-4 py-2 bg-gray-900 rounded-lg border border-gray-800 text-white focus:outline-none focus:border-[#4CAF50] transition-colors"
              required
              disabled={isSubmitting}
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full px-4 py-2 bg-gray-900 rounded-lg border border-gray-800 text-white focus:outline-none focus:border-[#4CAF50] transition-colors"
              required
              disabled={isSubmitting}
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-4 py-2 bg-gray-900 rounded-lg border border-gray-800 text-white focus:outline-none focus:border-[#4CAF50] transition-colors"
              required
              disabled={isSubmitting}
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              rows={4}
              className="w-full px-4 py-2 bg-gray-900 rounded-lg border border-gray-800 text-white focus:outline-none focus:border-[#4CAF50] transition-colors"
              required
              disabled={isSubmitting}
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-[#4CAF50] text-white px-8 py-3 rounded-full font-medium hover:bg-[#45a049] transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Submitting...' : 'Submit Request'}
          </button>
        </form>
      </div>
    </div>
  )
} 