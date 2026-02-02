import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["*"],
  // Disable Turbopack for development to fix hydration/module errors
  // If you prefer Turbopack, we can try to fix the underlying issue instead
  transpilePackages: ["lucide-react"],
};

export default nextConfig;
