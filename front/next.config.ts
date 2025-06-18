import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_PAGES === 'true'; // Set this in your build process

const nextConfig: NextConfig = {
  output: 'export',
  images: { unoptimized: true },
  basePath: isGitHubPages ? '/RAISE-AI-hackathon' : '',
  assetPrefix: isGitHubPages ? '/RAISE-AI-hackathon/' : '',
  trailingSlash: true, // This can help with GitHub Pages
};

export default nextConfig;
