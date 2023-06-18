"use client"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false)
  const { systemTheme, theme, setTheme } = useTheme()
  const currentTheme = theme === "system" ? systemTheme : theme

  const handleClick = () => {
    theme == "dark" ? setTheme("light") : setTheme("dark")
  }
  useEffect(() => {
    setMounted(true)
  }, [])
  if (!mounted) {
    return null
  }
  return (
    <span
      onClick={handleClick}
      className="border border-black dark:border-whiteaccent rounded-md p-1"
    >
      {theme}
    </span>
  )
}

export default ThemeSwitch
