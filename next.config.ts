import type { NextConfig } from "next";

const nextConfig: NextConfig = {

//do not delete
  eslint:{
    ignoreDuringBuilds: true,
  },


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

      {
        protocol: "https",
        hostname: "contents.mediadecathlon.com"
      },
      
      {
        protocol: "https",
        hostname: "i5.walmartimages.com"
      },

      {
        protocol: "https",
        hostname: "vader-prod.s3.amazonaws.com"
      },

      {
        protocol: "https",
        hostname: "img.drz.lazcdn.com"
      },
      
      {
        protocol: "https",
        hostname: "img.freepik.com "
      },
      {
        protocol: "https",
        hostname: "encrypted-tbn0.gstatic.com"
      },
      {
        protocol: "https",
        hostname: "underarmour.scene7.com"
      },

      {
        protocol: "https",
        hostname: "i5.walmartimages.com"
      },
      {
        protocol: "https",
        hostname: "images-na.ssl-images-amazon.com"
      },
      {
        protocol: "https",
        hostname: "encrypted-tbn3.gstatic.com"
      },
      {
        protocol: "https",
        hostname: "static.wixstatic.com"
      },
      {
        protocol: "https",
        hostname: "c4.iggcdn.com"
      },
      {
        protocol: "https",
        hostname: "encrypted-tbn2.gstatic.com"
      },
      {
        protocol: "https",
        hostname: "encrypted-tbn0.gstatic.com"
      },
      {
        protocol: "https",
        hostname: "img.freepik.com"
      },

      {
        protocol: "https",
        hostname: "transferit.com.ph"
      },

      {
        protocol: "https",
        hostname: "images-cdn.ubuy.com.ph"
      },
      {
        hostname: "www.everythingtrackandfield.com"
      },

      {
        protocol: "https",
        hostname: "fanatics.frgimages.com"
      },

      {
        protocol: "https",
        hostname: "marksandspencer.com.ph"
      },

      {
        protocol: "https",
        hostname: "images-cdn.ubuy.com.ph"
      },

      {
        protocol: "https",
        hostname: "assets.adidas.com"
      },

      {
        protocol: "https",
        hostname: "wunderarmour.scene7.com"
      },
      // {
      //   protocol: "https",
      //   hostname: " "
      // },

      
      

     

      

      

      
    ],
  }
};

export default nextConfig;
