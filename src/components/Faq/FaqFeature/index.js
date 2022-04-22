import React from "react";
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
  Img9,
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
                <Img1 />
                <Img2 />
                <Img3 />
                <Img4 />
                <Img5 />
                <Img6 />
                <Img7 />
                <Img8 />
                <Img9 />
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
