import React from "react"
import Button from "./Button"
import Image from "next/image"
import Link from "next/link"

type Props = {
  id: number
  name: string
  description: string
  thumbnail: string
  link: string
}

function ProjectCard(props: Props) {
  return (
    <Link href={props.link} className="mb-11">
      <Image
        src={props.thumbnail}
        alt="Project Thumbnail"
        width={720}
        height={420}
        className="mb-8"
      />
      <div className="max-w-[720px]">
        <h3 className="font-bold text-3xl md:text-4xl mb-4 text-center">{props.name}</h3>
        <p className="mb-5 text-center">{props.description}</p> 
      </div>
    </Link>
  )
}

export default ProjectCard
