'use client'

import { useState } from 'react'

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

  return (
    <section className="py-20 px-4 md:px-8 lg:px-16 bg-black">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-[#4CAF50]">
              Partner with NYC's Premier Black-Owned Microgreens Supplier
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
          
          <form className="bg-gray-900 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-6">Start working with us!</h3>
            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 bg-black rounded-lg border border-gray-800 focus:outline-none focus:border-white"
                  placeholder="Your full name"
                />
              </div>
              
              <div>
                <label htmlFor="restaurant" className="block text-sm font-medium mb-2">
                  Restaurant Name
                </label>
                <input
                  type="text"
                  id="restaurant"
                  className="w-full px-4 py-2 bg-black rounded-lg border border-gray-800 focus:outline-none focus:border-white"
                  placeholder="Your restaurant name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Business Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 bg-black rounded-lg border border-gray-800 focus:outline-none focus:border-white"
                  placeholder="your@restaurant.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Tell us about your needs
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 bg-black rounded-lg border border-gray-800 focus:outline-none focus:border-white"
                  placeholder="What types of products are you interested in? What quantities do you need?"
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-white text-black py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
              >
                Request Partnership
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
} 