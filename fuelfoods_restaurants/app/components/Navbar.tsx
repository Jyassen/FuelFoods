'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import CatalogModal from './CatalogModal'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isCatalogOpen, setIsCatalogOpen] = useState(false)

  // Add effect to prevent body scrolling when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  return (
    <nav className="static bg-black/90 backdrop-blur-sm">
      <div className="container mx-auto px-0 sm:px-0 lg:px-0">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <div className="relative w-[180px] h-[80px]">
              <Image
                src="/images/brand/Logo.png"
                alt="FuelFoods"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6 pr-8">
            <Link 
              href="https://fuelfoods.store/about-us/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-base text-white hover:text-[#4CAF50] transition-colors"
            >
              About Us
            </Link>
            <Link 
              href="/images/catalog/FuelFoods Catalog 2025.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-base text-white hover:text-[#4CAF50] transition-colors"
            >
              Catalog
            </Link>
            <Link 
              href="https://fuelfoods.store/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-base text-white hover:text-[#4CAF50] transition-colors"
            >
              Microgreens Packs
            </Link>
            <Link 
              href="https://fuelfoods.store/contact-us/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-base px-6 py-3 rounded-full border-2 border-[#4CAF50] text-white hover:bg-[#4CAF50] transition-colors"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden pr-4">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-[#4CAF50] focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {!isMenuOpen ? (
                <svg className="block h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden fixed inset-x-0 bg-black">
            <div className="py-8 flex flex-col items-center justify-center space-y-6">
              <Link
                href="https://fuelfoods.store/about-us/"
                target="_blank"
                rel="noopener noreferrer"
                className="block px-6 py-4 text-xl font-medium text-white hover:text-[#4CAF50] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </Link>
              <Link
                href="/images/catalog/FuelFoods Catalog 2025.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="block px-6 py-4 text-xl font-medium text-white hover:text-[#4CAF50] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Catalog
              </Link>
              <Link
                href="https://fuelfoods.store/"
                target="_blank"
                rel="noopener noreferrer"
                className="block px-6 py-4 text-xl font-medium text-white hover:text-[#4CAF50] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Microgreens Packs
              </Link>
              <Link
                href="https://fuelfoods.store/contact-us/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 text-xl font-medium rounded-full border-2 border-[#4CAF50] text-white hover:bg-[#4CAF50] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </div>

      <CatalogModal 
        isOpen={isCatalogOpen}
        onClose={() => setIsCatalogOpen(false)}
      />
    </nav>
  )
} 