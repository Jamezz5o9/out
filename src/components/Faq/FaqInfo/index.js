import React from "react";
import { InfoSection, InfoContainer, InfoWrapper } from "./InfoElements";

const FaqInfo = () => {
  return (
    <InfoSection>
      <InfoContainer>
        <InfoWrapper>
          <h1>Still have questions?</h1>
          <p>
            If you cannot find an answer to your question in our FAQs, you can
            always contact us at <span>rentgageinc@gmail.com</span> or{" "}
            <span>07042547946.</span> We will answer you shortly.
          </p>
        </InfoWrapper>
      </InfoContainer>
    </InfoSection>
  );
};

export default FaqInfo;
