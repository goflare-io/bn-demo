// /** @type {import('next').NextConfig} */
// const nextConfig = {};
//
// export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        unoptimized: true,
        domains: ['bn-demo.goflare.io']
    },
    trailingSlash: true,
}

export default nextConfig