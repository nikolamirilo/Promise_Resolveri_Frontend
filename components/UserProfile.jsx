"use client"
import { useUser } from "@clerk/nextjs"
import Link from "next/link"
import { useState } from "react"
import { BsChatRightDotsFill, BsPersonFillCheck } from "react-icons/bs"
import { FaStar } from "react-icons/fa"
import { FaPersonWalkingLuggage, FaPhone } from "react-icons/fa6"
import { GrLicense } from "react-icons/gr"
import { IoLogoWhatsapp } from "react-icons/io"
import { MdVerifiedUser } from "react-icons/md"
import Reviews from "./Reviews"
import OfferCard from "./cards/OfferCard"
import Button from "./common/Button"
import Modal from "./common/Modal"

export default function UserProfile({
  fullName,
  uid,
  image,
  email,
  isGuide,
  isVerified,
  license,
  languages,
  offers,
  country,
  description,
  phoneNumber,
  age,
  reviews,
  reviewsGrade,
}) {
  const [open, setOpen] = useState(false)
  const [totalStars, setTotalStars] = useState(5)
  const [hover, setHover] = useState(null)

  const { user } = useUser()

  const handleClick = () => {
    setOpen(!open)
  }
  console.log(reviewsGrade)

  return (
    <div className="relative bg-gray-900 bg-cover py-4 font-sans leading-normal tracking-wider text-emerald-600 antialiased">
      {open && (
        <div className="relative z-40 bg-black">
          <Modal
            title="Rate and Feedback"
            mainText="Leave your feedback and express your feelings with rating this guide!"
            guideUid={uid}
            uid={user?.id}
            closeModal={handleClick}
            className="left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          />
        </div>
      )}
      <div id="profile" className="relative z-30 mx-auto  w-4/5 rounded-lg p-4 shadow-2xl">
        {/* <!-- Above --> */}
        <div className="z-20 flex flex-col items-center justify-center gap-10 lg:flex-row">
          <div
            className="block h-48 w-48 rounded-full bg-cover bg-center shadow-xl"
            style={{ backgroundImage: `url(${image})` }}></div>
          <div className="flex flex-col items-start">
            <h1 className="text-3xl font-bold text-white">{fullName}</h1>
            <div className="text-white">Age: {age}y</div>
            <p className="flex items-center justify-center pt-4 text-base text-white lg:justify-start">
              <svg
                className="h-4 fill-current pr-4 text-white"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20">
                <path d="M9 12H1v6a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-6h-8v2H9v-2zm0-1H0V5c0-1.1.9-2 2-2h4V2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1h4a2 2 0 0 1 2 2v6h-9V9H9v2zm3-8V2H8v1h4z" />
              </svg>
              {email}
            </p>
            <p className="flex items-center justify-center pt-2 text-xs text-white lg:justify-start lg:text-sm">
              <svg
                className="h-4 fill-current pr-4 text-white"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20">
                <path d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm7.75-8a8.01 8.01 0 0 0 0-4h-3.82a28.81 28.81 0 0 1 0 4h3.82zm-.82 2h-3.22a14.44 14.44 0 0 1-.95 3.51A8.03 8.03 0 0 0 16.93 14zm-8.85-2h3.84a24.61 24.61 0 0 0 0-4H8.08a24.61 24.61 0 0 0 0 4zm.25 2c.41 2.4 1.13 4 1.67 4s1.26-1.6 1.67-4H8.33zm-6.08-2h3.82a28.81 28.81 0 0 1 0-4H2.25a8.01 8.01 0 0 0 0 4zm.82 2a8.03 8.03 0 0 0 4.17 3.51c-.42-.96-.74-2.16-.95-3.51H3.07zm13.86-8a8.03 8.03 0 0 0-4.17-3.51c.42.96.74 2.16.95 3.51h3.22zm-8.6 0h3.34c-.41-2.4-1.13-4-1.67-4S8.74 3.6 8.33 6zM3.07 6h3.22c.2-1.35.53-2.55.95-3.51A8.03 8.03 0 0 0 3.07 6z" />
              </svg>
              {country}
            </p>
            <div className="flex gap-3 pt-3 text-white">
              <FaPhone />
              <h2 className="flex items-center justify-center text-xs text-white lg:justify-start lg:text-sm">
                {phoneNumber}
              </h2>
            </div>
            {/* review */}
            <div className="flex items-center gap-2">
              <div className="mt-2 flex flex-row-reverse">
                {[...Array(totalStars)].map((star, index) => {
                  return (
                    <label key={index}>
                      <input
                        type="radio"
                        name="rating"
                        value={reviewsGrade}
                        className="z-50 hidden"
                      />
                      <span
                        className="star z-50"
                        style={{
                          color: reviewsGrade < index - 1 ? "#ffc107" : "#e4e5e9",
                        }}>
                        <FaStar size={25} />
                      </span>
                    </label>
                  )
                })}
              </div>
              {reviewsGrade && (
                <h2 className="h-8 w-fit rounded-md bg-slate-600 px-2 text-center align-middle text-xl text-white">
                  {reviewsGrade}
                </h2>
              )}
            </div>
          </div>
          <p className="w-60 pt-8 text-center text-sm text-white">{description}</p>
        </div>
        <div className="mx-auto w-4/5 border-b-2 border-white pt-3 opacity-25"></div>
        <div className="flex items-center justify-evenly">
          <div className="flex flex-col items-center gap-2">
            <div className="my-2 flex flex-col items-center">
              <h2 className="text-xl text-white">Languages:</h2>
              {languages.map((language) => (
                <div className="text-white">{language}</div>
              ))}
            </div>
            <div className="flex items-center gap-4">
              <Link
                className="duration-100 ease-in-out hover:scale-110 hover:text-white"
                href={`whatsapp://send?abid=${phoneNumber}&text=Hello!`}>
                <IoLogoWhatsapp size={50} />
              </Link>
              <Link
                className="text-white duration-100 ease-in-out hover:scale-110 hover:text-white"
                href={`/socket/chat/${uid}`}>
                <div className="mt-3 flex flex-col items-center">
                  <BsChatRightDotsFill size={40} />
                </div>
              </Link>
              <div className="flex flex-col items-center justify-center gap-3">
                <Button title="Review & rate" onClick={handleClick} />
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center gap-3 text-white">
            {isGuide && isVerified && (
              <>
                <div className="flex items-center gap-2">
                  <BsPersonFillCheck size={30} />
                  <h2 className="text-white">Guide</h2>
                </div>
                <div className="flex items-center gap-2">
                  <MdVerifiedUser size={30} color="green" />
                  <h2 className="text-white">Verified</h2>
                </div>
              </>
            )}
            {isGuide && !isVerified && (
              <div className="flex items-center gap-2">
                <BsPersonFillCheck size={30} />
                <h2 className="text-white">Guide</h2>
              </div>
            )}
            {isGuide && license && (
              <div className="flex items-center gap-2">
                <GrLicense size={30} />
                <h2 className="text-white">License: {license}</h2>
              </div>
            )}
            {!isGuide && (
              <div className="flex items-center gap-2">
                <FaPersonWalkingLuggage size={30} />
                <h2 className="text-white">Guides</h2>
              </div>
            )}
          </div>
        </div>
        {isGuide && (
          <div className="my-5 flex w-full flex-col items-center justify-center gap-6">
            <div className="mt-5 flex w-full items-center justify-center">
              <h2 className="text-3xl font-bold text-white">Offers from {fullName}</h2>
            </div>
            {offers?.length > 0 &&
              offers.map((offer, idx) => {
                return (
                  <OfferCard
                    key={idx}
                    title={offer?.title}
                    id={offer?.id}
                    image={offer?.images[0]}
                    profileImage={image}
                    priceOnline={offer?.onlineFee}
                    priceLive={offer?.liveFee}
                    fullName={fullName}
                    location={offer?.location}
                  />
                )
              })}
          </div>
        )}
        {reviews && <Reviews reviews={reviews} />}
      </div>
    </div>
  )
}
