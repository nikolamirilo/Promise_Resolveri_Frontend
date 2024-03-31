"use client"
import { Oval } from "react-loader-spinner"

const Loading = () => {
  return (
    <div className="fixed z-30 flex h-screen w-screen items-center justify-center overflow-y-auto overflow-x-hidden ">
      <Oval visible={true} height="80" width="80" color="#4fa94d" ariaLabel="oval-loading" />
    </div>
  )
}

export default Loading
