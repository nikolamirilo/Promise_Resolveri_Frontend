"use client"

export default function ImageInput({ imagesInput, handleInputImageChange, multiple, title }) {
  return (
    <div className="w-full py-2">
      <div
        id="image-preview"
        className="mx-auto mb-4 w-full cursor-pointer items-center rounded-lg border-2 border-dashed border-gray-400 bg-gray-900 p-6 text-center">
        <input
          id="upload"
          type="file"
          className="hidden"
          accept="image/*"
          ref={imagesInput}
          onChange={handleInputImageChange}
          multiple={multiple}
        />
        <label htmlFor="upload" className="cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="mx-auto mb-4 h-8 w-8 text-white">
            <path
              strokeLinejoin="round"
              d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
            />
          </svg>
          <h5 className="mb-2 text-xl font-bold tracking-tight text-white">{title}</h5>
          <p className="text-sm font-normal text-white md:px-6">
            Choose photo size should be less than <b className="text-white">2mb</b>
          </p>
        </label>
      </div>
    </div>
  )
}
