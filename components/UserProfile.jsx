import { BsPersonFillCheck } from "react-icons/bs"
import { FaPersonWalkingLuggage, FaPhone } from "react-icons/fa6"
import { GrLicense } from "react-icons/gr"
import { IoLogoWhatsapp } from "react-icons/io"
import { MdVerifiedUser } from "react-icons/md"

export default function UserProfile({
  fullName,
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
  reviewsGrade,
  age,
}) {
  return (
    <div
      className="bg-cover py-4 font-sans leading-normal tracking-wider text-emerald-600 antialiased"
      style={{ backgroundImage: `url('https://source.unsplash.com/1L71sPT5XKc')` }}>
      {/* <!--Main Col--> */}
      <div id="profile" className="mx-auto w-4/5 rounded-lg bg-white p-4 opacity-75 shadow-2xl">
        {/* <!-- Above --> */}
        <div className="flex flex-col items-center justify-start gap-10 sm:flex-row">
          <div
            className="z-50 block h-48 w-48 rounded-full bg-cover bg-center shadow-xl"
            style={{ backgroundImage: `url(${image})` }}></div>
          <div className="flex flex-col items-start">
            <h1 className="text-3xl font-bold text-violet-700">{fullName}</h1>
            <div className="text-violet-700">Age: {age}y</div>
            <p className="flex items-center justify-center pt-4 text-base text-black lg:justify-start">
              <svg
                className="h-4 fill-current pr-4 text-violet-700"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20">
                <path d="M9 12H1v6a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-6h-8v2H9v-2zm0-1H0V5c0-1.1.9-2 2-2h4V2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1h4a2 2 0 0 1 2 2v6h-9V9H9v2zm3-8V2H8v1h4z" />
              </svg>
              {email}
            </p>
            <p className="flex items-center justify-center pt-2 text-xs text-black lg:justify-start lg:text-sm">
              <svg
                className="h-4 fill-current pr-4 text-violet-700"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20">
                <path d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm7.75-8a8.01 8.01 0 0 0 0-4h-3.82a28.81 28.81 0 0 1 0 4h3.82zm-.82 2h-3.22a14.44 14.44 0 0 1-.95 3.51A8.03 8.03 0 0 0 16.93 14zm-8.85-2h3.84a24.61 24.61 0 0 0 0-4H8.08a24.61 24.61 0 0 0 0 4zm.25 2c.41 2.4 1.13 4 1.67 4s1.26-1.6 1.67-4H8.33zm-6.08-2h3.82a28.81 28.81 0 0 1 0-4H2.25a8.01 8.01 0 0 0 0 4zm.82 2a8.03 8.03 0 0 0 4.17 3.51c-.42-.96-.74-2.16-.95-3.51H3.07zm13.86-8a8.03 8.03 0 0 0-4.17-3.51c.42.96.74 2.16.95 3.51h3.22zm-8.6 0h3.34c-.41-2.4-1.13-4-1.67-4S8.74 3.6 8.33 6zM3.07 6h3.22c.2-1.35.53-2.55.95-3.51A8.03 8.03 0 0 0 3.07 6z" />
              </svg>
              {country}
            </p>
            <div className="flex gap-3 pt-3 text-violet-700">
              <FaPhone />
              <h2 className="flex items-center justify-center text-xs text-black lg:justify-start lg:text-sm">
                {phoneNumber}
              </h2>
            </div>
            {/* review */}
            <div className="my-2 flex items-center justify-center">
              <div class="flex items-center">
                <svg
                  class="h-4 w-4 text-yellow-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20">
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg
                  class="h-4 w-4 text-yellow-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20">
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg
                  class="h-4 w-4 text-yellow-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20">
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg
                  class="h-4 w-4 text-yellow-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20">
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg
                  class="h-4 w-4 text-gray-200 dark:text-gray-600"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20">
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
              </div>
              <span class="ms-3 rounded bg-blue-100 px-2.5 py-0.5 text-xs font-semibold text-blue-800 dark:bg-blue-200 dark:text-blue-800">
                4.0
              </span>
            </div>
          </div>
          <p className="w-60 pt-8 text-center text-sm text-black">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci quibusdam corporis,
            illum sed magni voluptate velit harum veritatis eius, voluptas labore quia dolorem sit
            rem beatae qui vero unde necessitatibus temporibus, tenetur modi. Ea at dolorum natus
            omnis, fuga sint.
          </p>
        </div>
        <div className="mx-auto w-4/5 border-b-2 border-violet-700 pt-3 opacity-25"></div>

        <div className="flex items-center justify-evenly">
          <div className="flex flex-col items-center gap-2">
            <div className="mb-2">
              <h2 className="text-xl text-violet-700">Languages:</h2>
              {languages.map((language) => (
                <div className="text-black">{language}</div>
              ))}
            </div>
            <IoLogoWhatsapp size={50} />
          </div>
          <div className="flex flex-col items-center gap-3 text-violet-700">
            {isGuide && isVerified && (
              <>
                <div className="flex items-center gap-2">
                  <BsPersonFillCheck size={30} />
                  <h2 className="text-violet-700">Guide</h2>
                </div>
                <div className="flex items-center gap-2">
                  <MdVerifiedUser size={30} />
                  <h2 className="text-violet-700">Verified</h2>
                </div>
              </>
            )}
            {isGuide && !isVerified && (
              <div className="flex items-center gap-2">
                <BsPersonFillCheck size={30} />
                <h2 className="text-violet-700">Guide</h2>
              </div>
            )}
            {isGuide && license && (
              <div className="flex items-center gap-2">
                <GrLicense size={30} />
                <h2 className="text-violet-700">License: {license}</h2>
              </div>
            )}
            {!isGuide && (
              <div className="flex items-center gap-2">
                <FaPersonWalkingLuggage size={30} />
                <h2 className="text-violet-700">Guides</h2>
              </div>
            )}
          </div>
        </div>
      </div>
      {offers.map((offer) => {
        return <div className="text-white">{offer.title}</div>
      })}
    </div>
  )
}
