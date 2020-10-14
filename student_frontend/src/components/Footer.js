import React from "react"
import SocialLinks from "../constants/socialLinks"
import { FooterContainer } from "../elements/FooterElements"
const Footer = () => {
  return (
    <FooterContainer>
      <div className="footer-content">
        <SocialLinks styleClass="footer-links"></SocialLinks>
        <h4>
          copyright&copy; {new Date().getFullYear()} | Elias Gillgren | all rights reserved
        </h4>
      </div>
    </FooterContainer>
  )
}

export default Footer
