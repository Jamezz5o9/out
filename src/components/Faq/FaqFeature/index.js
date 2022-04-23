import React from "react";
import One from "../../../assets/images/box1.svg";
import Two from "../../../assets/images/box2.svg";
import Three from "../../../assets/images/box3.svg";
import Four from "../../../assets/images/box4.svg";
import Five from "../../../assets/images/box5.svg";
import Six from "../../../assets/images/box6.svg";
import Seven from "../../../assets/images/box7.svg";
import Eight from "../../../assets/images/box8.svg";
import {
  FeatureSection,
  FeatureContainer,
  FeatureWrapper,
  FeatureWrap,
  FeatureMenu,
  Img1,
  Img2,
  Img3,
  Img4,
  Img5,
  Img6,
  Img7,
  Img8,
  FP,
  FS,
} from "./FeatureElements";

const FaqFeature = () => {
  return (
    <FeatureSection>
      <FeatureContainer>
        <FeatureWrapper>
          <FeatureWrap>
            <FeatureMenu>
              <FP>Avaiable between 8AM to 6PM WAT</FP>
              <FS>
                <span></span> Unavailable
                <Img1 src={One} alt="Image one" />
                <Img2 src={Two} alt="Image two" />
                <Img3 src={Three} alt="Imgage three" />
                <Img4 src={Four} alt="Image four" />
                <Img5 src={Five} alt="Image five" />
                <Img6 src={Six} alt="Image six" />
                <Img7 src={Seven} alt="Image seven" />
                <Img8 src={Eight} alt="Image eight" />
              </FS>
            </FeatureMenu>
          </FeatureWrap>
          <FeatureWrap>
            <p>rentgageinc@gmail.com</p>
          </FeatureWrap>
          <FeatureWrap>
            <p>07042547946</p>
          </FeatureWrap>
          <FeatureWrap>
            <p>07032300911</p>
          </FeatureWrap>
        </FeatureWrapper>
      </FeatureContainer>
    </FeatureSection>
  );
};

export default FaqFeature;
