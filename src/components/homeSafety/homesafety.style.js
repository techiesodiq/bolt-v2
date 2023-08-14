import styled from "styled-components";
import { Container } from "../style/theme";

export const SafetyContainer = styled(Container)`
  padding-top: 96px;
  padding-bottom: 48px;

  @media screen and (max-width: 640px) {
    padding: 32px 0;
    text-align: left;
  }
`;

export const SafetyWrapper = styled.div`
  text-align: left;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin-top: 63px;
`;

export const LeftBox = styled.div`
  display: grid;
  gap: 78px;
`;

export const RightBox = styled.div`
  display: grid;
  grid-template-rows: repeat(2, 417px);
  gap: 20px;
`;

export const TextWrapper = styled.div`
  display: grid;
  gap: 20px;
  max-width: 507px;
  width: 100%;
`;

export const SafetyTitle = styled.h3`
  color: #101828;
  font-family: "ClashSemiBold";
  font-size: 36px;
  line-height: 44px; /* 122.222% */
  letter-spacing: -0.72px;
`;

export const SafetySubTitle = styled.h4`
  color: #013ebd;
  font-family: ClashMedium;
  font-size: 24px;
  line-height: 44px; /* 183.333% */
  letter-spacing: -0.48px;
`;

export const SafetyDescription = styled.p`
  color: #475467;
  font-family: Inter;
  font-size: 20px;
  font-weight: 400;
  line-height: 170%; /* 34px */
`;

export const SafetyKitImg = styled.img`
  max-width: 100%;
  z-index: 1;
`;

export const ImgGrid = styled.div`
  display: grid;
  grid-template-columns: 1.2fr 2fr;
  gap: 20px;
`;
