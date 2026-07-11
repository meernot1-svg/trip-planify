import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
  allowedDevOrigins: ["*.space-z.ai"],
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "sfile.chatglm.cn" },
      { protocol: "https", hostname: "z-cdn.chatglm.cn" },
      { protocol: "https", hostname: "upload.wikimedia.org" },
    ],
  },
};

export default nextConfig;
