"use client";

import Image from 'next/image';
import Link from 'next/link';

interface BrandHeroProps {
  title: string;
  subtitle?: string;
  eyebrow?: string;
  bgImage?: string;
  variant?: 'dark' | 'light';
  overlayClassName?: string;
  className?: string;
  contentClassName?: string;
  primaryCta?: { href: string; label: string };
  secondaryCta?: { href: string; label: string };
  tertiaryCta?: { href: string; label: string; newTab?: boolean };
}

export default function BrandHero({
  title,
  subtitle,
  eyebrow,
  bgImage = '/images/hero/main-hero.jpg',
  variant = 'dark',
  overlayClassName,
  className,
  contentClassName,
  primaryCta,
  secondaryCta,
  tertiaryCta,
}: BrandHeroProps) {
  return (
    <section className={`relative ${className || ''}`}>
      <div className="relative" style={{ backgroundImage: `url(${bgImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className={`${overlayClassName ? overlayClassName : (variant === 'dark' ? 'bg-black/45' : 'bg-white/70 backdrop-blur')} `}>
          <div className="container py-16 md:py-24">
            <div className={`max-w-3xl ${variant === 'dark' ? 'text-white' : 'text-[color:var(--fuel-text-primary)]'} ${contentClassName || ''}` }>
              {eyebrow && (
                <div className="inline-block bg-[color:var(--fuel-green-primary)] text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-4">
                  {eyebrow}
                </div>
              )}
              <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">{title}</h1>
              {subtitle && (
                <p className="text-base md:text-xl opacity-95 max-w-2xl">{subtitle}</p>
              )}
              <div className="mt-6 flex flex-wrap gap-3">
                {primaryCta && (
                  <Link href={primaryCta.href} className="btn-primary">
                    {primaryCta.label}
                  </Link>
                )}
                {secondaryCta && (
                  <Link href={secondaryCta.href} className="btn-secondary">
                    {secondaryCta.label}
                  </Link>
                )}
                {tertiaryCta && (
                  <Link href={tertiaryCta.href} target={tertiaryCta.newTab ? '_blank' : undefined} rel={tertiaryCta.newTab ? 'noopener noreferrer' : undefined} className="btn-secondary">
                    {tertiaryCta.label}
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


