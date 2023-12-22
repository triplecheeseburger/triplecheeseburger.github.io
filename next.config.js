const { withContentlayer } = require('next-contentlayer');

const prod = process.env.NODE_ENV === 'production';

/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
  swcMinify: true,
  ...(prod && { output: 'export' }),
};

module.exports = withContentlayer(nextConfig);
