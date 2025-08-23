'use client'

import { useEffect } from 'react'
import useFormSubmission from '../hooks/useFormSubmission'

interface ContactFormModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function ContactFormModal({ isOpen, onClose }: ContactFormModalProps) {
  const initialFormData = {
    name: '',
    phone: '',
    email: '',
    message: ''
  };
  
  const {
    formData,
    handleChange,
    handleSubmit,
    isSubmitting,
    submitStatus,
    resetForm
  } = useFormSubmission(initialFormData, {
    formType: 'Contact Form',
    resetAfterSubmit: true
  });

  const onSubmit = async (e: React.FormEvent) => {
    await handleSubmit(e);
  };

  // Close modal shortly after successful submit
  useEffect(() => {
    if (submitStatus.success) {
      const timer = setTimeout(() => {
        onClose();
        resetForm();
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [submitStatus.success, onClose, resetForm]);

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50 px-4">
      <div className="bg-white border border-gray-200 rounded-3xl p-8 max-w-md w-full relative animate-fade-up">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-black"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <h2 className="text-2xl font-bold mb-6">Contact Us</h2>
        
        {submitStatus.message && (
          <div className={`mb-4 p-3 rounded-lg ${
            submitStatus.success ? 'bg-green-100 border border-green-500 text-green-800' : 'bg-red-100 border border-red-500 text-red-800'
          }`}>
            {submitStatus.message}
          </div>
        )}
        
        <form onSubmit={onSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-white rounded-lg border border-gray-300 text-black focus:outline-none focus:border-brand-green transition-colors"
              required
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-white rounded-lg border border-gray-300 text-black focus:outline-none focus:border-brand-green transition-colors"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-white rounded-lg border border-gray-300 text-black focus:outline-none focus:border-brand-green transition-colors"
              required
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="w-full px-4 py-2 bg-white rounded-lg border border-gray-300 text-black focus:outline-none focus:border-brand-green transition-colors"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-brand-green text-white px-8 py-3 rounded-full font-medium hover:opacity-90 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Submitting...' : 'Submit Request'}
          </button>
        </form>
      </div>
    </div>
  )
} 