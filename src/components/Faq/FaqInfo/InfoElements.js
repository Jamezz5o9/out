import styled from "styled-components";

export const InfoSection = styled.div`
  max-width: 1400px;
  background: #fafafa;
  height: 14rem;
  width: 100%;

  @media screen and (max-width: 768px) {
    max-width: 600px;
    width: 100%;
    height: 14rem;
    background: #fafafa;
  }
`;
export const InfoContainer = styled.div`
  padding: 4rem 26rem;
  margin: 0 auto;

  @media screen and (max-width: 768px) {
    margin: 0 auto;
    padding: 2rem;
  }
`;
export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  h1 {
    color: #0f2f66;
    font-size: 2rem;
    line-height: 1.5;
  }
  p {
    color: #3b7980;
    font-size: 1rem;
    line-height: 1.5;
    span {
      color: #005ce6;
      border-bottom: 1px solid #005ce6;
      margin-bottom: 0;
    }
  }

  @media screen and (max-width:768px){
    display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  h1 {
    color: #0f2f66;
    font-size: 1.75rem;
    line-height: 1.5;
  }
  p {
    color: #3b7980;
    font-size: 1rem;
    line-height: 1.5;
    span {
      color: #005ce6;
      border-bottom: 1px solid #005ce6;
      margin-bottom: 0;
    }
  }
`;
