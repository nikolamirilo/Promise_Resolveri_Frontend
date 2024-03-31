import OffersContainer from "@/components/OffersContainer"
import { fetchData } from "@/helpers/client"

const Offers = async () => {
  const offers = await fetchData("/Offer/all", { method: "GET", cache: "no-store" })
  console.log(offers)
  return (
    <div className="bg-gray-900 py-10">
      <OffersContainer offers={offers} title="Offers" />
    </div>
  )
}

export default Offers
