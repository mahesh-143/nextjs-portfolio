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
    <div className="container mx-auto px-5 pt-10" id="About">
      <h2
        className={`${inter.className} font-bold text-5xl md:text-6xl text-center mb-20`}
      >
        About Me
      </h2>
      <div className="flex flex-col lg:flex-row gap-8 justify-between">
        <div className="flex flex-col lg:max-w-[650px]">
          <h3
            className={`${inter.className} font-bold text-3xl md:text-4xl mb-10`}
          >
            Who am I ?
          </h3>
          <div className="flex flex-col gap-5">
            <p>
              Hey there! I'm Mahesh Odedara, a full stack developer with a
              passion for building awesome web applications. I love diving into
              both the front-end and back-end aspects of development to create
              seamless and user-friendly experiences.
            </p>
            <p>
              With expertise in HTML, CSS, JavaScript, React and Tailwind CSS I
              enjoy crafting visually appealing interfaces that work like a
              charm across different devices. On the back-end, I work with
              Node.js and Express to handle databases and build server
              architectures. I'm all about writing clean and modular code that's
              easy to maintain and scale.
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
