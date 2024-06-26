/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{
      protocol: 'https',
      hostname: 'cdn.soccersapi.com'
    }, {
      protocol: 'https',
      hostname: 'assets.goal.com'
    },
    {
      protocol: 'https',
      hostname: 'crests.football-data.org'
    },
    {
      protocol: 'https',
      hostname: 'serpapi.com'
    },
    {
      protocol:
        'https',
      hostname: 'dimg-pa.googleapis.com'
    },
    {
      protocol: 'https',
      hostname: 'ssl.gstatic.com'
    }, {
      protocol: 'https',
      hostname: 'encrypted-tbn0.gstatic.com'
    }
    ]
  },
};

export default nextConfig;
