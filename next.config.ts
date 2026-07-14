import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Yeh lines add karein jo fonts download ko bypass karein:
  experimental: {
    optimizeFonts: false,
  } as any,
};

export default nextConfig;