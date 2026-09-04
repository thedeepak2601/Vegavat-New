/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // `next dev` and `next build` share .next, so building while the dev server
  // runs corrupts its manifests ("missing param", "Cannot find module
  // ./682.js"). NEXT_DIST_DIR moves a build out of the way.
  //
  // IMPORTANT: with `output: export` this also redirects the exported site
  // into that directory — `out/` is NOT written. Use it for compile and type
  // checks only. The deployable `out/` must come from a plain `next build`
  // with the dev server stopped.
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
