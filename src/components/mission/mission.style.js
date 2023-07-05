import { styled } from "styled-components";
import { Container } from "../style/theme";

export const MissionContainer = styled(Container)`
  position: relative;
  background: #f9fafb;

  @media screen and (max-width: 640px) {
    margin-top: 40px;
  }
`;

export const MissionBox = styled.div`
  padding: 96px 0;
  display: flex;
  gap: 50px;
  align-items: ${(alignItems) => alignItems};
  justify-content: space-between;

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

export const FullContainer = styled.div`
  padding: 0 96px;
  background-color: #fffefa;

  @media screen and (max-width: 640px) {
    padding: 0 16px;
  }
`;

export const MissionTitle = styled.h1`
  color: #101828;
  font-size: 36px;
  line-height: 48px;
  letter-spacing: -0.72px;

  @media screen and (max-width: 640px) {
    font-size: 20px;
    font-weight: 600;
    line-height: 22px;
  }
`;

export const MissionDescription = styled.p`
  color: rgba(16, 24, 40, 0.7);
  font-size: 16px;
  line-height: 170%;
  max-width: 528px;
`;

export const BorderBox = styled.div`
  height: 84px;
  /* display: block; */
  display: flex;
  align-items: center;
  ${({ direction }) => `padding-${direction}`}: 16px;
  ${({ direction }) => `border-${direction}`}: 2px solid #013EBD;

  @media screen and (max-width: 640px) {
    height: auto;
    border: 0;
    padding: 0;
    text-align: center;
    order: -1;
  }
`;

export const ValueContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  margin-top: 42px;

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

export const ReviewContainer = styled(Container)`
  display: flex;
  flex-wrap: wrap;
  gap: 63px;
  justify-content: flex-start;
  padding-top: 54px;
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
  max-width: 374px;
  min-width: 200px;
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
