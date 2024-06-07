/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.map$/,
      loader: 'ignore-loader',
    });
    return config;
  },
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
