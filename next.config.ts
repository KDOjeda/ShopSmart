import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* insert image domain here */
  images:{
    remotePatterns: [
      {
        protocol: "https",
        hostname: "m.media-amazon.com"
      },
      {
        protocol: "https",
        hostname: "contents.mediadecathlon.com"
      },
      {
        protocol: "https",
        hostname: "contents.mediadecathlon.com"
      },
      {
        protocol: "https",
        hostname: "contents.mediadecathlon.com"
      },

      {
        protocol: "https",
        hostname: "contents.mediadecathlon.com"
      },

      
    ],
  }
};

export default nextConfig;
