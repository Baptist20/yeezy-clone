// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
//   typescript: {
//     ignoreBuildErrors: true,
//   },
//   images: { unoptimized: true },
// };

// export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "dev-yeezy-by-baptist.pantheonsite.io",
      },
    ],
  },
};

export default nextConfig;
