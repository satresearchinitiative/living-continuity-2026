/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      { source: '/living-continuity', destination: '/', permanent: true },
    ];
  },
  productionBrowserSourceMaps: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  compress: true,
  poweredByHeader: false,
  generateEtags: true,
  turbopack: {},
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.optimization = {
        ...config.optimization,
        moduleIds: 'deterministic',
        runtimeChunk: 'single',
        splitChunks: {
          chunks: 'all',
          cacheGroups: {
            default: false,
            vendors: false,
            vendor: {
              name: 'vendor',
              chunks: 'all',
              test: /node_modules/,
              priority: 20,
            },
            common: {
              name: 'common',
              minChunks: 2,
              chunks: 'all',
              priority: 10,
              reuseExistingChunk: true,
              enforce: true,
            },
            three: {
              test: /[\\/]node_modules[\\/](three|@react-three)[\\/]/,
              name: 'three',
              chunks: 'all',
              priority: 30,
            },
            react: {
              test: /[\\/]node_modules[\\/](react|react-dom|scheduler)[\\/]/,
              name: 'react',
              chunks: 'all',
              priority: 30,
            },
          },
        },
      };
    }
    return config;
  },
};

module.exports = nextConfig;
  