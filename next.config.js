/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['en-US', 'es',],
    defaultLocale: 'en-US',
  },
  output: 'standalone'
}

module.exports = nextConfig
