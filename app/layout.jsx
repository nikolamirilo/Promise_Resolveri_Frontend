import ChatBot from "@/components/ChatBot"
import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import { AI } from "@/components/ai/actions"
import { NavigationEvents } from "@/components/common/NavigationEvents"
import { ClerkProvider } from "@clerk/nextjs"
import { Cloudinary } from "@cloudinary/url-gen"
import { Mulish } from "next/font/google"
import { Suspense } from "react"
import "./globals.css"

const mulish = Mulish({ subsets: ["latin"] })

export const metadata = {
  title: "FON Hackathon",
}

export default async function RootLayout({ children }) {
  const cld = new Cloudinary({
    cloud: { cloudName: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME },
  })
  return (
    <ClerkProvider>
      <AI>
        <html lang="en">
          <body className={`${mulish.className} relative h-fit min-h-screen bg-gray-900 `}>
            <Navbar />
            <div className="z-30 min-h-[80vh] pt-16">{children}</div>
            <ChatBot />
            <Footer />
            <Suspense fallback={null}>
              <NavigationEvents />
            </Suspense>
          </body>
        </html>
      </AI>
    </ClerkProvider>
  )
}
