const page = async ({ params }) => {
  // const singleOffer = await fetchData("/", )
  return (
    <div className="bg-gray-900 py-8">
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
              <div className="w-1/2 px-2">
                <button className="w-full rounded-full bg-gray-600 px-4 py-2 font-bold text-white hover:bg-gray-700">
                  Add to Cart
                </button>
              </div>
              <div className="w-1/2 px-2">
                <button className="w-full rounded-full bg-gray-700 px-4 py-2 font-bold text-white hover:bg-gray-600">
                  Add to Wishlist
                </button>
              </div>
            </div>
          </div>
          <div className="px-4 md:flex-1">
            <h2 className="mb-2 text-2xl font-bold text-white">Title</h2>
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
              <div className="mr-4 flex items-center gap-2">
                <span className="font-bold text-gray-300">Price:</span>
                <span className="text-xl font-extrabold text-gray-300">$29.99</span>
              </div>
            </div>
            <div className="mb-4">
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
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page
