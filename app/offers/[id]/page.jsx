import Button from "@/components/common/Button"
import Image from "next/image"

const page = async ({ params }) => {
  // const singleOffer = await fetchData("/", )
  return (
    <div className="bg-gray-900 py-8 text-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="-mx-4 flex flex-col md:flex-row">
          <div className="px-4 md:flex-1">
            <div className="mb-4 h-[460px] rounded-lg bg-gray-700">
              <img
                className="h-full w-full object-cover"
                src="https://cdn.pixabay.com/photo/2020/05/22/17/53/mockup-5206355_960_720.jpg"
                alt="Product Image"
              />
            </div>
            <div className="-mx-2 mb-4 flex">
              <div className="w-56 px-2">
                <Button title="Book" />
              </div>
              {/* <div className="w-1/2 px-2">
                <button className="w-full rounded-full bg-gray-700 px-4 py-2 font-bold text-white hover:bg-gray-600">
                  Add to Wishlist
                </button>
              </div> */}
            </div>
          </div>
          <div className="px-4 md:flex-1">
            <div className="flex justify-between">
              <h2 className="mb-2 text-2xl font-bold text-white">Title</h2>
              <div className="flex items-center gap-2">
                <h2 className="text-xl">Location:</h2>
                <h2 className="text-2xl">Beograd</h2>
              </div>
            </div>
            <div>
              <span className="font-bold text-gray-300">Offer Description:</span>
              <p className="mt-2 text-sm text-gray-300">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed ante justo. Integer
                euismod libero id mauris malesuada tincidunt. Vivamus commodo nulla ut lorem rhoncus
                aliquet. Duis dapibus augue vel ipsum pretium, et venenatis sem blandit. Quisque ut
                erat vitae nisi ultrices placerat non eget velit. Integer ornare mi sed ipsum
                lacinia, non sagittis mauris blandit. Morbi fermentum libero vel nisl suscipit, nec
                tincidunt mi consectetur.
              </p>
            </div>
            <div className="m-4 flex items-center">
              <div className="mr-4 flex items-center gap-2">
                <span className="font-bold text-gray-300">Price:</span>
                <span className="text-xl font-extrabold text-gray-300">$29.99</span>
              </div>
            </div>
            <div className="relative h-24 w-24 rounded-full">
              <Image
                fill
                class="rounded-full object-cover object-center"
                src="https://i.pinimg.com/originals/35/94/79/3594793ee69d85ab8e82e780537fa83e.jpg"
                alt="product image"
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
                5.0
              </span>
            </div>
            <h3 className="pt-2 text-xl font-semibold text-white">Ilija Trifunovic</h3>
            <div className="my-4 flex gap-4">
              <div className="flex flex-col items-center">
                <h3 className="">online:</h3>
                <span class="text-3xl font-bold text-gray-900 dark:text-white">
                  <sup className="">$</sup>
                  5/h
                </span>
              </div>
              <div className="flex flex-col items-center">
                <h3 className="italc">live:</h3>
                <span class="text-3xl font-bold text-gray-900 dark:text-white">
                  <sup className="">$</sup>
                  10/h
                </span>
              </div>
            </div>
            {/* <div className="mb-4">
              <span className="font-bold text-gray-300">Select Color:</span>
              <div className="mt-2 flex items-center">
                <button className="mr-2 h-6 w-6 rounded-full bg-gray-200"></button>
                <button className="mr-2 h-6 w-6 rounded-full bg-red-700"></button>
                <button className="mr-2 h-6 w-6 rounded-full bg-blue-700"></button>
                <button className="mr-2 h-6 w-6 rounded-full bg-yellow-700"></button>
              </div>
            </div>
            <div className="mb-4">
              <span className="font-bold text-gray-300">Select Size:</span>
              <div className="mt-2 flex items-center">
                <button className="mr-2 rounded-full bg-gray-700 px-4 py-2 font-bold text-white hover:bg-gray-600">
                  S
                </button>
                <button className="mr-2 rounded-full bg-gray-700 px-4 py-2 font-bold text-white hover:bg-gray-600">
                  M
                </button>
                <button className="mr-2 rounded-full  bg-gray-700 px-4 py-2 font-bold text-white hover:bg-gray-600">
                  L
                </button>
                <button className="mr-2 rounded-full  bg-gray-700 px-4 py-2   font-bold text-white hover:bg-gray-600">
                  XL
                </button>
                <button className="mr-2 rounded-full  bg-gray-700 px-4 py-2 font-bold text-white hover:bg-gray-600">
                  XXL
                </button>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default page
