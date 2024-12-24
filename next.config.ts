import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async headers() {
    return [
      {
        source: '/api/:path*',
        headers: [
          {
            key: 'Access-Control-Allow-Credentials',
            value: 'true',
          },
          {
            key: 'Access-Control-Allow-Headers',
            value: '*',
          },
          {
            key: 'Access-Control-Allow-Methods',
            value: '*',
          },
          {
            key: 'Access-Control-Expose-Headers',
            value: '*',
          },
          {
            key: 'Access-Control-Allow-Origin',
            value: '*'
          }
        ],
      }
    ]
  },
};

export default nextConfig;
