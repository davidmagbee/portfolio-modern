/** @type {import('next').NextConfig} */
const nextConfig = {
    poweredByHeader: true,
    images: {
        remotePatterns: [
        {
            protocol: 'https',
            hostname: 'cdn.sanity.io',
            port: '',
            pathname: '/**',
        },
        ],
    },
};

module.exports = nextConfig;
