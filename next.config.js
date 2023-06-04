/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = {
  images: {
    domains: [
      "images.unsplash.com",
      "plus.unsplash.com",
      // site provenence images
    ]
  }
}