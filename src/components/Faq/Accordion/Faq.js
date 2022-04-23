import React from "react";
import styled from "styled-components";

const Container = styled.div`
  max-width: 1140px;
  margin-top: 8rem;
  margin-bottom: 5rem;
  margin-left: 6rem;

  @media screen and (max-width: 768px) {
    width: 80%;
    margin: 0 auto;
    max-width: 600px;
  }
`;
const Ideal = styled.div`
  text-align: left;

  h1 {
    color: #0f2f66;
    font-size: 2rem;
  }

  p {
    color: #0f2f66;
  }

  @media screen and (max-width: 768px) {
    text-align: center;
    margin-top: 5rem;
    margin-bottom: -1rem;
    h1 {
      color: #0f2f66;
      font-size: 1.5rem;
    }

    p {
      color: #0f2f66;
      margin-top: 0.3rem;
    }
  }
`;

const Faq = () => {
  return (
    <Container>
      <Ideal>
        <h1>Frequently Asked Questions (FAQs)</h1>
        <p>We have provided answers to the most frequently asked questions.</p>
      </Ideal>
    </Container>
  );
};

export default Faq;
