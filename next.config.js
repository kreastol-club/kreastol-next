const { version } = require('./package.json');

/** @type {import('next').NextConfig} */
const nextConfig = {
    publicRuntimeConfig: {
        version
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'files.stripe.com',
            },
        ],
    },
}

module.exports = nextConfig
