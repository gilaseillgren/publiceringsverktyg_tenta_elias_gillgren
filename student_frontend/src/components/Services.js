import React from "react"
import Title from "./Title"
import services from "../constants/services"
import { ServiceSection, ServiceCenter, ServiceBox  } from "../elements/ServiceElements"

const Services = () => {
  return (
    <ServiceSection>
      <Title title="Can I help you?" />
      <ServiceCenter>
        {services.map(service => {
          //  destructure
          const { id, icon, title, text } = service

          return (
            <ServiceBox>
              {icon}
              <h4>{title}</h4>
              <p>{text}</p>
            </ServiceBox>
          )
        })}
      </ServiceCenter>
    </ServiceSection>
  )
}

export default Services
