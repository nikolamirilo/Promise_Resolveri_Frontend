import Image from "next/image"
import { FaXmark } from "react-icons/fa6"
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from "react-icons/md"

const ImageModal = ({ closeModal, handlePreviousSlide, handleNextSlide, image }) => {
  return (
    <div className="fixed left-0 top-0 z-50 flex h-screen w-screen items-center justify-center bg-black/80">
      <div className="relative h-[50vh] w-[98vw] bg-cover bg-center md:h-[90vh] md:w-[60vw]">
        <button className="absolute right-2 top-2 z-20 md:right-5 md:top-5" onClick={closeModal}>
          <FaXmark size={30} color="white" className="hover:fill-violet-700" />
        </button>
        <Image
          className="rounded-md object-cover object-center"
          src={image}
          fill
          alt="Slider picture"
          loading="eager"
        />
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
      </div>
    </div>
  )
}

export default ImageModal
