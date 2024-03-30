"use client"
import Image from "next/image"
import Link from "next/link"

const CategoryCard = ({ title, link, image }) => {
  return (
    <Link
      href={link}
      className="relative h-64 w-full max-w-xs transform overflow-hidden rounded border border-blue-950 bg-cover bg-center text-2xl text-white shadow-2xl shadow-blue-950 transition-all duration-150 ease-in hover:scale-[1.04] hover:text-4xl md:h-96 ">
      <Image src={image} layout="fill" className="object-cover object-center" alt={title} />
      <div className="shadow-text absolute bottom-0 left-0 flex h-full w-full items-center justify-center bg-black/50 px-6 py-4">
        <div className="relative top-24 mb-2 w-full text-center font-bold uppercase">{title}</div>
      </div>
    </Link>
  )
}
export default CategoryCard
