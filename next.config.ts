import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  turbopack: { root: process.cwd() },
  outputFileTracingRoot: process.cwd(),
  experimental: { workerThreads: true, useTypeScriptCli: false, cpus: 1 },
};

export default nextConfig;
