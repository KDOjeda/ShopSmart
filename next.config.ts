import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* insert image domain here */
  images:{
    remotePatterns: [
      {
        protocol: "https",
        hostname: "contents.mediadecathlon.com"
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
