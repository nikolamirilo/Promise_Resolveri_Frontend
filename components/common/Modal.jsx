"use client"
import { fetchData } from "@/helpers/client"
import { useRef, useState } from "react"
import { FaStar } from "react-icons/fa6"
import TextArea from "./TextArea"

const Modal = ({ title, mainText, description, guideUid, uid, closeModal, className }) => {
  const [rating, setRating] = useState(null)
  const [hover, setHover] = useState(null)
  const [totalStars, setTotalStars] = useState(5)
  const textAreaRef = useRef(null)
  // mozda bi trebao i neki ref za star rating

  async function handleSubmit(e) {
    e.preventDefault()
    const uploadData = {
      guideUid,
      clientUid: uid,
      rating: rating,
      description: textAreaRef.current.value,
    }
    console.log(uploadData)
    if (uploadData) {
      const res = await fetchData(`/api/Review`, {
        method: "POST",
        body: JSON.stringify(uploadData),
      })
      closeModal()
      console.log(res)
    }
  }
  return (
    <div className={`fixed z-50 max-h-full w-[90%] max-w-md text-xs md:text-xl ${className}`}>
      {/* <!-- Modal content --> */}
      <div className="relative rounded-lg bg-white shadow dark:bg-gray-700">
        {/* <!-- Modal header --> */}
        <div className="flex items-center justify-between rounded-t border-b p-4 md:p-5 dark:border-gray-600">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{title}</h3>
          <button
            onClick={closeModal}
            type="button"
            className="ms-auto inline-flex h-8 w-8 items-center justify-center rounded-lg bg-transparent text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
            data-modal-hide="default-modal">
            <svg
              className="h-3 w-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14">
              <path
                stroke="currentColor"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
            <span className="sr-only">Close modal</span>
          </button>
        </div>
        {/* <!-- Modal body --> */}
        <div className="space-y-4 p-4 md:p-5">
          <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">{mainText}</p>
          <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
            {description}
          </p>
          <div className="flex flex-col items-center">
            <div className="z-50 flex">
              {[...Array(totalStars)].map((star, index) => {
                const currentRating = index + 1

                return (
                  <label key={index}>
                    <input
                      type="radio"
                      name="rating"
                      value={currentRating}
                      onChange={() => setRating(currentRating)}
                      className="z-50 hidden"
                    />
                    <span
                      className="star z-50"
                      style={{
                        color: currentRating <= (hover || rating) ? "#ffc107" : "#e4e5e9",
                      }}
                      onMouseEnter={() => setHover(currentRating)}
                      onMouseLeave={() => setHover(null)}>
                      <FaStar size={40} />
                    </span>
                  </label>
                )
              })}
            </div>
          </div>
          <TextArea
            isRequired={true}
            name="textArea"
            label="Write your feedback"
            textAreaRef={textAreaRef}
          />
        </div>
        {/* <!-- Modal footer --> */}
        <div className="flex items-center rounded-b border-t border-gray-200 p-4 md:p-5 dark:border-gray-600">
          <button
            data-modal-hide="default-modal"
            onClick={(e) => {
              handleSubmit(e)
            }}
            type="button"
            className="rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Send
          </button>
        </div>
      </div>
    </div>
  )
}

export default Modal
