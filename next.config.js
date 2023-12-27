/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['en-US', 'es',],
    defaultLocale: 'en-US',
  },
  images: {
    domains: ['storage.googleapis.com', 'localhost', 'ai-united-strapi-uc3v53rceq-ue.a.run.app']
  },
  output: 'standalone'
}
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})
module.exports = withBundleAnalyzer(nextConfig)
