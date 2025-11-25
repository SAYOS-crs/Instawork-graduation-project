import type { NextConfig } from "next";

const nextConfig: NextConfig = {

    images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'gp2025.runasp.net',
        port: '',
        pathname: '/service/**',
      },
    ],
  },

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
