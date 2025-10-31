/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    optimizePackageImports: ['@iconify/react', 'swiper'],
  },
  images: {
    qualities: [75, 80],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: '/bedankt',
        destination: '/thank-you',
      },
      {
        source: '/contact-opnemen',
        destination: '/contact',
      },
      {
        source: '/maak-afspraak',
        destination: '/contact',
      },
      {
        source: '/contact-us',
        destination: '/contact',
      },
      {
        source: '/locaties',
        destination: '/locations',
      },
      {
        source: '/locatie',
        destination: '/locations',
      },
      {
        source: '/locaties/:first',
        destination: '/locations/:first',
      },
      {
        source: "/behandelingen-kinderfysio-2/motorische-problemen/over-ons-wie-zijn-wij",
        destination: "/kinderfysiotherapie",
      },
    ]
  },
  async redirects() {
    return [
      {
        source: '/beheer',
        destination: process.env.NEXT_PUBLIC_API_URL + '/admin',
        permanent: false,
        basePath: false,
      },
    ]
  },
}

module.exports = nextConfig
