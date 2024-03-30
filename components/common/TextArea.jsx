const TextArea = ({ textAreaRef, name, label, isRequired }) => {
  return (
    <>
      <label htmlFor={name} className="block text-base font-medium leading-5 text-white">
        {label}
      </label>
      <div className="mt-1">
        <textarea
          required={isRequired}
          ref={textAreaRef}
          id={name}
          name={name}
          rows={6}
          className="placeholder-text-violet-600 duration-400 flex w-full rounded-md border-none bg-zinc-800 px-3 py-2 text-sm  text-white  
          shadow-[0px_0px_1px_1px_var(--violet-700)] transition file:border-0 file:bg-transparent 
          file:text-sm file:font-medium  placeholder:text-violet-400 focus-visible:outline-none
           focus-visible:ring-[2px]
           focus-visible:ring-violet-600
           disabled:cursor-not-allowed disabled:opacity-50 group-hover/input:shadow-none"
        />
      </div>
    </>
  )
}

export default TextArea
