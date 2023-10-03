import { styled } from "styled-components";
import { Container } from "../style/theme";

export const ContactContainer = styled.div`
  display: grid;
  gap: 48px;

  @media screen and (max-width: 768px) {
    display: block;
  }
`;

export const TouchContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 96px;
  text-align: center;
  gap: 12px;

  @media screen and (max-width: 768px) {
    padding-top: 60px;
    padding-bottom: 45px;
  }
`;

export const TouchHeading = styled.p`
  color: #013ebd;
  font-size: 16px;
  font-weight: 500;
  line-height: 30px;
  letter-spacing: -0.32px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export const TitleBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 26px;

  @media screen and (max-width: 768px) {
    gap: 16px;
  }
`;

export const TouchTitle = styled.h1`
  color: #101828;
  font-size: 48px;
  font-weight: 700;
  line-height: 72px;
  letter-spacing: -0.96px;

  @media screen and (max-width: 768px) {
    color: #101828;
    font-size: 36px;
    font-weight: 600;
    line-height: 40px;
    letter-spacing: -0.72px;
  }
`;

export const TouchDescription = styled.p`
  color: #475467;
  font-size: 20px;
  font-weight: 400;
  line-height: 170%;

  @media screen and (max-width: 768px) {
    font-weight: 400;
    font-size: 20px;
    line-height: 30px;
  }
`;
export const ImgContainer = styled(Container)`
  display: block;
  margin: 0 auto;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export const ContactImg = styled.img`
  max-width: 100%;
  margin: 0 auto;
`;
