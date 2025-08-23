'use client'

import Image from 'next/image'
import SafeImage from './SafeImage'
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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm border-b" style={{ borderColor: 'var(--fuel-gray-light)' }}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <div className="relative w-[50px] h-[50px] md:w-[60px] md:h-[60px]">
              <SafeImage
                src="/images/brand/Logo.png?v=3"
                fallbackSrc="/images/brand/NewLogo.png?v=2"
                alt="FuelFoods"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              href="https://fuelfoods.store/about-us/"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link"
              style={{ color: 'var(--fuel-text-primary)' }}
            >
              About Us
            </Link>
            <Link
              href="/images/catalog/FuelFoods Catalog 2025.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link"
              style={{ color: 'var(--fuel-text-primary)' }}
            >
              Catalog
            </Link>
            <Link 
              href="https://fuelfoods.store/"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link"
              style={{ color: 'var(--fuel-text-primary)' }}
            >
              Microgreens Packs
            </Link>
            <Link 
              href="https://fuelfoods.store/contact-us/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="focus:outline-none"
            style={{ color: 'var(--fuel-text-primary)' }}
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

      {/* Mobile Menu - NEW APPROACH WITH SOLID WHITE */}
      {isMenuOpen && (
        <div 
          className="md:hidden fixed inset-0 top-24 z-[100]"
          style={{
            position: 'fixed',
            top: '64px', // h-16 = 64px
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: '#ffffff',
            zIndex: 100
          }}
        >
          <div style={{ backgroundColor: '#ffffff', width: '100%', height: '100%' }}>
            <div style={{ backgroundColor: '#ffffff', width: '100%' }}>
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
                  color: 'black',
                  backgroundColor: '#ffffff',
                  borderBottom: '1px solid #e5e7eb'
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
                  color: 'black',
                  backgroundColor: '#ffffff',
                  borderBottom: '1px solid #e5e7eb'
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
                  color: 'black',
                  backgroundColor: '#ffffff',
                  borderBottom: '1px solid #e5e7eb'
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
                  backgroundColor: 'var(--fuel-green-medium)'
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