import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Seasonal Pairing Guide - Fall/Winter 2025 | FuelFoods",
  description: "Professional microgreens and edible flowers pairing guide for NYC restaurants",
  icons: {
    icon: [
      { url: '/icon.png', sizes: '500x500', type: 'image/png' },
      { url: '/images/brand/Logo.png', sizes: '500x500', type: 'image/png' }
    ],
    apple: [
      { url: '/apple-icon.png', sizes: '500x500', type: 'image/png' }
    ],
    shortcut: ['/icon.png']
  },
};

export default function PairingGuideLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>;
}
