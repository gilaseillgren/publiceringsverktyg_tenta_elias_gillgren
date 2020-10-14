import React from "react"
import Links from "../constants/links"
import { Aside, SideContainer, CloseButton } from "../elements/SidebarElements"
import { FaTimes } from "react-icons/fa"
const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <Aside className={`sidebar ${isOpen ? "show-sidebar" : ""} `}>
      <CloseButton className="close-btn" onClick={toggleSidebar}>
        <FaTimes />
      </CloseButton>
      <SideContainer>
        <Links styleClass={`${isOpen ? "sidebar-links" : ""}`} />
      </SideContainer>
    </Aside>
  )
}

export default Sidebar
