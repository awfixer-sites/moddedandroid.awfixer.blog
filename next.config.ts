import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  //allowedDevOrigins: ['192.168.1.243', 'localhost'],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "assets.awfixer.com",
      },
      {
        protocol: "https",
        hostname: "github.com",
      },
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
      },
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
      },
    ],
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "Content-Security-Policy",
            value: "img-src 'self' https://assets.awfixer.com data:;",
          },
          {
            key: "Content-Security-Policy",
            value: "img-src 'self' https://github.com data:;",
          },
          {
            key: "Content-Security-Policy",
            value:
              "img-src 'self' https://avatars.githubusercontent.com data:;",
          },
          {
            key: "Content-Security-Policy",
            value: "img-src 'self' https://raw.githubusercontent.com data:;",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
