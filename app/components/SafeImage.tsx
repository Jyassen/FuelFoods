'use client'

import { useState } from 'react';
import Image, { ImageProps } from 'next/image';

interface SafeImageProps extends Omit<ImageProps, 'onError'> {
  fallbackSrc?: string;
}

export default function SafeImage({ 
  src, 
  alt, 
  fallbackSrc = '/images/brand/Logo.png',
  ...props 
}: SafeImageProps) {
  const [imgSrc, setImgSrc] = useState(src);
  const [hasError, setHasError] = useState(false);

  return (
    <Image
      {...props}
      src={imgSrc}
      alt={alt}
      onError={() => {
        if (!hasError) {
          console.warn(`Image failed to load: ${src}, using fallback`);
          setImgSrc(fallbackSrc);
          setHasError(true);
        }
      }}
    />
  );
} 