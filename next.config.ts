import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {},
  serverExternalPackages: ['sequelize', 'pino', 'pino-pretty'],
};

export default nextConfig;