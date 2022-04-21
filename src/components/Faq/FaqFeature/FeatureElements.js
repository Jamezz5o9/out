import styled from "styled-components";

export const FeatureSection = styled.div`
  max-width: 1140px;
  margin: 0 auto;
  width: 100%;
  margin-top: -4rem;
  z-index: 1;
`;

export const FeatureContainer = styled.div``;
export const FeatureWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 1rem;
  background: #dce2ff;
  border: 1px solid #005ce6;
  box-sizing: border-box;
  box-shadow: 0px 4px 4px rgba(15, 47, 102, 0.08);
  border-radius: 5px;
  max-width: 1140px;
  height: 184px;
`;

export const FeatureWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  p {
    color: #0f2f66;
    font-size: 1rem;
    line-height: 1.5;
    border-bottom: 1px solid #0f2f66;
    padding-bottom: 0;
  }
`;

export const FeatureMenu = styled.div`
  margin-left: 45px;
  width: 359px;
  height: 90px;
  background: #005ce6;
  border-radius: 5px;
  text-align: left;
  align-items: center;
  padding-top: 15px;
`;

export const FP = styled.div`
  justify-content: center;
  align-items: center;
  margin-left: 16px;
  font-size: 1rem;
  line-height: 1.5;
  color: #fff;
  border: none;
`;

export const FS = styled.div`
  position: relative;
  justify-content: center;
  align-items: center;
  margin-left: 30px;
  font-size: 1rem;
  line-height: 1.5;
  color: #fff;
  border: none;

  span {
    position: absolute;
    border-radius: 50%;
    width: 12px;
    height: 12px;
    background: #ff0000;
    left: -14px;
    bottom: 5px;
  }
`;
