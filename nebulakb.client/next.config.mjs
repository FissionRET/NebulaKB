/** @type {import('next').NextConfig} */

import dotenv from 'dotenv';

dotenv.config();

const nextConfig = {
    reactStrictMode: true, swcMinify: true, experimental: {
        turbo: {
            resolveExtensions: [
                '.mdx',
                '.tsx',
                '.ts',
                '.jsx',
                '.js',
                '.mjs',
                '.json',
            ],
        },
    },
};

export default nextConfig;
