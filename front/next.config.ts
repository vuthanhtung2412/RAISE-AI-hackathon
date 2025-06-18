import type { NextConfig } from "next";
import { GITHUB_PROJECT } from "@/const";

const isGitHubPages = process.env.GITHUB_PAGES === 'true'; // Set this in your build process

const nextConfig: NextConfig = {
  output: 'export',
  images: { unoptimized: true },
  basePath: isGitHubPages ? `/${GITHUB_PROJECT}` : '',
  // Why I don't use `assetPrefix`?
  // https://nextjs.org/docs/app/api-reference/config/next-config-js/assetPrefix#:~:text=an%20Asset%20Prefix.-,Good%20to%20know%3A,-Next.js%209.5
};

export default nextConfig;
