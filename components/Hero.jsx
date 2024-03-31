"use client"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import Button from "./common/Button"

export default function Hero() {
  const [open, setOpen] = useState(true)
  return (
    <div className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden bg-cover bg-center px-5">
      <div className="absolute z-20 h-full w-full bg-black bg-opacity-60"></div>
      <Image
        fill
        src="https://nariatravel.gr/wp-content/uploads/2017/09/evening-travel-wallpaper-hd-download-free-background-images-amazing-high-definition-4k-2560x1600.jpg"
        alt="hero"
        className="z-10 object-cover object-center"
      />
      <div className="z-20 flex w-full flex-col items-center justify-center gap-5">
        <h1 className="relative text-center text-3xl font-bold text-white md:text-7xl lg:text-8xl">
          AI Explorer Companion
        </h1>
        <p className="text-md text-white md:text-3xl">Make dreams possible!</p>
        <Link href="/offers">
          <Button title="Start" />
        </Link>
      </div>
    </div>
  )
}
