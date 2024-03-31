"use client"
import { Chatbox, Session } from "@talkjs/react"
import { useCallback } from "react"
import Talk from "talkjs"

function ChatComponent() {
  const syncUser = useCallback(
    () =>
      new Talk.User({
        id: "nina",
        name: "Nina",
        email: "nina@example.com",
        photoUrl: "https://talkjs.com/new-web/avatar-7.jpg",
        welcomeMessage: "Hi!",
        role: "default",
      }),
    []
  )

  const syncConversation = useCallback((session) => {
    // JavaScript SDK code here
    const conversation = session.getOrCreateConversation("welcome")

    const other = new Talk.User({
      id: "frank",
      name: "Frank",
      email: "frank@example.com",
      photoUrl: "https://talkjs.com/new-web/avatar-8.jpg",
      welcomeMessage: "Hey, how can I help?",
      role: "default",
    })
    conversation.setParticipant(session.me)
    conversation.setParticipant(other)

    return conversation
  }, [])

  return (
    <Session appId="tROJMYXC" syncUser={syncUser}>
      <Chatbox
        syncConversation={syncConversation}
        style={{ width: "100%", height: "500px" }}></Chatbox>
    </Session>
  )
}

export default ChatComponent
