import { styled } from "styled-components";
import { Container } from "../style/theme";

export const HomeContainer = styled(Container)`
  display: flex;
  background: ${({ bg }) => (bg ? bg : "#FFFDF6")};
  justify-content: space-between;
  align-items: flex-start;
  padding-top: 96px;
  padding-bottom: 96px;

  @media screen and (max-width: 640px) {
    flex-direction: column;
    padding: 0;
  }
`;

export const HomeTextBox = styled.div`
  text-align: left;
  max-width: 456px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  flex-wrap: wrap;
  flex: 1;

  @media screen and (max-width: 768px) {
    gap: 10px;
    max-width: 100%;
    text-align: center;
    padding: 24px 16px;
  }
`;

export const HomeImgBox = styled.div`
  order: 1;
  flex: 1;
`;

export const HomeTitle = styled.h1`
  color: #101828;
  font-size: 36px;
  font-weight: 700;
  line-height: 44px;
  letter-spacing: -0.72px;

  @media screen and (max-width: 768px) {
    color: #101828;
    font-size: 20px;
    font-weight: 600;
    line-height: 22px;
  }
`;

export const HomeDescription = styled.p`
  color: rgba(71, 84, 103, 0.7);
  font-size: 16px;
  font-weight: 400;
  line-height: 170%;

  @media screen and (max-width: 768px) {
    color: #475467;
  }
`;

export const FullImgContainer = styled.div`
  display: block;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const MobileImgContainer = styled(Container)`
  display: none;

  @media screen and (max-width: 768px) {
    padding: 18px 16px 32px;
    display: block;
    width: 100%;
    background-color: #fff;
    order: 1;
  }
`;

export const FixedSizeBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1200px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;
