export default function manifest() {
  return {
    name: "FON Hakathon 2024",
    short_name: "FON Hackathon 2024",
    description: "Advanced AI based web app",
    theme_color: "#09090B",
    background_color: "#09090B",
    start_url: "/",
    display: "standalone",
    orientation: "portrait",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  }
}
