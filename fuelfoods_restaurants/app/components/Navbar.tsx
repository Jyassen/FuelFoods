'use client'

import React, { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import ContactFormModal from './ContactFormModal'
import SafeImage from './SafeImage'
import CatalogModal from './CatalogModal'

// Custom SVG icons to replace react-icons
const MenuIcon = () => (
  <svg className="h-6 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
    <path d="M4 6h16M4 12h16M4 18h16" />
  </svg>
);

const CloseIcon = () => (
  <svg className="h-6 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
    <path d="M6 18L18 6M6 6l12 12" />
  </svg>
);

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isCatalogOpen, setIsCatalogOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const pathname = usePathname()
  const menuRef = useRef<HTMLDivElement>(null)

  // Check if we're on mobile on mount and when window resizes
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    checkIfMobile()
    window.addEventListener('resize', checkIfMobile)
    
    return () => window.removeEventListener('resize', checkIfMobile)
  }, [])

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false)
      }
    }
    
    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [isMenuOpen])

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

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMobileMenu = () => {
    setIsMenuOpen(!isMenuOpen)
    console.log("Mobile menu toggled:", !isMenuOpen) // Debug log
  }

  const closeMobileMenu = () => {
    setIsMenuOpen(false)
  }

  const handleContactClick = () => {
    setShowModal(true)
    closeMobileMenu()
  }

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black/90 shadow-md py-2' : 'bg-black/90 py-4'}`}>
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Link href="/" className="flex items-center" onClick={closeMobileMenu}>
            <div className="relative w-[150px] h-[60px] md:w-[180px] md:h-[80px]">
              <SafeImage
                src="/images/brand/Logo.png"
                alt="FuelFoods"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link 
              href="https://fuelfoods.store/about-us/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-base text-white hover:text-[#4CAF50] transition-colors"
            >
              About Us
            </Link>
            <Link 
              href="https://fuelfoods.store/products/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-base text-white hover:text-[#4CAF50] transition-colors"
            >
              Products
            </Link>
            <Link 
              href="https://fuelfoods.store/contact-us/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-base text-white hover:text-[#4CAF50] transition-colors"
            >
              Contact
            </Link>
            <button
              onClick={() => setIsCatalogOpen(true)}
              className="text-base text-white hover:text-[#4CAF50] transition-colors"
            >
              Catalog
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-white focus:outline-none"
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>

        {/* Mobile Menu - Fixed positioning and improved visibility */}
        {isMenuOpen && (
          <div
            ref={menuRef}
            className="md:hidden fixed top-[72px] left-0 right-0 bottom-0 bg-black z-50 overflow-y-auto"
          >
            <div className="container mx-auto px-4 py-6 flex flex-col space-y-4">
              <Link 
                href="https://fuelfoods.store/about-us/"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-lg text-white hover:text-[#4CAF50] transition-colors py-3 border-b border-gray-800"
                onClick={closeMobileMenu}
              >
                About Us
              </Link>
              <Link 
                href="https://fuelfoods.store/products/"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-lg text-white hover:text-[#4CAF50] transition-colors py-3 border-b border-gray-800"
                onClick={closeMobileMenu}
              >
                Products
              </Link>
              <Link 
                href="https://fuelfoods.store/microgreens-packs/"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-lg text-white hover:text-[#4CAF50] transition-colors py-3 border-b border-gray-800"
                onClick={closeMobileMenu}
              >
                Microgreens Packs
              </Link>
              <Link 
                href="https://fuelfoods.store/contact-us/"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-lg text-white hover:text-[#4CAF50] transition-colors py-3 border-b border-gray-800"
                onClick={closeMobileMenu}
              >
                Contact Us
              </Link>
              <button
                onClick={() => {
                  setIsCatalogOpen(true)
                  setIsMenuOpen(false)
                }}
                className="block text-lg text-white hover:text-[#4CAF50] transition-colors py-3"
              >
                Catalog
              </button>
              
              <div className="mt-8">
                <h2 className="text-xl text-gray-400 mb-4">Contact</h2>
                <p className="text-white mb-2">New York City</p>
                <a href="mailto:info@fuelfoods.store" className="text-[#4CAF50] hover:underline">
                  info@fuelfoods.store
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Contact Form Modal */}
      <ContactFormModal isOpen={showModal} onClose={() => setShowModal(false)} />
      
      {/* Catalog Modal */}
      {isCatalogOpen && (
        <CatalogModal isOpen={isCatalogOpen} onClose={() => setIsCatalogOpen(false)} />
      )}
    </>
  )
} 