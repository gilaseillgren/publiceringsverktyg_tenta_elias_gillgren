import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Title from "../components/Title"
import Image from "gatsby-image"
import { Link } from "gatsby"
import Services from "../components/Services"
import Jobs from "../components/Jobs"
import ReactMarkdown from "react-markdown"
import SEO from "../components/SEO"
import { FiArrowUpRight } from "react-icons/fi";
import { AboutPage, AboutCenter, AboutStack, AboutText, CvButton } from "../elements/AboutElements"

// ...GatsbyImageSharpFluid
const About = ({
  data: {
    about: { nodes },
  },
}) => {
  //console.log(nodes)
  const { info, stack, title, image } = nodes[0]
  return (
    <Layout>
      <SEO title="About" description="About me" />
      <Image fluid={image.childImageSharp.fluid} className="about-img" />
      <AboutPage>
        <AboutCenter>
          <AboutText>
            <Title title={title} textAlign="center"/>
            <ReactMarkdown source={info} />
            <AboutStack>
              <h3>Check out my stack</h3>
              {stack.map(item => {
                return <span key={item.id}>{item.title}</span>
              })}
            </AboutStack>
            <CvButton>
              <a href="https://eliasgillgren.se/cv/" target="_blank">
                My CV
                <FiArrowUpRight />
              </a>
            </CvButton>
          </AboutText>
        </AboutCenter>
      </AboutPage>
        <Jobs />
        <Services />
    </Layout>
  )
}

export const query = graphql`
  {
    about: allStrapiAbout {
      nodes {
        stack {
          id
          title
        }
        title
        info
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

export default About
