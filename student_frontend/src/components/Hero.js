import React from "react"
import Image from "gatsby-image"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"
import SocialLinks from "../constants/socialLinks"
import { HeroHeader, HeroCenter, HeroInfo } from "../elements/HeaderElements"
// ...GatsbyImageSharpFluid

const query = graphql`
  {
    file(relativePath: { eq: "profile-pic.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const Hero = () => {
  const {
    file: {
      childImageSharp: { fluid },
    },
  } = useStaticQuery(query)

  // console.log(data)

  return (
    <HeroHeader>
      <HeroCenter>
        <HeroInfo>
        <Image fluid={fluid} className="hero-img" />
          <h1>ELIAS GILLGREN</h1>
          <p>Probably the best coder in the world</p>
        </HeroInfo>
      </HeroCenter>
    </HeroHeader>
  )
}
export default Hero
