import { Metadata } from 'next'
import Hero from './components/Hero'
import Features from './components/Features'
import Showcase from './components/Showcase'
import Partners from './components/Partners'
import Journey from './components/Journey'
import Footer from './components/Footer'

export const metadata: Metadata = {
  title: 'Fuel Foods - Elevate Your Culinary Experience',
  description: 'Discover exceptional dining experiences and culinary expertise with Fuel Foods.',
  keywords: 'restaurant, culinary, dining, food experience, gourmet',
}

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black">
      <Hero />
      <Features />
      <Showcase />
      <Partners />
      <Journey />
      <Footer />
    </main>
  )
}
