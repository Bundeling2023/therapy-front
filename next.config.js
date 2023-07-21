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
            destination: '/contact-us',
        },
        {
          source: '/locaties',
          destination: '/locations',
        },
    ]
  }
}

module.exports = nextConfig
