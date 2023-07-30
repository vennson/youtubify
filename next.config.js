/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['i.ytimg.com'],
  },
  experimental: {
    serverComponentsExternalPackages: ['graphql-request'],
  },
}

module.exports = nextConfig
