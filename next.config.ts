import type { NextConfig } from "next";

/** @type {import('next').NextConfig} */
const config: NextConfig = {
  eslint: {
    // Disable ESLint during production builds for now
    ignoreDuringBuilds: true,
  },
};

export default config;
