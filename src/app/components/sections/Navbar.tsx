"use client"
import React, { useState } from "react"
import Logo from "../ui/Logo"
import ThemeSwitch from "../ui/ThemeSwitch"
import Link from "next/link"
import { usePathname } from "next/navigation"

const NavLinks = [
  {
    name: "About",
    link: "/",
  },
  {
    name: "Works",
    link: "/works",
  },
  {
    name: "Contact",
    link: "/contact",
  },
]

function Navbar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="sticky top-0 bg-white/30 dark:bg-black/30 backdrop-blur-[10px] z-40 ">
      <nav role="navigation"aria-label="Main menu" className="flex justify-between items-center gap-4 container mx-auto py-5 px-5 z-40 ">
        <Logo />
        <ul
          className={`gap-8 lg:gap-16 z-40 ${
            isOpen
              ? "flex flex-col justify-between items-center p-10 w-screen gap-16 bg-whiteaccent dark:bg-black absolute top-0 left-0"
              : "hidden"
          }  md:flex-row    md:flex`}
        >
          {NavLinks.map((navlink) => {
             const isActive = pathname.endsWith(navlink.link)
            return (
              <li
                className={`hover:opacity-50 active:translate-y-[1px] ${
                  isActive ? "font-bold" : ""
                }`}
                key={navlink.name}
              >
                <Link href={navlink.link} onClick={() => setIsOpen(false)}>{navlink.name}</Link>
              </li>
            )
          })}
          <div className="block md:hidden">
            <ThemeSwitch />
          </div>
        </ul>
        <button
          className="text-2xl focus:outline-none md:hidden z-50"
          aria-expanded={`${isOpen ? "true" : "false"}`}
          aria-label="menu"
          onClick={toggleMenu}
        >
          <svg
            className="w-7 h-7"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
        <div className="hidden md:block">
          <ThemeSwitch />
        </div>
      </nav>
    </div>
  )
}

export default Navbar
