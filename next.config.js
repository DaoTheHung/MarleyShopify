/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ["mdx", "md", "jsx", "js", "tsx", "ts"],
  images: {
    domains: [
      'cdn.shopify.com'
    ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.shopify.com',

      },
    ],
  },

};

module.exports = nextConfig;

