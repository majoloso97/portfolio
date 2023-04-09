/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'standalone',
  staticPageGenerationTimeout: 1000
}

module.exports = nextConfig
