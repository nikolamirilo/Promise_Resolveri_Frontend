import Image from "next/image"
import Link from "next/link"

const OfferCard = async ({
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
          alt="City image"
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
        <div className="relative h-24 w-24 rounded-full bg-cover bg-center">
          <Image
            fill
            className="rounded-full object-cover object-center"
            src={profileImage}
            alt="Profile image"
          />
        </div>
        <div className="flex w-full flex-col items-start justify-start gap-2 pt-2">
          <div className="flex gap-4">
            <div className="flex flex-col items-center">
              <h3 className="">Online:</h3>
              <span className="text-2xl font-bold text-gray-900 dark:text-white">
                <sup className="text-base">$/h</sup>
                {priceOnline}
              </span>
            </div>
            <div className="flex flex-col items-center">
              <h3 className="italc">Live:</h3>
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
