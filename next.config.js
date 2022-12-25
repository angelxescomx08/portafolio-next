/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'jose-angel-hdz-rda.online',
        port: '',
        pathname: '**',
      },
    ],
  },
}

module.exports = nextConfig
