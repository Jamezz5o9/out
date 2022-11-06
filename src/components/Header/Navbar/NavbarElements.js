import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";

export const Nav = styled.nav`
  background: #ffffff;
  box-shadow: 0 4px 4px rgba(146, 149, 152, 0.16);
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  margin: 0 auto;
  max-width: 80%;
`;

export const NavLogo = styled(LinkR)`
  justify-self: flex-start;
  color: #000;
  cursor: pointer;
  display: flex;
  font-weight: bold;
  text-decoration: none;
  align-items: center;

  @media screen and (max-width: 768px) {
    width: 80px;
  }
`;

export const Img = styled.img`
  width: 13rem;
  margin: 0;
  padding: 0;

  @media screen and (max-width: 768px) {
    width: 8rem;
  }
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    position: absolute;
    right: 0;
    top: 0;
    display: block;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #003d99;
    align-items: center;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -20rem;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export const NavItem = styled.li`
  height: 80px;
  margin-right: 2rem;
`;

export const NavLinks = styled(LinkR)`
  color: #224e9c;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &.active {
    border-bottom: 3px solid #01bf71;
  }
`;
export const Link = styled(LinkR)``;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export const NavBtnLink = styled.div`
  border-radius: 50px;
  background: #d9e7ff;
  white-space: nowrap;
  padding: 10px 22px;
  color: #224e9c;
  font-size: 16px;
  outline: none;
  border: none;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    transform: scale(1.1);
    color: #0f2f66;
  }
`;
