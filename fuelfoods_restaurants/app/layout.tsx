import type { Metadata } from "next";
import { Inter, Playfair_Display, Poppins } from "next/font/google";
import Navbar from "./components/Navbar";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  metadataBase: new URL('http://localhost:3000'),
  title: 'FuelFoods - Premium Microgreens for Restaurants',
  description: 'Premium microgreens and edible flowers for restaurants and professional kitchens. Locally grown, pesticide-free, and delivered fresh.',
  keywords: ["restaurant", "fine dining", "culinary experience", "gourmet food", "chef-prepared meals"],
  authors: [{ name: "FuelFoods" }],
  creator: "FuelFoods",
  icons: {
    icon: [
      { url: '/images/brand/Logo.png' },
      { url: '/images/brand/Logo.png', sizes: '16x16', type: 'image/png' },
      { url: '/images/brand/Logo.png', sizes: '32x32', type: 'image/png' },
      { url: '/images/brand/Logo.png', sizes: '192x192', type: 'image/png' },
      { url: '/images/brand/Logo.png', sizes: '512x512', type: 'image/png' },
    ],
    shortcut: '/images/brand/Logo.png',
    apple: '/images/brand/Logo.png',
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: '/images/brand/Logo.png',
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "./",
    siteName: "FuelFoods",
    title: 'FuelFoods - Premium Microgreens for Restaurants',
    description: 'Premium microgreens and edible flowers for restaurants and professional kitchens. Locally grown, pesticide-free, and delivered fresh.',
    images: ['/images/brand/Logo.png'],
  },
  twitter: {
    card: "summary_large_image",
    title: "FuelFoods - Premium Microgreens for Restaurants",
    description: "Premium microgreens and edible flowers for restaurants and professional kitchens. Locally grown, pesticide-free, and delivered fresh.",
    images: ["/images/brand/Logo.png"],
    creator: "@fuelfoods",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} ${poppins.variable}`}>
      <head>
        <link rel="icon" href="/images/brand/Logo.png" />
        <link rel="apple-touch-icon" href="/images/brand/Logo.png" />
        <link rel="shortcut icon" href="/images/brand/Logo.png" />
      </head>
      <body suppressHydrationWarning={true}>
        <div className={`${inter.className} antialiased bg-black min-h-screen pt-24`}>
          <Navbar />
          <main className="pt-0 md:pt-0">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
