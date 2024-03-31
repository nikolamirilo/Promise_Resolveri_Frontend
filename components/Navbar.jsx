"use client"
import { UserButton, useUser } from "@clerk/nextjs"
import Link from "next/link"
import { useState } from "react"

const Navbar = () => {
  const [open, setOpen] = useState(false)
  const { user } = useUser()
  return (
    <nav className="fixed top-0 z-40 w-full bg-violet-700">
      <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-8"
              alt="Flowbite Logo"
            />
            <span className="self-center whitespace-nowrap text-2xl font-bold !text-white">FH</span>
          </Link>
        </div>
        <div className="flex items-center space-x-3 md:order-2 md:space-x-0 rtl:space-x-reverse">
          <UserButton afterSignOutUrl="/" />
          {/* Hamburger button */}
          <button
            type="button"
            onClick={() => setOpen(!open)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-white focus:outline-none focus:ring-2 md:hidden"
            aria-controls="navbar-user"
            aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg
              className="h-5 w-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14">
              <path
                stroke="currentColor"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className={`${!open && "hidden"} w-full items-center justify-between md:order-1 md:flex md:w-auto`}
          id="navbar-user">
          <ul className="mt-4 flex flex-col rounded-lg p-4 text-lg md:mt-0 md:flex-row md:space-x-8 md:border-0 md:p-0 rtl:space-x-reverse">
            <li>
              <Link
                href="/offers"
                className="block rounded px-3 py-2 text-white duration-100 ease-in-out hover:scale-110 md:bg-transparent md:p-0"
                aria-current="page">
                Offers
              </Link>
            </li>
            {!user ? (
              <>
                <li>
                  <Link
                    href="/auth/sign-in"
                    className="block rounded px-3 py-2 text-white md:bg-transparent md:p-0"
                    aria-current="page">
                    Sign In
                  </Link>
                </li>
                <li>
                  <Link
                    href="/auth/sign-up"
                    className="block rounded px-3 py-2 text-white hover:text-white md:p-0">
                    Sign Up
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link
                    href={`/users/${user.id}`}
                    className="block rounded px-3 py-2 text-white  duration-100 ease-in-out hover:scale-110 md:p-0">
                    My Profile
                  </Link>
                </li>
                <li>
                  <Link
                    href={`/create-offer`}
                    className="block rounded px-3 py-2 text-white duration-100 ease-in-out hover:scale-110 hover:text-white md:p-0">
                    Create Offer
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
