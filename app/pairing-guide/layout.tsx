import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Seasonal Pairing Guide - Fall/Winter 2025 | FuelFoods",
  description: "Professional microgreens and edible flowers pairing guide for NYC restaurants",
};

export default function PairingGuideLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>;
}
