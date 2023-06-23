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
    <Link href={`projects/thematick`} className="mb-11 relative">
      <Image
        src={props.thumbnail}
        alt="Project Thumbnail"
        width={720}
        height={420}
        className="mb-8"
      />
      <div className="max-w-[720px]">
        <h3 className="font-bold text-3xl md:text-4xl mb-4 text-center md:text-left">{props.name}</h3>
        <p className="mb-5 text-center md:text-left max-w-2xl">{props.description}</p> 
      </div>
    </Link>
  )
}

export default ProjectCard
