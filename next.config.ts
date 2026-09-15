import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
// 🟢 Local testing ke liye in do lines ko comment kar dein:
  // basePath: '/portfolio',
  // assetPrefix: '/portfolio',
};

export default nextConfig;