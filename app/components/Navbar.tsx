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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <div className="relative w-[150px] h-[60px] md:w-[180px] md:h-[80px]">
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
              className="px-6 py-2 rounded-full border-2 border-[#4CAF50] text-white hover:bg-[#4CAF50] transition-colors"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white focus:outline-none"
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? (
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu - NEW APPROACH WITH SOLID BLACK */}
      {isMenuOpen && (
        <div 
          className="md:hidden fixed inset-0 top-24 z-[100]"
          style={{
            position: 'fixed',
            top: '96px', // 24rem = 96px
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: '#000000',
            zIndex: 100
          }}
        >
          <div style={{ backgroundColor: '#000000', width: '100%', height: '100%' }}>
            <div style={{ backgroundColor: '#000000', width: '100%' }}>
              <Link
                href="https://fuelfoods.store/about-us/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'block',
                  width: '100%',
                  textAlign: 'center',
                  padding: '24px 0',
                  fontSize: '20px',
                  fontWeight: 'bold',
                  color: 'white',
                  backgroundColor: '#000000',
                  borderBottom: '1px solid #333'
                }}
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </Link>
              <Link
                href="/images/catalog/FuelFoods Catalog 2025.pdf"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'block',
                  width: '100%',
                  textAlign: 'center',
                  padding: '24px 0',
                  fontSize: '20px',
                  fontWeight: 'bold',
                  color: 'white',
                  backgroundColor: '#000000',
                  borderBottom: '1px solid #333'
                }}
                onClick={() => setIsMenuOpen(false)}
              >
                Catalog
              </Link>
              <Link
                href="https://fuelfoods.store/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'block',
                  width: '100%',
                  textAlign: 'center',
                  padding: '24px 0',
                  fontSize: '20px',
                  fontWeight: 'bold',
                  color: 'white',
                  backgroundColor: '#000000',
                  borderBottom: '1px solid #333'
                }}
                onClick={() => setIsMenuOpen(false)}
              >
                Microgreens Packs
              </Link>
              <Link
                href="https://fuelfoods.store/contact-us/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'block',
                  width: '100%',
                  textAlign: 'center',
                  padding: '24px 0',
                  fontSize: '20px',
                  fontWeight: 'bold',
                  color: 'white',
                  backgroundColor: '#000000'
                }}
                onClick={() => setIsMenuOpen(false)}
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Keep the CatalogModal for other parts of the site that might use it */}
      <CatalogModal 
        isOpen={isCatalogOpen}
        onClose={() => setIsCatalogOpen(false)}
      />
    </nav>
  )
} 