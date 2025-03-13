'use client'

import Image from 'next/image'
import { useState } from 'react'
import CatalogModal from './CatalogModal'
import ContactFormModal from './ContactFormModal'

const flowers = [
  {
    name: 'Orchids',
    description: 'Elegant and exotic edible orchids in vibrant colors',
    image: '/images/products/Microgreens and Flowers/Orchids.png'
  },
  {
    name: 'Violas',
    description: 'Delicate, sweet petals with a subtle floral flavor',
    image: '/images/products/Microgreens and Flowers/Violas.png'
  },
  {
    name: 'Apple Blossoms',
    description: 'Delicate pink and white blossoms with subtle apple notes',
    image: '/images/products/Microgreens and Flowers/Apple Blossoms.png'
  },
  {
    name: 'Flower Mix',
    description: 'Seasonal blend of premium edible flowers',
    image: '/images/products/Microgreens and Flowers/Flower Mix.png'
  },
  {
    name: 'Marigolds',
    description: 'Bright orange petals with a peppery, citrus flavor',
    image: '/images/products/Microgreens and Flowers/Marigolds.png'
  },
  {
    name: 'Lavender',
    description: 'Aromatic purple blooms with sweet floral notes',
    image: '/images/products/Microgreens and Flowers/Lavender.png'
  },
  {
    name: 'Pansy Mix',
    description: 'Colorful blend of edible pansies with mild floral notes',
    image: '/images/products/Microgreens and Flowers/Pansy mix.png'
  },
  {
    name: 'Nasturtium Flowers',
    description: 'Vibrant flowers with a peppery, slightly spicy flavor',
    image: '/images/products/Microgreens and Flowers/Nasturtium Flowers.png'
  },
  {
    name: 'Incan Begonias',
    description: 'Exotic blooms with a citrus-like tartness',
    image: '/images/products/Microgreens and Flowers/Incan Begonias.png'
  },
  {
    name: 'Butterfly Leaves',
    description: 'Delicate, decorative leaves with subtle flavor',
    image: '/images/products/Microgreens and Flowers/Yka Butterfly Leaves.png'
  },
  {
    name: 'Sorrel',
    description: 'Distinctive leaves with a bright, lemony taste',
    image: '/images/products/Microgreens and Flowers/Sorrel.png'
  }
]

const microgreens = [
  {
    name: 'Micro Cilantro',
    description: 'Native to western Asia, brings bright citrus and fresh herbal notes',
    image: '/images/products/Microgreens and Flowers/Micro Cilantro.png'
  },
  {
    name: 'Micro Basil',
    description: 'Intense aromatic flavor, perfect for Mediterranean and Asian cuisine',
    image: '/images/products/Microgreens and Flowers/Micro Basil .png'
  },
  {
    name: 'Micro Celery',
    description: 'Concentrated celery flavor with delicate, crisp texture',
    image: '/images/products/Microgreens and Flowers/Micro Celery.png'
  },
  {
    name: 'Micro Shiso',
    description: 'Complex flavor profile with hints of mint, basil, and citrus',
    image: '/images/products/Microgreens and Flowers/Micro Shiso.png'
  },
  {
    name: 'Micro Amaranth',
    description: 'Delicate and mild with stunning burgundy color',
    image: '/images/products/Microgreens and Flowers/Micro Amaranth.png'
  },
  {
    name: 'Bulls Blood Beets',
    description: 'Deep burgundy leaves with earthy sweetness',
    image: '/images/products/Microgreens and Flowers/Micro Bulls Beets.png'
  },
  {
    name: 'Micro Chives',
    description: 'Delicate onion flavor with tender stems',
    image: '/images/products/Microgreens and Flowers/Micro Chive.png'
  },
  {
    name: 'Rainbow Mix',
    description: 'Vibrant blend of colorful microgreens with diverse flavors',
    image: '/images/products/Microgreens and Flowers/Micro Rainbow mix.png'
  },
  {
    name: 'Micro Sunflower',
    description: 'Nutty and sweet with a satisfying crunch',
    image: '/images/products/Microgreens and Flowers/Micro Sunflower.png'
  }
]

export default function Showcase() {
  const [isCatalogOpen, setIsCatalogOpen] = useState(false)
  const [isContactOpen, setIsContactOpen] = useState(false)

  return (
    <section id="showcase" className="py-12 px-4 md:px-8 lg:px-16 bg-black">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-4">
          Explore our microgreens and flowers
        </h2>
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12">
          Discover our premium selection of microgreens and edible flowers, carefully cultivated for NYC&apos;s finest establishments.
        </p>

        {/* Flowers Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-serif font-bold mb-6 text-[#FF5722]">
            Edible Flowers
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {flowers.map((flower) => (
              <div
                key={flower.name}
                className="group text-center"
              >
                <div className="
                  aspect-square
                  mb-2 md:mb-3
                  p-2 md:p-4
                  flex
                  items-center
                  justify-center
                ">
                  <div className="
                    relative
                    w-full
                    h-full
                    transition-transform
                    duration-300
                    group-hover:scale-110
                    group-hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]
                  ">
                    <Image
                      src={flower.image}
                      alt={flower.name}
                      fill
                      className="object-contain"
                      sizes="(max-width: 640px) 150px, (max-width: 768px) 200px, 250px"
                      priority
                    />
                  </div>
                </div>
                <h3 className="text-base md:text-lg font-medium text-white mb-1">
                  {flower.name}
                </h3>
                <p className="text-xs md:text-sm text-gray-400 line-clamp-2">
                  {flower.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Microgreens Section */}
        <div>
          <h3 className="text-2xl font-serif font-bold mb-6 text-[#4CAF50]">
            Microgreens
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {microgreens.map((microgreen) => (
              <div
                key={microgreen.name}
                className="group text-center"
              >
                <div className="
                  aspect-square
                  mb-2 md:mb-3
                  p-2 md:p-4
                  flex
                  items-center
                  justify-center
                ">
                  <div className="
                    relative
                    w-full
                    h-full
                    transition-transform
                    duration-300
                    group-hover:scale-110
                    group-hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]
                  ">
                    <Image
                      src={microgreen.image}
                      alt={microgreen.name}
                      fill
                      className="object-contain"
                      sizes="(max-width: 640px) 150px, (max-width: 768px) 200px, 250px"
                      priority
                    />
                  </div>
                </div>
                <h3 className="text-base md:text-lg font-medium text-white mb-1">
                  {microgreen.name}
                </h3>
                <p className="text-xs md:text-sm text-gray-400 line-clamp-2">
                  {microgreen.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Order Section */}
        <div className="mt-12 bg-gray-900 rounded-2xl p-6 md:p-8 text-center">
          <h3 className="text-[#FF5722] text-2xl md:text-3xl font-bold mb-6 md:mb-8 leading-tight">
            Express your culinary creativity<br />
            and get started today!
          </h3>
          <button 
            onClick={() => setIsContactOpen(true)}
            className="bg-[#4CAF50] text-white px-8 py-3 rounded-full font-medium hover:bg-[#45a049] transition-colors"
          >
            Set Up Order
          </button>
        </div>
      </div>

      <CatalogModal 
        isOpen={isCatalogOpen}
        onClose={() => setIsCatalogOpen(false)}
      />
      
      <ContactFormModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </section>
  )
} 