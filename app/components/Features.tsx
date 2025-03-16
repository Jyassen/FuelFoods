'use client'

import { IconClock, IconDollar, IconChefHat } from './Icons'
import Image from 'next/image'
import { useState } from 'react'
import CatalogModal from './CatalogModal'

export default function Features() {
  const [isCatalogOpen, setIsCatalogOpen] = useState(false)

  return (
    <section className="relative pt-32 md:pt-20 px-4 md:px-8 lg:px-16 bg-black">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-4 mt-16 md:mt-0">
          Designed for Professional Kitchens
        </h2>
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-20">
          We understand what matters most to chefs: consistent quality, reliable supply,
          and cost-effective solutions that enhance your menu offerings.
        </p>
        
        {/* Cost-Effective Pricing Section */}
        <div className="flex flex-col md:flex-row gap-12 items-center mb-32">
          <div className="w-full md:w-1/2">
            <div className="relative aspect-[16/9] rounded-3xl overflow-hidden bg-[#111111]">
              <Image
                src="/images/chefs/chef in kitchen.png"
                alt="Chef in Kitchen"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
                style={{ objectPosition: '50% 35%' }}
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/50" />
            </div>
          </div>
          <div className="w-full md:w-1/2 max-w-xl">
            <div className="text-[#4CAF50] mb-6 flex justify-center">
              <IconDollar className="w-16 h-16" />
            </div>
            <h3 className="text-3xl font-bold mb-6 text-center">Cost-Effective Pricing</h3>
            <p className="text-gray-400 text-xl leading-relaxed text-center">
              Enjoy the freshest ingredients delivered fresh to your kitchen and priced fairly 
              so you can focus on what matters most, creating top notch culinary experiences.
            </p>
          </div>
        </div>

        {/* 24-Hour Freshness Section */}
        <div className="flex flex-col md:flex-row-reverse gap-12 items-center mb-32">
          <div className="w-full md:w-1/2">
            <div className="relative aspect-[16/9] rounded-3xl overflow-hidden bg-[#111111]">
              <Image
                src="/images/products/micros in soil.png"
                alt="Fresh Microgreens"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
                style={{ objectPosition: '50% 45%' }}
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-l from-transparent to-black/50" />
            </div>
          </div>
          <div className="w-full md:w-1/2 max-w-xl">
            <div className="text-[#4CAF50] mb-6 flex justify-center">
              <IconClock className="w-16 h-16" />
            </div>
            <h3 className="text-3xl font-bold mb-6 text-center">24-Hour Freshness Guarantee</h3>
            <p className="text-gray-400 text-xl leading-relaxed text-center">
              Harvested fresh and delivered within hours. Our microgreens stay fresh 
              for 7-10 days when properly stored, reducing waste and maximizing value.
            </p>
          </div>
        </div>

        {/* Extensive Variety Section */}
        <div className="flex flex-col md:flex-row gap-12 items-center mb-32">
          <div className="w-full md:w-1/2">
            <div className="relative aspect-[16/9] rounded-3xl overflow-hidden bg-[#111111]">
              <Image
                src="/images/products/salty finger meal.png"
                alt="Salty Fingers Culinary Creation"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/50" />
            </div>
          </div>
          <div className="w-full md:w-1/2 max-w-xl">
            <div className="text-[#4CAF50] mb-6 flex justify-center">
              <IconChefHat className="w-16 h-16" />
            </div>
            <h3 className="text-3xl font-bold mb-6 text-center">Extensive Variety Selection</h3>
            <p className="text-gray-400 text-xl leading-relaxed text-center">
              Over 40 varieties of microgreens and edible flowers available year-round. 
              Custom growing programs for specific menu needs.
            </p>
          </div>
        </div>

        {/* Pricing Preview */}
        <div className="mt-20 text-center">
          <p className="text-[#FF5722] font-medium mb-4">Take advantage of Free Shipping on bulk orders</p>
          <button 
            onClick={() => setIsCatalogOpen(true)}
            className="bg-[#4CAF50] text-white px-8 py-3 rounded-full font-medium hover:bg-black hover:border-2 hover:border-white transition-all"
          >
            View Pricing
          </button>
        </div>
      </div>

      <CatalogModal 
        isOpen={isCatalogOpen}
        onClose={() => setIsCatalogOpen(false)}
      />
    </section>
  )
} 