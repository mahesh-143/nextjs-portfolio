"use client"
import React from "react"
import { inter } from "../utils/fonts"
import ProjectCard from "../ui/ProjectCard"
import { projects } from "@/app/data/projects"
import { motion } from "framer-motion"

function Projects() {
  return (
    <motion.div initial={{opacity: 0, x: 0, y: 20}} animate={{opacity: 1, x: -0, y:0}} transition={{duration: 0.4, type:"easeInOut"}} className="container mx-auto px-5 pt-10" id="Projects">
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
    </motion.div>
  )
}

export default Projects
