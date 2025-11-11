import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    
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
