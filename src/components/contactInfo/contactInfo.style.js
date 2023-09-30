import { styled } from "styled-components";
import { Container } from "../style/theme";

export const InfoContainer = styled(Container)`
  display: flex;
  background: #f9fafb;
  gap: 24px;
  justify-content: space-between;
  padding-top: 16px;
  padding-bottom: 96px;
  text-align: center;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: center;
  align-items: center;
  max-width: 400px;
  flex-wrap: wrap;

  @media screen and (max-width: 768px) {
    max-width: 100%;
  }
`;

export const InfoImg = styled.img`
  margin-bottom: 20px;
  width: 32px;
  height: 32px;
`;

export const InfoTitle = styled.h3`
  color: #101828;
  font-size: 20px;
  line-height: 30px;
  margin-bottom: 8px;
  font-family: "ClashSemiBold";
`;

export const InfoAddress = styled.p`
  margin-bottom: 16px;
  color: #475467;
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  font-weight: 600;
  color: #013ebd;
`;

export const InfoDescription = styled.p`
  color: #013ebd;
  text-align: center;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
`;
