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

      {/* Use the ContactFormModal component instead of inline modal */}
      <ContactFormModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  )
} 