import React from "react"
import Button from "./Button"
import Image from "next/image"

type Props = {
  id: number
  name: string
  description: string
  thumbnail: string
  github: string
  live: string
}

function ProjectCard(props: Props) {
  return (
    <div className="mb-11">
      <Image
        src={props.thumbnail}
        alt="Project Thumbnail"
        width={720}
        height={420}
        className="mb-9"
      />
      <div>
        <h3 className="font-bold text-3xl md:text-4xl mb-6">{props.name}</h3>
        <p className="mb-6 max-w-[630px]">{props.description}</p>
        <div className="flex flex-wrap gap-6 ">
          <Button newTab link={props.github} variant="filled">
            Github
          </Button>
          {
            props.live &&
            <Button newTab link={props.live} variant="outlined">
              Live
            </Button>
          }
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
