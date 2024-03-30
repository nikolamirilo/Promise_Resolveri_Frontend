import OfferCard from "@/components/cards/OfferCard"

const Offers = () => {
  return (
    <div className="bg-black py-4">
      <h1 className="pb-6 text-center text-4xl font-bold text-white">Offers</h1>
      <div className="flex min-h-[80vh] w-full flex-wrap items-center justify-center gap-5">
        {/* <div className="relative flex h-full  w-full flex-row flex-wrap items-center justify-center gap-6 py-10">
        {data.offers.map((category) => {
          return (
            <CategoryCard
              key={category.id}
              title={category.title}
              image={`${category.image}`}
              link={"/offers/" + category.id}
            />
          )
        })}
      </div> */}
        <OfferCard />
        <OfferCard />
        <OfferCard />
        <OfferCard />
        <OfferCard />
      </div>
    </div>
  )
}

export default Offers
