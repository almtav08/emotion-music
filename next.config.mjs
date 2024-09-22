/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    if (config.target === "web") config.externals = ["fs", "os", "util"];
    return config;
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "f4.bcbits.com",
      },
      {
        protocol: "https",
        hostname: "vinyl.lofirecords.com",
      },
      {
        protocol: "https",
        hostname: "f4.bcbits.com",
      },
      {
        protocol: "https",
        hostname: "f4.bcbits.com",
      },
    ],
  },
};

export default nextConfig;
