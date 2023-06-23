import { inter } from "@/app/components/utils/fonts"
import Image from "next/image"
import React from "react"

function thematick() {
  return (
    <div>
      <h2
        className={`${inter.className} font-bold text-5xl md:text-6xl text-center pt-5 md:pt-10`}
      >
        Thematick
      </h2>
      <p className="text-center mb-16">April, 2021 - May, 2021</p>

      <div className="flex flex-col md:flex-row gap-8 justify-between">
        <div className="flex flex-col gap-5 md:max-w-sm lg:max-w-[650px]">
          <p>
            As a frontend developer, I love crafting user-friendly and visually
            appealing websites and web applications. I have experience in
            building responsive and accessible interfaces that provide seamless
            experiences across different devices.
          </p>
          <p>
            In addition to my development skills, I&apos;m proficient in using
            Figma, a powerful design tool, to create stunning UI designs. This
            allows me to effectively collaborate with designers, translating
            their visions into pixel-perfect interfaces. platforms.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <p>
            Tech Stack :{" "}
            <span className="font-bold">
              React, Chakra-UI, Express Js, Prisma, Postgres
            </span>
          </p>
          <p>
            Live : <a className="font-bold underline">thematick.com</a>
          </p>
          <p>
            Github :{" "}
            <a className="font-bold underline">
              github.com/mahesh-143/thematick
            </a>
          </p>
        </div>
      </div>
      <h3 className={`${inter.className} font-bold text-3xl mt-20 md:text-4xl mb-10 text-center`}>
        Screenshots
      </h3>
   <div className="flex flex-wrap gap-9 justify-center">
    <Image 
    src="/thematick.png"
    alt="thematcik screenshot"
    width={720}
    height={420}
    />
    <Image 
    src="/thematick.png"
    alt="thematcik screenshot"
    width={720}
    height={420}
    />
    <Image 
    src="/thematick.png"
    alt="thematcik screenshot"
    loading="lazy"
    width={720}
    height={420}
    />
    <Image 
    src="/thematick.png"
    alt="thematcik screenshot"
    width={720}
    height={420}
    />
   </div>
    </div>
  )
}

export default thematick
