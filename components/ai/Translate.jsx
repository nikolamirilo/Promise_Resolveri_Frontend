"use client"
import { useChat } from "ai/react"
import Image from "next/image"

export default function Translate({ user }) {
  console.log(user)
  if (user) {
    const { messages, input, handleInputChange, handleSubmit } = useChat({
      api: "/api/chat",
      body: { type: "translate_assistant", language: user.languages[0] },
    })
    return (
      <div className="relative mx-auto flex h-[40vh] w-[50vw] flex-col justify-center overflow-y-auto px-7 text-lg text-white">
        {messages.length > 0
          ? messages.map((m) => {
              if (m.role !== "user") {
                return (
                  <div key={m.id} className="w-full flex-col gap-2 pb-16">
                    <div className="flex items-center justify-end gap-2">
                      <Image
                        src="https://cdn3.iconfinder.com/data/icons/customer-services-flat-colorful/2048/4428_-_Female_Agent-512.png"
                        alt="Women agent"
                        width={50}
                        height={50}
                        className="!h-12 !w-12 rounded-full "
                      />
                      <span className="flex items-center justify-start font-bold text-white">
                        AI Assistant
                      </span>
                    </div>
                    <div
                      className={`w- flex overflow-y-auto  ${m.role !== "user" ? "justify-start" : "justify-end"}`}>
                      <div
                        className={`my-5 w-fit rounded-xl bg-white/40 p-2 ${m.role === "user" && "bg-violet-600/40"}`}>
                        {m.content}
                      </div>
                    </div>
                  </div>
                )
              }
            })
          : null}

        <form onSubmit={handleSubmit} className="top-15 relative flex h-14 w-full justify-center">
          <input
            className="text-gray-900 "
            value={input}
            placeholder="Say something..."
            onChange={handleInputChange}
          />
        </form>
      </div>
    )
  }
}
