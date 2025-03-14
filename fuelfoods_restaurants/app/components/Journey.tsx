'use client'

import { useState } from 'react'
import Image from 'next/image'

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
  const [submitStatus, setSubmitStatus] = useState<{
    success?: boolean;
    message?: string;
  }>({})

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus({})
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          formType: 'Partnership Request Form'
        }),
      })
      
      const data = await response.json()
      
      if (response.ok) {
        setSubmitStatus({
          success: true,
          message: data.message || 'Thank you for your message! We will get back to you soon.'
        })
        // Reset form after successful submission
        setFormData({ name: '', restaurant: '', email: '', message: '' })
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

  return (
    <section className="py-20 px-4 md:px-8 lg:px-16 bg-black">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-[#4CAF50]">
              Partner with NYC&apos;s Premier Black-Owned Microgreens Supplier
            </h2>
            <p className="text-gray-400 mb-8">
              Join leading restaurants in New York City who trust us for their premium
              microgreens and edible flowers. Experience our commitment to quality,
              sustainability, and innovation.
            </p>
            
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div 
                  key={index}
                  className="border-b border-gray-800 pb-4"
                >
                  <button
                    className="w-full flex justify-between items-center text-left"
                    onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                  >
                    <span className="text-lg font-medium">{faq.question}</span>
                    <span className="text-2xl">
                      {activeIndex === index ? '−' : '+'}
                    </span>
                  </button>
                  
                  {activeIndex === index && (
                    <p className="mt-4 text-gray-400">
                      {faq.answer}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
          
          <form onSubmit={handleSubmit} className="bg-gray-900 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-6">Start working with us!</h3>
            
            {submitStatus.message && (
              <div className={`p-4 mb-4 rounded-lg ${submitStatus.success ? 'bg-green-900/50 text-green-200' : 'bg-red-900/50 text-red-200'}`}>
                {submitStatus.message}
              </div>
            )}
            
            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 bg-black rounded-lg border border-gray-800 focus:outline-none focus:border-white"
                  placeholder="Your full name"
                  required
                  disabled={isSubmitting}
                />
              </div>
              
              <div>
                <label htmlFor="restaurant" className="block text-sm font-medium mb-2">
                  Restaurant Name
                </label>
                <input
                  type="text"
                  id="restaurant"
                  name="restaurant"
                  value={formData.restaurant}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 bg-black rounded-lg border border-gray-800 focus:outline-none focus:border-white"
                  placeholder="Your restaurant name"
                  required
                  disabled={isSubmitting}
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Business Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 bg-black rounded-lg border border-gray-800 focus:outline-none focus:border-white"
                  placeholder="your@restaurant.com"
                  required
                  disabled={isSubmitting}
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Tell us about your needs
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-2 bg-black rounded-lg border border-gray-800 focus:outline-none focus:border-white"
                  placeholder="What types of products are you interested in? What quantities do you need?"
                  required
                  disabled={isSubmitting}
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-white text-black py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Submitting...' : 'Request Partnership'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
} 