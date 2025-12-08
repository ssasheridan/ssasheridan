/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        pathname: '/images/**',
      },
    ],
  },
  eslint: {
    // Ignore ESLint errors during build for Sanity schema files
    ignoreDuringBuilds: true,
  },
}

module.exports = nextConfig

