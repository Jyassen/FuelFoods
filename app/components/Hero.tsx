'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'
import ContactFormModal from './ContactFormModal'

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

  // Auto-advance the carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
      )
    }, 5000) // Change image every 5 seconds

    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative min-h-[calc(100vh-4rem)] pt-20 md:pt-8 bg-white cpg-section">
      {/* Clean white background - no overlay needed */}
      
      <div className="container mx-auto h-full relative z-10">
        <div className="grid md:grid-cols-2 h-full gap-12 md:gap-16 items-center">
          <div className="flex flex-col justify-center px-4 md:px-8 lg:px-12 space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-black">
              <span style={{ color: '#f97316' }}>Fuel</span> Your Menu with Freshness
            </h1>

            {/* Mobile carousel between title and copy */}
            <div className="block md:hidden">
              <div className="relative w-full max-w-[500px] h-[320px] mx-auto rounded-2xl overflow-hidden cpg-card" style={{ padding: '0', border: 'none', boxShadow: '0 8px 32px rgba(45, 80, 22, 0.12)' }}>
                {heroImages.map((image, index) => (
                  <div
                    key={`m-${image.src}`}
                    className={`absolute inset-0 transition-opacity duration-1000 ${
                      index === currentImageIndex ? 'opacity-100 pointer-events-auto z-10' : 'opacity-0 pointer-events-none z-0'
                    }`}
                  >
                    <div className="relative w-full h-full rounded-2xl overflow-hidden" style={{ backgroundColor: '#f8f9fa' }}>
                      <Image
                        src={image.src}
                        alt={image.title}
                        fill
                        className="object-cover object-center"
                        priority={index === 0}
                        sizes="(max-width: 768px) 100vw"
                      />
                    </div>
                    <div className="absolute bottom-4 left-0 right-0 text-center">
                      <p className="text-sm font-semibold tracking-wide bg-white py-2 px-4 rounded-lg inline-block max-w-[90%] truncate" style={{ color: 'var(--fuel-text-primary)', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
                        {image.title}
                      </p>
                    </div>
                    <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
                      {heroImages.map((_, idx) => (
                        <button
                          key={`m-dot-${idx}`}
                          onClick={() => setCurrentImageIndex(idx)}
                          className={`w-3 h-3 rounded-full transition-all ${idx === currentImageIndex ? 'w-6' : ''}`}
                          style={{ backgroundColor: idx === currentImageIndex ? 'var(--fuel-green-medium)' : 'var(--fuel-gray-light)' }}
                          aria-label={`Go to slide ${idx + 1}`}
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-lg md:text-xl leading-relaxed max-w-xl" style={{ color: 'var(--fuel-text-secondary)' }}>
              Premium locally-grown microgreens and edible flowers for NYC&apos;s finest restaurants. 
              Elevate your dishes with sustainable, nutrient-dense ingredients.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => {
                  document.getElementById('showcase')?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="btn-primary shadow-md hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-500"
              >
                View Products
              </button>
              <button
                onClick={() => setIsModalOpen(true)}
                className="btn-secondary rounded-full shadow-md hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-500"
              >
                Request a Call
              </button>
            </div>
          </div>
          
          <div className="hidden md:flex items-center justify-center px-4 md:px-0">
            <div className="relative w-full max-w-[400px] md:max-w-[550px] h-[400px] md:h-[550px] mx-auto cpg-card" style={{ padding: '0', border: 'none', boxShadow: '0 8px 32px rgba(45, 80, 22, 0.12)' }}>
              {heroImages.map((image, index) => (
                <div
                  key={image.src}
                  className={`absolute inset-0 transition-opacity duration-1000 ${
                    index === currentImageIndex ? 'opacity-100 pointer-events-auto z-10' : 'opacity-0 pointer-events-none z-0'
                  }`}
                >
                  <div className="relative w-full h-full rounded-2xl overflow-hidden" style={{ backgroundColor: '#f8f9fa' }}>
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
                    <p className="text-sm font-semibold tracking-wide bg-white py-2 px-4 rounded-lg inline-block max-w-[90%] truncate" style={{ color: 'var(--fuel-text-primary)', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
                      {image.title}
                    </p>
                  </div>

                  {/* Navigation Dots */}
                  <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
                    {heroImages.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentImageIndex(idx)}
                        className={`w-3 h-3 rounded-full transition-all ${
                          idx === currentImageIndex
                            ? 'w-6'
                            : ''
                        }`}
                        style={{
                          backgroundColor: idx === currentImageIndex ? 'var(--fuel-green-medium)' : 'var(--fuel-gray-light)'
                        }}
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

      {/* Use the ContactFormModal component instead of inline modal */}
      <ContactFormModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  )
} 