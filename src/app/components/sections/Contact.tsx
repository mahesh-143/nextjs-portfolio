"use client"
import React from "react"
import { inter } from "../utils/fonts"
import { motion } from "framer-motion"

const variants = {
  hidden: { opacity: 0, x: 0, y: 20 },
  enter: { opacity: 1, x: 0, y: 0 },
}

const Contact = () => {
  return (
    <motion.div initial="hidden" animate="enter" transition={{duration: 0.4, type: "easeInOut"}} variants={variants} className="container mx-auto px-5 pt-10" id="Contact">
      <h2
        className={`${inter.className} font-bold text-5xl md:text-6xl text-center mb-20`}
      >
        Contact Me
      </h2>
      <div>
        <form action="" className="flex flex-col gap-1 max-w-3xl mx-auto">
            <label htmlFor="name">name</label>
            <input type="text" name="name" className="mb-6 py-3 pl-3 rounded-xl border-4 border-black dark:border-whiteaccent focus:outline-none"/>

            <label htmlFor="email">email</label>
            <input type="email" name="email" className="mb-6 py-3 pl-3 rounded-xl border-4 border-black dark:border-whiteaccent focus:outline-none"/>

            <label htmlFor="message">message</label>
            <textarea  name="message" className="mb-6 py-3 pl-3 rounded-xl border-4 border-black dark:border-whiteaccent focus:outline-none"/>
        
        <button className="mb-20 border-black border-4 dark:border-white px-12 py-4 rounded-xl font-bold active:translate-y-[1px] bg-black dark:bg-whiteaccent text-whiteaccent dark:text-black hover:bg-transparent hover:dark:bg-transparent hover:text-black hover:dark:text-whiteaccent">
            submit
        </button>
        </form>
      </div>
    </motion.div>
  )
}
export default Contact
