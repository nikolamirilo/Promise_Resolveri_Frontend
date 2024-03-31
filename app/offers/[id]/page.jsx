import Slider from "@/components/Slider"
import Button from "@/components/common/Button"
import { fetchData } from "@/helpers/client"
import Image from "next/image"

const page = async ({ params }) => {
  const singleOffer = await fetchData(`/Offer?id=${params.id}`, {
    method: "GET",
    cache: "no-store",
  })
  if (singleOffer)
    return (
      <div className="flex h-fit min-h-screen items-start justify-center pt-10 text-white md:pt-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="-mx-4 flex flex-col md:flex-row">
            <div className="px-4 md:flex-1">
              <div className="mb-4 h-[460px] rounded-lg bg-gray-700">
                <Slider images={singleOffer.images} />
              </div>
              <div className="-mx-2 mb-4 flex">
                <div className="w-56 px-2">
                  <Button title="Book" />
                </div>
              </div>
            </div>
            <div className="gap-3 px-4 md:flex-1">
              <div className="flex justify-between">
                <h2 className="mb-2 text-2xl font-bold text-white">{singleOffer.title}</h2>
                <div className="flex items-center gap-2">
                  <h2 className="text-xl">Location:</h2>
                  <h2 className="text-2xl">{singleOffer.location}</h2>
                </div>
              </div>
              <div className="mb-5">
                <span className="font-bold text-gray-300">Offer Description:</span>
                <p className="mt-2 text-sm text-gray-300">{singleOffer.description}</p>
              </div>
              <div className="relative h-24 w-24 rounded-full">
                <Image
                  fill
                  class="rounded-full object-cover object-center"
                  src={singleOffer.guide.image}
                  alt="User image"
                />
              </div>
              {/* zvezde i ocena i fullname */}
              <div className="flex items-center pt-4">
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
                  4.0
                </span>
              </div>
              <h3 className="pt-2 text-xl font-semibold text-white">
                {singleOffer.guide.fullName}
              </h3>
              <div className="my-4 flex gap-4">
                {singleOffer.liveFee != null && (
                  <div className="flex flex-col items-center">
                    <h3 className="text-lg">Online:</h3>
                    <span class="text-3xl font-bold text-gray-900 dark:text-white">
                      {singleOffer.liveFee}
                      <sup className="text-base">$/h</sup>
                    </span>
                  </div>
                )}
                {singleOffer.onlineFee != null && (
                  <div className="flex flex-col items-center">
                    <h3 className="text-lg">Live:</h3>
                    <span class="text-3xl font-bold text-gray-900 dark:text-white">
                      {singleOffer.onlineFee}
                      <sup className="text-base">$/h</sup>
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default page
