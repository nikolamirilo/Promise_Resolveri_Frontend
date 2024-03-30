const Checkbox = ({ inputRef, name, label }) => {
  return (
    <div className="relative left-1 flex items-center">
      <input
        ref={inputRef}
        id={name}
        type="checkbox"
        className="dark:placeholder-text-violet-600 duration-400 flex h-4 w-4 cursor-pointer rounded-md border-none bg-gray-50 px-3 py-2  text-sm  text-white shadow-input 
          transition file:border-0 file:bg-transparent file:text-sm 
          file:font-medium placeholder:text-violet-400  focus-visible:outline-none focus-visible:ring-[2px]
           focus-visible:ring-violet-400 disabled:cursor-not-allowed
           disabled:opacity-50
           group-hover/input:shadow-none dark:bg-zinc-800 dark:text-white dark:shadow-[0px_0px_1px_1px_var(--violet-700)] dark:focus-visible:ring-violet-600"
      />
      <label htmlFor={name} className="ms-2 text-base font-medium leading-5 text-white">
        {label}
      </label>
    </div>
  )
}

export default Checkbox
