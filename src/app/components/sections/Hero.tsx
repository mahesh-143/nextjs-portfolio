"use client"
import Image from "next/image"
import React from "react"
import { inter } from "../utils/fonts"
import Button from "../ui/Button"
import { motion } from "framer-motion"

const variants = {
  hidden: { opacity: 0, x: 0, y: 20 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: -0, y: 20 },
}

function Hero() { 
  return (
    <div
      
      id="Home"
      className="flex flex-col items-center gap-8 relative container mx-auto px-5 h-screen"
    >
      <motion.h1
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={variants}
      transition={{ duration: 0.1, type: "easeInOut" }}
        className={`${inter.className} text-7xl sm:text-8xl font-bold text-center pt-16 sm:pt-32`}
      >
        Mahesh Odedara
      </motion.h1>
      <motion.p initial="hidden" animate="enter" variants={variants} transition={{duration: 0.3, type:"easeInOut"}} className="max-w-[824px] text-center">
        I am a Front-end developer and UI designer based in Gujarat, India with
        a knack for creating innovative and seamless solutions. With a strong
        background in both development and design, I bring a unique blend of
        technical expertise and aesthetic sensibility to my work.
      </motion.p>
      <motion.div initial="hidden" animate="enter" variants={variants} transition={{duration: 0.5, type: "easeInOut"}}className="flex flex-col sm:flex-row gap-7">
        <Button link="#Projects" variant="filled">
          Projects
        </Button>
        <Button link="#About" variant="outlined">
          About me
        </Button>
      </motion.div>
      <Image
        priority
        src="/heroeclipselight.webp"
        alt="Hero Image"
        width={600}
        height={600}
        className="mx-auto -z-10 absolute"
      />
    </div>
  )
}

export default Hero
