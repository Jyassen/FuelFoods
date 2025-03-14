'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'

const heroImages = [
  { src: '/images/hero/heroscroller1.png', title: 'Micro Marigolds' },
  { src: '/images/hero/heroscroller2.png', title: 'Viola Blossoms' },
  { src: '/images/hero/heroscroller3.png', title: 'Cubano Oregano, Butterfly Leaves, Nasturtium Flowers' },
  { src: '/images/hero/heroscroller4.png', title: 'True French Lavender' },
  { src: '/images/hero/heroscroller6.png', title: 'True French Lavender' },
  { src: '/images/hero/heroscroller7.png', title: 'Apple Blossoms' },
]

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false)
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

  // Auto-advance the carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
      )
    }, 5000) // Change image every 5 seconds

    return () => clearInterval(timer)
  }, [])

  // Handle form submission
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
          formType: 'Hero Contact Form'
        }),
      });
      
      const data = await response.json();
      
      if (response.ok) {
        setSubmitStatus({
          success: true,
          message: data.message || 'Thank you for your message! We will get back to you soon.'
        });
        // Reset form after successful submission
        setFormData({ name: '', phone: '', email: '', message: '' });
        // Close modal after 2 seconds
        setTimeout(() => {
          setIsModalOpen(false);
          setSubmitStatus({});
        }, 2000);
      } else {
        setSubmitStatus({
          success: false,
          message: data.error || 'Something went wrong. Please try again.'
        });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus({
        success: false,
        message: 'Network error. Please check your connection and try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  // Handle form input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  return (
    <section className="relative min-h-[calc(100vh-7rem)] pt-24 md:pt-8">
      {/* Gradient Overlay for Text Side */}
      <div className="absolute left-0 w-full md:w-1/2 h-full z-[1] bg-black/90" />
      
      <div className="container mx-auto h-full relative z-10">
        <div className="grid md:grid-cols-2 h-full gap-8 md:gap-0">
          <div className="flex flex-col justify-center px-4 md:px-8 lg:px-16 space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-serif font-bold leading-tight">
              <span className="text-[#FF5722]">Fuel</span> Your Menu with Freshness
            </h1>
            <p className="text-gray-300 text-lg md:text-xl max-w-xl">
              Premium locally-grown microgreens and edible flowers for NYC&apos;s finest restaurants. 
              Elevate your dishes with sustainable, nutrient-dense ingredients.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => {
                  document.getElementById('showcase')?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="bg-[#4CAF50] text-white px-8 py-3 rounded-full font-medium hover:bg-black hover:border-white hover:border-2 transition-all"
              >
                View Products
              </button>
              <button
                onClick={() => setIsModalOpen(true)}
                className="border border-white px-8 py-3 rounded-full font-medium hover:bg-white/10 transition-colors"
              >
                Request a Call
              </button>
            </div>
          </div>
          
          <div className="relative flex items-center justify-center px-4 md:px-0">
            <div className="relative w-full max-w-[350px] md:max-w-[500px] h-[350px] md:h-[500px] mx-auto">
              {heroImages.map((image, index) => (
                <div
                  key={image.src}
                  className={`absolute inset-0 transition-opacity duration-1000 ${
                    index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <div className="relative w-full h-full rounded-3xl overflow-hidden bg-black">
                    <Image
                      src={image.src}
                      alt={image.title}
                      fill
                      className="object-contain md:object-cover object-center"
                      priority={index === 0}
                      sizes="(max-width: 768px) 90vw, 50vw"
                    />
                  </div>
                  
                  {/* Title */}
                  <div className="absolute bottom-4 left-0 right-0 text-center">
                    <p className="font-['Poppins'] text-xs md:text-sm font-medium tracking-wide bg-black py-2 px-4 rounded-full inline-block text-white max-w-[90%] truncate">
                      {image.title}
                    </p>
                  </div>

                  {/* Navigation Dots */}
                  <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    {heroImages.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentImageIndex(idx)}
                        className={`w-2 h-2 rounded-full transition-all ${
                          idx === currentImageIndex
                            ? 'bg-white w-4'
                            : 'bg-white/50'
                        }`}
                        aria-label={`Go to slide ${idx + 1}`}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 px-4">
          <div className="bg-black border border-gray-800 rounded-3xl p-8 max-w-md w-full relative animate-fade-up">
            {/* Close button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
            
            {submitStatus.message && (
              <div className={`p-4 mb-4 rounded-lg ${submitStatus.success ? 'bg-green-900/50 text-green-200' : 'bg-red-900/50 text-red-200'}`}>
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
      )}
    </section>
  )
} 