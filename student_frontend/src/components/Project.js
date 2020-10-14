import React from "react"
import PropTypes from "prop-types"
import Image from "gatsby-image"
import { FaGithubSquare, FaShareSquare } from "react-icons/fa"
import { ProjectArticle, ProjectInfo, ProjectStack, ProjectLinks } from "../elements/ProjectsElements"
const Project = ({ description, title, github, stack, url, image, index }) => {
  return (
    <ProjectArticle>
      <Image fluid={image.childImageSharp.fluid} className="project-img" />
      <ProjectInfo>
        <h3>{title || "Project"}</h3>
        <p className="project-description">{description}</p>
        <ProjectStack>
          {stack.map(item => {
            return <span key={item.id}>{item.title}</span>
          })}
        </ProjectStack>
        <ProjectLinks>
          <a href={url}>
            <FaShareSquare className="project-icon" />
          </a>
        </ProjectLinks>
      </ProjectInfo>
    </ProjectArticle>
  )
}

/*if you for example forget to set these fields in strapi,
so if you forget to give them values, you will get a error in your console
*/
Project.propTypes = {
  title: PropTypes.string.isRequired,
  git: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.object.isRequired,
  stack: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default Project
