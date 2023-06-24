import React from "react"
import { projects } from "../data/projects"
import ProjectCard from "../components/ui/ProjectCard"

function page() {
  return (
    <div className="container mx-auto px-5">
      <div className="flex flex-wrap gap-9 justify-center mt-10">
        {projects.map((project) => {
          return <ProjectCard key={project.id} {...project} />
        })}
      </div>
    </div>
  )
}

export default page
