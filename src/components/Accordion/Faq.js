import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: justify;
  justify-content: center;
`;
const Ideal = styled.div`
display: flex;
justify-content center;
align-items: center;
padding: 1.5rem 2.5rem;
box-shadow: 2px 10px 35px 1px rgba(153, 153, 153, 0.3);


    h1{
        text-transform: uppercase;
        color: #0F2F66;
        font-size: 2.5rem;

        span{
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
