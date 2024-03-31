import Chat from "@/components/p2p-chat/Chat"
import { fetchData } from "@/helpers/client"
import { auth } from "@clerk/nextjs"

async function ChatComponent({ params }) {
  const user = await fetchData(`/User?uid=${params.id}`, { method: "GET" })
  const { userId } = auth()
  const currentUser = await fetchData(`/User?uid=${userId}`, { method: "GET" })
  return (
    <div className="flex h-[80vh] w-full items-center justify-center">
      <Chat currentUser={currentUser} user={user} />
    </div>
  )
}

export default ChatComponent
