import React from "react"
import Title from "./Title"
import Project from "./Project"
import { Link } from "gatsby"
import { ProjectSection, ProjectCenter } from "../elements/ProjectsElements"
const Projects = ({ projects, title, showLink }) => {
  return (
    <ProjectSection>
      <Title title={title} />
      <ProjectCenter>
        {projects.map((project, index) => {
          return <Project key={project.id} index={index} {...project} />
        })}
      </ProjectCenter>
      {showLink && (
        <Link to="/projects" className="btn center-btn">
          All projects
        </Link>
      )}
    </ProjectSection>
  )
}

export default Projects
