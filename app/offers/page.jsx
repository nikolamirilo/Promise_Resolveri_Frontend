import OfferCard from "@/components/cards/OfferCard"
import { fetchData } from "@/helpers/client"

const Offers = async () => {
  const offers = await fetchData("/Offer/all", { method: "GET", cache: "no-store" })
  console.log(offers)
  return (
    <div className="bg-gray-900 py-10">
      <h1 className="pb-16 text-center text-4xl font-bold text-white">Offers</h1>
      <div className="flex min-h-[80vh] w-full flex-wrap items-start justify-center gap-5">
        {offers?.map((offer, idx) => {
          return (
            <OfferCard
              key={idx}
              title={offer.title}
              id={offer.id}
              image={offer.images[0]}
              profileImage={offer.guide.image}
              priceOnline={offer.onlineFee}
              priceLive={offer.liveFee}
              fullName={offer.guide.fullName}
              location={offer.location}
            />
          )
        })}
      </div>
    </div>
  )
}

export default Offers
