/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = {
  webpack: (
    config,
    { buildId, dev, isServer, defaultLoaders, nextRuntime, webpack }
    ) => {
    config.module.rules.push({
      test: /\.html$/i,
      use: [
        {
          loader: "html-loader",
        },
      ],
    })

    return config
  },
}
