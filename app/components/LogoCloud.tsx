import Image from 'next/image';

const logos = [
  '/images/restaurant_partners/Aliya.png',
  '/images/restaurant_partners/Atria.png',
  '/images/restaurant_partners/Charm.png',
  '/images/restaurant_partners/Continent.png',
  '/images/restaurant_partners/FishCheeks.png',
  '/images/restaurant_partners/Native.png',
  '/images/restaurant_partners/Nemesis.png',
  '/images/restaurant_partners/Prime39.png',
  '/images/restaurant_partners/RPB.png',
  '/images/restaurant_partners/Victory.png',
];

export default function LogoCloud() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 items-center">
      {logos.map((src) => (
        <div key={src} className="relative bg-white border border-gray-200 rounded-xl p-4 h-20 flex items-center justify-center shadow-sm">
          <Image src={src} alt="Partner logo" width={120} height={48} className="object-contain" />
        </div>
      ))}
    </div>
  );
}


