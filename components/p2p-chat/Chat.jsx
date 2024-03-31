"use client"
import { Inbox, Session } from "@talkjs/react"
import { useCallback } from "react"
import Talk from "talkjs"

const Chat = ({ user, currentUser }) => {
  if (user && currentUser) {
    const syncUser = useCallback(
      () =>
        new Talk.User({
          id: currentUser?.uid,
          name: currentUser?.fullName,
          email: currentUser?.email,
          photoUrl: currentUser?.image,
          welcomeMessage: "Hi!",
          role: "default",
        }),
      []
    )

    const syncConversation = useCallback((session) => {
      // JavaScript SDK code here
      const chatId = `${user?.uid}x${currentUser?.uid}`.split("").sort().join("")
      const conversation = session.getOrCreateConversation(chatId)
      const other = new Talk.User({
        id: user?.uid,
        name: user?.fullName,
        email: user?.email,
        photoUrl: user?.image,
        welcomeMessage: "Hello",
        role: "default",
      })
      conversation.setParticipant(session.me)
      conversation.setParticipant(other)

      return conversation
    }, [])

    return (
      <Session appId="tROJMYXC" syncUser={syncUser}>
        <Inbox className="h-[60vh] w-screen" syncConversation={syncConversation} />
      </Session>
    )
  }
}

export default Chat
