"use client"

const Button = ({ title, type, className }) => {
  return (
    <button
      className={`flex h-12 w-40 flex-row items-center justify-center rounded-2xl bg-violet-600 px-4 py-2 text-white ${type != "normal" && "font-bold uppercase"} hover:bg-violet-400 ${className}`}>
      {title}
    </button>
  )
}

export default Button
