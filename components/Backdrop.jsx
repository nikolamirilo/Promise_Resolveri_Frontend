const Backdrop = ({ open, children, onClose }) => {
  return (
    <div
      className={`${!open && "hidden"} fixed z-10 mx-auto flex h-screen w-screen items-center justify-center overflow-y-auto overflow-x-hidden bg-black bg-opacity-80`}
      onClick={onClose}>
      {children}
    </div>
  )
}

export default Backdrop
