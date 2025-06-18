import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';
const isGitHubPages = process.env.GITHUB_PAGES === 'true'; // Set this in your build process

const nextConfig: NextConfig = {
  output: 'export',
  images: { unoptimized: true },
  basePath: (isProd && isGitHubPages) ? '/RAISE-AI-hackathon' : '',
  assetPrefix: (isProd && isGitHubPages) ? '/RAISE-AI-hackathon/' : '',
  trailingSlash: true, // This can help with GitHub Pages
};

export default nextConfig;
