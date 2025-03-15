'use client'

import React, { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FaBars, FaTimes } from 'react-icons/fa'
import ContactFormModal from './ContactFormModal'
import SafeImage from './SafeImage'
import CatalogModal from './CatalogModal'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isCatalogOpen, setIsCatalogOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const router = useRouter()
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

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMobileMenu = () => {
    setIsMenuOpen(!isMenuOpen)
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
              {isMenuOpen ? (
                <FaTimes className="h-6 w-6" />
              ) : (
                <FaBars className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          ref={menuRef}
          className={`md:hidden absolute w-full bg-black shadow-lg transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'max-h-screen opacity-100 visible' : 'max-h-0 opacity-0 invisible overflow-hidden'
          }`}
        >
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link 
              href="https://fuelfoods.store/about-us/"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-lg text-white hover:text-[#4CAF50] transition-colors py-2 border-b border-gray-800"
              onClick={closeMobileMenu}
            >
              About Us
            </Link>
            <Link 
              href="https://fuelfoods.store/products/"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-lg text-white hover:text-[#4CAF50] transition-colors py-2 border-b border-gray-800"
              onClick={closeMobileMenu}
            >
              Products
            </Link>
            <Link 
              href="https://fuelfoods.store/microgreens-packs/"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-lg text-white hover:text-[#4CAF50] transition-colors py-2 border-b border-gray-800"
              onClick={closeMobileMenu}
            >
              Microgreens Packs
            </Link>
            <Link 
              href="https://fuelfoods.store/contact-us/"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-lg text-white hover:text-[#4CAF50] transition-colors py-2 border-b border-gray-800"
              onClick={closeMobileMenu}
            >
              Contact Us
            </Link>
            <button
              onClick={() => {
                setIsCatalogOpen(true)
                setIsMenuOpen(false)
              }}
              className="block text-lg text-white hover:text-[#4CAF50] transition-colors py-2"
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