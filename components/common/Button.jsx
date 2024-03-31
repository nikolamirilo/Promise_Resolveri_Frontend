"use client"

const Button = ({ title, type, className, onClick }) => {
  return (
    <button
      className={`flex flex-row items-center justify-center rounded-xl bg-violet-700 px-6 py-2 text-base font-bold text-white duration-100 ease-in-out hover:scale-[1.03] hover:bg-violet-600 ${className}`}
      onClick={onClick}>
      {title}
    </button>
  )
}

export default Button
