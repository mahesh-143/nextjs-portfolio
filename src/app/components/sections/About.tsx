import { inter } from "../utils/fonts"
import React from "react"
import SkillBadge from "../ui/SkillBadge"
import SocialLinks from "../ui/SocialLinks"

const skills = [
  "html",
  "css",
  "tailwind css",
  "javascript",
  "typescript",
  "react",
  "next js",
  "react native",
  "framer motion",
  "express js",
  "prisma",
  "postgres",
]
function About() {
  return (
    <div className="container mx-auto px-5 pt-20">
      <h2
        className={`${inter.className} font-bold text-5xl md:text-6xl text-center mb-20`}
      >
        About Me
      </h2>
      <div className="flex flex-col md:flex-row gap-8 justify-between">
        <div className="flex flex-col max-w-[650px]">
          <h3
            className={`${inter.className} font-bold text-3xl md:text-4xl mb-10`}
          >
            Who am I ?
          </h3>
          <div className="flex flex-col gap-5">
            <p>
              As a frontend developer, I love crafting user-friendly and
              visually appealing websites and web applications. I have
              experience in building responsive and accessible interfaces that
              provide seamless experiences across different devices.
            </p>
            <p>
              In addition to my development skills, I'm proficient in using
              Figma, a powerful design tool, to create stunning UI designs. This
              allows me to effectively collaborate with designers, translating
              their visions into pixel-perfect interfaces. platforms.
            </p>
            <p>
              Outside of my professional life, I enjoy playing Chess on
              Chess.com or Lichess. In my free time, you can often find me
              watching Anime or reading Manga/Books.
            </p>
            <SocialLinks />
          </div>
        </div>
        <div>
          <h3
            className={`${inter.className} font-bold text-3xl md:text-4xl mb-10`}
          >
            Skills
          </h3>
          <div className="max-w-[650px] flex gap-1 flex-wrap">
            {skills.map((skill) => {
              return <SkillBadge key={skill}>{"#" + skill}</SkillBadge>
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
