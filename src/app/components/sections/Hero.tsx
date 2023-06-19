import Image from "next/image"
import React from "react"
import { inter } from "../utils/fonts"
import Button from "../ui/Button"

function Hero() {
  return (
    <div
      id="#Home"
      className="flex flex-col items-center gap-8 relative container mx-auto px-5 h-screen"
    >
      <h1
        className={`${inter.className} text-7xl sm:text-8xl font-bold text-center pt-16 sm:pt-32`}
      >
        Mahesh Odedara
      </h1>
      <p className="max-w-[824px] text-center">
        I am a full-stack developer based in Gujarat, India with a knack for
        creating innovative and efficient web solutions. With a solid foundation
        in both front-end and back-end development, I strive to deliver seamless
        user experiences and robust functionality.
      </p>
      <div className="flex flex-col sm:flex-row gap-7">
        <Button link="#Projects" variant="filled">
          Projects
        </Button>
        <Button link="#About" variant="outlined">
          About me
        </Button>
      </div>
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
