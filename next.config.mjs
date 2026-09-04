/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // `next dev` and `next build` both write to .next, so building while the dev
  // server runs corrupts its manifests ("missing param", "Cannot find module
  // ./682.js"). Set NEXT_DIST_DIR to build somewhere else and leave dev alone.
  // The exported site still lands in out/ either way.
  distDir: process.env.NEXT_DIST_DIR || ".next",
  // Static HTML export -> deploy the `out/` folder to Cloudflare Pages.
  output: "export",
  // Static export can't use the Next Image Optimization server, so serve
  // images as-is (also required for the animated GIF blog hero).
  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "plus.unsplash.com" },
    ],
  },
};

export default nextConfig;
