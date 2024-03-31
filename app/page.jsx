import Hero from "@/components/Hero"
import OffersContainer from "@/components/OffersContainer"
import { fetchData } from "@/helpers/client"

export default async function Home() {
  const offers = await fetchData("/Offer/all", { method: "GET", cache: "no-store" })
  return (
    <div className="flex flex-col items-center justify-center">
      <Hero />
      <div className="py-10">
        <OffersContainer offers={offers} title="Offers" />
      </div>
    </div>
  )
}
