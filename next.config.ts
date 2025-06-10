import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};
// next.config.js
module.exports = {
  output: "export", // Enables static export
  basePath: process.env.NODE_ENV === "production" ? "/your-repo-name" : "", // Needed if deploying to GitHub Pages in a subpath
  assetPrefix: process.env.NODE_ENV === "production" ? "/your-repo-name/" : "", // For assets (CSS, images, etc.)
};

export default nextConfig;
