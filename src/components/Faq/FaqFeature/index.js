import React from "react";
import {
  FeatureSection,
  FeatureContainer,
  FeatureWrapper,
  FeatureWrap,
  FeatureMenu,
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
