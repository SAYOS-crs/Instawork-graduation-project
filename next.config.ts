import type { NextConfig } from "next";

const nextConfig: NextConfig = {

  //  images: {
  //   remotePatterns: [
  //     {
  //       protocol: 'https',
  //       hostname: '',
  //       port: '',
  //       pathname: '',
  //       search: '',
  //     },
  //   ],
  // },

  /* config options here */
     async redirects() {
    return [
      {
        source: '/Dashbord',
        destination: '/Dashbord/Profile',
        permanent: false,
      }
    ]
  },
  
  };

export default nextConfig;
