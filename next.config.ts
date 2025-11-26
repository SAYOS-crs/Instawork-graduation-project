import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';
const withNextIntl = createNextIntlPlugin('./i18n/request.ts');

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
export default withNextIntl(nextConfig);