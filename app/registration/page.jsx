import RegisterUser from "@/components/forms/RegisterUser"
import { fetchData } from "@/helpers/client"
import { currentUser } from "@clerk/nextjs"

const page = async () => {
  const clerkUser = await currentUser()
  const uid = clerkUser?.id
  const user = await fetchData(`/User?uid=${uid}`, { method: "GET" })

  return <RegisterUser user={user} />
}

export default page
