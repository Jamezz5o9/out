import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarLink,
  SidebarMenu,
  NavBtn,
  NavBtnLink,
} from "./SidebarElements";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="/" onClick={toggle}>
            Customer
          </SidebarLink>
          <SidebarLink to="/landlord" onClick={toggle}>
            Landlord
          </SidebarLink>
          <SidebarLink to="/combine" onClick={toggle}>
            FAQs
          </SidebarLink>
        </SidebarMenu>
        <NavBtn>
          <NavBtnLink>Coming soon</NavBtnLink>
        </NavBtn>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
