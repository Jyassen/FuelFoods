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
  title: {
    template: "%s | FuelFoods",
    default: "FuelFoods - Elevate Your Culinary Experience",
  },
  description: "Experience exceptional dining with FuelFoods. Fresh ingredients, expert chefs, and unforgettable flavors.",
  keywords: ["restaurant", "fine dining", "culinary experience", "gourmet food", "chef-prepared meals"],
  authors: [{ name: "FuelFoods" }],
  creator: "FuelFoods",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "./",
    siteName: "FuelFoods",
    title: "FuelFoods - Elevate Your Culinary Experience",
    description: "Experience exceptional dining with FuelFoods. Fresh ingredients, expert chefs, and unforgettable flavors.",
    images: [
      {
        url: "./og-image.jpg",
        width: 1200,
        height: 630,
        alt: "FuelFoods Culinary Experience",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FuelFoods - Elevate Your Culinary Experience",
    description: "Experience exceptional dining with FuelFoods. Fresh ingredients, expert chefs, and unforgettable flavors.",
    images: ["./twitter-image.jpg"],
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} ${poppins.variable}`}>
      <body suppressHydrationWarning={true}>
        <div className={`${inter.className} antialiased bg-black min-h-screen`}>
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
