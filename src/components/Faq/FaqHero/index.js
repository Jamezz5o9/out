import React from "react";
import Faq from "../../../assets/images/grouptwo.svg";
import {
  FaqHeader,
  FaqContainer,
  FaqWrapper,
  FaqImg,
  Img,
} from "./HeroElements";

const FaqHero = () => {
  return (
    <FaqHeader>
      <FaqContainer>
        <FaqWrapper>
          <h1>Frequently Asked Questions</h1>
          <p>FIND answers to your accomodation problems</p>
        </FaqWrapper>
        <FaqImg>
          <Img src={Faq} alt="Hero Img" />
        </FaqImg>
      </FaqContainer>
    </FaqHeader>
  );
};

export default FaqHero;
