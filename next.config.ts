import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Simple URL ke liye ye do lines update karein:
  basePath: '/portfolio', 
  assetPrefix: '/portfolio',
};

export default nextConfig;