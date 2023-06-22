import styled from "styled-components";
import { Container } from "../style/theme";

export const HeroContainer = styled(Container)`
  padding-right: 0;
  position: relative;
  background: linear-gradient(180deg, #eaf1ff 0%, rgba(255, 254, 250, 0) 100%);
  display: flex;

  @media screen and (max-width: 768px) {
    display: block;
    padding: 0 16px;
  }
`;

export const LeftHeroBox = styled.div`
  display: block;
  text-align: left;
  margin-top: 90px;
  margin-bottom: 222px;
  flex: 1 1 50%;

  @media screen and (max-width: 1280px) {
    margin-bottom: 111px;
  }

  @media screen and (max-width: 768px) {
    margin: 0;
    padding-top: 63px;
  }
`;

export const LeftHeroHeader = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.header1};
  line-height: ${({ theme }) => theme.lineHeight.header1};
  letter-spacing: ${({ theme }) => theme.letterSpacing.header};
  color: ${({ theme }) => theme.textColor.header};

  @media screen and (max-width: 768px) {
    font-size: ${({ theme }) => theme.fontSize.header3};
    line-height: 40px;
    font-weight: ${({ theme }) => theme.fontWeight.counter};
  }
`;

export const LeftHeroPara = styled.p`
  font-size: ${({ theme }) => theme.fontSize.body2};
  line-height: ${({ theme }) => theme.lineHeight.body2};
  margin: 24px 0;

  @media screen and (max-width: 768px) {
    font-size: ${({ theme }) => theme.fontSize.body3};
    line-height: 30px;
    margin: 16px 0;
  }
`;

export const RightHeroBox = styled.div`
  position: relative;
  display: block;
  flex: 1 1 50%;

  @media screen and (max-width: 768px) {
    margin-top: 76px;
    position: relative;
  }
`;

export const HeroImage = styled.img`
  max-width: 100%;
  border-radius: 6px;
  position: absolute;
  bottom: 0;
  right: 0;
  @media screen and (max-width: 768px) {
    border-radius: 0;
    position: relative;
  }
`;
