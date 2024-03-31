"use client"
import Image from "next/image"
import { useState } from "react"
import Chat from "./ai/Chat"

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false)
  function handleChatOpening() {
    setIsOpen(!isOpen)
  }

  return (
    <div className="bg-blue absolute bottom-0 right-0 border-2 border-[#09090B]">
      {isOpen ? (
        <div className="fixed bottom-0 right-0 z-40 animate-fade rounded-t-2xl border-2 border-[#09090B]">
          <div className="relative z-50 flex cursor-pointer justify-end rounded-t-2xl bg-[#09090B] py-2">
            <span
              onClick={handleChatOpening}
              className="relative right-5 animate-fade-slower rounded-full bg-violet-700 px-3 py-1 text-2xl text-white">
              X
            </span>
          </div>
          <div className="z-50 h-[75vh] w-[99.8vw] bg-gray-900 md:h-[65vh] md:w-[30vw] md:min-w-[400px]">
            <Chat />
          </div>
        </div>
      ) : (
        <Image
          src="/robot-head.png"
          alt="robot head"
          width="100"
          height="100"
          className="fixed bottom-3 right-3 z-20 h-16 w-16 animate-bounce cursor-pointer md:bottom-10 md:right-10 md:h-24 md:w-24"
          onClick={handleChatOpening}
        />
      )}
    </div>
  )
}

export default ChatBot
