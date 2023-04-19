/** @type {import('next').NextConfig} */
const path = require('path')
const nextConfig = {
  reactStrictMode: true,
  webpack5: true,
  swcMinify: true,
  webpack: (config) => {
    config.resolve.fallback = { fs: false };
    config.resolve.alias["@"] = path.join(__dirname, "public");
    return config;
  },
};


module.exports = nextConfig
