import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export", // this enables `next export`
  trailingSlash: false, 
  images: {
    unoptimized: true, // required for static export when using next/image
    qualities: [65],
  },

  // Enable compression
  compress: true,
  
  // Optimize JavaScript - remove console logs in production
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production' ? {
      exclude: ['error', 'warn'], // Keep error and warn logs
    } : false,
  },
};

export default nextConfig;