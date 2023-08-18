import { styled } from "styled-components";
import { Container } from "../style/theme";

export const AboutContainer = styled.div`
  position: relative;
`;

export const AboutBox = styled(Container)`
  display: grid;
  padding-top: 96px;
  /* padding-bottom: 96px; */
  gap: 24px;
  text-align: left;

  @media screen and (max-width: 640px) {
  }
`;

export const ParagraphBox = styled.div`
  margin-top: 70px;
  display: inline-flex;
  padding: 79px;
  justify-content: center;
  align-items: center;
  background: #fffdf6;
`;

export const Title = styled.h2`
  color: #101828;
  font-family: ClashRegular;
  font-size: 48px;
  line-height: 65px; /* 135.417% */
  letter-spacing: -0.96px;
  max-width: 656px;
`;

export const Paragraph = styled.p`
  color: #101828;
  font-family: Inter;
  font-size: 28px;
  font-weight: 400;
  line-height: 170%; /* 47.6px */
`;

export const MobileAbout = styled(Container)`
  display: none;
  padding-top: 60px;
  padding-bottom: 32px;
  gap: 16px;

  @media screen and (max-width: 640px) {
    display: flex;
    flex-direction: column;
  }
`;

export const CenterBox = styled.div`
  text-align: center;
  max-width: 746px;
  display: flex;
  flex-direction: ${({ direction }) => direction};
  gap: ${({ gap }) => gap};
`;

export const CenterTitle = styled.h3`
  color: #013ebd;
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
`;
export const CenterHeader = styled.h1`
  color: #101828;
  font-size: 48px;
  font-weight: 700;
  line-height: 54px;
  letter-spacing: -0.96px;
`;

export const CenterDetails = styled.p`
  color: rgba(16, 24, 40, 0.7);
  font-size: 20px;
  line-height: 170%;
`;

export const MobileTitle = styled.h1`
  color: #101828;
  font-size: 36px;
  font-weight: 600;
  line-height: 40px;
  letter-spacing: -0.72px;
`;

export const MobileDescription = styled.p`
  color: #475467;
  font-size: 16px;
  line-height: 30px;
`;
export const AboutImg = styled.img`
  max-width: 100%;
  @media screen and (max-width: 640px) {
    display: none;
  }
`;

export const MobileContainer = styled(Container)`
  display: block;
`;
export const MobileImg = styled.img`
  display: none;
  @media screen and (max-width: 640px) {
    display: block;
    width: 100%;
    max-width: 100%;
  }
`;
