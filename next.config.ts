/** @type {import('next').NextConfig} */
const nextConfig = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  webpack: (config: any) => {
    config.module.rules.push({
      test: /\.js.map$/,
      use: "null-loader",
    });
    return config;
  },
};

module.exports = nextConfig;



