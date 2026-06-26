/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
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
