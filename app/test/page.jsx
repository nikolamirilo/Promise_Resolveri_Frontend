import Translate from "@/components/ai/Translate"
import { fetchData } from "@/helpers/client"
import { auth } from "@clerk/nextjs"

const page = async () => {
  const { userId } = auth()
  const user = await fetchData(`/User?uid=${userId}`, { method: "GET" })
  return <Translate user={user} />
}

export default page
