"use client"
import Link from "next/link"
import { useState } from "react"
import { SparklesCore } from "./ui/sparkles"

export default function Hero() {
  const [open, setOpen] = useState(true)
  return (
    <div className="relative flex h-[40rem] min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-black px-5">
      {/* <Backdrop open={open} onClose={() => setOpen(false)}>
        <Modal />
      </Backdrop> */}
      <h1 className="relative text-center text-3xl font-bold text-white md:text-7xl lg:text-9xl">
        FON Hackathon 2024
      </h1>
      <p className="py-2 text-center text-xl text-white sm:text-2xl md:text-3xl">
        Make dreams possible!
      </p>

      <div className="relative flex h-40 w-[40rem] flex-col items-center justify-center">
        {/* Gradients */}
        <div className="absolute inset-x-20 top-0 h-[2px] w-3/4 bg-gradient-to-r from-transparent via-indigo-500 to-transparent blur-sm" />
        <div className="absolute inset-x-20 top-0 h-px w-3/4 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
        <div className="absolute inset-x-60 top-0 h-[5px] w-1/4 bg-gradient-to-r from-transparent via-sky-500 to-transparent blur-sm" />
        <div className="absolute inset-x-60 top-0 h-px w-1/4 bg-gradient-to-r from-transparent via-sky-500 to-transparent" />

        {/* Core component */}
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={1200}
          className="h-full w-full"
          particleColor="#FFFFFF"
        />
        <Link href="/categories">
          <button className="hover:bg-black-100 relative bottom-20 z-10 mx-auto w-[12rem] rounded border border-gray-400 bg-white px-4 py-2 text-xl font-semibold text-gray-800 shadow">
            Start journey
          </button>
        </Link>
        <div className="absolute inset-0 h-full w-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
      </div>
    </div>
  )
}
