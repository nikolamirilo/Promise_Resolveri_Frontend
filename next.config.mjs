/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { hostname: "source.unsplash.com" },
      { hostname: "img.clerk.com" },
      { hostname: "res.cloudinary.com" },
      { hostname: "www.google.com" },
      { hostname: "unsplash.com" },
      { hostname: "th.bing.com" },
      { hostname: "i.pinimg.com" },
      { hostname: "cdn3.iconfinder.com" },
    ],
  },
  swcMinify: true,
}

export default nextConfig
