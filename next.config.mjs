/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{
      protocol: 'https',
      hostname: 'cdn.soccersapi.com'
    }, {
      protocol: 'https',
      hostname: 'assets.goal.com'
    }]
  },
};

export default nextConfig;
