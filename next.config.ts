import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Avoid incorrect monorepo root inference when multiple lockfiles exist on the machine.
  turbopack: {
    root: process.cwd(),
  },
};

export default nextConfig;
