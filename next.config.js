/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    domains: ["http://localhost:5000", "rizkyreza.ap-1.evennode.com"],
    // formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        hostname: "localhost",
        pathname: "**",
        port: "5000",
        protocol: "http",
      },
      // {
      //   hostname: "rizkyreza.ap-1.evennode.com",
      //   pathname: "**",
      //   port: "5000",
      //   protocol: "http",
      // },
    ],
  },
  crossOrigin: "anonymous",
  headers: [
    { key: "Access-Control-Allow-Credentials", value: "true" },
    { key: "Access-Control-Allow-Origin", value: "*" },
    {
      key: "Access-Control-Allow-Methods",
      value: "GET,OPTIONS,PATCH,DELETE,POST,PUT",
    },
    {
      key: "Access-Control-Allow-Headers",
      value: "X-CSRF-Token,X-Requested-With,content-type",
    },
  ],
  async headers() {
    return [
      {
        source: "/api/:path*", // Pola pencocokan URL untuk API endpoint
        headers: [
          { key: "Custom-Header", value: "Custom Value" }, // Menambahkan header kustom
          { key: "Access-Control-Allow-Origin", value: "*" }, // Contoh menambahkan header CORS
        ],
      },
    ];
  },
};

module.exports = nextConfig;
