import Image from "next/image"

const OfferCard = ({ title, priceOnline, priceLive, fullname, image, profileImage, location }) => {
  return (
    <div class="flex max-w-3xl flex-row items-center rounded-lg border border-gray-200 bg-white text-white shadow dark:border-gray-700 dark:bg-gray-800">
      <div className="relative h-full min-h-96 w-96 rounded-t-lg bg-cover bg-center">
        <Image
          fill
          class="rounded-s-lg object-cover object-center p-0.5"
          src={image}
          alt="product image"
        />
      </div>

      <div class="m-5 flex flex-col items-start">
        <h5 class="pb-4 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h5>
        <h4 class="flex items-center gap-2 pb-4 text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
          <span className="text-base">Location:</span>
          {location}
        </h4>
        <div className="relative h-24 w-24 rounded-full">
          <Image
            fill
            class="rounded-full object-cover object-center"
            src={profileImage}
            alt="product image"
          />
        </div>
        {/* zvezde i ocena i fullname */}
        <h3 className="py-4 text-xl font-semibold text-white">{fullname}</h3>
        <div className="flex items-center justify-center">
          {/* zvezde */}
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
            5.0
          </span>
        </div>

        <div className="flex w-full items-center justify-between pt-2">
          <div className="flex gap-4">
            <div className="flex flex-col items-center">
              <h3 className="">online:</h3>
              <span class="text-3xl font-bold text-gray-900 dark:text-white">
                <sup className="">$</sup>
                {priceOnline}
              </span>
            </div>
            <div className="flex flex-col items-center">
              <h3 className="italc">live:</h3>
              <span class="text-3xl font-bold text-gray-900 dark:text-white">
                <sup className="">$</sup>
                {priceLive}
              </span>
            </div>
          </div>
          <a
            href="#"
            class="self-end rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Book
          </a>
        </div>
      </div>
    </div>
  )
}

export default OfferCard
