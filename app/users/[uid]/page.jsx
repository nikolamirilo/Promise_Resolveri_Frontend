import UserProfile from "@/components/UserProfile"
import { fetchData } from "@/helpers/client"

const UserPage = async ({ params }) => {
  const uid = params.uid
  const user = await fetchData(`/User?uid=${uid}`, { method: "GET" })
  if (user)
    return (
      <UserProfile uid={user.uid} fullName={user.fullName} email={user.email} image={user.image} />
    )
}

export default UserPage
