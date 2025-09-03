import type { NextConfig } from "next";
 import { setupDevPlatform } from '@cloudflare/next-on-pages/next-dev';

const nextConfig: NextConfig = {
  experimental: {},
  serverExternalPackages: ['sequelize', 'pino', 'pino-pretty'],
};

if (process.env.NODE_ENV === 'development') {
  await setupDevPlatform();
}

export default nextConfig;