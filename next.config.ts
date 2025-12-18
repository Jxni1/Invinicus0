import type { NextConfig } from "next";

const nextConfig = {
  output: "export",
  images: {
    unoptimized: true, // disable image optimization
  },
  reactCompiler: true,
};

export default nextConfig;
