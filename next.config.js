/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['en-US', 'es',],
    defaultLocale: 'en-US',
  },
  images: {
    domains: ['storage.googleapis.com', 'localhost']
  },
  output: 'standalone'
}
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})
module.exports = withBundleAnalyzer(nextConfig)
