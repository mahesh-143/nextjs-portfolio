import { inter } from "../utils/fonts"
import React from "react"
import SkillBadge from "../ui/SkillBadge"
import SocialLinks from "../ui/SocialLinks"

const skills = [
  "html",
  "css",
  "javascript",
  "react",
  "next js",
  "typescript",
  "express js",
  "python",
]
function About() {
  return (
    <div className="container mx-auto px-5 pt-5">
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
              ipsum autem, numquam molestiae obcaecati laboriosam non voluptatem
              veritatis optio cupiditate quidem exercitationem dolorem
              blanditiis officia hic animi aliquid corrupti perferendis expedita
              pariatur nostrum iure.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
              ipsum autem, numquam molestiae obcaecati laboriosam non voluptatem
              veritatis optio cupiditate quidem exercitationem dolorem
              blanditiis officia hic
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
          <div className="max-w-[650px] flex gap-2 flex-wrap">
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
