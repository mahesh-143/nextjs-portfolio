import { inter } from "@/app/components/utils/fonts"
import Image from "next/image"
import React from "react"

const projectScreenshots = [
  "thematickhome.webp",
  "thematickthemes.webp",
  "thematickpost.webp",
  "thematickuser.webp",
]

function thematick() {
  return (
    <div>
      <h2
        className={`${inter.className} font-bold text-5xl md:text-6xl text-center pt-5 md:pt-10`}
      >
        Thematick
      </h2>
      <p className="text-center mb-16">Aug, 2021 - Apr, 2021</p>

      <div className="flex flex-col md:flex-row gap-8 justify-between">
        <div className="flex flex-col gap-5 md:max-w-sm lg:max-w-[650px]">
          <p>
            "Thematick" is a dynamic web application designed to provide users
            with a platform to present their thoughts, ask questions, and engage
            in discussions related to their favorite themes
          </p>
          <p>
            Web app offers theme-based discussions with features like theme
            creation, post creation, commenting and user profiles.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <p>
            Role :{" "}
            <span className="font-bold">
              Full Stack Developer
            </span>
          </p>
          <p>
            Tech Stack :{" "}
            <span className="font-bold">
              React, Chakra-UI, Express Js, Prisma, Postgres
            </span>
          </p>
          <p>
            Github :{" "}
            <a className="font-bold underline" href="https://github.com/mahesh-143/thematik-discussion-forum" target="_blank">
             https://github.com/mahesh-143/thematik-discussion-forum
            </a>
          </p>
        </div>
      </div>
      <h3
        className={`${inter.className} font-bold text-3xl mt-20 md:text-4xl mb-10 text-center`}
      >
        Screenshots
      </h3>
      <div className="flex flex-wrap gap-9 justify-center">
        {projectScreenshots.map((screenshot) => {
          return (
            <Image
              key={screenshot}
              src={`/project/thematick/${screenshot}`}
              alt="Thematick Screenshot"
              width={720}
              height={420}
              className="rounded-xl border border-black/10  dark:border-white/10"
            />
          )
        })}
      </div>
    </div>
  )
}

export default thematick
