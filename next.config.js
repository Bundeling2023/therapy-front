/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
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
          source: '/team/:first',
          destination: '/team',
        },
        {
          source: '/locaties/:first',
          destination: '/locations',
        },
    ]
  }
}

module.exports = nextConfig
