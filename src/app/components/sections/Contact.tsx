"use client"
import React from "react"
import { inter } from "../utils/fonts"
import { motion } from "framer-motion"
import { FaPaperPlane } from "react-icons/fa"
import { useForm, ValidationError } from "@formspree/react"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

const variants = {
  hidden: { opacity: 0, x: 0, y: 20 },
  enter: { opacity: 1, x: 0, y: 0 },
}

const Contact = () => {
  const [state, handleSubmit] = useForm(process.env.NEXT_PUBLIC_FORM as string)
  if (state.succeeded) {
    toast.success("Email sent successfully!!!", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    })
  }

  return (
    <motion.div
      initial="hidden"
      animate="enter"
      transition={{ duration: 0.4, type: "easeInOut" }}
      variants={variants}
      className="container mx-auto px-5 pt-10"
      id="Contact"
    >
      <h2
        className={`${inter.className} font-bold text-5xl md:text-6xl text-center mb-14`}
      >
        Contact Me
      </h2>
      <p className="mb-8 text-center max-w-3xl mx-auto">
        I am available for exciting Full-stack development opportunities. Get in
        touch today!
      </p>
      <a
        href="mailto:maheshodedara13@yahoo.com?subject=FromPortfolio&body=message%20goes%20here"
        className="text-center mx-auto font-bold py-2 px-2 mb-8 max-w-fit border-4 border-black dark:border-whiteaccent rounded-xl flex items-center gap-2"
      >
        <FaPaperPlane />
        <span>maheshodedara13&#64;yahoo.com</span>{" "}
      </a>
      <div>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-1 max-w-3xl mx-auto"
        >
          <label htmlFor="name">name</label>
          <input
            required
            type="text"
            name="name"
            id="name"
            className="mb-6 py-3 pl-3 rounded-xl border-4 border-black dark:border-whiteaccent focus:outline-none"
          />

          <label htmlFor="email">email</label>
          <input
            required
            type="email"
            name="email"
            id="email"
            className="mb-6 py-3 pl-3 rounded-xl border-4 border-black dark:border-whiteaccent focus:outline-none"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />

          <label htmlFor="message">message</label>
          <textarea
            required
            name="message"
            id="message"
            className="mb-6 py-3 pl-3 rounded-xl border-4 border-black dark:border-whiteaccent focus:outline-none"
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />

          <button type="submit" className="mb-20 border-black border-4 dark:border-white px-12 py-4 rounded-xl font-bold active:translate-y-[1px] bg-black dark:bg-whiteaccent text-whiteaccent dark:text-black hover:bg-transparent hover:dark:bg-transparent hover:text-black hover:dark:text-whiteaccent">
            submit
          </button>
          <ValidationError errors={state.errors} />
          <ToastContainer />
        </form>
      </div>
    </motion.div>
  )
}
export default Contact
