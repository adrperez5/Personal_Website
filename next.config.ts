import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable React strict mode for better development experience
  reactStrictMode: true,

  // Configure for static export (GitHub Pages)
  output: 'export',

  // Disable image optimization for static export
  images: {
    unoptimized: true,
  },

  // Add trailing slashes for better static hosting compatibility
  trailingSlash: true,

  // Optional: uncomment if deploying to a subdirectory
  // basePath: '/personal_website',
};

export default nextConfig;
