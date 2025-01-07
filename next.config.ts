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
        remotePatterns: [
            {
                protocol: "https",
                hostname: "cdn.buymeacoffee.com"
            }
        ]
    }
};

const outputConfig = withPlausibleProxy()(nextConfig);

export default outputConfig;
