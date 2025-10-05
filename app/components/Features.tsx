'use client'

import { IconClock, IconDollar, IconChefHat } from './Icons'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import CatalogModal from './CatalogModal'

export default function Features() {
  const [isCatalogOpen, setIsCatalogOpen] = useState(false)

  return (
    <section className="cpg-section bg-white">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 mt-16 md:mt-0" style={{ color: 'var(--fuel-green-primary)' }}>
          Designed for Professional Kitchens
        </h2>
        <p className="text-xl text-center max-w-3xl mx-auto mb-20" style={{ color: 'var(--fuel-text-secondary)' }}>
          We understand what matters most to chefs: consistent quality, reliable supply,
          and cost-effective solutions that enhance your menu offerings.
        </p>
        
        {/* Cost-Effective Pricing Section */}
        <div className="flex flex-col md:flex-row gap-12 items-center mb-32">
          <div className="w-full md:w-1/2">
            <div className="relative aspect-[16/9] rounded-3xl overflow-hidden bg-gray-100">
              <Image
                src="/images/chefs/chef in kitchen.png"
                alt="Chef in Kitchen"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
                style={{ objectPosition: '50% 35%' }}
                priority
              />
            </div>
          </div>
          <div className="w-full md:w-1/2 max-w-xl">
            <div className="mb-6 flex justify-center" style={{ color: 'var(--fuel-green-medium)' }}>
              <IconDollar className="w-16 h-16" />
            </div>
            <h3 className="text-3xl font-bold mb-6 text-center" style={{ color: 'var(--fuel-text-primary)' }}>Cost-Effective Pricing</h3>
            <p className="text-xl leading-relaxed text-center" style={{ color: 'var(--fuel-text-secondary)' }}>
              Enjoy the freshest ingredients delivered fresh to your kitchen and priced fairly 
              so you can focus on what matters most, creating top notch culinary experiences.
            </p>
          </div>
        </div>

        {/* 24-Hour Freshness Section */}
        <div className="flex flex-col md:flex-row-reverse gap-12 items-center mb-32">
          <div className="w-full md:w-1/2">
            <div className="relative aspect-[16/9] rounded-3xl overflow-hidden bg-gray-100">
              <Image
                src="/images/products/micros in soil.png"
                alt="Fresh Microgreens"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
                style={{ objectPosition: '50% 45%' }}
                priority
              />
            </div>
          </div>
          <div className="w-full md:w-1/2 max-w-xl">
            <div className="mb-6 flex justify-center" style={{ color: 'var(--fuel-green-medium)' }}>
              <IconClock className="w-16 h-16" />
            </div>
            <h3 className="text-3xl font-bold mb-6 text-center" style={{ color: 'var(--fuel-text-primary)' }}>24-Hour Freshness Guarantee</h3>
            <p className="text-xl leading-relaxed text-center" style={{ color: 'var(--fuel-text-secondary)' }}>
              Harvested fresh and delivered within hours. Our microgreens stay fresh 
              for 7-10 days when properly stored, reducing waste and maximizing value.
            </p>
          </div>
        </div>

        {/* Extensive Variety Section */}
        <div className="flex flex-col md:flex-row gap-12 items-center mb-32">
          <div className="w-full md:w-1/2">
            <div className="relative aspect-[16/9] rounded-3xl overflow-hidden bg-gray-100">
              <Image
                src="/images/products/salty finger meal.png"
                alt="Salty Fingers Culinary Creation"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
                priority
              />
            </div>
          </div>
          <div className="w-full md:w-1/2 max-w-xl">
            <div className="mb-6 flex justify-center" style={{ color: 'var(--fuel-green-medium)' }}>
              <IconChefHat className="w-16 h-16" />
            </div>
            <h3 className="text-3xl font-bold mb-6 text-center" style={{ color: 'var(--fuel-text-primary)' }}>Extensive Variety Selection</h3>
            <p className="text-xl leading-relaxed text-center" style={{ color: 'var(--fuel-text-secondary)' }}>
              Over 40 varieties of microgreens and edible flowers available year-round. 
              Custom growing programs for specific menu needs.
            </p>
          </div>
        </div>

        {/* Pricing Preview */}
        <div className="mt-20 text-center">
          <p className="font-semibold mb-4" style={{ color: 'var(--fuel-gold-accent)' }}>Take advantage of Free Shipping on bulk orders</p>
          <Link 
            href="/images/catalog/FuelFoods Catalog 2025 NEW .pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            View Pricing
          </Link>
        </div>
      </div>

      {/* Keep the CatalogModal for other parts of the site that might use it */}
      <CatalogModal 
        isOpen={isCatalogOpen}
        onClose={() => setIsCatalogOpen(false)}
      />
    </section>
  )
} 