import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';
const withNextIntl = createNextIntlPlugin('./i18n/request.ts');

const nextConfig: NextConfig = {

    images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'gp2025.runasp.net',
        port: '',
        pathname: '/service/**',
      },
       {
      protocol: 'https',
      hostname: 'gp2025.runasp.net',
      port: '',
      pathname: '/Jobs/**',
    }
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
export default withNextIntl(nextConfig);