"use client"
import React, { useState } from "react"
import Logo from "../ui/Logo"
import Link from "next/link"
import ThemeSwitch from "../ui/ThemeSwitch"

const NavLinks = [
  {
    name: "Home",
    link: "#Home",
  },
  {
    name: "About",
    link: "#About",
  },
  {
    name: "Projects",
    link: "#Projects",
  },
  {
    name: "Contact",
    link: "#Contact",
  },
]

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeLink, setActiveLink] = useState("")

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault()
    const href = e.currentTarget.href
    const targetId = href.replace(/.*\#/, "")
    const elem = document.getElementById(targetId)
    elem?.scrollIntoView({
      behavior: "smooth",
    })
    setActiveLink(targetId)
  }

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className="flex justify-between items-center gap-4 container mx-auto py-5 px-5 z-40 sticky top-0 bg-white/30 dark:bg-black/30 backdrop-blur-[10px]">
      <Logo />
      <ul
        className={`gap-8 lg:gap-16 z-40 ${
          isOpen
            ? "flex flex-col justify-between items-center p-10 w-screen gap-16 bg-whiteaccent dark:bg-black absolute top-0 left-0"
            : "hidden"
        }  md:flex-row    md:flex`}
      >
        {NavLinks.map((navlink) => {
          const isActive = navlink.link.replace(/.*\#/, "") === activeLink
          return (
            <li
              className={`hover:opacity-50 active:translate-y-[1px] ${isActive ? "font-bold" : ""}`}
              key={navlink.name}
            >
              <Link href={navlink.link} onClick={handleScroll}>
                {navlink.name}
              </Link>
            </li>
          )
        })}
        <div className="block md:hidden">
          <ThemeSwitch />
        </div>
      </ul>
      <button
        className="text-2xl focus:outline-none md:hidden z-50"
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
  )
}

export default Navbar
