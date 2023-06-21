import React from "react"
import { inter } from "../utils/fonts"
import ProjectCard from "../ui/ProjectCard"
import { projects } from "@/app/data/projects"
function Projects() {
  return (
    <div className="container mx-auto px-5 pt-20" id="Projects">
      <h2
        className={`${inter.className} font-bold text-5xl md:text-6xl text-center mb-20`}
      >
        Featured Work
      </h2>
      <div className="flex flex-wrap gap-9 justify-center">
        {projects.map((project) => {
          return <ProjectCard key={project.id} {...project}/>
        })}
      </div>
    </div>
  )
}

export default Projects
