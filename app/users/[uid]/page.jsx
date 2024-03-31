import UserProfile from "@/components/UserProfile"
import { fetchData } from "@/helpers/client"

const UserPage = async ({ params }) => {
  const uid = params.uid
  const user = await fetchData(`/User?uid=${uid}`, { method: "GET", cache: "no-store" })
  if (user)
    return (
      <UserProfile
        uid={user.uid}
        fullName={user.fullName}
        email={user.email}
        image={user.image}
        isGuide={user.isGuide}
        isVerified={user.isVerified}
        license={user.license}
        languages={user.languages}
        offers={user.offers}
        country={user.country}
        age={user.age}
        gender={user.gender}
        description={user.description}
        phoneNumber={user.phoneNumber}
        reviews={user.reviewsOwn}
      />
    )
}

export default UserPage
