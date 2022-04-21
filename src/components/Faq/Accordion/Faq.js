import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: justify;
  justify-content: center;
  margin-top: 2.5rem;
  margin-bottom: -1.5rem;
`;
const Ideal = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  background: #0f2f66;
  box-shadow: 2px 10px 35px 1px rgba(153, 153, 153, 0.3);

  h1 {
    text-transform: uppercase;
    color: #fff;
    font-size: 2rem;

    span {
      text-transform: lowercase;
    }
  }
`;

const Faq = () => {
  return (
    <Container>
      <Ideal>
        <h1>
          faq<span>s</span>
        </h1>
      </Ideal>
    </Container>
  );
};

export default Faq;
