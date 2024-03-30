"use client"
import { useChat } from "ai/react"

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat()
  return (
    <div className="stretch mx-auto flex h-full w-full max-w-md flex-col py-24 text-lg text-white">
      {messages.map((m) => (
        <div
          key={m.id}
          className={`whitespace-pre-wrap ${m.role == "user" ? "text-right" : "text-left"}`}>
          {m.role === "user" ? "User: " : "AI: "}
          {m.content}
        </div>
      ))}

      <form onSubmit={handleSubmit}>
        <input
          className="fixed bottom-0 mb-8 w-full max-w-md rounded border border-gray-300 p-2 text-gray-900 shadow-xl"
          value={input}
          placeholder="Say something..."
          onChange={handleInputChange}
        />
      </form>
    </div>
  )
}
