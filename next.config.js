/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa')

module.exports = withPWA({
  reactStrictMode: true,
  images: {
    domains: ['lh3.googleusercontent.com'],
    formats: ['image/avif', 'image/webp'],
  },
  pwa:{
    dest: "public",
    register: true,
    disable: process.env.NODE_ENV === 'development'
  }
})

