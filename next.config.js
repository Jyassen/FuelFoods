/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/seasonal-pairing-guide',
        destination: '/seasonal-pairing-guide.html',
      },
      {
        source: '/samplebox',
        destination: '/samplebox.html',
      },
    ];
  },
  images: {
    unoptimized: false,
    remotePatterns: [],
    formats: ['image/avif', 'image/webp'],
  },
  // Ensure static files are properly served
  output: 'standalone',
};

module.exports = nextConfig;
