'use client'

import { useEffect } from 'react'

interface CatalogModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function CatalogModal({ isOpen, onClose }: CatalogModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  const handleDownload = () => {
    const link = document.createElement('a')
    link.href = '/images/catalog/FuelFoods Catalog 2025.pdf'
    link.download = 'FuelFoods Catalog 2025.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  if (!isOpen) return null

  // For mobile devices, trigger download directly
  if (typeof window !== 'undefined' && window.innerWidth < 768) {
    handleDownload()
    onClose()
    return null
  }

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 px-4">
      <div className="bg-black border border-gray-800 rounded-3xl p-8 max-w-4xl w-full h-[80vh] relative animate-fade-up">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Download button */}
        <button
          onClick={handleDownload}
          className="absolute top-4 left-4 text-gray-400 hover:text-white flex items-center gap-2"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
          <span>Download</span>
        </button>

        {/* PDF Viewer */}
        <div className="w-full h-full mt-8">
          <iframe
            src={`/images/catalog/FuelFoods Catalog 2025.pdf#toolbar=0`}
            className="w-full h-full rounded-2xl"
            title="FuelFoods Catalog"
          />
        </div>
      </div>
    </div>
  )
} 