import React from "react"
import Link from "next/link"

const Button = ({
  children,
  variant,
  link,
}: {
  children: React.ReactNode
  variant: "outlined" | "filled"
  link? : string
}) => {
  return (
    <Link
      href={link || "#"}
      className={`${
        variant == "outlined"
          ? "border-4 border-black dark:border-whiteaccent text-black dark:text-whiteaccent hover:bg-black hover:dark:bg-whiteaccent hover:text-whiteaccent hover:dark:text-black"
          : "bg-black dark:bg-whiteaccent hover:bg-transparent  hover:text-black hover:dark:text-whiteaccent"
      }  text-whiteaccent dark:text-black border-black border-4 dark:border-white px-12 py-4 rounded-xl font-bold`}
    >
      {children}
    </Link>
  )
}

export default Button
