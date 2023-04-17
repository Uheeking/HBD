/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack5: true,
  swcMinify: true,
  async rewrites() {
    return [
      {
        source: "/:path*",
        destination: "https://api.notion.com/:path*",
      },
    ];
  },
  webpack: (config) => {
    config.resolve.fallback = { fs: false };

    return config;
  },
};


module.exports = nextConfig
