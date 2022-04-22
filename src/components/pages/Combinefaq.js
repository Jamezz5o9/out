import React from "react";
import Accordion from "../Faq/Accordion/Accordion";
import Faq from "../Faq/Accordion/Faq";
import FaqFeature from "../Faq/FaqFeature";
import FaqHero from "../Faq/FaqHero";
import FaqInfo from "../Faq/FaqInfo";

const Combinefaq = () => {
  return (
    <div>
      <FaqHero />
      <FaqFeature />
      <Faq />
      <Accordion />
      <FaqInfo />
    </div>
  );
};

export default Combinefaq;
