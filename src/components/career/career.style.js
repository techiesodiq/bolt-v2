import styled from "styled-components";
import { Container } from "../style/theme";

export const CareerContainer = styled(Container)`
  padding: 0;
  margin: 0;
  overflow-x: hidden;
  text-align: center;
  justify-content: center;
  display: grid;
`;
export const CareerHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-top: 156px;
  gap: 16px;
  margin-bottom: 40px;
`;

export const Title = styled.h2`
  color: #1b1436;
  font-family: ClashRegular;
  font-size: 48px;
  line-height: 150%; /* 72px */
  letter-spacing: -0.96px;
`;
export const Paragraph = styled.p`
  color: #6b7280;
  max-width: 1132px;
  width: 100%;
  text-align: center;
  font-family: Inter;
  font-size: 20px;
  font-weight: 400;
  line-height: 150%; /* 30px */
`;

export const ImgWrapper = styled.div`
  display: flex;
  justify-content: start;
  align-items: flex-start;
  gap: 24px;
  margin-bottom: 140px;
`;

export const Image = styled.img`
  max-width: 100%;
  border-radius: 5px;
`;

export const SubTitle = styled.h2`
  color: #1b1436;
  text-align: center;
  font-family: ClashRegular;
  font-size: 32px;
  line-height: 130%; /* 41.6px */
  letter-spacing: -0.64px;
  margin-bottom: 41px;
`;

export const JobBox = styled.div`
  max-width: 1223px;
  border-bottom: 1px solid #9ca3af;
  display: grid;
  text-align: left;
  align-items: center;
  justify-content: center;
`;

export const TextField = styled.div`
  display: grid;
  gap: 8px;
`;

export const JobTitle = styled.h3`
  color: var(--primary-haiti, #1b1436);
  font-feature-settings: "clig" off, "liga" off;
  font-family: Montserrat;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px; /* 111.111% */
  letter-spacing: -1px;
`;

export const JobText = styled.p`
  font-family: Montserrat;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 170%; /* 27.2px */
`;
