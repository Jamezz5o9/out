import styled from "styled-components";

export const FaqHeader = styled.div`
  max-width: 1140px;
  margin: 0 auto;
`;
export const FaqContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
  margin-top: 42px;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;
export const FaqWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  h1 {
    font-style: normal;
    font-weight: 700;
    font-size: 3rem;
    line-height: 1.5;
    color: #0f2f66;
  }

  p {
    font-style: normal;
    font-weight: 500;
    font-size: 1.5rem;
    line-height: 1.5;
    color: #003d99;
  }

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 1rem 2rem;
    h1 {
      font-style: normal;
      font-weight: 700;
      font-size: 2.5rem;
      line-height: 3rem;
      color: #0f2f66;
      margin-bottom: 1rem;
    }

    p {
      font-style: normal;
      font-weight: 500;
      font-size: 1rem;
      line-height: 1.7rem;
      color: #003d99;
    }
  }
`;
export const FaqImg = styled.div`
  margin: 0 auto;
  z-index: -1;

  @media screen and (max-width: 768px) {
    margin: 0 auto;
    width: 70%;
  }
`;
export const Img = styled.img`
  display: flex;
  width: 100%;
  align-items: flex-end;

  @media screen and (max-width: 768px) {
    width: 100%;
    align-items: center;
    justify-content: center;
  }
`;
