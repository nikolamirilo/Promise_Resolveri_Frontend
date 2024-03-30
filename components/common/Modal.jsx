const Modal = ({ title, mainText, description }) => {
  return (
    <div className="relative z-40 max-h-full w-[90%] max-w-2xl text-xs sm:w-[35rem] md:text-xl">
      {/* <!-- Modal content --> */}
      <div className="relative rounded-lg bg-white shadow dark:bg-gray-700">
        {/* <!-- Modal header --> */}
        <div className="flex items-center justify-between rounded-t border-b p-4 md:p-5 dark:border-gray-600">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{title}</h3>
          <button
            type="button"
            className="ms-auto inline-flex h-8 w-8 items-center justify-center rounded-lg bg-transparent text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
            data-modal-hide="default-modal">
            <svg
              className="h-3 w-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14">
              <path
                stroke="currentColor"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
            <span className="sr-only">Close modal</span>
          </button>
        </div>
        {/* <!-- Modal body --> */}
        <div className="space-y-4 p-4 md:p-5">
          <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">{mainText}</p>
          <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
            {description}
          </p>
        </div>
        {/* <!-- Modal footer --> */}
        <div className="flex items-center rounded-b border-t border-gray-200 p-4 md:p-5 dark:border-gray-600">
          <button
            data-modal-hide="default-modal"
            type="button"
            className="rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Accept
          </button>
          <button
            data-modal-hide="default-modal"
            type="button"
            className="ms-3 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700">
            Decline
          </button>
        </div>
      </div>
    </div>
  )
}

export default Modal
