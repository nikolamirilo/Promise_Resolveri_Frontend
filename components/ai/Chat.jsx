"use client"
import { useUser } from "@clerk/clerk-react"
import { useChat } from "ai/react"
import Image from "next/image"
import { useState } from "react"

export default function Chat() {
  const [type, setType] = useState("insurance_assstant")
  const { messages, input, handleInputChange, setInput, handleSubmit } = useChat({
    api: "/api/chat",
    body: { type: "insurance_assstant" },
  })
  const { user } = useUser()
  console.log(user)
  return (
    <div className="mx-auto flex h-full w-full flex-col justify-center overflow-y-auto px-7 text-lg text-white">
      {messages.length > 0 ? (
        messages.map((m) => (
          <div key={m.id} className="w-full flex-col gap-2 pb-16">
            {m.role !== "user" && (
              <div className="flex items-center justify-start gap-2">
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
            )}
            {m.role === "user" && (
              <div className="flex items-center justify-end gap-2">
                <span className="flex items-center justify-start font-bold text-white">
                  {user?.fullName}
                </span>
                <Image
                  src={user?.imageUrl}
                  alt="Women agent"
                  width={50}
                  height={50}
                  className="!h-12 !w-12 rounded-full"
                />
              </div>
            )}
            <div
              className={`w- flex overflow-y-auto  ${m.role !== "user" ? "justify-start" : "justify-end"}`}>
              <div
                className={`my-5 w-fit rounded-xl bg-white/40 p-2 ${m.role === "user" && "bg-violet-600/40"}`}>
                {m.content}
              </div>
            </div>
          </div>
        ))
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center gap-2">
          <h2 className="mb-2 w-1/2 text-center text-lg font-bold text-white">
            For which topic would you like help from AI assistant?
          </h2>
          <button
            className="w-1/2 rounded-xl bg-violet-700 px-6 py-2 text-lg text-white"
            type="submit"
            onClick={() => {
              setInput("Hey, who are you?")
              setType("travel_assistant")
            }}>
            Travel
          </button>
          <button
            className="w-1/2 rounded-xl bg-violet-700 px-6 py-2 text-lg text-white"
            type="submit"
            onClick={() => {
              setInput("Hey, who are you?")
              setType("restaurants_assistant")
            }}>
            Restaurants
          </button>
          <button
            className="w-1/2 rounded-xl bg-violet-700 px-6 py-2 text-lg text-white"
            type="submit"
            onClick={() => {
              setInput("Hey, who are you?")
              setType("medical_help_assistant")
            }}>
            Medical Help
          </button>
          <button
            className="w-1/2 rounded-xl bg-violet-700 px-6 py-2 text-lg text-white"
            type="submit"
            onClick={() => {
              setInput("Hey, who are you?")
              setType("language_learning_assistant")
            }}>
            Language Learning
          </button>
        </form>
      )}

      <form
        onSubmit={handleSubmit}
        className="absolute bottom-0 left-0 flex h-14 w-full justify-center bg-[#09090B]">
        <input
          className="placeholder-text-violet-600 duration-400 fixed bottom-4 z-50 flex h-10 w-full max-w-lg rounded-xl border border-none border-gray-300 bg-zinc-800 p-2 px-3 py-2 text-lg text-white  shadow-[0px_0px_1px_1px_var(--violet-700)]  
        transition file:border-0 file:bg-transparent 
          file:text-sm file:font-medium  placeholder:text-violet-400 focus-visible:outline-none
           focus-visible:ring-[2px]
           focus-visible:ring-violet-600
           disabled:cursor-not-allowed disabled:opacity-50 group-hover/input:shadow-none"
          value={input}
          placeholder="Say something..."
          onChange={handleInputChange}
        />
      </form>
    </div>
  )
}
