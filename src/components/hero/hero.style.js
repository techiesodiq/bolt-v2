import styled from "styled-components";
import { Container } from "../style/theme";

export const HeroContainer = styled(Container)`
  position: relative;
  background: linear-gradient(180deg, #eaf1ff 0%, rgba(255, 254, 250, 0) 100%);
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  @media screen and (max-width: 768px) {
    display: block;
    padding: 0 16px;
  }
`;

export const LeftHeroBox = styled.div`
  text-align: left;
  margin-top: 76px;
  margin-bottom: 30px;
  width: 100%;

  @media screen and (max-width: 1280px) {
    margin-bottom: 111px;
  }

  @media screen and (max-width: 768px) {
    margin: 0;
    padding-top: 63px;
  }
`;

export const LeftHeroHeader = styled.h1`
  font-family: "ClashRegular";
  font-size: ${({ theme }) => theme.fontSize.header1};
  line-height: ${({ theme }) => theme.lineHeight.header1};
  letter-spacing: -0.96px;
  color: ${({ theme }) => theme.textColor.header};

  @media screen and (max-width: 768px) {
    font-size: ${({ theme }) => theme.fontSize.header3};
    line-height: 40px;
    font-weight: ${({ theme }) => theme.fontWeight.counter};
  }
`;

export const LeftHeroPara = styled.p`
  font-size: 20px;
  line-height: 36px;
  margin: 24px 0;
  max-width: 514px;
  letter-spacing: 0.3px;

  @media screen and (max-width: 768px) {
    font-size: ${({ theme }) => theme.fontSize.body3};
    line-height: 30px;
    margin: 16px 0;
  }
`;

export const RightHeroBox = styled.div`
  margin-top: 96px;
  position: relative;
  display: flex;

  @media screen and (max-width: 768px) {
    margin-top: 76px;
    position: relative;
  }
`;

export const HeroImage = styled.img`
  max-width: 100%;
  border-radius: 6px;
  position: absolute;
  right: 0;
  @media screen and (max-width: 768px) {
    border-radius: 0;
    position: relative;
  }
`;
