const { version } = require('./package.json');

/** @type {import('next').NextConfig} */
const nextConfig = {
    publicRuntimeConfig: {
        version
    }
}

module.exports = nextConfig
