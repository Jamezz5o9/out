import Header from "../UI/organisms/Header";
import { useState } from "react";
import Footer from "../UI/organisms/Footer";
import HomeNewsletterSection from "../UI/organisms/HomeNewsLetterSection";
import NavBar from "../Header/Navbar";
import Combine from "../Header/Combine";

const Layout = ({ children }) => {
  return (
    <div>
      {/* <Header /> */}
      <Combine />
      {/* <NavBar toggle={toggle} /> */}
      {children}
      <HomeNewsletterSection />
      <Footer />
    </div>
  );
};
export default Layout;
