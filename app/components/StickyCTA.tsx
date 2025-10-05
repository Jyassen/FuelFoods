"use client";

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function StickyCTA({ href = '#', label = 'Request Partnership' }: { href?: string; label?: string }) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <div className={`fixed left-0 right-0 bottom-4 z-40 transition-all duration-300 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}>
      <div className="container flex justify-center">
        <Link href={href} className="btn-primary shadow-lg">{label}</Link>
      </div>
    </div>
  );
}


