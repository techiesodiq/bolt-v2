import { styled } from "styled-components";
import { Container } from "../style/theme";

export const ServiceBox = styled(Container)`
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 640px) {
    flex-direction: column;
  }
`;

export const ServiceCard = styled.div`
  flex: 1;
`;

export const ServiceTitleBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  padding-top: 90px;
  text-align: left;
  max-width: 471px;

  @media screen and (max-width: 640px) {
    max-width: 100%;
    padding-top: 60px;
  }
`;

export const ServiceTitle = styled.h2`
  color: #101828;
  font-size: 48px;
  font-weight: 700;
  line-height: 54px;
  letter-spacing: -0.96px;

  @media screen and (max-width: 640px) {
    font-size: 36px;
    font-weight: 600;
    line-height: 40px;
    letter-spacing: -0.72px;
  }
`;

export const ServiceDescription = styled.p`
  color: rgba(71, 84, 103, 0.7);
  font-size: 20px;
  font-weight: 400;
  line-height: 170%;

  @media screen and (max-width: 640px) {
    color: #475467;
    font-size: 16px;
    line-height: 30px;
  }
`;

export const FullImgContainer = styled.div`
  display: flex;
  gap: 24px;
  position: relative;
  justify-content: flex-end;
  @media screen and (max-width: 640px) {
    display: none;
  }
`;

export const OfferImg = styled.img`
  border-radius: 6px;
  max-height: 100%;
`;
