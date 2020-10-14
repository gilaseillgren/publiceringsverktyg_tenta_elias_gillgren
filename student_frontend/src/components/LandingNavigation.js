import React from "react"
import Title from "./Title"
import { Link } from "gatsby"
import options from "../constants/landingOptions"
import { LandingSection, LandingText, LandingNavigation, NavBox } from "../elements/LandingElements"

const LandingOptions = () => {
  return (
    <LandingSection>
      <Title title="More than just a coder" />
      <LandingText>
        <p>
        My name is Elias Gillgren, I'm 22 years old and born in Lidköping, Sweden. But at the moment I live and play bandy in Motala.
        <br/><br/>
        I am employed by the IT company "Impleo IT Solution" in Motala as a graphic designer and tester, there I also make new layouts for mobile apps and computer applications.
        <br/><br/>
        I have always liked to create and invent all sorts of things. But it's in the digital medias I can express my ideas and creativity. I think it's really cool that you can affect a user with design! And that's the reason why I want to work as a webdesigner. 
        </p>
      </LandingText>
      <LandingNavigation>
        {options.map(service => {
          //  destructure
          const { id, page, title } = service

          return (
            <Link to={`/${page}`} key={id}>
                <NavBox>
                    <h4>{title}</h4>
                </NavBox>
            </Link>
          )
        })}
      </LandingNavigation>
    </LandingSection>
  )
}

export default LandingOptions
