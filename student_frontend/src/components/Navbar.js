import React from "react"
import { BsGrid3X2Gap } from "react-icons/bs";
import PageLinks from "../constants/links"
import { Nav, NavCenter, NavHeader, HamburgerButton } from "../elements/NavbarElements"
 
const Navbar = ({ toggleSidebar }) => {
  return (
    <Nav>
      <NavCenter>
        <NavHeader>
          <HamburgerButton type="button" styleClass="toggle-btn" onClick={toggleSidebar}>
            <BsGrid3X2Gap />
          </HamburgerButton>
        </NavHeader>
        <PageLinks styleClass="nav-links"></PageLinks>
      </NavCenter>
    </Nav>
  )
}

export default Navbar
