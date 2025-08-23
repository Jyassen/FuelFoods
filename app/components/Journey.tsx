'use client'

import { useState, FormEvent, useEffect } from 'react'

const faqs = [
  {
    question: "How do you ensure consistent supply?",
    answer: "We maintain standing orders and dedicated growing schedules for our restaurant partners, ensuring a reliable supply of fresh microgreens and edible flowers year-round."
  },
  {
    question: "What makes your products unique?",
    answer: "Our microgreens contain up to 40 times the nutrients of full-grown vegetables, are pesticide-free, and locally grown for maximum freshness and flavor impact."
  },
  {
    question: "How do you support sustainability?",
    answer: "We prioritize sustainable and organic farming practices, minimize carbon footprint through local sourcing, and use eco-friendly packaging for all deliveries."
  },
  {
    question: "Can orders be customized?",
    answer: "Yes, we work directly with chefs to customize growing schedules, quantities, and varieties to match your menu needs and seasonal requirements."
  }
]

export default function Journey() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const [formData, setFormData] = useState({
    name: '',
    restaurant: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showConfirmation, setShowConfirmation] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)
  
  // For debugging
  useEffect(() => {
    // Log environment variables (this will only show in development)
    console.log('Environment check - NODE_ENV:', process.env.NODE_ENV);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target
    setFormData(prev => ({ ...prev, [id]: value }))
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitError(null)
    
    try {
      console.log('Submitting partnership form...');
      
      // Send data to the API endpoint
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: '', // Not collected in this form but API might expect it
          message: `Restaurant: ${formData.restaurant}\n\nMessage: ${formData.message}`,
          formType: 'Partnership Request Form',
          restaurant: formData.restaurant // Adding this explicitly
        }),
      });
      
      console.log('Response status:', response.status);
      const data = await response.json();
      console.log('Response data:', data);
      
      if (response.ok) {
        // Show confirmation message
        setShowConfirmation(true)
        
        // Reset form
        setFormData({
          name: '',
          restaurant: '',
          email: '',
          message: ''
        })
        
        // Hide confirmation after 5 seconds
        setTimeout(() => {
          setShowConfirmation(false)
        }, 5000)
      } else {
        setSubmitError(data.error || 'Failed to submit form. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      setSubmitError('Network error. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="cpg-section bg-white">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: 'var(--fuel-green-primary)' }}>
              Partner with NYC's Premier Black-Owned Microgreens Supplier
            </h2>
            <p className="text-xl mb-8" style={{ color: 'var(--fuel-text-secondary)' }}>
              Join leading restaurants in New York City who trust us for their premium
              microgreens and edible flowers. Experience our commitment to quality,
              sustainability, and innovation.
            </p>
            
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div 
                  key={index}
                  className="border-b pb-4"
                  style={{ borderColor: 'var(--fuel-gray-light)' }}
                >
                  <button
                    className="w-full flex justify-between items-center text-left"
                    onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                  >
                    <span className="text-lg font-semibold" style={{ color: 'var(--fuel-text-primary)' }}>{faq.question}</span>
                    <span className="text-2xl">
                      {activeIndex === index ? '−' : '+'}
                    </span>
                  </button>
                  
                  {activeIndex === index && (
                    <p className="mt-4" style={{ color: 'var(--fuel-text-secondary)' }}>
                      {faq.answer}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <form 
              className="cpg-card rounded-2xl p-8"
              style={{ backgroundColor: '#f8f9fa' }}
              onSubmit={handleSubmit}
            >
              <h3 className="text-2xl font-bold mb-6" style={{ color: 'var(--fuel-text-primary)' }}>Start working with us!</h3>
              
              {submitError && (
                <div className="mb-4 p-3 bg-red-100 border border-red-500 rounded-lg text-red-800">
                  {submitError}
                </div>
              )}
              
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold mb-2" style={{ color: 'var(--fuel-text-primary)' }}>
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-white rounded-lg border border-gray-300 focus:outline-none focus:border-gray-600"
                    placeholder="Your full name"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="restaurant" className="block text-sm font-semibold mb-2" style={{ color: 'var(--fuel-text-primary)' }}>
                    Restaurant Name
                  </label>
                  <input
                    type="text"
                    id="restaurant"
                    value={formData.restaurant}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-white rounded-lg border border-gray-300 focus:outline-none focus:border-gray-600"
                    placeholder="Your restaurant name"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold mb-2" style={{ color: 'var(--fuel-text-primary)' }}>
                    Business Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-white rounded-lg border border-gray-300 focus:outline-none focus:border-gray-600"
                    placeholder="your@restaurant.com"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold mb-2" style={{ color: 'var(--fuel-text-primary)' }}>
                    Tell us about your needs
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-white rounded-lg border border-gray-300 focus:outline-none focus:border-gray-600"
                    placeholder="What types of products are you interested in? What quantities do you need?"
                    required
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full py-3 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Submitting...' : 'Request Partnership'}
                </button>
              </div>
            </form>

            {/* Confirmation Message Popup */}
            {showConfirmation && (
              <div className="absolute top-4 left-0 right-0 mx-auto w-[90%] bg-green-100 border border-green-500 text-green-800 p-4 rounded-lg shadow-lg animate-fade-down">
                <div className="flex items-center justify-between">
                  <p className="font-medium">Thank you for your partnership request!</p>
                  <button 
                    onClick={() => setShowConfirmation(false)}
                    className="text-green-800 hover:text-green-600"
                  >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                <p className="text-sm mt-1">We'll be in touch with you shortly.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
} 