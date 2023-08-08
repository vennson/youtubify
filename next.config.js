/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['i.ytimg.com'],
    unoptimized: true,
  },
  experimental: {
    serverComponentsExternalPackages: ['graphql-request'],
  },
}

module.exports = nextConfig
