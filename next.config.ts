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
        hostname: "img.freepik.com/premium-photo"
      },
      {
        protocol: "https",
        hostname: "flowbite.s3.amazonaws.com"
      },
      {
        protocol: "https",
        hostname: "www.w3.org"
      },

      {
        protocol: "https",
        hostname: "decathlon.ae"
      },

      
    ],
  }
};

export default nextConfig;
