import Image from "next/image"
import Navbar from "./components/sections/Navbar"
import Hero from "./components/sections/Hero"
import ThemeSwitch from "./components/ui/ThemeSwitch"
import About from "./components/sections/About"
import Projects from "./components/sections/Projects"
import Contact from "./components/sections/Contact"
import Footer from "./components/sections/Footer"

export default function Home() {
  return (
    <div className="bg-noise-texture dark:bg-noise-texture-dark text-xl">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}
