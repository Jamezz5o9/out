import React from "react";
import { FaBars } from "react-icons/fa";
import Logo from "../../../assets/images/logo.svg";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
  Img,
} from "./NavbarElements";

const NavBar = ({ toggle }) => {
  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to="/">
          <Img src={Logo} alt="Rentgage Logo" />
        </NavLogo>
        <MobileIcon onClick={toggle}>
          <FaBars />
        </MobileIcon>
        <NavMenu>
          <NavItem>
            <NavLinks to="/">Customer</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="/landlord">Landlord</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="/combine">FAQs</NavLinks>
          </NavItem>
        </NavMenu>
        <NavBtn>
          <NavBtnLink>Coming soon</NavBtnLink>
        </NavBtn>
      </NavbarContainer>
    </Nav>
  );
};

export default NavBar;
