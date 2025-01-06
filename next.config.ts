import type { NextConfig } from "next";
import { withPlausibleProxy } from "next-plausible";

const nextConfig: NextConfig = {
    /* config options here */
    experimental: {
        reactCompiler: true,
    },
    eslint: {
        ignoreDuringBuilds: true,
    },
    typescript: {
        ignoreBuildErrors: true,
    },
    images: {
        domains: [
            "api.microlink.io", // Microlink Image Preview
        ],
    },
};

const outputConfig = withPlausibleProxy()(nextConfig);

export default outputConfig;
