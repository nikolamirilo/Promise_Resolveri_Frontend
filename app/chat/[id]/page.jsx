"use client"
import { BACKEND_URL } from "@/constants"
import { useUser } from "@clerk/nextjs"
import { useEffect, useState } from "react"
import io from "socket.io-client"

const page = ({ params }) => {
  const [messages, setMessages] = useState([])
  const [newMessage, setNewMessage] = useState("")
  const { user } = useUser()
  const socket = io(`${BACKEND_URL}/broadcast`)

  useEffect(() => {
    // Listen for incoming messages
    socket.on("receiveMessage", (message) => {
      setMessages((prevMessages) => [...prevMessages, message])
    })
    console.log(messages)
    // Clean up event listener on component unmount
    return () => {
      socket.off("receiveMessage")
    }
  }, [])

  const sendMessage = () => {
    const fullMessage = `${user.id}: ${newMessage}`
    socket.emit("sendMessage", {
      receiverId: "user_2eQcdZb8OdVxl7LqGECTinndZZX",
      message: fullMessage,
    })
  }
  return (
    <div className="mx-auto my-12 flex h-[90vh] w-full flex-1 flex-col justify-between rounded-xl border-2 border-purple-700 pt-12 sm:p-6 md:w-8/12">
      <div className="flex justify-between border-b-2 border-gray-200 py-3 sm:items-center">
        <div className="relative flex items-center space-x-4">
          <div className="relative">
            <span className="absolute bottom-0 right-0 text-green-500">
              <svg width="20" height="20">
                <circle cx="8" cy="8" r="8" fill="currentColor"></circle>
              </svg>
            </span>
            <img
              src="https://images.unsplash.com/photo-1549078642-b2ba4bda0cdb?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144"
              alt=""
              className="h-10 w-10 rounded-full sm:h-16 sm:w-16"
            />
          </div>
          <div className="flex flex-col leading-tight">
            <div className="mt-1 flex items-center text-2xl">
              <span className="mr-3 text-white">Anderson Vanhron</span>
            </div>
            <span className="text-lg text-white">Junior Developer</span>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <button
            type="button"
            className="hover:violet-400 flex flex-row items-center justify-center rounded-xl bg-violet-700 px-4 py-2 text-lg text-white">
            View profile
          </button>
        </div>
      </div>
      <div
        id="messages"
        className="scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-violet-7ighter scrollbar-w-2 scrolling-touch flex flex-col space-y-4 overflow-y-auto p-3">
        <div className="chat-message">
          <div className="flex items-end">
            <div className="order-2 mx-2 flex max-w-xs flex-col items-start space-y-2 text-base">
              <div>
                <span className="inline-block rounded-lg rounded-bl-none bg-gray-300 px-4 py-2 text-gray-600">
                  Can be verified on any platform using docker
                </span>
              </div>
            </div>
            <img
              src="https://images.unsplash.com/photo-1549078642-b2ba4bda0cdb?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144"
              alt="My profile"
              className="order-1 h-6 w-6 rounded-full"
            />
          </div>
        </div>
        <div className="chat-message">
          <div className="flex items-end justify-end">
            <div className="order-1 mx-2 flex max-w-xs flex-col items-end space-y-2 text-base">
              <div>
                <span className="inline-block rounded-lg rounded-br-none bg-violet-700 px-4 py-2 text-white ">
                  Your error message says permission denied, npm global installs must be given root
                  privileges.
                </span>
              </div>
            </div>
            <img
              src="https://images.unsplash.com/photo-1590031905470-a1a1feacbb0b?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144"
              alt="My profile"
              className="order-2 h-6 w-6 rounded-full"
            />
          </div>
        </div>
      </div>
      <div className="mb-2 border-t-2 border-gray-200 px-4 pt-4 sm:mb-0">
        <div className="relative flex">
          <span className="absolute inset-y-0 flex items-center">
            <button
              type="button"
              className="inline-flex h-12 w-12 items-center justify-center rounded-full text-gray-500 transition duration-500 ease-in-out hover:bg-gray-300 focus:outline-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-6 w-6 text-gray-600">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"></path>
              </svg>
            </button>
          </span>
          <input
            value={newMessage}
            onChange={(e) => {
              setNewMessage(e.target.value)
            }}
            type="text"
            placeholder="Write your message!"
            className="w-full rounded-md bg-gray-200 py-3 pl-12 text-gray-600 placeholder-gray-600 focus:placeholder-gray-400 focus:outline-none"
          />
          <div className="absolute inset-y-0 right-0 hidden items-center sm:flex">
            <button
              type="button"
              onClick={sendMessage}
              className="inline-flex items-center justify-center rounded-lg bg-violet-700 px-4 py-3 text-white transition duration-500 ease-in-out hover:bg-violet-700 focus:outline-none">
              <span className="font-bold">Send</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="ml-2 h-6 w-6 rotate-90 transform">
                <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page
