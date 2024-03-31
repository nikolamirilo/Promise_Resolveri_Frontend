import Image from "next/image"
import Link from "next/link"

const OfferCard = ({
  title,
  priceOnline,
  priceLive,
  fullName,
  image,
  profileImage,
  location,
  id,
}) => {
  return (
    <div className="flex h-96 w-10/12 flex-row items-center gap-4 rounded-lg border border-gray-200 bg-white text-white shadow md:w-[50vw] lg:min-w-[900px] dark:border-gray-700 dark:bg-gray-800">
      <div className="relative h-full w-7/12 rounded-t-lg bg-cover bg-center">
        <Image
          fill
          className="rounded-s-lg object-cover object-center p-0.5"
          src={image}
          alt="product image"
        />
      </div>
      <div className="flex w-5/12 flex-col items-start justify-center pl-5 ">
        <h5 className="pb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h5>
        <h4 className="flex items-center gap-2 pb-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
          <span className="text-lg">Location:</span>
          {location}
        </h4>
        <h3 className="pb-2 text-lg font-semibold text-white">{fullName}</h3>
        <div className="relative h-24 w-24 rounded-full">
          <Image
            fill
            className="rounded-full object-cover object-center"
            src={profileImage}
            alt="product image"
          />
        </div>
        {/* zvezde i ocena i fullname */}

        <div className="my-2 flex items-center justify-center">
          {/* zvezde */}
          <div className="flex items-center">
            <svg
              className="h-4 w-4 text-yellow-300"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20">
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <svg
              className="h-4 w-4 text-yellow-300"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20">
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <svg
              className="h-4 w-4 text-yellow-300"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20">
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <svg
              className="h-4 w-4 text-yellow-300"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20">
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <svg
              className="h-4 w-4 text-gray-200 dark:text-gray-600"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20">
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
          </div>
          <span className="ms-3 rounded bg-blue-100 px-2.5 py-0.5 text-xs font-semibold text-blue-800 dark:bg-blue-200 dark:text-blue-800">
            4.0
          </span>
        </div>

        <div className="flex w-full flex-col items-start justify-start gap-2 pt-2">
          <div className="flex gap-4">
            <div className="flex flex-col items-center">
              <h3 className="">online:</h3>
              <span className="text-2xl font-bold text-gray-900 dark:text-white">
                <sup className="text-base">$/h</sup>
                {priceOnline}
              </span>
            </div>
            <div className="flex flex-col items-center">
              <h3 className="italc">live:</h3>
              <span className="text-2xl font-bold text-gray-900 dark:text-white">
                <sup className="text-base">$/h</sup>
                {priceLive}
              </span>
            </div>
          </div>
          <Link
            href={`/offers/${id}`}
            className="hover:violet-400 flex transform flex-row items-center justify-center rounded-xl bg-violet-700 px-4 py-2 text-lg text-white duration-100 ease-in-out hover:scale-110 hover:bg-gray-600">
            Details
          </Link>
        </div>
      </div>
    </div>
  )
}

export default OfferCard
