import styled from "styled-components";

export const FeatureSection = styled.div`
  max-width: 1140px;
  margin: 0 auto;
  width: 100%;
  margin-top: -4rem;
  z-index: 1;

  @media screen and (max-width: 768px) {
    max-width: 400px;
    margin: 0 auto;
    margin-top: -1.75rem;
  }
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

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 300px;
    width: 315px;
    margin: 0 auto;
    background: #dce2ff;
    border: 1px solid #005ce6;
    box-sizing: border-box;
    box-shadow: 0px 4px 4px rgba(15, 47, 102, 0.08);
    border-radius: 5px;
  }
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

  @media screen and(max-width: 768px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    p {
      color: #0f2f66;
      font-size: 1rem;
      line-height: 1.5;
      border-bottom: 1px solid #0f2f66;
      padding-bottom: 0;
    }
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

  @media screen and (max-width: 768px) {
    margin: 0 auto;
    max-width: 314px;
  }
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
export const Img1 = styled.img`
  position: absolute;
  width: 165.16px;
  height: 166.82px;
  left: -12rem;
  border-radius: 50%;
  bottom: -20rem;
  background: rgba(226, 195, 208, 0.15);
  z-index: -1;
`;
export const Img2 = styled.img`
  position: absolute;
  width: 247.74px;
  height: 250.23px;
  left: 50rem;
  border-radius: 50%;
  bottom: -15rem;
  background: rgba(0, 92, 230, 0.05);
  z-index: -1;

  @media screen and (max-width: 768px) {
    position: absolute;
    width: 165.16px;
    height: 166.82px;
    left: 6rem;
    border-radius: 50%;
    bottom: -18rem;
    background: rgba(0, 92, 230, 0.05);
    z-index: -1;
  }
`;
export const Img3 = styled.img`
  position: absolute;
  width: 82.58px;
  height: 83.41px;
  left: 60rem;
  border-radius: 50%;
  bottom: -40rem;
  background: rgba(0, 92, 230, 0.05);
  @media screen and (max-width: 768px) {
    z-index: -1;
    display: none;
  }
`;
export const Img4 = styled.img`
  position: absolute;
  width: 82.58px;
  height: 83.41px;
  left: 20rem;
  border-radius: 50%;
  bottom: -60rem;
  background: rgba(0, 92, 230, 0.05);

  @media screen and (max-width: 768px) {
    z-index: -1;
    display: none;
  }
`;
export const Img5 = styled.img`
  position: absolute;
  width: 165.16px;
  height: 166.82px;
  border-radius: 50%;
  bottom: -90rem;
  left: 60rem;
  background: rgba(226, 195, 208, 0.15);
  @media screen and (max-width: 768px) {
    z-index: -1;
    display: none;
  }
`;
export const Img6 = styled.img`
  position: absolute;
  width: 165.16px;
  height: 166.82px;
  border-radius: 50%;
  bottom: -110rem;
  left: -10rem;
  background: rgba(226, 195, 208, 0.15);
  @media screen and (max-width: 768px) {
    z-index: -1;
    display: none;
  }
`;
export const Img7 = styled.img`
  position: absolute;
  width: 247.74px;
  height: 250.23px;
  border-radius: 50%;
  bottom: -70rem;
  left: -15rem;
  background: rgba(0, 92, 230, 0.05);
  @media screen and (max-width: 768px) {
    z-index: -1;
    display: none;
  }
`;
export const Img8 = styled.img`
  position: absolute;
  width: 82.58px;
  height: 83.41px;
  left: 70rem;
  border-radius: 50%;
  bottom: -120rem;
  background: rgba(0, 92, 230, 0.05);
  @media screen and (max-width: 768px) {
    z-index: -1;
    display: none;
  }
`;

export const General = styled.div`
  position: absolute;
  color: #000000;
  font-size: 1.1rem;
  font-weight: bold;
  bottom: -26rem;
  left: -5rem;
  border-left: 3px solid #0f2f66;
  height: 50px;
  padding-left: 1rem;
  padding-top: 1rem;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
