import React from "react"
import Logo from "../components/ui/Logo"
import { FaArrowLeft } from "react-icons/fa"
import ThemeSwitch from "../components/ui/ThemeSwitch"
import Footer from "../components/sections/Footer"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <div className="sticky top-0 bg-white/30 dark:bg-black/30 backdrop-blur-[10px] z-40 ">
        <nav className="flex justify-between items-center gap-4 container mx-auto py-5 px-5 z-40 ">
          <Logo />
          <ThemeSwitch />
        </nav>
      </div>
      <section className="container mx-auto px-5">{children}</section>
      <Footer />
    </div>
  )
}
