/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      // Source-tagged share links: e.g. /from/linkedin, /from/twitter.
      // The URL stays as /from/<source> (so it shows up as its own row in
      // Vercel Analytics → Pages), but the homepage content is served.
      {
        source: "/from/:source",
        destination: "/",
      },
    ];
  },
};

export default nextConfig;
