import OfferCard from "./cards/OfferCard"

const OffersContainer = ({ offers, title }) => {
  if (offers?.length > 0) {
    return (
      <div className="flex w-full flex-col items-center justify-center gap-5">
        <h1 className="pb-10 text-center text-4xl font-bold text-white">{title}</h1>
        {offers?.map((offer, idx) => {
          return (
            <OfferCard
              key={idx}
              title={offer?.title}
              id={offer?.id}
              image={offer?.images[0]}
              profileImage={offer?.guide?.image}
              priceOnline={offer?.onlineFee}
              priceLive={offer?.liveFee}
              fullName={offer?.guide?.fullName}
              location={offer?.location}
            />
          )
        })}
      </div>
    )
  }
}

export default OffersContainer
