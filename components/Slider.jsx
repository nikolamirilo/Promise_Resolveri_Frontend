"use client"
import Image from "next/image"
import { useState } from "react"
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from "react-icons/md"
import { RiFullscreenFill } from "react-icons/ri"
import ImageModal from "./modals/ImageModal"

const Slider = ({ images }) => {
  const [index, setIndex] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false)
  function handleNextSlide() {
    if (index == images?.length - 1) {
      setIndex(0)
    } else {
      setIndex(index + 1)
    }
  }
  function handlePreviousSlide() {
    if (index == 0) {
      setIndex(images?.length - 1)
    } else {
      setIndex(index - 1)
    }
  }
  if (images)
    return (
      <div className="relative flex flex-col items-center justify-center">
        {isModalOpen ? (
          <ImageModal
            image={images[index]}
            closeModal={() => {
              setIsModalOpen(false)
            }}
            handleNextSlide={handleNextSlide}
            handlePreviousSlide={handlePreviousSlide}
          />
        ) : null}
        <div className="relative h-full w-fit" data-carousel="static">
          <div className="relative w-fit overflow-hidden rounded-lg">
            <div className="h-fit w-fit duration-700 ease-in-out" data-carousel-item>
              <div
                className="relative h-[40vh] w-[90vw] cursor-pointer md:h-[65vh] md:w-[35vw]"
                onClick={() => {
                  setIsModalOpen(true)
                }}>
                <Image
                  src={images[index]}
                  fill
                  className="object-cover object-center"
                  alt="Slider picture"
                  loading="eager"
                />
              </div>
            </div>
          </div>
          <button
            type="button"
            className="group absolute left-1 top-[45%] z-20 flex h-fit cursor-pointer items-center justify-center focus:outline-none"
            data-carousel-prev
            onClick={handlePreviousSlide}>
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-violet-700 outline-none">
              <MdOutlineKeyboardArrowLeft size={40} color="white" />
            </span>
          </button>
          <button
            type="button"
            className="group absolute right-1 top-[45%] z-20 flex h-fit cursor-pointer items-center justify-center focus:outline-none"
            data-carousel-next
            onClick={handleNextSlide}>
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-violet-700 outline-none">
              <MdOutlineKeyboardArrowRight size={40} color="white" />
            </span>
          </button>
          <button
            type="button"
            className="group absolute -bottom-[42%] right-5 z-10 flex h-full cursor-pointer items-center justify-center focus:outline-none"
            onClick={() => {
              setIsModalOpen(true)
            }}>
            <span className="inline-flex items-center justify-center">
              <RiFullscreenFill size={35} color="white" className="hover:fill-violet-700" />
            </span>
          </button>
        </div>
        <div className="mt-3 flex w-full flex-row flex-wrap items-center justify-start gap-2 md:justify-center">
          {images
            ? images?.map((image, idx) => {
                return (
                  <div
                    key={idx}
                    className={`relative h-16 w-20 cursor-pointer ${
                      image == images[index] ? "border-2 border-violet-700" : ""
                    }`}
                    onClick={() => {
                      setIndex(idx)
                    }}>
                    <Image
                      src={image}
                      className="object-cover object-center"
                      loading="lazy"
                      alt="Product"
                      fill
                    />
                  </div>
                )
              })
            : null}
        </div>
      </div>
    )
}

export default Slider
