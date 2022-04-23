import React from "react";
import SHomeHeroSection from "../SUI/SOrganisms/SHomeHeroSection";
import SHomeFeatureSection from "../SUI/SOrganisms/SHomeFeatureSection";
import SHomeApartmentSection from "../SUI/SOrganisms/SHomeApartmentSection";
import HomeNewsletterSection from "../UI/organisms/HomeNewsLetterSection";

const SHome = () => {
  return (
    <>
      <SHomeHeroSection />
      <SHomeFeatureSection />
      <SHomeApartmentSection />
      <HomeNewsletterSection />
    </>
  );
};

export default SHome;
