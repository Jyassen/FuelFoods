'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import useFormSubmission from '../hooks/useFormSubmission'

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
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  // Use our custom form hook
  const {
    formData,
    handleChange,
    handleSubmit,
    isSubmitting,
    submitStatus,
    resetForm
  } = useFormSubmission(
    {
      name: '',
      email: '',
      phone: '',
      message: '',
      restaurant: ''
    },
    {
      formType: 'Partnership Form',
      resetAfterSubmit: true,
      successTimeout: 10000 // 10 seconds to ensure user sees the message
    }
  );

  // Effect to scroll to form and status message after submission
  useEffect(() => {
    if (submitStatus.message) {
      const formElement = document.getElementById('partnership-form');
      if (formElement) {
        formElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      
      // Set form as submitted to keep status message visible
      if (submitStatus.success) {
        setFormSubmitted(true);
        
        // Reset form submitted state after timeout
        const timer = setTimeout(() => {
          setFormSubmitted(false);
        }, 10000);
        
        return () => clearTimeout(timer);
      }
    }
  }, [submitStatus]);

  // Handle form submission with explicit prevention of page refresh
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Journey: Submitting form');
    handleSubmit(e);
  };

  return (
    <section id="journey" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Start Your <span className="text-[#4CAF50]">Partnership</span> Journey
          </h2>
          
          <div className="bg-gray-900 rounded-xl p-6 md:p-8 shadow-xl">
            <form onSubmit={onSubmit} className="space-y-6" id="partnership-form">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="journey-name" className="block text-sm font-medium text-gray-300 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="journey-name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 rounded-lg border border-gray-700 text-white focus:outline-none focus:border-[#4CAF50] transition-colors"
                  />
                </div>
                
                <div>
                  <label htmlFor="journey-email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="journey-email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 rounded-lg border border-gray-700 text-white focus:outline-none focus:border-[#4CAF50] transition-colors"
                  />
                </div>
                
                <div>
                  <label htmlFor="journey-phone" className="block text-sm font-medium text-gray-300 mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="journey-phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-800 rounded-lg border border-gray-700 text-white focus:outline-none focus:border-[#4CAF50] transition-colors"
                  />
                </div>
                
                <div>
                  <label htmlFor="journey-restaurant" className="block text-sm font-medium text-gray-300 mb-2">
                    Restaurant Name
                  </label>
                  <input
                    type="text"
                    id="journey-restaurant"
                    name="restaurant"
                    value={formData.restaurant}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-800 rounded-lg border border-gray-700 text-white focus:outline-none focus:border-[#4CAF50] transition-colors"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="journey-message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message *
                </label>
                <textarea
                  id="journey-message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800 rounded-lg border border-gray-700 text-white focus:outline-none focus:border-[#4CAF50] transition-colors"
                  placeholder="Tell us about your restaurant and what you're looking for..."
                ></textarea>
              </div>
              
              {/* Status Message - Made more prominent and always visible when there's a message */}
              {submitStatus.message && (
                <div 
                  className={`p-4 rounded-lg border ${
                    submitStatus.success 
                      ? 'bg-green-900/50 text-green-200 border-green-800' 
                      : 'bg-red-900/50 text-red-200 border-red-800'
                  }`}
                >
                  <p className="font-medium">{submitStatus.success ? 'Success!' : 'Error'}</p>
                  <p>{submitStatus.message}</p>
                </div>
              )}
              
              <div className="flex justify-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`bg-[#4CAF50] text-white px-8 py-3 rounded-full font-medium hover:bg-[#45a049] transition-colors ${
                    isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
                  }`}
                >
                  {isSubmitting ? 'Sending...' : 'Start Partnership'}
                </button>
              </div>
            </form>
          </div>
          
          <div className="mt-12 text-center text-gray-400">
            <p>
              Join the growing community of restaurants that trust FuelFoods for their premium microgreens and edible flowers.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
} 