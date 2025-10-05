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
};

module.exports = nextConfig;
