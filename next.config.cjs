/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  pageExtensions: ['mdx', 'md', 'jsx', 'js', 'tsx', 'ts'],
  postcss: {
    plugins: [
      require("tailwindcss"),
      require("autoprefixer"),
    ],
  },
}

module.exports = nextConfig
