import OfferCard from "@/components/cards/OfferCard"

const Offers = () => {
  return (
    <div className="bg-gray-900 py-4">
      <h1 className="pb-6 text-center text-4xl font-bold text-white">Offers</h1>
      <div className="flex min-h-[80vh] w-full flex-wrap items-center justify-center gap-5">
        <OfferCard
          title="Watch Series 7 GPS, Aluminium Case, Starlight Sport"
          image="https://i.pinimg.com/originals/35/94/79/3594793ee69d85ab8e82e780537fa83e.jpg"
          profileImage="https://i.pinimg.com/originals/35/94/79/3594793ee69d85ab8e82e780537fa83e.jpg"
          priceOnline="5/h"
          priceLive="10/h"
          fullname="Ilija Trifunovic"
          location="Belgrade, Serbia"
        />
      </div>
    </div>
  )
}

export default Offers
