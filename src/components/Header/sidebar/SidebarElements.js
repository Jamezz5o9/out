import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import { Link as LinkR } from "react-router-dom";

export const SidebarContainer = styled.aside`
  display: none;
  @media screen and (max-width: 768px) {
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    background: #fff;
    display: grid;
    align-items: center;
    top: 0;
    left: 0;
    transition: 0.3s ease-in-out;
    opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
    top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
  }
`;

export const CloseIcon = styled(FaTimes)`
  @media screen and (max-width: 768px) {
    color: #003d99;
  }
`;

export const Icon = styled.div`
  @media screen and (max-width: 768px) {
    position: absolute;
    right: 1.5rem;
    top: 1.2rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
  }
`;

export const SidebarWrapper = styled.div`
  @media screen and (max-width: 768px) {
    color: #224e9c;
  }
`;

export const SidebarMenu = styled.ul`
  @media screen and (max-width: 768px) {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4, 80px);
    text-align: center;
  }

  @media screen and (max-width: 468px) {
    grid-template-rows: repeat(4, 60px);
  }
`;
export const SidebarLink = styled(LinkR)`
  @media screen and (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    transition: 0.2s ease-in-out;
    color: #224e9c;
    cursor: pointer;

    &:hover {
      color: #003d99;
      transition: 0.2s ease-in-out;
    }
  }
`;

export const Link = styled(LinkR)``;

export const NavBtn = styled.nav`
  @media screen and (max-width: 768px) {
    display: flex;
    justify-content: center;
  }
`;
export const NavBtnLink = styled.div`
  @media screen and (max-width: 768px) {
    border-radius: 50px;
    background: #d9e7ff;
    white-space: nowrap;
    padding: 0.8rem 3rem;
    color: #003d99;
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
  }
`;
