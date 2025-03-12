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
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus({ type: null, message: '' })
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          formType: 'Contact Form Modal'
        }),
      });
      
      let data;
      try {
        data = await response.json();
      } catch (error) {
        console.error('Error parsing response:', error);
        throw new Error('Failed to parse server response');
      }
      
      if (response.ok) {
        console.log('Form submission successful:', data);
        setSubmitStatus({ 
          type: 'success', 
          message: 'Thank you for your message! We will get back to you soon.' 
        });
        
        // If we're in development and using Ethereal Email, show the preview URL
        if (data.isTest && data.previewURL) {
          console.log('Test email preview URL:', data.previewURL);
        }
        
        // Reset form after a short delay to show the success message
        setTimeout(() => {
          setFormData({ name: '', phone: '', email: '', message: '' });
        }, 2000);
        
        // Close modal after a longer delay
        setTimeout(() => {
          onClose();
        }, 3000);
      } else {
        console.error('Form submission error:', data);
        setSubmitStatus({ 
          type: 'error', 
          message: `Error: ${data.error || 'Failed to send message. Please try again later.'}` 
        });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus({ 
        type: 'error', 
        message: 'Failed to send message. Please try again later.' 
      });
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    
    // Clear status message when user starts typing again
    if (submitStatus.type) {
      setSubmitStatus({ type: null, message: '' })
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 px-4">
      <div className="bg-black border border-gray-800 rounded-3xl p-8 max-w-md w-full relative animate-fade-up">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white"
          type="button"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <h2 className="text-2xl font-bold mb-6">Set Up Your Order</h2>
        
        {submitStatus.type && (
          <div className={`mb-6 p-4 rounded-lg ${
            submitStatus.type === 'success' 
              ? 'bg-green-900/30 text-green-300 border border-green-800' 
              : 'bg-red-900/30 text-red-300 border border-red-800'
          }`}>
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
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full px-8 py-3 rounded-full font-medium transition-colors ${
              isSubmitting 
                ? 'bg-gray-600 text-gray-300 cursor-not-allowed' 
                : 'bg-[#4CAF50] text-white hover:bg-[#45a049]'
            }`}
          >
            {isSubmitting ? 'Sending...' : 'Submit Request'}
          </button>
        </form>
      </div>
    </div>
  )
} 