// /** @type {import('next').NextConfig} */
// const nextConfig = {};
//
// export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'standalone',
    images: {
        unoptimized: true,
        domains: ['bn-demo.goflare.io']
    },
}

export default nextConfig