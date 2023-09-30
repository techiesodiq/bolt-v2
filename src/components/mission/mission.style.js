import { styled } from "styled-components";
import { Container } from "../style/theme";

export const MarginContainer = styled(Container)`
  margin-top: 150px;
  position: relative;
`;
export const MissionContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  background: #f9fafb;
  justify-content: space-between;
  padding-bottom: 166px;

  @media screen and (max-width: 640px) {
    margin-top: 40px;
  }
`;

export const VisionContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  background: #f9fafb;
  justify-content: space-between;
  align-items: flex-end;
`;

export const MissionWrapper = styled.div`
  text-align: left;
`;

export const MissionTitle = styled.h2`
  color: #101828;
  font-family: ClashSemiBold;
  font-size: 36px;
  line-height: 48px; /* 133.333% */
  letter-spacing: -0.72px;
  margin-bottom: 12px;

  @media screen and (max-width: 640px) {
    font-size: 20px;
    font-weight: 600;
    line-height: 22px;
  }
`;
export const MissionDescription = styled.p`
  color: rgba(16, 24, 40, 0.7);
  font-size: 20px;
  font-weight: 500;
  line-height: 170%; /* 34px */
  max-width: 530px;
`;

export const MissionLine = styled.div`
  width: 84px;
  height: 2px;
  background: #013ebd;
`;

export const MissionBox = styled.div`
  /* align-items: ${(alignItems) => alignItems}; */

  @media screen and (max-width: 640px) {
    display: flex;
    padding: 24px 0;
    flex-direction: column;
    gap: 10px;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
`;

export const BorderBottom = styled.div`
  width: 84px;
  height: 2px;
  background: #013ebd;
  margin-bottom: 39px;
`;

export const ImgWrapper = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: end;
  gap: 54px;
`;

export const Image = styled.img`
  border-radius: 16px;
`;

export const FullContainer = styled.div`
  padding: 0 96px;
  background-color: #fffefa;

  @media screen and (max-width: 640px) {
    padding: 0 16px;
  }
`;

export const ValueContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  margin-top: 166px;
  max-width: 682px;

  @media Screen and (max-width: 640px) {
    display: flex;
    padding: 24px 16px;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    margin-top: 0;
    text-align: center;
  }
`;

export const ValueDescription = styled.p`
  color: rgba(16, 24, 40, 0.7);
  font-family: Inter;
  font-size: 20px;
  font-weight: 500;
  line-height: 170%;
`;

export const ReviewContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 63px;
  justify-content: flex-start;
  margin-top: 122px;
  padding-bottom: 107px;

  @media screen and (max-width: 640px) {
    display: flex;
    padding-top: 0;
    padding-bottom: 136px;
    flex-direction: column;
    text-align: center;
    gap: 24px;
  }
`;
export const ReviewCard = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  padding: 48px 0 65px 36px;
  /* max-height: 410px; */

  box-shadow: 10px 0px 10px 0px rgba(206, 206, 206, 0.25);
  border-radius: 5px;
  justify-content: flex-start;
  gap: 49px;

  @media screen and (max-width: 640px) {
    width: 100%;
    padding: 0 0 0 0;
    border-radius: 0;
    box-shadow: none;
    gap: 18px;
    align-items: center;
  }
`;
export const ReviewImg = styled.img`
  width: 64px;
  height: 64px;

  @media screen and (max-width: 640px) {
    width: 24px;
    height: 24px;
  }
`;

export const ReviewTextCard = styled.div`
  display: flex;
  width: 332px;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;

  @media screen and (max-width: 640px) {
    align-items: center;
    gap: 10px;
    width: 100%;
  }
`;

export const ReviewTitle = styled.h3`
  color: #101828;
  font-size: 24px;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: -0.24px;

  @media screen and (max-width: 640px) {
    font-size: 20px;
    line-height: 20px;
    letter-spacing: -0.2px;
  }
`;
export const ReviewText = styled.p`
  color: rgba(16, 24, 40, 0.7);
  font-size: 16px;
  font-weight: 400;
  line-height: 170%;

  @media screen and (max-width: 640px) {
    color: #475467;
    text-align: center;
    font-size: 16px;
  }
`;
