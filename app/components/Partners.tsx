'use client'

import Image from 'next/image'
import { useState } from 'react'

const partners = [
  { name: 'Aliya', logo: '/images/restaurant_partners/Aliya.png' },
  { name: 'Atria', logo: '/images/restaurant_partners/Atria.png' },
  { name: 'Charm', logo: '/images/restaurant_partners/Charm.png' },
  { name: 'Continent', logo: '/images/restaurant_partners/Continent.png' },
  { name: 'Fish Cheeks', logo: '/images/restaurant_partners/FishCheeks.png' },
  { name: 'Native', logo: '/images/restaurant_partners/Native.png' },
  { name: 'Nemesis', logo: '/images/restaurant_partners/Nemesis.png' },
  { name: 'Prime 39', logo: '/images/restaurant_partners/Prime39.png' },
  { name: 'RPB', logo: '/images/restaurant_partners/RPB.png' },
  { name: 'Victory', logo: '/images/restaurant_partners/Victory.png' }
]

export default function Partners() {
  const [imageErrors, setImageErrors] = useState<{[key: string]: boolean}>({})

  const handleImageError = (partnerName: string) => {
    setImageErrors(prev => ({
      ...prev,
      [partnerName]: true
    }))
    console.error(`Failed to load image for ${partnerName}`)
  }

  return (
    <section className="py-20 px-4 md:px-8 lg:px-16 bg-black">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-4">
          Trusted by NYC's Finest
        </h2>
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
          Proudly supplying fresh microgreens and edible flowers to the most prestigious kitchens in New York City.
        </p>

        {/* Partners Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="relative group"
            >
              <div className="
                aspect-square
                rounded-xl 
                bg-gray-900
                border border-gray-800 
                shadow-lg
                overflow-hidden 
                transition-all duration-500 
                group-hover:scale-105
                group-hover:-translate-y-2
                group-hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.7)]
                group-hover:border-gray-700
              ">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-300" />
                <div className="relative w-full h-full p-8">
                  {!imageErrors[partner.name] ? (
                    <Image
                      src={partner.logo}
                      alt={`${partner.name} logo`}
                      fill
                      className="object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                      onError={() => handleImageError(partner.name)}
                      priority
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-600">
                      {partner.name}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 